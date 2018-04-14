[![](https://2018.lehighvalley.wordcamp.org/files/2018/04/WordCamp-GearLogo-300x300.png)](https://2018.lehighvalley.wordcamp.org/)

# WordCamp Lehigh Valley
[#wclv2018](https://2018.lehighvalley.wordcamp.org/)

The theme used for WordCamp Lehigh Valley's 2018 website is [CampSite 2017](https://make.wordpress.org/community/2017/05/08/the-new-wordcamp-base-theme-campsite-2017/) and is a starter theme based on Underscores ([_s](https://underscores.me/)). It offers 23 widget areas and a new *Day of Event* template, making it easier to highlight the most important info for attendees during the WordCamp.

We are using Remote CSS and a webhook in this repo to automatically sync the root style.css file with the WordCamp.org site. Everytime a change is pushed, our styles will be downloaded, sanitized, minified, stored as a local copy, then enqueued as a stylesheet alongside the theme's default stylesheet. Pretty sweet! 

## Git Workflow

### First Contribution
1. If you don't have one already, create a [github profile](https://github.com). Message or email me your username so I can add you as a contributor. (You can also star this repository if you'd like :star2:)
2. In your terminal or command line program, move into the directory you'd like the project to reside.
```
cd ~/sites
```
3. Clone the repository. This will create a folder called wclv2018 containing all of the content on the repo.
```
git clone https://github.com/koakekuna/wclv2018.git
```
4. Make changes to the repo with your text editor or IDE of choice. Remember only the root `style.css` file is synced with the WordCamp site.
5. Add your changes. This will stage all of the changed files to be commited.
```
git add .
```
6. Make a commit with a short message. It's recommended to use an action verb in the present tense for the first word (e.g. fix, update, remove, etc...).
```
git commit -m "add header styles"
```
7. Push your changes to the repo. Congratulations! The WordCamp site should be updated with the changes that you made. :thumbsup:
```
git push
```

### Subsequent Contributions
1. Make sure you're in your local wclv2018 folder. Pull the most recent changes from the repository.
```
git pull
```
2. Repeat steps 4-7 from the instructions for First Contribution.

This is a simplified workflow, but it should get you up and running. If you have any questions, reach out to me, or check out the incredible free book [Pro Git](https://git-scm.com/book/en/v2) for further documentation and examples.

## Local Development Setup
To be completed :construction:

## Style Guide
To be completed :construction:

### Colors
```
$color-brand-primary: #990303;
$color-brand-secondary: #d39740;
$color-text: #252525;
$color-text-weak: #383838
$color-text-strong: #000000;
$color-text-weak-invert: #dfdfdf;
$color-text-strong-invert: #ffffff;
```

## Useful links

[Setting up Your WordCamp Theme](https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/web-presence/setting-up-your-wordcamp-theme/)

[WordCamp Style Guide](https://github.com/lucijanblagonic/wordcamp-style-guide)

[Local Development for WordCamp Websites](https://ryelle.codes/2016/07/local-development-for-wordcamp-websites/)

[Installing a WordPress meta-environment](https://github.com/WordPress/meta-environment/blob/master/docs/install.md)
