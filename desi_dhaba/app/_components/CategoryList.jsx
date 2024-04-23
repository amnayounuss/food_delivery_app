"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image"; // Import Image component from Next.js
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import GlobalApi from "../_utils/GlobalApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function CategoryList() {
  const listRef = useRef(null);
  const [categoryList, setCategoryList] = useState([]);
  const params = useSearchParams();

  useEffect(() => {
    getCategoryList();
  }, []);

  // Function to get category list
  const getCategoryList = () => {
    GlobalApi.GetCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  // Function to scroll right
  const scrollRightHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  // Function to left right
  const scrollLeftHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mt-10 relative">
    <ArrowLeftCircle
        className="absolute cursor-pointer -left-10 top-9 bg-gray-500 rounded-full text-white h-8 w-8"
        onClick={scrollLeftHandler} // Invoke the function correctly
      />
      <div className="flex gap-4 overflow-auto scrollbar-hide" ref={listRef}>
        {/* Use conditional rendering to check if categoryList is not empty */}
        {categoryList.length > 0 &&
          categoryList.map((Category, index) => (
            <Link href={`/?category=${Category.slug}`} key={index} className="flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28 hover:border-primary hover:bg-orange-200 cursor-pointer group:">
              {/* Render Image component for each category */}
              <Image
                src={Category.icon?.url}
                alt={Category.name}
                width={40}
                height={40}
                className="group hover:scale-125 transition-all duration-200"
              />
              <h2 className="text-sm font-medium group hover:text-primary">{Category.name}</h2>
            </Link>
          ))}
      </div>
      <ArrowRightCircle
        className="absolute cursor-pointer -right-10 top-9 bg-gray-500 rounded-full text-white h-8 w-8"
        onClick={scrollRightHandler} // Invoke the function correctly
      />
    </div>
  );
}

export default CategoryList;
