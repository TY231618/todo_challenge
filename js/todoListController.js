todoList.controller('TodoListController', function() {
  var self = this;

  self.todos = [];
  self.filteredTodoList = [];
  self.oldList = [];

  self.addTodo = function(newTodo){
    self.allTodo();
    self.todos.push({title: newTodo, done: false});
    self.newTodo = '';
    self.filteredTodoList = self.todos;

  };

  self.removeTodo = function () {
    self.allTodo();
    self.oldList  = self.todos;
    self.todos = [];


   for (var i = 0; i < self.oldList.length; i++) {
     if (!self.oldList[i].done) {
       self.todos.push(self.oldList[i]);
     }
   }
   self.filteredTodoList = self.todos;

  }

  self.completedTodo = function () {
    self.oldList = self.filteredTodoList;
    self.todos = [];

   for (var i = 0; i < self.oldList.length; i++) {
     if (self.oldList[i].done) {
       self.todos.push(self.oldList[i]);
     }
   }
  }

  self.activeTodo = function () {
    self.oldList = self.filteredTodoList;
    self.todos = [];

    for (var i = 0; i < self.oldList.length; i++) {
      if (!self.oldList[i].done) {
        self.todos.push(self.oldList[i]);
      }
    }
  }

  self.allTodo = function () {
    self.todos = self.filteredTodoList;
  }


});
