import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = [];

// add private functions to modify data
function addItem(items, completed=false) {
  items.map(function(item){
    _data.push(item);
  });
}

function emptyItems(){
  _data.length = 0;
};

// Facebook style store creation.
const RepoStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      repos: _data
    };
  },


  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.TASK_ADDED:
        let text = action.text.trim();
        // NOTE: if this action needs to wait on another store:
        // Dispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (text !== '') {
          addItem(text);
          RepoStore.emitChange();
        }
        break;

        case Constants.ActionTypes.SEARCHED:
          emptyItems();
        let repoName = action.text;
        if (repoName !== '') {
          RepoStore.emitChange();
        }
        break;


        case Constants.ActionTypes.RECEIVED_RESULT:
        let items = action.items;
        console.log('receiving',items);
        if (items.length) {
          addItem(items);
          RepoStore.emitChange();
        }
        break;
    }
  })
});

export default RepoStore;
