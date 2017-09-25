var buildPath = './styleguide'
var sourcePath  = './src';

module.exports = {
  buildPath: buildPath,
  sourcePath: sourcePath,
  stylus: {
    src: sourcePath + '/**/*.{styl}',
    srcFile: sourcePath + '/application.styl',
    dest: buildPath,
    settings: {
      indentedSyntax: true
    }
  }
};
