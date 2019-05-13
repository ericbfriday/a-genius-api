/**
 * Interface of response from `GET /account`.
 * `GET /account` also available with querystrings indicating `text_format`
 * which would be a memeber of the `TextFormatOptionTypes` enum.
 * [https://docs.genius.com/#account-h2]
 */
export interface AccountResponse {
  meta:     Meta;
  response: Response;
}

export interface Meta {
  status: number;
}

export interface Response {
  user: User;
}

export interface User {
  about_me:                         AboutMe;
  api_path:                         string;
  available_identity_providers:     string[];
  avatar:                           Avatar;
  custom_header_image_url:          null;
  email:                            string;
  followed_users_count:             number;
  followers_count:                  number;
  header_image_url:                 string;
  human_readable_role_for_display:  null;
  id:                               number;
  identities:                       Identity[];
  iq:                               number;
  iq_for_display:                   string;
  login:                            string;
  name:                             string;
  photo_url:                        string;
  preferences:                      Preferences;
  role_for_display:                 null;
  roles_for_display:                any[];
  unread_groups_inbox_count:        number;
  unread_main_activity_inbox_count: number;
  unread_messages_count:            number;
  unread_newsfeed_inbox_count:      number;
  url:                              string;
  current_user_metadata:            CurrentUserMetadata;
  artist:                           null;
  stats:                            Stats;
}

export interface AboutMe {
  dom: DOM;
}

export interface DOM {
  tag: string;
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

export interface CurrentUserMetadata {
  permissions:          string[];
  excluded_permissions: string[];
  interactions:         Interactions;
  features:             string[];
}

export interface Interactions {
  following: boolean;
}

export interface Identity {
  id:                number;
  name:              string;
  provider:          string;
  custom_properties: null;
}

export interface Preferences {
  mention_notifications:              boolean;
  creation_comment_notifications:     boolean;
  mentioned_forum_notifications:      boolean;
  discussion_creation_notifications:  boolean;
  message_notifications:              boolean;
  followed_thread_notifications:      boolean;
  editorial_suggestion_notifications: boolean;
  forum_post_creation_notifications:  boolean;
}

export interface Stats {
  annotations_count:    number;
  answers_count:        number;
  comments_count:       number;
  forum_posts_count:    number;
  pyongs_count:         number;
  questions_count:      number;
  transcriptions_count: number;
}
