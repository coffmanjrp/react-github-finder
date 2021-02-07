import UserItem from './UserItem';

const Users = ({ users }) => {
  return (
    <div className="grid-3">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
