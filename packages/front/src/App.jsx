import React, { useState, useEffect } from 'react';

function App() {
  const [foo, setFoo] = useState('N/A');
  useEffect(
    () => {
      fetch('/api/foo')
        .then((res) => res.json())
        .then((data) => setFoo(data.foo))
        .catch((err) => setFoo(err.message));
    },
  );
  return (
    <div>
      <h1>Hello World</h1>
      <p>
Server responded with foo:
        {foo}
      </p>
    </div>
  );
}

export default App;
