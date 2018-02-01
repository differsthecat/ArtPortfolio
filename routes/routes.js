var appRouter = function(app) {
	app.get("/home", function(req, res) {
    res.send("Hello! :D");
});
}

module.exports = appRouter;