import Link from "next/link"
import Image from 'next/image'

export function FooterIcons({src, link}: {src: string, link: string}) {
  return (
    <Link href={link}>
        <Image className="dark:invert" src={src} alt="GitHub Logo" width={28} height={28} />
    </Link>
  )
}