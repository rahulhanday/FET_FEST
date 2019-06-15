
export interface IRequests {
    orderId: string;
    date: string;
    location: string;
    status: string;
    orderItems: Array<IOrderArray>
}

export interface IOrderArray {
    id: string;
    quantity: number;
    label: string;
    labelKey: string;
    type: string;
    price: number;
}
