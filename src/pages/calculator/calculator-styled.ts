import styled from "styled-components";

export const CalculatorMain = styled.div`
  background-color: #e1ac69;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-around;
  width: 100%;
`;

export const CalculatorColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: ${(props: { flexGrow: number } ) => props.flexGrow}
`;

