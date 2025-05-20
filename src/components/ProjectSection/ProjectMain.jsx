import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const Projects = [
  {
    name: "Feast Flyer",
    year: "2024",
    align:'left',
    description: "Food Viewing App",
    image: "/images/proj1.png",
    link: "https://intership-proj.vercel.app/"
  },{
    name: "Feast Flyer",
    year: "2024",
    align:'right',
    description: "Food Viewing App",
    image: "/images/proj1.png",
    link: "https://intership-proj.vercel.app/"
  },
  {
    name: "Feast Flyer",
    year: "2024",
    align:'left',
    description: "Food Viewing App",
    image: "/images/proj1.png",
    link: "https://intership-proj.vercel.app/"
  }
]

export default function ProjectMain() {
  return (
    <div id='projects' className='max-s-[1200px] mx-auto px-4'>
      <ProjectText/>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
         {Projects.map((proj,i)=>{
          return (
            <SingleProject key={i} name={proj.name} year={proj.year} description={proj.description} image={proj.image} link={proj.link} align={proj.align}/>
          )
         })}
      </div>
    </div>
  )
}
