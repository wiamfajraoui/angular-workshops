import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {

  suggestions: any[] = [];

  constructor(private service: SuggestionService) {}

  ngOnInit(): void {
    this.service.getSuggestionsList().subscribe(data => {
      this.suggestions = data as any[];
    });
  }

}