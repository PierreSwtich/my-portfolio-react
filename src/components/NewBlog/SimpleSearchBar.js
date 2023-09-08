import React, { useState, useEffect } from 'react';

const SimpleSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Extract the 'q' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const queryFromURL = urlParams.get('q');

    // Set the searchQuery state with the query from the URL
    if (queryFromURL) {
      setSearchQuery(queryFromURL);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim() !== '') {
      // Replace spaces with "+" in the search query
      const encodedQuery = encodeURIComponent(searchQuery).replace(/%20/g, '+');

      // Construct the URL with the search query
      const searchUrl = `/new-blog/search?q=${encodedQuery}`;

      // Redirect to the constructed URL
      window.location.href = searchUrl;
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    window.location.href = '/new-blog';
  };

  return (
    <div className='searchBar-wrap'>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search By Category'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <span onClick={handleClearSearch}>X</span>
        )}
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default SimpleSearchBar;
