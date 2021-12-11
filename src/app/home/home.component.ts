import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = [
    {name:'Star Wars', value: 'star-wars'},
    {name:'Famous people', value: 'famous-people'},
    {name:'Saying', value: 'saying'},
    {name:'Humour', value: 'humour'},
    {name:'Motivational', value: 'motivational'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
