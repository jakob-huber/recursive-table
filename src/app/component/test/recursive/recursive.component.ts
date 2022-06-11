import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.scss']
})
export class RecursiveComponent implements OnInit {

  @Input() level!: number;

  constructor() { }

  ngOnInit(): void {

  }

}
