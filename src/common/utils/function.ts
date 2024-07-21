const convertToVietnamese = (timeString: string): string => {
    const [time, ampm] = timeString.split(" ");
    const [hours, minutes, seconds] = time.split(":");

    let vietnameseAmPm: string;
    if (ampm === "AM") {
        vietnameseAmPm = "SA";
    } else {
        vietnameseAmPm = "CH";
    }

    if (parseInt(hours) >= 18) {
        vietnameseAmPm = "TO";
    }

    return `${hours}:${minutes}:${seconds} ${vietnameseAmPm}`;
}

const getLocal = (key: string): string | null => {

    return localStorage.getItem(key);
}

const setLocal = (key: string, data: string): void => {
    localStorage.setItem(key, data);
}

const removeLocal = (key: string): string | null => {

    return localStorage.getItem(key);
}

export { convertToVietnamese, getLocal, setLocal, removeLocal }