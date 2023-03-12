import { Component, OnInit } from '@angular/core';
import { ListBranchModel } from 'src/app/models/branch/list-branch.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-branch-management',
  templateUrl: './branch-management.component.html',
  styleUrls: ['./branch-management.component.css']
})
export class BranchManagementComponent implements OnInit {
  public listBranch: ListBranchModel[] = [];

  constructor(
    private serviceCustomer: CustomerService,
  ) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  public getCustomer(): void {
    this.serviceCustomer.getBranch().subscribe((data: any) => {
      if (data.isSuccess) {
        this.listBranch = data.data;
        console.log(this.listBranch);
      } else {
        alert("Ocurrio un error, por favor intente nuevamente");
      }
    });
  }

  public DeleteBranch(branchId: any): void {
    let model = {
      Id: branchId
    };
    this.serviceCustomer.deleteBranch(model).subscribe((data: any) => {
      if (data.isSuccess) {
        alert("Sucursal eliminada exitosamente");
        this.listBranch = [];
        this.getCustomer();
      } else {
        alert("Ocurrio un error, por favor intente nuevamente");
      }
    });
  }

}
