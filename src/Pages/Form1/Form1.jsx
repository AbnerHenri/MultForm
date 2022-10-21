import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import { useForm } from '../../Contexts/FormContexts'

import Theme from '../../Components/Theme/Theme';

function FormOne() {

  const Redirect = useNavigate()
  const { state, dispatch } = useForm()

  function nextStep(){
    Redirect('/step2')
  }

  function handleName(e){
    dispatch({ 
      type : 'SET_NAME',
      payload : e.target.value
    })
  }

  return(
    <Theme>
      <C.Container>

      <p>Passo {state.currentStep}/3</p>

        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo</p>

        <hr></hr>

        <label>
          Seu nome completo
          <input type={'text'} onChange={handleName} autofocus />
        </label>

        <C.Button onClick={() => nextStep()}>Próximo</C.Button>
      </C.Container>
    </Theme>
  );
}

export default FormOne;