import * as React from 'react';
import {Button, Grid, Header} from "semantic-ui-react";
import {Form} from "react-final-form";
import {TextInput} from "./components/text-input";
import './App.css';

export const App = React.memo(() => {
  const [initialValues, setInitialValues] = React.useState({});

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  }

  const handleFile = (file) => {
    const fileData = new FileReader();
    fileData.readAsText(file);
    fileData.onload = (e) => {
      const [nickName, discord, email] = fileData.result.split(/\r/).join('').split(/\n/);

      setInitialValues({
        nickName,
        discord,
        email
      });
    }
  }

  const fileInputRef = React.createRef();

  return (
    <div className="page_content">
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Grid centered>
              <Grid.Row>
                <Header
                  content="Регистрация на Рейтинговый турнир III/20"
                />
              </Grid.Row>
              <Grid.Row>
                <TextInput
                  label="Никнейм"
                  name="nickName"
                  type="text"
                  required
                />
              </Grid.Row>
              <Grid.Row>
                <TextInput
                  label="Discord"
                  name="discord"
                  type="text"
                  required
                />
              </Grid.Row>
              <Grid.Row>
                <TextInput
                  label="Email(для отправки отчетов)"
                  name="email"
                  type="text"
                  required
                />
              </Grid.Row>
              <Grid.Row>
                <TextInput
                  label="Желаемое время игры"
                  name="desiredPlayTime"
                  type="text"
                />
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Button
                    content="Загрузить файлом"
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                  />
                  <input
                    ref={fileInputRef}
                    hidden
                    type="file"
                    onChange={e => handleFile(e.target.files[0])}
                  />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Button
                    content="Отправить"
                    type="submit"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </form>
        )}
      />
    </div>
  )
});
