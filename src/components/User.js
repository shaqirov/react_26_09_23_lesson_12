export function User({ user, getOneUserInfo }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <button onClick={() => getOneUserInfo(user.id)}>Подробнее</button>
    </div>
  );
}
