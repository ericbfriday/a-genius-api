import { GeniusApiOptions } from './models/a-genius-api-options/a-genius-api-options.model'
import * as https from 'https'
// import 'core-js/fn/array/find';
// import 'core-js/fn/string/includes';
import 'core-js/fn/promise'
// import { URL } from 'url';

const BASE_URL_PARTIAL: string = 'api.genius.com'
// const BASE_URL_WHOLE = new URL('https://api.genius.com/');
// const AUTH_URL_WHOLE = new URL('https://api.genius.com/oauth/authorize');
const DEFAULT_OPTIONS = {
	hostname: BASE_URL_PARTIAL,
	port: 443,
	path: '/',
	method: 'GET',
	headers: {}
}

/**
 * TODO: Write this up.
 */
export default class GeniusApi {
	private options: GeniusApiOptions
	private authHeader: { Authentication: string }
	constructor(accessToken: string, options: GeniusApiOptions) {
		this.options = options
		this.authHeader = { Authentication: 'Bearer ' + accessToken }
	}

	/**
	 * Private methods
	 */

	private apiRequest = () => {
		/** do stuff */
	}

	public buildHttpsRequest = ({ ...params }) => {
		return { ...params }
	}

	private httpGet = (
		optionsConfig: object | {},
		path: string | '/', // TODO: has to start with /. put a check in there for it.
		headers: object | {},
		queryString: string | ''
	) => {
		const options = {
			...DEFAULT_OPTIONS,
			...optionsConfig
		}

		return new Promise((resolve, reject) => {
			https
				.request(options, res => {
					let json: string
					res.on('data', chunk => (json += chunk.toString()))
					res.on('end', () => resolve(json))
				})
				.on('error', e => reject(e))
		})
	}
}
