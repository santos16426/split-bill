import Dashboard from '@/app/components/Dashboard';
import Group from '@/app/components/Group';
import { useAppContext } from '@/app/context/AppContext';
import { cn } from '@/app/lib/utils';



const App = () => {
  const {settingsContext} = useAppContext();
  return (
      <div className={cn('flex flex-col')}>
        <Group/>
        <div className='mt-10'/>
        <Dashboard/>
      </div>
  );
};

export default App;
