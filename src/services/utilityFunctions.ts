import { index } from "d3-array"
import { Transaction, Inner } from "./interfaces"


export const changeToLocalTime = (date: string): string => {
    const extract = date.slice(date.indexOf(':') - 2, date.indexOf(':'))
    let convert = (Number(extract) + 1).toString()
    if (convert == '24') {
        convert = '00'
    }
    if (convert.length == 1) {
        convert = '0' + convert
    }
    const result = date.slice(0, date.indexOf(':') - 2) + convert + date.slice(date.indexOf(':'))
    return result
}


export const sortTransactionsByWeek = (transactionList: Transaction[]) => {
    type Outer = {
        [index: string]: Inner
    }
    const sortedByWeek: Outer = transactionList.reduce((acc: any, transaction: Transaction) => {
        const dayName = new Date(transaction.date).toUTCString().slice(0, 3)
        if (!Object.hasOwn(acc, dayName)) {
            acc[dayName] = {
                name: dayName,
                expense: 0,
                income: 100,
                category: transaction.category
            }
        } else {
            if (transaction.type == 0) {
                acc[dayName].expense += transaction.amount
            }
            // else {
            //     acc[dayName].income += transaction.amount
            // }
        }
        acc[dayName].income = Number(acc[dayName].income.toFixed(2))
        acc[dayName].expense = Number(acc[dayName].expense.toFixed(2))
        return acc
    }, {})

    const result: Inner[] = Object.keys(sortedByWeek).reduce((acc: Inner[], day) => {
        acc.push(sortedByWeek[day])
        return acc
    }, [])

    type Dictionary = {
        [index: string]: number
    }
    const dictionary: Dictionary = {
        Mon: 1,
        Tue: 2,
        Wed: 3,
        Thu: 4,
        Fri: 5,
        Sat: 6,
        Sun: 7,
    }
    return result.sort((a, b) => dictionary[a.name] - dictionary[b.name])
}

export const sortTransactionsByMonth = (transactionList: Transaction[]) => {

    type Outer = {
        [index: string]: Inner
    }
    type Dictionary = {
        [index: string]: Number[]
    }
    const dictionary: Dictionary = {
        '1-5': [1, 2, 3, 4, 5],
        '6-10': [6, 7, 8, 9, 10],
        '11-15': [11, 12, 13, 14, 15],
        '16-20': [16, 17, 18, 19, 20],
        '21-25': [21, 22, 23, 24, 25],
        '26-31': [26, 27, 28, 29, 30, 31],
    }

    const sortByMonth: Outer = transactionList.reduce((acc: any, transaction) => {
        const day = new Date(transaction.date).getDate()
        const key = Object.keys(dictionary).filter(e => dictionary[e].includes(day))[0]
        if (!Object.hasOwn(acc, key)) {
            acc[key] = {
                name: key,
                income: 500,
                expense: 0,
                category : transaction.category
            }
        } else {
            if (transaction.type == 0) {
                acc[key].expense += transaction.amount
            }
            // else {
            //     acc[key].income += transaction.amount
            // }
        }

        acc[key].income = Number(acc[key].income.toFixed(2))
        acc[key].expense = Number(acc[key].expense.toFixed(2))
        return acc
    }, {})


    const result: Inner[] = Object.keys(sortByMonth).reduce((acc: Inner[], day) => {
        acc.push(sortByMonth[day])
        return acc
    }, [])

    type Sort = {
        [index: string]: number
    }
    const sort: Sort = {
        '1-5': 1,
        '6-10': 2,
        '11-15': 3,
        '16-20': 4,
        '21-25': 5,
        '26-31': 6,
    }

    return result.sort((a, b) => sort[a.name] - sort[b.name])
}

export const findWeekandSort = (transactionList: Transaction[]) => {
    const today = new Date().getDate()
    type Dictionary = {
        [index: string]: number[]
    }

    const dictionary: Dictionary = {
        week1: [1, 2, 3, 4, 5, 6, 7],
        week2: [8, 9, 10, 11, 12, 13, 14],
        week3: [15, 16, 17, 18, 19, 20, 21],
        week4: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    }

    const weekString: string = Object.keys(dictionary).filter(week => dictionary[week].includes(today))[0]

    const result = transactionList.filter((transaction: Transaction) => {
        const day = new Date(transaction.date).getDate().toString()
        return dictionary[weekString].includes(Number(day))
    })
    return result

}


export const converter = (num: number): string => {

    let string = num.toFixed(2)
    let result = ''
    let initial = 0

    if (string.includes('.')) {
        initial = 2
        string = string.replace('.', ',')
        result = string.slice(string.indexOf(',') + 1)
    }
    for (let i = 0; i < string.length - initial; i++) {
        result = string[string.length - 1 - initial - i] + result
        if (i % 3 === 0 && i !== 0) {
            result = '.' + result
        }

    }
    return result
}


export const createTransferId = (): string => {
    const chars = 'abcdefgh0123456789'
    let result = ''
    let string = '006e69d3-85d5-43fc-b867-3fc940e9dfcc'
    for (let i = 0; i < 36; i++) {
        result += chars[Math.floor(Math.random() * chars.length)]
        if (i == 8 || i == 13 || i == 18 || i == 23) {
            result += '-'
        }
    }
    return result
}

export const sortByCategory = (transactionsList: Transaction[]) => {
    type Outer =  {
      [index:string] : Inner
    }
    type Inner =  {
        name: string,
        expense: number
      }
    const sortCategory: Outer = transactionsList.reduce((acc:Outer,transaction:Transaction) => {
      if(!Object.hasOwn(acc, transaction.category)){
        acc[transaction.category] = {
          name: transaction.category,
          expense: transaction.amount
        }
      }else{
        acc[transaction.category].expense += transaction.amount
      }
      acc[transaction.category].expense = Number(acc[transaction.category].expense.toFixed(2))
      return acc
    },{})


    const result: Inner[] = Object.keys(sortCategory).reduce((acc:any, key:string) => {
      acc.push(sortCategory[key])
      return acc
    },[])
    
    
    type Sort = {
        [index: string]: number
    }

    const dictionary:Sort = {
        Health : 1,
        Traveling : 2,
        Grocery : 3,
        Leisure : 4,
        Clothes : 5,
        Home : 6,
        Education : 7,
        Commuting : 8,
        Others : 9,
    }


    return result.sort((a,b) => dictionary[a.name] - dictionary[b.name])
  } 

  

type Data = {
    [index:string] : string
}
  const validateForm = (data:Data):Data | boolean => {
    let {receivingAccount, receivingName, amount, receivingPhone} = data

    amount = amount.replace(',','.')
    let holdName = receivingName.split(' ')
    receivingName = holdName.map( element => element[0].toUpperCase() + element.slice(1).toLowerCase()).join(' ')
    if(receivingAccount != ''){
        if(receivingAccount.length != 24) return false
        if(receivingAccount.slice(0,2) != 'ES')return false
        }
    if((typeof Number(amount) != 'number') ) return false
    
    

    return data
  }

export { }