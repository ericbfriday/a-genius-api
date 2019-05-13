import { RequireAtLeastOne } from '../core/core-base.model'

/**
 * Response Format Bases:
 * [https://docs.genius.com/#/response-format-h1]
 */

/**
 * All Genius API responses are JSON. Every JSON response has a meta field with a status value
 * that is an integer representation of the HTTP status code for the response.
 */
export interface GeniusApiBaseResponse {
	meta: { status: number }
}

export interface GeniusApiSuccessResponse extends GeniusApiBaseResponse {
	response: any
}

export interface GeniusApiErrorResponse extends GeniusApiBaseResponse {
	meta: {
		status: number
		message: string
	}
}

declare interface GeniusDomElementNode {
	tag: string
	children: GeniusDomElementNode[] | string
}

export enum TextFormatOptionsEnum {
	plain = 'plain',
	html = 'html',
	dom = 'dom'
}

export type TextFormatOptionsBase = {
	plain: string
	html: string
	dom: GeniusDomElementNode
}
// export interface TextFormatOptionPlain extends TextFormatOptionsBase {
// 	plain: string
// }
// export interface TextFormatOptionHtml extends TextFormatOptionsBase {
// 	html: string
// }
// export interface TextFormatOptionDom extends TextFormatOptionsBase {
// 	dom: GeniusDomElementNode
// }

export type TextFormatOptions = RequireAtLeastOne<TextFormatOptionsBase>
