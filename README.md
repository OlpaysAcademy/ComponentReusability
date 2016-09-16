# ComponentReusability

Conventions regarding reusability of components between react and react native

* One folder per Component
* index.js decides whether to export Component.js or Component.container.js based on whether it is a dumb component or not
* Component local logic goes into Component.base.js (https://github.com/benoitvallon/react-native-nw-react-calculator/)
* Component platform specific render function go into Component.web.js, Component.native.js
* Component app specific logic goes into Component.container.js
