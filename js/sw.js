window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register("/worker.js").then((registration) => {
      console.log("Service worker registration succeeded:", registration);
    }, /*catch*/(error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
  } else {
    console.error("Service workers are not supported.");
  }
});
