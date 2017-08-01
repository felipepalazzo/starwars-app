import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output()
  submit: EventEmitter<any> = new EventEmitter;

  onSubmit(form) {
    this.submit.emit(form);
  }
}
