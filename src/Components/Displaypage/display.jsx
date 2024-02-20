import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Display() {
  const values = JSON.parse(localStorage.getItem("user"));
  const newImage = (localStorage.getItem("uploadedImage"));
  // console.log("image links", newImage)


  useEffect(() => {
    console.log("here is value", values);
  }, []);

  return (
    <>
      <main className="bg-zinc-700 animate-pulse  space-x-4 w-100">
        <div className="hello">
        <div>
          <h1>Hey, {values.firstName} Welcome </h1>
        </div>
        <div className="images">
          {(
            <div>
              <img src={newImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </div>
          )}
        </div>
        </div>
        <div className="max-w-3xl rounded overflow-hidden shadow-lg bg-slate-300 ">
          <div className="px-6 py-4 font-bold">
            <p className="text-gray-700 text-2xl	pt-2  w-full px-3 py-2 border text-700 italic">
              {values.firstName} {values.lastName}
            </p>
            <p className="text-gray-700 text-2xl	pt-2 w-full px-3 py-2 border text-700 italic">
              Email: {values.email}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6 transition duration-150 ease-in-out"
        >
          <Link to="/editpage">Edit</Link>
        </button>
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6 transition duration-150 ease-in-out"
        >
        <Link to="/">delete</Link>
        </button>
      </main>
    </>
  );
}
