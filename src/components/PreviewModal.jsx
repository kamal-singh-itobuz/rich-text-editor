import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Notify from './ToastMessage';
import { Toaster } from 'react-hot-toast';

const PreviewModal = ({ data, openPreview, setOpenPreview, language }) => {
    const onCloseModal = () => setOpenPreview(false);
    const handleCopy = (data) => {
        navigator.clipboard.writeText(data);
        Notify('success', 'Code copied to clipboard');
    }
    return (
        <div>
            <Modal classNames={{ modal: "w-full p-4 pt-10 rounded-md" }} open={openPreview} onClose={onCloseModal} center>
                <div className='h-[70vh] overflow-y-scroll'>
                    <div style={{ whiteSpace: "pre-wrap" }} className="border p-3 flex flex-col gap-4">
                        {data?.map((item, idx) => {
                            if (item.type === 'h1') return <h1 key={idx} className='text-2xl text'>{item.content}</h1>;
                            else if (item.type === 'h2') return <h2 key={idx} className='text-xl text'>{item.content}</h2>;
                            else if (item.type === 'p') return <p key={idx} className='text-sm text'>{item.content}</p>;
                            else if (item.type === 'code') {
                                return <div key={idx} className='relative'>
                                    <button onClick={() => handleCopy(item.content)} className='absolute right-0 top-0 bg-gray-600 text-white px-3 py-1 rounded-md'>copy</button>
                                    <Toaster />
                                    <SyntaxHighlighter children={item.content} language={language} style={dracula} />
                                </div>
                            }
                        })}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default PreviewModal;
