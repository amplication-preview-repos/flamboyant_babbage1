import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type ReverseRequestWhereInput = {
  id?: StringFilter;
  reason?: StringNullableFilter;
  requestDate?: DateTimeNullableFilter;
  status?: "Option1";
  transaction?: TransactionWhereUniqueInput;
};
