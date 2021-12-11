import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../shared/http.service';
import { Quote } from '../../shared/quote.model';
import { CategoriesService } from '../../shared/categories.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] | undefined = undefined;
  categoryName = '';
  title = '';

  constructor(private route: ActivatedRoute,
              private httpService: HttpService,
              private categoriesService: CategoriesService,
  ) {}

  ngOnInit(): void {
    this.getQuotes();
    this.title = 'All';

    this.route.params.subscribe((params: Params) => {
      this.categoryName = params['category'];

      const category = this.categoriesService.getCategoryName(this.categoryName);
      if(category) this.title = category.name;

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
