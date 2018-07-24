var ShowBooksUI = function(){
  Library.call(this);
  this.$container = $('#showBooks');
};

ShowBooksUI.prototype = Object.create(Library.prototype);


ShowBooksUI.prototype.init = function() {
  this.retrieveBooks();
  this._bindEvents();
  //this._bindCustomListeners();
};

ShowBooksUI.prototype._bindEvents = function () {
  //add native events here
  $('#showBooks-btn').on('click', $.proxy(this._handleShowTitles, this));
  //$('#rand-btn').on('click', $.proxy(this._handleModalOpen, this));
  //console.log("hello");
};

ShowBooksUI.prototype._handleShowTitles = function () {

  var titles = this.getTitles()

  if(titles.length)

  this.$container.modal('show');
  this.$container.find('.modal-body').html(this._createUlOfTitles(titles));

    return;

};

ShowBooksUI.prototype._createUlOfTitles = function (titles) {


  var ul = document.createElement('ul')
  for (var i = 0; i < titles.length; i++) {
    var li = document.createElement('li')
    $(li).text(titles[i]);
    ul.append(li)
  }
  return ul;

};


$(function(){
  window.gShowBooksUI = new ShowBooksUI();
  window.gShowBooksUI.init();
});
