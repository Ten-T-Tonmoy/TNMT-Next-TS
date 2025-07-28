const CodeBlock = () => {
  const programmer = {
    name: "Farhan Hassan Tonmoy",
    email: "turing01754@gmail.com",
    role: "FullStack DEV",
    occupation: "Undergrad Student",
    institute: "University of Rajshahi",
    location: "Demra,Dhaka",
    github: "Ten-T-Tonmoy",
    languages: ["javascript", "typescript", "C++", "C#", "java"],
    tools: [
      "RaylibC++",
      "React/React-Native",
      "NextJs",
      "SpringBoot",
      "Unity",
      "Redux",
      "Prisma",
      "NodeJs",
      "Express",
      "PostgreSQL",
    ],
  };

  return (
    <>
      <div className="h-[100vh]  flex flex-col items-center mt-20 md:mt-8 gap-8 justify-center p-2 w-[92vw] md:max-w-[45vw]">
        <h1 className="text-6xl w-full text-center  font-extrabold  md:mt-4">
          About Me
        </h1>
        <div className="md:w-[90%]">
          {/* header */}
          <div className="bg-gray-800 relative rounded-t-lg p-3 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1 text-end">
              <span className="text-gray-400 text-sm font-mono ">
                programmer.js
              </span>
            </div>
            {/**top color a bit  */}
            <span
              className="absolute inset-x-0 w-full mx-auto
            top-[0px] bg-gradient-to-r from-transparent via-red-600
         to-transparent h-[2px]"
            />
          </div>
          <div
            className="bg-gradient-to-br from-slate-800 via-slate-900
         to-gray-900 rounded-b-lg p-6 font-mono text-sm shadow-2xl border-2 
         border-transparent bg-clip-padding relative "
          >
            {/**top color a bit  */}
            <span
              className="absolute inset-x-0 w-full mx-auto
            top-[0px] bg-gradient-to-r from-transparent via-pink-600
            to-transparent h-[2px]"
            />
            {/* code mimic */}

            <div
              className="absolute inset-0 rounded-b-lg bg-gradient-to-r
           from-blue-500 via-purple-500 to-pink-500 opacity-50 -z-10"
            ></div>
            <div
              className="absolute inset-0.5 rounded-b-lg bg-gradient-to-br 
          from-slate-800 via-slate-900 to-gray-900"
            ></div>
            <div className="relative z-10">
              <div className="text-pink-400">
                <span className="text-purple-400">const</span> programmer ={" "}
                {"{"}
              </div>
              <div className="ml-4 space-y-2 mt-2">
                <div>
                  <span className="text-blue-300">name:</span>{" "}
                  <span className="text-green-300">
                    {`"`}
                    {programmer.name}
                    {`"`}
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-blue-300">email:</span>{" "}
                  <span className="text-green-300">
                    {`"`}
                    {programmer.email}
                    {`"`}
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-blue-300">role:</span>{" "}
                  <span className="text-green-300">
                    {`"`}
                    {programmer.role}
                    {`"`}
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-blue-300">location:</span>{" "}
                  <span className="text-green-300">
                    {`"`}
                    {programmer.location}
                    {`"`}
                  </span>
                  ,
                </div>
                {/* <div>
                <span className="text-blue-300">followers:</span>{" "}
                <span className="text-orange-300">{programmer.followers}</span>,
                </div>
                <div>
                <span className="text-blue-300">following:</span>{" "}
                <span className="text-orange-300">{programmer.following}</span>,
              </div> */}
                <div>
                  <span className="text-blue-300">github:</span>{" "}
                  <span className="text-orange-300">{programmer.github}</span>,
                </div>

                {/* languages and skills part  */}
                <div>
                  <span className="text-blue-300">languages:</span>[
                  <div className="ml-4 mt-2">
                    {programmer.languages.map((skill, index) => (
                      <span key={skill}>
                        <span className="text-green-300">
                          {`"`}
                          {skill}
                          {`"`}
                        </span>
                        {index < programmer.languages.length - 1 ? ", " : ""}
                        {(index + 1) % 3 === 0 &&
                        index < programmer.languages.length - 1
                          ? "\n    "
                          : ""}
                      </span>
                    ))}
                  </div>
                  ]
                </div>

                <div>
                  <span className="text-blue-300">tools/frameworks:</span>[
                  <div className="ml-4 mt-2">
                    {programmer.tools.map((skill, index) => (
                      <span key={skill}>
                        <span className="text-green-300">
                          {`"`}
                          {skill}
                          {`"`}
                        </span>
                        {index < programmer.tools.length - 1 ? ", " : ""}
                        {(index + 1) % 3 === 0 &&
                        index < programmer.tools.length - 1
                          ? "\n    "
                          : ""}
                      </span>
                    ))}
                  </div>
                  ]
                </div>
              </div>
              <div className="text-pink-400 mt-2">{"};"}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// //rest r mock
// const CodeBlock2 = () => (
//   <SyntaxHighlighter
//     language="javascript"
//     style={vscDarkPlus}
//     showLineNumbers
//     customStyle={{
//       borderRadius: "12px",
//       padding: "20px",
//       background: "linear-gradient(135deg, #1e1e2e, #2d2d42)",
//       boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
//       fontSize: "14px",
//       lineHeight: "1.6",
//     }}
//     lineNumberStyle={{ color: "#7e7e8e" }}
//   >
//     {`const programmer = {
//   name: 'Md Nasim Hosen',
//   email: 'mdnasimbosen333@gmail.com',
//   company: 'Next Level Media',
//   location: 'Pabna, Bangladesh',
//   followers: 13,
//   following: 5,
//   repositories: 80,
//   skills: [
//     'ReactJs', 'NextJs', 'Redux',
//     'ExpressJs', 'MongoDB', 'Postgres',
//     'Mongoose', 'Prisma', 'Docker',
//     'AMS', 'Redis'
//   ]
// };`}
//   </SyntaxHighlighter>
// );

export default CodeBlock;
