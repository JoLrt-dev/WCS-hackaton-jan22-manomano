import next from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import perceuse from "../public/Img/perceuse.png";
import { BsStarFill, BsStar, BsPaypal } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import ReactPlayer from "react-player";

export default function Product() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-200 flex justify-center items-center">
          <div className="w-full p-1">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <Image
                src={perceuse}
                alt=""
                //   width={700}
                //   height={700}
                className="w-full object-cover object-center"
                Layout="responsive"
              />
            </div>
            <div className="prod-info grid gap-10">
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-900"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-200 flex justify-center items-center">
        <div className="w-full">
          <div className="card flex flex-col justify-center p-6 bg-white rounded-lg shadow-2xl">
            <div className="prod-title">
              <p className="text-l uppercase text-gray font-bold">
                REF 5816 | ME9259885
              </p>
              <p className="text-xl text-gray font-bold">Perceuse visseuse</p>
              <p className="text-l text-gray font-bold">
                sans fil TEENO PSR 21V
              </p>
              <p className="uppercase text-sm text-gray-400">
                2 batteries + 41 accessoires + gants professionels - Rouge
              </p>
              <p className="text-sm text-gray-800 p-2">En stock</p>
              <div className="flex">
                <BsStarFill size="20px" />
                <BsStarFill size="20px" />
                <BsStarFill size="20px" />
                <BsStarFill size="20px" />
                <BsStar size="20px" />
              </div>
            </div>
            <div className="prod-img"></div>
            <div className="prod-info grid gap-10">
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                <p className="font-bold text-3xl text-gray-900">Prix : 56 €</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-200 flex justify-center items-center">
        <div className="w-full">
          <div className="card flex flex-col justify-center p-6 bg-white rounded-lg shadow-2xl">
            <div className="prod-title">
              <div className="custom-number-input h-10 w-32">
                <label
                  for="custom-input-number"
                  className="w-full text-gray-700 text-sm font-semibold"
                ></label>
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    data-action="decrement"
                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    name="custom-input-number"
                    value="0"
                  ></input>
                  <button
                    data-action="increment"
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div className="prod-img"></div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                    Ajouter au panier
                  </button>
                  <p className="pt-2 text-m text-gray-400 flex">
                    <GiPadlock className="m-1" /> Paiement sécurisé
                  </p>
                  <div className="flex">
                    <FaCcVisa size="30px" className="m-2" />
                    <FaCcMastercard size="30px" className="m-2" />
                    <BsPaypal size="30px" className="m-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-200 h-200 flex justify-center items-center">
            <div className="w-full">
              <div className="card flex flex-col justify-center p-6 bg-white rounded-lg shadow-2xl">
                <div className="prod-title">
                  <p className="text-l uppercase text-gray font-bold text-center">
                    Présentation vidéo du produit
                  </p>
                  <p className="text-xl text-gray font-bold"></p>
                  <p className="text-l text-gray font-bold"></p>
                  <p className="uppercase text-sm text-gray-400"></p>
                  <p className="text-sm text-gray-800 p-2"></p>
                  <div className="flex"></div>
                </div>
                <div className="prod-img">
                    <ReactPlayer url='https://www.youtube.com/watch?v=eP0-5Chb8k8' width="100%" />
                </div>
                <div className="prod-info grid gap-10">
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
