import ProjectCard from "@/components/ProjectCard";
import { ProjectCardProps } from "@/app/types";

export default function Project(){
    const test: ProjectCardProps = {
        title: "test",
        year: 2022,
        description: "test",
        image: "test",
        link: "www.google.com",
        technologies: ["test", "test", "test"],
    }


    return (
        <>
            <h1 className="mb-5 font-semibold text-2xl">Projects</h1>
            {/* add filter here for internship personal project coursework */}
            <ProjectCard title={test.title} year={test.year} description={test.description} image={test.image} link={test.link} technologies={test.technologies}/>
        </>
    )
}