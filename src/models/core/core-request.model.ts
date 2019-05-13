export interface DefaultRequestOptions {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	path: '/' | string
	timeout: number
	auth: string
	headers: { [key: string]: string }
}
