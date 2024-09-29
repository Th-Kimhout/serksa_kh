//login
export async function login(values) {
  //   convert value to json
  const body = JSON.stringify(values);
  try {
    // method fetch
    const response = fetch(`${import.meta.env.VITE_BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    }).then((res) => res.json());
    const data = await response;

    return data;
  } catch (error) {
    console.log(error);
  }
}

//register
export async function register(values) {
  const body = JSON.stringify(values);
  try {
    const response = fetch(`${import.meta.env.VITE_BASE_URL}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    }).then((res) => res.json());
    const data = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
}

// verify
export async function verify(values) {
  //   convert value to json
  const body = JSON.stringify(values);
  try {
    // method fetch
    const response = fetch(`${import.meta.env.VITE_BASE_URL}auth/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    }).then((res) => res.json());
    const data = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
}
