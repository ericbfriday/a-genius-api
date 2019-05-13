/**
 * Auth available scopes for token generation and the endpoints they allow:
 * https://docs.genius.com/#/authentication-h1
 */
export enum ENDPOINT_SCOPES {
  /**
   * The `me` scope is required for: `GET /account`
   */
  me = 'me',
  /**
   * The `create_annotation` scope is required for: `POST /annotations`
   */
  create_annotation = 'create_annotation',
  /**
   * The `manage_annotation` scope is required for:
   * ```
   * PUT /annotations/:id
   * DELETE /annotations/:id```
   */
  manage_annotation = 'manage_annotation',
  /**
   * The `vote` scope is required for:
   * ```
   * PUT /annotations/:id/upvote
   * PUT /annotations/:id/downvote
   * PUT /annotations/:id/unvote```
   */
  vote = 'vote'
}