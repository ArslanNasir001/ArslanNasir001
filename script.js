function calculateBudget() {
    const guestCount = parseFloat(document.getElementById('guestCount').value) || 0;
    const decorBudget = parseFloat(document.getElementById('decorBudget').value) || 0;
    const cateringBudget = parseFloat(document.getElementById('cateringBudget').value) || 0;

    const totalBudget = (decorBudget + cateringBudget) * guestCount;
    document.getElementById('totalBudget').innerText = `Total Budget: $${totalBudget.toFixed(2)}`;
}
