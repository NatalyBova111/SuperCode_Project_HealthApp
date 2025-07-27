function calculateCalories() {
  const height = Number(document.getElementById('height').value);
  const weight = Number(document.getElementById('weight').value);
  const age = Number(document.getElementById('age').value);
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "male";
  // Получаем коэффициент активности из select
  const activity = Number(document.getElementById('activity').value);

  // Формула Harris-Benedict:
let bmr;
if (gender === "male") {
  bmr = 66.47 + (13.7 * weight) + (5 * height) - (6.8 * age);
} else {
  bmr = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
}

  // Учитываем коэффициент активности
  const tdee = bmr * activity;

  document.getElementById('bmr_kcal').innerText = Math.round(bmr);
  document.getElementById('bmr_kj').innerText = Math.round(bmr * 4.184);
  document.getElementById('tdee_kcal').innerText = Math.round(tdee);
  document.getElementById('tdee_kj').innerText = Math.round(tdee * 4.184);
}