import * as React from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import credential from './configs/secret-key.json';
import {Registration} from "./components/registration";

const doc = new GoogleSpreadsheet('1leRPa2Xo53Msw9CXu7x9Cnt-U0GxFsYYAN_GWnwUFUo');

export const App = React.memo((props) => {
  const addRowToGoogleSpreadSheet = async (row) => {
    await doc.useServiceAccountAuth(credential);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(row);
  };

  return (
    <Registration
      addRowToSpreadSheet={addRowToGoogleSpreadSheet}
    />
  )
});
