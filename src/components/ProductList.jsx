import React from 'react'
// import { ProductCard } from './ProductCard'

export const ProductList= ({ results }) => {
    return (
        <div className='product-list container d-grid'>
            <div className='row'>
            {results.map((result,id) => {
                return <div className="card-body col-md-2 col-sm-2 text-align-center p-3 m-2 border border-2 border-info rounded" key={id}>
                <img className="w-100" src={result.image} alt={result.name}/>
                    <a>
                        <h5 className="card-title">{result.name}</h5>
                        <p className="card-text">{result.price}</p>
                    </a>
            </div>
            })}
             </div>
        </div>
    )
}
