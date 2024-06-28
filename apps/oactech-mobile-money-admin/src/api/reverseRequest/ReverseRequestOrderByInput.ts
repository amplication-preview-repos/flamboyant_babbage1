import { SortOrder } from "../../util/SortOrder";

export type ReverseRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  requestDate?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
