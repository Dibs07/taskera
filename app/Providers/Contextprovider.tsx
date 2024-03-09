"use client";
import React from 'react'
import GlobalStyleProvider from './GlobalStyleProvider';
import { GlobalProvider } from '../context/globalprovider';

interface  Props {
    children : React.ReactNode;
}

function Contextprovider({children}:Props) {
  return (
    <GlobalProvider>{children}</GlobalProvider>
  )
}

export default Contextprovider