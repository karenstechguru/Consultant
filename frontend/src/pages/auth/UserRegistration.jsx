import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import consultant from "../../assets/contactImg.png";
import { Link } from "react-router-dom";

const UserRegistration = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          email,
          phone,
          password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setUserName("");
        setEmail("");
        setPhone("");
        setPassword("");
        toast.success("Registered Successfully!");
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="h-full bg-gray-100">
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <img
              className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              src={consultant}
              alt="consultant"
            />

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800">
                Create an Account!
              </h3>
              <form onSubmit={handleForm} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full md:w-1/2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-3 py-2 text-sm text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="md:ml-2 w-full md:w-1/2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Phone:
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Password:
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 text-sm text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="*******"
                    required
                  />
                  {error && <p className="text-xs italic text-red-500">{error}</p>}
                </div>

                <div className="mb-6 text-center">
                  <button
                    type="submit"
                    className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    to="/login"
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;