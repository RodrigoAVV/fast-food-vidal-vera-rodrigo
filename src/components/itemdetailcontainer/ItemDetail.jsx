import React,{useEffect,useState,useContext} from 'react'
import ItemCount from '../../components/itemcount/ItemCount'


const ItemDetail = ({product}) => {
    
    
    return(
        <div className="col-sm-3" style={{marginTop:10}}>
            <div className="card">
            <img src={"/src/components/products/img/"+product.imagen} className="card-img-top" alt="..." style={{height:350,width:380}}/>
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{product.descripcion}</p>
                <p className="card-text">{product.categoria}</p>
                <p className="card-text">{product.precio}</p>
                <p className="card-text">{product.recomendado ? 'Recomendado' : ''}</p>
                <ItemCount product={product}/>
            </div>
            </div>
        </div>
    )
}
export default ItemDetail