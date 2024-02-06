export const JobItem = ({title, date, company, img}) => {
  return (
    <>
      {title}
      {date}
      {company}
      <img src={img} alt="" />
    </>
  )
}