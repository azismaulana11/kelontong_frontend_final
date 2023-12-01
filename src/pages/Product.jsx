import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Header from '../components/navbar/Header'
import { ProductList } from '../components/ProductList';
import Footer from '../components/navbar/Footer'

export default function product() {
    const [results, setResults] = useState ([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('https://wild-rose-python-wig.cyclic.app/api/v1/products')
                setResults(response.data)
            } catch (error) {
                console.log(error)
            }
        }
       fetchProduct()
    }, [])

    return (
        <>
            <Header setResults={setResults}/>
            <ProductList results={results} />
            <Footer />
        </>
    )
}
