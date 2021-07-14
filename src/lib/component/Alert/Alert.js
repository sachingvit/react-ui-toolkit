import React from 'react'
import PropTypes from 'prop-types'
import './../Badge/Badge.css'
import './Alert.css'
import { WithSkin } from './../Badge/Badge'

const Alert = WithSkin(
    function Alert(props) {
        const {
            classes,
            text: AlertText,
            children = null,
            ...rest
        } = props;
        return (
            <>
                <div className={classes}>
                    <span>{children || AlertText}</span>
                    <span className="close"> &#10008; </span>
                </div>
            </>
        )
    }
)

Alert.defaultProps = {
    href: "",
    size: "small",
    tag: 'span',
    type: "default",
    text: 'It\'s a default alert.',
    variant: 'button',
}

Alert.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'danger', 'primary', 'info', 'default'])
}

export default Alert
export { Alert }

