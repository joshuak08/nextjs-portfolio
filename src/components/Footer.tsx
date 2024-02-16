import Image from 'next/image'
import { FooterIcons } from './FooterIcons'

export default function Footer(){
    return (
        // add logos and made by statements
        <footer className="mt-12 pageLanding space-y-1">
            <p>
                Let&#39;s get in touch! Send me an email at&nbsp;
                <span>
                    <a className="underline decoration-gray-600 hover:decoration-gray-200 transition-all ease-in-out" target="_blank" href="mailto:joshuaxwkong@gmail.com">joshuaxwkong@gmail.com</a> 
                </span>
                .
            </p>
            <p>
                Made by Joshua Kong
            </p>
            <div className="flex gap-4">
                <FooterIcons src={"/github.svg"} link={"https://github.com/joshuak08"} />
                <FooterIcons src={"/linkedin.svg"} link={"https://www.linkedin.com/in/joshua-kong-xw"} />
            </div>
        </footer>
    )
}