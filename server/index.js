const port = process.env.PORT || 3000;
const {app, Campuses, Students }= require('./app');

app.get('/api/campuses', async(req, res, next) => {
    try {
        const campuses = await Campuses.findAll()
        res.send(campuses)
    } catch (error) {
        next(error)
    }
})

app.get("/api/campuses/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const campus = await Campuses.findByPk(id);
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/campuses/:id', async (req, res, next) => {
  try {
    const toDelete = req.params.id
    await Campuses.destroy({where:{
      id: toDelete
    }});
  } catch (error) {
    next(error);
  }
});

app.get("/api/students", async (req, res, next) => {
  try {
    const students = await Students.findAll();
    res.send(students);
  } catch (error) {
    next(error);
  }
});

app.get("/api/students/:id", async (req, res, next) => {
  try {
    const {id} = req.params
    const student = await Students.findByPk(id);
    res.send(student);
  } catch (error) {
    next(error);
  }
});

app.delete("/api/students/:id", async (req, res, next) => {
  try {
    const toDelete = req.params.id;
    await Students.destroy({
      where: {
        id: toDelete,
      },
    });
  } catch (error) {
    next(error);
  }
});

app.listen(port, ()=> console.log(`listening on port ${port}`));
