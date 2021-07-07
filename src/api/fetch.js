async function fetChUser(counter) {
  try {
    const response = await fetch(`https://randomuser.me/api?page=${counter}`);
    if (response.ok) {
      const user = await response.json();

      return user;
    }
    throw new Error("");
  } catch (error) {
    throw new Error("Something Went Wrong");
  }
}

export { fetChUser };
