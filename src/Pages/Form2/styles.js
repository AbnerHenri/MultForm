import styled from 'styled-components'

export const Container = styled.div`

label {
    font-size : 15px;

    input {
        display : block;
        box-sizing: border-box;
        width: 80%;
        padding : 15px 10px;
        margin-top : 10px;
        margin-bottom: 15px;
        border : 1px solid #ccc;
        border-radius : 10px;
        font-size: large;
        color : #ccc;
        outline: 0;
        background-color: transparent;
    }
}

h1 {
    margin-bottom: 70px;
}

hr {
    margin-bottom: 25px;
}

p {
    margin : 0px 0px 15px 0px;
    font-size: 20px;
}
`

export const Button = styled.button`

background-color: #449bac;
color : #fff;

border : none;
border-radius: 20px;

width : 200px;
height : 50px;

margin-top : 70px;
margin-right: 10px;
font-size : 18px;
font-weight: 400;
letter-spacing: 2px;

cursor: pointer;
`