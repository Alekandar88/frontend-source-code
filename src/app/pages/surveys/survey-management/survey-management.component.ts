import {Component, OnInit} from '@angular/core';

import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableService} from '../../../@core/data/smart-table.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-survey-management',
  templateUrl: './survey-management.component.html',
  styleUrls: ['./survey-management.component.scss'],
})
export class SurveyManagementComponent implements OnInit {
  settings = {
    mode: 'external',
    hideSubHeader: true,
    actions: {
      position: 'right',
      // edit: false,
      add: false,
      // delete: false,
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
      surveyTitle: {
        title: 'Survey Title',
        type: 'string',
        filter: false,
      },
      surveyType: {
        title: 'Survey Type',
        type: 'string',
        filter: false,
      },
      surveySchedule: {
        title: 'Survey Schedule',
        type: 'string',
        filter: false,
      },
      surveyPeriod: {
        title: 'Survey Period',
        type: 'string',
        filter: false,
      },
      question: {
        title: '# Question',
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
    this.router.navigateByUrl('/pages/surveys/survey-management/add-edit-survey');
  }

  ngOnInit() {
  }

}
