import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";

export const ReverseRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReverseRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="reason" source="reason" />
        <TextField label="requestDate" source="requestDate" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="transaction"
          source="transaction.id"
          reference="Transaction"
        >
          <TextField source={TRANSACTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
