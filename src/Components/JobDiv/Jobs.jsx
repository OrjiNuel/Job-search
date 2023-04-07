import React from "react";
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../assests/logo2.jpg";

const Data = [
  {
    id: 1,
    // image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it make a type specimen book",
    company: "Novac Linux Co.",
  },
  {
    id: 2,
    // image: logo1,
    title: "UI Designer",
    time: "14Hrs",
    location: "Manchester",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it make a type specimen book",
    company: "Liquid Accessments",
  },
  {
    id: 3,
    // image: logo1,
    title: "Softare Eng",
    time: "10Hrs",
    location: "Austria",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it make a type specimen book",
    company: "Web Tech Agency",
  },
  {
    id: 4,
    // image: logo1,
    title: "UI/UX Designer",
    time: "Now",
    location: "Germany",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it make a type specimen book",
    company: "Government",
  },
  {
    id: 5,
    // image: logo1,
    title: "Product Designer",
    time: "Now",
    location: "London",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it make a type specimen book",
    company: "Web Tech Agency",
  },
  {
    id: 6,
    // image: logo1,
    title: "Researcher",
    time: "5Hrs",
    location: "Norway",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it make a type specimen book",
    company: "Nin Co.",
  },
  {
    id: 7,
    // image: logo1,
    title: "Lead Developer",
    time: "14Hrs",
    location: "Paris",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it make a type specimen book",
    company: "Nimeloi - UK",
  },
  {
    id: 8,
    // image: logo1,
    title: "Data Scientist",
    time: "10Hrs",
    location: "Slovania",
    desc: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it make a type specimen book",
    company: "Ojay and Nuel Ltd",
  },
];

const Jobs = () => {
  return (
    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {Data.map(({ id, image, title, time, location, desc, company }) => {
        return (
          <div
            key={id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blueColor shadow shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive />
                {time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>

            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
              {desc}
            </p>

            <div className="company flex items-center gap-2">
              {/* {image}  */}
              <span className="text-[14px] py-[1rem] block group-hover:text-white">
                {company}
              </span>
            </div>

            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/text-item:text-textColor">
              Apply Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
