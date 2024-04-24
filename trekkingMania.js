function calculatePeakPercentages(input) {
  let groupCount = parseInt(input.shift()); // Read the number of groups
  let totalClimbers = 0; // Initialize total climbers count
  let climbersPerPeak = [0, 0, 0, 0, 0]; // Initialize climbers count for each peak

  // Loop through each group
  for (let i = 0; i < groupCount; i++) {
    let groupSize = parseInt(input.shift()); // Read the group size
    totalClimbers += groupSize; // Add the group size to the total climbers count

    // Increment climbers count for the corresponding peak based on group size
    if (groupSize <= 5) {
      climbersPerPeak[0] += groupSize; // Musala
    } else if (groupSize <= 12) {
      climbersPerPeak[1] += groupSize; // Montblanc
    } else if (groupSize <= 25) {
      climbersPerPeak[2] += groupSize; // Kilimanjaro
    } else if (groupSize <= 40) {
      climbersPerPeak[3] += groupSize; // K2
    } else {
      climbersPerPeak[4] += groupSize; // Everest
    }
  }

  // Calculate and print the percentage of climbers for each peak
  for (let i = 0; i < climbersPerPeak.length; i++) {
    let percentage = (climbersPerPeak[i] / totalClimbers) * 100;
    console.log(percentage.toFixed(2) + "%");
  }
}

// Test the function with sample input
calculatePeakPercentages([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
