import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  receiver?: SortOrder;
  sender?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
