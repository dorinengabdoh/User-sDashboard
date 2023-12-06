import { Link } from "react-router-dom";
import image1 from "../../images/634970c7cbeed5644711b937_62fd57ccd6890f25796f92f9_AdobeStock_295461823.jpeg";

function Landing() {
  return (
    <>
      <button
        type="button"
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <Link to="/Loginpage">Login in</Link>
      </button>
      <img src={image1} alt="background image" className="" />
    </>
  );
}

export default Landing;
