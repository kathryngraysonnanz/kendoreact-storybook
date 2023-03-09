# KendoReact Storybook

This project is a Storybook instance that has been pre-loaded with all 100+ [KendoReact](https://www.telerik.com/kendo-react-ui) UI components. It will be updated with any new components after [every major release](https://www.telerik.com/kendo-react-ui/components/changelogs/ui-for-react/).

**Want to play with it before you fork?** [Live demo here!](https://kathryngraysonnanz.github.io/kendoreact-storybook)

This is intended to be a blank slate for you and your team to edit, customize, and build on top of. To that end, it currently includes no documentation beyond PropTypes (full KendoReact component documentation can be found [here](https://www.telerik.com/kendo-react-ui-develop/components/introduction/)) and no styling beyond the default KendoReact theme (learn more about theming [here](https://www.telerik.com/kendo-react-ui-develop/components/styling/)).

**Fork this repo to jump-start your own KendoReact Storybook!**

## Storybook Integrations

The following addons have been installed to this Storybook instance:
  - @storybook/addon-a11y
  - aria-live-storybook-addon
  - storybook-addon-pseudo-states

Note that all of these addons are accessibility-related. KendoReact is, by default, built to be accessible. You can read more about our commitment to accessibility and technical specifications [here](https://www.telerik.com/kendo-react-ui-develop/components/accessibility/)). However, custom styling and changes can sometimes create inaccessible components. We encourage you to use the accessibility testing addons to ensure that the components are still meeting accessibility standards.

Beyond that, we have refrained from customizing the Storybook instance so that you have a fresh start for your new project. Check out [the Storybook Integrations Library](https://storybook.js.org/integrations) to find more useful addons.

## GitHub Pages Support

This project also includes support for publishing to GitHub Pages, in the form of the [`storybook-deployer`](https://github.com/storybookjs/storybook-deployer) tool. This is primarily so that this project can be explored without needing to be run locally; if you do not plan to publish your Storybook instance then it can be removed with no consequences.   

## Reporting Issues  

If you find any bugs, errors, or other issues with this project, please reach out to us! The KendoReact Developer Advocate and primary maintainer of this repo is Kathryn Grayson Nanz. You can email her at `nanz @ progress.com` or contact her via Twitter `@kathryngrayson` with any questions or comments related to this project or KendoReact in general.

## Running Storybook

Use `npm run storybook` to launch the Storybook instance!

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
