import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from '../../shared/category.model';
import { CategoriesService } from '../../shared/categories.service';
import { HttpService } from '../../shared/http.service';

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.css']
})
export class EditAddComponent implements OnInit {
  title = '';
  quoteId = '';
  categories: Category[] = [];
  category = 'Choose category';
  author = '';
  text = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoriesService: CategoriesService,
              private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.title = 'Submit a new quote';
    this.route.params.subscribe((params: Params) => {
      this.quoteId = params['id'];
      if (this.quoteId) {
        this.title = 'Edit a quote';
        this.getQuote();
      }
    });

    this.categories = this.categoriesService.getCategories();
  }

  getQuote() {
    this.httpService.getQuote(this.quoteId).subscribe(quote => {
      this.text = quote.text;
      this.author = quote.author;
      this.category = quote.category;
    });
  }

  getDisabled() {
    return this.text === '' || this.author === '' || this.category === 'Choose category';
  }


  onSubmitForm() {
    const quoteValues = {author: this.author, category: this.category, text: this.text};
    if(this.quoteId) {
      this.httpService.editQuote(this.quoteId, quoteValues);
    } else {
      this.httpService.addQuote(quoteValues);
    }
    void this.router.navigate(['/']);
  }
}
