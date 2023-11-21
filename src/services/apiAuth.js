// import supabase, { supabaseUrl } from "./supabase";

export async function login({ username, password }) {
  const loginResponse = await fetch(
    `${import.meta.env.VITE_API_URL}api/auth/local`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: username, password }),
    }
  );

  if (!loginResponse.ok) {
    throw new Error(`HTTP error! Status: ${loginResponse.status}`);
  }

  const loginData = await loginResponse.json();

  return loginData;
}

export async function forgotPassword({ email }) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}api/auth/forgot-password`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

export async function resetPassword({ password, confirmationPassword, code }) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}api/auth/reset-password`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
        passwordConfirmation: confirmationPassword,
        code,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Response error ${response.status}`);
  }
  const responseData = await response.json();

  return responseData;
}

export async function signup({ password, username, email }) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}api/auth/local/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
        username,
        email,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Response error ${response.status}`);
  }
  const responseData = await response.json();

  return responseData;
}

// export async function signup({ fullName, email, password }) {
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: {
//         fullName,
//         avatar: "",
//       },
//     },
//   });

//   if (error) throw new Error(error.message);

//   return data;
// }

// export async function login({ email, password }) {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) throw new Error(error.message);

//   return data;
// }

// export async function getCurrentUser() {
//   const { data: session } = await supabase.auth.getSession();
//   if (!session.session) return null;

//   const { data, error } = await supabase.auth.getUser();

//   if (error) throw new Error(error.message);
//   return data?.user;
// }

// export async function logout() {
//   const { error } = await supabase.auth.signOut();
//   if (error) throw new Error(error.message);
// }

// export async function updateCurrentUser({ password, fullName, avatar }) {
//   // 1. Update password OR fullName
//   let updateData;
//   if (password) updateData = { password };
//   if (fullName) updateData = { data: { fullName } };

//   const { data, error } = await supabase.auth.updateUser(updateData);

//   if (error) throw new Error(error.message);
//   if (!avatar) return data;

//   // 2. Upload the avatar image
//   const fileName = `avatar-${data.user.id}-${Math.random()}`;

//   const { error: storageError } = await supabase.storage
//     .from("avatars")
//     .upload(fileName, avatar);

//   if (storageError) throw new Error(storageError.message);

//   // 3. Update avatar in the user
//   const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
//     data: {
//       avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
//     },
//   });

//   if (error2) throw new Error(error2.message);
//   return updatedUser;
// }
