import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../assets/partners/1.png";
import img2 from "../assets/partners/2.png";
import img3 from "../assets/partners/3.png";
import img4 from "../assets/partners/4.png";
import img5 from "../assets/partners/5.png";
import { ImUser } from "react-icons/im";
import Background from "../components/Background";
function About() {
  let path = useRef(null);
  let targetImg = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),]
  let target1 = useRef(null);
  let target2 = useRef(null);
  let target3 = useRef(null);
  let target4 = useRef(null);
  let target5 = useRef(null);
  let svg = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    gsap
      .timeline({
        defaults: { duration: 10 },
        scrollTrigger: {
          trigger: svg,
          scrub: true,
          start: "top " - path.offsetTop,
          end: "bottom top",
          // markers: true
        },
      })
      .to(
        target1,
        { motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] } },
        -27
      )
      .to(
        target2,
        { motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] } },
        -24.5
      )
      .to(
        target3,
        { motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] } },
        -22.75
      )
      .to(
        target4,
        { motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] } },
        -21
      )
      .to(
        target5,
        { motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] } },
        -20
      );
  },[]);

  const renderPartner = (img) => (
    <img
      className="absolute scale-[0.2]"
      ref={(el) => (target1 = el)}
      src={img}
      alt="1"
    />
  )

  return (
    <div className="bg-black tracking-wider overflow-x-clip">
      {/* Section 1 */}
      <div className="h-[50vh] pt-[10rem] lg:pt-60  bg-black lg:h-screen relative">
        <div className="z-20 h-60  rounded-lg relative  text-white flex flex-col justify-center items-center">
          <p className="mt-1 lg:mt-5 text-4xl lg:text-7xl font-bold">
            We are building
          </p>
          <p className="mt-1 lg:mt-5 text-4xl lg:text-7xl font-bold">
            you a home
          </p>
          <p className="mt-5 lg:mt-7 text-base lg:text-3xl font-medium">
            in the world of crypto
          </p>
        </div>
        <Background top={'10%'} />
      </div>

      {/* Section 2 */}
      <div className="h-[50vh] lg:h-[100vh] m-auto text-center bg-black flex flex-col items-center justify-between">
        <div className="h-[90%] w-full lg:w-fit  md:h-screen p-5 lg:p-10">
          <div className="bg-[#1a1a1a] lg:w-[25rem] h-full lg:h-[30rem] rounded-xl flex flex-col justify-evenly items-center p-5">
            <div className="w-[40%] lg:w-[20%] aspect-square border-2 rounded-full "></div>
            <div className="lg:w-[20rem] ">
              <p className="text-center text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo qui
                quia explicabo, facilis, ad sed ipsum mollitia quaerat,
              </p>
            </div>
          </div>
          {/* <Background /> */}
        </div>
        <div className="text-white h-[10%] text-base lg:text-2xl font-thin  md:w-full lg- lg:px-2 flex justify-center">-Co-founders</div>
      </div>
      

      {/* Section 3 */}
      <div className="h-1/2 md:flex mt-10">
        <div className="w-full md:w-[60%] h-full flex flex-col justify-center pl-5 md:pr-16 md:pl-36 space-y-10 bg-black">
          <p className="text-4xl lg:text-7xl font-bold text-white">Our Partners</p>
          <p className="text-base lg:text-xl text-gray-400 ">
            On our mission to build the home for crypto natives, we have the
            best networks as our partners. Flint currently supports Ethereum,
            Solana, Tron, and Binance Smart Chain with additional networks on
            the way.
          </p>
        </div>
        <div className="w-auto overflow-hidden block md:w-[40%] mt-10 h-auto">
          <svg
            ref={(el) => (svg = el)}
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white">
            <path
              className="opacity-50"
              id="mainPath"
              ref={(el) => (path = el)}
              strokeDasharray="5,5"
              d="M 510 137 A 78 190 100 1 1 510 135 z"
            />
          </svg>
          <img
            className="absolute scale-[0.2]"
            ref={(el) => (target1 = el)}
            src={img1}
            alt="1"
          />
          <img
            className="absolute scale-[0.2]"
            ref={(el) => (target2 = el)}
            src={img2}
            alt="2"
          />
          <img
            className="absolute scale-[0.2]"
            ref={(el) => (target3 = el)}
            src={img3}
            alt="3"
          />
          <img
            className="absolute scale-[0.2]"
            ref={(el) => (target4 = el)}
            src={img4}
            alt="4"
          />
          <img
            className="absolute scale-[0.2]"
            ref={(el) => (target5 = el)}
            src={img5}
            alt="5"
          />
        </div>
      </div>
      <div className="h-[30rem]"></div>
    </div>
  );
}

export default About;