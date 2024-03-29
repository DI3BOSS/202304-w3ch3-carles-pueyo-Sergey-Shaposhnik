export interface SeriesStructure {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  isWatched: boolean;
  score: 0 | 1 | 2 | 3 | 4 | 5;
  emmies: number;
}

export type Series = SeriesStructure[];

export interface ComponentStructure {
  element: Element;
  renderHtml(): void;
}
export interface ListComponentStructure {
  series: Series;
  parentElement: Element;
  className: string;
}
