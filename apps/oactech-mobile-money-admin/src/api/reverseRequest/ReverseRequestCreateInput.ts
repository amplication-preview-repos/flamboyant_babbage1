import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type ReverseRequestCreateInput = {
  reason?: string | null;
  requestDate?: Date | null;
  status?: "Option1" | null;
  transaction?: TransactionWhereUniqueInput | null;
};
