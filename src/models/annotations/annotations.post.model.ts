/**
 * A javascript type string which contains text formatted as `markdown` (*.md) format.
 */
export type MarkdownString = string;

/**
 * Example payload for `POST /annotations`.
 * - Requires scope: create_annotation
 * Creates a new annotation on a public web page. The returned value will be the new
 * annotation object, in the same form as would be returned by GET /annotation/:id
 * with the new annotation's ID.
 * [API Documentation Link](https://docs.genius.com/#annotations-h2)
 */
export interface PostAnnotationRequestBody {
  annotation: Annotation;
  referent:   Referent;
  web_page:   WebPage;
}

export interface Annotation {
  body: Body;
}

export interface Body {
  /**
   * Markdown annotation for the request should be formatted in `markdown` (*.md) format.
   */
  markdown: MarkdownString;
}


export interface Referent {
  /**
   * The original URL of the page.
   */
  raw_annotatable_url: string;
  /**
   * The highlighted fragment
   */
  fragment:            string;
  context_for_display: ContextForDisplay;
}

/**
 * ContextForDisplay
 */
export interface ContextForDisplay {
  /**
   * The HTML before the highlighted fragment (prefer up to 200 characters).
   */
  before_html: string;
  /**
   * The HTML after the highlighted fragment (prefer up to 200 characters)
   */
  after_html:  string;
}

/**
 * @property canonical_url
 * @property og_url
 * @property title
 * At least one property is required.
 */
export interface WebPage {
  /**
   * The href property of the `<link rel="canonical">` tag on the page. Including it
   * will help make sure newly created annotation appear on the correct page.
   */
  canonical_url: string | null;
  /**
   * The content property of the `<meta property="og:url">` tag on the page. Including
   * it will help make sure newly created annotation appear on the correct page.
   */
  og_url: string | null;
  /**
   * The title of the page.
   */
  title: string | null;
}
