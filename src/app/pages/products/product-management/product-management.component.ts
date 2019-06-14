import {Component, OnInit} from '@angular/core';

import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableService} from '../../../@core/data/smart-table.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit {

  settings = {
    mode: 'external',
    hideSubHeader: true,
    actions: {
      position: 'right',
      // edit: true,
      add: false,
      //   delete: false,
      //   custom: [{ name: 'ourCustomAction', title: '<i class="nb-compose"></i>' }],
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      // confirmSave: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      // confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        filter: false,
      },
      pageTitle: {
        title: 'Page Title',
        type: 'string',
        filter: false,

      },
      homePage: {
        title: 'Homepage',
        type: 'string',
        filter: false,

      },
      lastUpdate: {
        title: 'Last Update',
        type: 'string',
        filter: false,

      },
      up: {
        title: 'Up',
        type: 'string',
        filter: false,

      },
      down: {
        title: 'Down',
        type: 'number',
        filter: false,

      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService, private router: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event) {
    console.log(event);
  }

  onAddConfirm() {
    this.router.navigateByUrl('/pages/products/product-management/add-edit-product');
  }

  // onCreateConfirm(event) {
  //   if (window.confirm('Are you sure you want to create?')) {
  //     event.newData['name'] += ' + added in code';
  //     event.confirm.resolve(event.newData);
  //   } else {
  //     event.confirm.reject();
  //   }
  // }

  ngOnInit() {
  }

}
