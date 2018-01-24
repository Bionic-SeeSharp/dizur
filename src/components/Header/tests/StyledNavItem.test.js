import React from 'react';
import { shallow } from 'enzyme';

import StyledNavItem from '../StyledNavItem';
import { NavItem } from 'reactstrap';

describe('<StyledNavItem />', () => {
  it('render a StyledNavItem', () => {
    const wrapper = shallow(<StyledNavItem />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render a StyledNavItem', () => {
    const renderedComponent = shallow(<StyledNavItem />);
    expect(renderedComponent.type()).toEqual(NavItem);
  });
  it('should have a className attribute', () => {
    const renderedComponent = shallow(<StyledNavItem />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});
