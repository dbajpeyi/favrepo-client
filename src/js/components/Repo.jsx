import React from 'react';
import ActionCreator from '../actions/RepoActionCreators';
import {Checkbox, ListItem, List} from 'material-ui';

export default React.createClass({

  handleToggle(repo) {
    if (this.refs.checkbox.isChecked()) {
      ActionCreator.completeTask(repo);
    }
  },

  render() {
    
    let {repo} = this.props.repo;
    return (
      <ListItem primaryText='Whatever' secondaryText={<div>repo.full_name</div>}/>
    );
  }
});
