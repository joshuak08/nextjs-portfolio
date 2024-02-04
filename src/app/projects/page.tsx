import ProjectCards from "@/components/ProjectCard";

export default function Project(){
    


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
            <ProjectCards />
            {/* <ol className="group/list">
                <li className="mb-8">
                    <ProjectCards title={test.title} year={test.year} description={test.description} image={test.image} category={test.category} link={test.link} technologies={test.technologies}/>
                </li>
                <li className="mb-8">
                    <ProjectCards title={test.title} year={test.year} description={test.description} image={test.image} category={test.category} link={test.link} technologies={test.technologies}/>
                </li>
            </ol> */}
        </>
    )
}