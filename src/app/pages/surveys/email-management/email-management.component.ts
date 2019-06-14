import {Component, OnInit} from '@angular/core';

import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableService} from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-email-management',
  templateUrl: './email-management.component.html',
  styleUrls: ['./email-management.component.scss']
})
export class EmailManagementComponent implements OnInit {

  settings = {
    mode: 'external',
    hideSubHeader: true,
    actions: {
      position: 'right',
      // edit: true,
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
      emailType: {
        title: 'Email Type',
        type: 'string',
        filter: false,
      },
      emailDescription: {
        title: 'Email Description',
        type: 'string',
        filter: false,
      },
      view: {
        title: 'View',
        type: 'string',
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
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
