import 'package:algolia/algolia.dart';
import 'movie.dart';

class AlgoliaService {
  AlgoliaService._privateConstructor();

  static final AlgoliaService instance = AlgoliaService._privateConstructor();

  final Algolia _algolia = Algolia.init(
    applicationId: 'APPID',
    apiKey: 'CLIENTKEY',
  );

  AlgoliaIndexReference get _moviesIndex => _algolia.instance.index('movies');

  Future<List<Movie>> performMovieQuery({text: String}) async {
    final query = _moviesIndex.search(text);
    final snap = await query.getObjects();
    final movies = snap.hits.map((f) => Movie.fromJSON(f.data)).toList();
    return movies;
  }
}
