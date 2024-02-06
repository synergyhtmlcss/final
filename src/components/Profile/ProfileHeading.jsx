export const ProfileHeading = () => {
  return (
    <>
      {MOCKUP_DATA.name}
      {MOCKUP_DATA.variant}
      {MOCKUP_DATA.id}
    </>
  )
}

const MOCKUP_DATA = {
  name: "Sophia Smith",
  id: 1234567890,
  variant: "student"
}