import React from 'react';
import * as C from './style'

function SelectOption(props) {
  return(
    <C.Container>
        <C.Icon>{props.icon}</C.Icon>

        <C.Info>
            <C.Title>{props.title}</C.Title>
            <C.Desc>{props.description}</C.Desc>
        </C.Info> 
    </C.Container>
  );
}

export default SelectOption;