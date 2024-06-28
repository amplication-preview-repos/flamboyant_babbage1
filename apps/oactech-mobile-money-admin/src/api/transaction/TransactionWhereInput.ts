import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReverseRequestListRelationFilter } from "../reverseRequest/ReverseRequestListRelationFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  receiver?: StringNullableFilter;
  reverseRequests?: ReverseRequestListRelationFilter;
  sender?: StringNullableFilter;
  status?: "Option1";
};
