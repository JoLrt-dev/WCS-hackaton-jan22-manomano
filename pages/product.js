import next from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import perceuse from "../public/Img/perceuse.png";


export default function Product() {

    return(
        
        <div className="flex flex-wrap items-center justify-center">
        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-xl uppercase text-gray font-bold">
                  Perceuse visseuse 
                </p>
                <p className="text-l uppercase text-gray font-bold">
                  sans fil TEENO PSR 21V
                </p>
                <p className="uppercase text-sm text-gray-400">
                  2 batteries + 41 accessoires + gants professionels - Rouge
                </p>
              </div>
              <div className="prod-img">
                <Image
                  src={perceuse}
                  alt=""
                  width={600}
                  height={600}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl text-blue-800">56 €</p>
                  <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
    )
}