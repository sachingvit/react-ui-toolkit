import LabelInput from "./LableInput"
import React from "react";
import {rea} from "react-dom";
import TestRenderer from "react-test-renderer";
import LableInput from "./LableInput";


describe("component > LabelInput", () => {

    it('render', () => {
        const props = {
            id: 'input-field',
            layoutClasses: 'label-class',
            labelClasses: 'label-class',
            // inline = false,
            fieldClasses: 'field-class',
            show: true,
            label: 'First Name'
        }
        expect(TestRenderer.create(<LableInput {...props} />).toJSON()).toMatchSnapshot()
    })

    it('render as show false', () => {
        const props = {
            id: 'input-field',
            layoutClasses: 'label-class',
            labelClasses: 'label-class',
            // inline = false,
            fieldClasses: 'field-class',
            show: false,
            label: 'First Name'
        }
        expect(TestRenderer.create(<LableInput {...props} />).toJSON()).toMatchSnapshot()
    })
})