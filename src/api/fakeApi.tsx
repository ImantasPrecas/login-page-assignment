interface User {
  email: string | null;
  password: string | null;
}

let user = {
  email: 'frontend@isawesome.com',
  password: 'cool',
};

export const fakePostUser = (data: User): Promise<User> =>
  new Promise((resolve, reject) => {
    if (data?.email !== user.email) {
      return setTimeout(() => reject(new Error('User not found')), 250);
    }
    if (data?.password !== user.password) {
      return setTimeout(() => reject(new Error('Wrong password')), 250);
    }

    setTimeout(() => resolve(data), 1000);
  });
