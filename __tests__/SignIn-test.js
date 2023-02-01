import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '../src/screens/SignIn';

test('SignIn renders correctly', () => {
  const element = renderer.create(<SignIn />).toJSON();
  expect(element).toMatchSnapshot();
});

it('renders SignIn', () => {
  const element = renderer.create(<SignIn />).toJSON();
  expect(element).toMatchSnapshot();
});
