import React, {useState} from 'react'
import colors from '../style'
import { iconCheck } from '../assets'
import { nanoid } from 'nanoid'


const Form = ({mode, items, setItems}) => {
  const currentMode = colors[mode]
  const [inputValue, setInputValue] = useState('')
  const [complete, setComplete] =useState(false)

  const incomplete = <div 
            className = {`rounded-full mr-4 h-[24px] p-[2px] w-[24px] 
            flex items-center check justify-center relative cursor-pointer ${currentMode.check}`
            }>
                    <div className={`absolute w-[22px] h-[22px] z-[3] rounded-full ${currentMode.background}`} />
    </div>
    
   const completed = <div className = {`rounded-full mr-4 h-[24px] w-[24px] 
            flex items-center complete justify-center relative cursor-pointer ${currentMode.check}`
            }>
    <img src={iconCheck}/></div>

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue){
            alert('Please enter a Task.')
            return;
        }
        const newItem = {
            id: nanoid(),
            text: inputValue,
            checked: complete
        }
        setItems([...items, newItem])
        setInputValue('')
        setComplete(false)

    }

    function toggleComplete(){
        setComplete((prev) => !prev)
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

  return (
    <section className={`flex flex-row justify-between mb-[20px] p-5 w-full items-center 
      ${currentMode.background} ss:w-[480px] rounded-[5px]`}>
        <form 
            onSubmit = {handleSubmit}
            className='flex flex-1 text-[14px] ss:text-[18px] items-center'>
                <div onClick={toggleComplete}>
                    {complete ? completed : incomplete}
                </div>
                <input 
                    placeholder='Create a new todo...' 
                    className={`flex flex-1 text-[14px] ss:text-[18px] items-center
                    ${currentMode.text} ${currentMode.background} font-josefin`}
                    value={inputValue}
                    onChange={handleInputChange}
                />

                <button type='submit'>
                    <i className={`fa-solid fa-check text-[20px] cursor-pointer ${currentMode.mark}`}></i>
                </button>
        </form>
    </section>
  )
}

export default Form
