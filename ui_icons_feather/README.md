## INTRODUCTION

The Feather icons module provider for UI Icons.

## INSTALLATION

Install as you would normally install a contributed Drupal module.
See: https://www.drupal.org/docs/extending-drupal/installing-modules for further
information.

### Option 1

Install [Feather](https://feathericons.com/) in this module.

```shell
npm install
```

So your folder structure is:

```
ui_icons_feather
  └── node_modules
    └── eather-icons
      └── dist
        └── icons
          └── ...svg files
```

### Option 2

Copy [feather-sprite.svg](https://unpkg.com/feather-icons/dist/feather-sprite.svg)
in this module.

```
ui_icons_feather
  └── feather-sprite.svg
```

### Option 3

Install files of previous options in the Drupal libraries folder and adapt
`ui_icons_feather.ui_icons`.
