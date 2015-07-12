import React from 'react';
import ActionCreator from '../actions/RepoActionCreators';
import {Checkbox, ListItem, List, RaisedButton} from 'material-ui';

export default React.createClass({

  handleOnClick() {
  	if (this.props) {
      ActionCreator.saveRepo(this.props);
    }
  },

  render() {
    
    let {repo} = this.props;
    return (
     	 <li repo={repo}>
            <p class="list-name">Name : {repo.full_name}</p>
            <p class="list-stars">Stars : {repo.stargazers_count}</p>
            <p class="list-forks">Forks : {repo.forks}</p>
            <p class="list-forks">Git url : <a href={repo.clone_url}>{repo.clone_url}</a></p>
            <RaisedButton label="Save this" primary={true} onClick={this.handleOnClick} />
          </li>
      );
  }
});
