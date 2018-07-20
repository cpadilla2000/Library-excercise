var SearchUI = function(container){
  Library.call(this);
  this.$container = $('#searchForm');
};

SearchUI.prototype = Object.create(Library.prototype);


SearchUI.prototype.init = function() {
  this.retrieveBooks();
  this._bindEvents();
  //this._bindCustomListeners();
};

SearchUI.prototype._bindEvents = function () {
  //add native events here
  $('#search-btn').on('click', $.proxy(this._handleSearch, this));
  return false;
  //console.log("hello1");
};

SearchUI.prototype._handleSearch = function (pre) {

  var searchInput = this.$container.find("#authorAndTitle-Input").val();

  var searchResult = this.searchLibrary(searchInput)


  this.handleEventTrigger('searchUp', searchResult)
  //console.log(searchResult);
  pre.preventDefault();

  return;




  // this.$container.find('.modal-body').text(recBooks.title);
  // //console.log(recBooks);
  //
  //  this.$container.modal('show');

   // return;
};



$(function(){
  window.gSearchUI = new SearchUI();
  window.gSearchUI.init();
});
