import { NavbarItem } from "./NavbarItem"

export const MobileNavbar = () => {
  return (
    <>
      {MOCKUP_DATA.map(item => <>
        <NavbarItem title={item.title} icon={item.icon}/>
      </>)}
    </>
  )
}

const MOCKUP_DATA = [
  {
    title: "Profile",
    icon: "icons/12.png"
  },
  {
    title: "Study Schedule",
    icon: "icons/8.png"
  },
  {
    title: "Grades",
    icon: "icons/9.png"
  },
  {
    title: "Payments",
    icon: "icons/10.png"
  },
  {
    title: "Search for Internships",
    icon: "icons/11.png"
  }
]