import AddExpenseModal from "@/app/components/AddExpense";
import { useAppContext } from "@/app/context/AppContext";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";

const SplitBill: React.FC = () => {
  const router = useRouter();
  const { groupContext } = useAppContext();
  const groupId = router.query.groupId;

  let groupIdAsInt: number | undefined;

  if (groupId) {
    groupIdAsInt = parseInt(Array.isArray(groupId) ? groupId[0] : groupId, 10);
  }

  if (
    groupContext.groups &&
    groupContext.groups.filter((group, index) => group.id === groupIdAsInt)
      .length === 0
  )
    return (
      <div className='text-white flex flex-col justify-center items-center text-3xl h-full -mt-32 font-bold'>
        Invalid Group!
      </div>
    );
  return (
    <div className='text-white'>
      <AddExpenseModal
        triggerNode={
          <div className='flex flex-col justify-center'>
            <button className='flex flex-row bg-orange-500 text-xl gap-2 justify-center items-center text-black shadow-lg'>
              Add Expense <Plus />
            </button>
          </div>
        }
      />
    </div>
  );
};
export default SplitBill;
