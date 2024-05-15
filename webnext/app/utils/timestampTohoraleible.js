export default function asd({ timestamp }) {
    const timestampTohoraleible = (timestamp) => {
        if (!timestamp || isNaN(timestamp)) {
            return "Tiempo inválido";
        }

        const currentTime = new Date().getTime();
        const difference = currentTime - timestamp;

        const minutes = Math.floor(difference / 60000);
        const seconds = Math.floor((difference % 60000) / 1000);
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        let timeString = '';

        if (hours > 0) {
            timeString += `${hours} hora${hours > 1 ? 's' : ''}`;
            if (remainingMinutes > 0 || seconds > 0) {
                timeString += `, `;
            }
        }

        if (remainingMinutes > 0) {
            timeString += `${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''}`;
            if (seconds > 0) {
                timeString += ` y `;
            }
        }

        if (seconds > 0) {
            timeString += `${seconds} segundo${seconds > 1 ? 's' : ''}`;
        }

        return timeString;
    };

    const readableTimestamp = timestampTohoraleible(timestamp);

    return (
        <span>{readableTimestamp}</span>
    );
}
