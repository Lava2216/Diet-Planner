document.getElementById('dietForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const goal = document.getElementById('goal').value;

    // Calculate BMI (weight in kg / (height in m)^2)
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    // Determine Category
    let category = '';
    let categoryClass = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        categoryClass = 'underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal';
        categoryClass = 'normal';
    } else {
        category = 'Overweight';
        categoryClass = 'overweight';
    }

    // Determine Diet Plan Suggestions
    let dietSuggestions = [];
    if (goal === 'lose') {
        dietSuggestions = [
            'Eat more vegetables and leafy greens',
            'Avoid refined sugar and sugary drinks',
            'Drink more water (at least 2-3 liters/day)',
            'Include lean proteins (chicken, fish, tofu)',
            'Do 150 mins of cardiovascular exercise (e.g., brisk walking, cycling) per week',
            'Include 2-3 days of strength training at the gym to preserve muscle',
            'Try High-Intensity Interval Training (HIIT) 1-2 times a week'
        ];
    } else if (goal === 'gain') {
        dietSuggestions = [
            'Eat high protein foods (meat, dairy, legumes)',
            'Include whole milk, eggs, and nuts in your diet',
            'Eat more healthy calories (avocados, peanut butter)',
            'Eat frequently (3 main meals + 2 snacks)',
            'Focus on compound weightlifting at the gym (squats, deadlifts, bench press)',
            'Aim for 3-4 days of progressive resistance training per week',
            'Prioritize 7-8 hours of sleep per night for muscle recovery'
        ];
    }

    // Display Results
    document.getElementById('outName').innerText = name;
    document.getElementById('outBMI').innerText = bmi;

    const outCategory = document.getElementById('outCategory');
    outCategory.innerText = category;
    outCategory.className = `badge ${categoryClass}`;

    const dietList = document.getElementById('outDiet');
    dietList.innerHTML = ''; // Clear previous list

    dietSuggestions.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        dietList.appendChild(li);
    });

    // Show result section with animation
    const resultSection = document.getElementById('result');
    resultSection.classList.remove('hidden');

    // Smooth scroll to results
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
