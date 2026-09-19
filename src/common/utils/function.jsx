
export const checkIsLogin = () => {
    if(!localStorage.getItem('userToken')) {
        window.location.href='/login';
    }
}