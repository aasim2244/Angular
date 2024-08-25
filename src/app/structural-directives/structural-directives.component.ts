import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [MatSlideToggle, MatLabel, NgIf],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent implements
  AfterViewInit{

  @ViewChild('sliderToggle')
  slider: any;

  showContent: boolean = false;

  ngAfterViewInit(){
    this.slider._elementRef.nativeElement.onclick = () => this.handleSlider();
  }

  handleSlider(){
    this.showContent = !this.showContent;
  }
}
