import { GradeItem } from "../components/ListItems/GradeItem"

export const Grades = () => {
  return (
    <>
    {MOCKUP_DATA.map(item => <>
      <GradeItem title={item.title} subtitle={item.subtitle} grade={item.grade}/>
    </>)}
    </>
  )
}

const MOCKUP_DATA = [
  {
    title: "English 101",
    subtitle: "English 101 · 3 units · Professor Smith",
    grade: "B"
  },
  {
    title: "Math 101",
    subtitle: "Math 101 · 4 units · Professor Johnson",
    grade: "C+"
  },
  {
    title: "History 101",
    subtitle: "History 101 · 3 units · Professor Williams",
    grade: "B+"
  },
  {
    title: "Chemistry 101",
    subtitle: "Chemistry 101 · 4 units · Professor Brown",
    grade: "A-"
  },
  {
    title: "Biology 101",
    subtitle: "Biology 101 · 3 units · Professor Davis",
    grade: "A"
  },
  {
    title: "Art 101",
    subtitle: "Art 101 · 2 units · Professor Miller",
    grade: "B-"
  },
  {
    title: "Physical Education 101",
    subtitle: "Physical Education 101 · 1 unit · Professor Miller",
    grade: "A+"
  }
]