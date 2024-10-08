// Set the tab theme
function setTheme(theme) {
  document.body.setAttribute("theme", theme);
  localStorage.setItem("theme", theme);
}

// Set the tab name & icon
function setTab(
  name = document.querySelector("#tabname").value,
  icon = document.querySelector("#tabicon").value,
) {
  localStorage.setItem("tabName", name);
  localStorage.setItem("tabIcon", icon);

  document.title = name;
  document.querySelector("link[rel='shortcut icon']").href = icon;
  if (localStorage.getItem("tabName"))
    document.querySelector("#tabname").value = localStorage.getItem("tabName");
  if (localStorage.getItem("tabIcon"))
    document.querySelector("#tabicon").value = localStorage.getItem("tabIcon");
}

const tabPresets = {
  google: { name: "Google", icon: "https://www.google.com/favicon.ico" },
  drive: {
    name: "My Drive - Google Drive",
    icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png",
  },
  docs: {
    name: "Google Docs",
    icon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico",
  },
  classroom: {
    name: "Home",
    icon: "https://ssl.gstatic.com/classroom/ic_product_classroom_32.png",
  },
  default: {
    name: "SLA",
    icon: "https://status.sillylittle.tech/assets/status_pages_v2/favicons/maintenance-ede24b7d5f20832cad20ad3745dac7afe16404eee1ad021db9c1585d7cd60815.png",
  },
};
// Set tab presets
function setTabPreset(tab) {
  setTab(tabPresets[tab].name, tabPresets[tab].icon);
}

if (localStorage.getItem("tabName"))
  document.querySelector("#tabname").value = localStorage.getItem("tabName");
if (localStorage.getItem("tabIcon"))
  document.querySelector("#tabicon").value = localStorage.getItem("tabIcon");
if (localStorage.getItem("theme"))
  document.querySelector("#theme-select").value = localStorage.getItem("theme");

const themeSelect = document.getElementById("theme-select");

themeSelect.addEventListener("change", () => {
  document.body.setAttribute("theme", themeSelect.value);
  localStorage.setItem("theme", themeSelect.value);
});

if (localStorage.getItem("panickey"))
  document.querySelector("#panickey").value = localStorage.getItem("panickey");
if (localStorage.getItem("panicurl"))
  document.querySelector("#panicurl").value = localStorage.getItem("panicurl");

let detecting = false;
// Handle panic key autodetection
function detectPanic() {
  const key = document.querySelector("#panickey");
  const button = document.querySelector("#panickeybtn");
  button.disabled = true;
  button.innerHTML = "Press any key...";

  detecting = true;
  document.addEventListener("keydown", detectPanicHandler);

  // Autodetection of panic key
  function detectPanicHandler(e) {
    key.value = e.key;
    localStorage.setItem("panickey", e.key);
    button.innerHTML = "Auto-detect panic key";
    button.disabled = false;
    detecting = false;

    document.removeEventListener("keydown", detectPanicHandler);
  }
}
// Set the panic KEY, when this is pressed go to the panic URL
function setPanicKey() {
  const key = document.querySelector("#panickey");
  localStorage.setItem("panickey", key.value);
}
// Set the panic URL to go too when the panic key is pressed
function setPanicUrl() {
  const url = document.querySelector("#panicurl");
  localStorage.setItem("panicurl", url.value);
}
