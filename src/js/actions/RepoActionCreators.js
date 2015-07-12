import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import Services from  '../utils/Services'

export default {
  addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_ADDED,
      text: text
    });
  },

  searchRepo(text){
    Dispatcher.handleViewAction({
      type : Constants.ActionTypes.SEARCHED,
      text : text
    });
    Services.searchRepos(text);
  },

  saveRepo(item){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SAVED,
      item : item
    });
    Services.saveRepo(item);
  },

  saveDone(item){
    Dispatcher.handleViewAction({
      type : Constants.ActionTypes.SAVE_DONE,
      item : item
    });
  },

  getAll(){
    Dispatcher.handleViewAction({
      type:Constants.ActionTypes.GOTALL
    });
    Services.favRepos();
  },

  getAllDone(result){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.ALL_DONE,
      items : result,
    });
  },

  receiveRepo(items){
    Dispatcher.handleViewAction({
      type : Constants.ActionTypes.RECEIVED_RESULT,
      items : items
    });
  }
};
