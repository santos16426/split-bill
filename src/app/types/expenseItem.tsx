import { Member } from "./member";

interface PayingMemberType extends Member {
  amount: number;
}
export type ExpenseItem = {
  type: "splitAll" | "oweBy" | "splitAmong" | "payAmount";
  totalAmount: number;
  name: string;
  description?: string;
  paidBy: PayingMemberType[];
  expenseData: string;
  payingMembers: PayingMemberType[];
  receipt?: string;
};
