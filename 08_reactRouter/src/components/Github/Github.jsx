// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [user, setUser] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/manthan09081609")
  //       .then((res) => res.json())
  //       .then((user) => {
  //         setUser(user);
  //       });
  //   }, []);

  const user = useLoaderData();
  return (
    <div className="flex justify-center items-center p-10">
      <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
        <div className="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {user.login}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <line x1={7} y1={17} x2={17} y2={7} />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Followers : {user.followers}
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <img
                className="inline-block h-8 w-8 rounded-full"
                src={user.avatar_url}
                alt={user.login}
              />
              <span className="flex flex-col">
                <span className="text-[10px] font-medium text-gray-900">
                  {user.login}
                </span>
                <span className="text-[8px] font-medium text-gray-500">
                  @{user.login}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
