// src/NewPage.js
import React, { useState } from 'react';
const NewPage = () => {
    const [clickedButtons, setClickedButtons] = useState(Array(3).fill(false));
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Function to handle button clicks
    const handleButtonClick = (index) => {
        // Update the state to toggle the clicked state of the button
        const newClickedButtons = clickedButtons.slice();
        newClickedButtons[index] = !newClickedButtons[index];
        setClickedButtons(newClickedButtons);
    };
    // Function to handle submit button click
    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-300 p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to the New Page</h1>
            <div className="grid grid-cols-[2fr,0fr,3fr,4fr] gap-4">

                {/* First Section: 3 Yellow Buttons */}
                <div className="flex p-4 h-fit border-dashed border-[1.5px] rounded border-purple-600 flex-col space-y-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <button
                            key={index}
                            className={`py-2 rounded font-extralight ${clickedButtons[index] ? 'bg-green-500' : 'bg-yellow-500'}`}
                            onClick={() => handleButtonClick(index)}
                        >
                            {clickedButtons[index] ? 'Clicked' : 'Done'}
                        </button>
                    ))}
                </div>

                {/* Second Section: 9 Check Buttons */}
                <div className="flex w-fit h-fit p-4 flex-col border-dashed border-[1.5px]  rounded  border-purple-600 gap-3 ">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <label key={index} className="flex items-center ">
                            <input type="checkbox"  className="form-checkbox h-5 w-4" defaultChecked={index >= 3 && index <= 6}  />
                            
                        </label>
                    ))}
                </div>

                {/* Third Section: 8 Check Buttons with Text */}
                <div className="flex  border-dashed border-[1.5px] h-fit rounded  border-purple-600  flex-col space-y-4 p-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="flex justify-between items-center bg-white p-2 border rounded">
                            <span className='font-extralight'>All Pages</span>

                            <input type="checkbox" className="form-checkbox w-4 h-4" defaultChecked={index >= 3 && index <= 6} />
                        </div>
                    ))}
                </div>

                {/* Fourth Section:  */}
                <div className=" flex items-start pt-12 justify-center bg-white h-[600px]  ">
                    <div className="flex font-extralight text-sm flex-col bg-white shadow-gray-400 rounded shadow-2xl rounded space-y-2 p-3 ">


                        <div className="flex w-56 justify-between items-center">
                            <span>All Pages</span>
                            <input type="checkbox" className="form-checkbox" />
                        </div>
                        <div className='bg-slate-500 h-[0.5px]'></div>
                        {/* Div with text and checkboxes */}
                        <div className="flex flex-col space-y-4">
                            {/* Pages 1-4 */}
                            {[1, 2, 3, 4].map(page => (
                                <div key={page} className="flex justify-between items-center">
                                    <span>Page {page}</span>
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"

                                    />
                                </div>
                            ))} </div>
                        <div className='bg-slate-500 h-[0.5px]'></div>
                        {/* Yellow Button */}
                        <button
                            className={`py-2 w-full rounded ${isSubmitted ? 'bg-green-500' : 'bg-yellow-500'}`}
                            onClick={handleSubmit}
                        >
                            {isSubmitted ? 'Submitted' : 'Submit'}
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default NewPage;
