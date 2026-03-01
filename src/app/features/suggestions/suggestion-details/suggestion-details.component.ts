import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {

  id: any;
  suggestion: any;

  constructor(
    private route: ActivatedRoute,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.suggestion = this.suggestionService.getSuggestionById(this.id);
  }

}