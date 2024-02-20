import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="background-div">
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmp_oOedYBTFlv3Z6g1_zdoJevyuKzqsGvpu_4dx0A0W_U5LdGoEqH7xUUjgWCBDss3k&usqp=CAU" alt="" className="backgroun" /> */}
        <div className="bg-white p-8 rounded shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h1 className="text-gray-600  text-4xl font-bold mb-6 text-center">Welcome to Our Institution</h1>
          <p className="text-gray-600 text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex justify-center">
            <button className=" hover:bg-blue-200 text-white hover:bg-blue-000 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              <Link to="/Loginpage">Login In</Link>
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Landing;
