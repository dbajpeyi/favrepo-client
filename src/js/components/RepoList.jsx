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
      <ul id="task-list">
        {repos.map(repo =>
          <li repo={repo}>
            <p class="list-name">Name : {repo.full_name}</p>
            <p class="list-stars">Stars : {repo.stargazers_count}</p>
            <p class="list-forks">Forks : {repo.forks}</p>
            <p class="list-forks">Git url : <a href={repo.clone_url}>{repo.clone_url}</a></p>
            <RaisedButton label="Save this" primary={true} />
          </li>
        )}
      </ul>
    );
  }
});
