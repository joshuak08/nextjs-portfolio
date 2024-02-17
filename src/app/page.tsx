"use client"
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <>
            {/* typewriter animation here for all fields */}
            <TypeAnimation
                sequence={[
                    "Hey there! I'm Joshua Kong.",
                    1500,
                    "I'm a final year Computer Science student at the University of Bristol.",
                    1500,
                    "I'm an aspiring Software Engineer currently looking for any junior/graduate roles.",
                    1500,
                    "Feel free to explore my portfolio and get in touch with me!",
                ]}
                wrapper="h1"
                speed={50}
                deletionSpeed={75}
            />
            {/* <h1>Hey there! I&#39;m Joshua Kong. </h1> */}
            {/* include pic here maybe */}
            <p>Previously at TD Securities London, UK
            </p>

            {/* include links here to github, linkedin, resume/cv & email */}
            {/* preview of projects here */}
            {/* top navbar or adam side bar? */}
        </>
    )
}