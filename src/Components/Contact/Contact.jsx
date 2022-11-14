
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
    <div className="absolute flex   justify-center bg-slate-100  top-[520rem] xl:top-[365rem] w-full h-[50rem]">
      <div className="w-full h-full flex items-center justify-center">
        <Slide left delay={200}>
          <div
            name="Contact"
            className="flex w-[22rem]  xl:w-[75rem] bg-white h-[40rem] shadow-[5px_5px_38px_5px_rgba(0,0,0,0.72)]"
          >
            <div className="absolute xl:relative flex justify-center items-center xl:h-full h-[7rem] w-full xl:w-[20rem] bg-gradient-to-t from-sky-600 to-sky-300 text-white">
              <h1 className="absolute xl:top-[15rem] text-2xl xl:text-4xl font-bold  xl:mt-10  ">
                Ai o întrebare?
              </h1>
              <h2 className="absolute top-20 xl:top-[21rem] text-xl">
                Nu ezita să mă întrebi!
              </h2>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col w-[22rem] xl:w-[32rem] justify-center items-center mt-20 xl:ml-10  "
            >
              <input
                type="text"
                placeholder="Nume"
                minLength="2"
                name="from_name"
                className="xl:w-[20rem] w-[15rem] px-2 border-b-[1px] border-sky-500 outline-none"
                required
              ></input>
              <input
                type="text"
                minLength="2"
                placeholder="Prenume"
                name="second_name"
                className="xl:w-[20rem] w-[15rem] mt-10 px-2 border-b-[1px] border-sky-500 outline-none"
                required
              ></input>
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                className="xl:w-[20rem] w-[15rem] mt-10 px-2 border-b-[1px] border-sky-500 outline-none"
                required
              ></input>
              <textarea
                type="text"
                placeholder="Subiect"
                name="message"
                className="xl:w-[30rem] w-[20rem] text-bottom pt-[1rem] xl:pt-[2.4rem] mt-10 xl:h-[4rem] px-2 border-b-[1px] outline-none border-sky-500"
                required
              ></textarea>
              <button
                value="Send"
                className="text-white shadow-[5px_5px_38px_5px_rgba(0,0,0,.2)] bg-sky-500 mt-20 w-[8rem] h-[2rem] rounded-xl hover:bg-sky-400"
              >
                Trimite
              </button>
            </form>
            <div className="absolute bottom-0  flex justify-center items-center w-full  xl:w-[15rem] h-[5rem] xl:h-full  bg-gradient-to-t from-sky-600 to-sky-300 text-white right-0 ">
              {" "}
              <div className="flex xl:flex-col text-xl xl:text-xl">
                <a href="tel:+40-761-300-344">
                  <BsTelephone className="relative text-xl top-2 xl:top-[10px] right-2" />

                  <h1 className="px-4 relative left-2 top-[-1rem]">
                    0761 300 344
                  </h1>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/Ciprian-Diculescu-instructor-auto-100865649251803/?hc_ref=ARTEhP-t1xsbH1Pl3AWxyHNil-y2HZ8mZRVgMx7lS4pzOC-xPdD-Ck4FsHiF0LK2hp4&fref=nf&__xts__[0]=68.ARD_KzOqwBb0TQnrGAEYjpUK53b5c4FAxlt-DnI3nKRvuVxOgcJCym2k_zPF84uRrOjeAJvnJzE2tVn3jOQAVBBKZC8WNIDCH5ErqzShQ2TPcdC53b-N0dmtiTZd1ZZ1HRHRdh7DBrSQUgvwSmnvtGmTTVzdCn3DsLISbf9C1xf0HnqmLI7Q4m6_PUF8q_PlbJiHEdokcS38sRUMCvtZepHgUZcGSZS2SF-pYtr88hJdAjlFYRgYz6y8tkHm3Yl7ArLsPeJpvcG99jjR0y0Ze9Pag2BPeFCqoi0sYEglsbF9K3SQ8GbD3PA_JDXkcCAzYel6uodtdLdfjhwS3FDB6y1CCys6cRD7co5uWF9aZ7jzw1i2Q4-XqIerrKB0kpum1-7vVoLQYaSfdtwiKSSEz1HdFw"
                >
                  <h1 className="text-4xl xl:text-5xl  relative xl:top-[16rem] xl:left-14">
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
