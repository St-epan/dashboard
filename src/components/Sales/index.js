import React from 'react'
import "./index.css"


const Sales = (props) => {
    const { each } = props
    const { total, text, color } = each
    const colorText = {
        color: `${color}`
    }
    return (
        <div className='d-flex flex-column align-items-center shadow sales-container'>
            <p className='fs-2' style={colorText}>{total} </p>
            <p>{text} </p>
        </div>
    )
}

export default Sales