import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-mentorPlus.png";
const Sidebar = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div
          
          className="absolute lg:relative w-64 h-screen shadow bg-white hidden lg:block"
        >
          <div  className="h-16 w-full flex items-center px-8">
            <Image src={logo} width={144} height={50} alt="logo"></Image>
          </div>
          <ul  className="py-6">
            <Link href="/" passHref>
              <li
                
                className="py-4 px-2 mx-2 mb-2 rounded-md cursor-pointer bg-blue-300"
              >
                <div className="text-center">
                  <a>Home</a>
                </div>
              </li>
            </Link>
            <Link href="/profile" passHref>
              <li
                
                className="py-4 px-2 mx-2 mb-2 rounded-md cursor-pointer bg-blue-300"
              >
                <div className="text-center">
                  <a>Profile</a>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
