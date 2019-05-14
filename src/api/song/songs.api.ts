import { TextFormatOptionsEnum } from '../../models/response-formats/response-formats.model'

export class GeniusApiSongs {
	/**
	 * `GET /songs/:id`
	 *
	 * Data for a specific song.
	 *
	 * `id` - ID of the song.
	 * `text_format` - Format for text bodies related to the document. One or more of dom, plain,
	 * and html, separated by commas (defaults to dom). See details of each option here.
	 */
	public getSongsById = (id: number, text_format: TextFormatOptionsEnum) => {
		/** do stuff */
	}
}
