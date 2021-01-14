let APIURL = "";
switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:3000";
    break;
  case "jo-plantedapp.herokuapp.com":
    APIURL = "https://jo-plantedapp.herokuapp.com/";
    break;
  default:
    APIURL = null;
}
export default APIURL;
