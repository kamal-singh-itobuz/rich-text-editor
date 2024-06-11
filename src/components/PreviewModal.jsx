import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const PreviewModal = ({ data, openPreview, setOpenPreview }) => {
    const onCloseModal = () => setOpenPreview(false);
    console.log(data);
    return (
        <div>
            <Modal classNames={{ modal: "w-full p-4 pt-10 rounded-md" }} open={openPreview} onClose={onCloseModal} center>
                <div className='h-[70vh] overflow-y-scroll'>
                    <div style={{ whiteSpace: "pre" }} className="border p-3 flex flex-col gap-4">
                        {data?.map((item, idx) => {
                            if (item.type === 'h1') return <h1 key={idx} className='text-2xl text-wrap'>{item.content}</h1>;
                            else if (item.type === 'h2') return <h2 key={idx} className='text-xl text-wrap'>{item.content}</h2>;
                            else if (item.type === 'p') return <p key={idx} className='text-sm text-wrap'>{item.content}</p>;
                            else if (item.type === 'code') {
                                const codee = `${item.content}`
                                return <SyntaxHighlighter key={idx} children={codee} language="javascript" style={dracula} />
                            }
                        })}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default PreviewModal;
