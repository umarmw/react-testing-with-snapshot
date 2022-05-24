import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render a list of books
 *
 * @param {Object} props - List of books
 */
function Books(props) {
  const { books = [] } = props;

  // A single book in the list, render book in paragraph element
  if (books.length === 1) {
    return <p>{books[0]}</p>;
  }

  // Multiple books on the list, render a list.
  if (books.length > 1) {
    return (
      <ol>
        {books.map(book => <li key={book}>{book}</li>)}
      </ol>
    );
  }

  // No books on the list, render an empty message.
  return <span>We didn't find any books.</span>;
}

Books.propTypes = {
    books: PropTypes.array,
};

Books.defaultProps = {
    books: []
};

export default Books;