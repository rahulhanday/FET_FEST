import { CONTEXT_TYPES_ENUM } from '../app.constant';

export interface IContext {
    type: CONTEXT_TYPES_ENUM,
    name: string,
    location: string,
    city?: string,
    cityToSell?: string[]
}

export interface IFarmerModel {
    username: string,
    displayName: string,
    city: string,
    cityToSell: string[];
    location: string;
}

export interface IUserModel {
    username: string,
    displayName: string,
    location: string,
    city: string
}
