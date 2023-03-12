interface IListCurrencyModel {
    id: number;
    description: string;
}

export class ListCurrencyModel implements IListCurrencyModel {
    id!: number;
    description!: string;
}