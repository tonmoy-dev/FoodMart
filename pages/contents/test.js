import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Image from "next/image";
const AddFood = () => {
  const [foodInfo, setFoodInfo] = useState({
    foodName: "",
    foodPrice: "",
    foodCategory: "",
    foodArea: "",
    foodDescription: "",
    resturantName: "",
  });
  console.log(foodInfo);

// take image data 
  const [foodPic, setFoodPic] = useState();
  const handleChange = (e) => {
    setFoodInfo({ ...foodInfo, [e.target.name]: e.target.value });
  };
// submit all data into backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!foodPic) {
      return "image needed";
    }
    const { foodName, foodArea, foodCategory, foodDescription, foodPrice } = foodInfo;
    await axios
      .post("/api/test", {
        foodName,
        foodArea,
        foodCategory,
        foodDescription,
        foodPrice,
        foodPic,
      })
      .then((res) => {
        if (res.status === 200) {
          swal("Food Added!", "Food successfully Added!", "success");
        }
      })
      .catch((err) => console.log(err.message));
    e.target.reset();
  };

  //for image input that is upload directly
  const handleImage = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "foodmart_preset");
      data.append("cloud_name", "foodmartshop");
      axios
        .post("https://api.cloudinary.com/v1_1/foodmartshop/image/upload", data)
        .then(({ data }) => {
          setFoodPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container my-80">
      <div className="flex justify-center items-center h-screen w-full">
        <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Add your food
          </h1>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="flex flex-col mb-2">
              <label className="add-food-label" htmlFor="foodName">
                Food Name
              </label>
              <input
                className="add-food-input"
                type="text"
                name="foodName"
                id="foodName"
                onBlur={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="add-food-label" htmlFor="foodName">
                Resturant Name
              </label>
              <input
                className="add-food-input"
                type="text"
                name="resturantName"
                id="resturantName"
                onBlur={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="add-food-label" htmlFor="foodPrice">
                Food Price
              </label>
              <input
                className="add-food-input"
                type="number"
                name="foodPrice"
                id="foodPrice"
                step="any"
                onBlur={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="foodCategory"
              >
                Food Category
              </label>
              <select
                name="foodCategory"
                id="category"
                className="add-food-input"
                onBlur={(e) => handleChange(e)}
              >
                <option value="category">category</option>
                <option value="Chicken">Chicken</option>
                <option value="Pasta">Pasta</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>
            <div className="flex flex-col mb-2">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="foodCategory"
              >
                Food Area
              </label>
              <select
                name="foodArea"
                id="Area"
                className="add-food-input"
                onBlur={(e) => handleChange(e)}
              >
                <option value="Area">Area</option>
                <option value="Chinese">Chinese</option>
                <option value="Indian">Indian</option>
                <option value="Canadian">Canadian</option>
                <option value="Portuguese">Portuguese</option>
              </select>
            </div>
            <div className="flex flex-col mb-2">
              <label className="add-food-label" htmlFor="foodImage">
                Food Image
              </label>
              <input
                className="add-food-input"
                type="file"
                name="foodImage"
                id="foodImage"
                onChange={(e) => handleImage(e.target.files[0])}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="add-food-label" htmlFor="foodDescription">
                Food Description
              </label>
              <textarea
                className="add-food-input"
                name="foodDescription"
                id="foodDescription"
                cols="30"
                rows="5"
                onBlur={(e) => handleChange(e)}
              ></textarea>
            </div>
            <button
              className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Add Food
            </button>
          </form>
        </div>
      </div>
      {/* test show image */}
      <Image
        width={100}
        height={100}
        src="http://res.cloudinary.com/foodmartshop/image/upload/v1647843005/foodmart_preset/download.jpg"
        alt="hdsfhsls"
      ></Image>
    </div>
  );
};

export default AddFood;
