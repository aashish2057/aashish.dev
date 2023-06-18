import Image from "next/image";
import nextLogo from "../../public/next.svg";
import solidLogo from "../../public/solid.svg";
import svelteLogo from "../../public/svelte.svg";
export default function Home() {
  return (
    <>
      <h1 className="m-4 text-center font-extrabold text-3xl">
        Vote for what framework I should use for my peronsal site
      </h1>

      <div className="flex items-center justify-center space-x-20">
        <div>
          <Image src={nextLogo} alt="next" width="200" height="200" />
          <p className="text-center font-bold text-2xl">Next</p>
        </div>
        <div>
          <Image src={solidLogo} alt="next" width="214" height="214" />
          <p className="text-center font-bold text-2xl">Solid</p>
        </div>
        <div>
          <Image src={svelteLogo} alt="next" width="200" height="200" />
          <p className="text-center font-bold text-2xl">Svelte</p>
        </div>
      </div>
    </>
  );
}
