export const isLogged = ({auth}) => auth.isLogged;
export const getUser = ({auth}) => auth.user;
export const getLoadingUserStatus = ({auth}) => auth.isLoadingUser;