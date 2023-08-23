---
title: Setup Github Pages Tutorial
user: ChobbyCode
date: 2023/08/22 10:01 +0100
layout: post
permalink: /blog/SetupGithubPages
showInFeed: false
---

{::comment} 
    Don't use h3 tags as they appear as seperate posts
{:/comment}

> ## Follow this tutorial in Video:

{% include youtube.html id="JD7UyrWiXJg" %}

> ## Requirements

You will need a installation of Visual Studio Code (with Github Codespaces extension), a installation of git, and a github account

> ## Tutorial

In this tutorial, I will show you how to setup your own fully functioning github pages website. Like the one you are reading this on.

> ## 1.

You are going to want to create a new github repo. Name it [yourUserName].github.io, mine is chobbycode.github.io. This would mean the website would be https://chobbycode.github.io, and yours would be https://[yourUserName].github.io.

![creatingRepo](..\assets\GithubPagesTutorial\GithubPagesTutorial-1.PNG){:class="img-responsive"}

## **MAKE SURE TO ADD A README TO MAKE IT EASIER!!**

> ## 2.

Once you have created your github repo, it currently thinks it is a normal repo. We need a way to say that it is a website. You can do this by going to the settings, under Code & Automation and going to Pages. Where it says none, sellect the main branch and save. Now leave the page and wait for the website to start.

![creatingRepo](..\assets\GithubPagesTutorial\GithubPagesTutorial-2.PNG){:class="img-responsive"}

After a while of clicking f5 to reload the page (it should only take this long the first time), the box that says deployment should be green. Not red or yellow. This means our website is now online. We can now again navigate back to the same settings menu and in the Pages section there should be a visit site button. After clicking on the button, you will be on the website.

> ## 3.

Next open up Visual Studio Code and clone the repository. After cloning the repository, delete the readme file as we don't need it anymore.

Below are some userful git commands you can use:

## Adds to the commiting


{% include codeBlock.html text="git add --all<br>git add {filename}" copy="git add --all git add {filename}"%}

## Makes the commit

{% include codeBlock.html text="git commit -m '{message}'" copy="git commit -m '{message}'"%}

## Syncs the data with the remote repo

{% include codeBlock.html text="git push<br>git pull" copy="git pull git push"%}

> ## 4.

Then add some html files to the repo from Visual Studio Code, in these files add your website. You should know basic html for this otherwise I don't know, learn it.

In the following order, run...

{% include codeBlock.html text="git add --all<br>git commit -m 'Added Webpage'<br>git push<br>git pull" copy="git add --all git commit -m 'Added Webpage' git push git pull"%}

> ## Later On...

In a later installment of this tutorial, I will tell you how you can set up your own fully functioning Blog Page using Jekyll. With copy code buttons and on forth. Jekyll is quite confusing and I actually use it on this website