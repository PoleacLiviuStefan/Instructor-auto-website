import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7992ks9",
        "template_cxkeu44",
        form.current,
        "uSA0IVA9aGhfzQfPC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="absolute flex   justify-center bg-slate-100  top-[520rem] lg:top-[365rem] w-full h-[50rem]">
      <div className="w-full h-full flex items-center justify-center">
        <Slide left delay={200}>
          <div
            name="Contact"
            className="flex w-[22rem]  lg:w-[75rem] bg-white h-[40rem] shadow-[5px_5px_38px_5px_rgba(0,0,0,0.72)]"
          >
            <div className="absolute lg:relative flex justify-center items-center lg:h-full h-[7rem] w-full lg:w-[20rem] bg-gradient-to-t from-sky-600 to-sky-300 text-white">
              <h1 className="absolute lg:top-[15rem] text-2xl lg:text-4xl font-bold  lg:mt-10  ">
                Ai o întrebare?
              </h1>
              <h2 className="absolute top-20 lg:top-[21rem] text-xl">
                Nu ezita să mă întrebi!
              </h2>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col w-[22rem] lg:w-[32rem] justify-center items-center mt-20 lg:ml-10  "
            >
              <input
                type="text"
                placeholder="Nume"
                minLength="2"
                name="from_name"
                className="lg:w-[20rem] w-[15rem] px-2 border-b-[1px] border-sky-500 outline-none"
                required
              ></input>
              <input
                type="text"
                minLength="2"
                placeholder="Prenume"
                name="second_name"
                className="lg:w-[20rem] w-[15rem] mt-10 px-2 border-b-[1px] border-sky-500 outline-none"
                required
              ></input>
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                className="lg:w-[20rem] w-[15rem] mt-10 px-2 border-b-[1px] border-sky-500 outline-none"
                required
              ></input>
              <textarea
                type="text"
                placeholder="Subiect"
                name="message"
                className="lg:w-[30rem] w-[20rem] text-bottom pt-[1rem] lg:pt-[2.4rem] mt-10 lg:h-[4rem] px-2 border-b-[1px] outline-none border-sky-500"
                required
              ></textarea>
              <button
                value="Send"
                className="text-white shadow-[5px_5px_38px_5px_rgba(0,0,0,.2)] bg-sky-500 mt-20 w-[8rem] h-[2rem] rounded-xl hover:bg-sky-400"
              >
                Trimite
              </button>
            </form>
            <div className="absolute bottom-0  flex justify-center items-center w-full  lg:w-[15rem] h-[5rem] lg:h-full  bg-gradient-to-t from-sky-600 to-sky-300 text-white right-0 ">
              {" "}
              <div className="flex lg:flex-col text-lg lg:text-xl">
                <a href="tel:+40-767-623-030">
                  <BsTelephone className="relative text-xl top-2 lg:top-[10px] right-2" />

                  <h1 className="px-4 relative left-2 top-[-1rem]">
                    0767 623 030
                  </h1>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/Ciprian-Diculescu-instructor-auto-100865649251803/?hc_ref=ARTEhP-t1xsbH1Pl3AWxyHNil-y2HZ8mZRVgMx7lS4pzOC-xPdD-Ck4FsHiF0LK2hp4&fref=nf&__xts__[0]=68.ARD_KzOqwBb0TQnrGAEYjpUK53b5c4FAlGt-DnI3nKRvuVxOgcJCym2k_zPF84uRrOjeAJvnJzE2tVn3jOQAVBBKZC8WNIDCH5ErqzShQ2TPcdC53b-N0dmtiTZd1ZZ1HRHRdh7DBrSQUgvwSmnvtGmTTVzdCn3DsLISbf9C1xf0HnqmLI7Q4m6_PUF8q_PlbJiHEdokcS38sRUMCvtZepHgUZcGSZS2SF-pYtr88hJdAjlFYRgYz6y8tkHm3Yl7ArLsPeJpvcG99jjR0y0Ze9Pag2BPeFCqoi0sYEglsbF9K3SQ8GbD3PA_JDXkcCAzYel6uodtdLdfjhwS3FDB6y1CCys6cRD7co5uWF9aZ7jzw1i2Q4-XqIerrKB0kpum1-7vVoLQYaSfdtwiKSSEz1HdFw"
                >
                  <h1 className="text-4xl lg:text-5xl  relative lg:top-[16rem] lg:left-14">
                    <FaFacebookSquare />
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Contact;
