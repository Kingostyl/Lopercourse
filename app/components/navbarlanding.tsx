import Button from "./button";
import Logo from "@/public/icon.png";
import Image from "next/image";
import Link from "next/link";

let Navleanding = () => {
  return (
    <>
      <header className="bg-white sticky top-0 z-50">
        <nav className="max-w-7xl p-3 flex mx-auto justify-between items-center w-full ">
          <div className="flex items-center  gap-3 text-xl font-semibold ">
            <picture>
              <Image src={Logo} alt="" className="w-12" />
            </picture>
            <a className=" text-xl font-semibold md:inline hidden " href="#">
              LoperCourse
            </a>
          </div>
          <div>
            <Link href={'/from/login'}>
          <Button title="Log In" custom="login" />
          </Link>
          <Link href={'/from/signup'}>
          <Button title="Sign Up" custom="signup" />
          </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navleanding;
