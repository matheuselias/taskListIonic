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

  $scope.updateTask = function(task){
    taskFactory.update({id: task.id}, {task: task});
  };

  getTasks();
});
