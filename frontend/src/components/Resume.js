import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-medium">{data.User.name}</h1>
      <div className="my-4">
        <p className="text-gray-700">{data.User.email}</p>
      </div>
      <h2 className="text-xl font-medium mt-8">Skills</h2>

      <h2 className="text-xl font-medium mt-8">Experiences</h2>
      <ul>
        {data.Experience.map((experience) => (
          <li key={experience.id} className="my-4">
            <h3 className="text-lg font-medium">{experience.id}</h3>
            <p className="text-gray-700">{experience.job_title}</p>
            <p className="text-gray-700">{experience.company_name}</p>
            <p className="text-gray-700">{experience.location}</p>
            <p className="text-gray-700">{experience.industry}</p>
            <p className="text-gray-700">{experience.start_date}</p>
            <p className="text-gray-700">{experience.end_date}</p>
            <p className="text-gray-700">{experience.description}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-medium mt-8">Education</h2>
      <ul>
        {data.Education.map((school) => (
          <li key={school.id} className="my-4">
            <h3 className="text-lg font-medium">{school.id}</h3>
            <p className="text-gray-700">{school.institute}</p>
            <p className="text-gray-700">{school.degree}</p>
            <p className="text-gray-700">{school.study_field}</p>
            <p className="text-gray-700">{school.start_date}</p>
            <p className="text-gray-700">{school.end_date}</p>
            <p className="text-gray-700">{school.grade}</p>
            <p className="text-gray-700">{school.extracurriculars}</p>
            <p className="text-gray-700">{school.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
