import React from 'react'

// import { Avatar } from "./lib/component/Avatar/Avatar"
// import { LableInput } from './lib/component/LabelInput/LableInput'
// import { Badge } from './lib/component/Badge/Badge'

import { Avatar, Alert, Badge, LableInput } from './lib/component'
import { alertComponent, avatarComponent, labelComponent, badgeComponent } from './docProps'


const DemoSection = ({ children, noFlex }) => {
  return <div className={`demo-section ${noFlex && `no-flex`}`}>{children}</div>
}

const ComponentNameDispay = ({ name }) => <p><span>Component</span> {name}</p>
function App() {


  return (
    <div className="App">

      <div className="demo-content-area">
        <ComponentNameDispay name={`${alertComponent?.name}`} />
        <DemoSection noFlex={true}>
          {React.Children.toArray(
            alertComponent.props.map(alertProps => <Alert {...alertProps}>{`${alertProps?.text || 'Default Alert Text'}`}</Alert>)
          )}
        </DemoSection>
      </div>

      <div className="demo-content-area">
        <ComponentNameDispay name={`${avatarComponent?.name}`} />
        <DemoSection>
          {avatarComponent.props.map(prop => <Avatar {...prop} />)}
        </DemoSection>
      </div>

      <div className="demo-content-area">
        <ComponentNameDispay name={`${badgeComponent?.name}`} />
        <DemoSection>
          {React.Children.toArray(
            badgeComponent.props.map(badgeProps => <Badge {...badgeProps}>{`${badgeProps?.text || 'Badege Text'}`}</Badge>)
          )}
        </DemoSection>
        {/* <Badge {...badgeComponent.props[0]}>Badege Text</Badge>
        <Badge {...badgeComponent.props[1]} href="https://www.google.com">Badege Text</Badge>
        <Badge {...badgeComponent.props[2]}>Primary Badge</Badge> */}
      </div>

      <div className="demo-content-area">
        <ComponentNameDispay name={`${labelComponent?.name}`} />
        <DemoSection>
          <LableInput {...labelComponent?.props} />
        </DemoSection>
      </div>

    </div>
  );
}


export default App;
