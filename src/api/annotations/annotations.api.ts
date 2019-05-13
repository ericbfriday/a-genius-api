import { TextFormatOptionsEnum } from '../../models/response-formats/response-formats.model'
import { PostAnnotationRequestBody } from './annotations.post.model'

export class GeniusApiAnnotations {
	/**
	 * # Annotations
	 * An annotation is a piece of content about a part of a document. The document may be a song
	 * (hosted on Genius) or a web page (hosted anywhere). The part of a document that an annotation
	 * is attached to is called a referent.
	 * Annotation data returned from the API includes both the substance of the annotation and the
	 * necessary information for displaying it in its original context.
	 */
	/**
	 * `GET /annotations/:id`
	 * Data for a specific annotation.
	 *
	 * @Param id {number} - ID of the annotation
	 * @Param { custom options object } `id` ID of the annotation
	 */
	public getAnnotationsById = (options: { id: number; text_format: TextFormatOptionsEnum }) => {
		// do stuff.
	}

	public postAnnotations = (options: PostAnnotationRequestBody) => {
		// do stuff.
	}

	/**
	 * `PUT /annotations/:id`
	 * - Requires scope: `manage_annotation`
	 *
	 * Updates an annotation created by the authenticated user. Accepts the same
	 * parameters as `POST /annotation` above.
	 */
	public putAnnotationsById = (options: PostAnnotationRequestBody) => {
		// do stuff.
	}

	/**
	 * `DELETE /annotations/:id`
	 *  - Requires scope: `manage_annotation`
	 *
	 * Deletes an annotation created by the authenticated user.
	 */
	public deleteAnnotationsById = (id: number) => {
		// do stuff.
	}

	/**
	 * `PUT /annotations/:id/upvote`
	 * - Requires scope: `vote`
	 *
	 * Votes positively for the annotation on behalf of the authenticated user.
	 */
	public upvoteAnnotationsById = (id: number) => {
		// do stuff.
	}

	/**
	 * `PUT /annotations/:id/downvote`
	 * - Requires scope: `vote`
	 *
	 * Votes negatively for the annotation on behalf of the authenticated user.
	 */
	public downvoteAnnotationsById = (id: number) => {
		// do stuff.
	}

	/**
	 * `PUT /annotations/:id/unvote`
	 *  - Requires scope: `vote`
	 * Removes the authenticated user's vote (up or down) for the annotation.
	 */
	public unvoteAnnotationsById = (id: number) => {
		// do stuff.
	}
}
