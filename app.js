let isCheckedIn = false;
let startTime = null;
let timerInterval = null;

function toggleCheckin() {
    const button = document.getElementById('toggleBtn');
    const timerDisplay = document.getElementById('statusTime');
    const statusCard = document.getElementById('statusCard');
    const statusText = document.getElementById('statusText');

    if (!isCheckedIn) {
        // Check In
        isCheckedIn = true;
        startTime = new Date();
        button.textContent = 'Check Out';
        button.classList.add('checkout');
        statusText.textContent = 'Checked In';
        statusCard.classList.add('checked-in');
        statusCard.classList.remove('checked-out');

        // Start timer
        timerInterval = setInterval(() => {
            const now = new Date();
            const diff = new Date(now - startTime);
            const hours = String(diff.getUTCHours()).padStart(2, '0');
            const minutes = String(diff.getUTCMinutes()).padStart(2, '0');
            const seconds = String(diff.getUTCSeconds()).padStart(2, '0');
            timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }, 1000);

    } else {
        // Check Out
        isCheckedIn = false;
        button.textContent = 'Check In';
        button.classList.remove('checkout');
        statusText.textContent = 'Checked Out';
        statusCard.classList.add('checked-out');
        statusCard.classList.remove('checked-in');

        // Stop timer
        clearInterval(timerInterval);

        const endTime = new Date();
        const totalTime = Math.floor((endTime - startTime) / 1000);
        console.log(`Checked out! Total session: ${Math.floor(totalTime / 60)}m ${totalTime % 60}s`);

        // Reset timer display
        timerDisplay.textContent = '00:00:00';
    }
}
