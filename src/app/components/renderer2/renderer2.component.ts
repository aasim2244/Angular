import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderer2',
  standalone: true,
  imports: [],
  templateUrl: './renderer2.component.html',
  styleUrl: './renderer2.component.css'
})
export class Renderer2Component implements OnInit, AfterViewInit{

  constructor(private renderer2 : Renderer2){
    
  }

  ngOnInit(): void {
  
  }
  ngAfterViewInit(): void {
    const root = this.renderer2.selectRootElement('app-renderer2', true);
    const div = this.renderer2.createElement("div");
    const divText = this.renderer2.createText("Inserted at bottom");
    
    this.renderer2.appendChild(div, divText);    
    this.renderer2.appendChild(root, div); 

    //comment shows up in generated dom, not on screen
    const comment = this.renderer2.createComment("test comment");
    this.renderer2.appendChild(div, comment);

    const newDiv = this.renderer2.createElement("div");
    const newDivText = this.renderer2.createText("Inserted before bottom");
    this.renderer2.appendChild(newDiv, newDivText);    
    
    this.renderer2.insertBefore(root, newDiv, div);
    this.renderer2.addClass(div, "testClass")

    this.renderer2.setAttribute(newDiv, "hidden", "true");
    this.renderer2.setProperty(newDiv, "hidden", false);

    this.renderer2.setStyle(div, "background-color", "green");

    this.renderer2.removeAttribute(newDiv, "hidden");
    this.renderer2.removeClass(div, "testClass");
    this.renderer2.removeChild(div, newDiv);
    this.renderer2.removeStyle(div, "background-color");

    const parent = this.renderer2.parentNode(div);
    const rootSibling = this.renderer2.nextSibling(root);
    this.renderer2.listen("body", "mouseenter", () => console.log("listen triggered"));

    this.renderer2.destroy();

    console.log(this.renderer2);
  }
}
