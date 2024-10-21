//framer motion
import { motion } from "framer-motion";
function Resume() {
  return (
    <div className="align-elements">
      <div className="flex justify-between my-20">
        <div>
          <p className=" text-4xl font-mono font-semibold ">Resume</p>
        </div>
        <div>
          <button className="btn btn-warning">Reseme Download</button>
        </div>
      </div>

      <div className="lg:flex lg:justify-between">
        <div>
          <p className="text-2xl font-sans font-bold">
            Work <br /> & Experience
          </p>
        </div>

        <div>
          <div className="lg:flex lg:justify-between gap-10">
            <div>
              <p className=" my-5 lg:my-0 font-sans font-thin">
                October 2024 - Present
              </p>
            </div>

            <dv>
              <p className="text-lg font-sans font-bold mb-3">Frelancer</p>
              <p className="my-5 lg:my-0 lg:w-96 font-sans font-thin">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                eligendi provident, doloribus commodi veritatis assumenda ipsa
                nihil magni reprehenderit sit, laboriosam, eveniet voluptates
                dignissimos.
              </p>
            </dv>
          </div>

          <div className="lg:flex lg:justify-between my-12 gap-10">
            <div>
              <p className="my-5 lg:my-0 font-sans font-thin">
                August 2024 - October 2024
              </p>
            </div>
            <div>
              <p className="text-lg font-sans font-bold mb-3">inSoft Company</p>
              <p className="my-5 lg:my-0 lg:w-96 font-sans font-thin">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                eligendi provident, doloribus commodi veritatis assumenda ipsa
                nihil magni reprehenderit sit, laboriosam, eveniet voluptates
                dignissimos.
              </p>
            </div>
          </div>

          <div className="lg:flex lg:justify-between gap-10 ">
            <div>
              <p className="my-5 lg:my-0 font-sans font-thin">
                April 2024 - July 2024
              </p>
            </div>
            <div>
              <p className="text-lg font-sans font-bold mb-3">iTeach Academy</p>
              <p className="my-5 lg:my-0 lg:w-96 font-sans font-thin">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                eligendi provident, doloribus commodi veritatis assumenda ipsa
                nihil magni reprehenderit sit, laboriosam, eveniet voluptates
                dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-20 border-t-2" />

      <div className="lg:flex lg:justify-between">
        <div>
          <p className="text-xl font-sans font-bold">Education</p>
        </div>

        <div>
          <div className="lg:flex lg:justify-between gap-10  ">
            <div>
              <p className="my-5 lg:my-0 font-sans font-thin">
                September 2022 - Present
              </p>
            </div>
            <div>
              <p className="text-lg font-sans font-bold mb-3">
                Bachalor Digree | Silk Road University
              </p>
              <p className="my-5 lg:my-0 lg:w-96 font-sans font-thin">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                eligendi provident, doloribus commodi veritatis assumenda ipsa
                nihil magni reprehenderit sit, laboriosam, eveniet voluptates
                dignissimos.
              </p>
            </div>
          </div>

          <div className="lg:flex lg:justify-between gap-10  my-12">
            <div>
              <p className="my-5 lg:my-0 font-sans font-thin">
                November 2023 - July 2024
              </p>
            </div>
            <div>
              <p className="text-lg font-sans font-bold mb-3">
                Front End Course | iTeach Academy
              </p>
              <p className="my-5 lg:my-0 lg:w-96 font-sans font-thin">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                eligendi provident, doloribus commodi veritatis assumenda ipsa
                nihil magni reprehenderit sit, laboriosam, eveniet voluptates
                dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-20 border-t-2" />

      <div className="lg:flex lg:justify-between mb-12">
        <div>
          <p className="mb-4 lg:my-0 text-xl font-sans font-bold">
            Skills <br /> & Expertise
          </p>
        </div>
        <div>
          <div>
            <div>
              <p>React Js | Java Scripts</p>
            </div>
            <div>
              <p className="my-5 lg:my-0 lg:w-96 font-sans font-thin  ">
                Experienced with all stages of the development cycle for dynamic
                web projects. Having an in-depth knowledge including advanced
                HTML5, CSS3, SASS, JavaScript, Redux Toolkit, React JS. Strong
                background in management and leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
