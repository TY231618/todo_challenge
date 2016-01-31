todoList.controller('TodoListController', function() {
  var self = this;

  self.todos = [];
  self.filteredTodoList = [];
  self.oldList = [];

  self.addTodo = function(newTodo){
    self.filterAll();
    self.todos.push({title: newTodo, done: false});
    self.newTodo = '';
    self.filteredTodoList = self.todos;

  };

  self.removeTask = function () {
    self.filterAll();
    self.oldList  = self.todos;
    self.todos = [];


   for (var i = 0; i < self.oldList.length; i++) {
     if (!self.oldList[i].done) {
       self.todos.push(self.oldList[i]);
     }
   }
   self.filteredTodoList = self.todos;

  }

  self.completedTask = function () {
    self.oldList = self.filteredTodoList;
    self.todos = [];

   for (var i = 0; i < self.oldList.length; i++) {
     if (self.oldList[i].done) {
       self.todos.push(self.oldList[i]);
     }
   }
  }

  self.activeTask = function () {
    self.oldList = self.filteredTodoList;
    self.todos = [];

    for (var i = 0; i < self.oldList.length; i++) {
      if (!self.oldList[i].done) {
        self.todos.push(self.oldList[i]);
      }
    }
  }

  self.filterAll = function () {
    self.taskList = self.filteredTodoList;
  }


});
