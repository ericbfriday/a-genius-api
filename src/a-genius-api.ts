import { GeniusApiOptions } from './models/a-genius-api-options/a-genius-api-options.model';
import * as https from 'https';
// import 'core-js/fn/array/find'
// import 'core-js/fn/string/includes'
import 'core-js/fn/promise'
import { TextFormatOptions } from './models/response-formats/response-formats.model';
import { PostAnnotationRequestBody, WebPage } from './models/annotations/annotations.post.model';
import { GetReferentsOptions } from './models/referents/referents.model';
import { WebPagesLookupTypes } from './models/web_pages/web_pages.model';
// import { URL } from 'url';

const BASE_URL_PARTIAL: string = 'api.genius.com';
// const BASE_URL_WHOLE = new URL('https://api.genius.com/');
// const AUTH_URL_WHOLE = new URL('https://api.genius.com/oauth/authorize');
const DEFAULT_OPTIONS = {
  hostname: BASE_URL_PARTIAL,
  port: 443,
  path: '/',
  method: 'GET',
  headers: {'User-Agent': 'a-genius-api-library'}
};
export interface DefaultRequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  path: '/' | string,
  timeout: number,
  auth: string,
  headers: { [key: string]: string }
}

  /**
   * TODO: Write this up.
   */
export default class GeniusApi {
  private options: GeniusApiOptions;
  private authHeader: { 'Authentication': string; };
  constructor(accessToken: string, options: GeniusApiOptions) {
    this.options = options;
    this.authHeader = { 'Authentication': 'Bearer ' + accessToken };
  }

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
  public getAnnotationsById = (options: { id: number, text_format: TextFormatOptions }) => {
    // do stuff.
  };

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
  };

  /**
   * # Songs
   * A song is a document hosted on Genius. It's usually music lyrics.
   *
   * Data for a song includes details about the document itself and information about
   * all the referents that are attached to it, including the text to which they refer.
   */

  /**
   * `GET /songs/:id`
   *
   * Data for a specific song.
   *
   * `id` - ID of the song.
   * `text_format` - Format for text bodies related to the document. One or more of dom, plain,
   * and html, separated by commas (defaults to dom). See details of each option here.
   */
  public getSongsById = (id: number, text_format: TextFormatOptions) => { /** do stuff */};

  /**
   * # Artists
   *
   * An artist is how Genius represents the creator of one or more songs (or other documents
   * hosted on Genius). It's usually a musician or group of musicians.
   *
   * [API Docs here](https://docs.genius.com/#artists-h2)
   */
  /**
   *
   */
  public getArtistsById = (id: number, text_format: TextFormatOptions) => { /** do stuff */};
  public getArtistsSongsById = (id: number, sort: 'title' | 'popularity', per_page: number, page: number) => { /** do stuff */ };


  /**
   * # Web Pages
   *
   * A web page is a single, publicly accessible page to which annotations may be attached.
   * Web pages map 1-to-1 with unique, canonical URLs.
   */
  /**
   * `GET /web_pages/lookup`
   * Information about a web page retrieved by the page's full URL (including protocol). The returned data includes Genius's ID for the page, which may be used to look up associated referents with the /referents endpoint.
   * Data is only available for pages that already have at least one annotation.
   *
   * Provide as many of the following variants of the URL as possible:
   * `canonical_url`, `raw_annotatable_url`, or `og_url`.
   */
  public webPage = (urlRef: { /** [key: WebPagesLookupTypes]: string */ }) => { /** do stuff */};

  public search = () => { /** do stuff */};

  /**
   * Private methods
   */

  private apiRequest = () => { /** do stuff */};

  private buildHttpsRequest = ({ ...params }) => {

    return { ...params };
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
    };

    return new Promise((resolve, reject) => {
      https
          .request(
              options,
              (res) => {
                let json = '';
                res.on('data', (chunk) => json += chunk.toString());
                res.on('end', () => resolve(json));
              })
          .on('error', (e) => reject(e));
    });
  };
}
