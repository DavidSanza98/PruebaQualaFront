import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateBranchModel } from 'src/app/models/branch/create-branch.model';
import { ListCurrencyModel } from 'src/app/models/branch/list-currency.model';
import { UpdateBranchModel } from 'src/app/models/branch/update-branch.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css']
})
export class UpdateBranchComponent implements OnInit {
  public invoiceParam: any;
  public branch: any;
  public dataCreateBranch: FormGroup;
  public listCurrency: ListCurrencyModel[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private serviceCustomer: CustomerService,
    ) { 
    this.dataCreateBranch = this.formValidationCreate();
    this.invoiceParam = this.activeRoute.snapshot.params;
  }

  ngOnInit(): void {
    this.getBranchById();
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

  public updateBranch(): void {
    if (this.dataCreateBranch.invalid) {
      alert("Debes diligenciar los datos completos");
      return;
    }

    let CreateCustomer: UpdateBranchModel = {
      code: this.dataCreateBranch.get('Codigo')?.value,
      description: this.dataCreateBranch.get('Descripcion')?.value,
      adress: this.dataCreateBranch.get('Direccion')?.value,
      identificacion: this.dataCreateBranch.get('Identificacion')?.value,
      creationDate: this.dataCreateBranch.get('FechaCreacion')?.value,
      currency: this.dataCreateBranch.get('Moneda')?.value,
      id: this.invoiceParam.id
    }

    this.serviceCustomer.updateBranch(CreateCustomer).subscribe((data:any) => {
      if (data.isSuccess) {
        alert("Sucursal actualizada exitosamente");
      } else {
        alert("Ocurrio un error, por favor intente nuevamente");
      }
    });
  }

  public getBranchById(): void {
    let model = {
      Id: this.invoiceParam.id
    };

    this.serviceCustomer.getBranchById(model).subscribe((data: any) => {
      if (data.isSuccess) {
        this.branch = data.data;
        this.dataCreateBranch.get('Codigo')!.setValue(this.branch.code);
        this.dataCreateBranch.get('Descripcion')!.setValue(this.branch.description);
        this.dataCreateBranch.get('Direccion')!.setValue(this.branch.adress);
        this.dataCreateBranch.get('Identificacion')!.setValue(this.branch.identificacion);
        this.dataCreateBranch.get('FechaCreacion')!.setValue(this.branch.creationDate);
        this.dataCreateBranch.get('Moneda')!.setValue(this.branch.currency);
      } else {
        alert("Ocurrio un error, por favor intente nuevamente");
      }
    });
  }

}
