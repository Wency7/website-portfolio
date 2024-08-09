import Summary from "@/static/Summary";
import Timeline from "@/static/Internship";

function About() {
    return (
      <div
        className="bg-inherit justify-center"
        id="About"
      >
        <div className="flex justify-center items-center">
          <div className="flex flex-row w-full">
            <div className="flex text-center lg:text-justify lg:w-1/2 w-full flex-col lg:p-10">
              <Summary />
            </div>
            <div className="lg:flex hidden w-1/2 flex-col pt-10 lg:pr-8 ">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
