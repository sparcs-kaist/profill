export const saveToken = (token: string): void => {
  localStorage.setItem('biseo-jwt', token);
};

export const logout = (): void => {
  localStorage.removeItem('biseo-jwt');
};