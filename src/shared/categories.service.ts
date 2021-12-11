export class CategoriesService {
  private categories = [
    {name:'Star Wars', value: 'star-wars'},
    {name:'Famous people', value: 'famous-people'},
    {name:'Saying', value: 'saying'},
    {name:'Humour', value: 'humour'},
    {name:'Motivational', value: 'motivational'},
  ];

  getCategories() {
    return this.categories.slice();
  }

  getCategoryName(categoryValue: string) {
    return this.categories.find( category => category.value === categoryValue);
  }
}
