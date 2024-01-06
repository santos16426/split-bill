import { Plus, Trash2 } from "lucide-react"
import { useAppContext } from "../context/AppContext"
import AddGroupModal from "./AddGroup";
import { Separator } from "./ui/separator";
import { cn } from "../lib/utils";

const Group: React.FC = () => {
    const { groupContext, activeGroupContext } = useAppContext();
    const { activeGroup, setActiveGroup } = activeGroupContext;
    if (!(groupContext && groupContext.groups && groupContext.groups.length > 0)) return (
        <div className="py-10 text-primary px-3">
            <p className="text-lg font-semibold mb-2">No groups yet</p>
            <p className="text-sm">
                Start managing shared expenses by creating a new group. Click the button
                below to get started!
            </p>
            <AddGroupModal triggerNode={
                <button className="mt-4 bg-teal-600 text-primary px-3 py-2 text-xs">
                    Add new group
                </button>
            } />

        </div>
    )
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex-row flex justify-between items-center'>
                <p className='text-primary font-bold'>Groups</p>
                <AddGroupModal triggerNode={
                    <button className="w-fill px-3 py-2 bg-white bg-opacity-20 rounded-md shadow-md flex flex-row justify-center items-center text-primary">
                        <Plus />
                    </button>
                } />
            </div>
            <Separator className='bg-primary' />
            <div className="flex flex-col gap-2">
                {groupContext.groups.map((group, index) => {
                    return (
                        <div className={cn('relative hover:bg-slate-400 hover:bg-opacity-30 hover:p-2 hover:font-bold flex flex-row gap-2 text-primary cursor-pointer',
                            group.id === activeGroup?.id && 'bg-slate-400 bg-opacity-30 p-2 px-2 font-bold'
                        )} key={index}
                            onClick={() => setActiveGroup(group)}
                        >
                            <div className={cn("absolute h-full top-0 left-0 z-10 bg-slate-600 w-1", group.id !== activeGroup?.id && 'hidden',)} />
                            {group.name}
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
export default Group