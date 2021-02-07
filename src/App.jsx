import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from './components/layout';
import { Users } from './components/users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const res = await axios.get('https://api.github.com/users');
      setUsers(res.data);
      setLoading(false);
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Users users={users} loading={loading} />
      </div>
    </div>
  );
}

export default App;
