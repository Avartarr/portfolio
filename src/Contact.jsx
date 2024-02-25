import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";


const Contact = () => {
  return (
    <div>
      <section id="contact">
      <div className="mt-20 contact">
        <h1 className="text-6xl text-center pt-5">Contact Me</h1>
        <div className="mt-10 lg:mx-auto md:mx-auto mx-10 sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              message: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("Form Values:", values);
              const formSpreeEndpoint = "https://formspree.io/f/xgegknoa";
              fetch(formSpreeEndpoint, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log("Form submission successful:", data);

                  toast.success("Form submitted successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });

                  resetForm();
                  setSubmitting(false);
                })
                .catch((error) => {
                  console.error("Error submitting form:", error);

                  toast.error("An error occurred while submitting the form", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });

                  setSubmitting(false);
                });
            }}
          >
            <Form className="space-y-6 pb-5 text-white">
              <label htmlFor="name" className="block text-sm font-bold">
                Name
              </label>

              <Field
                type="text"
                className="block w-full bg-[#130736] rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-[#D613B0] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D613B0] sm:text-sm sm:leading-20"
                id="name"
                name="name"
                placeholder="Enter your full name"
              />

              <ErrorMessage name="name" component="div" />

              <label htmlFor="email" className="block text-sm font-bold">
                Email
              </label>

              <Field
                type="text"
                className="block w-full bg-[#130736] rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset ring-[#D613B0] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D613B0] sm:text-sm sm:leading-20"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />

              <ErrorMessage name="email" component="div" />

              <label htmlFor="name" className="block text-sm font-bold">
                Message
              </label>

              <Field
                as="textarea"
                className="block w-full bg-[#130736] rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset ring-[#D613B0] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D613B0] sm:text-sm sm:leading-20"
                id="message"
                name="message"
                placeholder="Your message"
              />

              <ErrorMessage name="message" component="div" />
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#7b1266] px-7 py-2 rounded-full"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      </section>
      <div className="justify-center flex  py-4 pl-2">
        <div className="flex-1 ">
          <h1 className=" font-md text-4xl  md:pl-5">
            &lt; avartarr /&gt;
          </h1>
        </div>
        
        <div className="flex-1 pt-4 md:pt-1">
          <div className="flex space-x-5 justify-end pr-5 md:pt-4">
            <a
              href="https://github.com/Avartarr"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/chisom-okoye-291287257/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:your.sunshineokoye6@gmail.com"><SiGmail /></a>
            <a href="tel:+2349077760121"><FiPhoneCall /></a>
            <a href="https://wa.me/+2349077760121"><FaWhatsapp /></a>
             <a href="https://twitter.com/Avartar"><BsTwitterX /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
