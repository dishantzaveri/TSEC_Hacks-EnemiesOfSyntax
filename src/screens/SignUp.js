import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../utils/BillionAbles.png";
import { useSpeechRecognition } from "react-speech-kit";

function SignUp() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      console.log(result)
      console.log(listening)
      setValue(result);
    },
  });

  const login = async () => {
    try {
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="flex flex-col space-y-4 items-center justify-center text-[#0F092D] w-full min-h-screen">
        <Link to="/">
          <img src={logo} alt="" className="w-36"></img>
        </Link>
        <div className="flex flex-col space-y-4 items-center justify-end w-96 pb-6">
          <p className="text-3xl text-center">Sign Up</p>
        </div>
        <div className="flex flex-col space-y-8 items-center justify-end w-96">
          <input
            type="text"
            className="w-full rounded-lg px-5 py-3 border-none focus:ring-2 outline-0"
            placeholder="Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="py-2 px-4 bg-[#28FF64] text-[#0F092D] text-lg rounded-lg shadow-lg font-semibold"
            onMouseDown={listen}
            onMouseUp={stop}
          >
            🎤
          </button>
          <button
          className="w-28 py-2 bg-[#28FF64] text-[#0F092D] font-semibold text-lg rounded-lg shadow-lg shadow-green-400/30 hover:shadow-green-400/50"
          onClick={login}
        >
          Next
        </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
