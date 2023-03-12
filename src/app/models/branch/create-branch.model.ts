interface ICreateBranchModel {
    code: number;
    description: string;
    adress: string;
    identificacion: string;
    creationDate: string;
    currency: number;
}

export class CreateBranchModel implements ICreateBranchModel {
    code!: number;
    description!: string;
    adress!: string;
    identificacion!: string;
    creationDate!: string;
    currency!: number;
}