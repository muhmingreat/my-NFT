import React from 'react'
import heroImg from "../assests/hero.jpg";
import { setGlobalState,useGlobalState } from '../store';

const Artworks = () => {


  return (
    <div
      className="bg-[#151c25] 
    gradient-bg-artworks"
    >
      <div className="w-4/5 py-10 mx-auto">
        <h4
          className="text-white
          text-3xl font-bold uppercase"
        >
          Latest Artworks
        </h4>
        <div
          className="grid grid-cols-1
           md:grid-cols-3
           lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3
           py-2.5
           "
        >
          {Array(4)
            .fill()
            .map((nft, i) => (
              <Cards key={i} nft={i + 1} />
            ))}
        </div>
        <div className="text-center my-5">
          <button
            className="shadow-lg shadow-black
          text-white text-sm bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2"
           >
            Loadmore
          </button>
        </div>
      </div>
    </div>
  );
}
const Cards= ({nft} ) => (
    <div className='w-full shadow-black rounded-md 
    overflow-hidden bg-gray-800 my-2 p-3  '>
        <img className='h-60 w-full object-cover
        shadow-black rounded-lg mb-3' src={heroImg} alt=''/>
        <h4 className='text-white font-semiblod'>NFT #{nft}</h4>
        <p className='text-gray-400 text-sm my-1'> hhgftyr ncbgfhfuj nxhhfgtdtfsr mkvolxmgf  xcsddrtfgf bc dfxsxgfh nbhyftc 
        jbvgfbf fbfgts vjgjguv bbd fbfggysn mncb bgcggcjcmc mnnvnjj
        hhvgfbb nvnvb sfdgf bzvoin  ,mksciv kxfyshjs </p>
        <div className='flex justify-between items-center mt-2 text-white'>
            <div className='flex flex-col'>
            <small className='text-sm'>Current Price</small>
                <p className='text-sm font-semibold '>0.34 ETH</p>
            </div>
            <button 
            onClick={() => setGlobalState('showModal', 'scale-100')}
            className='shadow-lg shadow-black
           text-sm bg-[#e32970] hover:bg-[#bd255f] rounded-full py-1.5 px-1  '>View Details</button>
        </div>
    </div>
)
export default Artworks