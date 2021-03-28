import React from 'react'

import { Avatar } from "./lib/component/Avatar/Avatar"
import { LableInput } from './lib/component/LabelInput/LableInput'


const Password = () => <div toolkit-data-field='custom-component'>Password</div>

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

  return (
    <div className="App">
      <LableInput {...labelProps} />
      {avatarProps.map(prop => <Avatar {...prop} />)}
    </div>
  );
}


export default App;
