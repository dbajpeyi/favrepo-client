import React from 'react';
import ActionCreator from '../actions/RepoActionCreators';
import {Checkbox, ListItem, List, RaisedButton} from 'material-ui';
import Router from 'react-router';
var Navigation = Router.Navigation;

export default React.createClass({
  

  mixins: [Navigation],

  handleOnClick() {
  	if (this.props) {
      ActionCreator.saveRepo(this.props);
      this.transitionTo("/all");
    }
    
  },

  render() {
    
    let {repo} = this.props;
    return (
     	 <li repo={repo} id="task-list">
            <p class="inlist">Name : {repo.full_name}</p>
            <p class="inlist">Stars : {repo.stargazers_count}</p>
            <p class="inlist">Forks : {repo.forks}</p>
            <p class="inlist">Git url : <a href={repo.clone_url}>{repo.clone_url}</a></p>
            <RaisedButton label="Save this" primary={true} onClick={this.handleOnClick} />
          </li>
      );
  }
});
