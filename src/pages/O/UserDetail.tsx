import React from "react";

import User from "./User";
import Admin from "./Admin";
import { UserDetailProps } from './O'

const userByType = {
  user: User,
  admin: Admin,
};

const UserDetail: React.FC<UserDetailProps> = (props) => {
  const { id, name, type } = props

  const CurrentUser = userByType[type];

  return <CurrentUser {...props} />;
};

export default UserDetail
