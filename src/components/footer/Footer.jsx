import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start footer">
            <div className="text-center p-3">
                <Link to={'/'} className="text-dark">Fast food, todos los derechos reservados</Link>
            </div>
        </footer>
    )
}
export default Footer