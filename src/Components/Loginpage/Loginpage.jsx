import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useLocalStorageState from "use-local-storage-state";
import * as Yup from "yup";
import { useState } from "react";
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
});

export default function Login() {
  const [value, setValue] = useLocalStorageState("user", {
    defaultValue: {},
  });
  const navigate = useNavigate();
  const updatevalue = (values) => setValue(values);

  // images
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        setSelectedImage(imageData);
        // Store image data in localStorage
        localStorage.setItem('uploadedImage', imageData);
        console.log('Image uploaded and stored in localStorage.');
      };
      reader.readAsDataURL(file);
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
            profilPict: "",
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
                  htmlFor="profilPict"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Profil Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {(
                  <div>
                    <h2>Profil</h2>
                    <img src={selectedImage} alt="" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                )}
                <ErrorMessage name="profilPict" component="div" className="error" />
              </div>
              <div className="mt-6">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:black-blue-600"
                >
                  Create Profile
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
