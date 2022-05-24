import React from 'react';

// Types
import { TWorkCardModal } from '../../types/works';

// Types

interface IWorkModalBody {
  workCardData?: TWorkCardModal;
  active: boolean;
}

const WorkModalBody: React.FC<IWorkModalBody> = ({workCardData, active}) => {
  return (
    <div className="work-modal">
      <h2 className="work-modal__title">{workCardData?.title}</h2>
      {
        active ?
          <video className="work-modal__video" src={workCardData?.clientName} poster={workCardData?.descriptionFirst}
                 controls/>
          : <div className="work-modal__video"/>

      }
    </div>
  );
};

export default WorkModalBody;
