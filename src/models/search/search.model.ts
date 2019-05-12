/**
 * Response from a `GET /search` where querystring would be q? value a string.
 *
 */
export interface SearchResponse {
  meta:     Meta;
  response: Response;
}

export interface Meta {
  status: number;
}

export interface Response {
  hits: Hit[];
}

export interface Hit {
  highlights: any[];
  index:      Index;
  type:       Index;
  result:     Result;
}

export enum Index {
  Song = 'song',
}

export interface Result {
  annotation_count:             number;
  api_path:                     string;
  full_title:                   string;
  header_image_thumbnail_url:   string;
  header_image_url:             string;
  id:                           number;
  lyrics_owner_id:              number;
  lyrics_state:                 LyricsState | string; // todo: find these values
  path:                         string;
  pyongs_count:                 number;
  song_art_image_thumbnail_url: string;
  stats:                        Stats;
  title:                        string;
  title_with_featured:          string;
  url:                          string;
  primary_artist:               PrimaryArtist;
}

export enum LyricsState {
  Complete = 'complete',
}

export interface PrimaryArtist {
  api_path:         string;
  header_image_url: string;
  id:               number;
  image_url:        string;
  is_meme_verified: boolean;
  is_verified:      boolean;
  name:             string;
  url:              string;
  iq:               number;
}

export interface Stats {
  hot:                    boolean;
  unreviewed_annotations: number;
  concurrents?:           number;
  pageviews:              number;
}
