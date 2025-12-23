# Directus Extension Live Preview LAN

This Directus extension allows to load resources from local network when using Live Preview

## Installing

This extension can be installed via Marketplace or by copying `package.json` and `dist` folder into a folder within your Directus `extensions` folder

## Usage

To apply, you need to create a new interface on the collection you have the Live Preview set.
Then, select Live Preview LAN interface (at bottom of the page).
You can select the domains you want to resolve or leave empty. Learn more about this [here](https://wicg.github.io/local-network-access/) and [here](https://docs.google.com/document/d/1QQkqehw8umtAgz5z0um7THx-aoU251p705FbIQjDuGs).

> [!WARNING]
> The interface option "Hidden on Detail" should **not** be set, otherwise will not work.
