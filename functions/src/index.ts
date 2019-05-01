import * as functions from 'firebase-functions';
import * as algoliasearch from 'algoliasearch';

const client = algoliasearch('APIKEY', 'ADMINKEY');
const index = client.initIndex('movies');
index.setSettings({
    searchableAttributes: [
        'title',
        'genres'
    ],
    ranking: [
        'desc(popularity)',
        'desc(vote_count)',
        'desc(vote_average)',
        'typo',
        'words',
        'filters',
        'geo',
        'proximity',
        'attribute',
        'exact',
        'custom'
    ]
});

const moviesDocPath = `movies/{movieId}`;

exports.onMoviesCreatedDB = functions.firestore.document(moviesDocPath).onCreate((snapshot) => {
    return index.saveObject(snapshot.data() || {});
});

exports.onMoviesUpdatedDB = functions.firestore.document(moviesDocPath).onUpdate((snapshot) => {
    return index.saveObject(snapshot.after.data || {});
});

exports.onMoviesDeletedDB = functions.firestore.document(moviesDocPath).onDelete((_snapshot, context) => {
    const movieId = context.params.movieId;
    return index.deleteObject(movieId);
});
