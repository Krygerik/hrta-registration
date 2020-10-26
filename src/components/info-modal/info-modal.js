import * as React from "react";
import {
  InfoBottomButtonsStyleWrapper,
  InfoModalBackgroundStyleWrapper,
  InfoModalStyleWrapper
} from "./info-modal-styled";
import {Button} from "../button";

export const InfoModal = React.memo((props) => {
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, false);
    document.addEventListener("click", handleOutsideClick, false);

    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
      document.removeEventListener("click", handleOutsideClick, false);
    }
  });

  const handleKeyUp = (e) => {
    const keys = {
      27: () => {
        e.preventDefault();
        props.onCloseRequest();
        window.removeEventListener("keyup", handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  const handleOutsideClick = (e) => {
    if (modalRef.current != null) {
      if (!modalRef.current.contains(e.target)) {
        props.onCloseRequest();
        document.removeEventListener("click", handleOutsideClick, false);
      }
    }
  }

  return (
    <InfoModalBackgroundStyleWrapper>
      <InfoModalStyleWrapper ref={modalRef}>
        <h1>{props.header}</h1>
        <span>{props.content}</span>
        <InfoBottomButtonsStyleWrapper>
          <Button
            onClick={props.onCloseRequest}
          >
            Подтвердить
          </Button>
        </InfoBottomButtonsStyleWrapper>
      </InfoModalStyleWrapper>
    </InfoModalBackgroundStyleWrapper>
  );
});
