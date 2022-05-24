import React, { useState } from "react";

// Functions
import { openModal } from "../../pureFunctions/openModal";
// Functions

interface IWorksCard {
  handleOpenWorkModal: (state: boolean) => void;
  handleSetWorkCardInfo: () => void;
  title: string;
  shortDescription: string;
  clientName: string;
  projectValue: string;
  date: string;
  descriptionFirst: string;
  descriptionSecond: string;
  mainImage: string;
  exampleImageFirst: string;
  exampleImageSecond: string;
}

const WorksCard: React.FC<IWorksCard> = ({
  handleOpenWorkModal,
  handleSetWorkCardInfo,
  title,
  shortDescription,
  mainImage,
}) => {
  const [isCardInfoActive, setIsCardInfoActive] = useState<boolean>(false);

  const handleOpenModal = () => {
    openModal(handleOpenWorkModal);
    handleSetWorkCardInfo();
  };

  return (
    <div
      className="works__card"
    >
      <img
        src={mainImage}
        alt="test"
        className="works__card-image"
      />
      <div className="works__card-info">
        <p className="works__card-title">{title}</p>
        <p className="works__card-text">{shortDescription}</p>
        <button className="works__card-button" onClick={handleOpenModal}>
          Открыть
        </button>
      </div>
    </div>
  );
};

export default WorksCard;
