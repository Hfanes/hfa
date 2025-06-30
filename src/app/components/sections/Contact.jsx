import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  return (
    <section id="contact" className="c-space mt-10 w-full mx-auto text-center">
      <div className="w-full flex justify-center">
        <div className="flex w-full sm:w-1/2">
          <div className="flex flex-col items-center gap-4 space-y-4 text-lg">
            <h3 className="text-xl sm:text-2xl font-bold">Keep In Touch.</h3>
            <div className="font-lg">
              If you want to know more about me, have a question, or just want
              to say hello, don't hesitate to contact me. I'll get back to you
              as soon as possible.
              <span className="text-accentYellow font-bold"> Let's talk!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
