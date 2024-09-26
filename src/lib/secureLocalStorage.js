import secureLocalStorage from "react-secure-storage";

// set access token
export const setAccessToken = (accessToken) => {
  secureLocalStorage.setItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY,
    accessToken
  );
};

// get access token
export const getAccessToken = () => {
  const accessToken = secureLocalStorage.getItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY
  );
  return accessToken;
};

// // remove access token
// export const removeAccessToken = () => {
//   secureLocalStorage.removeItem(
//     import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY
//   );
// };
// get access token
// export const getAccessToken = () => {
//   const accessToken =
//     "eyJraWQiOiI1OGQwZWU4Mi05MzQwLTRjZWItOTlhOS1hNWZhZDNkMDczN2QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJBY2Nlc3MgVG9rZW4iLCJhdWQiOlsibmV4dGpzIiwicmVhY3RqcyJdLCJzY29wZSI6InN0dWRlbnQiLCJpc3MiOiJ3ZWIiLCJleHAiOjE3MjcxODk3NzksImlhdCI6MTcyNzE4Nzk3OSwianRpIjoidGgua2ltaG91dEBnbWFpbC5jb20ifQ.cH5WsZt5GFEUIpJ9LvOUgWI4aRuire3GAworKCsPuMIv5AGxN4DcIEf-Ns5zeVaAQjtqrVEQdczo3RqYr88cXrEsaunbbWubmRuMhZXFSbz5MDM-wAGmnMYkaYNRq__Q4EjY3YNgTemWrUiYuNViwt8J9DxQplweC4rmISJfqngYTVBaGMzYOmhOLtliTqi6OQBZgk9nmKalduSZ7cZtkt3cnNi6bRQM-bIERfvUNClKgpVWKDf8fzkWBqQPwcsJbgp5sz3bXSU6rFhvMoA6ns_e7V2NNASdGDUGcfOl7zgWnAYrLiCE5FMa36jfsOZlL3tB48-jplhHds4taZrUHccPP8j_7MtjCcazjvUSUmk7Xd769rdTknAPkft-2045tgPu6dsXxWv0E74DHq1X_khqXz759mURdAYOxeb8vqt_ovM7B-UmyzY0cPm7U7BV2qQBHd48C9ILqECRc-HAkzAasrz1MnKfRrk9QppfoKwxkHZs7MQI-wqXN_-IYtO_cJpdtJXUv5sjoXCBK9s41sjps4mKYDOCKcI3Ai6p_3QYVShA8JJE5Re-YLlDZGuoDT56tAh6_IIuiRLZpTJN1y4NGyAZD1BT0uuRUwsowHeeFQbpE6AUiqrne8PxaSJ6RdAV4kSybFVkqBwr6SbboowAZHmt8OUiepyypdR3wk4";
//   return accessToken;
// };
