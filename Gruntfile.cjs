module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      dev: {
        options: {
          optimization: 1,
        },
        files: { "src/assets/css/main.less.css": "src/assets/css/less/main.dev.less" },
      },
      main: {
        options: {
          optimization: 1,
        },
        files: { "src/assets/css/main.less.css": "src/assets/css/less/main.dev.less" },
      },
      prod: {
        options: {
          syncImport: true,
          compress: true,
          yuicompress: true,
          optimization: 2,
        },
        files: { "src/assets/css/main.less.css": "src/assets/css/less/main.prod.less" },
      },
    },
    concat: {
      css: {
        src: ["src/assets/css/less/import.css", "src/assets/css/main.less.css"],
        dest: "src/assets/css/main.css",
      },
    },
    cssmin: {
      css: {
        src: "src/assets/css/main.css",
        dest: "src/assets/css/main.min.css",
      },
    },
    copy: {
      default: {
        files: [
          {
            src: "src/assets/css/main.css",
            dest: "src/assets/css/main.min.css",
          },
        ],
      },
    },
    clean: {
      css: ["src/assets/css/main.less.css"],
    },
    watch: {
      css: {
        files: ["src/assets/css/less/*.less", "src/assets/css/less/*.css", "src/assets/css/less/inc/*.less", "src/assets/css/less/inc/**/*.less"],
        tasks: ["less:main", "concat:css", "copy"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("default", ["less:dev", "concat:css", "copy", "watch"]);
  grunt.registerTask("prod", ["less:prod", "concat:css", "cssmin", "clean"]);

};