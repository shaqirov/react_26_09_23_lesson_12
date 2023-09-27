export function Modal({ user, toggleModal }) {
  return (
    <div className="modal_wrapper">
      <div className="modal_inner">
        <button onClick={toggleModal}>X</button>
        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Username:</b> {user.username}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Website:</b> {user.website}
        </p>
        <p>
          <b>Phone:</b> {user.phone}
        </p>
      </div>
    </div>
  );
}
