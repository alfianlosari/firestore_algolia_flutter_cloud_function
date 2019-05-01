class Movie {
  final String title;
  final String objectID;
  final dynamic voteAverage;
  final dynamic voteCount;
  final dynamic popularity;
  final String posterPath;
  final List<String> genres;

  String get genreText => genres.join(", ");
  String get imageURL => "https://image.tmdb.org/t/p/w200$posterPath";

  Movie(
      {this.title,
      this.objectID,
      this.voteAverage,
      this.voteCount,
      this.popularity,
      this.posterPath,
      this.genres});

  factory Movie.fromJSON(Map<String, dynamic> json) {
    return Movie(
        title: json['title'],
        objectID: json['objectID'],
        voteAverage: json['vote_average'],
        voteCount: json['vote_count'],
        popularity: json['popularity'],
        posterPath: json['poster_path'],
        genres: json['genres'].cast<String>());
  }
}
