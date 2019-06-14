import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveysRoutingModule } from './surveys-routing.module';
import { SurveyManagementComponent } from './survey-management/survey-management.component';
import { EmailManagementComponent } from './email-management/email-management.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbCardModule} from '@nebular/theme';
import {SmartTableService} from '../../@core/data/smart-table.service';
import { EditEmailComponent } from './email-management/edit-email/edit-email.component';
import { AddEditSurveyComponent } from './survey-management/add-edit-survey/add-edit-survey.component';

import {ThemeModule} from '../../@theme/theme.module';
import {ButtonsModule} from '../forms/buttons/buttons.module';

@NgModule({
  declarations: [SurveyManagementComponent, EmailManagementComponent, EditEmailComponent, AddEditSurveyComponent],
  imports: [
    CommonModule,
    SurveysRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    ThemeModule, ButtonsModule,
  ],
  providers: [
    SmartTableService,
  ],
})
export class SurveysModule { }
