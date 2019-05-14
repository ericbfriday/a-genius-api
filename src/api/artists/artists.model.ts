/**
 * `GET /artists/:id` results
 */
export interface ArtistsByIDResponse {
  meta:     Meta;
  response: Response;
}

export interface Meta {
  status: number;
}

export interface Response {
  artist: Artist;
}

export interface Artist {
  alternate_names:        string[];
  api_path:               string;
  description:            Description;
  facebook_name:          string;
  followers_count:        number;
  header_image_url:       string;
  id:                     number;
  image_url:              string;
  instagram_name:         string;
  is_meme_verified:       boolean;
  is_verified:            boolean;
  name:                   string;
  translation_artist:     boolean;
  twitter_name:           string;
  url:                    string;
  current_user_metadata:  ArtistCurrentUserMetadata;
  iq:                     number;
  description_annotation: DescriptionAnnotation;
  user:                   User;
}

export interface ArtistCurrentUserMetadata {
  permissions:          Permission[];
  excluded_permissions: string[];
  interactions:         PurpleInteractions;
  features?:            any[];
}

export interface PurpleInteractions {
  following: boolean;
}

export enum Permission {
  Follow = "follow",
  ViewActivityStream = "view_activity_stream",
  ViewContributionOpportunities = "view_contribution_opportunities",
}

export interface Description {
  dom: DOM;
}

export interface DOM {
  tag:      string;
  children: Array<PurpleChild | string>;
}

export interface PurpleChild {
  tag:      FluffyTag;
  children: Array<FluffyChild | string>;
}

export interface FluffyChild {
  tag:         PurpleTag;
  attributes?: Attributes;
  data?:       Data;
  children:    Array<TentacledChild | string>;
}

export interface Attributes {
  href: string;
  rel:  Rel;
}

export enum Rel {
  Noopener = "noopener",
}

export interface TentacledChild {
  tag:        PurpleTag;
  attributes: Attributes;
  data:       Data;
  children:   string[];
}

export interface Data {
  api_path: string;
}

export enum PurpleTag {
  A = "a",
  Em = "em",
}

export enum FluffyTag {
  P = "p",
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
  song_id:                null;
  url:                    string;
  verified_annotator_ids: any[];
  annotatable:            Annotatable;
  annotations:            Annotation[];
}

export interface Annotatable {
  api_path:   string;
  context:    null;
  id:         number;
  image_url:  string;
  link_title: string;
  title:      string;
  type:       string;
  url:        string;
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
  user:        User;
}

export interface User {
  api_path:                        string;
  avatar:                          Avatar;
  header_image_url:                string;
  human_readable_role_for_display: null | string;
  id:                              number;
  iq:                              number;
  login:                           string;
  name:                            string;
  role_for_display:                null | string;
  url:                             string;
  current_user_metadata:           ArtistCurrentUserMetadata;
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

export interface AnnotationCurrentUserMetadata {
  permissions:          string[];
  excluded_permissions: string[];
  interactions:         FluffyInteractions;
  iq_by_action:         IqByAction;
}

export interface FluffyInteractions {
  cosign: boolean;
  pyong:  boolean;
  vote:   null;
}

export interface IqByAction {
  accept: Accept;
  reject: Accept;
  delete: Accept;
}

export interface Accept {
  primary: Primary;
}

export interface Primary {
  multiplier: number;
  base:       number;
  applicable: boolean;
}

export interface Range {
  content: string;
}
