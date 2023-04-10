import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "src/components/Layout";
import { useDropzone } from "react-dropzone";
import { db, storage } from "../../utils/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
interface RegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  event: string;
  numberOfGuests: number;
  branch: string;
  year: string;
  gender: string;
  requiresAccommodation: boolean;
  paymentAmount: number;
  paymentReceipt?: any;
}

export default function EventRegistrationForm() {
  const router = useRouter();

  const formsCollectionRef = collection(db, "form");

  const [registrationForm, setRegistrationForm] = useState<RegistrationForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    event: "",
    numberOfGuests: 0,
    branch: "",
    year: "",
    gender: "",
    requiresAccommodation: false,
    paymentAmount: 300,
    paymentReceipt: null,
  });
  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setRegistrationForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Update payment amount based on accommodation requirement
    if (name === "requiresAccommodation") {
      const amount = value ? 1500 : 300;
      setRegistrationForm({
        ...registrationForm,
        paymentAmount: amount,
      });
    }
  };

  const onDrop = (acceptedFiles: any) => {
    setRegistrationForm({
      ...registrationForm,
      paymentReceipt: acceptedFiles[0],
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  //   const handleInputChange = (
  //     event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  //   ) => {
  //     const { name, value } = event.target;
  //     setRegistrationForm((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log(registrationForm);
    try {
      const docRef = await addDoc(formsCollectionRef, registrationForm);
      console.log("<<<<<<<<<<<<<<<", docRef);
    } catch (err) {
      console.log(err);
    }
  };
  function handleRemoveImage() {
    setRegistrationForm({
      ...registrationForm,
      paymentReceipt: null,
    });
  }
  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto"
      >
        <h1 className="text-2xl font-bold mb-4">
          Event Registration Form (Note: Free for university students)
        </h1>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={registrationForm.firstName}
            onChange={handleInputChange}
            required
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={registrationForm.lastName}
            onChange={handleInputChange}
            required
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={registrationForm.email}
            onChange={handleInputChange}
            required
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="branch"
            className="block text-gray-700 font-bold mb-2"
          >
            Branch
          </label>
          <select
            name="branch"
            id="branch"
            value={registrationForm.branch}
            onChange={handleInputChange}
            className="border border-gray-400 p-2 w-full rounded-md"
          >
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
            <option value="EE">EE</option>
            <option value="IT">IT</option>
            <option value="CHE">CHE</option>
            <option value="FT">FT</option>
            <option value="LT">LT</option>
            <option value="BT">BT</option>
            <option value="PL">PL</option>
            <option value="PT">PT</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 font-bold mb-2">
            Year
          </label>
          <select
            name="year"
            id="year"
            value={registrationForm.year}
            onChange={handleInputChange}
            className="border border-gray-400 p-2 w-full rounded-md"
          >
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-gray-700 font-bold mb-2"
          >
            Gender
          </label>
          <div className="flex items-center">
            <label htmlFor="male" className="mr-2">
              <input
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={registrationForm.gender === "Male"}
                onChange={handleInputChange}
                className="mr-1"
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={registrationForm.gender === "Female"}
                onChange={handleInputChange}
                className="mr-1"
              />
              Female
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={registrationForm.phone}
            onChange={handleInputChange}
            required
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="event" className="block text-gray-700 font-bold mb-2">
            Please enter the name of the Event
          </label>
          <input
            type="text"
            name="event"
            id="event"
            value={registrationForm.event}
            onChange={handleInputChange}
            required
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        {/* <div className="mb-4">
    <label htmlFor="numberOfGuests" className="block text-gray-700 font-bold mb-2">
      Number of Guests
    </label>
    <input
      type="number"
      name="numberOfGuests"
      id="numberOfGuests"
      value={registrationForm.numberOfGuests}
      onChange={handleInputChange}
      required
      min="1"
      max="10"
      className="border border-gray-400 p-2 w-full rounded-md"
    />
  </div> */}
        s{" "}
        <h2 className="block text-gray-700 font-bold mb-2">
          Rs.1500 if accommodation is required or Rs.300 if not.
        </h2>
        <div className="mt-6">
          <img
            src="https://drive.google.com/uc?id=1HgKcPBmzHLR7p_PtfPDtCh5dFm8AkauH"
            alt="accommodation prices"
            className="h-64 object-contain"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="paymentReceipt"
            className="block text-gray-700 font-bold mb-2"
          >
            Payment Receipt
          </label>
          <div
            {...getRootProps()}
            className="border border-gray-400 p-2 rounded-md"
          >
            <input {...getInputProps()} />
            <p className="text-gray-400">
              Drag 'n' drop receipt file here, or click to select file
            </p>
            <div className="mt-2">
              {registrationForm.paymentReceipt && (
                <div className="flex items-center">
                  <img
                    src={URL.createObjectURL(registrationForm.paymentReceipt)}
                    alt="payment receipt"
                    className="h-16 w-auto object-contain mr-2"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
}
