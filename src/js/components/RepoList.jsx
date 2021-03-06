import React from 'react';
import Repo from './Repo.jsx';
import {Paper, List, RaisedButton} from 'material-ui';

export default React.createClass({
  getDefaultProps() {
    return {
      repos: []
    };
  },

  render() {
    let {repos} = this.props;
    return (
      <ul >
        {repos.map(repo =>
         <Repo repo={repo}/>
        )}
      </ul>
    );
  }
});
