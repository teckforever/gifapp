import React from 'react'

import '../componentStyles/itemGif.css'

export const ItemGif = ({ url, title }) => {
    return (
        <div className="cont-item-gif">
            <img src={url} alt="" />
            <p>{title}</p>
        </div>
    )
}
