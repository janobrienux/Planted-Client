let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:4000";
    break;
  case "https://planted-client.herokuapp.com/":
    APIURL = "https://jo-planted.herokuapp.com/";
    break;

  default:
    APIURL = "";
}

export default APIURL;
