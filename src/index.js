import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RouteProvider, Route } from 'react-router5';
import { ApolloProvider } from 'react-apollo';

import client from '../client/src/graphql/client';
import router from './router';

import * as serviceWorker from '../client/src/serviceWorker';

import App from '../client/src/app/App';
// import Page404 from './app/pages/Page404';

const Index = () => (
    <ApolloProvider client={client}>
      <RouteProvider router={router}>
        <Route>{({ route }) => {
          if (route !== null) {
            return <App client={client} route={route}/>
          // } else {
          //   return <Page404/>
          }
        }}</Route>
      </RouteProvider>
    </ApolloProvider>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Index />, rootElement);
} else {
  ReactDOM.render(<Index />, rootElement);
}

serviceWorker.unregister();
