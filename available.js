// List of available hospitals by blood type
const hospitals = {
    "A+": ["Hospital A", "Hospital B", "Hospital C"],
    "A-": ["Hospital D", "Hospital E"],
    "B+": ["Hospital F", "Hospital G"],
    "B-": ["Hospital H"],
    "O+": ["Hospital I", "Hospital J", "Hospital K"],
    "O-": ["Hospital L", "Hospital M"],
    "AB+": ["Hospital N"],
    "AB-": ["Hospital O", "Hospital P"]
};

// Function to check blood availability and display hospitals
document.getElementById("check-availability").addEventListener("click", function() {
    const bloodType = document.getElementById("blood-type").value;
    const resultSection = document.getElementById("result");

    // Clear any previous results
    resultSection.innerHTML = "";

    // Check if blood type is available
    if (hospitals[bloodType] && hospitals[bloodType].length > 0) {
        resultSection.innerHTML = `
            <p>The blood type <strong>${bloodType}</strong> is available in the following hospitals:</p>
            <div class="hospitals">
                <ul>
                    ${hospitals[bloodType].map(hospital => `<li>${hospital}</li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        resultSection.innerHTML = `<p>Sorry, the blood type <strong>${bloodType}</strong> is not available at the moment.</p>`;
    }
});
