import styled from "styled-components";

export const Container = styled.div`
    flex : 1;
    box-sizing: border-box;

    width: 95%;
    height: 80px;
    margin-bottom: 10px;

    border: 2px solid #449bac;
    border-radius: 20px;

    display: flex;
    align-items: center;

    cursor: pointer;
    opacity: ${(props)=> props.selected ? 1 : 0.5 };
    transition-duration: 500ms;

    &:hover {
        opacity: 1;
    }
`

export const Icon = styled.div`
    box-sizing: border-box;
    background-color: #449bac;
    border-radius: 50%;
    padding : 10px;

    text-align: center;
    font-size: 20px;
    margin-left: 15px;
`

export const Info = styled.div`
    flex : 1;
    align-items: center;
    margin-left: 15px;
`

export const Title = styled.div`

    font-size: medium;
    font-weight: 600;
`

export const Desc = styled.div`

    font-size : 14px;
`