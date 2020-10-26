import * as React from "react";
import {Grid} from "semantic-ui-react";
import {TextInput} from "../text-input";
import {Button} from "../button";
import {RegistrationStyleWrapper} from "./registration-styled";
import {BottomButtonsStyleWrapper} from "./registration-buttons-styled";

export const Registration = React.memo((props) => (
  <RegistrationStyleWrapper>
    <form onSubmit={props.handleSubmit}>
      <Grid centered>
        <Grid.Row>
          <h1>Регистрация на Рейтинговый турнир III/20</h1>
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
          <BottomButtonsStyleWrapper>
            <Button
              type="button"
              onClick={props.handleClickUploadFile}
            >
              Из файла
            </Button>
            <input
              ref={props.fileInputRef}
              hidden
              type="file"
              onChange={props.handleClickHiddenUpload}
            />
            <Button type="submit">
              Отправить
            </Button>
          </BottomButtonsStyleWrapper>
        </Grid.Row>
      </Grid>
    </form>
  </RegistrationStyleWrapper>
));
