const Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
};

const Playlist = function(name) {
  this.name = name;
  this.tracks = [];
  this.overallRating = function() {
    let totalRating = 0;
    this.tracks.forEach(track => {
      totalRating += track.rating;
    });
    return totalRating / this.tracks.length;
  };
  this.totalDuration = function() {
    let duration = 0;
    this.tracks.forEach(track => {
      duration += track.length;
    });
    return duration;
  };
};

const Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
};

let lib = new Library("new", "Marlon");
let pl = new Playlist("tunes");
pl.tracks.push(new Track("Cool song", 5, 300));
pl.tracks.push(new Track("Bad song", 1, 60));

console.log("example; ", pl.totalDuration());
