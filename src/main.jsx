import React from 'react'
import ReactDOM from 'react-dom/client'
// import {HooksApp} from './HooksApp'
// import {CounterCustom} from './CounterCustom'
//import {SimpleFormulario } from './02-useEffect/SimpleFormulario'
// import {FormCustom} from './02-useEffect/FormCustom'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout} from './05-useLayoutEffect/Layout'
// import { Memorize} from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-ejercicio/Padre'

import './index.css'
// import './08-useReducer/intro-reducer'

// import {TodoApp} from './08-useReducer/TodoApp'

import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterCustom/> */}
    {/* <SimpleFormulario/> */}
    {/* <FormCustom/> */}
    {/* <MultipleCustomHook/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    {/* <CallbackHook/> */}
    {/* <Padre/> */}
    {/* <TodoApp/> */}
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>,
)
