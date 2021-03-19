import React from 'react'
import Label from './../Label/Label'
import NoContent from './../NoContent/NoContent'


function LableInput(props) {

    const {
        id,
        layoutClasses,
        labelClasses,
        // inline = false,
        fieldClasses: classes,
        tyep = 'input',
        show = true,
        label
    } = props

    function onChangeHandler(event) {
        console.log('chnage event', event)
    }

    function onFocusHandler(event) {
        console.log('focus event', event)
    }

    if (!show) {
        return <NoContent />
    }

    return (
        <div className={layoutClasses}>
            <div><Label id={id} label={label} labelClasses={labelClasses} /></div>
            <div data-ui-toolkit-id={id} className={classes}>
                <input id={id} type={tyep} onFocus={onFocusHandler} onChange={onChangeHandler} />
            </div>
        </div>
    )
}

export default LableInput
