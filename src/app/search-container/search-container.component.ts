import { Component } from '@angular/core';
import { SearchService } from '../common/search.service';

@Component({
  selector: 'search-container',
  templateUrl: './search-container.component.html',
})
export class SearchContainerComponent {
  constructor(private searchService: SearchService) { }
  people: any;
  handleSubmit(event) {
    this.searchService
      .getPeople(event.term)
      .subscribe((response) => this.people = response)
  }
}
