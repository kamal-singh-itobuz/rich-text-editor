import { useRef, useState } from "react";
import PreviewModal from "./PreviewModal";
import { FaCode } from "react-icons/fa";


const MainComponent = () => {
    const inputRef = useRef();
    const [data, setData] = useState([]);
    const [currentOption, setCurrentOption] = useState('p');
    const [openPreview, setOpenPreview] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (inputRef.current.value.trim()) {
            setData(prev => [...prev, { type: currentOption, content: inputRef.current.value.trim() }]);
        }
    }
    function handleChangeOption(option) {
        setCurrentOption(option);
        inputRef.current.value = '';
    }
    return (
        <div className="p-4">
            <div className="flex gap-3 mb-3">
                <button className={`border px-3 py-1 rounded-md ${currentOption === 'p' && "border-black"}`} onClick={() => handleChangeOption('p')}>text</button>
                <button className={`border px-3 py-1 rounded-md ${currentOption === 'h1' && "border-black"}`} onClick={() => handleChangeOption('h1')}>h1</button>
                <button className={`border px-3 py-1 rounded-md ${currentOption === 'h2' && "border-black"}`} onClick={() => handleChangeOption('h2')}>h2</button>
                <button className={`border px-3 py-1 rounded-md ${currentOption === 'code' && "border-black"}`} onClick={() => handleChangeOption('code')}><FaCode /></button>
            </div>
            <form onSubmit={handleSubmit} className="mb-8">
                <textarea className="border focus:outline-none w-full p-3 rounded-lg" ref={inputRef} name="text" rows="15"></textarea>
                <button className="bg-black rounded-md text-white px-5 py-1">Add</button>
            </form>
            <div className="flex justify-center gap-5">
                <button onClick={() => setOpenPreview(true)} className=" bg-purple-700 px-5 py-1 rounded-md text-white">Preview</button>
                <button className=" bg-orange-700 px-5 py-1 rounded-md text-white">Publish</button>
            </div>
            <PreviewModal data={data} openPreview={openPreview} setOpenPreview={setOpenPreview} />
        </div>
    )
}

export default MainComponent;