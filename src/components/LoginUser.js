export const LoginUser = () => {
    const validUser = JSON.parse(localStorage.getItem('loginDetail'));
    if (validUser && Object.keys(validUser).length) {
        return true
    } else {

        return false
    }
}
