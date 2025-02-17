"use client";
import { useFetchBlogApiByPage } from "@/api-hook/blog";
import DescriptionText from "@/components/common/description-text";
import NameText from "@/components/common/name-text";
import { BLOGLIST } from "@/constants/pages/blog";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IBlog {
  _id: string;
  img: string;
  nameText: string;
  tittleText: string;
  descriptionText: string;
}

export function BlogContentComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramPage = searchParams.get("page");
  
  // Ép kiểu param thành số, nếu không có thì mặc định là 1
  const initialPage = paramPage ? Number(paramPage) : 1;
  const [page, setPage] = useState<number>(initialPage);
  const totalItems = useFetchBlogApiByPage(page)?.itemsCount;
  const maxGroup = Math.ceil(totalItems/3);
  const blogs = useFetchBlogApiByPage(page)?.data;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= maxGroup) {
      setPage(newPage);
      router.replace(`/blog?page=${newPage}`);
    }
  };

  useEffect(() => {
    if (paramPage) {
      const parsedPage = Number(paramPage);
      if (!isNaN(parsedPage) && parsedPage !== page) {
        setPage(parsedPage);
      }
    }
  }, [paramPage, page]);

  return (
    <div className="w-full md:max-w-[730px]">
      {blogs?.map((blog: IBlog, index: number) => (
        <div
          key={`blog-${index}`}
          className="flex flex-col w-full items-center mt-10 mb-10 md:mb-[133px] rounded-[50px] md:h-[953px] shadow-custom-professional-team"
        >
          {/* Image */}
          <div>
            <Image src={blog.img} alt="" width={730} height={453} />
          </div>

          {/* Text Content */}
          <div className="flex md:max-w-[580px] md:mt-[30px] flex-col items-center md:items-start">
            <div className="flex w-full md:h-[273px] flex-col">
              <div className="w-full flex items-center justify-center md:justify-start mt-[28px] gap-[15px]">
                <Image src="/blog-images/folder.svg" alt="" width={25} height={25} />
                <p className="w-auto md:text-left text-xs md:text-base !leading-5 font-semibold text-center tracking-[0.48px] text-custom-pink">
                  {blog.tittleText}
                </p>
              </div>
              <NameText nameClass="w-full md:text-left mt-[18px]" nameText={blog.nameText} />
              <DescriptionText descriptionClass="w-full md:text-left mt-[23px]" descriptionText={blog.descriptionText} />
            </div>

            {/* Read More Button */}
            <div className="w-full flex justify-center md:justify-start mt-10 mb-10 md:mb-0">
              <button className="w-[226px] h-[38px] md:h-[58px] font-semibold text-xs md:text-base md:tracking-widest bg-custom-pink text-white rounded-md md:rounded-[50px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="w-full flex flex-row justify-between relative">
        {/* Previous Button */}
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)} className="w-[50px] absolute left-0">
            <Image src="/team-images/arrow-left.svg" alt="" width={25} height={25} />
          </button>
        )}

        {/* Page Numbers */}
        <div className="absolute min-h-9 left-[50%] flex justify-between items-center gap-5">
          {Array.from({ length: maxGroup }, (_, i) => i + 1).map((num) => (
            <button
              key={`page-${num}`}
              onClick={() => handlePageChange(num)}
              className={`w-5 rounded text-center ${num === page ? "bg-patrick-blue text-white" : ""}`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Next Button */}
        {page < maxGroup && (
          <button onClick={() => handlePageChange(page + 1)} className="w-[50px] absolute right-0">
            <Image src="/team-images/arrow-right.svg" alt="" width={25} height={25} />
          </button>
        )}
      </div>
    </div>
  );
}
