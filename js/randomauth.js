var DataTable = function(){
  Library.call(this);
  this.$container = $('#randAuthor');
};

DataTable.prototype = Object.create(Library.prototype);

DataTable.prototype.init = function() {
  this._bindEvents();
  this._bindCustomListeners();
};

DataTable.prototype._bindEvents = function () {
  //add native events here
  $('#rand-btn').on('click', $.proxy(this._handleModalOpen, this));
};

DataTable.prototype._bindCustomListeners = function () {

};

DataTable.prototype. = function (){

console.log('hello');

};

AddBooksUI.prototype._handleModalOpen = function () {
   this.$container.modal('show');

};

$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
