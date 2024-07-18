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



export { convertToVietnamese }