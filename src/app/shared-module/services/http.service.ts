import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    'providedIn': 'root'
})
export class HttpService {
    constructor(private $http: HttpClient) { }
    /**
     * HTTP Get
     * param url
     */
    get(url: string) {
        return this.$http.get('../../assets/data/' + url);
    }

    /**
     * HTTP Post
     * param url
     * param payload
     */
    post(url: string, payload: any) {
        return this.$http.post(url, payload);
    }
}
