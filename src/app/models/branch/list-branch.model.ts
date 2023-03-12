interface IListBranchModel {
    id: number;
    code: number;
    description: string;
    adress: string;
    identificacion: string;
    creationDate: string;
    currency: number;
    descriptionCurrency: string;
}

export class ListBranchModel implements IListBranchModel {
    id!: number;
    code!: number;
    description!: string;
    adress!: string;
    identificacion!: string;
    creationDate!: string;
    currency!: number;
    descriptionCurrency!: string;
}