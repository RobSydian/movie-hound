import toast from 'react-hot-toast';
import notifications from '../styles/notifications.css';

export default function Notification({message, classes}) {
    console.log('notification triggered')
  return (
        toast(message, { className: classes})
  )

}
