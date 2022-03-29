import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    CategoryListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
