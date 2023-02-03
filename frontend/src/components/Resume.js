import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header/Header";
import CssBaseline from "@mui/material/node/CssBaseline";

export default function Resume() {
  const { token } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    User: {
      email: "",
      name: "",
      dob: "",
      twitter: "",
      linkedin: "",
      interests: "",
      about: "",
    },
    Experience: [
      {
        id: 0,
        job_title: "",
        company_name: "",
        location: "",
        industry: "",
        start_date: "",
        end_date: "",
        description: "",
      },
    ],
    Education: [
      {
        id: 0,
        institute: "",
        degree: "",
        study_field: "",
        start_date: "",
        end_date: "",
        grade: "",
        extracurriculars: "",
        description: "",
      },
    ],
  });

  var config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: "http://127.0.0.1:8000/account/resume",
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="p-6 bg-white w-1/3 my-2 mx-28 rounded-lg shadow-md flex flex-col justify-center">
        <h1 className="text-3xl font-medium">{data.User.name}</h1>
        <div className="my-4">
          <p className="text-gray-700">{data.User.email}</p>
        </div>
        <h2 className="text-xl font-medium mt-8">Experiences</h2>
        <ul className="list-disc pl-5">
          {data.Experience.map((experience) => (
            <li key={experience.id} className="my-4">
              <h3 className="text-lg font-medium">Title: {experience.job_title}</h3>
              <p className="text-gray-700">Company Name: {experience.company_name}</p>
              <p className="text-gray-700">Industry:
                {experience.location} &middot; {experience.industry}
              </p>
              <p className="text-gray-700">
                {experience.start_date} - {experience.end_date}
              </p>
              <p className="text-gray-700">Description: {experience.description}</p>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-medium mt-8">Education</h2>
        <ul className="list-disc pl-5">
          {data.Education.map((school) => (
            <li key={school.id} className="my-4">
              <h3 className="text-lg font-medium">Institute: {school.institute}</h3>
              <p className="text-gray-700">Degree: {school.degree}</p>
              <p className="text-gray-700">Study field: {school.study_field}</p>
              <p className="text-gray-700">
                {school.start_date} - {school.end_date}
              </p>
              <p className="text-gray-700">Grade: {school.grade}</p>
              <p className="text-gray-700">Extra Curriculars: {school.extracurriculars}</p>
              <p className="text-gray-700">Description: {school.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
