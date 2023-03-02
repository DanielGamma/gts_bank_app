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

}

export interface Account {
    balance: string
    created_at: string
    iban: string
    owner: string
}