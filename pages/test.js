import Link from "next/link";
const subCategoryList = [
    {
        subCategory_id: 1,
        subCategory_name: "Noodles",
    },
    {
        subCategory_id: 2,
        subCategory_name: "Local Breakfast",
    },
    {
        subCategory_id: 3,
        subCategory_name: "Juice",
    },
    {
        subCategory_id: 4,
        subCategory_name: "Candy & Chocolate",
    },
    {
        subCategory_id: 5,
        subCategory_name: "Coffee",
    },
    {
        subCategory_id: 6,
        subCategory_name: "Frozen Snacks",
    },
    {
        subCategory_id: 7,
        subCategory_name: "Soft Drinks",
    },
    {
        subCategory_id: 8,
        subCategory_name: "Fresh Fruits",
    },
    {
        subCategory_id: 9,
        subCategory_name: "Fresh Vegetables",
    },
    {
        subCategory_id: 10,
        subCategory_name: "Cakes",
    },
];
const test = () => {
    return (
        <div>
            {subCategoryList.slice(0, 4).map((subCategory) => (
                <div key={subCategory.subCategory_id}>
                    <Link href={`/subCategory/${subCategory.subCategory_name}`}>
                        <a>{subCategory.subCategory_name}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default test;
