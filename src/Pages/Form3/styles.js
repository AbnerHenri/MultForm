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
border-radius: 30px;

width : 150px;
height : 50px;

margin-top : 20px;
margin-right: 10px;
font-size : 16px;
font-weight: 400;
letter-spacing: 2px;

cursor: pointer;
`

export const Input = styled.input`

box-sizing: border-box;
display : block;
width : 100%;
height : 60px;
margin-bottom: 10px;

background-color: transparent;
border : 2px solid #449bac;
border-radius: 10px;
color : #fff;
padding-left: 15px;
opacity: 0.5;

&::placeholder {
    color : #ccc
}

&:focus {
    opacity: 1;
    outline: 0;
}
`