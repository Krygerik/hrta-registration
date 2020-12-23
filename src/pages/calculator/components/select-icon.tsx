import * as React from 'react';
import {EIcons, IconsPath, TIcons} from "../calculator-constants";
import {Image, Modal} from "semantic-ui-react";

type TProps = {
  changeIcon: any;
  icon: TIcons;
  onlyGoblin?: boolean;
};

export const SelectIcon = (props: TProps) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClickIcon = () => {
    if (props.onlyGoblin) {
      return;
    }

    setOpen(true)
  }

  return (
    <>
      <Image
        src={IconsPath[props.icon]}
        onClick={handleClickIcon}
      />
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={isOpen}
        style={{
          backgroundColor: '#e1ac69',
        }}
      >
        <Modal.Content
          image
        >
          {
            Object.values(EIcons).map((icon: TIcons) => (
              <Image
                key={icon}
                src={IconsPath[icon]}
                onClick={() => {
                  props.changeIcon(icon);
                  setOpen(false);
                }}
              />
            ))
          }
        </Modal.Content>
      </Modal>
    </>
  );
}
