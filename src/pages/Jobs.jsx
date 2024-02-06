import { JobItem } from "../components/ListItems/JobItem";

export const Jobs = () => {
  return (
    <>
      {MOCKUP_DATA.map(item => <>
        <JobItem title={item.title} date={item.date} company={item.company} img={item.img}/>
      </>)}
    </>
  )
}

const MOCKUP_DATA = [ 
  { 
    title: "Product Manager Intern, Summer 2022", 
    date: "20.09.2021", 
    company: "Facebook", 
    img: "./0.png" 
  }, 
  { 
    title: "Product Manager Intern, Summer 2022", 
    date: "20.09.2021", 
    company: "Facebook", 
    img: "./0.png" 
  }, 
  { 
    title: "Product Manager Intern, Summer 2022", 
    date: "20.09.2021", 
    company: "Facebook", 
    img: "./0.png" 
  }, 
  { 
    title: "Product Manager Intern, Summer 2022", 
    date: "20.09.2021", 
    company: "Facebook", 
    img: "./0.png" 
  }, 
  { 
    title: "Product Manager Intern, Summer 2022", 
    date: "20.09.2021", 
    company: "Facebook", 
    img: "./0.png" 
  }, 
  { 
    title: "Product Manager Intern, Summer 2022", 
    date: "20.09.2021", 
    company: "Facebook", 
    img: "./0.png" 
  }, 
];

