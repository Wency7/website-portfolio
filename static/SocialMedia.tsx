import Image from 'next/image';
import { Linkedin,Github,Facebook } from "lucide-react";

function SocialMedia ({size} : {size: number}) {

    return (
      <div
        className="flex justify-center gap-2 pb-4"
        style={{ pointerEvents: "auto" }}
      >
        <a
          className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"
          href="https://www.linkedin.com/in/wency-salta-0057b0174/"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a
          className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"
          href="https://www.facebook.com/wencysalta07"
          target="_blank"
        >
          <Facebook />
        </a>
        <a
          className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"
          href="https://github.com/Wency7"
          target="_blank"
        >
          <Github />
        </a>
      </div>
    );
}

export default SocialMedia;