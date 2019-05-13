export interface Response {
	annotation: Annotation
	referent: Referent
}

export interface Annotation {
	api_path: string
	body: Body
	comment_count: number
	community: boolean
	custom_preview: null
	has_voters: boolean
	id: number
	pinned: boolean
	share_url: string
	source: null
	state: string
	url: string
	verified: boolean
	votes_total: number
	current_user_metadata: AnnotationCurrentUserMetadata
	authors: Author[]
	cosigned_by: any[]
	rejection_comment: null
	verified_by: VerifiedBy
}

export interface Author {
	attribution: number
	pinned_role: null
	user: VerifiedBy
}

export interface VerifiedBy {
	api_path: string
	avatar: Avatar
	header_image_url: string
	human_readable_role_for_display: string
	id: number
	iq: number
	login: string
	name: string
	role_for_display: string
	url: string
	current_user_metadata: VerifiedByCurrentUserMetadata
}

export interface Avatar {
	tiny: Medium
	thumb: Medium
	small: Medium
	medium: Medium
}

export interface Medium {
	url: string
	bounding_box: BoundingBox
}

export interface BoundingBox {
	width: number
	height: number
}

export interface VerifiedByCurrentUserMetadata {
	permissions: string[]
	excluded_permissions: any[]
	interactions: PurpleInteractions
	features: any[]
}

export interface PurpleInteractions {
	following: boolean
}

export interface Body {
	dom: DOM
}

export interface DOM {
	tag: string
	children: Child[]
}

export interface Child {
	tag: string
	children: string[]
}

export interface AnnotationCurrentUserMetadata {
	permissions: string[]
	excluded_permissions: string[]
	interactions: FluffyInteractions
	iq_by_action: IqByAction
}

export interface FluffyInteractions {
	cosign: boolean
	pyong: boolean
	vote: null
}

export interface IqByAction {
	accept: Accept
	reject: Accept
	delete: Accept
}

export interface Accept {
	primary: Primary
}

export interface Primary {
	multiplier: number
	base: number
	applicable: boolean
}

export interface Referent {
	_type: string
	annotator_id: number
	annotator_login: string
	api_path: string
	classification: string
	featured: boolean
	fragment: string
	id: number
	is_description: boolean
	path: string
	range: Range
	song_id: null
	url: string
	verified_annotator_ids: number[]
	annotatable: Annotatable
}

export interface Annotatable {
	api_path: string
	context: string
	id: number
	image_url: string
	link_title: string
	title: string
	type: string
	url: string
}

export interface Range {
	start: string
	startOffset: string
	end: string
	endOffset: string
	before: string
	after: string
	content: string
}
