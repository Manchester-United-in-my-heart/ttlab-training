import { User } from '../components/UserList';
import UserList from '../components/UserList';
type UserPageProps = {
  users: User[];
  onCreateUser: (user: User) => void;
  onModifyUser: (user: User) => void;
  onDeleteUser: (user: User) => void;
  isUserModalOpen: boolean;
  setIsUserModalOpen: (isUserModalOpen: boolean) => void;
};
export default function UserPage(props: UserPageProps) {
  const { onCreateUser, onDeleteUser, onModifyUser, isUserModalOpen, setIsUserModalOpen } = props;
  return <UserList users={props.users} onCreateUser={onCreateUser} onModifyUser={onModifyUser} onDeleteUser={onDeleteUser} isUserModalOpen={isUserModalOpen} setIsUserModalOpen={setIsUserModalOpen} />;
}
