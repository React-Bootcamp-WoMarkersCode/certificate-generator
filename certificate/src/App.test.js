import React from 'react';
// import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });
})
