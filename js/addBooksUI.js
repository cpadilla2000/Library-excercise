var AddBooksUI = function(container){
  Library.call(this);
  this._queue = new Array();
  this.$container = container;
};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function() {
  this._bindEvents();
};

AddBooksUI.prototype._bindEvents = function () {
  $('#add-modal-btn').on('click', $.proxy(this._handleModalOpen, this));
  $('#add-queue-btn').on('click', $.proxy(this._handleAddToQueue, this));

};

AddBooksUI.prototype._handleModalOpen = function () {
   this.$container.modal('show');
};

AddBooksUI.prototype._handleAddToQueue = function () {

  var sForm = this.$container.find('form').serializeArray()
  console.log(sForm);
};

$(function(){
  window.gAddBooksUI = new AddBooksUI($('#addModal'));
  window.gAddBooksUI.init();
});
