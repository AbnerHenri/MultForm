import React from 'react';


import * as C from './style'
import { Link } from 'react-router-dom'

function SidebarItem(props) {
  return(
    <C.Container actived={props.actived}>
        <Link to={props.path}>
            <C.Info>
                <C.Title>{props.title}</C.Title>
                <C.Desc>{props.description}</C.Desc>
            </C.Info>

            <C.IconArea>
                <img src={props.icon} />
            </C.IconArea>
          <C.Point actived={props.actived} />
        </Link>
    </C.Container>
  );
}

export default SidebarItem;