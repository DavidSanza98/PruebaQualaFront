import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBranchComponent } from './views/create-branch/create-branch.component';
import { BranchManagementComponent } from './views/branch-management/branch-management.component';
import { UpdateBranchComponent } from './views/update-branch/update-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBranchComponent,
    BranchManagementComponent,
    UpdateBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
