import { TransactionItem } from "../components/ListItems/TransactionItem"

export const Payments = () => {
  return (
    <>
      {MOCKUP_DATA.map(item => <>
        <TransactionItem title={item.title} date={item.date} icon={item.icon} salary={item.salary}/>
      </>)}
    </>
  )
}

const MOCKUP_DATA = [
  {
    title: "Accrual of the Scholarship",
    date: "Dec 2021",
    icon: "icons/6.png",
    salary: "+$200"
  },
  {
    title: "Accrual of the Scholarship",
    date: "Dec 2022",
    icon: "icons/6.png",
    salary: "+$220"
  },
  {
    title: "Accrual of the Scholarship",
    date: "Dec 2023",
    icon: "icons/6.png",
    salary: "+$240"
  },
  {
    title: "Accrual of the Scholarship",
    date: "Dec 2024",
    icon: "icons/6.png",
    salary: "+$200"
  }
]