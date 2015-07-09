import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

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
  }
};
