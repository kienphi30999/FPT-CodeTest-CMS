export const fetchApi = async (url, method, callback, handleErr) => {
  fetch(url, {
    method,
    cache: "no-cache",
    headers: { "Cache-Control": "no-cache" },
  })
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch((err) => handleErr(err));
};

export const updateApi = async (url, method, data, callback, handleErr) => {
  fetch(url, {
    method,
    body: data,
    cache: "no-cache",
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch((err) => handleErr(err));
};
