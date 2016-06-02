angular.module('taskListApp')
.controller('taskCtrl', function($scope, taskFactory){
  getTasks = function(){
    taskFactory.query({id: ''},
      function(data){
        $scope.tasks = data;
      },
      function(data){
        alert('Ocorreu um problema ao carregar as Tasks!');
      });
  };

  getTasks();
});
