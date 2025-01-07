import React, { useState } from "react";

const SettingsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    role: "Administrator",
    password: "********", // Masked password
    image: "http://localhost:5173/assets/images/male.jpg", // Default profile image
  });

  const [formDetails, setFormDetails] = useState(userDetails);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle save/update
  const handleSave = () => {
    setUserDetails(formDetails);
    setIsEditing(false);
  };

  // Handle cancel
  const handleCancel = () => {
    setFormDetails(userDetails);
    setIsEditing(false);
  };

  // Handle delete profile
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      alert("Profile deleted!");
      // Implement actual delete logic here
    }
  };

  return (
    <section className="bg-[var(--bg-color)] min-h-screen mt-36 text-[var(--paragraph-color)] default-spacing">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="flex flex-col items-center gap-6">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src={userDetails.image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-[var(--boxshadow-color)]"
          />
          {isEditing && (
            <label
              htmlFor="profileImage"
              className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer"
              title="Change Profile Picture"
            >
              <i className="ri-edit-box-fill"></i>
            </label>
          )}
          <input
            id="profileImage"
            type="file"
            className="hidden"
            onChange={(e) => console.log("Profile image updated")} // Implement image update logic here
          />
        </div>

        {/* Profile Details */}
        <div className="w-full max-w-md p-6 bg-[var(--bg-transparent-color)] rounded-lg shadow-md">
          {/* Name */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formDetails.name}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-[var(--tag-bg-color)] text-[var(--tag-text-color)] focus:outline-none"
              />
            ) : (
              <p className="text-lg">{userDetails.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formDetails.email}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-[var(--tag-bg-color)] text-[var(--tag-text-color)] focus:outline-none"
              />
            ) : (
              <p className="text-lg">{userDetails.email}</p>
            )}
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Role</label>
            <p className="text-lg">{userDetails.role}</p>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Password</label>
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={formDetails.password}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-[var(--tag-bg-color)] text-[var(--tag-text-color)] focus:outline-none"
              />
            ) : (
              <p className="text-lg">{userDetails.password}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex items-center gap-2"
                >
                  <i className="ri-edit-box-line"></i>
                  Update Profile
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 flex items-center gap-2"
                >
                  <i className="ri-delete-bin-line"></i>
                  Delete Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
