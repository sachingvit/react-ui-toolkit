import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
    return (
        <div>
            Alert Panel to be here
        </div>
    )
}

Alert.defaultProps = {
    href: "",
    size: "small",
    tag: 'span',
    type: "primary",
    text: '',
    variant: 'button',
}

Alert.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'danger', 'primary', 'info', 'default'])
}

export default Alert
export { Alert }

