import React from 'react';
import ActionCreator from '../actions/RepoActionCreators';
import {TextField} from 'material-ui';

export default React.createClass({
  handleOnChange(task) {
    if (this.refs.search.state.hasValue) {
      ActionCreator.searchRepo(this.refs.search.state.hasValue);
    }
  }
  ,
  render() {
    return (
      <TextField name="search" ref="search" onBlur={this.handleOnChange} />
    );
  }
});
