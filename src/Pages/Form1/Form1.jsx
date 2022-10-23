import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import { useForm } from '../../Contexts/FormContexts'

import Theme from '../../Components/Theme/Theme';

function FormOne() {

  const Redirect = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(()=>{
    dispatch({
      type: 'SET_CURRENT_STEP',
      payload: 1
    })
  }, [])

  function nextStep(){
    if(state.name !== ''){
      Redirect('/step2')
    }else{
      alert('Preencha os dados necessários')
    }
    
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
          <input type={'text'} onChange={handleName} autoFocus />
        </label>

        <C.Button onClick={() => nextStep()}>Próximo</C.Button>
      </C.Container>
    </Theme>
  );
}

export default FormOne;