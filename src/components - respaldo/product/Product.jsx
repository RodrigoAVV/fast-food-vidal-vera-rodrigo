import React from 'react'

const Product = ({codigo,nombre}) => {
    console.log(codigo)
    return(
        <>
            {codigo}
            {nombre}
        </>
    )
}

export default Product