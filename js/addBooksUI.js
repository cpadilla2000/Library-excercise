// var AddBooksUI = function(container){
//   Library.call(this);
//   this._queue = new Array();
//   this.$container = container;
// };
//
// AddBooksUI.prototype = Object.create(Library.prototype);
//
// AddBooksUI.prototype.init = function() {
//   this._bindEvents();
// };
//
// AddBooksUI.prototype._bindEvents = function () {
//   $('#add-modal-btn').on('click', $.proxy(this._handleModalOpen, this));
//   $('#add-queue-btn').on('click', $.proxy(this._handleAddToQueue, this));
//
// };
//
// AddBooksUI.prototype._handleModalOpen = function () {
//    this.$container.modal('show');
// };
//
// AddBooksUI.prototype._handleAddToQueue = function () {
//
//   var sForm = this.$container.find('form').serializeArray()
//   console.log(sForm);
// };
//
// $(function(){
//   window.gAddBooksUI = new AddBooksUI($('#addModal'));
//   window.gAddBooksUI.init();
// });
















var AddBooksUI = function(){
  Library.call(this);
  this._queue = new Array();
  this._bookCounter = 0
  this.$container = $('#addModal');
};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function() {
  this._bindEvents();
};

AddBooksUI.prototype._bindEvents = function () {
  ///this = my instance
  this.$container.find('#add-queue-btn').on('click', $.proxy(this._queueBook, this));
  this.$container.find('#books-to-lib').on('click', $.proxy(this._addQueuedToLibrary, this));
  this.$container.find('.clear-q').on('click', $.proxy(this._clearQueue, this));
  $('#add-modal-btn').on('click', $.proxy(this._handleModalOpen, this));

  //bind event to add books to queue
  //bind event to add queued books through library to bookshelf
};

//kvp = our object of {name: "key", value: "value"}
//index = index of sForm array
//oBook = the new object we want to build

//Two ways to access and set a key value pair in an object
//oBook[]
//oBook.
AddBooksUI.prototype._queueBook = function (e) {
  //console.log('qBookHappened');
  //e.preventDefault();
  this.handleEventTrigger('objUpdate')
  var sForm = this.$container.find('form').serializeArray();
  var oBook = new Object();
  var wasBookValid = true;
   console.log(sForm);

  $.each(sForm, function(index, kvp){
    if(kvp.value) {
      oBook[kvp.name] = kvp.value;
    } else {
      wasBookValid = false;
      alert("Please enter value for: " + kvp.name);
    }
  });

  // console.log("object create: " + oBook);
   console.log(oBook);
   var book = new Book(oBook)
   console.log(book);

  if(wasBookValid && this.checkForDup(book)) {
    this._bookCounter++
    this.$container.find('.books-to-q').text(this._bookCounter);
    this._queue.push(book)

  }
  // console.log(this._queue);
  return wasBookValid;
};
AddBooksUI.prototype._handleModalOpen = function () {
   this.$container.modal('show');
};

AddBooksUI.prototype._addQueuedToLibrary = function () {
  console.log('qqqqq');
  if(this._queue.length) {
    // console.log("first check");
    this.addBooks(this._queue)
    this._bookCounter = 0
    this.$container.find('.books-to-q').text(this._bookCounter);

      // console.log("was added");
      this._clearQueue();

  } else {
    alert("Please queue at least one book.")
  }
  return false;
};

AddBooksUI.prototype._clearQueue = function () {
  this._queue = new Array();
  this.$container.find('.queueNumber').text(this._queue.length);
  return false;
};

$(function(){
  window.gAddBooksUI = new AddBooksUI();
  window.gAddBooksUI.init();
});
