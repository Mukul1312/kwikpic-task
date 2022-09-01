import devices from "../assets/devices.png";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { MdOutlineArrowRight, MdOutlineArrowRightAlt } from "react-icons/md";
import Background from "../components/Background";

const details = [
  {
    title: "Maximised returns, minimised risks",
    paragraph: "Crypto wealth management is all about striking a balance. And we know how to. Earn returns on your coins, without overthinking the risks."
  },
  {
    title: "For a lot of coins, on a lot of chains",
    paragraph: "Your Bitcoin and Ethereum. Your USDT and USDC. Almost all the coins you have, and some more, can be invested on Flint, using your favourite networks."
  },
  {
    title: "Where interest is earned every second",
    paragraph: "Don’t wait. Have your interest added to your portfolio literally every second. And watch your crypto wealth grow in real-time."
  },
  {
    title: "Like a crypto savings account, but better",
    paragraph: "There are no lock-ins on Flint. Even while earning high returns on your crypto, you have the ability to withdraw at any time."
  },
  {
    title: "All cash, no cache",
    paragraph: "You earn returns in the same cryptocurrency that you invest. There are no twisted terms or token rewards to keep you away from your wealth."
  }
]

function Home() {
  const imgEle = [useRef(null), useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    imgEle.map(el => {
      gsap.timeline({repeat: -1, yoyo: true}).to(el, {y: -20, duration: 3})
    })

    gsap.to('.left', {
      x: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".left",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // marker: true
      }
    })

    gsap.to('.right', {
      x: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".right",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // marker: true
      }
    })
    
    const textBoxes = gsap.utils.toArray('.textbox');
    textBoxes.forEach((box, i) => {
      const anim = gsap.fromTo(box, {opacity: 0}, {duration: 1, opacity: 1});
      ScrollTrigger.create({
        trigger: box,
        start: "top 70%",
        animation: anim,
        toggleActions: 'play pause resume reset',
      });
    });
  })


  const renderSection2 = ({title, paragraph}) => (
    <div className="h-[20vh] w-full flex flex-col justify-center items-start pl-5 pr-7 lg:h-screen lg:pl-10 lg:pr-20 textbox" key={title}>
      <p className="lg:leading-[4.25rem] text-2xl lg:text-6xl font-black lg:font-semibold mb-5 lg:mb-8">{title}</p>
      <p className="lg:leading-normal text-[15px] lg:text-2xl text-gray-400 lg:text-gray-300">{paragraph}</p>
    </div>
  )


  return (
    <div className="bg-black tracking-wider overflow-x-clip">
      {/* Section 1 */}
      <div className="h-screen relative pt-[88px]">
      <div className="w-full text-center bg-amber-600 h-16 font-[500] lg:flex lg:flex-row flex-col justify-center items-center text-black ">
        Start earning high yields on 15 more coins.
        <div className="justify-center items-center flex flex-row">
          <span className="font-extrabold ml-1">Download now.</span>
          <MdOutlineArrowRightAlt size={30} color={'black'}/> 
        </div>      
      </div>
              <img ref={el => imgEle[0] = el} src={img1} alt="1" className="left absolute h-32 md:h-40 aspect-square top-[30%] left-[7%]"/>
              <img ref={el => imgEle[1] = el} src={img2} alt="2" className="left absolute h-40 md:h-33 aspect-square bottom-[-5%] left-[-1%]"/>
              <img ref={el => imgEle[2] = el} src={img3} alt="3" className="right absolute h-32 md:h-40 aspect-square top-[30%] right-[7%]"/>
              <img ref={el => imgEle[3] = el} src={img4} alt="4" className="right absolute h-40 md:h-33 aspect-square bottom-[-5%] right-[-1%]"/>
        <div className="z-20 p-10 relative h-[90%] text-white flex flex-col justify-center items-center">
          <p className="mt-5 text-center text-4xl md:text-[66px] font-[700] lg:leading-[5rem]">Earn crypto every <br /> second on Flint</p>
          <p className="mt-7 text-base md:text-[24px] font-[400] text-center">No lock-in. No hidden fees. Only secure yields for your crypto</p>
          <div className="flex-col lg:flex lg:flex-row justify-center items-center w-full lg:w-1/2 h-[3rem] mt-12 ">
            <div className="w-full lg:w-[21rem]">
              <input type="text" className="bg-white rounded-full h-[3rem] bg-[#28282880] pl-4 w-full lg:w-[20rem] border-solid border-[#28282880] focus:outline-none" placeholder="Enter your email" />
            </div>

            <button className="bg-white text-black h-[3rem] w-full lg:w-[15rem] rounded-full flex justify-center items-center font-semibold glow transition-shadow">
              <p>Start earning</p>
              <div><MdOutlineArrowRightAlt size={30}/></div>
            </button>
          </div>
        </div>
        {/* bg circles */}
        <Background top={'30%'} />
        {/* <div className="z-96 absolute ">
          <div className="opacity-50 w-80 h-80 aspect-square rounded-full blur-[500px] bg-radial from-[#d16f974d] via-[#00000000] to-[#00000000]"></div>
          <div className="opacity-50  w-80 aspect-square rounded-full blur-[500px] bg-radial from-[#5b80c84d] via-[#00000000] to-[#00000000] "></div>
        </div> */}
      </div>

      {/* Section 2 */}
      <div className="h-auto flex lg:text-center sm:text-left">
        <div className="sticky top-0 h-screen w-[45%] hidden lg:flex justify-center items-center">
          <img src={devices} alt="devices" className="scale-50" />
        </div>
        <div className="h-auto text-white lg:w-[55%] flex flex-col sm:items-center sm:text-center lg:text-left space-y-10 md:space-y-0">
          {details.map(item => renderSection2(item))}
        </div>
      </div>
    </div>
  );
}

export default Home;

// background-image: radial-gradient(rgba(209, 111, 151, 0.3), transparent, transparent)
// background-image: radial-gradient(rgba(91, 128, 200, 0.3), transparent, transparent);