export interface ReferentsResponse {
  meta:     Meta;
  response: Response;
}

export interface Meta {
  status: number;
}

export interface Response {
  referents: Referent[];
}

export interface Referent {
  _type:                  Type;
  annotator_id:           number;
  annotator_login:        string;
  api_path:               string;
  classification:         Classification;
  featured:               boolean;
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

export enum Type {
  Referent = 'referent',
}

export interface Annotatable {
  api_path:   APIPath;
  context:    Context;
  id:         number;
  image_url:  string;
  link_title: Title;
  title:      Title;
  type:       TypeEnum;
  url:        string;
}

export enum APIPath {
  WebPages10347 = '/web_pages/10347',
}

export enum Context {
  DocsGeniusCOM = 'docs.genius.com',
}

export enum Title {
  GeniusAPI = 'Genius API',
}

export enum TypeEnum {
  WebPage = 'WebPage',
}

export interface Annotation {
  api_path:              string;
  body:                  Body;
  comment_count:         number;
  community:             boolean;
  custom_preview:        null;
  has_voters:            boolean;
  id:                    number;
  pinned:                boolean;
  share_url:             string;
  source:                null;
  state:                 State;
  url:                   string;
  verified:              boolean;
  votes_total:           number;
  current_user_metadata: AnnotationCurrentUserMetadata;
  authors:               Author[];
  cosigned_by:           any[];
  rejection_comment:     null;
  verified_by:           VerifiedBy;
}

export interface Author {
  attribution: number;
  pinned_role: null;
  user:        VerifiedBy;
}

export interface VerifiedBy {
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
  current_user_metadata:           VerifiedByCurrentUserMetadata;
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

export interface VerifiedByCurrentUserMetadata {
  permissions:          PurplePermission[];
  excluded_permissions: any[];
  interactions:         PurpleInteractions;
  features:             any[];
}

export interface PurpleInteractions {
  following: boolean;
}

export enum PurplePermission {
  Follow = 'follow',
}

// TODO: Fix how we parse the dom body responses for text_format DOM.

export interface Body {
  dom: DOM;
}

export interface DOM {
  tag:      DOMTag;
  children: Array<PurpleChild | string>;
}

export interface PurpleChild {
  tag:      ChildTag;
  children: Array<FluffyChild | string>;
}

export interface FluffyChild {
  tag:         string;
  attributes?: Attributes;
  children?:   string[];
}

export interface Attributes {
  href: string;
  rel:  string;
}

export enum ChildTag {
  P = 'p',
}

export enum DOMTag {
  Root = 'root',
}

export interface AnnotationCurrentUserMetadata {
  permissions:          FluffyPermission[];
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

export enum FluffyPermission {
  CreateComment = 'create_comment',
  Vote = 'vote',
}

export enum State {
  Verified = 'verified',
  Unverified = 'unverified'
}

export enum Classification {
  Accepted = 'accepted',
  Unaccepted = 'unaccepted'
}

export interface Range {
  start:       string;
  startOffset: string;
  end:         string;
  endOffset:   string;
  before:      string;
  after:       string;
  content:     string;
}
