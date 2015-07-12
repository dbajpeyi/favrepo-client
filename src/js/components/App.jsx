import React, {PropTypes} from 'react';
import RepoList from './RepoList.jsx';
import Search from './Search.jsx'
import {AppCanvas, RaisedButton, Styles} from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({
  propTypes: {
    repos: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      repos: []
    }
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    let {onAddTask, onClear, repos} = this.props;
    return (
      <div className="example-page">
        <h1>Save your favorite repos</h1>
        <p>
          A dumb app to bookmark your favorite github repos
        </p>

        <Search />

        <RepoList repos={repos} />

      </div>
    );
  }
});
