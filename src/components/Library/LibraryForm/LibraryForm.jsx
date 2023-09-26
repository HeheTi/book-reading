import { useState } from 'react';
import lib from 'data/library.json';

const LibraryForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [pages, setPages] = useState('');

  const onHandlerSubmit = e => {
    e.preventDefault();
    console.log({ title, author, year, pages });
  };

  return (
    <form onSubmit={onHandlerSubmit}>
      <div>
        <label htmlFor="library-title">{lib.form.title}</label>
        <input
          type="text"
          name="library-title"
          id="library-title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="..."
        />
      </div>

      <div>
        <label htmlFor="library-author">{lib.form.author}</label>
        <input
          type="text"
          name="library-author"
          id="library-author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="..."
        />
      </div>

      <div>
        <label htmlFor="library-year">{lib.form.year}</label>
        <input
          type="text"
          name="library-year"
          id="library-year"
          value={year}
          onChange={e => setYear(e.target.value)}
          placeholder="..."
        />
      </div>

      <div>
        <label htmlFor="library-pages">{lib.form.pages}</label>
        <input
          type="number"
          min={1}
          name="library-pages"
          id="library-pages"
          value={pages}
          onChange={e => setPages(e.target.value)}
          placeholder="..."
        />
      </div>

      <button>{lib.form.btn}</button>
    </form>
  );
};

export default LibraryForm;
