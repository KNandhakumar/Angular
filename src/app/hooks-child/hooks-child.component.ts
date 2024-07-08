import { Component,Input,OnChanges, SimpleChanges,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hooks-child',
  standalone: true,
  imports: [],
  templateUrl: './hooks-child.component.html',
  styleUrl: './hooks-child.component.css'
})
export class HooksChildComponent  implements OnChanges,OnInit,OnDestroy{

  // Property binding for ngOnChanges
  @Input('titleGet')
  titleGet = '';

  ngOnChanges(changes: SimpleChanges): void {
    // simple if condition for ngOnChanges !change show the console
    // if(!changes['titleGet'].firstChange){
    //   console.log("you are modifying original value");
    // }
    console.log("OnChanges called") // changes['titleGet'].currentValue. Access the current value
  }

  ngOnInit(): void {
      console.log("Oninit called");
      // this.titleGet = "Itachi Uchiha"; // ngOnInit component loaded show the first value
  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy called")
  }
}
