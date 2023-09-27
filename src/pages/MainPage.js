import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { User } from "../components/User";
import { Modal } from "../components/Modal";

const URL = "https://jsonplaceholder.typicode.com/users";

export function MainPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState();

  async function getUsers() {
    try {
      setError("");
      setLoading(true);
      const response = await fetch(URL);
      if (response.status >= 200 && response.status <= 204) {
        const data = await response.json();
        setUsers(data);
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  function toggleModal() {
    setModal(!modal);
  }

  function getOneUserInfo(id) {
    setUser(users[id - 1]);
    toggleModal();
  }

  return (
    <>
      <h1>Users List</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        users.map((user) => (
          <User key={user.id} user={user} getOneUserInfo={getOneUserInfo} />
        ))
      )}
      {modal && <Modal toggleModal={toggleModal} user={user} />}
    </>
  );
}
