todoList.controller('TodoListController', function() {
  var self = this;

  self.todos = [];

  self.addTodo = function(newTodo){
    self.todos.push({title: newTodo, done: false});
    self.newTodo = '';
  };

  // self.clearList = function(){
  //   self.todos = 0;
  // };

});
