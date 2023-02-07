interface User {
  email: string | null;
  password: string | null;
}

let user = {
  email: 'frontend@isawesome.com',
  password: 'cool',
};

export const fakePostUser = (data: User) =>
  new Promise((resolve, reject) => {
    if (data?.email !== user.email && data?.password !== user.password) {
      return setTimeout(() => reject(new Error('Users not found')), 250);
    }

    setTimeout(() => resolve(true), 1000);
  });
