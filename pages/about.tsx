import {} from "./../lib/UserList";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { UserList } from "../lib/UserList";

const About: NextPage<{ users: IUserList }> = ({ users }) => {
  return (
    <div>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
      </header>
      <UserList initialUsers={users} />
      <p>Woah man!</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async _ => {
  return {
    props: {
      users: [
        { id: 1, name: "Zack", age: 25 },
        { id: 2, name: "Sally", age: 11 },
        { id: 3, name: "Betty", age: 19 },
        { id: 4, name: "Mike", age: 21 },
        { id: 5, name: "George", age: 50 }
      ]
    }
  };
};

export default About;

export type IUser = {
  id: number;
  name: string;
  age: number;
};
export type IUserList = IUser[];
