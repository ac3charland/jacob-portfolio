export const validateName = (name: string): boolean => {
    if (name && typeof name === 'string' && /^[a-zA-Z .'-]+$/.test(name)) {
        return true
    }
    return false
}

export const validateEmail = (email: string): boolean => {
    if (email && typeof email === 'string' && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        return true
    }
    return false
}

export const validateRequiredString = (str: string): boolean => {
    if (str && typeof str === 'string') {
        return true
    }
    return false
}
