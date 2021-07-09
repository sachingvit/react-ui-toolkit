import Label from './Label'
import TestRenderer from 'react-test-renderer';

describe('Component > Label', () => {

    let props;

    beforeEach(() => {
        props = {
            label: 'test label string',
            id: '1'
        }
    })

    it('render componet', () => {
        const componentProps = {
            ...props
        }
        const component = <Label {...componentProps} />
        expect(TestRenderer.create(component).toJSON()).toMatchSnapshot()
    })

    it('render without label', () => {
        const component = <Label />
        expect(TestRenderer.create(component).toJSON()).toMatchSnapshot()
    })
})