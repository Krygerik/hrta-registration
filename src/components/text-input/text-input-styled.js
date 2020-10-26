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
`;
