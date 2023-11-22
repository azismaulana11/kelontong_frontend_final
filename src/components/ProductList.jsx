import React from 'react';
import { Link } from 'react-router-dom';

export const ProductList = ({ results }) => {
  
    return (
        <div className='product-list container d-grid'>
            <div className='row'>
                {results.map((result, index) => {
                    return (
                        <Link className='custom-card col-md-2 col-sm-2 p-0 m-2' to={`/details/${result.id}`} key={index}>
                            <div className="card-body m-2 text-align-center border border-2 border-info rounded">
                                <img className="w-100" src={result.image} alt={result.name} />
                                    <h5 className="card-title">{result.name}</h5>
                                    <p className="card-text">{result.price}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
