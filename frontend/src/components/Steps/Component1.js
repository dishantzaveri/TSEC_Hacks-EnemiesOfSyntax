import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setField } from "../../features/auth/registerSlice";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import alanBtn from "@alan-ai/alan-sdk-web";
// import { AutoCompletePlaces } from "./AutoCompletePlaces";

export default function FormPropsTextFields() {
  const dispatch = useDispatch();
  const { work } = useSelector((state) => state.register);
  const { token } = useSelector((state) => state.auth);
  const [list, setList] = useState(work ? [...work] : []);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    job_title: "",
    company_name: "",
    location: "",
    industry: "",
    start_year: "",
    end_year: "",
  });
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/account/experience/",
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    axios(options)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   console.log(token);
  //   const options = {
  //     method: "GET",
  //     url: "http://localhost:8000/account/experience/",
  //     headers: {
  //       Authorization: `Token ${token}`,
  //     },
  //   };
  //   axios(options)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const submit = async () => {
    var data = JSON.stringify({
      job_title: "string",
      company_name: "string",
      location: "string",
      industry: "string",
      start_date: "02-02-2023",
      end_date: "02-02-2024",
      description: "string",
    });

    var world = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/account/experience/",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(world)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div
      class="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "",
      }}
      noValidate
      autoComplete="off"
    >
      <Box className="education">
        <h2 className="text-2xl font-bold mb-4">Work Experience :</h2>{" "}
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <h1 className="text-lg">Job Title</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.job_title}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  job_title: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Company Name</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.company_name}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  company_name: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Location</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.location}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  location: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Industry</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.industry}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  industry: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Start year</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={input.start_year}
                onChange={(newValue) => {
                  setInput((prevState) => ({
                    ...prevState,
                    start_year: newValue,
                  }));
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">End year</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={input.end_year}
                onChange={(newValue) => {
                  setInput((prevState) => ({
                    ...prevState,
                    end_year: newValue,
                  }));
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" />
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
        <button
          className="w-full mt-4 bg-cyan-500 py-2 text-gray-100"
          onClick={() => submit()}
        >
          Save
        </button>
      </Box>
    </div>
  );
}
