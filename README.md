# Crunch

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

a website that share some information about some movies

## ⚙️ Tech Stack

<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react" width="40" height="40"/> </a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a>
<a href="[https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://www.typescriptlang.org/)" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="typescript" width="40" height="40"/> </a>
<a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a>
<a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="firebase" width="40" height="40"/> </a>
<a href="https://yarnpkg.com/" target="_blank" rel="noreferrer"> <img src="https://seeklogo.com/images/Y/yarn-logo-F5E7A65FA2-seeklogo.com.png" alt="yarn" width="40" height="40"/> </a>

## 📚 Structure

**Atomic Design Pattern**

Structured with Atomic Design Pattern Methodology

<p align="center">
<img src="https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png" alt="atomic-design-method" width="500"/>
</p>

```structure
1. ./src/components/atoms -> to store component atoms
2. ./src/components/molecules -> to store component molecules
3. ./src/components/organisms -> to store component organisms
4. ./src/components/templates -> to store component templates
5. ./src/components/pages -> to store component page
```

reference : https://atomicdesign.bradfrost.com/chapter-2/

**Structure Folder**

```others
1. ./src/assets -> to store image and style css
2. ./src/components -> to store component web app.
3. ./src/store -> to store global state
4. ./src/config -> to store some configuration in the application
5. ./src/router -> to store all consist routes of the application
6. ./src/utilities -> to store consists of some repeatedly used functions that are commonly used in the project.
7. ./src/hooks -> to store all the hooks function that commonly used
8. ./src/constant -> to store all the environment of the app
```

## 📥 Installation

### Install crunch-web with yarn

Clone the project

```bash
$ git clone https://github.com/fahmiaf13/crunch-web.git
```

Go to the project directory

```bash
$ cd crunch-web
```

Install dependencies

```bash
$ yarn
```

Start the server

```bash
$ yarn dev
```

Copyright (c) 2022 Fahmi Achmad
