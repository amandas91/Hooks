import { Navigate, Route, Link } from 'react-router-dom'
import { UseProvider } from './context/UseProvider'

export const MainApp = () => {

    return (
        <>
            <h1>Main App</h1>

            <a href="/abou"> about </a>
            <a href="/about"> about </a>
            <a href="/about"> about </a>
        </>
    )
}