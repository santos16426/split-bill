import { Plus, Trash2 } from "lucide-react"
import { useAppContext } from "../context/AppContext"
import AddGroupModal from "./AddGroup";
import { Separator } from "./ui/separator";
import { cn } from "../lib/utils";

const Group: React.FC = () => {
    const { groupContext, activeGroupContext } = useAppContext();
    const { activeGroup, setActiveGroup } = activeGroupContext;
    if (!(groupContext && groupContext.groups && groupContext.groups.length > 0)) return (
        <div className="py-10 text-white px-3">
            <p className="text-lg font-semibold mb-2">No groups yet</p>
            <p className="text-sm">
                Start managing shared expenses by creating a new group. Click the button
                below to get started!
            </p>
            <AddGroupModal triggerNode={
                <button className="mt-4 bg-teal-600 text-white px-3 py-2 text-xs">
                    Add new group
                </button>
            } />

        </div>
    )
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex-row flex justify-between items-center'>
                <p className='text-white font-bold'>Groups</p>
                <AddGroupModal triggerNode={
                    <button className="w-fill px-3 py-2 bg-white bg-opacity-20 rounded-md shadow-md flex flex-row justify-center items-center text-white">
                        <Plus />
                    </button>
                } />
            </div>
            <Separator className='bg-white' />
            {groupContext.groups.map((group, index) => {
                return (
                    <div className={cn('hover:bg-slate-500 hover:p-1 hover:font-bold flex flex-row justify-between text-white cursor-pointer',
                        group.id === activeGroup?.id && 'bg-slate-500 p-1 font-bold'
                    )} key={index}
                        onClick={() => setActiveGroup(group)}
                    >
                        {group.name}
                    </div>
                )
            })}
        </div >
    )
}
export default Group