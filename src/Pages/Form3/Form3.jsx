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
      payload : 3
    })
  }, [])

  // function nextStep(){
  //   if(state.name !== ''){
  //     Redirect('/step2')
  //   }else{
  //     alert('Preencha os dados necessários')
  //   }
    
  // }

  return(
    <Theme>
      <C.Container>

      <p>Passo {state.currentStep}/3</p>

        <h1>{state.name}, Vamos coletar os seus dados</h1>
        <p>Preencha o campo abaixo</p>

        <hr></hr>

      

        <C.Button onClick={() => nextStep()}>Próximo</C.Button>
      </C.Container>
    </Theme>
  );
}

export default FormOne;