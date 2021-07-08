import React from 'react'

import { Avatar } from "./lib/component/Avatar/Avatar"
import { LableInput } from './lib/component/LabelInput/LableInput'
import { Badge } from './lib/component/Badge/Badge'


const Password = () => <div toolkit-data-field='custom-component'>Password</div>
const ComponentNameDispay = ({ name }) => <p><span>Component</span> {name}</p>
function App() {
  const labelProps = {
    id: (new Date()).getTime(),
    layoutClasses: 'test-input-layout input-with-label-layout',
    labelClasses: 'test-input-label input-with-label-label',
    // inline = false,
    fieldClasses: 'test-input-field input-with-label-field',
    tyep: 'password',
    show: true,
    label: <Password />
  }

  const avatarProps = [
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

  const badgeProps = {

  }

  return (
    <div className="App">

      <div className="demo-content-area">
        <ComponentNameDispay name="Avatar" />
        {avatarProps.map(prop => <Avatar {...prop} />)}
      </div>

      <div className="demo-content-area">
        <ComponentNameDispay name="Badge" />
        <Badge {...badgeProps}>Badege Text</Badge>
      </div>

      <div className="demo-content-area">
        <ComponentNameDispay name="LabelInput" />
        <LableInput {...labelProps} />
      </div>

    </div>
  );
}


export default App;
