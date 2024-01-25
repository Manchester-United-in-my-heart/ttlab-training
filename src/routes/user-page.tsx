import { User } from '../components/UserList';
import UserList from '../components/UserList';
type UserPageProps = {
  users: User[];
};
export default function UserPage(props: UserPageProps) {
  return <UserList users={props.users} />;
}
