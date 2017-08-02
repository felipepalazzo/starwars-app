import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  onSubmit(event, form) {
    event.stopPropagation();
    if (form.valid) {
      this.submit.emit(form.value);
    }
  }
}
