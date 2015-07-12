import ActionCreator from '../actions/RepoActionCreators';
var request  = require('superagent');


module.exports = {
  searchRepos : function(name){
    request
      .get('http://localhost:1337/search/' + name)
      .set('Accept', 'application/json')
      .end(function(err, res){
        ActionCreator.receiveRepo(res.body.items)
      });
    },

    saveRepo : function(item){
    	var item = item.repo;
    	request
    		.post('http://localhost:1337/repo/save/')
    		.send({
    			name : item.full_name,
    			user : item.owner.html_url,
    			forks : item.forks,
    			stars: item.stargazers_count,
    			url : item.clone_url,
    		})
    		.set('Accept', 'application/json')
    		.end(function(err,res){
    			ActionCreator.saveDone(res.body.item);	
    		});
    },

    favRepos : function(){
    	request
    		.get('http://localhost:1337/repos/')
    		.set('Accept', 'application/json')
    		.end(function(err, res){
    			res.body;
    			ActionCreator.getAllDone(res.body);
    		});	
    }
};
