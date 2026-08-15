const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index");
});
app.post("/register", (req, res) => {
    const { name, email, college, course } = req.body;

    res.render("result", {
        name: name,
        email: email,
        college: college,
        course: course
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});