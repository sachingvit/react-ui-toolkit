import React from 'react'
import PropTypes from 'prop-types'
import './Badge.css'

function Badge(props) {
    const { tag: Tag, text: badgeText, size, variant, children = null } = props;

    return (
        <Tag className={`badge`}>
            {children || badgeText}
        </Tag>
    )
}

Badge.defaultProps = {
    tag: 'span',
    text: '',
    size: "small",
    variant: 'button'
}

Badge.propTypes = {
    tag: PropTypes.string

}

export default Badge
export { Badge }

