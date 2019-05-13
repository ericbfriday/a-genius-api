export interface SongResponse {
  meta:     Meta;
  response: Response;
}

export interface Meta {
  status: number;
}

export interface Response {
  song: ResponseSong;
}

export interface ResponseSong {
  annotation_count:             number;
  api_path:                     string;
  apple_music_id:               string;
  apple_music_player_url:       string;
  description:                  Description;
  embed_content:                string;
  featured_video:               boolean;
  full_title:                   string;
  header_image_thumbnail_url:   string;
  header_image_url:             string;
  id:                           number;
  lyrics_owner_id:              number;
  lyrics_state:                 LyricsState;
  path:                         string;
  pyongs_count:                 number;
  recording_location:           null;
  release_date:                 Date;
  song_art_image_thumbnail_url: string;
  song_art_image_url:           string;
  stats:                        FluffyStats;
  title:                        string;
  title_with_featured:          string;
  url:                          string;
  current_user_metadata:        SongCurrentUserMetadata;
  album:                        Album;
  custom_performances:          any[];
  description_annotation:       DescriptionAnnotation;
  featured_artists:             any[];
  lyrics_marked_complete_by:    null;
  media:                        Media[];
  primary_artist:               Artist;
  producer_artists:             Artist[];
  song_relationships:           SongRelationship[];
  verified_annotations_by:      VerifiedAnnotationsBy[];
  verified_contributors:        VerifiedContributor[];
  verified_lyrics_by:           any[];
  writer_artists:               Artist[];
}

export interface Album {
  api_path:      string;
  cover_art_url: string;
  full_title:    string;
  id:            number;
  name:          string;
  url:           string;
  artist:        Artist;
}

export interface Artist {
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

export interface SongCurrentUserMetadata {
  permissions:          string[];
  excluded_permissions: string[];
  interactions:         PurpleInteractions;
  relationships:        Relationships;
  iq_by_action:         PurpleIqByAction;
}

export interface PurpleInteractions {
  pyong:     boolean;
  following: boolean;
}

export interface PurpleIqByAction {
  edit_metadata: EditMetadata;
}

export interface EditMetadata {
  primary: Primary;
}

export interface Primary {
  multiplier: number;
  base:       number;
  applicable: boolean;
}

export interface Relationships {
  pinned_role: null;
}

export interface Description {
  dom: DOM;
}

export interface DOM {
  tag:      string;
  children: Array<PurpleChild | string>;
}

export interface PurpleChild {
  tag:      string;
  children: Array<FluffyChild | string>;
}

export interface FluffyChild {
  tag:         string;
  children:    string[];
  attributes?: Attributes;
  data?:       Data;
}

export interface Attributes {
  href: string;
  rel:  string;
}

export interface Data {
  api_path: string;
}

export interface DescriptionAnnotation {
  _type:                  string;
  annotator_id:           number;
  annotator_login:        string;
  api_path:               string;
  classification:         string;
  fragment:               string;
  id:                     number;
  is_description:         boolean;
  path:                   string;
  range:                  Range;
  song_id:                number;
  url:                    string;
  verified_annotator_ids: any[];
  annotatable:            Annotatable;
  annotations:            Annotation[];
}

export interface Annotatable {
  api_path:          string;
  client_timestamps: ClientTimestamps;
  context:           string;
  id:                number;
  image_url:         string;
  link_title:        string;
  title:             string;
  type:              string;
  url:               string;
}

export interface ClientTimestamps {
  updated_by_human_at: number;
  lyrics_updated_at:   number;
}

export interface Annotation {
  api_path:              string;
  body:                  Description;
  comment_count:         number;
  community:             boolean;
  custom_preview:        null;
  has_voters:            boolean;
  id:                    number;
  pinned:                boolean;
  share_url:             string;
  source:                null;
  state:                 string;
  url:                   string;
  verified:              boolean;
  votes_total:           number;
  current_user_metadata: AnnotationCurrentUserMetadata;
  authors:               Author[];
  cosigned_by:           any[];
  rejection_comment:     null;
  verified_by:           null;
}

export interface Author {
  attribution: number;
  pinned_role: null;
  user:        VerifiedAnnotationsBy;
}

export interface VerifiedAnnotationsBy {
  api_path:                        string;
  avatar:                          Avatar;
  header_image_url:                string;
  human_readable_role_for_display: string;
  id:                              number;
  iq:                              number;
  login:                           string;
  name:                            string;
  role_for_display:                string;
  url:                             string;
  current_user_metadata:           VerifiedAnnotationsByCurrentUserMetadata;
}

export interface Avatar {
  tiny:   Medium;
  thumb:  Medium;
  small:  Medium;
  medium: Medium;
}

export interface Medium {
  url:          string;
  bounding_box: BoundingBox;
}

export interface BoundingBox {
  width:  number;
  height: number;
}

export interface VerifiedAnnotationsByCurrentUserMetadata {
  permissions:          string[];
  excluded_permissions: any[];
  interactions:         FluffyInteractions;
  features:             any[];
}

export interface FluffyInteractions {
  following: boolean;
}

export interface AnnotationCurrentUserMetadata {
  permissions:          string[];
  excluded_permissions: string[];
  interactions:         TentacledInteractions;
  iq_by_action:         FluffyIqByAction;
}

export interface TentacledInteractions {
  cosign: boolean;
  pyong:  boolean;
  vote:   null;
}

export interface FluffyIqByAction {
  accept: EditMetadata;
  reject: EditMetadata;
  delete: EditMetadata;
}

export interface Range {
  content: string;
}

export enum LyricsState {
  Complete = "complete",
}

export interface Media {
  provider:     string;
  start?:       number;
  type:         string;
  url:          string;
  native_uri?:  string;
  attribution?: string;
}

export interface SongRelationship {
  type:  string;
  songs: SongElement[];
}

export interface SongElement {
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
  stats:                        PurpleStats;
  title:                        string;
  title_with_featured:          string;
  url:                          string;
  primary_artist:               Artist;
}

export interface PurpleStats {
  hot:                    boolean;
  unreviewed_annotations: number;
  pageviews?:             number;
}

export interface FluffyStats {
  accepted_annotations:   number;
  contributors:           number;
  hot:                    boolean;
  iq_earners:             number;
  transcribers:           number;
  unreviewed_annotations: number;
  verified_annotations:   number;
  pageviews:              number;
}

export interface VerifiedContributor {
  contributions: string[];
  artist:        Artist;
  user:          VerifiedAnnotationsBy;
}
