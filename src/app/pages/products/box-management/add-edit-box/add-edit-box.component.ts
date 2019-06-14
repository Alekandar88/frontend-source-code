import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-edit-box',
  templateUrl: './add-edit-box.component.html',
  styleUrls: ['./add-edit-box.component.scss'],
})
export class AddEditBoxComponent implements OnInit {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  ngOnInit() {
  }
}
