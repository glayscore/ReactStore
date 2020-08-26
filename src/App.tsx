import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Views = React.lazy(() => import('./views'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Views />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
