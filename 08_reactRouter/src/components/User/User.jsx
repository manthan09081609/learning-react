import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 h-96 rounded bg-gray-400 m-6 flex justify-center items-center text-white text-3xl">
        User : {userId}
      </div>
    </div>
  );
}

export default User;
