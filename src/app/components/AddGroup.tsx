import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Separator } from "./ui/separator";
import { GroupItem } from "../types/group";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAppContext } from "../context/AppContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Member } from "../types/member";
const AddGroupModal: React.FC<ModalProps> = ({ triggerNode }) => {
  const { groupContext } = useAppContext();
  const [tempGroup, setTempGroup] = useState<GroupItem | null>(null);
  const [memberName, setMemberName] = useState<string>("");
  const handleChange = (key: string, value: number | string): void => {
    setTempGroup((prevGroup) => {
      if (prevGroup === null) return prevGroup;
      return {
        ...prevGroup,
        [key]: value,
      };
    });
  };
  const handleAddMember = () => {
    if (!memberName) return;
    setTempGroup((prevGroup: GroupItem | null) => {
      if (!prevGroup) return prevGroup;
      return {
        ...prevGroup,
        members: [{ name: memberName, id: prevGroup.members.length + 1 }, ...prevGroup.members],
      };
    });
    setMemberName("");
  };
  const handleRemoveMember = (index: number) => {
    setTempGroup((prevGroup) => {
      if (prevGroup === null) return prevGroup;
      return {
        ...prevGroup,
        members: prevGroup.members.filter((_: Member, i: number) => i !== index),
      };
    });
  };
  const handleSave = () => {
    if (tempGroup) {
      groupContext.setGroup((prevGroups: GroupItem[]) => {
        sessionStorage.setItem(
          "groups",
          JSON.stringify([...prevGroups, tempGroup]),
        );
        return [...prevGroups, tempGroup];
      });
    }
  };
  return (
    <Dialog
      onOpenChange={() =>
        setTempGroup({
          id: groupContext && groupContext.groups && (groupContext?.groups?.length + 1) || 1,
          name: "",
          type: "couple",
          members: [],
        })
      }
    >
      <DialogTrigger asChild>{triggerNode}</DialogTrigger>
      <DialogContent className='w-[500px] bg-secondary text-primary border-0'>
        <DialogHeader>
          <DialogTitle>Add New Group</DialogTitle>
          <DialogDescription>
            <p className='text-primary-muted'>
              Effortlessly create a new group by providing a name and selecting
              members. Start managing shared expenses with ease
            </p>
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>
            Name
          </p>
          <Input
            className='text-black'
            placeholder='Enter group name'
            value={tempGroup?.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2 items-center flex flex-row gap-1'>Description <span className='text-gray-400 text-[.6rem]'>{`(Optional)`}</span></p>
          <textarea
            placeholder='Short description about your group'
            value={tempGroup?.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className='text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>Type</p>
          <Select
            value={tempGroup?.type}
            onValueChange={(e: string): void => handleChange("type", e)}
          >
            <SelectTrigger className='w-[100%] text-black'>
              <SelectValue
                placeholder='What kind of group'
                className='text-black'
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className='font-bold text-black' value='couple'>
                Couple
              </SelectItem>
              <SelectItem className='font-bold text-black' value='group'>
                Group
              </SelectItem>
              <SelectItem className='font-bold text-black' value='home'>
                Home
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator />
        <p className='font-bold'>Members</p>
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>Name</p>
          <div className='flex flex-row gap-2'>
            <Input
              className='text-black'
              placeholder='Member name'
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />
            <button
              className='px-2 bg-blue-600 rounded-md text-secondary p-1 hover:bg-opacity-60'
              onClick={handleAddMember}
            >
              Add
            </button>
          </div>
        </div>
        <>
          <div className='flex flex-col gap-1'>
            {tempGroup && tempGroup?.members.length > 0 ? (
              tempGroup.members.map((member: Member, index: number) => (
                <>
                  <div
                    key={index}
                    className='flex flex-row justify-between hover:bg-slate-400 hover:bg-opacity-30 hover:text-black text-primary font-bold p-2 rounded-lg'
                  >
                    <p>{member.name}</p>
                    <button
                      className='bg-red-600 rounded-md text-secondary p-1 hover:bg-opacity-60'
                      onClick={() => handleRemoveMember(index)}
                    >
                      <Trash2 size={15} />
                    </button>

                  </div>
                  <Separator />
                </>
              ))
            ) : (
              <p className='text-xs text-primary text-center'>
                No members yet...
              </p>
            )}
          </div>
        </>
        <div className='flex flex-row justify-between'>
          <DialogClose asChild>
            <button
              type='button'
              className='border-2 py-2 px-4 rounded-md transition duration-300  flex flex-col justify-center  items-center'
            >
              Close
            </button>
          </DialogClose>
          <DialogClose>
            <button
              disabled={tempGroup?.name === "" || tempGroup?.members.length === 0}
              type='button'
              onClick={handleSave}
              className='flex flex-row gap-2 bg-blue-600 hover:bg-opacity-70 text-secondary py-2 px-4 rounded-md transition duration-300 justify-center items-center disabled:cursor-not-allowed disabled:bg-opacity-100'
            >
              Save
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default AddGroupModal;
