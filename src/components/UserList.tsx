import { useQuery } from '@tanstack/react-query';
import { userQueries } from '../api/userQueries';

export default function UserList() {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    userQueries.all()
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Users {isFetching && '...'}</h2>
      <ul>
        {data?.map(user => (
          <li key={user.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <p><strong>{user.name}</strong></p>
            <p>{user.email} - {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
