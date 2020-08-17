import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Home, NotFound, SeriesList } from './sections';
import { AppHeader } from './lib/components';

import 'antd/dist/antd.css';
import './index.css';

const { Content } = Layout;

const client = new ApolloClient({
  uri: 'http://localhost:9000/api',
  request: async (operation) => {
    const token = sessionStorage.getItem('token');
    operation.setContext({
      headers: {
        'X-CSRF-TOKEN': token || '',
      },
    });
  },
});

const App = () => {
  return (
    <Router>
      <AppHeader />
      <Content>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/series/genres/:genres" component={SeriesList} />
          <Route path="/series/name/:name" component={SeriesList} />
          <Route component={NotFound} />
        </Switch>
      </Content>
    </Router>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
