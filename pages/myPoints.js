import Link from "next/link";
import Layout from "../components/Layout";
import { BsArrowLeft } from "react-icons/bs";
import MyProfil from "../components/MyProfil";

export default function myPoints() {
  return (
    <div>
      <Layout>
        <MyProfil />
        <Link href="/userCompte">
          <a>
            <BsArrowLeft className="ml-5 mt-2" size={28} />
          </a>
        </Link>

        <h1 className="text-2xl m-7 text-center">My points balance</h1>
        <div className="  m-10 bg-white border-solid border-4 border-primary-200 h-60 p-1">
          <p className="p-5">
            Your points balance is 150 points, you are entitled to 5% discount
            on your next order
          </p>
          <Link href="/rewardProgram">
            <a className=" border-solid border-2 border-primary-300 text-sm flex justify-center m-2 bg-gray-100 p-1">
              {" "}
              See conditions
            </a>
          </Link>
          <p className=" border-solid border-2 border-primary-300 text-sm flex justify-center m-2 bg-gray-100 p-1">
            {" "}
            Use my points
          </p>
        </div>
        <div className="  m-5 bg-white border-solid border-4 border-primary-200 h-25  ">
          <p className="p-5">From 150 points, 5% discount on your next order</p>
        </div>

        <div className="  m-5 bg-white border-solid border-4 border-primary-200 h-25  ">
          <p className="p-5">
            From 300 points, 10% discount on your next order
          </p>
        </div>

        <div className="  m-5 bg-white border-solid border-4 border-primary-200 h-25  ">
          <p className="p-5">
            From 400 points, 15% discount on your next order
          </p>
        </div>
        <div className="  m-5 bg-white border-solid border-4 border-primary-200 h-25  ">
          <p className="p-5">
            From 500 points, 20% discount on your next order
          </p>
        </div>
      </Layout>
    </div>
  );
}
