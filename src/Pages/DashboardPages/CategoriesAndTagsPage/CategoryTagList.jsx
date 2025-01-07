import React, { useState } from "react";

const CategoriesTagsPage = () => {
  // Dummy data for categories and tags
  const initialCategories = [
    { id: 1, name: "Technology", tags: ["AI", "Web Development"] },
    { id: 2, name: "Health", tags: ["Fitness", "Nutrition"] },
    { id: 3, name: "Education", tags: ["Online Learning", "Study Tips"] },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [isEditingCategory, setIsEditingCategory] = useState(null);
  const [isEditingTag, setIsEditingTag] = useState({ categoryId: null, tagName: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("Tags");

  // Add a new category
  const addCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, { id: Date.now(), name: newCategory, tags: [] }]);
      setNewCategory("");
    }
  };

  // Delete a category
  const deleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  // Edit a category
  const editCategory = (id, newName) => {
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, name: newName } : category
      )
    );
    setIsEditingCategory(null);
  };

  // Add a new tag to a specific category
  const addTag = () => {
    if (newTag.trim() !== "" && selectedCategoryId) {
      setCategories(
        categories.map((category) =>
          category.id === selectedCategoryId
            ? { ...category, tags: [...category.tags, newTag] }
            : category
        )
      );
      setNewTag("");
      setSelectedCategoryId("");
    }
  };

  // Delete a tag from a category
  const deleteTag = (categoryId, tagName) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? { ...category, tags: category.tags.filter((tag) => tag !== tagName) }
          : category
      )
    );
  };

  // Edit a tag
  const editTag = (categoryId, oldTagName, newTagName) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              tags: category.tags.map((tag) =>
                tag === oldTagName ? newTagName : tag
              ),
            }
          : category
      )
    );
    setIsEditingTag({ categoryId: null, tagName: "" });
  };

  // Filtered results for search
  const filteredResults = categories.filter((category) => {
    if (searchFilter === "Categories") {
      return category.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    if (searchFilter === "Tags") {
      return category.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return false;
  });

  return (
    <section className="bg-[var(--bg-color)] min-h-screen mt-36 text-[var(--paragraph-color)] default-spacing">
      <h1 className="text-3xl font-bold mb-6">Categories & Tags</h1>

      {/* Add Category Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Add a New Category</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Category Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          />
          <button
            onClick={addCategory}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Category
          </button>
        </div>
      </div>

      {/* Add Tag Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Add a New Tag</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Tag Name"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          />
          <select
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
            className="p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button
            onClick={addTag}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Tag
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex items-center gap-4">
        <i className="ri-search-2-line text-xl text-gray-400"></i>
        <input
          type="text"
          placeholder={`Search ${searchFilter}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <select
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          className="p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        >
          <option value="Tags">Tags</option>
          <option value="Categories">Categories</option>
        </select>
      </div>

      {/* Categories and Tags List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.map((category) => (
          <div key={category.id} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              {isEditingCategory === category.id ? (
                <input
                  type="text"
                  value={category.name}
                  onChange={(e) =>
                    editCategory(category.id, e.target.value)
                  }
                  className="w-full p-2 rounded-lg bg-gray-700 text-white"
                />
              ) : (
                <h3 className="text-xl font-semibold text-[var(--heading-color)]">
                  {category.name}
                </h3>
              )}
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setIsEditingCategory(isEditingCategory ? null : category.id)
                  }
                  className="group w-8 h-8 flex justify-center items-center rounded-full bg-yellow-500 hover:bg-yellow-600"
                >
                  <i className="ri-edit-box-line text-white text-lg group-hover:hidden"></i>
                  <i className="ri-edit-box-fill text-white text-lg hidden group-hover:block"></i>
                </button>
                <button
                  onClick={() => deleteCategory(category.id)}
                  className="group w-8 h-8 flex justify-center items-center rounded-full bg-red-500 hover:bg-red-600"
                >
                  <i className="ri-delete-bin-line text-white text-lg group-hover:hidden"></i>
                  <i className="ri-delete-bin-fill text-white text-lg hidden group-hover:block"></i>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-[var(--paragraph-color)]">Tags</h4>
              <ul className="space-y-2">
                {category.tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex justify-between items-center bg-[var(--bg-transparent-color)] p-2 rounded-lg"
                  >
                    {isEditingTag.categoryId === category.id && isEditingTag.tagName === tag ? (
                      <input
                        type="text"
                        value={isEditingTag.tagName}
                        onChange={(e) =>
                          setIsEditingTag({
                            ...isEditingTag,
                            tagName: e.target.value,
                          })
                        }
                        onBlur={() =>
                          editTag(
                            category.id,
                            isEditingTag.tagName,
                            isEditingTag.tagName
                          )
                        }
                        className="w-full p-2 rounded-lg bg-gray-700 text-white"
                      />
                    ) : (
                      <span>{tag}</span>
                    )}
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setIsEditingTag({
                            categoryId: category.id,
                            tagName: tag,
                          })
                        }
                        className="group w-8 h-8 flex justify-center items-center rounded-full bg-yellow-500 hover:bg-yellow-600"
                      >
                        <i className="ri-edit-box-line text-white text-lg group-hover:hidden"></i>
                        <i className="ri-edit-box-fill text-white text-lg hidden group-hover:block"></i>
                      </button>
                      <button
                        onClick={() => deleteTag(category.id, tag)}
                        className="group w-8 h-8 flex justify-center items-center rounded-full bg-red-500 hover:bg-red-600"
                      >
                        <i className="ri-delete-bin-line text-white text-lg group-hover:hidden"></i>
                        <i className="ri-delete-bin-fill text-white text-lg hidden group-hover:block"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesTagsPage;
