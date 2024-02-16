"use client"
import React, { useReducer } from "react";
import { Link } from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { redirect } from 'next/navigation';


export default function NavBar() {
  const Links = [
    {name: "About", link: "/about"}, 
    {name: "Projects", link: "/projects"}, 
  ]

  const menuItems = {
    "About": '/about',
    "Projects": '/projects'
  }

  return (
	<header className='pageLanding font-mono'>
		<nav className='flex justify-between my-2'>
			{/* maybe replace with logo */}
			<div className="flex items-center gap-4 hover:cursor-pointer" >
				<a className="font-semibold uppercase text-3xl my-0 sm:hidden" href='/'>JK.</a>
				<a className="font-semibold uppercase text-3xl my-0 hidden sm:block" href='/'>Joshua Kong</a>
			</div>

			<div className='flex items-center'>
				<ul className='flex gap-4'>
					{Links.map((link) => (
						<li key={link.name} className="flex items-center justify-center uppercase">
							<Link className="nav-items" href={link.link}>{link.name}</Link>
						</li>
					))}
					<li className="flex items-center justify-center uppercase"><Link className="nav-items" href='/Joshua Kong SWE CV - Jan 2024.pdf' target='_blank'>Resume</Link></li>
					<ThemeSwitcher />
				</ul>
			</div>

		</nav>
	</header>
  )
}