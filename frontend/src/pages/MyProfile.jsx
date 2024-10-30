import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Evneet Kaur",
    image: assets.profile_pic,
    email: 'evneetkaur19@gmail.com',
    phone: '+1(416)-834-5247',
    address: {
      line1: "3 Larmere Court",
      line2: "Scarborough, Ontario, Canada",
    },
    gender: 'Female',
    dob: '2002-09-19'
  });

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);

  const updateUserProfileData = () => {
    toast.success("Profile updated successfully!");
    setIsEdit(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-pink-100 border-2 border-pink-400 shadow-lg rounded-lg">
      
      {/*----------------- Profile Picture --------------------- */}

      <label htmlFor="image">
        <div className="relative cursor-pointer mb-6">
          <img
            className="w-32 h-32 mx-auto rounded-full border-2 border-gray-600"
            src={image ? URL.createObjectURL(image) : userData.image}
            alt="Profile"/>
          {isEdit && (
            <input
              type="file"
              id="image"
              hidden
              onChange={(e) => setImage(e.target.files[0])}/>)}
        </div>
      </label>
        
        {/*----------------- Profile Name --------------------- */}

      {isEdit ? (
        <input
          className="block w-full mb-2 text-center text-lg font-semibold text-gray-700 bg-white border-2 border-pink-900 rounded"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="text-center text-2xl font-bold text-pink-600">
          {userData.name}
        </p>
      )}

      <hr className="my-4 border-gray-900" />

       {/*----------------- CONTACT iNFO --------------------- */}

      <div>
        <p className="font-semibold underline mb-2">
          Contact Information
        </p>

        {/* Email */}
        <div className="mb-4">
          <p className=" text-pink-700 font-medium">Email:</p>
          {isEdit ? (
            <input
              className="w-full p-1 text-gray-700 bg-white border-2 border-pink-900 rounded"
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-600">{userData.email}</p>
          )}
        </div>

        {/* phone no */}
        <div className="mb-4">
          <p className=" text-pink-700 font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="w-full p-1 text-gray-700 bg-white border-2 border-pink-900 rounded"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-600">{userData.phone}</p>
          )}
        </div>

        {/* Address */}
        <div className="mb-4">
          <p className="text-pink-700 font-medium">Address:</p>
          {isEdit ? (
            <div>
              <input
                className="w-full mb-2 p-1 text-gray-700 bg-white border-2 border-pink-900 rounded"
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))}/>
              <input
                className="w-full p-1 text-gray-700 bg-white border-2 border-pink-900 rounded"
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))}/>
            </div>) : (<p className='text-blue-600'>
              {userData.address.line1}, {userData.address.line2}</p>)}
        </div>
      </div>

      {/*------------------- BASIC iNFO --------------------- */}
       
      <div>
        <p className="font-semibold underline mb-2">Basic Information</p>
        <div className="mb-4">
          
          {/* Gender */}
          <p className="text-pink-700 font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="w-full p-1 text-gray-700 bg-white border-2 border-pink-900 rounded"
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p className='text-blue-600'>{userData.gender}</p>
          )}
        </div>

        {/* DOB */}
        <div className="mb-4">
          <p className="text-pink-700 font-medium">Birth Date:</p>
          {isEdit ? (
            <input
              className="w-full p-1 text-gray-700 bg-white border-2 border-pink-900 rounded"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className='text-blue-600'>{userData.dob}</p>
          )}
        </div>
      </div>

        {/* ------------------EDIT/SAVE BUTTON ----------------- */}

      <div className="text-center">
        <button
          className={`mt-4 px-6 py-2 text-white font-semibold rounded-full ${
            isEdit
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-pink-700 hover:bg-blue-600'
          }`}
          onClick={isEdit ? updateUserProfileData : () => setIsEdit(true)}
        >
          {isEdit ? 'Save Profile' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
