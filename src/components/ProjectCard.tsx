"use client"
import Image from 'next/image'
import { ProjectCardProps } from "@/app/types";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Techicons from "@/components/Techicons";
import { Link } from "@nextui-org/react";
import { projectDataTest } from "@/app/projectData"

function filterData(category: string, keyword: string) {
    return category === keyword
}

// const [data, setData] = useState<ProjectCardProps[]>(projectDataTest)
//     const [categories, setCategories] = useState<string[]>([])
//     const [filteredData, setFilteredData] = useState<ProjectCardProps[]>([])

//     useEffect(() => {
//         if (categories.length > 0) {
//             const newData = data.filter(element => categories.includes(element.category))
//             setFilteredData(newData)
//         } else {
//             setFilteredData(data)
//         }
//     }, [categories, data])

//     return (
//         // Use filteredData instead of data in your render
//         <ol className="group/list">
//             {filteredData.map((individual) => (
//                 <li key={individual.title} className="mb-4">
//                 // ...
//             ))}
//         </ol>
//     )

export default function ProjectCards() : React.ReactNode {
    const [data, setData] = useState<ProjectCardProps[]>(projectDataTest)
    const [categories, setCategories] = useState<string>('')
    const [filteredData, setFilteredData] = useState<ProjectCardProps[]>([])

    useEffect(() => {
        if (categories === '') {
            setFilteredData(data)
        } else {
            const newData = data.filter(element => element.category.includes(categories))
            setFilteredData(newData)
        }
    }, [categories, data])

    function handleFilter(keyword: string){
        setCategories(() => {
            if (keyword === ''){
                return ''
            } else {
                return keyword
            }
        });
    }

    return (
        <>
            <FilterButton onFilter={handleFilter} />
            <ol className="group/list">
                {filteredData.map((individual) => (
                    <li key={individual.title} className="mb-4">
                        <Card title={individual.title} year={individual.year} description={individual.description} image={individual.image} category={individual.category} link={individual.link} technologies={individual.technologies}/>
                    </li>
                ))}
            </ol>
        </>
    )
}

interface FilterButtonProps {
    onFilter: (filterType: string) => void;
}

function FilterButton({ onFilter }: FilterButtonProps): React.ReactNode {
    return (
        <>
            <div className='flex'>
                <button className='hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                onClick={() => onFilter('personal')}>Personal</button>
                <button className='hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                onClick={() => onFilter('internship')}>Internship</button>
                <button className='hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                onClick={() => onFilter('university')}>University</button>
                <button className='hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                onClick={() => onFilter('')}>All</button>
            </div>
        </>
    )
}

function Card(props: ProjectCardProps): React.ReactNode {
    return (
        // add redirection links
        <div className="group relative pb-1 transition-all gap-4 hover:!opacity-100 group-hover/list:opacity-50">
            <a href={props.link}>
                <div className="p-4 z-0 rounded-md transition motion-reduce:transition-none grid grid-cols-12 text-slate-300
                group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg">
                        {/* title, description, text parts */}
                        <div className='col-span-7'>
                            <h1 className="font-semibold text-xl text-slate-50">{props.title}</h1>
                            <h4 className="text-sm">{props.year}</h4>
                            {/* div for tech icons */}
                            <div className='flex py-1 items-center'>
                                <span className="text-md">Built with: </span>
                                {props.technologies.map((tech, index) => (
                                    <Techicons tech={tech} key={index}/>
                                    // <Image src={`/images/techicons/${tech}.svg`} alt={tech} width={50} height={50}/>
                                    ))}
                            </div>
                            <p>Category: {props.category}</p>
                            <p className="">This is a test to see how long the description block can go with this lorem ipsum lorem ipsum lorem ipsum lorem ipsum  </p>
                        </div>

                        {/* image part */}
                        <div className="col-span-5 rounded overflow-hidden m-3">
                            <Image className="" alt='python-logo' src={`/images/${props.image}`}
                            object-fit='contain' 
                            width={50}
                            height={50}
                            />
                        </div>
                </div>
            </a>
        </div>
    )
}
