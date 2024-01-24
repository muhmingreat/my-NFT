import {useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import heroImg from "../assests/hero.jpg";
import {useGlobalState,setGlobalState} from '../store'

const UpdateNFT = () => {
const [modal ] = useGlobalState('updateModal')
  
    const [price, setPrice] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if( !price) return
        console.log('updated...')
        closeModal()
    }
    const resetForm =() => {
        setPrice('')
        
    }

    const closeModal = () => {

        setGlobalState('updateModal','scale-0')

        resetForm()
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
        <form onSubmit={handleSubmit} className="flex flex-col ">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-400">Candy NFT</p>

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
                h-20 w-20"
            >
              <img
                className="h-full w-full object-cover
                cursor-pointer "
                src={heroImg}
                alt="ímg"
              />
            </div>
          </div>
            <div
            className="flex justify-between items-center 
                 bg-gray-800 rounded-xl mt-5"
          >
            <input
              type="number"
              className="block w-full text-sm text-slate-500
                focus:outline-none cursor-pointer border-0
                rounded-full
                focus:ring-0 bg-transparent"
              placeholder="Price (Eth)"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}

              min={0.01}
              step={0.0}
              required
            />
          </div>
          
          
        
          <button
            className=" text-md py-2 px-1 flex justify-center items-center mt-3 shadow-lg shadow-black
             text-white text-sm bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2"
          >
            Mint Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateNFT