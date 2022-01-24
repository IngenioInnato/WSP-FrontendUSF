import React from "react";
import ReactDom from "react-dom";

import App from '@components/App';
import "@styles/global.css";

ReactDom.render( <App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./index.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}