import { Component, OnInit } from '@angular/core';

// import './ckeditor.loader';
// import 'ckeditor';

@Component({
  selector: 'ngx-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  ngOnInit() {
  }
}
