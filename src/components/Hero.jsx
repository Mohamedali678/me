import image from "../assets/me.jpg"
import resume from "../assets/Resume.pdf"

function Hero() {
  return (
    <div id="hero" className="sm:mx-20 mx-10 pt-32 flex flex-col sm:flex-row justify-center gap-20 ">
      <div className=" sm:w-[600px]">
        <h1 className="sm:text-[44px] text-3xl font-bold">Hi, I am Mohamed,</h1>
        <h1 className="sm:text-[44px] text-2xl mt-2  font-bold">Software Engineer</h1>
        <p className="my-4">
          I have several years of experience in software development, working
          with modern tech stacks including front-end, back-end, and full-stack
          technologies.
        </p>
       <a href={resume} download> <button  className="bg-secondaryColor hover:bg-white hover:border-2 rounded-full hover:border-secondaryColor hover:text-secondaryColor px-8 py-3 text-[20px] mt-10  text-thirdColor">Download Resume</button></a>
      </div>
      <img  className="rounded-full sm:w-[350px] h-[300px] sm:h-[350px] border-b-8 border-r-8 border-secondaryColor object-cover" src={image} />

    </div>
  );
}

export default Hero;
