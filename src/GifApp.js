import React, { useState } from 'react'

//STYLES
import './gifApp.css'

//COMPONENTES
import { SearchImages } from './components/SearchImages'
import { GridGif } from './components/GridGif'

export const GifApp = () => {

  const [inputValueSearch, setInputValueSearch] = useState('Goku')

  return (
    <div className="cont-gif-app">
      <h3>GIF APP</h3>
      <SearchImages setInputValueSearch={setInputValueSearch} />
      <hr />
      <GridGif nameSearchGif={inputValueSearch} />
    </div>
  )
}



