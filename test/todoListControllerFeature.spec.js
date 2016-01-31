describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('new todo', function(){
    it('adds a todo to a list', function(){
      ctrl.addTodo('set alarm');
      expect(ctrl.newTodo).toEqual('');
      expect(ctrl.todos[0].title).toEqual("set alarm");
    });

    it('new todos are not completed', function(){
      ctrl.addTodo('set alarm');
      expect(ctrl.todos[0].done).toEqual(false)
    })
  });

  describe('#removeTask', function(){
    it('', function() {
      ctrl.addTodo('set alarm');
      ctrl.todos[0].done = true;
      ctrl.removeTask();
      expect(ctrl.todos.length).toEqual(0);
    })
  })

  describe('#completedTask', function () {
    it('displays all completed tasks', function () {
      ctrl.addTodo('set alarm');
      ctrl.addTodo('make breakfast');
      ctrl.todos[0].done = true;
      ctrl.completedTask();
      expect(ctrl.todos.length).toEqual(1);
    });
  });
});
