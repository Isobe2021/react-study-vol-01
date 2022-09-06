import React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactChild;
    as?: React.ElementType;
    href?: string;
    width?: string;
}

export const Button: React.FC<Props> = ({ as, children, href, width }) => {
    return <>
        <ButtonWrap as={ as } href={ href } width={ width ?? "100%" }>{ children }</ButtonWrap>
    </>
}

const ButtonWrap = styled.button<{ width?: string; }>`
    background: #ad0003;
    padding: 16px 24px;
    color: #FFFFFF;
    border: solid 1px #ad0003;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
    width: ${(props) => props.width};
    display: inline-block;
    text-decoration: none;
    text-align: center;
    &:hover {
        opacity: .85;
    };
`;