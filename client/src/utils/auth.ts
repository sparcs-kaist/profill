export const saveToken = (token: string): void => {
  localStorage.setItem('profill-jwt', token);
};

export const logout = (): void => {
  localStorage.removeItem('profill-jwt');
};