import React from "react";
import Image from 'next/image'

type TechiconsProps = {
    tech: string;
}


export default function Icons({tech}: TechiconsProps): React.ReactNode {

    return (
        <>
            <p>{tech}</p>
            <Image className="m-1" src={'/images/python.png'} alt='python-logo' width={25} height={25}/>
        </>
        // <div className="flex flex-col items-center justify-center gap-4">
        //     <img src={`/images/techicons/${tech}.svg`} alt={tech} className="w-10 h-10" />
        //     <p className="text-sm text-foreground/80">{tech}</p>
        // </div>
    )

    // return (
    //     <div className="flex flex-col items-center justify-center">
    //         <div className="flex flex-row items-center justify-center gap-4">
    //             <div className="flex flex-col items-center justify-center gap-4">
    //                 <img src="/images/techicons/nextjs.svg" alt="nextjs" className="w-10 h-10" />
    //                 <p className="text-sm text-foreground/80">Next.js</p>
    //             </div>
    //             <div className="flex flex-col items-center justify-center gap-4">
    //                 <img src="/images/techicons/nextjs.svg" alt="nextjs" className="w-10 h-10" />
    //                 <p className="text-sm text-foreground/80">Next.js</p>
    //             </div>
    //             <div className="flex flex-col items-center justify-center gap-4">
    //                 <img src="/images/techicons/nextjs.svg" alt="nextjs" className="w-10 h-10" />
    //                 <p className="text-sm text-foreground/80">Next.js</p>
    //             </div>
    //         </div>
    //         <div className="flex flex-row items-center justify-center gap-4">
    //             <div className="flex flex-col items-center justify-center gap-4">
    //                 <img src="/images/techicons/nextjs.svg" alt="nextjs" className="w-10 h-10" />
    //                 <p className="text-sm text-foreground/80">Next.js</p>
    //             </div>
    //             <div className="flex flex-col items-center justify-center gap-4">
    //                 <img src="/images/techicons/nextjs.svg" alt="nextjs" className="w-10 h-10" />
    //                 <p className="text-sm text-foreground/80">Next.js</p>
    //             </div>
    //             <div className="flex flex-col items-center justify-center gap-4">
    //                 <img src="/images/techicons/nextjs.svg" alt="nextjs" className="w-10 h-10" />
    //                 <p className="text-sm text-foreground/80">Next.js</p>
    //             </div>
    //         </div>
    //     </div>
    // )

}