import React, { useState } from "react";
import AddBlogNew from './add-blog'
import axios from 'axios';



const AddBlog = () => {

    const [blogData, setBlogData] = useState({});
    const [title, setTitle] = useState({});
    const [category, setCategory] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [authorImg, setAuthorImg] = useState("");


    const handleOnBlur = (e) => {
        const feild = e.target.name;
        const value = e.target.value;
        // console.log(typeof value);
        // const re = /\n/gi
        // const newValue = value.replace(re, "<br/>")

        const newBlogData = { ...blogData };
        newBlogData[feild] = value;
        // console.log(newBlogData);
        setBlogData(newBlogData);
        // console.log(typeof newBlogData.blog_description);
        e.preventDefault();


    }
    // console.log(blogData);

    //     const handleBlogSubmit = async (e) => {
    //         const response = await axios
    //             // .get("https://mobilepointserver.herokuapp.com/blogs/")
    //             .post("http://localhost:5000/blogs")
    //             .catch((err) => {
    //                 console.error("Error: ", err);
    //             });
    //          .then(res => res.json())
    //     .then(data => {
    //         if (data.insertedId) {
    //             setConfirm(true);
    //         }
    //     })
    // e.preventDefault();
    //     };


    // const [allProducts, setAllProducts] = useState(products);

    // const handleDelete = async (id) => {
    //     const res = await fetch(`http://localhost:5000/products/${id}`, {
    //         method: "DELETE",
    //     });
    //     const data = await res.json();
    //     if (data.acknowledged) {
    //         const newProducts = allProducts.filter(pd => pd._id != id)
    //         setAllProducts(newProducts)
    //     }
    // };
    // app.delete('/products/:id', async (req, res) => {
    //     const id = req.params.id
    //     const query = { _id: ObjectId(id) }
    //     const result = await productCollection.deleteOne(query)
    //     res.json(result)
    // })




    // const handleBlogSubmit = async (e) => {
    // const response = await fetch('https://localhost:5000/blogs', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(blogData)
    // })
    // console.log('inside handle blog submit', blogData);
    // const response = await axios.post('https://localhost:5000/blogs', blogData)
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    // const data = await response.json();
    // console.log(data);

    // .then(res => res.json())
    // .then(data => {
    //     if (data.insertedId) {
    //         setConfirm(true);
    //     }
    // })
    // return <AddBlogNew></AddBlogNew>
    //     e.preventDefault();
    // }
    // const handleBlogSubmit = (e) => {
    // axios.post('https://localhost:5000/blogs', blogData)
    // .then(data => {
    // const id = data.data.insertedId;
    // if (id) {
    //     setConfirm(true);
    // }
    // })



    //         console.log('inside handle', blogData);
    //         e.preventDefault();
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!image) {
        //   return;
        // }
        // const formData = new FormData();
        // formData.append("productTitle", productTitle);
        // formData.append("productCategory", productCategory);
        // formData.append("productPrice", productPrice);
        // formData.append("productStock", productStock);
        // formData.append("productVendor", productVendor);
        // formData.append("productDetails", productDetails);
        // formData.append("productImage", productImage);

        fetch("https://foodmart-server-side.herokuapp.com/blogs", {
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



    const handleBlogSubmit = event => {
        event.preventDefault();

        if (!thumbnail) {
            return;
        }



        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", category);
        formData.append("thumbnail", thumbnail);
        formData.append("image_alt", imageAlt);
        formData.append("short_description", shortDescription);
        formData.append("description", description);
        formData.append("tags", tags);
        formData.append("time", time);
        formData.append("date", date);
        formData.append("author_name", authorName);
        formData.append("author_PhotoUrl", authorImg);

        console.log(formData);
        console.log("Inside handle submit", blogData);

        fetch("https://foodmart-server-side.herokuapp.com/blogs",
            {
                method: 'POST',
                body: blogData,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
        // headers: {
        //     'Content-Type': 'application/json'
        // },
    }
        )
            .then((res) => res.json())
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

        // const result = await res.json()
        // result.user => 'Ada Lovelace'
    }

// { console.log(typeof blogData.blog_description) }

// const rep = /\n/gi;
return (
    <div className="py-10 bg-slate-200">

        <div>
            <div className="flex flex-wrap items-center justify-center ">


                <div className="flex justify-center items-center  w-full ">
                    <div className="w-1/2 bg-white rounded-lg p-8 m-4">
                        <div className="">
                            <h1 className='text-gray-700 text-center font-bold text-4xl '>Add A Blog</h1>
                        </div>
                        <form className='pt-10' onSubmit={handleBlogSubmit} method="POST">
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="blog_title">Blog Title:</label>
                                <input onChange={(e) => setTitle(e.target.value)} onBlur={handleOnBlur} className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="blog_title" id="blog_title" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="blog_category">Blog Category:</label>
                                <input onChange={(e) => setCategory(e.target.value)} onBlur={handleOnBlur} className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="blog_category" id="blog_category" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="blog_thumbnail">Blog Thumbnail:</label>
                                <input onChange={(e) => setThumbnail(e.target.value)} onBlur={handleOnBlur} className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="blog_thumbnail" id="image_url" />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="blog_tags">Blog Tags:</label>
                                <input onChange={(e) => setTags(e.target.value)} onBlur={handleOnBlur} className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="text" id="blog_tags" />
                            </div>
                            {/* <div className="flex flex-col mb-4">
                                    <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="blog_date">Blog Stock:</label>
                                    <input onBlur={handleOnBlur} className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="text" id="blog_date" />
                                </div> */}
                            {/* <div className="flex flex-col mb-4">
                                    <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="vendor_name">Vendor Name:</label>
                                    <input onBlur={handleOnBlur} className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="text" id="vendor_name" />
                                </div> */}
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="blog_short-description">Short Description:</label>
                                <textarea onChange={(e) => setShortDescription(e.target.value)} onBlur={handleOnBlur} className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="blog_short-description" name="blog_short-description" id="blog_short-description" rows="3">
                                </textarea>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="blog_description">Description:</label>
                                <textarea onChange={(e) => setDescription(e.target.value)} onBlur={handleOnBlur} className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="blog_description" name="blog_description" id="blog_description" rows="10">
                                </textarea>
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="blog_author_name">Blog Author Name:</label>
                                <input onChange={(e) => setAuthorName(e.target.value)} onBlur={handleOnBlur} className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="text" id="blog_author_name" />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="blog_author_PhotoUrl">Blog Author Photo Url:</label>
                                <input onChange={(e) => setAuthorImg(e.target.value)} onBlur={handleOnBlur} className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="blog_author_PhotoUrl" id="image_url" />
                            </div>

                            <button className="block font-bold rounded-xl bg-green-600 hover:bg-green-800 text-white uppercase text-lg mx-auto p-4 " type="submit">Add blog</button>
                        </form>

                        {/* 
                            <div className="p-3 bg-slate-300 w-96 h-56">
                           

                            </div> */}
                    </div>
                </div>
            </div>
        </div>



        {/* <h1 className="text-3xl font-semibold text-center">Add A Blog</h1>
            <div>
                <div className="container mx-auto w-2/4">
                    <div className="mt-5 md:mt-0">
                        <form action="#" method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-gray-200 space-y-6 sm:p-6">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Your blog title </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input onBlur={handleOnBlur} type="text" name="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="title" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700"> Write your blog here </label>
                                        <div className="mt-1">
                                            <textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3" placeholder="My receipe"></textarea>
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">Write a brief description for your blog. URLs are hyperlinked.</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700"> Add your blog thumbnail </label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input onBlur={handleOnBlur} id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
    </div>
);
};

export default AddBlog;