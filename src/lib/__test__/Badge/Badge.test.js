import { Badge } from './../../component'
import TestRenderer from 'react-test-renderer';

describe('Badge Compoment', () => {

    // let props;

    // beforeEach(() => {
    //     props = {
    //         label: 'test label string',
    //         id: '1'
    //     }
    // })

    it('Default badge without props', () => {
        const component = <Badge>My dummy text</Badge>
        expect(TestRenderer.create(component).toJSON()).toMatchSnapshot()
    })
})