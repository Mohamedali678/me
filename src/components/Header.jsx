import { useState, useEffect } from "react";

function Header(){

    const [background, setBackground] = useState('transparent');
    const [color, setColor] = useState("")

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setBackground('#21243D'); // or any color you prefer
        setColor("white")
    } else {
        setBackground('transparent');
        setColor("")
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return <div style={{backgroundColor: background}} className="px-20 py-4 font-primaryFont  fixed w-full flex justify-end">
        <ul style={{color: color}} className="flex text-[20px] gap-10 font-bold">
          <a href="#hero">   <li>Home</li></a>
          <a href="#projects"> <li>Work</li></a> 
          <a href="#footer"> <li>Contact</li></a>
        </ul>

    </div>
}



export default Header