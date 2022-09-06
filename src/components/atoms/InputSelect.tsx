import React from "react";
import styled from "styled-components";

type Props = {
    children: React.ReactNode,
    options: {
        label: string,
        value: number,
    }[],
    width?: string
}

export const InputSelect: React.FC<Props> = ({ options, width }) => {
    return <>
        <InputSelectWrap width={ width ?? "100px" }>
            <select>
                {options.map(({ label, value }, index) => (
                    <option value={value} key={`input-select-${label}-${index}`}>{ label }</option>
                ))}
            </select>
        </InputSelectWrap>
    </>
}

const InputSelectWrap = styled.div<{ width?: string; }>`
    position: relative;
    &::before {
        content: "";
        position: absolute;
        margin: auto;
        top: 10px;
        bottom: 12px;
        right: 16px;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
        border-right: solid 2px #AAAAAA;
        border-bottom: solid 2px #AAAAAA;
    }
    > select {
        border: solid 1px #dddddd;
        border-radius: 2px;
        padding: 16px;
        width: ${(props) => props.width};
        appearance: none;
    }
`