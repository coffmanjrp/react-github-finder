import { useContext, useState } from 'react';
import { GithubContext } from '../../context/github';
import { AlertContext } from '../../context/alert';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { users, clearUsers, searchUsers } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
