import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductManagementComponent} from './product-management/product-management.component';
import {StaticPagesComponent} from './static-pages/static-pages.component';
import {BoxManagementComponent} from './box-management/box-management.component';
import {AddEditComponent} from './add-edit/add-edit.component';
import {AddEditBoxComponent} from './box-management/add-edit-box/add-edit-box.component';
import {AddEditProductComponent} from './product-management/add-edit-product/add-edit-product.component';
import {AssignBoxComponent} from './static-pages/assign-box/assign-box.component';

const routes: Routes = [{
  path: 'product-management',
  component: ProductManagementComponent,
},
  {
    path: 'static-pages',
    component: StaticPagesComponent,
  },
  {
    path: 'box-management',
    component: BoxManagementComponent,
  },
  {
    path: 'add-edit',
    component: AddEditComponent,
  },
  {
    path: 'product-management/add-edit-product',
    component: AddEditProductComponent,
  },
  {
    path: 'box-management/add-edit-box',
    component: AddEditBoxComponent,
  },
  {
    path: 'static-pages/assign-box',
    component: AssignBoxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
