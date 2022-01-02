var app = new function() {
  this.el = document.getElementById('movies');

  this.movies = [];
  
  this.FetchAll = function() {
    var data = '';

    if (this.movies.length > 0) {
      for (i = 0; i < this.movies.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.movies[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.movies.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('add-todo');
    var movie = el.value;

    if (movie) {     
      this.movies.push(movie.trim())
      el.value = '';
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById('edit-todo');
    
    el.value = this.movies[item];
    
    document.getElementById('edit-box').style.display = 'block';
    self = this; 

    document.getElementById('save-edit').onsubmit = function() {

      var movie = el.value;

      if (movie) {
        self.movies.splice(item, 1, movie.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    this.movies.splice(item, 1);
    this.FetchAll();
  };

  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'Movies';

    if (data) {
        if(data ==1){
            name = 'Movies'
        }
      el.innerHTML = data + ' ' + name ;
    } 
    else {
      el.innerHTML = 'No ' + name;
    }
  };

}

app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}
