import Link from "next/link";
import Image from "next/image";

import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import resume from "../../public/resume.svg";
import light from "../../public/light.svg";

export default function Home() {
  return (
    <>
      <div className="mt-5 mr-5 flex justify-end">
        <Link href="light">
          <Image priority src={light} alt="Toggle Theme" />
        </Link>
      </div>

      <div className="ml-40 mt-10">
        <div className="flex font-semibold">Aashish Sharma</div>
        <div className="font-medium">
          This my site where I have stuff, no idea why I needed this but i have
          a domain so might as well. Why are you even here?
        </div>
      </div>

      <div className="flex justify-center mt-5 font-medium">
        <Link href="projects">Projects</Link>
      </div>

      <div className="flex justify-center mt-5">
        <div>
          <Link href="https://github.com/aashish2057">
            <Image priority src={github} alt="Github" />
          </Link>
        </div>
        <div>
          <Link href="https://linkedin.com/in/aashish2057">
            <Image priority src={linkedin} alt="Linkedin" />
          </Link>
        </div>
        <div>
          <Link href="resume">
            <Image priority src={resume} alt="resume" />
          </Link>
        </div>
      </div>
    </>
  );
}
