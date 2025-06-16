## INTRODUCTION

The [Font Awesome Icons](https://fontawesome.com) module provider for UI Icons.

## INSTALLATION

Install as you would normally install a contributed Drupal module.
See: https://www.drupal.org/docs/extending-drupal/installing-modules for further
information.

Download and extract [Font Awesome For The Web](https://fontawesome.com/download)
and rename to avoid version number in path.

So your folder structure is:

```
fontawesome-free
  └── svgs
    └── _GROUP_
  └── sprites
    └── SVG sprite files
  └── css
    └── _FILES_
  └── webfonts
    └── _FILES_
```

_Note_: Depending the version (SVG, Sprite, Font), some folders can be removed.

## Update

When updating, the new version must be set in `ui_icons_fontawesome.icons.yml`
and `ui_icons_fontawesome.libraries.yml`.
