import React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactChild;
}

export const SingleColumn: React.FC<Props> = ({ children }) => {
    return <>
        <Layout>{ children }</Layout>
    </>
}

const Layout = styled.div`
    margin: 16px;
`;