import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AllSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});
export default function update() {
  const values = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedImage) {
      console.log("Image selected:", selectedImage);
    }
  };


  return (
    <>
      <div className="max-w-md mx-auto bg-white p-8 border rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Type your Information</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
          }}
          validationSchema={AllSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              updatevalue(values);
              console.log(values);
              setSubmitting(false);
              navigate("/dispaly");
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  firstName
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  lastName
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone number
                </label>
                <Field
                  type="number"
                  name="phoneNumber"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-bold mb-2"
                >
                  address
                </label>
                <Field
                  name="address"
                  className="w-full px-3 py-2 border rounded-lg resize-none"
                  rows="4"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error"
                />
              </div>
              <div className="mb-4">
                <h2>Upload Image</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <button type="submit">Submit</button>
                </form>
                {selectedImage && (
                  <div>
                    <h3>Preview:</h3>
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
              </div>
              <div className="mt-6">
                <Link to="/Loginpage">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:black-blue-600"
                >
                  Create Profile
                </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
