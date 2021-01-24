export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '213123123123123123213',
        user: {
          name: 'Lucas',
          email: 'lucassms9@hotmail.com',
        },
      });
    }, 2000);
  });
}
