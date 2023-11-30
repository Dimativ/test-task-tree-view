# Tree-view (test-task)
Developed by Dmytro Lytvynenko (с) 2023

[Link to website](test-task-tree-view.vercel.app)

This repository contains a program with authentication, marketing(landing) page and documents page, where an user can simulate creating of folders. Also application include tree-view created with react-arborist.
## Navigation through document
* [Tools which I used](#Tools-which-I-used)
* [Setup env file](#setup-env-file)
* [Start the application](#Start-the-app)

### Tools which I used

<img align="left" alt="NextJs" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
<img align="left" alt="TypeScript" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
<img align="left" alt="Git" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
<img align="left" alt="React" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
<img align="left" alt="Tailwind" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
<img align="left" alt="GitHub" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
<img align="left" alt="Yarn" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" />
<br />

#

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_KEY
CLERK_SECRET_KEY=YOUR_KEY

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```


### Start the app

```shell
npm i / yarn install
npm run dev / yarn dev
```
