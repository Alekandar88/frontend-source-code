import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportingRoutingModule} from './reporting-routing.module';
import {DataReportsComponent} from './data-reports/data-reports.component';
import {ReportFilesComponent} from './report-files/report-files.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbCardModule} from '@nebular/theme';
import {SmartTableService} from '../../@core/data/smart-table.service';
import {AddEditReportComponent} from './report-files/add-edit-report/add-edit-report.component';

import {ThemeModule} from '../../@theme/theme.module';
import {ButtonsModule} from '../forms/buttons/buttons.module';
import {CKEditorModule} from 'ng2-ckeditor';
import {CKEditorComponent} from './report-files/add-edit-report/ckeditor/ckeditor.component';

@NgModule({
  declarations: [DataReportsComponent, ReportFilesComponent, AddEditReportComponent, CKEditorComponent],
  imports: [
    CommonModule,
    ReportingRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    ThemeModule,
    ButtonsModule,
    CKEditorModule,
  ],
  providers: [
    SmartTableService,
  ],
})
export class ReportingModule {
}
