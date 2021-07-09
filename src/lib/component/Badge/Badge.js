import React from 'react'
import PropTypes from 'prop-types'
import './Badge.css'


function Badge(props) {
    let {
        tag: Tag,
        text: badgeText,
        size,
        variant,
        children = null,
        href
    } = props;

    const additionalProps = {}

    if (href.trim() !== "") {
        Tag = 'a';
        additionalProps.href = href
    }

    return (
        <Tag className={`badge`} {...additionalProps}>
            {children || badgeText}
        </Tag>
    )
}

Badge.defaultProps = {
    tag: 'span',
    text: '',
    size: "small",
    variant: 'button',
    href: ""
}

Badge.propTypes = {
    href: PropTypes.string,
    tag: PropTypes.string

}

export default Badge
export { Badge }

