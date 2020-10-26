import * as React from "react";
import moment from "moment";
import {Form} from "react-final-form";
import {Registration} from "./registration";

export const RegistrationController = React.memo((props) => {
  const [initialValues, setInitialValues] = React.useState({});

  const handleSubmit = async (values) => {
    await props.addRowToSpreadSheet({
      ...values,
      timeRegistration: moment().format('MMMM DD YYYY, hh:mm'),
    });
  }

  const fileInputRef = React.createRef();

  const handleClickUploadFile = React.useCallback(() => {
    fileInputRef.current.click();
  }, [fileInputRef]);

  /**
   * Обработчик скрытой кнопки закачки файла
   */
  const handleClickHiddenUpload = (event) => {
    const preparedFileForInitialValues = (fileData) => {
      const [nickName, discord, email] = fileData.split(/\r/).join('').split(/\n/);

      setInitialValues({
        nickName,
        discord,
        email
      });
    }

    const fileData = new FileReader();

    fileData.readAsText(event.target.files[0]);
    fileData.onload = () => {
      preparedFileForInitialValues(fileData.result);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialValues}
      render={() => (
        <Registration
          fileInputRef={fileInputRef}
          handleClickUploadFile={handleClickUploadFile}
          handleClickHiddenUpload={handleClickHiddenUpload}
        />
      )}
    />
  )
});
