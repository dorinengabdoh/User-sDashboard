import { Link } from "react-router-dom";
import image1 from "../../images/634970c7cbeed5644711b937_62fd57ccd6890f25796f92f9_AdobeStock_295461823.jpeg";

function Landing() {
  return (
    <>
        <div class="min-h-screen flex items-center justify-center">
          <div class="bg-white p-8 rounded shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
            <h1 class="text-gray-600  text-4xl font-bold mb-6 text-center">Welcome to Our Institution</h1>
            <p class="text-gray-600 text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="flex justify-center">
              <button class=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                <Link to="/Loginpage">Login In</Link>
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default Landing;
