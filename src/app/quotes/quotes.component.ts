import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../shared/http.service';
import { Quote } from '../../shared/quote.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] | undefined = undefined;
  categoryName = '';

  constructor(private route: ActivatedRoute,
              private httpService: HttpService,
  ) {
  }

  ngOnInit(): void {
    this.getQuotes();
    this.route.params.subscribe((params: Params) => {
      this.categoryName = params['category'];
      this.getQuotes();
    });

    this.httpService.quotesChange.subscribe(() => {
      this.getQuotes();
    })
  }


  getQuotes() {
    if (this.categoryName) {
      this.httpService.urlInit();
      this.httpService.getQuotesByCategory(this.categoryName).subscribe(quotes => {
        this.quotes = quotes;
      })
    } else {
      this.httpService.urlInit();
      this.httpService.getQuotes().subscribe(quotes => {
        this.quotes = quotes;
      });
    }
  }

  deleteQuote(index: number) {
    this.httpService.deleteQuote(this.quotes![index]);
  }
}
