import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
    children: React.ReactChild;
    width?: string;
}

export const Box: React.FC<Props> = ({ children }) => {
    return <>
        <BoxWrap>{ children }</BoxWrap>
    </>
}

const BoxWrap = styled.div<{ width?: string; }>`
    background: #F5F5F5;
    padding: 24px;
    ${(props) => props.width ? css`
        width: props.width;
    ` : '' }
`;