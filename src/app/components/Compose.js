// "use client";
import axios from "axios";
import { useState } from "react";

export default function Compose() {
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
      axios
        .post("https://broadmailer.onrender.com/send-emails", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.error("Error:", error);
    }
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
              className="text-1xl p-2 "
              type="file"
              name="file"
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-blue-600 text-1xl p-2 font-semibold rounded-md"
            type="submit"
            onClick={sendHandler}
          >
            SEND
          </button>
        </form>
      </div>
    </main>
  );
}
