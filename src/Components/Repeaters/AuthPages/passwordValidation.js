export const passwordValidation = (data) => {
    if (data.Password.length >= 8 && data.Password.match(/[0-9]/g) && data.Password.match(/[A-Z]/g) && data.Password.match(/[a-z]/g) && data.Password.match(/[^A-Za-z0-9]/g)) {
        return "good";
    } else {
        return "bad"
    }
}