var RecommendedBookUI = function(){
  Library.call(this);
  this.$container = $('#recomBook');
};

RecommendedBookUI.prototype = Object.create(Library.prototype);


RecommendedBookUI.prototype.init = function() {
  this.retrieveBooks();
  this._bindEvents();
  //this._bindCustomListeners();
};

RecommendedBookUI.prototype._bindEvents = function () {
  //add native events here
  $('#recommend-btn').on('click', $.proxy(this._handleModalOpen, this));

  //console.log("hello1");
};

RecommendedBookUI.prototype._handleModalOpen = function () {
  //console.log('hello2');

  var recBooks = this.getRandomBook();

  var title = this.title;

  var myUl = document.createElement("ul");// create unordered list

  for (var i = 0; i < recBooks.length; i++) {
    var li = document.createElement("li");
    $(li).text(recBooks[i]);
    myUl.append(li)


  }


  //this.$container.find('.modal-body').html(myUl);
  this.$container.find('.modal-body').text(recBooks.title);
  //console.log(recBooks);

   this.$container.modal('show');

   return;
};



$(function(){
  window.gRecommendedBookUI = new RecommendedBookUI();
  window.gRecommendedBookUI.init();
});
