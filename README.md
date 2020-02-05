# 🚨This repo is no longer maintained, our handbook is now available at [liferay.design/handbook](https://liferay.design/handbook) 🔵


----------------

# Design Handbook

[![Built with Electric](https://img.shields.io/badge/built%20with-electric-f3c302.svg?style=flat)](http://electricjs.com)

## Setup

1. Make sure you have [node and npm](https://nodejs.org/en/download/) installed:

```sh
node -v && npm -v
```

2. Install our global dependencies:

```sh
[sudo] npm i -g electric-cli
```

3. Install our local dependencies:

```sh
npm i
```

### Notes

If you don't have the Java SDK installed, you can [easily install](https://www.lonecpluspluscoder.com/2017/04/27/installing-java-8-jdk-os-x-using-homebrew/) with [Homebrew Cask](https://github.com/liferay-design/phresh-n-clean#4-homebrew-cask-link).

## Usage

- Build the site, serve it locally, and watch for any changes:

```
electric run
```

- Deploy to production (send build files to `wedeploy` branch):

```
electric deploy
```
