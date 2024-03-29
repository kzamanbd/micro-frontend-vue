# Vite + Module Federation

Microservices nowadays is a well-known concept and maybe you are using it in your current company.
Do you know that now you can apply similar ideas on the Frontend?

With Module Federation you can load separately compiled and deployed code into a unique application. This particular task allows you to create a Microfrontend architecture.

Until recently, this task was only a Webpack feature, but now there is a plugin to support Module Federation inside Vite.

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It's the de facto standard for new projects and framework starters.

To understand better the paradigm and the configurations I created a working example of a host that loads a remote application at runtime.
