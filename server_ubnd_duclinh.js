let express = require("express");
let app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");
let PORT = process.env.PORT || 3000;

let server = require("http").Server(app);
let io = require("socket.io")(server);
server.listen(PORT, () => {
  console.log(`Server started ${PORT}`);
});

//Lắng nghe kết nối lên server
io.on("connection", function (socket) {
  console.log("Client connected: " + socket.id);
  socket.on("client-send-nextnumber", (data) => {
    socket.broadcast.emit("server-send-nextnumber", data);
  });
});

app.get("/", function (req, res) {
  res.render("trangchu");
});

//route goi so thu tu
app.get("/ubnd_duclinh_goiso1", function (req, res) {
  res.render("ubnd_duclinh_goiso1");
});

app.get("/ubnd_duclinh_goiso2", function (req, res) {
  res.render("ubnd_duclinh_goiso2");
});

app.get("/ubnd_duclinh_goiso3", function (req, res) {
  res.render("ubnd_duclinh_goiso3");
});

app.get("/ubnd_duclinh_goiso4", function (req, res) {
  res.render("ubnd_duclinh_goiso4");
});

// app.get("/ubnd_duclinh_goiso5", function (req, res) {
//   res.render("ubnd_duclinh_goiso5");
// });

//route danh gia
app.get("/ubnd_duclinh_danhgia1", function (req, res) {
  res.render("ubnd_duclinh_danhgia1");
});

app.get("/ubnd_duclinh_danhgia2", function (req, res) {
  res.render("ubnd_duclinh_danhgia2");
});

app.get("/ubnd_duclinh_danhgia3", function (req, res) {
  res.render("ubnd_duclinh_danhgia3");
});

app.get("/ubnd_duclinh_danhgia4", function (req, res) {
  res.render("ubnd_duclinh_danhgia4");
});

// app.get("/ubnd_duclinh_danhgia5", function (req, res) {
//   res.render("ubnd_duclinh_danhgia5");
// });


//route sodanggoi
app.get("/ubnd_duclinh_sodanggoi", function (req, res) {
  res.render("ubnd_duclinh_sodanggoi");
});
