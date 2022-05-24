import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import Menu from './components/Header/Menu';
import { About } from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Modal from './components/Modal/Modal';
import WorkModalBody from './components/WorkModalBody/WorkModalBody';
import { TWorkCardModal } from './types/works';

const App = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isWorkModal, setIsWorkModal] = useState<boolean>(false);
  const [workCardData, setWorkCardData] = useState<TWorkCardModal>();

  const handleOpenBurgerMenu = () => {
    setIsMenuActive(true);
  };

  const handleCloseBurgerMenu = () => {
    setIsMenuActive(false);
  };

  const handleSetWorkCardInfo = (workCardInfo: TWorkCardModal) => {
    setWorkCardData(workCardInfo);
  };

  return (
    <div className="wrapper">
      <Header handleOpenBurgerMenu={handleOpenBurgerMenu}/>
      {/*<About/>*/}
      <Skills/>
      <Menu
        isMenuActive={isMenuActive}
        handleCloseBurgerMenu={handleCloseBurgerMenu}
      />
      {/*<Modal active={isWorkModal} setActive={setIsWorkModal}>*/}
      {/*  <WorkModalBody active={isWorkModal} workCardData={workCardData}/>*/}
      {/*</Modal>*/}
    </div>
  );
};

export default App;
