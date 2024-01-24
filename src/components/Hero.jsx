import Identicon from  'react-identicons'
import heroImg from '../assests/hero.jpg'
import {setGlobalState} from '../store'
const Hero = () => {
  return (
    <div
      className=" flex flex-col md:flex-row w-4/5
    justify-between items-center mx-auto py-10"
    >
      <div className="md:w-3/6 w-full">
        <div className="text-white text-5xl font-bold">
          <h1>
            {" "}
            Buy and sell <br />
            Digital Arts,<span className="text-gradient">NFT</span> Collection
          </h1>
          <p className="text-gray-500 font-semibold text-sm mt-3">
            Mints and collect the hottest NFTs around
          </p>
        </div>
        <div className="flex mt-3">
          <button
          onClick={()=> setGlobalState('modal', 'scale-100')}
            className="shadow-xl shadow-black bg-[#e32979] hover:bg-
        [#bd255f] text-white md:text-xs p-2 rounded-full"
          >
            {" "}
            Create NFT
          </button>
        </div>
        <div className="w-3/4 flex  justify-between items-center mt-3">
          <div className="text-white">
            <p className="font-bold">123k</p>
            <small className="text-gray-300">User</small>
          </div>

          <div className="text-white">
            <p className="font-bold">152k</p>
            <small className="text-gray-300">Artwork</small>
          </div>

          <div className="text-white">
            <p className="font-bold">200k</p>
            <small className="text-gray-300">Artists</small>
          </div>
        </div>
      </div>
      <div
        className="shadow-xl sahdow-black md:w-2/5
     w-full mt-10 md:mt-0 rounded-md overflow-hidden 
     bg-gray-800"
      >
        <img
          src={heroImg}
          alt="hero"
          className="h-60 w-full
            object-cover "
        />

        <div
          className="flex justify-start items-start
            p-3"
        >
          <Identicon
            className="h-10 w-10 object-contain
                rounded-full mr-3"
            string={"0x23...7890"}
            size={50}
          />
          <div>
            <p
              className="text-white
            font-semibold "
            >
              0x21...789ac
            </p>
            <small
              className="text-pink-800
            font-bold"
            >
              @you
            </small>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero