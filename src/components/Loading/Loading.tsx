import React from 'react';
import style from './Loading.module.css';

const Loading = () => (
  <div className="flex items-center justify-center w-screen h-screen">
    <div className={`${style.idsRoller}`}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loading;
