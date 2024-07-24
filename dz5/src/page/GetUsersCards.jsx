import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersCards from '../components/UsersCards'
import { getCards } from '../store/UsersSlice'

function GetUsersCards() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersSlice.users);
  const loading = useSelector((state) => state.UsersSlice.loading);
  const error = useSelector((state) => state.UsersSlice.error);

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки данных пользователей: {error}</div>;
  }

  return (
    <div>
      <h1>Список пользователей</h1>
      <UsersCards users={users} />
    </div>
  );
}

export default GetUsersCards;
