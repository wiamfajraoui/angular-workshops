import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {

  suggestions = [
    { id: 1, title: 'Suggestion 1' },
    { id: 2, title: 'Suggestion 2' },
    { id: 3, title: 'Suggestion 3' }
  ];

  constructor() {}

  ngOnInit(): void {}

}