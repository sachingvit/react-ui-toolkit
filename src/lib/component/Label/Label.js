import React from 'react'
import NoContent from '../NoContent/NoContent'
// const { useState, useEffect } = React
function Label(props) {
    const { layoutClasses, label, labelClasses, id } = props

    if (label || label === "") {
        return <NoContent />
    }

    return (
        <div className={layoutClasses}>
            <label className={labelClasses} for={id} id={`label-${id}`}>{label}</label>
        </div>
    )
}

//export Label;
export default Label
