import React from 'react'
import ReactDOM from 'react-dom/client'
// import {HooksApp} from './HooksApp'
// import {CounterCustom} from './CounterCustom'
//import {SimpleFormulario } from './02-useEffect/SimpleFormulario'
// import {FormCustom} from './02-useEffect/FormCustom'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterCustom/> */}
    {/* <SimpleFormulario/> */}
    {/* <FormCustom/> */}
    <MultipleCustomHook/>
  </React.StrictMode>,
)
