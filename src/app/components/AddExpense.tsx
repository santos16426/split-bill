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

const AddExpenseModal: React.FC<ModalProps> = ({ triggerNode }) => {
  const [expenseForm, setExpenseForm] = useState<ExpenseItem>();

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
          <Input className='text-black' placeholder='Enter group name' />
        </div>
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>Description</p>
          <textarea
            placeholder='Short description about your group'
            className='text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
        <div className='flex flex-col font-semibold text-xs'>
          <p className='mb-2'>Type</p>
          <Select
          // value={tempGroup.type}
          // onValueChange={(e: string): void => handleChange("type", e)}
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
              //   disabled={tempGroup.name === "" || tempGroup.members.length === 0}
              type='button'
              //   onClick={handleSave}
              className='flex flex-row gap-2 bg-blue-600 hover:bg-opacity-70 text-white py-2 px-4 rounded-md transition duration-300 justify-center items-center disabled:cursor-not-allowed disabled:bg-opacity-100'
            >
              Save
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddExpenseModal;
