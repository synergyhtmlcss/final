export const InfoItem = ({title, subtitle, icon}) => {
  return (
    <>
      {title}
      {subtitle}
      <img src={icon} alt="" />
    </>
  )
}