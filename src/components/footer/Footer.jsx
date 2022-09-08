import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start footer">
            <div className="text-center p-3">
                <a className="text-dark" Link to={'#'}>Fast food, todos los derechos reservados</a>
            </div>
        </footer>
    )
}
export default Footer