import React from "react";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";
import { ArrowDown } from "./ArrowDown";

export const Information: React.FC = () => {
  return (
    <div className="header__box">
      <Subtitle text="Поздравляем с 25 мая!" />

      <Title text="Мы 11б" />

      <ArrowDown />
    </div>
  );
};
