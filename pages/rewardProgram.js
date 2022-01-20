import React from "react";
import Layout from "../components/Layout";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";

const rewardProgram = () => {
  return (
    <Layout>
      <div
        className="m-6 border border-solid border-gray-900 rounded-lg p-4"
        id="conditions-bloc"
      >
        <h5 className="underline underline-offset-2 text-lg font-bold pb-6">
          ManoPoints in few points:
        </h5>
        <div id="conditions-list">
          <ul className="list-disc pl-8">
            <li className="pb-4">
              Post tutorials from your personnal account. Once moderated by our
              team of super-heroes, your video could be seen by the entire
              ManoMano community and you will received 30 ManoPoints. You
              d&apos;ont have any account ? Not a problem, just click here.
            </li>
            <li className="pb-4">
              Once your video will reach the 500 views, you will receive 15 more
              ManoPoints, then 15 more every 100 views. As an example, if your
              video is seen 700 times, you will get 60 ManoPoints.
            </li>
            <li className="pb-4">
              Every 150 ManoPoints, enjoy a 5% discount on your next purchase.
            </li>
            <li className="pb-4">
              {" "}
              You can consult and manage your ManoPoints at any time from your
              personnal account.
            </li>
          </ul>
          <p className="text-lg flex justify-center"> Joins us now ! </p>
        </div>
      </div>

      <div id="post-video">
        <p className=" font-bold text-lg m-8 text-center">
          {" "}
          Add your first video and and start earning Manopoints{" "}
        </p>
        <div className="flex justify-center">
          <Link href="/addMovie">
            <a>
              <GrAdd
                size={"5em"}
                className="border border-solid border-gray-900 rounded-lg p-4"
              />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default rewardProgram;
