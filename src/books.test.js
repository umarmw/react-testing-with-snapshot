import React from 'react';
import renderer from 'react-test-renderer';

import Books from './Books';

it('should render an empty message when no books', () => {
  const elem = renderer.create(<Books />).toJSON();
  expect(elem).toMatchSnapshot();
});

it('should render a single book', () => {
    const books = ['Harry Potter']
    const elem = renderer.create(<Books books={books} />).toJSON();
    expect(elem).toMatchSnapshot();
});

it('should verify if the title matches', () => {
    const books = ['Harry Potter']
    const elem = renderer.create(<Books books={books} />).root;
    expect(elem.findByType("p").props.children).toEqual('Harry Potter');
});

it('should have 3 books listed', () => {
    const books = ['Harry Potter', 'The Lord of the Rings', 'The City of Dreaming Books']
    const elem = renderer.create(<Books books={books} />).root;
    expect(elem.findByType("ol").children.length).toEqual(3);
});

it('should render multiple books', () => {
    const books = ['Harry Potter', 'The Lord of the Rings']
    const elem = renderer.create(<Books books={books} />).toJSON();
    expect(elem).toMatchSnapshot();
});