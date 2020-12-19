const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Log = document.getElementById("log");
const LogWrapper = document.getElementById("logWrapper");

const addToLog = (data) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = data;
  Log.appendChild(listItem);
  LogWrapper.style.display = "block";
};

const clearLog = () => {
  Log.innerHTML = null;
  LogWrapper.style.display = "none";
};

String.prototype.capitalize = function () {
  return (
    this.toLowerCase().charAt().toUpperCase() + this.toLowerCase().slice(1)
  );
};

const askMonth = () => {
  const inputData = prompt("Enter your month of birth (name or number)");
  if (0 < Number(inputData) && Number(inputData) < 13) {
    const number = Math.round(inputData);
    const message = `Month with number ${number} is ${months[number - 1]}`;
    alert(message);
    addToLog(message);
  } else {
    const nameOfMonth = inputData.trim().capitalize();
    const isNameOfMonthCorrect = months.indexOf(nameOfMonth) !== -1;
    const message = `The month of ${nameOfMonth} has number ${
      months.indexOf(nameOfMonth) + 1
    }`;
    const errorMessage =
      "I don't know the month with that name or number, click the button and try again";

    alert(isNameOfMonthCorrect ? message : errorMessage);
    isNameOfMonthCorrect && addToLog(message);
  }
};

//Delete switch/case implementation because VEEEERY long code
