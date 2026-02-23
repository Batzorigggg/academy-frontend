export interface IMovie {
  _id: string;
  title: string;
  plot: string;
  poster: string;
  year: string;
}

export interface IComment {
  _id: string;
  name: string;
  movie_id: string;
  text: string;
  date: string;
}
