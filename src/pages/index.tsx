
import Expense from '@/app/components/Expense';
import Group from '@/app/components/Group';
import Members from '@/app/components/Members';
import { Separator } from '@/app/components/ui/separator';
import { useAppContext } from '@/app/context/AppContext';
import { cn } from '@/app/lib/utils';

const App = () => {
  const { activeGroupContext } = useAppContext();
  const { activeGroup } = activeGroupContext
  return (
    <div className={cn('flex flex-row justify-between w-full gap-3', !activeGroup && 'justify-center')}>
      <div className={cn('flex flex-col gap-3 mb-5 w-1/3 h-full bg-white bg-opacity-10 p-3 rounded-md shadow-lg')}>
        <Group />
      </div>
      <div className={cn('mb-5 w-full bg-white bg-opacity-30 p-3 rounded-md shadow-lg', !activeGroup ? 'h-full' : 'h-fit')}>
        <Expense />
      </div>
      <div className={cn('mb-5 w-1/3 bg-white bg-opacity-10  h-fit rounded-md shadow-lg transition-max-w duration-500 ease-in-out', !activeGroup ? 'max-w-0 overflow-hidden' : 'max-w-full p-3')}>
        <Members />
      </div>

    </div >
  );
};

export default App;
