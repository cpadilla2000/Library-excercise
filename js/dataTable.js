var DataTable = function(){
  Library.call(this);
  this.$container = $('#data-table');
};

DataTable.prototype = Object.create(Library.prototype);

DataTable.prototype.init = function() {
  this._updateTable();
  this._bindEvents();
  this._bindCustomListeners();
};

DataTable.prototype._bindEvents = function () {
  //add native events here
};

DataTable.prototype._bindCustomListeners = function () {
  $(document).on('objUpdate', $.proxy(this._updateTable, this));
};

DataTable.prototype._updateTable = function (e) {
  // alert(e.detail.data);
  var _self = this;
  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  if(window._bookshelf){
    this.$container.find('#data-t-head').replaceWith(this._createHead(window._bookshelf[0]))
    $.each(window._bookshelf, function(index, book){
      $tbody.append(_self._createRow(book));
    });
  }else{
    alert("no books in the bookshelf")
  }

};

DataTable.prototype._createHead = function (book) {

  thead = document.createElement('thead')
  tr = document.createElement('tr')
  $(tr).addClass("warning")
  thead.append(tr)
  for (var key in book) {
    //console.log(key);
    th = document.createElement('th')
    $(th).text(key)
    tr.append(th)

    }
    tg = document.createElement('th')//find better wayyyyyyyy
    tr.append(tg)
    $(tg).text('Edit')
    tj = document.createElement('th')//find better wayyyyyyyy
    tr.append(tj)
    $(tj).text('Remove Book')
    //console.log(thead);
    return thead;

};

DataTable.prototype._createRow = function (book) {
  var tr = document.createElement('tr');
  var deleteInput = document.createElement('input');
  var att = document.createAttribute("type");
  att.value = "checkbox";
  deleteInput.setAttributeNode(att);

  for(var key in book){
    //console.log(book[key]);
    var td = document.createElement('td');
    $(td).text(book[key]);
    tr.append(td);
  }
  //tr.append(document.createElement('td').append(deleteInput));
  //console.log(tr);
  return tr;
};


$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
