import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "receiver";

export const TransactionTitle = (record: TTransaction): string => {
  return record.receiver?.toString() || String(record.id);
};
