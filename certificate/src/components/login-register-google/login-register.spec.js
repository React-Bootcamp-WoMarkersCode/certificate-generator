import React from 'react';
import GoogleAccount from './index';

import { shallow } from 'enzyme';

describe('teste response', () => {
    it('clicks it', () => {
        const app = shallow(<GoogleAccount />)
        const instance = app.instance()
        const spy = jest.spyOn(instance, 'responseGoogle')

        instance.forceUpdate();

        const button = app.find('#buttongoogle')
        button.simulate('click')
        expect(spy).toHaveBeenCalled()
    });

})