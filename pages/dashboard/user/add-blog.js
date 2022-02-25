import React, { useState } from "react";

const AddBlog = () => {

    const [blogTitle, setBlogTitle] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [blogThumb, setBlogThumb] = useState("");
  const [blogTag, setBlogTag] = useState("");
  const [blogShortDescription, setBlogShortDescription] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!image) {
    //   return;
    // }
    const formData = new FormData();
    formData.append("blogTitle", blogTitle);
    formData.append("blogCategory", blogCategory);
    formData.append("blogThumb", blogThumb);
    formData.append("blogTag", blogTag);
    formData.append("blogShortDescription", blogShortDescription);
    formData.append("blogDescription", blogDescription);
    formData.append("authorName", authorName);
    formData.append("photoUrl", photoUrl);

    fetch("http://localhost:5000/addBlog", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <div className="py-10 bg-slate-200">
      <div>
        <div className="flex flex-wrap items-center justify-center ">
          <div className="flex justify-center items-center  w-full ">
            <div className="w-1/2 bg-white rounded-lg p-8 m-4">
              <div className="">
                <h1 className="text-gray-700 text-center font-bold text-4xl ">
                  Add A Blog
                </h1>
              </div>
              <form onSubmit={handleSubmit} className="pt-10" method="POST">
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="blog_title"
                  >
                    Blog Title:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="blog_title"
                    id="blog_title"
                    onChange={(e) => setBlogTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="blog_category"
                  >
                    Blog Category:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="blog_category"
                    id="blog_category"
                    onChange={(e) => setBlogCategory(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="blog_thumbnail"
                  >
                    Blog Thumbnail:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="blog_thumbnail"
                    id="image_url"
                    onChange={(e) => setBlogThumb(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="blog_tags"
                  >
                    Blog Tags:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="text"
                    id="blog_tags"
                    onChange={(e) => setBlogTag(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="blog_short-description"
                  >
                    Short Description:
                  </label>
                  <textarea
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="blog_short-description"
                    name="blog_short-description"
                    id="blog_short-description"
                    rows="3"
                    onChange={(e) => setBlogShortDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="blog_description"
                  >
                    Description:
                  </label>
                  <textarea
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="blog_description"
                    name="blog_description"
                    id="blog_description"
                    rows="10"
                    onChange={(e) => setBlogDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="blog_author_name"
                  >
                    Blog Author Name:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="text"
                    id="blog_author_name"
                    onChange={(e) => setAuthorName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="blog_author_PhotoUrl"
                  >
                    Blog Author Photo Url:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="blog_author_PhotoUrl"
                    id="image_url"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </div>

                <button
                  className="block font-bold rounded-xl bg-green-600 hover:bg-green-800 text-white uppercase text-lg mx-auto p-4 "
                  type="submit"
                >
                  Add blog
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
