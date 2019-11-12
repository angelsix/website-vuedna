console.log("scroll required");

class DnaScroll {
  constructor() {
    console.log("scroll created");

    // Callbacks to fire when the page scrolls
    this.scrollCallbacks = [];
    this.scrollInstantCallbacks = [];

    // Tracking Id for the scroll timer
    this.scrollTimerCallbackId = null;

    // The last time we scrolled
    this.lastScrollTime = 0;

    // How often to update when scrolling
    this.scrollUpdateInterval = 100;
  }

  // Adds a function to be called whenever the page scrolls
  OnScroll(callback) {
    // Add callback to list
    this.scrollCallbacks.push(callback);
  }

  // Adds a function to be called whenever the page scrolls
  OnScrollInstant(callback) {
    // Add callback to list
    this.scrollInstantCallbacks.push(callback);
  }

  // Processes what should happen when the page scrolls
  ProcessOnScroll() {
    // Loop each callback
    ForEach(this.scrollCallbacks, function(item) {
      // Call the callback
      item();
    });
  }

  // Processes what should happen when the page scrolls
  ProcessOnScrollInstant() {
    // Loop each callback
    ForEach(this.scrollInstantCallbacks, function(item) {
      // Call the callback
      item();
    });
  }

  // Gets the scroll position top of the window
  ScrollPositionY() {
    return (
      window.ScrollY ||
      window.scrollY ||
      window.scrollTop ||
      document.getElementsByTagName("html")[0].scrollTop
    );
  }
}

// Global single instance
window.$DnaScroll = new DnaScroll();

// Hook into page scrolling
window.addEventListener("scroll", function() {
  // Process
  requestAnimationFrame(() => window.$DnaScroll.ProcessOnScrollInstant());
  // If the last callback has finished
  // or it has never been fired
  if (!window.$DnaScroll.scrollTimerCallbackId) {
    // If this is the first time we have scrolled
    if (window.$DnaScroll.lastScrollTime == 0) {
      // Update the last scroll time
      window.$DnaScroll.lastScrollTime = new Date().getTime();

      // Process
      requestAnimationFrame(() => window.$DnaScroll.ProcessOnScroll());
    }

    // Either way, start a timeout to fire after the interval
    window.$DnaScroll.scrollTimerCallbackId = setTimeout(function() {
      // Once timer is done, clear the Id so it can be called again
      window.$DnaScroll.scrollTimerCallbackId = null;

      // Update the last scroll time
      window.$DnaScroll.lastScrollTime = new Date().getTime();

      // Process
      requestAnimationFrame(() => window.$DnaScroll.ProcessOnScroll());
    }, window.$DnaScroll.scrollUpdateInterval);
  }
});

export default window.$DnaScroll;
