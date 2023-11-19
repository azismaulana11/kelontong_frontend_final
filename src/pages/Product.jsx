import React, { useState } from 'react'
import Header from '../components/navbar/Header'
import { ProductList } from '../components/ProductList';
import Footer from '../components/navbar/Footer'

export default function product() {
    const [results, setResults] = useState ([])

    return (
        <>
            <Header setResults={setResults}/>
            <ProductList results={results} />
            <Footer />
        </>
    )
}
