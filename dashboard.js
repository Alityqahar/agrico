class RobotFarmerDashboard {
    // ...existing code dari <script> di index.html...
    constructor() {
        this.data = {
            seeds: [],
            ph: [],
            moisture: [],
            totalSeeds: 0
        };
        this.maxDataPoints = 15;
        this.init();
    }
    // ...lanjutkan seluruh JS dari index.html...
}
// Tidak ada perubahan pada logika JS, Bootstrap hanya untuk tampilan.
document.addEventListener('DOMContentLoaded', function() {
    new RobotFarmerDashboard();
});
