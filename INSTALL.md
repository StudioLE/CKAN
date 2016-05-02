## Install

Clone the repository

```
git clone https://gitlab.com/StudioLE/CKAN.git ckan
```

Enter the directory and install the dependencies. For this step you'll need to have [Node.js](https://nodejs.org/) and [bower](http://bower.io/) installed.

```
cd ckan
npm install
```

Behind the scenes this will also call `bower install`.

Now run the default gulp task to produce an up to date build

```
gulp build
```

Everything's now ready, just point your preferred web server to either the `build` or `src` directory.
