# A frontend GUI concept for CKAN

Find the app at [http://ckan.studiole.uk](http://ckan.studiole.uk)

## Source

This app is run entirely in your browser using [AngularJS](https://angularjs.org).

## Contributing

I'm always on the look out for collaborators so feel free to suggest new features, get in touch or just fork at will.

## Install

If you want to host your own private version or run a local version feel free to follow these [installation instructions](https://gitlab.com/StudioLE/CKAN/blob/master/README.md).

## Usage

Run gulp to produce a build from the app source
```
gulp build
```

In development I recommended using [http-server](https://github.com/indexzero/http-server) to launch `src` and `build` servers at `http://localhost:1337`.

```
http-server src -a localhost -p 1337 -c-1
http-server build -a localhost -p 1337 -c-1
```