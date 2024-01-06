import { ExpenseItem } from "./expenseItem";
import { Member } from "./member";

export type GroupItem = {
  id: number;
  name: string;
  description?: string;
  type: string;
  members: Member[] | [];
  expenses?: ExpenseItem[] | []
};
