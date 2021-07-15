
const Password = () => <div toolkit-data-field='custom-component'>Password</div>
export const labelComponent = {
    name: "Label",
    props: {
        id: (new Date()).getTime(),
        layoutClasses: 'test-input-layout input-with-label-layout',
        labelClasses: 'test-input-label input-with-label-label',
        // inline = false,
        fieldClasses: 'test-input-field input-with-label-field',
        tyep: 'password',
        show: true,
        label: <Password />
    }
}

export const avatarComponent = {
    name: "Avatar",
    props: [
        {
            avatarImage: 'https://abcavatars2.githubusercontent.com/u/4231074?v=3&s=96',
            avatarImageAlt: "alt text to display",
            text: 'GVITJain Sachin',
            type: 'round'
        },
        {
            text: 'React Toolkit',
            type: 'box'
        },
    ]
}

export const alertComponent = {
    name: 'Alert',
    props: [
        undefined,
        {
            type: "primary",
            text: "Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.",
            closeEvent: (e) => console.log(`close event `, e)
        },
        {
            text: "I'll autohide aftre 10 seconds.",
            type: "default",
            autoHide: true
        },
        {
            text: "Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.",
            type: "success"
        },
        {
            text: "Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.",
            type: "danger"
        },
        {
            text: "Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.Lorem ipsum dolor sit amit.",
            type: "warning"
        },
        {
            type: "primary"
        }
    ]
}

export const badgeComponent = {
    name: "Badge",
    props: [
        undefined,
        {
            href: "www.react-ui-toolkit.com"
        },
        {
            type: "primary",
            text: "Custom Primary Badge"
        },
        {
            type: "secondary"
        },
        {
            type: "default"
        },
        {
            type: "success"
        },
        {
            type: "danger"
        },
        {
            type: "warning"
        },
    ]
}