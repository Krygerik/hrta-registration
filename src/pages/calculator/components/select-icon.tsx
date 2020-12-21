import * as React from 'react';
import {EIcons, IconsPath, TIcons} from "../calculator-constants";
import {Image, Modal} from "semantic-ui-react";

type TProps = {
  icon: TIcons;
  changeIcon: any;
};

export const SelectIcon = (props: TProps) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <Image
        src={IconsPath[props.icon]}
        onClick={() => setOpen(true)}
      />
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={isOpen}
      >
        <Modal.Content image>
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
