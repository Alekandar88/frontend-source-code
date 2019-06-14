import {Component, OnInit} from '@angular/core';

import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableService} from '../../../@core/data/smart-table.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-static-pages',
  templateUrl: './static-pages.component.html',
  styleUrls: ['./static-pages.component.scss'],
})
export class StaticPagesComponent implements OnInit {

  settings = {
    mode: 'external',
    hideSubHeader: true,
    actions: {
      position: 'right',
      edit: false,
      add: false,
      delete: false,
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
      staticPageTitle: {
        title: 'Static Page Title',
        type: 'string',
        filter: false,

      },
      callOutBox1: {
        title: 'Call-out-Box 1',
        type: 'string',
        filter: false,

      },
      callOutBox2: {
        title: 'Call-out-Box 2',
        type: 'string',
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
    this.router.navigateByUrl('pages/products/static-pages/assign-box');
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
