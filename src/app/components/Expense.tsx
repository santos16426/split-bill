import React from 'react'
import AddExpense from './AddExpense'
import { useAppContext } from '../context/AppContext'

const NoSelectedGroup = () => (
    <div className='flex flex-col h-full py-5 text-white'>
        <p className="text-lg font-semibold mb-2">Ready to track expenses?</p>
        <p className="text-sm">
            To get started, select a group from the list or create a new one.
        </p>
    </div>

)

const NoExpensesAvailable = () => (
    <div className='flex flex-col h-full p-5 text-white'>
        <p className="text-lg font-semibold mb-2">No expenses recorded yet</p>
        <p className="text-sm">
            You can start tracking your expenses by adding them to your groups. Click
            the button below to record your first expense!
        </p>
        <AddExpense triggerNode={
            <button className="w-fit mt-4 bg-teal-600 text-white px-3 py-2 text-xs">
                Add expenses
            </button>} />
    </div>
)
const Expense: React.FC = () => {
    const { activeGroupContext } = useAppContext();
    const { activeGroup } = activeGroupContext
    if (!activeGroup) return <NoSelectedGroup />
    return (
        <NoExpensesAvailable />
    )
}
export default Expense