import styled from 'styled-components';
import HMMATextInput from '../../images/HMM_Input.png';

export const TextInputStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  
  label {
    font-size: 24px;
  }

  input {
    background: no-repeat center url(${HMMATextInput});
    height: 37px;
    width: 280px;
    color: #FFF;
    border: none;
    text-align: center;
    font-size: 20px;
  }
  
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  
  input: focus {
    outline: none;
  }
`;
