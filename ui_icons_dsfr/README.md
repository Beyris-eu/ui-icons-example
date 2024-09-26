## INTRODUCTION

The DSFR icons module provider for UI Icons.

## INSTALLATION

Install as you would normally install a contributed Drupal module.
See: https://www.drupal.org/docs/extending-drupal/installing-modules for further
information.

Install [DSFR icons](https://www.npmjs.com/package/@gouvfr/dsfr) in this module.

```shell
npm install
```

So your folder structure is:

```
└── node_modules
  └── @gouvfr
    └── dsfr
      └── dist
        └── icons
          └── _GROUP_
```

To use the name version with UI Icons CKEditor5, you must add to your theme the
corresponding libraries:

```yml
ckeditor5-stylesheets:
  - node_modules/@gouvfr/dsfr/dist/core/core.css
  - node_modules/@gouvfr/dsfr/dist/utility/icons/icons.css
```
