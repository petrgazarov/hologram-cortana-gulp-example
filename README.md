# Hologram, cortana and gulp example

This repo is an example of setup of a living styleguide and is designed to enable anyone to spin up a styleguide in less than 5 minutes.
It comes with gulp setup to compile your CSS into one application.css which can then be deployed to a remote host and used in your app.

I used these awesome libraries:

- [Hologram](https://github.com/trulia/hologram) by Trulia
- [Cortana](https://github.com/Yago/Cortana) by Yago
- [gulp](https://github.com/gulpjs/gulp)

The styleguide is set up with [gulp-stylus](https://github.com/stevelacy/gulp-stylus) but you can easily hook up any other CSS preprocessor,
by adding an appropriate gulp plugin to `preprocess` gulp task.

## Development

After checking out the repo, run the following to install the dependencies.
```
rbenv install 2.2.0
gem install bundler
bundle install
npm install
bower install
```

Run `npm run dev` to start the dev server in a watch mode. After building the assets, this task will watch for filesystem changes to the source assets, and automatically trigger recompilation.

Add your code to the `/src` directory.

## Living styleguide

When the dev server is running (`npm run dev`), you will be able to access the styleguide at `http://localhost:8888/`.
In a separate terminal session, you can open this page directly with `npm run open`.

## Versioning and Release

It is recommended that you bump the package version number (do so in `package.json` file) with every deploy.

This way, any applications importing this code can use versioned assets to ensure that development of this repo won't accidentally break styles elsewhere.

## Contributing

For bugs or improvements, please open an issue.

## TODO

- [ ] Add deploy script to AWS S3
