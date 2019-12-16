import Genre from './Genre';
export default interface MovieDetails {
    title: string;
    poster_path: string;
    release_date: string;
    genres: Genre[];
    homepage: string;
}

