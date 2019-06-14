import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductManagementComponent} from './product-management/product-management.component';
import {StaticPagesComponent} from './static-pages/static-pages.component';
import {BoxManagementComponent} from './box-management/box-management.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {SmartTableService} from '../../@core/data/smart-table.service';
import {NbCardModule} from '@nebular/theme';
import {AddEditComponent} from './add-edit/add-edit.component';
import {ThemeModule} from '../../@theme/theme.module';
import {ButtonsModule} from '../forms/buttons/buttons.module';
import { AddEditProductComponent } from './product-management/add-edit-product/add-edit-product.component';
import { AddEditBoxComponent } from './box-management/add-edit-box/add-edit-box.component';
import { AssignBoxComponent } from './static-pages/assign-box/assign-box.component';


@NgModule({
  declarations: [
    ProductManagementComponent,
    StaticPagesComponent,
    BoxManagementComponent,
    AddEditComponent,
    AddEditProductComponent,
    AddEditBoxComponent,
    AssignBoxComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    ThemeModule,
    ButtonsModule,
  ],
  providers: [
    SmartTableService,
  ],
})
export class ProductsModule {
}
