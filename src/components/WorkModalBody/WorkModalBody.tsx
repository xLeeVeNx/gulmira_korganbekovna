import React from 'react';

// Types
import { TWorkCardModal } from '../../types/works';
import ramilVideo from '../../assets/images/RamilVideo.mp4';
import ramilPhoto from '../../assets/images/Ramil.jpg';

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
        active && workCardData?.projectValue === '' ?
          <iframe className="work-modal__video" src={workCardData?.clientName}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
          : active && workCardData?.projectValue === 'video' ?
            <video className="work-modal__video" controls poster={ramilPhoto} src={ramilVideo}/> :
            <div className="work-modal__video"/>

      }
    </div>
  );
};

export default WorkModalBody;
