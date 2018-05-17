import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './style/style.css';

import App from './components/app';
import SongList from './components/songList';
import SongCreate from './components/songCreate';
import SongDetail from './components/songDetail';

const client = new ApolloClient({
  dataIdFromObject: o => o.id   // Assign an id to every piece of data in the Apollo store (remember to ask for the id in every query!)
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} /> {/* The :id tells react router to add the given value to the components props.params object */}
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
