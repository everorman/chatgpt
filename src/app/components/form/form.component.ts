import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  private apiService = inject(ApiService);
  chatCompletion$!: any;
  ngOnInit(): void {
    this.chatCompletion$ = this.apiService.generateResponse('Que es angular?')
  }
}
