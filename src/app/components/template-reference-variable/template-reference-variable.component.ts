import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { SearchSubjectService } from '../../services/search-subject-service/search-subject.service';

@Component({
  selector: 'app-template-reference-variable',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.css'
})
export class TemplateReferenceVariableComponent implements AfterViewInit{
  @ViewChild('textVar')
  textVar: ElementRef;
  searchService = inject(SearchSubjectService);
  
  ngAfterViewInit(): void {
    console.log("in text init ");

    this.searchService.SendValueEvent.subscribe((value: string) => {
      console.log("in text: " + value);
      this.textVar.nativeElement.value = value;
    });
  }
}
