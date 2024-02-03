"use client"
import { Card, CardHeader, CardBody, CardFooter, Button, Slider, Link } from "@nextui-org/react";
import Image from 'next/image'
import { ProjectCardProps } from "@/app/types";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Techicons from "@/components/Techicons";

export function ProjectCard(props: ProjectCardProps) : React.ReactNode {
    return (
        // add redirection links
        // <div className="grid grid-cols-12 dark:backdrop-filter dark:backdrop-blur-lg dark:drop-shadow-lg bg-slate-800/50 rounded justify-between ">
        <div className="group relative pb-1 transition-all gap-4">

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
                    <p className="">This is a test to see how long the description block can go with this lorem ipsum lorem ipsum lorem ipsum lorem ipsum  </p>
                </div>

                {/* image part */}
                <div className="col-span-5 rounded overflow-hidden m-3">
                    {/* <Image className="" src={props.image}/> */}
                    <Image className="" alt='python-logo' src={'/images/python.png'}
                    // fill
                    object-fit='contain' 
                    width={50}
                    height={50}
                    />
                </div>
            </div>
        </div>
    )
}

export function NextUIProjectCard(props: ProjectCardProps) : React.ReactNode {
    const [projectState, setProjectState] = useState<ProjectCardProps>(props);

    useEffect(() => {
        setProjectState(props);
    }, [props])

    return (
        // <Link href={props.link}>
        
        <Card
            isBlurred
            isPressable
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
            fullWidth={true}
            onPress={() => redirect(props.link)}
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h3 className="font-semibold text-foreground/90">{props.title}</h3>
                                <p className="text-small text-foreground/80">{props.year}</p>
                                <h1 className="text-large font-medium mt-2">{props.description}</h1>
                            </div>
                        </div>
                    </div>


                    {/* <div className="relative col-span-6 md:col-span-4">
                        <Image
                        alt="Album cover"
                        className="object-cover"
                        height={200}
                        shadow="md"
                        src="../../public/images/highway.jpg"
                        width="100%"
                        />
                    </div> */}
                </div>
            </CardBody>
        </Card>
        // </Link>
    )
}

export default ProjectCard;