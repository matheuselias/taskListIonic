angular.module('taskListApp')
.controller('taskCtrl', function($scope, taskFactory){
  getTasks = function(){
    taskFactory.query({id: ''},
      function(data){
        $scope.tasks = data;
      });
  };

  $scope.removeTask = function(task){
    if (confirm('Realmente deseja excluir a task ' + task.title + '?')) {
      taskFactory.remove({id: task.id},
        function() {
          getTasks();
        });
    }
  };

  $scope.updateTask = function(task){
    taskFactory.update({id: task.id}, {task: task});
  };

  getTasks();
});
