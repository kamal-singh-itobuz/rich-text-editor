import toast, { Toaster } from 'react-hot-toast';

function Notify(type, message) {
    if (type === 'success') return toast.success(message);
}
export default Notify;