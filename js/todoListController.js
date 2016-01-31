todoList.controller('TodoListController', function() {
  var self = this;

  self.todos = [];

  self.addTodo = function(newTodo){
    self.todos.push({'title': newTodo, 'done': false});
  };

  // self.addTask = function(taskname){
  //     self.taskList.push({task: taskname, completed: false})
  //   };
});
