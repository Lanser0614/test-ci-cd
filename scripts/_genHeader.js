const genHeader = (token, referer = null, local = null, origin = null) => {
  return {
    accept: "application/json",
    "accept-language": local,
    authorization: token,
    "content-type": "application/json",
    "sec-ch-ua":
      '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "sec-gpc": "1",
    Referer: referer,
    Origin: origin,
  };
};
output.genHeader = genHeader;
