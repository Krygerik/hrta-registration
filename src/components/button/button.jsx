import * as React from 'react';
import {observer} from 'mobx-react';
import {Global} from '../../classes';
import {StyledButtonContainer, StyledButtonElement, StyledButtonBackground} from './button-styled';

/**
 * Компонент кастомной кнопки
 */
export const Button = observer(
  ({
     className = '',
     onMouseOut = () => {},
     onMouseOver = () => {},
     ...props
   }) => {

    const {graphics} = Global.useContext();

    const buttonMouseOutHandler = (event) => {
      graphics.cursor = 'default';
      onMouseOut(event);
    };

    const buttonMouseOverHandler = (event) => {
      graphics.cursor = 'pointer';
      onMouseOver(event);
    };

    return (
      <StyledButtonContainer className={className}>
        <StyledButtonElement
          onMouseOut={buttonMouseOutHandler}
          onMouseOver={buttonMouseOverHandler}
          {...props}
        />
        <StyledButtonBackground/>
      </StyledButtonContainer>
    );
  });