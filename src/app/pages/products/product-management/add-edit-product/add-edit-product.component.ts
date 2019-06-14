import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  ngOnInit() {
  }

}
