import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { ExpenseItem } from "../types/expenseItem";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "@/app/components/ui/button"
import { Calendar } from "@/app/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover"
import { cn } from "../lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import MultipleSelect, { SelectOption } from "./ui/multipleSelect";
const AddExpenseModal: React.FC<ModalProps> = ({ triggerNode }) => {
  const [expenseForm, setExpenseForm] = useState<ExpenseItem | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const options = [
    {
      value: 1,
      label: 'Option 1'
    },
    {
      value: 2,
      label: 'Option 2'
    },
    {
      value: 3,
      label: 'Option 3'
    },
    {
      value: 4,
      label: 'Option 4'
    },
    {
      value: 5,
      label: 'Option 5'
    },
    {
      value: 6,
      label: 'Option 6'
    },
    {
      value: 7,
      label: 'Option 7'
    },
    {
      value: 8,
      label: 'Option 8'
    }
  ]
  const [testMultipleValue, setTestMultipleValue] = useState<SelectOption[]>([])
  const handleChange = (key: string, value: any) => {
    setExpenseForm((prevForm: ExpenseItem | null) => {
      const updatedForm: ExpenseItem = {
        ...prevForm,
        [key]: value,
      };
      return updatedForm;
    });
  };

  const handleSave = () => {
    console.log("Expense Form:", expenseForm);
    // Add your logic for saving the expense data
    // Close the modal or perform other actions as needed
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerNode}</DialogTrigger>
      <DialogContent className='w-[500px] bg-secondary text-primary border-0'>
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogDescription>
            <p className='text-primary-muted'></p>
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>
            Name<span className='text-red-600'>*</span>
          </p>
          <Input
            className='text-primary'
            placeholder='Enter expense name'
            value={expenseForm?.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>Description</p>
          <textarea
            placeholder='Short description about the expense'
            value={expenseForm?.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className='text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>Date</p>
          <Popover open={isPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !expenseForm?.date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {expenseForm?.date ? format(expenseForm?.date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={expenseForm?.date as Date | undefined}
                onSelect={(date) => {
                  handleChange('date', date)
                  setIsPopoverOpen(false)
                }
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>Total</p>
          <Input
            type='number'
            className='text-primary'
            placeholder='Enter total amount'
            value={expenseForm?.totalAmount}
            onChange={(e) => handleChange("total", parseFloat(e.target.value))}
          />
        </div>

        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>Paid By</p>
          {/* Include your multi-select component for paidBy here */}
          <MultipleSelect
            // className="w-full"
            value={testMultipleValue}
            options={options}
            onChange={o => setTestMultipleValue(o)}

          />
        </div>

        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>Split</p>
          <Select
            value={expenseForm?.type}
            onValueChange={(e: string) => handleChange("dropdown", e)}
          >
            <SelectTrigger className='w-[100%] text-primary'>
              <SelectValue placeholder='Select type' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className='font-bold text-primary' value='splitAll'>
                Equally
              </SelectItem>
              <SelectItem className='font-bold text-primary' value='splitAmong'>
                Split among selected members
              </SelectItem>
              <SelectItem className='font-bold text-primary' value='payAmount'>
                Pay full amount
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>Who Will Pay</p>

        </div>
        <Separator />
        <div className='flex flex-row justify-between'>
          <DialogClose asChild>
            <button
              type='button'
              className='border-2 py-2 px-4 rounded-md transition duration-300  flex flex-col justify-center  items-center'
            >
              Close
            </button>
          </DialogClose>
          {/* <DialogClose> */}
          <button
            type='button'
            onClick={handleSave}
            className='flex flex-row gap-2 bg-blue-600 hover:bg-opacity-70 text-white py-2 px-4 rounded-md transition duration-300 justify-center items-center'
          >
            Save
          </button>
          {/* </DialogClose> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddExpenseModal;
