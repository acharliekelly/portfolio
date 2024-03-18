import React, { useState, useEffect } from 'react';
import Pages from './pages';
import { portfolioUserName } from './config';

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
      <div>
        <h1>Missing portfolio user!</h1>
      </div>
    )
  }

  return <Pages user={user} />;
}

export default App;
