import { Transaction, WeekDivided ,Week} from "./interfaces"

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
    const holdWeeks:HoldWeek = {
        week1,
        week2,
        week3,
        week4,
    }
    const result = Object.keys(holdWeeks).reduce((acc: any, week: string, i:number) => {
        const holdInfo: Transaction[] = holdWeeks[week]
        const push = holdInfo.reduce((acc: any, info: any) => {
            if(info.type == 0){
                acc.expenses += Number(Math.floor(info.amount).toFixed(2)) 
            }
            acc.transactions.push(info)
            return acc
        }, {
            name : `week${i+1}`,
            expenses : 0,
            income: 1000,
            transactions : []
        })
        acc.push(push)
        return acc
    }, [])
    return result
}

export const getWeek = (transactionList:Transaction[]) => {
    const today = new Date().getDate()
    type Dictionary ={
        [index:string] : number[]
    }
    const dictionary:Dictionary = {
        week1 : [1,2,3,4,5,6,7],
        week2 : [8,9,10,11,12,13,14],
        week3 : [15,16,17,18,19,20,21],
        week4 : [22,23,24,25,26,27,28,29,30,31]
    }

    let week: string = Object.keys(dictionary).filter( week => dictionary[week].includes(today)).join()
    
    const actualObject = transactionList.filter( week => week.name == week)



    return {
        monthly : transactionList,
        weekly : transactionList[weekly]
    }
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

export { }