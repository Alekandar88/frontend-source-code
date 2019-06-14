import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-assign-box',
  templateUrl: './assign-box.component.html',
  styleUrls: ['./assign-box.component.scss'],
})
export class AssignBoxComponent implements OnInit {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  ngOnInit() {
  }

}
