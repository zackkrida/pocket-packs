import useSWR from "swr";
import { IUserList } from "../pages/about";
import { FormEventHandler } from "react";

const route = "/api/users";

export const UserList: React.FC<{
  initialUsers: IUserList;
}> = ({ initialUsers: users }) => {
  const { data, isValidating, mutate } = useSWR(route, {
    initialData: { users }
  });

  const handleSubmit: FormEventHandler = event => {
    event.preventDefault();
    mutate(
      {
        users: data.users.map(user => ({
          ...user,
          name: user.name.toUpperCase()
        }))
      },
      false
    );
  };

  return (
    <div>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>
            {user.name} <span>{user.age}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <button type="submit">Capitalize Users</button>
      </form>
    </div>
  );
};
