import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient,@Inject(DOCUMENT) private dom: any) { }


  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URL : url;
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);
  }

  fetchFoodList(): Observable<any> {

      const httpOptions = {
        headers: { 
          'Content-Type': 'application/json'
        },
        params: {apiKey: '4caa748009ec45cf941ae6ecd0b533a9',query: 'Shrimp', number: '50'}
      };

    return this.http.get('https://api.spoonacular.com/recipes/complexSearch',httpOptions);
  }

  
 productDetails(productId: number): Observable<any> {

    const httpOptions = {
      headers: { 
        'Content-Type': 'application/json'
      },
      params: {apiKey: '4caa748009ec45cf941ae6ecd0b533a9'}
    };

  return this.http.get('https://api.spoonacular.com/recipes/'+productId+'/information?includeNutrition=false',httpOptions);
}
}
