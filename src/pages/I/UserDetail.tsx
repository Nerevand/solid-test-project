import React from "react";

import User from "./User";
import Admin from "./Admin";
import { UserDetailProps } from './I'

const userByType = {
  user: User,
  admin: Admin,
};

const UserDetail: React.FC<Omit<UserDetailProps, 'email' | 'id'>> = (props) => {
  const { type, name } = props

  const CurrentUser = userByType[type];

  return <CurrentUser name={name} />;
};

export default UserDetail
