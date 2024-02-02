import Image from "next/image";
import background from '../../public/grain.png';

export default function Background() {
  return <Image 
    alt="background-image"
    src={background}
    // placeholder="blur"
    fill
    // sizes="100vw"
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
  />
}