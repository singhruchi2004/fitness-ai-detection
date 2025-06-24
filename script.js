// Function to add hover effect for exercise descriptions
document.querySelectorAll(".exercise").forEach((exercise) => {
    exercise.addEventListener("mouseover", function () {
        let exerciseName = this.querySelector("h2").innerText;
        showDescription(exerciseName, this);
    });
    exercise.addEventListener("mouseout", function () {
        removeDescription(this);
    });
});

// Function to show descriptions
function showDescription(exerciseName, element) {
    let descriptions = {
        "Cardio": "Boosts heart health and burns calories.",
        "Deadlift": "Strengthens lower back, glutes, and hamstrings.",
        "Plank": "Core-strengthening exercise for stability.",
        "Pull-up": "Builds upper body and grip strength.",
        "Biceps": "Increases arm strength and muscle tone.",
        "Dumbbell-Bench-Press": "Targets chest, shoulders, and triceps.",
        "Dumbbell-Flys": "Isolates chest muscles for better growth."
    };

    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("exercise-desc");
    descriptionDiv.innerText = descriptions[exerciseName] || "Great Exercise!";
    descriptionDiv.style.position = "absolute";
    descriptionDiv.style.background = "white";
    descriptionDiv.style.color = "black";
    descriptionDiv.style.padding = "5px 10px";
    descriptionDiv.style.borderRadius = "5px";
    descriptionDiv.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.3)";
    descriptionDiv.style.top = "100%";
    descriptionDiv.style.left = "50%";
    descriptionDiv.style.transform = "translateX(-50%)";
    descriptionDiv.style.fontSize = "14px";

    element.appendChild(descriptionDiv);
}

// Function to remove descriptions
function removeDescription(element) {
    let desc = element.querySelector(".exercise-desc");
    if (desc) {
        desc.remove();
    }
}

// Function to enlarge image on click
document.querySelectorAll(".exercise img").forEach((img) => {
    img.addEventListener("click", function () {
        let fullScreenDiv = document.createElement("div");
        fullScreenDiv.style.position = "fixed";
        fullScreenDiv.style.top = "0";
        fullScreenDiv.style.left = "0";
        fullScreenDiv.style.width = "100vw";
        fullScreenDiv.style.height = "100vh";
        fullScreenDiv.style.background = "rgba(0, 0, 0, 0.8)";
        fullScreenDiv.style.display = "flex";
        fullScreenDiv.style.justifyContent = "center";
        fullScreenDiv.style.alignItems = "center";
        fullScreenDiv.style.cursor = "pointer";
        fullScreenDiv.addEventListener("click", function () {
            this.remove();
        });

        let fullScreenImg = document.createElement("img");
        fullScreenImg.src = img.src;
        fullScreenImg.style.maxWidth = "80%";
        fullScreenImg.style.maxHeight = "80%";
        fullScreenImg.style.borderRadius = "10px";
        fullScreenImg.style.boxShadow = "0 4px 10px rgba(255,255,255,0.3)";

        fullScreenDiv.appendChild(fullScreenImg);
        document.body.appendChild(fullScreenDiv);
    });
});

// BMI Calculator
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        document.getElementById("bmi-result").innerText = "Please enter both weight and height.";
        return;
    }

    height = height / 100; // Convert cm to meters
    let bmi = (weight / (height * height)).toFixed(2); // BMI formula

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight 🟡";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight ✅";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight 🟠";
    } else {
        category = "Obese 🔴";
    }

    document.getElementById("bmi-result").innerHTML = `Your BMI: <strong>${bmi}</strong> <br> Category: <strong>${category}</strong>`;
}


// Add a button for BMI calculator
let bmiButton = document.createElement("button");
bmiButton.innerText = "Check Your BMI";
bmiButton.style.position = "fixed";
bmiButton.style.bottom = "20px";
bmiButton.style.right = "20px";
bmiButton.style.background = "#2575FC";
bmiButton.style.color = "white";
bmiButton.style.padding = "10px 15px";
bmiButton.style.border = "none";
bmiButton.style.borderRadius = "5px";
bmiButton.style.cursor = "pointer";
bmiButton.style.boxShadow = "2px 4px 8px rgba(0,0,0,0.2)";
bmiButton.addEventListener("click", calculateBMI);

document.body.appendChild(bmiButton);
function generateWorkoutTimetable() {
    let workoutPlan = [
        { day: "Monday", type: "Cardio + Strength", exercises: "Jump Rope, Squats, Push-ups, Dumbbell Rows", duration: "45 min" },
        { day: "Tuesday", type: "HIIT", exercises: "Burpees, Mountain Climbers, Jump Lunges", duration: "30 min" },
        { day: "Wednesday", type: "Strength Training", exercises: "Deadlifts, Bench Press, Plank", duration: "45 min" },
        { day: "Thursday", type: "Active Recovery", exercises: "Brisk Walking, Cycling, Yoga", duration: "30-40 min" },
        { day: "Friday", type: "Full-Body HIIT", exercises: "Sprinting, Kettlebell Swings, Box Jumps", duration: "40 min" },
        { day: "Saturday", type: "Strength + Core", exercises: "Dumbbell Squats, Russian Twists, Pull-ups", duration: "45 min" },
        { day: "Sunday", type: "Rest / Light Yoga", exercises: "Stretching, Meditation, Walking", duration: "30 min" }
    ];

    let table = document.getElementById("workout-table");
   table.innerHTML = "<tr><th>Day</th><th>Workout Type</th><th>Exercises</th><th>Duration</th></tr>";

   workoutPlan.forEach(workout => {
        let row = `<tr>
           <td>${workout.day}</td>
            <td>${workout.type}</td>
            <td>${workout.exercises}</td>
            <td>${workout.duration}</td>
        </tr>`;
        table.innerHTML += row;
    });
}
//Sample workout dataset
const workouts = [
    { name: "Cardio", type: "Endurance", intensity: "High", muscles: ["Heart", "Legs"] },
    { name: "Deadlift", type: "Strength", intensity: "High", muscles: ["Back", "Legs"] },
    { name: "Plank", type: "Core", intensity: "Medium", muscles: ["Abs", "Back"] },
    { name: "Pull-up", type: "Strength", intensity: "High", muscles: ["Arms", "Back"] },
    { name: "Biceps Curl", type: "Strength", intensity: "Medium", muscles: ["Biceps"] },
    { name: "Dumbbell-Bench-Press", type: "Strength", intensity: "Medium", muscles: ["Chest", "Arms"] },
    { name: "Dumbbell-Flys", type: "Strength", intensity: "Medium", muscles: ["Chest"] }
];

// Function to get user preference
function getUserPreferences() {
    return {
        goal: document.getElementById("goal").value, // weight-loss, muscle-gain, endurance
        experience: document.getElementById("experience").value, // beginner, intermediate, advanced
        preference: document.getElementById("preference").value // bodyweight, weights, mixed
    };
}

// Function to find best-matching workouts
function getBestWorkoutMatches(userPref) {
    return workouts.filter(workout => {
        return (
            (userPref.goal === "weight-loss" && workout.type === "Endurance") ||
            (userPref.goal === "muscle-gain" && workout.type === "Strength") ||
            (userPref.goal === "endurance" && workout.type === "Endurance") ||
            (userPref.preference === "weights" && workout.intensity !== "Low") ||
            (userPref.preference === "bodyweight" && workout.intensity !== "High")
        );
    });
}

// Function to display recommended workouts
function getAIWorkout() {
    let userPref = getUserPreferences();
    let recommendedWorkouts = getBestWorkoutMatches(userPref);
    
    let output = recommendedWorkouts.length > 0 ? 
        recommendedWorkouts.map(workout => `<li>${workout.name} - ${workout.type} Training</li>`).join("") 
        : "<li>No workouts found. Try changing preferences!</li>";

    document.getElementById("workout-plan").innerHTML = `<h3>Recommended Workouts:</h3><ul>${output}</ul>`;
}

function getAIWorkout() {
    let goal = document.getElementById("goal").value;
    let experience = document.getElementById("experience").value;
    let preference = document.getElementById("preference").value;

    fetch(`/api/get_workout/?goal=${goal}&experience=${experience}&preference=${preference}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("workout-plan").innerText = `Recommended Workout: ${data.workout}`;
    })
    .catch(error => console.error("Error fetching AI workout:", error));
}


