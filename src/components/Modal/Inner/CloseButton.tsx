import React from 'react';
import { closeModal } from '../../../pureFunctions/closeModal';
import { RiCloseCircleFill } from 'react-icons/ri';

type CloseButtonPropsType = {
  setActive: (value: boolean) => void;
}

export const CloseButton: React.FC<CloseButtonPropsType> = ({setActive}) => {
  return (
    <button className="menu__close-button" onClick={() => closeModal(setActive)}>
      <RiCloseCircleFill className="menu__close-icon"/>
    </button>
  );
};
