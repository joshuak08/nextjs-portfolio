import ProjectCard from "@/components/ProjectCard";
import { ProjectCardProps } from "@/app/types";

export default function Project(){
    const test: ProjectCardProps = {
        title: "test",
        year: 2022,
        description: "test",
        image: "test",
        link: "www.google.com",
        category: ['personal', 'internship', 'university'],
        technologies: ["test", "test", "test"],
    }


    return (
        <>
            <h1 className="mb-5 font-semibold text-2xl">Projects</h1>
            {/* replace line with filter here for internship personal project coursework */}
            <hr className="mb-5"
                style={{
                background: "#ffffff",
                height: "5px",
                border: "none",
                }}
            />
            <ol>
                {/* add loop here for all  */}
                <li className="mb-8">
                    <ProjectCard title={test.title} year={test.year} description={test.description} image={test.image} category={test.category} link={test.link} technologies={test.technologies}/>
                </li>
            </ol>
        </>
    )
}