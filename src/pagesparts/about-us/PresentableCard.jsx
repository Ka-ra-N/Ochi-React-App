import React from 'react';


const PresentableCard = ({imgSrc, para1, authorDetails,btnAry}) => {
  return (
    <div className='presentable-card montereal'>
      <div className='top-card-content'>
        <div className="w-64 overflow-hidden group relative cursor-pointer rounded-xl">
          
          <div className="absolute btn bg-gradient-to-b from-black/50 to-transparent h-1/2 w-full -top-1/2 group-hover:top-0 duration-500 z-10">
            <div className="btn-container m-5">
              {btnAry.map((btn, index) => {
                return (
                  <button key={index} className='border border-[#C3DA6E] text-sm rounded-full uppercase text-[#C3DA6E] px-2 py-1 mb-2'>{btn}</button>
                )
              })}
            </div>
          </div>

          <div className="img-container w-full h-full overflow-hidden rounded-xl">
            <div className="img-container group-hover:scale-110 duration-300 ease-in"><img src={imgSrc} alt="Presentable Card" className='w-full h-full object-cover'/></div>
          </div>

          <div className="text mt-5">
            <p>{para1}</p>
            <p className='text-gray-400 mt-3'>By <span className='underline'>{authorDetails[0]}</span></p>
            <p className='text-gray-400'>{authorDetails[1]}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PresentableCard