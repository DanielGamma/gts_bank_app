import { db } from '../config/firebase_config'
import { collection, doc, getDoc, getDocs, query, where, setDoc, updateDoc } from 'firebase/firestore'
import { User, Transaction, Account } from './interfaces'


export const getUser = async (uid: string) => {
    const data: any = await getDoc(doc(db, 'users', uid))
    const result: User = await data.data()
    result.id = data.id
    return result
}

export const getTransactions = async (transactionsList: string[]) => {
    const data: Transaction[] = await Promise.all(transactionsList.map(transaction => getDoc(doc(db, 'transactions', transaction)).then(res => res.data() as Transaction)))
    return data
}

export const getAccount = async (account: string) => {
    const array: any[] = []
    const data: any = await getDocs(query(collection(db, 'accounts'), where('iban', '==', account)))
    data.forEach((doc: any) => array.push(doc.data()))
    return array[0]
}

// export const getUserWithNumber = async (phoneNumber: number) => {
//     const array: any[] = []
//     const data: any = await getDocs(query(collection(db, 'User'), where('phone_number', '==', phoneNumber)))
//     data.forEach((doc: any) => array.push(doc.data()))
//     return array[0]
// }

export const changeAccountValues = async(accountSending:Account, userReceiving:User, amount:number) => {

    const holdSend = accountSending
    const holdReceive = await getAccount(userReceiving.account)
    updateDoc(doc(db,'accounts', holdSend.iban), {
      balance: holdSend.balance - amount
    })
    updateDoc(doc(db,'accounts', holdReceive.iban), {
      balance: holdReceive.balance + amount ,
    })
    
 }


export const sendNewinfo = async (currentUser:any , data:any) => {
    await updateDoc(doc(db, 'users', currentUser.id),
        {
            first_name: data.first_name ,
            last_name: data.last_name,
            phone_number: data.phone_number
        }
    )
}

export const sendNewPicture = async (currentUser:any , data:any) => {
    await updateDoc(doc(db, 'users', currentUser.id),
        {
            profile_picture: data.profile_picture ,
        }
    )
}
