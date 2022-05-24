import React from 'react';
import { Text } from './Text';
import { Title } from '../Title/Title';

type RightSidePropsType = {
  text: string;
};

export const RightSide: React.FC<RightSidePropsType> = ({text}) => {
  return (
    <div className="about__right">
      <Title text="О Гульмире Корганбековне"/>

      <div className="about__box">
        <Text content={text}/>
      </div>
    </div>
  );
};
