todoList.controller('TodoListController', function() {
  var self = this;

  self.todos = [];

  self.addTodo = function(newTodo){
    self.todos.push({title: newTodo, done: false});
    self.newTodo = '';
  };

  self.removeTask = function () {
   var oldList = self.todos;
   self.todos = [];

   for (var i = 0; i < oldList.length; i++) {
     if (!oldList[i].done) {
       self.todos.push(oldList[i]);
     }
   }
  }
  // self.clearList = function(){
  //   self.todos = 0;
  // };

});
