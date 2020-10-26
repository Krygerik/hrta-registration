import * as React from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import credential from './configs/secret-key.json';
import {Registration, InfoModal} from "./components";

const doc = new GoogleSpreadsheet('1leRPa2Xo53Msw9CXu7x9Cnt-U0GxFsYYAN_GWnwUFUo');

export const App = React.memo((props) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const addRowToGoogleSpreadSheet = async (row) => {
    await doc.useServiceAccountAuth(credential);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(row);
  };

  const openSuccessModal = () => {
    setModalVisible(true);
  }

  const closeSuccessModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {
        isModalVisible && (
          <InfoModal
            header="Успешная регистрация"
            content="Вы успешно зарегистрированы в турнире!"
            onCloseRequest={closeSuccessModal}
          />
        )
      }
      <Registration
        openSuccessModal={openSuccessModal}
        addRowToSpreadSheet={addRowToGoogleSpreadSheet}
      />
    </>
  )
});
