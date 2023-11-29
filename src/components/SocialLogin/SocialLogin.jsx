import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { withGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogle = () => {
    withGoogle()
    .then(res => {
        console.log(res.user);
        const userInfo = {
            email: res.user?.email,
            name: res.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
    })
  };
  return (
    <div>
      <button
        onClick={handleGoogle}
        className="btn btn-ghost outline w-full text-black hover:bg-green-300"
      >
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
