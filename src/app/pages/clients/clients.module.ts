import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientsRoutingModule} from './clients-routing.module';
import {ClientSelectionComponent} from './client-selection/client-selection.component';
import {NbActionsModule, NbCardModule, NbTabsetModule} from '@nebular/theme';
import {SmartTableService} from '../../@core/data/smart-table.service';
import {AddEditClientComponent} from './client-selection/add-edit-client/add-edit-client.component';

import {ThemeModule} from '../../@theme/theme.module';
import {ButtonsModule} from '../forms/buttons/buttons.module';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeesComponent} from './employees/employees.component';
import {OrganizationsComponent} from './organizations/organizations.component';
import {AddEditEmployeeComponent} from './employees/add-edit-employee/add-edit-employee.component';
import {AddEditOrganizationComponent} from './organizations/add-edit-organization/add-edit-organization.component';
import {AddEditDivisionComponent} from './organizations/add-edit-division/add-edit-division.component';
import {AddEditDepartmentComponent} from './organizations/add-edit-department/add-edit-department.component';
import {ClientDetailsComponent} from './client-selection/client-details/client-details.component';
import { ClientTabsComponent } from './client-selection/client-tabs/client-tabs.component';
import { IndustriesComponent } from './industries/industries.component';
import { AddEditIndustryComponent } from './industries/add-edit-industry/add-edit-industry.component';

@NgModule({
    declarations: [ClientSelectionComponent, AddEditClientComponent,
        EmployeesComponent, OrganizationsComponent,
        AddEditEmployeeComponent, AddEditOrganizationComponent,
        AddEditDivisionComponent, AddEditDepartmentComponent,
        ClientDetailsComponent,
        ClientTabsComponent,
        IndustriesComponent,
        AddEditIndustryComponent],
    imports: [
        CommonModule,
        ClientsRoutingModule,
        NbCardModule,
        ThemeModule,
        ButtonsModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        NbActionsModule,
        NbTabsetModule
    ],
    providers: [
        SmartTableService,
    ],
})
export class ClientsModule {
}
