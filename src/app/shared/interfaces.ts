export interface ICustomer {
    id: number,
    name: string,
    city: string,
    orderTotal?: number,
    customerSince: any;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

export interface ILoginRequest {
    email: string;
    password: string;   
}

export interface ILoginResponse {
    message: string;
    status: string;
    token: string;
}
export interface ISignUpResponse {
    message: string;
    status: string;
}