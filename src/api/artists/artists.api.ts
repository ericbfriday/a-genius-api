import { TextFormatOptionsEnum } from '../../models/response-formats/response-formats.model'

/**
 * ## Artists
 *
 * An artist is how Genius represents the creator of one or more songs (or other documents
 * hosted on Genius). It's usually a musician or group of musicians.
 *
 * [API Docs here](https://docs.genius.com/#artists-h2)
 */
export class GeniusApiArtists {
	/**
	 * Data for a specific artist.
	 *
	 * `GET /artists/:id`
	 */
	public getArtistsById = (
		/** ID of the artist  */
		id: number,
		/**
		 * Format for text bodies related to the document. One or more of dom, plain, and
		 * html, separated by commas (defaults to dom).
		 * */
		text_format: TextFormatOptionsEnum
	) => {
		/** do stuff */
	}

	/**
	 * Documents (songs) for the artist specified. By default, 20 items are returned for each request.
	 *
	 * `GET /artists/:id/songs`
	 */
	public getArtistsSongsById = (
		/** ID of the artist.  */
		id: number,
		/** `title` (default) or `popularity` */
		sort: 'title' | 'popularity',
		/** Number of results to return per request */
		per_page: number,
		/** Paginated offset, (e.g., per_page=5&page=3 returns songs 11–15) */
		page: number
	) => {
		/** do stuff */
	}
}
