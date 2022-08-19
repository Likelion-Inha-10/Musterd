import React from 'react';
import NavigationBar from '../../musterd-ui/NavigationBar';
import TodoList from './Component/TodoList';

const MyPage = () => {
  return (
    <div>
      <style>{'body { background-color: #F7F6F2; }'}</style>
      <TodoList />
      <NavigationBar pageNumber="1" />
    </div>
  );
};

export default MyPage;
