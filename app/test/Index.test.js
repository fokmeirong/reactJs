import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Index from '../component/Index/Index.js';


describe('Index', () => {
    it('render Index page', () => {
      const wrapper = render(
        <Index/>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    })
});