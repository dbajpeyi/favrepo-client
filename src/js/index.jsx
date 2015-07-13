import React from 'react';
import AppContainer from './components/AppContainer.jsx';
import Search from './components/Search.jsx';
import RepoList from  './components/RepoList.jsx';
import AllRepos from './components/AllRepos.jsx';

var Router = require('react-router');
var Route = Router.Route;

// declare our routes and their hierarchy

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render () {
    return (
      <div>
        <RouteHandler/>
      </div>
    )
  }
});

var routes = (
 <Route handler={App}>	
  <Route handler={AppContainer} />
  <Route path="/all" handler={AllRepos}/>
  </Route>
);


Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('main'));
});
