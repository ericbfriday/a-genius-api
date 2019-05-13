import { GetReferentsOptions } from '../models/referents/referents.model'

export class GeniusApiReferents {
	/**
	 * # Referents
	 * Referents are the sections of a piece of content to which annotations are
	 * attached. Each referent is associated with a web page or a song and may
	 * have one or more annotations. Referents can be searched by the document
	 * they are attached to or by the user that created them.
	 *
	 * When a new annotation is created either a referent is created with it or
	 * that annotation is attached to an existing referent.
	 *
	 * [API Documentation Link](https://docs.genius.com/#referents-h2)
	 */
	/**
	 * `GET /referents`
	 * Referents by content item or user responsible for an included annotation.
	 *
	 * You may pass only one of song_id and web_page_id, not both.
	 */
	public referents = (options: GetReferentsOptions) => {
		// do stuff. options all become query string items.
		// e.g. `referents?song_id=123&created_by_id=123123&text_format=dom`
	}

	/**
	 * # Songs
	 * A song is a document hosted on Genius. It's usually music lyrics.
	 *
	 * Data for a song includes details about the document itself and information about
	 * all the referents that are attached to it, including the text to which they refer.
	 */
}
