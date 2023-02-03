import React, { useEffect, useState } from "react";
import "./News.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { useGetNewsQuery } from "../../features/news/newsApiSlice";
import { VscLoading } from "react-icons/vsc";
import blogs from "./Data.json";

function News() {
  const { data, isLoading, error } = useGetNewsQuery();
  const [blogs, setBlogs] = useState([
    {
      title: "Embracing Diversity: A Story of Overcoming Disability",
      content:
        "This blog tells the inspiring story of a person with a disability and how they overcame the challenges they faced to live a fulfilling life. It highlights the importance of embracing diversity and inclusiveness in society.",
      image: "",
    },
    {
      title: "The Power of Adaptability: How People with Disabilities Thrive",
      content:
        "This blog discusses how people with disabilities use adaptability and determination to overcome obstacles and lead successful lives. It explores the various resources and support systems available to those with disabilities and the impact they have on their lives.",
      image: "",
    },
    {
      title: "Breaking Barriers: A Look at Disability Rights and Advocacy",
      content:
        "This blog focuses on the history of disability rights and advocacy and how it has evolved over the years. It highlights the challenges people with disabilities still face and the ongoing efforts to create a more inclusive and equitable society.",
      image: "",
    },
    {
      title:
        "From Struggles to Success: The Journey of Entrepreneurs with Disabilities",
      content:
        "This blog profiles successful entrepreneurs with disabilities and their journeys to success. It sheds light on the challenges they faced and the strategies they used to overcome them, offering inspiration and advice for others with disabilities who are seeking to start their own businesses.",
      image: "",
    },
    {
      title:
        "The Importance of Inclusive Education for Students with Disabilities",
      content:
        "This blog discusses the benefits of inclusive education for students with disabilities and the impact it has on their development and future success. It also addresses the challenges and misconceptions about inclusive education and the importance of creating a more inclusive and accessible education system for all students.",
      image: "",
    },
  ]);
  const newsArticle = (heading, subtitle, img) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleright">
        <h1 className="font-semibold">{heading}</h1>
        <h2 className="text-sm">{subtitle}</h2>
        <img src={img} />
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h1> News</h1>
        <InfoIcon className="font-cyan-500" />
      </div>
      {blogs.map((blog) => newsArticle(blog.title, blog.body, blog.img))}
      {isLoading && (
        <div className="w-full flex flex-col justify-center items-center my-8">
          <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
          <h1 className="text-xl mt-2">Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default News;
