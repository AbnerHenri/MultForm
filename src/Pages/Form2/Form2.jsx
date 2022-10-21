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
      type : 'SET_CURRENT_STEP',
      payload : 2
    })
  }, [])

  function nextStep(route){
    if(state.name !== ''){
      Redirect(route)
    }else{
      alert('Preencha os dados necessários')
    }
    
  }

  return(
    <Theme>
      <C.Container>

      <p>Passo {state.currentStep}/3</p>

        <h1>Qual o seu nível de desenvolvedor</h1>
      
        <p>Escolha uma das opções abaixo</p>
        <hr></hr>

        <C.Button onClick={() => nextStep('/')}>Voltar</C.Button>
        <C.Button onClick={() => nextStep('/step3')}>Próximo</C.Button>
      </C.Container>
    </Theme>
  );
}

export default FormOne;