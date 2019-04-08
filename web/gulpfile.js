const gulp = require("gulp");
const webserver = require("gulp-webserver");
const sass = require("gulp-sass");
gulp.task("server", function() {
	return gulp.src("./src")
		.pipe(webserver({
			port: 9090,
			proxies: [{
					"source": "/api/getdata",
					"target": "http://localhost:3000/users/api/getdata"
				},
				{
					"source": "/api/getadd",
					"target": "http://localhost:3000/users/api/getadd"
				},
				{
					"source": "/api/getdel",
					"target": "http://localhost:3000/users/api/getdel"
				}
			]
		}))
})
// gulp.task("scss", function() {
// 	return gulp.src("./src/sass/**/*.scss")
// 		.pipe(sass())
// 		.pipe(gulp.dest("./src/css"))
// })
// gulp.task("watch", function() {
// 	gulp.watch("./src/sass/**/*.scss", gulp.series("scss"))
// })
gulp.task("default", gulp.series("server"))
