/**
 *
 * DO NOT MODIFY THIS FILE
 * DO NOT MODIFY THIS FILE
 * DO NOT MODIFY THIS FILE
 *
 * Consider functions in this file to represent API endpoints.
 * Their implementation should be a black box.
 *
 */

export interface User {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
}

// Acts as our database
const users: User[] = [];

// Return all users
export async function getUsers(): Promise<User[]> {
  await requestDelay();
  return JSON.parse(JSON.stringify(users));
}

// Creates a user with the given details and returns their generated ID.
export async function createUser(
  firstName: string,
  lastName: string,
  email: string
): Promise<User> {
  // Just the fields together with some random string
  await requestDelay();
  const userId: string = `${firstName}${lastName}${email}-${Math.random()
    .toString()
    .slice(-5)}`;
  return createUserWithId(firstName, lastName, email, userId);
}

// Creates a user with the given details and with the given ID.
export async function createUserWithId(
  firstName: string,
  lastName: string,
  email: string,
  userId: string
): Promise<User> {
  await requestDelay();
  const user = {
    userId,
    email,
    firstName,
    lastName,
  };
  users.push(user);
  return user;
}

// Removes a user with the given ID
export async function removeUser(userId: string): Promise<Boolean> {
  await requestDelay();
  const userIndex = users.findIndex((user) => user.userId === userId);

  if (userIndex > -1) {
    users.splice(userIndex, 1);
    return true; // user removed
  } else {
    throw new Error("user not found");
  }
}

// allows waiting for provided amount of milliseconds or random value from range 20-100
// used to simulate network delay in API endpoints.
function requestDelay(ms?: number) {
  const delay = ms || getRandomInt(20, 100);
  return new Promise((r) => setTimeout(r, delay));
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
