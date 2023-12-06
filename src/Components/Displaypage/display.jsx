import { useEffect } from "react";
import { Link } from "react-router-dom";
import image2 from "../../images/software-engineering-featured.jpg";

export default function Display() {
  const values = JSON.parse(localStorage.getItem("user"));

  const handleClick = () => {};

  useEffect(() => {
    console.log("here is value", values);
  }, []);

  return (
    <>
      <main className="bg-zinc-700 animate-pulse  space-x-4">
        <div>
          <h1>User`s Data</h1>
        </div>
        <div className="max-w-3xl rounded overflow-hidden shadow-lg bg-slate-300 ">
          <img src={image2} alt="background image" className="" />
          <div className="px-6 py-4 font-bold">
            <p className="text-gray-700 text-2xl	pt-2  w-full px-3 py-2 border text-700 italic">
              your FirstName is: {values.firstName}
            </p>
            <p className="text-gray-700 text-2xl	pt-2 w-full px-3 py-2 border text-700 italic">
              your LastName is: {values.lastName}
            </p>
            <p className="text-gray-700 text-2xl	pt-2 w-full px-3 py-2 border text-700 italic">
              your Email is: {values.email}
            </p>
            <p className="text-gray-700 text-2xl	pt-2 w-full px-3 py-2 border text-700 italic">
              your phoneNumber is: {values.phoneNumber}
            </p>
            <p className="text-gray-700 text-2xl	pt-2 w-full px-3 py-2 border text-700 italic">
              your Address is: {values.address}
            </p>
          </div>
        </div>

        <button
          onClick={() => handleClick()}
          type="button"
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6 transition duration-150 ease-in-out"
        >
          <Link to="/editpage">Edit</Link>
        </button>
      </main>
    </>
  );
}
