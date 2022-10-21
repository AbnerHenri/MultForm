import styled from "styled-components";

export const Container = styled.div`

min-height: 100vh;
color : #FFFFFF;

background: rgb(68,155,172);
background: linear-gradient(75deg, rgba(68,155,172,0.865983893557423) 7%, rgba(70,39,171,1) 42%);
`

export const Area = styled.div`

margin : auto;
max-width: 980px;
min-height: 100vh;
display : flex;
flex-direction: column;
`

export const Steps = styled.div`

flex : 1;
display: flex;
`

export const Sidebar = styled.div`

width : 250px;
height : 80vh;
border-right: 1px solid #ccc;
`

export const Page = styled.div`

flex : 1;
padding : 40px 0px 0px 40px;
`