import React from 'react';
import styled from 'styled-components';

type Props = {
    items: {
        term: string,
        description: React.ReactNode,
        note?: string
    }[]
}

export const DefinitionList: React.FC<Props> = ({ items }) => {
    return <>
        <DefinitionListWrap>
            {items.map(({ term, description, note }, index) => (
                <>
                    <div>
                        <DefinistTerm>{ term }</DefinistTerm>
                        <DefinitionDescription>{ description }</DefinitionDescription>
                        {note && <>
                            <DefinitionNote>{ note }</DefinitionNote>
                        </>}
                    </div>
                </>
            ))}
        </DefinitionListWrap>
    </>
}

const DefinitionListWrap = styled.dl`
    > div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        &:not(:last-child) {
            margin-bottom: 16px;
        }
        .spacer {
            width: 100%;
        }
    }
`;

const DefinistTerm = styled.dt`
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    &::after {
        content: ":";
        margin-left: 8px;
        position: relative;
        bottom: 2px;
    };
`;

const DefinitionDescription = styled.dd`
    font-size: 16px;
    margin-left: 8px;
`;

const DefinitionNote = styled.dd`
    font-size: 12px;
    color: #e20000;
    &::before {
        content: "";
        width: 100vw;
        display: block;
    }
`;