const API_KEY = "AIzaSyA1sV1zogZLKni9rU3_dMKvV856s6IICaw";
// const API_KEY2 = "AIzaSyAbZLvyOgDoGlnaNMidFJ3ypCVtT3Yp8HQ";
// const API = "asdfghsbsajdbasb";
const channelID = "UCJemdKovMBJkfb8XF2GxU3g";

export const Request = {
  url: `/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=20`,
};
