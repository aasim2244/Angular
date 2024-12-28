import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NgIf, NgFor, NgForOf, NgSwitch, NgSwitchCase, 
  NgSwitchDefault, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [MatSlideToggle, MatLabel, NgIf, NgFor, NgForOf,
    NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet
  ],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent implements
  AfterViewInit, AfterContentInit{

  @ViewChild('sliderToggle')
  slider: any;

  @ContentChild("ngIf")
  ngTemplateVar: ElementRef;

  showContent: boolean = false;
  list = [1,2,3,4];

  switch: string = "one";
  
  ngAfterViewInit(){
    this.slider._elementRef.nativeElement.onclick = () => this.handleSlider();
    
  }

  ngAfterContentInit(): void {
    console.log(this.ngTemplateVar);
    this.ngTemplateVar.nativeElement.style = "background-color: red";
  }

  handleSlider(){
    this.showContent = !this.showContent;
    this.switch = "one";
  }
}
