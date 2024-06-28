import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type ReverseRequestUpdateInput = {
  reason?: string | null;
  requestDate?: Date | null;
  status?: "Option1" | null;
  transaction?: TransactionWhereUniqueInput | null;
};
