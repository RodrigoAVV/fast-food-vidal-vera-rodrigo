import React from 'react'

const Loader = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span>Cargando...</span>
            </div>
        </div>
    )
}

export default Loader