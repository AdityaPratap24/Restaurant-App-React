import { Fragment } from 'react';

import Meals from './component/Meal/Meals';
import Header from './component/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;