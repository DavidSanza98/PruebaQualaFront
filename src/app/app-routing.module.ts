import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchManagementComponent } from './views/branch-management/branch-management.component';
import { CreateBranchComponent } from './views/create-branch/create-branch.component';
import { UpdateBranchComponent } from './views/update-branch/update-branch.component';

const routes: Routes = [
  {
    path: 'branchManagement',
    component: BranchManagementComponent,
  },
  {
    path: 'createBranch',
    component: CreateBranchComponent,
  },
  {
    path: 'updateBranch/:id',
    component: UpdateBranchComponent
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
