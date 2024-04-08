import React, { useEffect, useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ContactForm = () => {

  const [checkBtn, setCheckBtn] = React.useState(false);
  const submitBtn = useRef(null) 

  const handleBtnCheck = () => {
    setCheckBtn(!checkBtn)
  }

  const handleEnabled = () => {
    checkBtn ? submitBtn.current.removeAttribute('disabled') : submitBtn.current.setAttribute('disabled', true)
  }

  const handleSubmit = (e) => {
    alert("Our Team will reach out to you shortly!")
  }

  useEffect(()=>handleEnabled(),[checkBtn])

  return (
    <section className="montereal px-[3.5vw] text-[#212121] pb-28">
      <p>Fill the form below:</p>

      <div className="contact-form mt-12 xl:text-5xl md:text-2xl text-3xl">
        <form onSubmit={handleSubmit} className="grid gap-3">
          <span className="md:flex gap-3">
            <HalfInput
              text={"Hi! My name is"}
              placeholder={"enter your name"}
              inputType={"text"}
            />
            <HalfInput
              text={"and I work with"}
              placeholder={"company name type here"}
              inputType={"text"}
            />
          </span>

          <HalfInput
            text={"I’m looking for a partner to help me with"}
            placeholder={"your goal type here"}
            inputType={"text"}
          />

          <HalfInput
            text={"With an idea of having that completed"}
            inputType={"date"}
          />

          <span className="md:flex items-center">
            I am hoping to stay around a budget range of
            <select
              className="text-base text-center
                    border-b-[#797d85] border-b-2 hover:border-b-[black] focus:border-b-[black] hover:placeholder:text-black outline-none placeholder:capitalize pb-3 text-[#212121] inline-block flex-1"
            >
              <option defaultValue={true} className="text-gray-100">
                Select*
              </option>
              <option value="low">$5,000 - 15,000</option>
              <option value="average">$15,000 - 25,000</option>
              <option value="high">$25,000 - 50,000+</option>
            </select>
          </span>

          <span className="md:flex gap-3">
            <HalfInput
              text={"You can reach me at"}
              widthFull={true}
              placeholder={"name@example.com"}
              inputType={"email"}
            />
            <span className="md:whitespace-nowrap">
              to start the conversation.
            </span>
          </span>

          <HalfInput
            text={"Optionally, i’m sharing more:"}
            placeholder={"product details type here..."}
          />

          {/* For the checkbox & submit button */}
          <div className="text-base mt-10 md:flex items-center gap-5 justify-end">
            <label
              htmlFor="checkbox"
              className="checkbox-label flex items-center gap-3  cursor-pointer"
            >
              <input
                onChange={handleBtnCheck}
                className="size-6 appearance-none border cursor-pointer border-gray-400 rounded-full relative
                after:absolute after:size-full after:top-0 after:scale-0 after:duration-300 checked:after:scale-100 checkbox-after-img checked:border-none
                "
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              I agree with{" "}
              <span className="relative underline-transition">
                Privacy Policy
              </span>
            </label>

            <button
              ref={submitBtn}
              className={`md:mt-0 mt-10 text-sm flex items-center gap-5 uppercase bg-[#212121] text-white pl-8 pr-4 py-4 rounded-full relative overflow-hidden z-0 group
              before:absolute before:duration-300 before:top-0 before:size-full disabled:before:bg-gray-300/50 before:left-0 enabled:before:opacity-0
              after:absolute after:top-full after:size-full after:bg-black after:left-0 enabled:after:opacity-100 after:-z-10 enabled:after:hover:top-0 after:duration-500
              
              `}
              disabled
              type="submit"
            >
                Submit Inquiry
                <span className={`relative z-0 before:-z-10
                before:absolute before:size-3 before:rounded-full before:bg-white before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:duration-300
                ${checkBtn && "group-hover:text-[#212121] group-hover:before:size-10 "}
                `}>
                  <MdOutlineArrowOutward/>
                </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const HalfInput = ({text,placeholder, inputType, isHidden=false, widthFull = false}) =>{
    return (
        <p className={`flex md:flex-row flex-col md:items-center gap-4 ${widthFull ? "basis-3/4" : "basis-1/2"}`}>
              <span>{text}</span>
              <InputComp placeholder={placeholder} inputType={inputType} hidden = {isHidden}/>
        </p>
    )
}


export const InputComp = ({ placeholder, inputType, hidden}) => {

  const dateRef = useRef(null)

  
  function handleDate() {
    if (inputType === 'date' && dateRef.current) {
      const todayDate = new Date().toISOString().split('T')[0];
      dateRef.current.min = todayDate;
    }
  }

  useEffect(() => {
    handleDate()
  },[])

  return (
    <input
      min={null}
      ref={inputType === 'date' ? dateRef : null}
      required
      type={inputType}
      className={`text-base focus:placeholder:opacity-0 placeholder:opacity-1 placeholder:duration-300 text-center
                    border-b-[#797d85] valid:border-b-[#797d85] invalid:border-b-red-300 border-b-2 
                    invalid:hover:border-b-red-500 valid:hover:border-b-black focus:border-b-[black] hover:placeholder:text-black outline-none placeholder:capitalize pb-3 text-[#212121] inline-block flex-1 ${hidden && "hidden"} ${inputType == 'date' && "cursor-pointer"}`}
      placeholder={`${placeholder}*`}
    />
  );
};

export default ContactForm;
