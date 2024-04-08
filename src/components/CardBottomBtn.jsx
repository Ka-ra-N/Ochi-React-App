import React from "react";

function CardBottomBtn({ buttonCounts = 0, btnText = [], isCardComponent = true}) {
  return (
    <div className={`featured-card-bottom-btns flex gap-[1rem] flex-wrap ${isCardComponent ? "my-2 mt-6" : ""}`}>
      {Array.from({ length: buttonCounts }, (_, index) => (
        <button
          key={index}
          className={`relative uppercase lg:text-sm overflow-hidden font-medium text-zinc-600 border border-[#212121] p-1 px-3 rounded-full text-xs
           hover:text-white z-0 duration-300
          after:bg-zinc-900 after:absolute after:w-[200%] after:h-[110%] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after after:rounded-[50%] after:-z-10 hover:border-none after:transition-top after:duration-300 after:top-[200%] hover:after:top-1/2
          `}
        >
          {btnText[index]}
        </button>
      ))}
    </div>
  );
}

export default CardBottomBtn;
