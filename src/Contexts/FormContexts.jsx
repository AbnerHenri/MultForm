import { createContext, useContext, useReducer } from 'react'

const initialData = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

// Context

const FormContext = createContext()

// Reducer

const FormReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_STEP':
            return {...state, currentStep: action.payload}

        case 'SET_NAME':
            return {...state, name: action.payload}

        case 'SET_LEVEL':
            return {...state, level: action.payload}

        case 'SET_EMAIL':
            return {...state, email: action.payload}

        case 'SET_GITHUB':
            return {...state, github: action.payload}
    
        default:
            return state;
    }
}


// Provider

const FormProvider = ({ children }) => {

    const [state, dispatch] = useReducer(FormReducer, initialData)
    const value = { state, dispatch }

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

