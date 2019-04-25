import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import client from './graphql/client';

import * as serviceWorker from './serviceWorker';

import App from './app/App';
// import Page404 from './app/pages/Page404';

const Index = () => (
  <ApolloProvider client={client}>
    <App client={client}/>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Index />, rootElement);
} else {
  ReactDOM.render(<Index />, rootElement);
}

serviceWorker.unregister();
