import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SurveyManagementComponent} from './survey-management/survey-management.component';
import {EmailManagementComponent} from './email-management/email-management.component';
import {AddEditSurveyComponent} from './survey-management/add-edit-survey/add-edit-survey.component';
import {EditEmailComponent} from './email-management/edit-email/edit-email.component';

const routes: Routes = [{
  path: 'survey-management',
  component: SurveyManagementComponent,
}, {
  path: 'email-management',
  component: EmailManagementComponent,
},
  {
    path: 'survey-management/add-edit-survey',
    component: AddEditSurveyComponent,
  },
  {
    path: 'email-management/edit-email',
    component: EditEmailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveysRoutingModule {
}
