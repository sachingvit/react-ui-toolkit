import React from 'react'
// import PropTypes from 'prop-type'
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

// LableInput.prototype = {
//     id: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number
//     ]),
//     layoutClasses: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,

//     ]),
//     labelClasses: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//     ]),
//     // inline = false,
//     fieldClasses: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//     ]),
//     tyep: PropTypes.string,
//     show: PropTypes.bool,
//     label: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//     ])
// }

export default LableInput
export { LableInput }