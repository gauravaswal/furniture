
export const SigninValidation = (data) => {
    let error = {}
    if (!data.email) {
        error.email = "Email is required*"
    }
    else if (!data.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
        error.email = "Please enter valid email*"
    }
    if (!data.password) {
        error.password = "Password is required*"
    }
    return error
}