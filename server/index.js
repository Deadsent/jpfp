const port = process.env.PORT || 3000;
const {app, Campuses, Students }= require('./app');

app.get('/api/campuses', async(req, res, next) => {
    try {
        const campuses = await Campuses.findAll()
        console.log(campuses, "campuses log")
        res.send(campuses)
    } catch (error) {
        next(error)
    }
})

app.get("/api/students", async (req, res, next) => {
  try {
    const students = await Students.findAll();
    console.log(students, "campuses log");
    res.send(students);
  } catch (error) {
    next(error);
  }
});

app.listen(port, ()=> console.log(`listening on port ${port}`));
