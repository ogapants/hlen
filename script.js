var url = new URL(window.location.href);
var hl = url.searchParams.get("hl");
if (hl != "en") {
  url.searchParams.set("hl", "en");
  window.location.replace(url);
}
