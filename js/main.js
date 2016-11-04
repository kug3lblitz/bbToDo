var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var myTodo = new Todo({
  title: "Check stuff in console. This is a test."
});

var TodoView = Backbone.View.extend({
  tagname: 'li',
    todoTpl: _.template($('#item-template').html()),
    
  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  initialize: function(){
    this.$el = $('#todo');
    console.log("this model has been initialized"); 
    this.on('change', function(){
      console.log("value for this model has changed."); 
    });
  },

  render: function(){
    this.$el.html(this.todoTpl(this.model.attributes));
      this.input = this.$('.edit');
      return this;
  },

  edit: function(){},

  close: function(){},

  updateOnEnter: function(e){}

});

var TodosView = Backbone.View.extend({
  tagname: 'ul',
  className: 'container',
  id: 'todos'
});

var todoView = new TodoView({ model: myTodo});

var todosView = new TodosView();
console.log(todosView.el);

todoView.render();
