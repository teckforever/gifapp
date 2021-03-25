import React, { useState } from 'react'

import '../componentStyles/searchImages.css'

export const SearchImages = ({ setInputValueSearch }) => {

    const [inputValue, setInputValue] = useState('')

    const addInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleInputValue = (e) => {
        console.log(inputValue)
        e.preventDefault()
        setInputValueSearch(inputValue)
    }


    return (
        <form className="cont-search-gif" onSubmit={handleInputValue}>
            <input type="text" className="inp-search-gif" placeholder="Busqueda gif" defaultValue={inputValue} onChange={addInputValue} />
        </form>
    )
}
