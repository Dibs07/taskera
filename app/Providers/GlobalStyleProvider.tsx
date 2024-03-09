"use client";

import React from 'react'
import { styled } from 'styled-components';

interface Props {
    children: React.ReactNode;
}

function GlobalStyleProvider({ children }: Props) {
    return (
        <GlobalStyle>{children}</GlobalStyle>
    )
}

const GlobalStyle = styled.div`
display:flex;
padding: 2.5rem;
gap: 2.5rem;
height: 100%;
`;

export default GlobalStyleProvider