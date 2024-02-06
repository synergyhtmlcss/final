import { InfoItem } from "../components/ListItems/InfoItem"
import { ProfileHeading } from "../components/Profile/ProfileHeading"

export const Profile = () => {
  return (
    <>
      <ProfileHeading/>
      {MOCKUP_DATA.map(item => <>
       <InfoItem title={item.title} subtitle={item.subtitle} icon={item.icon}/>
      </>)}
    </>
  )
}

const MOCKUP_DATA = [
  {
    title: "Group",
    subtitle: "Group 3",
    icon: "icons/7.png",
  },
  {
    title: "Last Name, First Name, Age",
    subtitle: "Yang Hua, 20 years old",
    icon: "icons/1.png",
  },
  {
    title: "Profile",
    subtitle: "Computer Science",
    icon: "icons/2.png",
  },
  {
    title: "School",
    subtitle: "Beijing University of Science and Technology",
    icon: "icons/3.png",
  },
  {
    title: "Grade",
    subtitle: "2020",
    icon: "icons/4.png",
  },
  {
    title: "End Date",
    subtitle: "2024.06.30",
    icon: "icons/5.png",
  },
]