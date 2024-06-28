import { Transaction } from "../transaction/Transaction";

export type ReverseRequest = {
  createdAt: Date;
  id: string;
  reason: string | null;
  requestDate: Date | null;
  status?: "Option1" | null;
  transaction?: Transaction | null;
  updatedAt: Date;
};
