import { Member } from "./member";

interface PayingMemberType extends Member {
  amount: number;
}
export type ExpenseItem = {
  id?: number,
  type?: "splitAll" | "oweBy" | "splitAmong" | "payAmount";
  totalAmount?: number;
  name?: string;
  description?: string;
  paidBy?: PayingMemberType[];
  expenseData?: string;
  payingMembers?: PayingMemberType[];
  receipt?: string;
  date?: Date
};
