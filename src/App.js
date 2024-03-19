import React, { useState, useEffect } from 'react';
import Pages from './pages';
import { portfolioUserName } from './config';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://gitconnected.com/v1/portfolio/${portfolioUserName}`)
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return (
      <div className='loading'>
        <FontAwesomeIcon icon={faSpinner} />
      </div>
    )
  }

  return <Pages user={user} />;
}

export default App;
