import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quote.model';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {
  url = '';
  quotesChange = new EventEmitter();



  constructor(private http: HttpClient) {}

  getQuotes() {
    return this.http.get<{ [id: string]: Quote }>(this.url)
      .pipe(map(result => {
        if (result === null) return [];
        return Object.keys(result).map(id => {
          const quote = result[id];
          return new Quote(id, quote.author, quote.category, quote.text);
        });
      }))
  }

  getQuotesByCategory(category: string) {
    this.url += '?orderBy="category"&equalTo="' + category + '"';
    return this.getQuotes();
  }

  urlInit() {
    this.url = 'https://project-server-788da-default-rtdb.firebaseio.com/quotes.json';
  }

  deleteQuote(quote: Quote) {
    this.http.delete('https://project-server-788da-default-rtdb.firebaseio.com/quotes/' + quote.id + '.json').subscribe(() => {
      this.quotesChange.emit();
    });
  }
}
