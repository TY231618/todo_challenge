todoList.controller('TodoListController', function() {
  var self = this;

  self.todos = [];
  self.filteredTasklist = [];
  self.oldList = [];

  self.addTodo = function(newTodo){
    self.todos.push({title: newTodo, done: false});
    self.newTodo = '';
  };

  self.removeTask = function () {
   self.oldList = self.todos;
   self.todos = [];

   for (var i = 0; i < self.oldList.length; i++) {
     if (!self.oldList[i].done) {
       self.todos.push(self.oldList[i]);
     }
   }
  }

  self.completedTask = function () {
   self.oldList = self.todos;
   self.todos = [];

   for (var i = 0; i < self.oldList.length; i++) {
     if (self.oldList[i].done) {
       self.todos.push(self.oldList[i]);
     }
   }
  }

});
