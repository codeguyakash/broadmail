// "use client";
import axios from "axios";
import { useState } from "react";
import Loader from "./Loader";

export default function Compose() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(" ");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    subject: "",
    body: "",
    file: null,
  });
  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // console.log(process.env);
  const sendHandler = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("body", formData.body);
    formDataToSend.append("file", formData.file);
    try {
      setIsLoading(true);
      axios
        .post("http://localhost:3001/send-emails", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data.message);
          setMessage(res.data.message);
          setIsLoading(false);
        })
        .catch((error) => {
          setMessage(error.message);
          console.log(error.message);
          setIsLoading(true);
        });
    } catch (error) {
      isLoading(true);
      console.error("Error:", error);
      setMessage(error);
    }
    setTimeout(() => {
      setMessage("");
      setIsLoading(false);
    }, 5000);
  };
  return (
    <main className="flex flex-col items-center w-[100%]">
      <div className="md:w-[50%] mx-5">
        <form className="flex flex-col gap-5 p-10 border-2 border-[#141414] rounded-lg">
          <h1 className="text-3xl font-semibold">Send Bulk Email</h1>
          <input
            className="text-1xl  bg-[#141414] p-2 rounded-md border-none"
            value={formData.email}
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="akash@codeguyakash.me"
          />
          <input
            className="text-1xl  bg-[#141414] p-2 rounded-md border-none"
            type="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            placeholder="your-app-password"
          />
          <input
            className="text-1xl bg-[#141414] p-2 rounded-md border-none"
            type="text"
            value={formData.subject}
            name="subject"
            onChange={handleChange}
            placeholder="Subject : Hire me for Software Developer Role"
          />
          <textarea
            className="text-1xl  bg-[#141414] p-2 rounded-md border-none"
            type="textarea"
            placeholder="Body"
            rows="5"
            value={formData.body}
            name="body"
            onChange={handleChange}
          />

          <div className="border-2 border-dashed border-[#141414] rounded-md p-5">
            <input
              className="text-1xl text-center cursor-pointer"
              type="file"
              name="file"
              onChange={handleChange}
            />

            <p className="text-[12px] text-[#909090] mt-1">
              only .csv files are accepted
            </p>
          </div>
          <div className="mx-auto text-[12px] text-[#909090]">{message}</div>
          <button
            className="bg-white text-1xl text-black p-2 font-normal rounded-md"
            type="submit"
            onClick={sendHandler}
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "SEND"}
          </button>
        </form>
      </div>
    </main>
  );
}
