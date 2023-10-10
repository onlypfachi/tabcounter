// const tabs = await chrome.tabs.query({
//     url: [
//       "https://developer.chrome.com/docs/webstore/*",
//       "https://developer.chrome.com/docs/extensions/*",
//     ],
//   });

  // chrome.tabs.query(
  //   queryInfo: object,
  //   callback?: function,
  // );

  // async function sendMessageToActiveTab() {
  //   const tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  //   // const response = await chrome.tabs.sendMessage(tab.id, message);
  //   // TODO: Do something with the response.
  //   return tabs
  // }
  const warningMessage = document.getElementById('warning')

  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions)
                .then(response => {console.log(response)});
    // let current = tab.promiseresult;
    // return tab.index;

  }
  warningMessage.textContent = getCurrentTab();

  // console.log(getCurrentTab());

  // if (getCurrentTab()) {
  //   warningMessage.textContent = "safe";
  // }
  // else {
  //   warningMessage.textContent = "Please delete some tabs";
  // }

//   const collator = new Intl.Collator();
// tabs.sort((a, b) => collator.compare(a.title, b.title));

// const template = document.getElementById("li_template");
// const elements = new Set();
// for (const tab of tabs) {
//   const element = template.content.firstElementChild.cloneNode(true);

//   const title = tab.title.split("-")[0].trim();
//   const pathname = new URL(tab.url).pathname.slice("/docs".length);

//   element.querySelector(".title").textContent = title;
//   element.querySelector(".pathname").textContent = pathname;
//   element.querySelector("a").addEventListener("click", async () => {
//     // need to focus window as well as the active tab
//     await chrome.tabs.update(tab.id, { active: true });
//     await chrome.windows.update(tab.windowId, { focused: true });
//   });

//   elements.add(element);
// }
// document.querySelector("ul").append(...elements);

// const button = document.querySelector("button");
// button.addEventListener("click", async () => {
//   const tabIds = tabs.map(({ id }) => id);
//   const group = await chrome.tabs.group({ tabIds });
//   await chrome.tabGroups.update(group, { title: "DOCS" });
// });