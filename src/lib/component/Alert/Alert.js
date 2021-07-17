import React from 'react'
import PropTypes from 'prop-types'
import './../Badge/Badge.css'
import './Alert.css'
import { WithSkin } from './../Badge/Badge'
import NoContent from '../NoContent/NoContent'



const Alert = WithSkin(
    function Alert(props) {
        const {
            autoHide,
            autoHideTime,
            classes,
            text: AlertText,
            children = null,
            closeEvent: closeCB = null
        } = props;

        const [show, setShow] = React.useState(true)

        const closeHandler = React.useCallback(() => {
            if (typeof closeCB === 'function') {
                closeCB(props)
            }
            setShow(false)
        }, [closeCB, setShow])

        React.useEffect(() => {
            let timeoutRef = null
            if (autoHide) {
                timeoutRef = setTimeout(() => {
                    closeHandler()
                }, autoHideTime)
            }
            return () => {
                if (timeoutRef) {
                    clearTimeout(timeoutRef)
                }
                console.log('component hide >>', props)
            }
        }, [autoHide, autoHideTime, closeHandler])



        if (!show) {
            return <NoContent />
        }

        return (
            <>
                <div className={classes}>
                    <span>{children || AlertText}</span>
                    {closeCB && <span className="close" aria-label="Close alert" onClick={closeHandler}> <i>&#10008;</i> </span>}
                </div>
            </>
        )
    }
)

Alert.defaultProps = {
    type: "default",
    text: 'You forget to give me text.',
    variant: 'button',
    closeEvent: undefined,
    autoHide: false,
    autoHideTime: 10000
}

Alert.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'danger', 'primary', 'info', 'default']),
    closeEvent: PropTypes.func
}

export default Alert
export { Alert }

