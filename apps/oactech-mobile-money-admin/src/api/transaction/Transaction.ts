import { ReverseRequest } from "../reverseRequest/ReverseRequest";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  receiver: string | null;
  reverseRequests?: Array<ReverseRequest>;
  sender: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
