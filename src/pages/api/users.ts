import { NextApiRequest, NextApiResponse } from "next";
import { IUserList } from "../about";

export default (_: NextApiRequest, res: NextApiResponse<UsersApiData>) => {
  res.status(200).json({
    users: [
      { id: 1, name: "Zack", age: 25 },
      { id: 2, name: "Sally", age: 11 },
      { id: 3, name: "Betty", age: 19 },
      { id: 4, name: "Mike", age: 21 },
      { id: 5, name: "George", age: 50 }
    ]
  });
};

type UsersApiData = {
  users: IUserList;
};
