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
    };
  },

  componentDidMount() {
    var _this = this;
    request.get('http://localhost:1337/repos/')
      .set('Accept', 'application/json')
      .end(function(err, res){
        console.log(res.body);
      _this.setState(res.body);
    })
  },


  render() {
    let {favs} = this.state;
    return (
      <div className="example-page">
        <h1>Save your favorite repos</h1>
          <p>Your saved repos</p>
          {this.state}
      </div>
    );
  }
});
