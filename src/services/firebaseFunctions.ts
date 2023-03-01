import { db } from '../config/firebase_config'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { User } from './interfaces'

export const getUser = async (uid: string) => {
    const data: any = await getDoc(doc(db, 'users', uid))
    const result: User = await data.data()
    return result
}

// export const getTransactions = async() => {
//     const data = await getDocs(query(collection(db, 'accounts'), where('iban', '==', account)))
// }

export const getAccount = async (account: string) => {
    const array: any[] = []
    const data: any = await getDocs(query(collection(db, 'accounts'), where('iban', '==', account)))

    data.forEach((doc: any) => array.push(doc.data()))


    return array[0]
}