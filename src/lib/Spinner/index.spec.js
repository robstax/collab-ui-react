import React from 'react';
import { shallow, mount } from 'enzyme';
import { Spinner } from '@collab-ui/react';

describe('tests for <Spinner />', () => {
  it('should render a Spinner', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with correct class names', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.find('i').hasClass('cui-spinner')).toEqual(true);
  });

  it('should render with color class name', () => {
    const wrapper = shallow(<Spinner color="blue"/>);

    expect(wrapper.find('i').hasClass('cui-spinner--blue')).toEqual(true);
  });

  it('should render with size class name', () => {
    const wrapper = shallow(<Spinner size={28} />);

    expect(wrapper.find('i').hasClass('cui-spinner--28')).toEqual(true);
  });

  it('should render with color and size class name', () => {
    const wrapper = shallow(<Spinner color="blue" size={20}/>);

    expect(wrapper.find('i').hasClass('cui-spinner--blue')).toEqual(true);
    expect(wrapper.find('i').hasClass('cui-spinner--20')).toEqual(true);
  });

  it('should render progress with size class name', () => {
    const wrapper = shallow(<Spinner percentage={55} size={20}/>);

    expect(wrapper.find('.cui-spinner-progress').hasClass('cui-spinner-progress--20')).toEqual(true);
  });

  it('should render progress with color and size class name', () => {
    const wrapper = shallow(<Spinner percentage={55} color="blue" size={20}/>);

    expect(wrapper.find('.cui-spinner-progress').hasClass('cui-spinner-progress--20')).toEqual(true);
    expect(wrapper.find('.cui-spinner-progress').hasClass('cui-spinner-progress--blue')).toEqual(true);
  });

  it('should render progress with color and size class name with percentage', () => {
    const wrapper = shallow(<Spinner percentage={55} color="blue" size={36} showPercentage/>);

    expect(wrapper.find('.cui-spinner-progress').hasClass('cui-spinner-progress--36')).toEqual(true);
    expect(wrapper.find('.cui-spinner-progress').hasClass('cui-spinner-progress--blue')).toEqual(true);
    expect(wrapper.find('.cui-spinner-progress__inset-circle').children().length).toEqual(1);
  });

  it('should render progress with color and size class name with no percentage', () => {
    const wrapper = shallow(<Spinner percentage={55} color="blue" size={36} showPercentage={false}/>);

    expect(wrapper.find('.cui-spinner-progress').hasClass('cui-spinner-progress--36')).toEqual(true);
    expect(wrapper.find('.cui-spinner-progress').hasClass('cui-spinner-progress--blue')).toEqual(true);
    expect(wrapper.find('.cui-spinner-progress__inset-circle').children().length).toEqual(0);
  });

  it('should warn with showProgress but size set to anything but 36', () => {
    global.console = {warn: jest.fn()};
    const wrapper = mount(<Spinner percentage={55} color="blue" size={16} showPercentage/>);
    wrapper.update();

    expect(wrapper.find('.cui-spinner-progress').hasClass('cui-spinner-progress--16')).toEqual(true);
    expect(global.console.warn).toHaveBeenCalledTimes(1);
  });
});
