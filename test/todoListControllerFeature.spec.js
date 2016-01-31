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
      expect(ctrl.todos[0].title).toEqual("set alarm");
    });
  });
});
