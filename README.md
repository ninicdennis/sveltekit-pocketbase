# Pocketbase Sveltekit demo

This is a little demo project working with Sveltekit and pocketbase! I am sure i'll add more here once more is done :)

## Developing

First, create an environment variable from `.env.example` and populate the following variables. Be sure to grab the release for your desired version!

run `npm install` to install packages necessary for frontend.

### Linux (Recommended)

An automated script was made to automatically install and put the files correctly! Run the following:

```bash
npm run pocketbase:install:linux
```

## Mac (Recommended)

An automated script was made to automatically install and put the files correctly! Run the following:

```bash
npm run pocketbase:install:mac
```

The only difference with above is I had to add chmod +x for my system, theres a chance this isnt necessary.

### Manual install

If you are not on a linux or a mac, the manual install is still just as simple. Continue to install your pocketbase instance, and extract necessary files in `/backend`.

Once installed, you can run `npm run dev` to run both the backend and frontend simultaneously!

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
