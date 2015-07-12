var request  = require('superagent');

module.exports = {
  searchRepos : function(name){
    request
      .get('http://localhost:1337/search/' + name)
      .set('Accept', 'application/json')
      .end(function(err, res){
        console.log(res);
      });
    }
};
