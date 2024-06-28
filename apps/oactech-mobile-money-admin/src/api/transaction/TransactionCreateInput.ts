import { ReverseRequestCreateNestedManyWithoutTransactionsInput } from "./ReverseRequestCreateNestedManyWithoutTransactionsInput";

export type TransactionCreateInput = {
  amount?: number | null;
  date?: Date | null;
  description?: string | null;
  receiver?: string | null;
  reverseRequests?: ReverseRequestCreateNestedManyWithoutTransactionsInput;
  sender?: string | null;
  status?: "Option1" | null;
};
