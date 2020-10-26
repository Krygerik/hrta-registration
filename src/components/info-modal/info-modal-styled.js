import styled from "styled-components";
import infoModal from "./info-modal.png";

export const InfoBottomButtonsStyleWrapper = styled.div`
  margin: 15px 62px;
  display: flex;
  justify-content: flex-end;
`;

export const InfoModalBackgroundStyleWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
`;

export const InfoModalStyleWrapper = styled.div`
  background: no-repeat center url(${infoModal});
  height: 437px;
  width: 700px;
  display: flex;
  flex-direction: column;
  
  h1 {
    margin: 51px 20px 4px 70px;
    color: #294761;
  }
  
  span {
    margin: 20px 40px 116px 260px;
    color: white;
  }
`;
