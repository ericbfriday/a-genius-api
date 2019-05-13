
/**
 * `GET /artists/:id/songs` results.
 * [https://docs.genius.com/#/artists-h2]
 *
 */
export interface ArtistsByIDSongsResponse {
  meta:     Meta;
  response: Response;
}

export interface Meta {
  status: number;
}

export interface Response {
  songs:     Song[];
  next_page: number;
}

export interface Song {
  annotation_count:             number;
  api_path:                     string;
  full_title:                   string;
  header_image_thumbnail_url:   string;
  header_image_url:             string;
  id:                           number;
  lyrics_owner_id:              number;
  lyrics_state:                 LyricsState;
  path:                         string;
  pyongs_count:                 number | null;
  song_art_image_thumbnail_url: string;
  stats:                        Stats;
  title:                        string;
  title_with_featured:          string;
  url:                          string;
  primary_artist:               PrimaryArtist;
}

export enum LyricsState {
  Complete = 'complete', // TODO: verify these
  Incomplete = 'incomplete'
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
  iq?:              number;
}

export interface Stats {
  hot:                    boolean;
  unreviewed_annotations: number;
  pageviews?:             number;
}
