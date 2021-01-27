let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:4000";
    break;
  case "planted-client.herokuapp.com":
    APIURL = "https://jo-planted.herokuapp.com";
    break;
}

export default APIURL;
