import React from 'react';
import * as C from './styles'

import Theme from '../../Components/Theme/Theme';

function FormOne() {

  function nextStep(){

  }

  return(
    <Theme>
      <C.Container>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo</p>

        <hr></hr>

        <label>
          Seu nome completo
          <input type={'text'} autofocus />
        </label>

        <C.Button onClick={() => nextStep()}>Próximo</C.Button>
      </C.Container>
    </Theme>
  );
}

export default FormOne;