import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateBranchModel } from 'src/app/models/branch/create-branch.model';
import { ListCurrencyModel } from 'src/app/models/branch/list-currency.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {
  public dataCreateBranch: FormGroup;
  public listCurrency: ListCurrencyModel[] = [];

  constructor(
    private fb: FormBuilder,
    private serviceCustomer: CustomerService,
  ) {
    this.dataCreateBranch = this.formValidationCreate();
   }

  ngOnInit(): void {
    this.getCurrency();
  }

  public getCurrency(): void {
    this.serviceCustomer.getCurrency().subscribe((data: any) => {
      if (data.isSuccess) {
        this.listCurrency = data.data;
      } else {
        alert("Ocurrio un error, por favor intente nuevamente");
      }
    });
  }

  public formValidationCreate(): any {
    return this.fb.group({
      Codigo: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Direccion: ['', Validators.required],
      Identificacion: ['', Validators.required],
      FechaCreacion: ['', Validators.required],
      Moneda: ['', Validators.required],
    });
  }

  public createBranch(): void {
    if (this.dataCreateBranch.invalid) {
      alert("Debes diligenciar los datos completos");
      return;
    }

    let CreateCustomer: CreateBranchModel = {
      code: this.dataCreateBranch.get('Codigo')?.value,
      description: this.dataCreateBranch.get('Descripcion')?.value,
      adress: this.dataCreateBranch.get('Direccion')?.value,
      identificacion: this.dataCreateBranch.get('Identificacion')?.value,
      creationDate: this.dataCreateBranch.get('FechaCreacion')?.value,
      currency: this.dataCreateBranch.get('Moneda')?.value
    }

    this.serviceCustomer.createBranch(CreateCustomer).subscribe((data:any) => {
      if (data.isSuccess) {
        alert("Sucursal creada exitosamente");
      } else {
        alert("Ocurrio un error, por favor intente nuevamente");
      }
    });
  }

}
