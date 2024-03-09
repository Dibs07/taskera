"use client";
import React from 'react'
import { styled } from 'styled-components';
import {useGlobalstate }from "@/app/context/globalprovider";
function Sidebar() {

  const {theme} = useGlobalstate();

  return (
    <Sidebarstyle>Sidebar</Sidebarstyle>
  )
}

const Sidebarstyle = styled.nav`

`;

export default Sidebar