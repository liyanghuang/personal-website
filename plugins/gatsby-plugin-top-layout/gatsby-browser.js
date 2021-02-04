/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import TopLayout from './TopLayout';

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};

export const onClientEntry = () => {
  window.onload = () => { 
    // add loaded class after everything loads
    document.querySelector("body").classList.add("loaded"); 
  }
}
