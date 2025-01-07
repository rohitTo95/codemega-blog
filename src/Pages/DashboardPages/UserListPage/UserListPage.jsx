import "./user_list_page.css";
import React, { useState } from "react";

const UsersPage = () => {
  // Dummy user data
  const dummyUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", image: "http://localhost:5173/assets/images/male.jpg" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", image: "http://localhost:5173/assets/images/male.jpg" },
    { id: 3, name: "Emily Johnson", email: "emily@example.com", role: "Editor", image: "http://localhost:5173/assets/images/male.jpg" },
    { id: 4, name: "Michael Brown", email: "michael@example.com", role: "User", image: "http://localhost:5173/assets/images/male.jpg" },
    { id: 5, name: "Sarah Davis", email: "sarah@example.com", role: "Admin", image: "http://localhost:5173/assets/images/male.jpg" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  // Filtered and searched users
  const filteredUsers = dummyUsers.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "All" || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  // Total counts
  const totalUsers = dummyUsers.length;
  const totalAdmins = dummyUsers.filter((user) => user.role === "Admin").length;

  return (
    <section id="user-list-section" className="bg-[var(--bg-color)] min-h-screen mt-36 text-[var(--paragraph-color)] default-spacing">
      <h1 className="text-3xl font-bold mb-6 text-[var(--heading-color)]">Registered Users</h1>

      {/* Statistics */}
      <div className="mb-6 flex gap-6">
        <div className="number-card p-4 rounded-lg shadow-md bg-[var(--bg-transparent-color)]">
          <h2 className="text-lg font-semibold text-[var(--heading-color)]">Total Users</h2>
          <p className="text-2xl font-bold text-[var(--primary-color)]">{totalUsers}</p>
        </div>
        <div className="number-card p-4 rounded-lg  bg-[var(--bg-transparent-color)]">
          <h2 className="text-lg font-semibold text-[var(--heading-color)]">Total Admins</h2>
          <p className="text-2xl font-bold text-[var(--primary-color)]">{totalAdmins}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-8 py-4 rounded-lg bg-[var(--bg-transparent-color)] text-[var(--primary-color)] focus:outline-none placeholder-[var(--placeholder-color)]"
        />
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="px-8 py-4 rounded-lg bg-[var(--bg-transparent-color)] text-[var(--primary-color)] focus:outline-none"
        >
          <option value="All">All Roles</option>
          <option value="Admin">Admins</option>
          <option value="User">Users</option>
          <option value="Editor">Editors</option>
        </select>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div id="user-card"  key={user.id} className="p-4 rounded-lg bg-[var(--bg-transparent-color)] flex items-center gap-4">
            <img src={user.image} alt={user.name} className="w-20 h-20 rounded-full object-cover shadow-md" />
            <div>
              <h3 className="text-xl font-semibold text-[var(--heading-color)]">{user.name}</h3>
              <p className="text-lg mt-2 mb-3 text-[var(--paragraph-color)]">{user.email}</p>
              <span className="text-sm bg-[var(--button-bg-color)] text-[var(--button-text-color)] py-1 px-3 rounded-full">
                {user.role}
              </span>
            </div>
          </div>
        ))}
        {filteredUsers.length === 0 && (
          <p className="col-span-full text-center text-[var(--placeholder-color)]">No users found.</p>
        )}
      </div>
    </section>
  );
};

export default UsersPage;
