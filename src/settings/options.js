document.addEventListener("DOMContentLoaded", () => {
  browser.storage.local.get("use-quote").then(
    result => {
      if (typeof result["use-quote"] === "undefined") {
        document.querySelector("#quote").checked = true;
      } else {
        document.querySelector("#quote").checked = result["use-quote"];
      }
    },
    error => {
      console.log(`Error: ${error}`);
    }
  );
  browser.storage.local.get("link-to-source").then(
    result => {
      if (typeof result["link-to-source"] === "undefined") {
        document.querySelector("#link").checked = true;
      } else {
        document.querySelector("#link").checked = result["link-to-source"];
      }
    },
    error => {
      console.log(`Error: ${error}`);
    }
  );
});

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  browser.storage.local.set({
    "use-quote": document.querySelector("#quote").checked
  });
  browser.storage.local.set({
    "link-to-source": document.querySelector("#link").checked
  });
});