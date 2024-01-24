import {useState } from 'react'
import Identicon from 'react-identicons'
import {FaTimes} from 'react-icons/fa'
import heroImg from "../assests/hero.jpg";
import {useGlobalState,setGlobalState} from '../store'

const ShowNFT = () => {
const [modal] = useGlobalState('showModal')

 const onChangePrice = () => {
  setGlobalState('showModal', 'scale-0')
  setGlobalState('updateModal', 'scale-100')
 }
    const handleSubmit = (e) => {

        console.log('MInted...')
        closeModal()
    }
    

    const closeModal = () => {
        setGlobalState('showModal','scale-0')
    }
  return (
    <div
      className={`fixed top-0  left-0 w-screen h-screen
    flex items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 ${modal}`}
    >
      <div
        className="bg-[#151c25] shadow-xl shadow-[#e32970]
    rounded-xl w-6/12 md:2/5 h-7/12 p-6"
      >
        <div className="flex flex-col ">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-400">Add NFT</p>

            <button
              type="button"
              onClick={closeModal}
              className="bold-0 bg-transparent
                     focus-outline-none"
            >
              <FaTimes color={"white"} />
            </button>
          </div>
          <div
            className="flex justify-center items-center
             rounded-xl mt-5 "
          >
            <div
              className="shrink-0 rounded-xl overflow-hidden
                h-40 w-40"
            >
              <img
                className="h-full w-full object-cover
                cursor-pointer "
                src={heroImg}
                alt="ímg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start
          rounded-xl mt-5">
            <h4 className="text-white
            font-semibold ">Title</h4>
            <p className='text-gray-400 text-xs
            my-1'> sfdgfhfnvb cnhvjdmcnc, cjfgftryfhn ncmckcjfu
            jjhhdhhd fkjfgyudh nvhfgtruf bsfsdrefgf mvjfhtfdvc 
            jjhhdhhd fkjfgyudh nvhfgtruf bsfsdrefgf mvjfhtfdvc 
            jjhhdhhd fkjfgyudh nvhfgtruf bsfsdrefgf mvjfhtfdvc 
            </p>
            <div className='flex justify-between
             items-center mt-3 text-white'>
              <div className='flex justify-start
              items-start'>
                <Identicon string={'frdghcyh'} size={50}
                  className='h-10 w-10 object-contain
                  rounded-full mr-3'
                />
                <div className='flex flex-col justify-center
                 items-start'>
            <small className='text-white font-bold'>@owner</small>      
            <small className='text-pink-800 fontsemibold'>0x43... y675</small>      
             </div>
              </div>
              <div className='flex flex-col text-white'>
                <small className='text-xs'>current Price</small>
                <p  className='text-sm font-bold'>0.34</p>
              </div>
             </div>
          </div>
          <div className='flex justify-between items-center
                      space-x-2'>
            <button
              className="  flex justify-center
             items-center mt-5 shadow-lg shadow-black
             text-white  bg-[#e32970] w-full
             hover:bg-[#bd255f] rounded-full p-2"
            >
              Purchase Now
            </button>
            <button
            onClick={onChangePrice}
              className="  flex justify-center
             items-center mt-5 shadow-lg shadow-black
             text-white  bg-[#e32970] w-full
             hover:bg-[#bd255f] rounded-full p-2"
            >
              Change Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowNFT