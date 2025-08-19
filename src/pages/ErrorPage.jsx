import notfoundimg from "../assets/images/notfoundimg.png";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-zinc-900">
        <div className="flex flex-col items-center justify-center w-[650px] m-3 p-3 gap-3">
          <img src={notfoundimg} alt="Error" />
          <p className="text-4xl font-bold text-center max-sm:text-3xl text-white">
            Oops! Page Not Found.
          </p>
          <p className="text-2xl font-normal text-center max-sm:text-xl text-white">
            You must have picked the wrong door because I haven't been able to
            lay my eyes on the page you are searching for.{" "}
          </p>
          <Link
            to="/"
            className="block px-8 py-3 bg-blue-600 text-white font-bold rounded-md 
             transition transform hover:scale-110 hover:bg-blue-700 duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
