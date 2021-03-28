import React from 'react'
import PropTypes from "prop-types";
import NoContent from "./../NoContent/NoContent";
import Typography from "./../Typography/Typography";
import defaultAvatar from './default-avatar.png'
import './Avatart.css'

const { useState } = React
function Avatar(props) {

    const { text, avatarImage, avatarImageAlt, type } = props
    const [imageSrc, setImageSrc] = useState(avatarImage)


    const getInitials = () => text.split(' ').map(textPart => textPart[0]).join("").substring(0, 2).toUpperCase()
    const avatarInitials = getInitials()


    function imageErrorHandler() {
        setImageSrc(defaultAvatar)
    }

    const classes = `center avatarBlock ${type} avatar-${avatarInitials[0]} avatar-img`
    const title = avatarImageAlt && avatarImageAlt !== '' ? avatarImageAlt : text
    if (avatarImage !== "") {
        return (
            <div>
                <div className={classes} data-image-src="/broken-image-src" title={title}>
                    <img onError={imageErrorHandler} src={imageSrc} className="image-avatar" style={{ display: "block" }} alt={title} />
                </div>
            </div>
        )
    }
    if (avatarInitials.length) {
        return (
            <div>
                <div className={classes} title={title}>
                    <Typography text={avatarInitials} classes="text-avatar" htmlElement="span" />
                </div>
            </div>
        )
    }
    return <NoContent />
}

Avatar.defaultProps = {
    type: 'box',
    text: '',
    avatarImage: '',
    avatarImageAlt: ''
}

Avatar.propTypes = {
    text: PropTypes.string,
    avatarImageAlt: PropTypes.string,
    avatarImage: PropTypes.oneOf([PropTypes.string, PropTypes.instanceOf(React.Component)]),
    type: PropTypes.oneOf(['box', 'round'])
}

export { Avatar }
export default Avatar
