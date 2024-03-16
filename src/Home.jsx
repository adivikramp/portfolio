import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section className="h-screen flex w-full" id="home">
      <div className="w-0 lg:w-1/5" />
      <div
        className="w-full lg:w-4/5 bg-center bg-cover h-full text-white flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('./images/bgHero2.jpg')",
        }}
      >
        <div>
          <p className="mb-8 text-xl lg:text-4xl text-center">Welcome !</p>
          <ReactTyped
            className="font-bold text-3xl lg:text-6xl"
            strings={[
              "I'm Aditya.",
              "A Final Year Student.",
              "A Frontend Developer.",
            ]}
            typeSpeed={40}
            backSpeed={20}
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
