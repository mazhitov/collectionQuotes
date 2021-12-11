import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { EditAddComponent } from './edit-add/edit-add.component';
import { NotFoundComponent } from './not-found.component';
import { CategoriesService } from '../shared/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    QuotesComponent,
    HomeComponent,
    EditAddComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
