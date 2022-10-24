import styled from "styled-components";

export const Container = styled.div`

    margin : 30px;
    cursor : pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color : #fff;
    }

    padding-bottom: 15px;
    border-bottom: 2px solid #FFF;
`

export const Info = styled.div`

    flex : 1;
    margin-right : 30px;
`  

export const Title = styled.div`
    text-align: right;
    font-weight: 600;
    margin-bottom: 5px;
    font-size : 15px;
`

export const Desc = styled.div`

    text-align : right;
    font-size: 13px;
    color : #b8b8d4;
`

export const IconArea = styled.div`

    width : 50px;
    height : 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width : 85%;
    }
`

export const Point = styled.div`

    width : 6px;
    height : 6px;
    border : 3px solid #808080;
    border-radius: 50%;
    margin-left : 30px;
    margin-right : -37px;
    background-color: rgba(70,39,171,1);
`