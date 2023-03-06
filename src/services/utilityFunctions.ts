import { Transaction, WeekDivided, Week, Inner } from "./interfaces"

interface HoldWeek {
    [index: string]: Transaction[]
}


export const divideWeeks = (monthlyTransaction: Week) => {
    const holdParam = { ...monthlyTransaction }
    const daysArray = Object.keys(holdParam)
    let week1: Transaction[] = []
    let week2: Transaction[] = []
    let week3: Transaction[] = []
    let week4: Transaction[] = []
    daysArray.forEach(day => {
        if (Number(day) <= 7) {
            week1 = week1.concat(holdParam[day])
        } else if (Number(day) <= 14) {
            week2 = week2.concat(holdParam[day])
        } else if (Number(day) <= 21) {
            week3 = week3.concat(holdParam[day])
        } else {
            week4 = week4.concat(holdParam[day])
        }
    })
    const holdWeeks: HoldWeek = {
        week1,
        week2,
        week3,
        week4,
    }

    const result = Object.keys(holdWeeks).reduce((acc: any, week: string, i: number) => {
        const holdInfo: Transaction[] = holdWeeks[week]
        const push = holdInfo.reduce((acc: any, info: any) => {
            if (info.type == 0) {
                acc.expenses += Number(Math.floor(info.amount).toFixed(2))
            }
            acc.transactions.push(info)
            return acc
        }, {
            name: `week${i + 1}`,
            expenses: 0,
            income: 1000,
            transactions: []
        })
        acc.push(push)
        return acc
    }, [])
    return result
}

export const getWeek = (transactionList: WeekDivided[]) => {
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

    const actualObject: Transaction[] = transactionList.filter((week: WeekDivided) => week.name == weekString)[0].transactions

    let result: Transaction[] = []

    type Legend = {
        [index: string]: string
    }
    const legend: Legend = {
        '0': 'Mon',
        '1': 'Tue',
        '2': 'Wed',
        '3': 'Thu',
        '4': 'Fri',
        '5': 'Sat',
        '6': 'Sun'
    }

    for (let i = 0; i < 7; i++) {
        const objectDays = actualObject.reduce((acc: any, transaction: Transaction) => {
            const day = new Date(transaction.date).getDay().toString()
            acc.name = legend[day]


            return acc
        }, {
            name: '',
            expense: 0,
            income: 100
        })
        result.push(objectDays)
    }


    return result






}

export const sortedTransactions = (transactionsList: Transaction[]) => {
    transactionsList.map(transaction => {

        return transaction.date = changeToLocalTime(transaction.date)

    })
    const actualMonth = new Date().getMonth()
    const monthTransactions = transactionsList.filter(transaction => {
        return new Date(transaction.date).getMonth() == actualMonth
    })
}

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
                income: 100
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
                income: 200,
                expense: 0
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


    return result.sort()
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


export const converter = (num: number):string => {
    console.clear()
    let string = num.toFixed(2)
    let result = ''
    let initial = 0

    if (string.includes('.')) {
        initial = 2
        string = string.replace('.', ',')
        result = string.slice(string.indexOf(',')+1)
    }
    
    console.log(string);
    for (let i = 0; i < string.length - initial; i++) {
        result = string[string.length - 1 -initial - i ] + result
        if(i % 3 === 0 && i !== 0){
            result = '.' + result
        }
        
    }
    return result
    

}

export { }