import ProjectCards from "@/components/ProjectCard";

export default function Project(){
    


    return (
        <>
            <h1 className="mb-5 font-semibold text-2xl">Projects</h1>
            
            <hr className="mb-5"
                style={{
                background: "#ffffff",
                height: "5px",
                border: "none",
                }}
            />
            <ProjectCards />
        </>
    )
}