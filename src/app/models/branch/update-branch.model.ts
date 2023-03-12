interface IUpdateBranchModel {
    id: number;
    code: number;
    description: string;
    adress: string;
    identificacion: string;
    creationDate: string;
    currency: number;
}

export class UpdateBranchModel implements IUpdateBranchModel {
    id!: number;
    code!: number;
    description!: string;
    adress!: string;
    identificacion!: string;
    creationDate!: string;
    currency!: number;
}