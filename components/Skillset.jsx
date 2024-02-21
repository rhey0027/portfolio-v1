import 'flowbite';
import Image from 'next/image';
import { FcPortraitMode } from "react-icons/fc";
import { IoIosArrowForward } from 'react-icons/io';

const Skillset = () => {
  return (
    <div className="md:px-5 xl:px-20 skillset max-w-full text-slate-100 font-normal p-5">
      <div
        className="about flex items-center mb-3"
        data-aos="fade-up"
      >
        <FcPortraitMode size={30} />
        <h1 className="font-semibold text-yellow-400 text-[28px] ml-2">
          Skills Acquired.
        </h1>
      </div>
      <div className="w-full md:grid grid-cols-2 gap-7">
        <div className="p-2 mb-4 bg-blue-700 rounded-md" data-aos="fade-up">
          <div
            className="w-[100px] py-1 rounded-full border border-1 text-center mb-5"
            data-aos="fade-up"
          >
            <h3>Frontend</h3>
          </div>
          <div className="container-icons flex justify-between mb-7">
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/html.png"}
                width={50}
                height={50}
                alt="html"
                data-tooltip-target="tooltip-html"
              />
              <div
                id="tooltip-html"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-1 text-sm text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0"
              >
                <p>html5</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300  mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/css.png"}
                width={50}
                height={50}
                alt="css"
                data-tooltip-target="css"
              />
              <div
                id="css"
                className="absolute bg-gray-900 py-1 px-3 rounded-lg inline-block z-10 text-sm text-white transition-opacity duration-150  shadow-sm invisible opacity-0"
              >
                <p>css</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/nextjs.png"}
                width={50}
                height={50}
                alt="next"
                data-tooltip-target="next"
              />
              <div
                id="next"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-1 text-sm text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0"
              >
                <p>next js</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/java.png"}
                width={50}
                height={50}
                alt="jscript"
                data-tooltip-target="jscript"
              />
              <div
                id="jscript"
                role="tooltip"
                className="absolute z-10 bg-gray-900 py-1 px-3 rounded-lg text-sm text-white transition-opacity shadow-sm invisible opacity-0 inline-block duration-150"
              >
                <p>javascript</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/bootstrap.png"}
                width={50}
                height={50}
                alt="bootstrap"
                data-tooltip-target="bootstrap"
              />
              <div
                id="bootstrap"
                role="tooltip"
                className="absolute inline-block py-1 px-3 bg-gray-900 rounded-lg text-sm text-white tooltip z-10 shadow-sm transition-opacity invisible opacity-0 duration-150"
              >
                <p>bootstrap</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/typescript.png"}
                width={50}
                height={50}
                alt="tscript"
                data-tooltip-target="tyscript"
              />
              <div
                id="tyscript"
                role="tooltip"
                className="absolute inline-block py-1 px-3 bg-gray-900 text-sm text-white shadow-sm tooltip rounded-lg invisible opacity-0 z-10 duration-150 transition-opacity"
              >
                <p>typescript</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/tailwind.png"}
                width={50}
                height={50}
                alt="tailwind"
                data-tooltip-target="tailwind"
              />
              <div
                id="tailwind"
                role="tooltip"
                className="absolute inline-block py-1 px-3 bg-gray-900 rounded-lg text-sm text-white tooltip z-10 shadow-sm transition-opacity invisible opacity-0 duration-150"
              >
                <p>tailwind</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300  mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/figma.png"}
                width={50}
                height={50}
                alt="figma"
                data-tooltip-target="figma"
              />
              <div
                id="figma"
                role="tooltip"
                className="absolute inline-block py-1 px-3 bg-gray-900 text-sm text-white shadow-sm tooltip rounded-lg invisible opacity-0 z-10"
              >
                <p>figma</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
          <div className="mb-2 text-end">
            <div data-aos="fade-up">
              <p className="text-sm mb-4 h-[160px]">
                A Front-End Developer is a professional who builds the front
                portion of web application that customers, guests, or clients
                use on a daily basis.
              </p>
            </div>
            <button
              className="btn btn-primary btn-md shadow-md items-center text-slate-300 hover:opacity-70 duration-150"
              data-aos="fade-up"
              onClick={() => document.getElementById("front-desc").showModal()}
            >
              View More
              <IoIosArrowForward
                size={20}
                className="text-orange-500 ml-1 bg-slate-300 rounded-full p-1 cursor-pointer"
              />
            </button>
            <dialog id="front-desc" className="modal text-zinc-900 text-start">
              <div className="modal-box p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg bg-gradient-to-r from-yellow-300 p-2">
                  Job brief
                </h3>
                <p className="py-4">
                  A Front-end developer is responsible for building the
                  &#39;client-side&#39; of web applications. A front-end should
                  be able to translate customer needs into functional and
                  appealing interactive applications.
                </p>
                <p>
                  Creating a user-friendly environment by writing code and
                  moving forward in a career.Should be a tech-savvy
                  professional, who is curious about new digital technologies
                  and aspires to combine usability with visual design.
                </p>
                <p>
                  Ultimately,a front-end developer should be able to create a
                  functional and attractive digital environment for a
                  client/company, ensuring great user experience.
                </p>
                <h3 className="font-bold text-lg mt-6 bg-gradient-to-l from-green-500 p-2">
                  Responsibilities
                </h3>
                <ul className="front-ul">
                  <li className="front-li">
                    Use markup languages like HTML to create user-friendly web
                    pages
                  </li>
                  <li className="front-li">Maintain and improve website</li>
                  <li className="front-li">Design mobile-based features</li>
                  <li className="front-li">
                    Collaborate with back-end developers and web designers to
                    improve usability
                  </li>
                  <li className="front-li">
                    Write functional requirement documents and guides
                  </li>
                  <li className="front-li">
                    Ensure high quality graphic standards and brand consistency
                  </li>
                </ul>
                <h3 className="font-bold text-lg mt-6 bg-gradient-to-r from-indigo-300 p-2">
                  Requirements and Skills
                </h3>
                <ul className="front-ul">
                  <li className="front-li">
                    Hands on experience with markup languages
                  </li>
                  <li className="front-li">
                    Experience with JavaScript, CSS and jQuery
                  </li>
                  <li className="front-li">
                    Familiarity with browser testing and debugging
                  </li>
                  <li className="front-li">
                    Understanding of layout aesthetics
                  </li>
                  <li className="front-li">Knowledge of SEO principles</li>
                </ul>
              </div>
            </dialog>
          </div>
        </div>
        {/* backend */}
        <div className="p-2 mb-4 bg-violet-600 rounded-md">
          <div
            className="w-[100px] py-1 rounded-full border border-1 text-center mb-5"
            data-aos="fade-up"
          >
            <h3>Backend</h3>
          </div>
          <div className="container-icons flex justify-evenly mb-7">
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/mysql.png"}
                width={50}
                height={50}
                alt="sql"
                data-tooltip-target="sql"
              />
              <div
                id="sql"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-1 text-sm text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0"
              >
                <p>sql</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/mongo.png"}
                width={50}
                height={50}
                alt="mongoose"
                data-tooltip-target="mongo"
              />
              <div
                id="mongo"
                className="absolute bg-gray-900 py-1 px-3 rounded-lg inline-block z-10 text-sm text-white transition-opacity duration-150  shadow-sm invisible opacity-0"
              >
                <p>mongoDb</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/java.png"}
                width={50}
                height={50}
                alt="js-script"
                data-tooltip-target="java"
              />
              <div
                id="java"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-1 text-sm text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0"
              >
                <p>javascript</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/typescript.png"}
                width={50}
                height={50}
                alt="tscript"
                data-tooltip-target="tscript"
              />
              <div
                id="tscript"
                role="tooltip"
                className="absolute inline-block py-1 px-3 bg-gray-900 text-sm text-white shadow-sm tooltip rounded-lg invisible opacity-0 z-10"
              >
                <p>typescript</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/python.png"}
                width={50}
                height={50}
                alt="python"
                data-tooltip-target="python"
              />
              <div
                id="python"
                role="tooltip"
                className="absolute inline-block py-1 px-3 bg-gray-900 text-sm text-white shadow-sm tooltip rounded-lg invisible opacity-0 z-10"
              >
                <p>python</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/php.png"}
                width={50}
                height={50}
                alt="php"
                data-tooltip-target="php"
              />
              <div
                id="php"
                role="tooltip"
                className="absolute inline-block py-1 px-3 bg-gray-900 text-sm text-white shadow-sm tooltip rounded-lg invisible opacity-0 z-10"
              >
                <p>php</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/node.png"}
                width={50}
                height={50}
                alt="node"
                data-tooltip-target="node"
              />
              <div
                id="node"
                role="tooltip"
                className="absolute inline-block py-1 px-3 bg-gray-900 text-sm text-white shadow-sm tooltip rounded-lg invisible opacity-0 z-10"
              >
                <p>node</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div
              className="bg-slate-300 mr-2 p-2 rounded-md shadow-md cursor-pointer inline-block hover:bg-white duration-100"
              data-aos="fade-up"
            >
              <Image
                src={"/skillset/git.png"}
                width={50}
                height={50}
                alt="git"
                data-tooltip-target="git"
              />
              <div
                id="git"
                role="tooltip"
                className="absolute inline-block py-1 px-3 bg-gray-900 text-sm text-white shadow-sm tooltip rounded-lg invisible opacity-0 z-10"
              >
                <p>git</p>
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
          <div className="mb-2 text-end">
            <div data-aos="fade-up">
              <p className="text-sm mb-4 h-[160px]">
                A Back-End Developer means working on server-side software,
                which focuses on everything you can&#39;t see on a web
                application. Back-end developers ensure the website performs
                orrectly, focusing on databases, backend logic and functions,
                application programming interface &#40;APIs&#41;,architecture
                and servers.
              </p>
            </div>
            <button
              className="btn btn-warning btn-md items-center text-zinc-900 hover:opacity-70 duration-150"
              data-aos="fade-up"
              onClick={() => document.getElementById("back-desc").showModal()}
            >
              View More
              <IoIosArrowForward
                size={20}
                className="text-orange-500 ml-1 bg-slate-300 rounded-full p-1 cursor-pointer"
              />
            </button>
            <dialog id="back-desc" className="modal text-zinc-900 text-start">
              <div className="modal-box p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg bg-gradient-to-r from-yellow-300 p-2">
                  Job brief
                </h3>
                <p className="py-4">
                  A Backend developer responsibilities include creating,
                  maintaining, testing, and debugging the entire back end of an
                  application or system. This includes the core application
                  logic, databases, data and application integration, API, and
                  other processes taking place behind the scenes. A highly
                  skilled back end developer is a programmer who knows how to
                  analyze user needs to ensure a positive user experience.
                </p>
                <p>
                  skilled back-end developer who are consistently raising the
                  bar for user experience. Working behind the scenes, the ideal
                  candidate will have a unique blend of technical expertise,
                  insatiable curiosity, and analytical mindset. This person
                  should be comfortable working independently as well as with a
                  team in the design and development of mission-critical
                  websites, applications, and layers of infrastructure.
                  Experience with JavaScript, Amazon Web Services &#40;AWS&#41;,
                  Git, or MongoDB is helpful to succeed quickly in this role.
                </p>
                <h3 className="font-bold text-lg mt-6 bg-gradient-to-l from-green-500 p-2">
                  Responsibilities
                </h3>
                <ul className="front-ul">
                  <li className="front-li">
                    Excellent foundation in algorithms, and web design
                  </li>
                  <li className="front-li">
                    MExperience in writing highly secure web applications
                  </li>
                  <li className="front-li">
                    Experience with core AWS web-enabling technologies
                  </li>
                  <li className="front-li">
                    Growth mindset that challenges the status quo and focuses on
                    outside-the-box ideas and solutions
                  </li>
                </ul>
                <h3 className="font-bold text-lg mt-6 bg-gradient-to-r from-indigo-300 p-2">
                  Requirements and Skills
                </h3>
                <ul className="front-ul">
                  <li className="front-li">
                    Experience in designing RESTful APIs, specifically for
                    mobile apps
                  </li>
                </ul>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillset
