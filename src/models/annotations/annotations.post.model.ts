/**
 * Example payload for `POST /annotations`.
 * [https://docs.genius.com/#annotations-h2]
 */
export interface PostAnnotationRequest {
  annotation: Annotation;
  referent:   Referent;
  web_page:   WebPage;
}

export interface Annotation {
  body: Body;
}

export interface Body {
  markdown: string;
}

export interface Referent {
  raw_annotatable_url: string;
  fragment:            string;
  context_for_display: ContextForDisplay;
}

export interface ContextForDisplay {
  before_html: string;
  after_html:  string;
}

export interface WebPage {
  canonical_url: null;
  og_url:        null;
  title:         string;
}
