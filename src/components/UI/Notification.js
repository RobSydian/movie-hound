import toast from 'react-hot-toast';
import notifications from '../styles/notifications.css';

export default function Notification({message, classes}) {
  return (
        toast(message, { className: classes})
  )

}
