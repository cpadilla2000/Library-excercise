var DataTable = function(){
  Library.call(this);
  this.$container = $('#data-table');
};

DataTable.prototype = Object.create(Library.prototype);

DataTable.prototype.init = function() {
  this.getBooksFromDB();
  //this.retrieveBooks();
  this._updateTable(window._bookshelf);
  this._bindEvents();
  this._bindCustomListeners();
};

DataTable.prototype._bindEvents = function () {
  //add native events here
};

DataTable.prototype._bindCustomListeners = function () {
  $(document).on('objUpdate', $.proxy(this._updateTable, this, window._bookshelf));
  $(document).on('searchUp', $.proxy(this.searchTable, this));
};

DataTable.prototype.searchTable = function (e) {
  //console.log(e);
  this._updateTable(e.detail)

};

DataTable.prototype._updateTable = function (e) {
  // alert(e.detail.data);
  var _self = this;
  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  if(e){
    this.$container.find('#data-t-head').replaceWith(this._createHead(e[0]))
    $.each(e, function(index, book){
      $tbody.append(_self._createRow(book));
    });
  }else{
    alert("no books in the bookshelf")
  }

};

DataTable.prototype._createHead = function (book) {
  //console.log(book);
  //console.log('createheadhappened');
    thead = document.createElement('thead')
    $(thead).attr('id','data-t-head')
    tr = document.createElement('tr')
    $(tr).addClass("warning")
    thead.append(tr)
    for (var key in book) {
    //console.log(key);
    th = document.createElement('th')
    $(th).text(key)
    tr.append(th)
    $(th).text(key.replace(/ /g, " "))

    }
    tg = document.createElement('th')//find better wayyyyyyyy
    tr.append(tg)
    $(tg).text('Edit').attr('editRow')
    tj = document.createElement('th')//find better wayyyyyyyy
    tr.append(tj)
    $(tj).text('Remove Book')
    console.log(thead);
    return thead;

};

DataTable.prototype._createRow = function (book) {
    var tr = document.createElement('tr');
    $(tr).attr('rowData', book.title)
    // var deleteInput = document.createElement('input');
    // var att = document.createAttribute("type");
    // att.value = "checkbox";
    // deleteInput.setAttributeNode(att);

  for(var key in book){
    //console.log(book[key]);
    var td = document.createElement('td');
    $(td).attr('contenteditable', 'true');
    $(td).text(book[key]);
    tr.append(td);
    // if(key === 'Edit')
    // var tdDelete = document.createElement('td');
    // var tdButton = document.createElement('button');
    // $(tdButton).addClass('btn btn-default btn-sm')
    // $(td).text(book[key]);
    // $(tr).append(tdButton)

  }


  //tr.append(document.createElement('td').append(deleteInput));
  //console.log(tr);
     return tr;
};


$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
