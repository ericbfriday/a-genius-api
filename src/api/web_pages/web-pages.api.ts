/**
 * ## Web Pages
 *
 * A web page is a single, publicly accessible page to which
 * annotations may be attached. Web pages map 1-to-1 with unique, canonical URLs.
 * `GET /web_pages/lookup` with querystring of `WebPagesLookupTypes` enum member.
 * Information about a web page retrieved by the page's full URL (including protocol).
 * The returned data includes Genius's ID for the page, which may be used to look up associated
 * referents with the `/referents` endpoint.
 */
export class GeniusApiWebPage {
	/**
	 * `GET /web_pages/lookup`
	 * Information about a web page retrieved by the page's full URL (including protocol). The returned data includes Genius's ID for the page, which may be used to look up associated referents with the /referents endpoint.
	 * Data is only available for pages that already have at least one annotation.
	 *
	 * Provide as many of the following variants of the URL as possible:
	 * `canonical_url`, `raw_annotatable_url`, or `og_url`.
	 */
	public webPage = (urlRef: {
		canonical_url: string
		raw_annotatable_url: string
		og_url: string
	}) => {
		/** do stuff */
	}
}
