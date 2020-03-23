# Bionexo Ubs App

The purpose of project is permit to user find and show all Ubs's around any geolocation based on their position on map, custom position or by filter input. This project get their data on an API created to load these infos.

You can access API documentation [here](https://github.com/YukiFinamore/bionexo_ubs_api)

## Installing

Clone the project on your directory with this command line:

```
git clone git@github.com:YukiFinamore/bionexo_ubs.git
```

## Starting with React

This project works with:
* Node v10.15.3 [installation guide](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)

After make sure this prerequisites are installed and configured, inside the directory project, run on your terminal:

```
npm install
```

If you got success message, run:

```
npm start
```

If you got a message calling to run the project on another port because `localhost:3000` is already running, just run `Yes` on your terminal.

## Getting Started

With the project running, access on your browser [localhost](http:localhost:3001) (Default localhost)
On your root path (first screen) you will see a search input and google maps as background. The Ubs's are rendered according center of map with range of 5kms. According user drag and drop the map, Ubs's are reloaded. The search input permit to user find all Ubs's on Brazil with specific or 'ilike' name, address or city, when user submit filter input, a list with 10 Ubs's according ther filter will be rendered on left side of map, if user scroll the list to the end and the API give back more than 10 Ubs's, the list will be update with more 10 or with more respective Ubs's that filter request. If you click on the name of some Ubs Card, you will be redirected to their specific location on map.

The map have markers to show where is the Ubs, if you hover some marker a box with more infos will be rendered.

That's all :)
You can find and see all Ubs's around Brazil.

## Authors

* **Yuki Finamore** - [github](https://github.com/YukiFinamore)
