import { ReverseRequestUpdateManyWithoutTransactionsInput } from "./ReverseRequestUpdateManyWithoutTransactionsInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  description?: string | null;
  receiver?: string | null;
  reverseRequests?: ReverseRequestUpdateManyWithoutTransactionsInput;
  sender?: string | null;
  status?: "Option1" | null;
};
