import DnaScroll from "@/modules/dna.scroll.core.js";

class DnaScrollDown {
  constructor() {
    console.log("scrolldown constructor");

    // Keep track of if we are scrolled down or up
    this.scrolledDown = false;

    // The number of pixels down to detect we have scrolled down from top
    this.scrollDownDetectStart = 50;

    // How many more pixels needed to scroll back up to trigger up scroll
    // This prevents the browsers micro-scrolls if the header reduces in
    // size and causes a few pixels of scroll to happen making a constant
    // loop of adding/removing the scorll classes
    this.scrollBackOverdrive = 40;

    // Get any elements that want to listen to scroll down events
    this.scrollDownItems = document.querySelectorAll("[data-scrolldown-class]");

    // Every time the page scrolls...
    DnaScroll.OnScroll(() => {
      // Get scroll position
      var windowTop = DnaScroll.ScrollPositionY();

      // If we have not scrolled down
      // and we are now scrolled down...
      if (!this.scrolledDown && windowTop > this.scrollDownDetectStart) {
        // Flag we have scrolled down
        this.scrolledDown = true;

        // For each element...
        ForEach(this.scrollDownItems, function(item) {
          // Add the desired class
          item.classList.add(item.getAttribute("data-scrolldown-class"));
        });
      }
      // Else if we scrolled back up (at least 20px )...
      else if (
        this.scrolledDown &&
        windowTop <=
          Math.max(0, this.scrollDownDetectStart - this.scrollBackOverdrive)
      ) {
        // Flag we are not scrolled down
        this.scrolledDown = false;

        // For each element...
        ForEach(this.scrollDownItems, function(item) {
          // Add the desired class
          item.classList.remove(item.getAttribute("data-scrolldown-class"));
        });
      }
    });
  }

  // Hook all elements that want to monitor for scroll
  // scrollDownDetectStart = position in pixels at which to start detecting a scroll
  Hook(scrollDownDetectStart = 50) {
    console.log("scroll hooked");

    this.scrollDownDetectStart = scrollDownDetectStart;

    // Find any elements with a data-scrolldown-class attribute
    // and adds that class to them when we scroll from the top of the the page
    this.scrollDownItems = document.querySelectorAll("[data-scrolldown-class]");
  }

  Unhook() {
    console.log("scroll unhooked");
    this.scrollDownItems = null;
  }
}

// Single global instance
window.$DnaScrollDown = new DnaScrollDown();

export default window.$DnaScrollDown;
