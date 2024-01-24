import {useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import heroImg from "../assests/hero.jpg";
import {useGlobalState,setGlobalState} from '../store'
const CreateNFT = () => {
const [modal ] = useGlobalState('modal')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [imgBase64, setImgBase64] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title ||!description || !price) return
        console.log('MInted...')
        closeModal()
    }
    const resetForm =() => {
        setTitle('')
        setPrice('')
        setFileUrl('')
        setDescription('')
        setImgBase64(null)
    }

    const closeModal = () => {
        setGlobalState('modal','scale-0')

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
                h-20 w-20"
            >
              <img
                className="h-full w-full object-cover
                cursor-pointer "
                src={ imgBase64 || heroImg}
                alt="ímg"
              />
            </div>
          </div>
          <div
            className="flex justify-between items-center 
                bg-gray-800 rounded-xl mt-5"
          >
            <label className="block">
              <span className="sr-only"> Choose Profile Photo</span>
              <input
                type="file"
                accept="imge/png, image/gif, image/webp,
                    image/jpg, image/jpeg "
                required
                className="block w-full text-sm text-slate-gray-500
                    file:mr-4 file:py-2 file:rounded-full
                    file:border-0 file:text-sm file:font-semibold
                    hover:file:bg-[#1d2631] focus:outline-none
                    cursor-pointer focus:ring-0"
              />
            </label>
          </div>
          <div
            className="flex justify-between items-center 
                     bg-gray-800 rounded-xl mt-5"
          >
            <input
              type="text"
              className="block w-full text-sm text-slate-500
                focus:outline-none cursor-pointer border-0
                rounded-full
                focus:ring-0 bg-transparent"
              placeholder="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
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
          <div
            className="flex justify-between items-center 
                 bg-gray-800 rounded-xl mt-5"
          >
            <textarea
              type="text"
              className="block w-full text-sm text-slate-500
            focus:outline-none cursor-pointer border-0
            rounded-full h-20 resize-none
            focus:ring-0 bg-transparent"
              placeholder="Discription"
              name="discription"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
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

export default CreateNFT