import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"

import Header from './Header';
import Restaurant from './Restaurant';

function Page() {

  return(
    <div>
      <Header />
      <h1 className="top-restaurants">Top Restaurants</h1>
      <Restaurant />
      <Restaurant />
    </div>
  )
}

ReactDOM.render(<Page/>, document.getElementById("root"))

