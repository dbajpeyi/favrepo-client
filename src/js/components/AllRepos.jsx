import React from 'react';
import ActionCreator from '../actions/RepoActionCreators';
import {TextField} from 'material-ui';
import RepoStore from '../stores/RepoStore';
import Services from  '../utils/Services';
import request from 'superagent';
import Repo from './Repo.jsx';

export default React.createClass({
  getInitialState() {
    return {
      'favs' : []
    }
  },

  componentDidMount() {
    var _this = this;
    request.get('http://localhost:1337/repos/')
      .set('Accept', 'application/json')
      .end(function(err, res){
      _this.setState({
        'favs' :  res.body
      });
    })
  },


  render() {
    console.log(this.state);
    return (
      <div className="example-page">
        <h1>Save your favorite repos</h1>
          <p>Your saved repos</p>
          <ul>
            {this.state.favs.map(repo =>
              <li id="task-list">
                <p>Name : {repo.name}</p>
                <p>User : {repo.user}</p>
                <p>Stars: {repo.stars}</p>
                <p>Forks: {repo.forks}</p>
                <p>Git url: <a href={repo.url}>{repo.url}</a></p>
              </li>
            )}
          </ul>
 
      </div>
    );
  }
});
