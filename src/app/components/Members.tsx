import { Plus } from 'lucide-react'
import React from 'react'
import { Separator } from './ui/separator'
import { useAppContext } from '../context/AppContext';
import { cn } from '../lib/utils';


const Members: React.FC = () => {
    const { activeGroupContext } = useAppContext();
    const { activeGroup } = activeGroupContext;
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-white font-bold'>Members</p>
                <button className="w-fill px-3 py-2 bg-white bg-opacity-20 rounded-md shadow-md flex flex-row justify-center items-center text-white">
                    <Plus />
                </button>
            </div>
            <Separator />
            {activeGroup && activeGroup.members.map((member, index) => {
                return (
                    <div className={cn('hover:bg-slate-300 hover:bg-opacity-50 hover:p-1 hover:font-bold flex flex-row justify-between text-white cursor-pointer',
                        // member.id === activeGroup?.id && 'bg-slate-500 p-1 font-bold'
                    )} key={index}
                    // onClick={() => setActiveGroup(group)}
                    >
                        {member.name}
                    </div>
                )
            })}
        </div>
    )
}
export default Members