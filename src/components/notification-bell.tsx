import { CiBellOn } from 'react-icons/ci';
type Props = {
  numberOfNotifications: number;
};

const NotificationBell = (props: Props) => {

  const numberOfNotifications = props.numberOfNotifications;
  return (
    <div className="relative">
      <CiBellOn className="w-8 h-8 text-gray-500" />
      <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs text-center text-white">{numberOfNotifications.toString()}</div>
    </div>
  );
};

export default NotificationBell;