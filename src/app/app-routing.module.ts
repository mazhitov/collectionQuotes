import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { HomeComponent } from './home/home.component';
import { EditAddComponent } from './edit-add/edit-add.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', component: QuotesComponent},
      {path: 'quotes/:category', component: QuotesComponent}
    ]},
  {path: 'quotes/:id/edit', component: EditAddComponent},
  {path: 'add-quote', component: EditAddComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
