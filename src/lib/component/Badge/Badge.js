import PropTypes from 'prop-types'
import './Badge.css'


const Badge = WithBadge(function Badge(props) {
    let {
        tag: Tag,
        text: badgeText,
        children = null,
        href,
        classes
    } = props;

    const additionalProps = {}

    if (href.trim() !== "") {
        Tag = 'a';
        additionalProps.href = href
    }

    return (
        <Tag className={classes} {...additionalProps}>
            {children || badgeText}
        </Tag>
    )
})


function WithBadge(Component) {
    return (props) => {
        const classes = `${props.className || Component.name.toLowerCase()} ${props.type}`
        return (
            <Component {...props} classes={classes} />
        )
    }
}

Badge.defaultProps = {
    href: "",
    size: "small",
    tag: 'span',
    type: "primary",
    text: '',
    variant: 'button',
}

Badge.propTypes = {
    href: PropTypes.string,
    tag: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'default'])
}

export default Badge
export { Badge }

