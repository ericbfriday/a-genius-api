import { Http2ServerRequest } from "http2";

// // Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import 'core-js/fn/array/find'
// import 'core-js/fn/string/includes'
// import 'core-js/fn/promise'



const BASE_URL = 'https://api.genius.com/';
const AUTH_URL = 'https://api.genius.com/oauth/authorize';

  /**
   * @Class: Example of expected documentation
   * @Param { string }
   * @Return { string }
   */
export default class GeniusApi {
  constructor(accessToken, options) {
    if (!accessToken) {
      //throw new Error('Cannot instantiate genius-api without an access token');
    }

    const defaults = {};

    this.options = options || defaults;
    this.at = accessToken;
    this.AuthHeader = {'Authentication': 'Bearer ' + this.at};
  }

  public requestPromise(request) {
    const _this = this;

    return new Promise((resolve, reject) => {
      this.apiRequest(request, (_: any) => void).then((data) => {
        resolve(JSON.parse(data).response);
      }).catch(function(data) {
        reject(JSON.parse(data.Error.body));
      });
    });
  }

  public annotation = (id, options)  => {
    const newReq = {
      url: 'annotations/' + id,
      qs: options
    };

    return this.requestPromise(newReq);
  }

  public referents = (id, options)  => {
    const newReq = {
      url: 'referents',
      qs: _.merge(id, options)
    }

    return this.requestPromise(newReq);
  }

  public song = (id, options) => {
    const newReq = {
      url: 'songs/' + id,
      qs: options
    };

    return this.requestPromise(newReq);
  }

  public artist = (id, options) => {
    const request = {
      url: 'artists/' + id,
      qs: options
    };

    return this.requestPromise(request);
  }

  public songsByArtist = (id, options) => {
    const request = {
      url: 'artists/' + id + '/songs',
      qs: options
    };

    return this.requestPromise(request);
  }

  public webPage = (options) => {
    const newReq = {
      url: 'web_pages/lookup',
      qs: options
    };

    return this.requestPromise(newReq);
  }

  public search = (queryParams: string) => {
    const request = {
      url: 'search',
      qs: {'q': queryParams}
    }

    return this.requestPromise(request);
  }

  private apiRequest = (options: GeniusApiOptions, callback: ()=>any) => {
    const defaultRequest = request.defaults({
      baseUrl: BASE_URL,
      headers: {'Authorization': 'Bearer ' + this.at}
    });

    const promise = new Promise((resolve, reject) => {
      defaultRequest(options, (err: Error, response) => {
        if (response.statusCode !== 200) {
          const payload = {
            'Error': response,
            'Status': response.statusCode
          };

          reject(payload);
        }

        resolve(response.body);
      });
    });

    return promise;
  }
}
