export interface SuccessResponse {
	meta: SuccessMeta | ErrorMeta
	response: Response
}

export interface SuccessMeta {
	status: number
}

export interface ErrorMeta {
	status: number
	message: string
}

/**
 * Generalizable way to set at least 1 property of a type as required.
 */
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
	{ [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>> }[Keys]

/**
 * Generalizable way to set only 1 property of a type as required and allowed.
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
	{ [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>> }[Keys]
