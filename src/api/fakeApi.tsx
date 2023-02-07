interface User {
  email: string | null;
  password: string | null;
}

let user = {
  email: 'frontend@isawesome.com',
  password: 'cool',
};

export const fakePostUser = (data: User): Promise<boolean> =>
  new Promise((resolve, reject) => {
    if (data?.email !== user.email) {
      return setTimeout(() => reject(new Error('User not found')), 250);
    }
    if (data?.password !== user.password) {
      return setTimeout(() => reject(new Error('Wrong password')), 250);
    }

    setTimeout(() => resolve(true), 1000);
  });
