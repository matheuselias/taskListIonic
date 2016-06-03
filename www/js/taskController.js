angular.module('taskListApp')
.controller('taskCtrl', function($scope, taskFactory, $ionicModal){
  $ionicModal.fromTemplateUrl('createModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
    $scope.task = {};
    $scope.task = {
        date: new Date()
      };
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  getTasks = function(){
    taskFactory.query({id: ''},
      function(data){
        $scope.tasks = data;
      });
  };

  $scope.createTask = function(task){
    taskFactory.save({task: task},
      function(){
        getTasks();
        $scope.closeModal();
      });
  };

  $scope.removeTask = function(task){
    taskFactory.remove({id: task.id},
      function() {
        getTasks();
      });
  };

  $scope.updateTask = function(task){
    taskFactory.update({id: task.id}, {task: task});
  };

  getTasks();
});
