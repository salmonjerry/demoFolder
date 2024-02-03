
function convertToNewYork(){
    const indianTime = new Date();

    const newYorkTime = indianTime.toLocaleString('en-US', {timeZone: 'America/New_York' });

    const resultContainer = document.getElementById('result');

    resultContainer.textContent = `New York Time: ${newYorkTime}`;
}
