import React, { useState } from 'react'
import Header from '../components/navbar/Header'
import { CartContainer } from '../components/CartContainer'

export default function Cart() {
    const [results, setResults] = useState ([])

    return (
        <>
            <Header setResults={setResults}/>
            <CartContainer />
        </>
    )
}
