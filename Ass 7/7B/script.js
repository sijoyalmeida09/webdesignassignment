let interval;
let time = 0;

const timeLabel = document.getElementById('time');
const datePicker = document.getElementById('datePicker');

// Set the date picker to today's date
const today = new Date().toISOString().split('T')[0];
datePicker.value = today;

// Formatting the time into "HH:MM:SS"
const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const updateLabel = () => {
    timeLabel.textContent = formatTime(time);
};

const start = async () => {
    if (!interval) {
        interval = setInterval(() => {
            time++;
            updateLabel();
        }, 1000);
    }
};

const stop = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
};

const reset = () => {
    stop();
    time = 0;
    updateLabel();
};
