import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <section className="h-auto flex w-full" id="contact">
      <div className="w-0 lg:w-1/5"></div>
      <div className="w-full lg:w-4/5 bg-[#343a40] text-white h-full flex-col py-12">
        <div className="w-full px-4" data-aos="fade-up">
          <div className="text-white relative px-4 py-10 bg-[#212529] shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Connect with Me! 👋</h1>
              <div className="flex flex-col lg:flex-row w-full justify-evenly mt-12">
                <i className="fa-solid fa-phone text-md lg:text-xl my-2">
                  <span className="mx-4">+91-9131934027</span>
                </i>
                <i className="fa-solid fa-envelope text-md lg:text-xl my-2">
                  <span className="mx-4">adileads1@gmail.com</span>
                </i>
                <i className="fa-brands fa-instagram text-md lg:text-xl font-bold my-2">
                  <span className="mx-4">instagram.com/aditya_vikram24/</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
