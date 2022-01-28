import React, {useState, useEffect} from 'react';
import Accordion from './Accordion';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const onType = (value) => {
    setTerm(value);
  }

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search)
    };

    if (term)
    {
      search();
    }
  }, [term]);

  return (
    <div>
      <div className = "ui form">
        <div className = "field">
          <label>Enter Search Term</label>
          <input
            className = "input"
            placeholder = "Type here..."
            onChange = {(e) => onType(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Accordion items = {results} />
      </div>
    </div>
  );
};

export default Search;
