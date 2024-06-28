import { ReverseRequest as TReverseRequest } from "../api/reverseRequest/ReverseRequest";

export const REVERSEREQUEST_TITLE_FIELD = "id";

export const ReverseRequestTitle = (record: TReverseRequest): string => {
  return record.id?.toString() || String(record.id);
};
