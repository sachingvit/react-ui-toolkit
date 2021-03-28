import React from 'react'
import PropTypes from 'prop-types'

function Typography(props) {
    const { text, classes, htmlElement: Element } = props

    return (
        <Element classes={classes}>
            {text}
        </Element>
    )
}
Typography.defaultProps = {
    text: '',
    classes: '',
    htmlElement: 'div'
}

Typography.propTypes = {
    text: PropTypes.string,
    classes: PropTypes.oneOf([PropTypes.array, PropTypes.string]),
    htmlElement: PropTypes.string
}

export default Typography
export { Typography }

