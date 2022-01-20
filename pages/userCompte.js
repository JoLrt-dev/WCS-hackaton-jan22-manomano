import Link from "next/link";
import MyProfil from "../components/MyProfil";

import { RiArrowRightSLine } from "react-icons/ri";
import Layout from "../components/Layout";

export default function userCompte() {
  return (
    <div>
      <Layout>
        <MyProfil />
        <h1 className="m-5 text-2xl">Welcome to your account!</h1>
        <h2 className="m-5 text-xl">Here you are like at home</h2>
        <h3 className="m-5 text-xl font-extrabold">My orders</h3>
        <div className="flex flex-row justify-between bg-white">
          <div className="pl-5 pt-2 h-10 ">All my orders</div>{" "}
          <RiArrowRightSLine size={24} className="m-2" />
        </div>
        <div className="bg-primary ">
          <h3 className="p-5 text-xl font-extrabold bg-primary">
            Ma contribution
          </h3>
          <Link href="/myPoints">
            <a>
              <div className=" flex flex-row justify-between bg-white">
                <div className="pl-5 pt-2  pr-20 border-solid h-10 border-1 border-black">
                  My points balance
                </div>{" "}
                <RiArrowRightSLine size={24} />
              </div>
            </a>
          </Link>
          <Link href="/myMovies">
            <a className="flex flex-row justify-between bg-white">
              <div className="pl-5 pt-2 p-2 border-solid  h-10 border-1 border-black">
                My videos
              </div>
              <RiArrowRightSLine size={24} />
            </a>
          </Link>
          <Link href="/myFavoritesMovies">
            <a className="flex flex-row justify-between bg-white">
              <div className="pl-5 pt-2 p-2 h-30 ">My favorite videos</div>
              <RiArrowRightSLine size={24} />
            </a>
          </Link>

          <h3 className="p-5 text-xl font-extrabold ">
            My wishes and opinions
          </h3>
          <div className="flex flex-row justify-between bg-white">
            <div className="pl-5 pt-2 border-solid  h-10 border-1 border-black">
              My desires
            </div>
            <RiArrowRightSLine size={24} />
          </div>
          <div className="flex flex-row justify-between bg-white">
            <div className="pl-5 pt-2 border-solid h-10 border-1 border-black">
              Product reviews
            </div>
            <RiArrowRightSLine size={24} />
          </div>
          <h3 className="p-5 text-xl font-extrabold ">
            My personal information
          </h3>
          <div className="flex flex-row justify-between bg-white">
            <div className="pl-5 pt-2 border-solid h-10 border-1 border-black">
              Change my email and password
            </div>
            <RiArrowRightSLine size={24} />
          </div>
          <div className="flex flex-row justify-between bg-white">
            <div className="pl-5  pt-2 border-solid  h-10 border-1 border-black">
              My subscriptions to ManoMano offers
            </div>
            <RiArrowRightSLine size={24} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
