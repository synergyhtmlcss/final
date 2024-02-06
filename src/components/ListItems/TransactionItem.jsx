export const TransactionItem = ({title, date, icon, salary}) => {
  return (
    <>
      <img src={icon} alt="" />
      {title}
      {date}
      {salary}
    </>
  )
}