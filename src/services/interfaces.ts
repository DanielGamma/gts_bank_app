export interface Card {
    card: string,
    card_formatted: string,
    cvc: string,
    expiration_date: string,
    service: string
}


export interface User {
    first_name: string,
    last_name: string,
    account: string,
    profile_picture: string,
    card: Card,
    friends: string[]
    gender: string,
    phone_number: string,
    transactions: string[],
    email: string,
    id : string

}

export interface Account {
    balance: number
    created_at: string
    iban: string
    owner: string
}

export interface Transaction {
    amount: number,
    category: string,
    date: string,
    origin_account: string | null,
    receiver_name: string,
    type: number,
    user_uid: string,
    day?:string
}

export type Week = {
    [index: string]: Transaction[]
}

export interface WeekDivided {
    expenses : number,
    income: number,
    name: string,
    transactions: Transaction[]
}
export type Inner = {
    name: string,
    expense: number,
    income: number
}

export interface formData{
    receiverName:string;
    receiverPhone:string;
    amount:string;
    description: string;
   
  }

