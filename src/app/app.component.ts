import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    {name:'Star Wars', value: 'star-wars'},
    {name:'Famous people', value: 'famous-people'},
    {name:'Saying', value: 'saying'},
    {name:'Humour', value: 'humour'},
    {name:'Motivational', value: 'motivational'},
  ];

}
