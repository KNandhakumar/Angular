import { Component, Input,OnChanges, SimpleChanges,OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hooks-child-1',
  standalone: true,
  imports: [],
  templateUrl: './hooks-child-1.component.html',
  styleUrl: './hooks-child-1.component.css'
})
export class HooksChild1Component implements OnChanges,OnInit,DoCheck,OnDestroy {
  // Hook Child-1 Component NgDoCheck
  @Input()
  titleGet2:string[] = [];
  noOfTitles = 0;

  // Hook Child-1 Component NgDoCheck
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngChanges called for hook-child-1")
  }

  ngOnInit(): void {
    console.log("ngOnit called for hook-child-1");
    this.titleGet2.push('itachi');
    this.noOfTitles = 1;
  }

  ngDoCheck(): void {
    if(this.titleGet2.length>this.noOfTitles){
      console.log("ngDoCheck called");
      console.log(this.noOfTitles)
      console.log("you are modifying original value");
      this.noOfTitles++;
    }
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
}
}
