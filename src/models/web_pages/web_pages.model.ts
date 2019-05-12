/**
 * A web page is a single, publicly accessible page to which
 * annotations may be attached. Web pages map 1-to-1 with unique, canonical URLs.
 * `GET /web_pages/lookup` with querystring of `WebPagesLookupTypes` enum member.
 * Information about a web page retrieved by the page's full URL (including protocol).
 * The returned data includes Genius's ID for the page, which may be used to look up associated
 * referents with the `/referents` endpoint.
 * Data is only available for pages that already have at least one annotation.
 * Provide as many of the following variants of the URL as possible:
 * https://docs.genius.com/#web_pages-h2
 */
export interface WebPagesLookupResponse {
  meta:     Meta;
  response: Response;
}

export enum WebPagesLookupTypes {
  raw_annotatable_url = 'raw_annotatable_url',
  canonical_url = 'canonical_url',
  og_url = 'og_url'
}

export interface Meta {
  status: number;
}

export interface Response {
  web_page: WebPage;
}

export interface WebPage {
  api_path:         string;
  domain:           string;
  id:               number;
  normalized_url:   string;
  share_url:        string;
  title:            string;
  url:              string;
  annotation_count: number;
}
