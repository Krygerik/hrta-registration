import * as React from "react";
import {observer} from "mobx-react";
import {Global} from "../../classes";
import CursorDefaultTexture from './cursor-default.png';
import CursorPointerTexture from './cursor-pointer.png';
import {CursorOverlayContainer, CursorOverlayIndicator} from "./cursor-styled";

/**
 * Компонент отображения курсора
 */
export const Cursor = observer(() => {
  const {graphics} = Global.useContext();
  const cursorIndicators = React.useMemo(() => ({
    'default': CursorDefaultTexture,
    'pointer': CursorPointerTexture,
    'none': null
  }), []);

  const [screenX, setScreenX] = React.useState(0);
  const [screenY, setScreenY] = React.useState(0);

  const documentMouseOverHandler = React.useCallback(() => {
    graphics.cursor = 'default';
  }, [graphics]);

  const documentMouseMoveHandler = React.useCallback((event) => {
    setScreenX(event.clientX - 9);
    setScreenY(event.clientY - 2);
  }, [setScreenX, setScreenY]);

  const documentMouseOutHandler = React.useCallback(() => {
    graphics.cursor = 'none';
  }, [graphics]);

  React.useEffect(() => {
    document.documentElement.addEventListener('mouseover', documentMouseOverHandler);
    document.documentElement.addEventListener('mousemove', documentMouseMoveHandler);
    document.documentElement.addEventListener('mouseout', documentMouseOutHandler);

    return () => {
      document.documentElement.removeEventListener('mouseover', documentMouseOverHandler);
      document.documentElement.removeEventListener('mousemove', documentMouseMoveHandler);
      document.documentElement.removeEventListener('mouseout', documentMouseOutHandler);
    };
  });

  return (
    <CursorOverlayContainer>
      <CursorOverlayIndicator
        style={{
          top: `${screenY}px`,
          left: `${screenX}px`,
          backgroundImage: cursorIndicators[graphics.cursor]
            ? `url('${cursorIndicators[graphics.cursor]}')`
            : 'none',
        }}
      />
    </CursorOverlayContainer>
  );
});