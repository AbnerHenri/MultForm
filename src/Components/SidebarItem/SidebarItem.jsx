import React from 'react';


import * as C from './style'
import { Link } from 'react-router-dom'

function SidebarItem(props) {
  return(
    <C.Container>
        <Link to={props.path}>
            <C.Info>
                <C.Title>{props.title}</C.Title>
                <C.Desc>{props.description}</C.Desc>
            </C.Info>

            <C.IconArea>
                <C.Point></C.Point>
            </C.IconArea>
        </Link>
    </C.Container>
  );
}

export default SidebarItem;