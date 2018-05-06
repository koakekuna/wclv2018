# WordCamp Lehigh Valley
**[#wclv2018](https://2018.lehighvalley.wordcamp.org/)**

[![WordCamp Lehigh Valley Logo](https://2018.lehighvalley.wordcamp.org/files/2018/04/WordCamp-GearLogo-150x150.png)](https://2018.lehighvalley.wordcamp.org/)

<!-- TOC depthFrom:2 depthTo:3 -->

- [Intro to WordCamp Development](#intro-to-wordcamp-development)
  - [Theme Summary](#theme-summary)
  - [Remote CSS](#remote-css)
- [How To Contribute With Git and Source Control](#how-to-contribute-with-git-and-source-control)
  - [First Contribution](#first-contribution)
  - [Subsequent Contributions](#subsequent-contributions)
- [How To Contribute With Sass and Gulp](#how-to-contribute-with-sass-and-gulp)
- [Setting Up A Local Development Environment](#setting-up-a-local-development-environment)
- [Style Guide](#style-guide)
  - [Branding](#branding)
- [Helpful Resources for WordCamp Development](#helpful-resources-for-wordcamp-development)

<!-- /TOC -->

## Intro to WordCamp Development

WordCamp sites are a different breed than regular WordPress sites - they are actually a multisite installation from WordCamp.org. This means that there are unique features and restrictions that help to standardize all WordCamp websites. For instance you gain access to a "Coming Soon" page, which gives you a quick placeholder while you develop the site. But you also can't add custom PHP or Javascript. You can read more details in the [handbook](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/web-presence/setting-up-your-wordcamp-theme/).

### Theme Summary

The theme used for WordCamp Lehigh Valley's 2018 website is [CampSite 2017](https://make.wordpress.org/community/2017/05/08/the-new-wordcamp-base-theme-campsite-2017/) and is a lightweight theme based on the popular starter theme [Underscores](https://underscores.me/) (often abbreviated "_s"). It is highly customizable with 23 widget areas, and it also features a *Day of Event* template, making it easier to highlight the most important info for attendees during the day.

### Remote CSS

WordCamps come with a really handy feature called Remote CSS. Found under Apperance > Remote CSS, you'll find you can add a git repository. We use a webhook in this repo to automatically sync a `style.css` file with the live site. Everytime a commit is pushed, our styles will be downloaded, sanitized, minified, stored as a local copy, and finally enqueued as a stylesheet alongside the theme's default stylesheet. Pretty sweet! For this repository, the `style.css` file is found in the root of the directory.

## How To Contribute With Git and Source Control

If this is your first time using git and source control, these instructions will provide a simplified workflow to easily collaborate with others and contribute to the project. This ensures that everyone working on the project is working on the latest version as well as providing a complete history of all changes made in case we ever need to revert back to a previous version.

If you'd like a great resource for learning more about git, then check out the free book [Pro Git](https://git-scm.com/book/en/v2) :blue_book: for further documentation and examples.

### First Contribution

1. If you don't have one already, create a [github profile](https://github.com). Message or email me your username so I can add you as a contributor to this project. (If you'd like, you can also star this repository :star2:)

2. In your terminal or command line program, move into the directory you'd like the project to reside.

```bash
cd ~/sites
```

3. Clone the repository. This will create a folder called wclv2018 containing all of the content on the repo.

```bash
git clone https://github.com/koakekuna/wclv2018.git
```

4. Make changes to the repo with your text editor or IDE of choice. Remember only the root `style.css` file is synced with the WordCamp site.

5. Add your changes. This will stage all of the changed files to be commited.

```bash
git add .
```

6. Make a commit with a short message. It's recommended to use an action verb in the present tense for the first word (e.g. fix, update, remove, etc...).

```bash
git commit -m "add header styles"
```

7. Push your changes to the repo. Congratulations – The WordCamp site should be updated with the changes that you made! :tada: :thumbsup:

```bash
git push
```

### Subsequent Contributions

1. Make sure you're in your local wclv2018 folder. Pull the most recent changes from the repository.

```bash
git pull
```

2. Repeat steps 4-7 from the instructions for First Contribution.

## How To Contribute With Sass and Gulp

We can use "build tools" to automate repetitive tasks such as preprocessing, minification, adding browser support, and much more! There are many options out there to accomplish this, but this tutorial will use [Gulp](https://gulpjs.com/).

The process is essentially to provide an input, watch Gulp do it's magic, and then we're given an output.

Our input will be a Sass file `./style.scss`. [Sass](https://sass-lang.com/) is super handy and helps to keep our code DRY as well as provide neat features like variables, nesting, mixins, and much more.

The gulp magic (for now) simply converts our Sass into standard CSS that browsers can read. Eventually, I'll add support for linting, cross-browser compatibility, source maps, and minification.

Since we're using the Remote CSS feature, the final output will always be the `./style.css` file.

:warning: If someone has made changes to `./style.css`, and you save changes to `./style.scss`, you'll overwrite the changes from the other person. Not to worry, with git we can always recover, but ideally all contributors should only work on `./style.scss`.

1. In your terminal, change directories into wherever your local copy of this repository resides.

  ```bash
  cd ~/sites/wclv2018
  ```

2. Pull the most recent changes

```bash
git pull
```

3. Install all the libraries and modules we'll need for development, as specified in `package.json`. This will create a node_modules folder and stash them inside here.

```bash
npm install
```

4. Convert the sass found in `style.scss` to regular css in `style.css`

```bash
gulp sass
```

5. If you feel like you'll be making a lot of edits in a short amount of time, you can also "watch" for changes to `style.scss`. Anytime you  save the file, it will automatically run `gulp sass` to convert the file to css.

```bash
gulp sass:watch
```

## Setting Up A Local Development Environment

1. Follow the steps outlined [here](https://github.com/WordPress/meta-environment/blob/master/docs/install.md). These instructions will take you through installing VVV, creating a file called `vvv-custom.yml`, and specifying options for the meta-environment. Since we only care about WordCamps, we can keep `"wordcamp.test": true`, and set everything else to `false`.

2. Make sure you've reprovisioned. After that's complete start up VVV.

```bash
vagrant reload --provision
vagrant up
```

3. If you go to [http://wp-meta.test](http://wp-meta.test), you should see links to all of the available sites. Log in to central.wordcamp.test with `admin` and `password`. Go to the network admin dashboard and navigate to sites. You could add an entirely new site, but I ran into some issues, and it's easier to just alter the blank `2014.new-site.wordcamp.test`.
  i. Go to Edit Site, change the Site Address on the Info tab, as well as Siteurl and Home in the Settings tab. I named it `http://2018.lehighvalley.wordcamp.test`.
  ii. In `vagrant-local/www/wordpress-meta-environment/wordcamp.test/provision/vvv-hosts`, you'll see a list of all the WordCamp URLs. Change `2014.new-site.wordcamp.test` to `2018.lehighvalley.wordcamp.test`.
  iii. In your terminal, we need to reload VVV - `vagrant reload`

4. The URL `2018.lehighvalley.wordcamp.test` should work now! To change themes to CampSite 2017, you'll need to enable it at the network level. If you need to copy the live site, sign into it and go to dashboard > Tools > export. This will export a `.xml` file. Then in your local site, go to Dashboard > Tools > WordPress (Run Importer). You might still have to manually update somethings in the customizer.

## Style Guide

### Branding

#### Colors :traffic_light:

```scss
$color-brand-primary: #990303;
$color-brand-secondary: #d39740;
$color-text: #252525;
$color-text-weak: #383838;
$color-text-strong: #000000;
$color-text-weak-invert: #dfdfdf;
$color-text-strong-invert: #ffffff;
```

#### Fonts :abc:

[Carrois Gothic](https://fonts.google.com/specimen/Carrois+Gothic) is used for the headers
[Monteserrat](https://fonts.google.com/specimen/Montserrat) is used for body text, buttons, forms, etc.

## Helpful Resources for WordCamp Development

[WordCamp Website Tips and Tricks](https://www.thomasvitale.com/wordcamp-website-tips-tricks/)

[Setting up Your WordCamp Theme](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/web-presence/setting-up-your-wordcamp-theme/)

[WordCamp Style Guide](https://github.com/lucijanblagonic/wordcamp-style-guide)

[Local Development for WordCamp Websites](https://ryelle.codes/2016/07/local-development-for-wordcamp-websites/)

[Installing a WordPress meta-environment](https://github.com/WordPress/meta-environment/blob/master/docs/install.md)
