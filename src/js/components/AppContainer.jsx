import React from 'react';
import RepoStore from '../stores/RepoStore';
import ActionCreator from '../actions/RepoActionCreators';
import App from './App.jsx';

export default React.createClass({
  _onChange() {
    this.setState(RepoStore.getAll());
  },

  getInitialState() {
    return RepoStore.getAll();
  },

  componentDidMount() {
    RepoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    RepoStore.removeChangeListener(this._onChange);
  },

  handleAddTask(e) {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClear(e) {
    ActionCreator.clearList();
  },

  render() {
    let {repos} = this.state;
    return (
      <App
        onAddTask={this.handleAddTask}
        onClear={this.handleClear}
        repos={repos} />
    );
  }
});
