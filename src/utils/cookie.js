export const setCookie = (name, value, days) => {
    if (typeof(document) === 'undefined') return;

    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export const getCookie = (name) => {
    if (typeof(document) === 'undefined') return null;

    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        const c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

export const eraseCookie = (name) => {
    if (typeof(document) === 'undefined') return;
    document.cookie = name+'=; Max-Age=-99999999;';  
}