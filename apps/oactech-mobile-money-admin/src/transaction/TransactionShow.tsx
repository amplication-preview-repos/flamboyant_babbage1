import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TRANSACTION_TITLE_FIELD } from "./TransactionTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="receiver" source="receiver" />
        <TextField label="sender" source="sender" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ReverseRequest"
          target="transactionId"
          label="ReverseRequests"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
