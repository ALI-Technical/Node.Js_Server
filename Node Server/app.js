// const http = require("http");
// const PORT = "5000"

// const server = http.createServer(function (req, res) {
//     const pathName = req.url;
//     if (pathName === "/") {
//         res.write("HOME PAGE");
//         res.end()
//     } else if (pathName === "/form") {
//         res.setHeader("Content-Type", "text/html");
//         res.write(`
//               <form method="POST" action="/userdata">
//                 <input placeholder="enter your name" name="username" />
//                 <button>LOGIN</button>
//               </form>`);
//         res.end();
//     } else if (pathName === "/userdata") {
//         // response.write("user data ");
//         let data = "";
//         req.on("data", (chunk) => {
//             console.log("hello");
//             data += chunk;
//         });
//         req.on("end", () => {
//             console.log(data, "data");
//         });
//         res.write("data receieved");
//         res.end();
//     } else {
//         res.write("404: Page Not FOUHd")
//         res.end()
//     }
// })

// server.listen(PORT, console.log(`your server is running on ${PORT}`))
