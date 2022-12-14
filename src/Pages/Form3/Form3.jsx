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

    if(state.name === ''){
      Redirect('/')
      alert('Preencha todos os campos antes de ir a próxima página')
    }
    
  }, [])

  function nextStep(url){
      Redirect(url)
  }

  function HandleEmailChange(e){
    dispatch({
      type : 'SET_EMAIL',
      payload : e.target.value
    })
  }

  function HandleGithubChange(e) {
    dispatch({
      type: 'SET_GITHUB',
      payload: e.target.value
    })
  }

  function PrintData(){
    if(state.email === '' || state.github === ''){
      alert('Preencha os campos necessários')
    }else{
      console.log(state)
    }
  }

  return(
    <Theme>
      <C.Container>

      <p>Passo {state.currentStep}/3</p>

        <h1>{state.name}, Vamos coletar os seus dados</h1>
        <p>Preencha o campo abaixo</p>

        <hr></hr>

        <C.Input type={'email'} value={state.email} onChange={HandleEmailChange} placeholder={'Qual o seu E-mail?'}/>
        <C.Input type={'url'} value={state.github} onChange={HandleGithubChange} placeholder={'Qual o seu Github?'}/>

        <C.Button onClick={() => nextStep('/step2')}>Voltar</C.Button>
        <C.Button onClick={() => PrintData() }>Enviar</C.Button>
      </C.Container>
    </Theme>
  );
}

export default FormOne;