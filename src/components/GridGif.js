import React, { useState, useEffect } from 'react'
import { ItemGif } from './ItemGif'
import { getGif } from '../helpers/getGif'

import '../componentStyles/gridGif.css'

export const GridGif = ({ nameSearchGif }) => {

    const [gifApi, setGifApi] = useState([])

    useEffect(() => {

        getGif(nameSearchGif).then(res => {
            //console.log(res)
            setGifApi(res)
        })

    }, [nameSearchGif])


    return (
        <div className="cont-grid-gif">
            {gifApi.map(gifObject => {
                return (
                    <ItemGif key={gifObject.id} {...gifObject} />
                )
            })}
        </div>
    )
}
