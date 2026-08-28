console.log("Pining for the fjords!"); 
 
/** 
 * @typedef {"ENERGETIC" | "FOGGY" | "MOTIVATED" | "ANXIOUS" | "TIRED"} Feeling 
 * @typedef {Object} DataEntry - A single entry from a user 
 * @property {`${number}-${number}-${number}`} date - YYYY-MM-DD, acts as an id/p_key for a given entry
 * @property {number=} sleep - A float >= 0, measured in hours 
 * @property {Feeling[]=} feelings 
 * @property {string=} note 
 */ 
 
// TODO: Have a date picker that can control this
const CURRENT_DATE = new Date().toLocaleDateString("en-CA");
/** @type {HTMLInputElement} */
const SLEEP_INPUT = document.getElementById("sleep-update-btn");
const SAVE_NOTES = document.getElementById("save-note");
const AVERAGE_SLEEP_DISPLAY = document.getElementById("avg-hours-of-sleep");

/** @type {Array<DataEntry>} */ 
const userData = [ 
  {
    date: "2026-08-20",
    sleep: 5,
  },
  {
    date: "2026-08-21",
    sleep: 8,
    feelings: ["ENERGETIC"],
  },
  {
    date: "2026-08-22",
    sleep: 12,
    feelings: ["ENERGETIC", "MOTIVATED"],
    note: "Went on a run",
  },
  {
    date: "2026-08-23",
    sleep: 7,
    feelings: ["MOTIVATED"],
  },
  {
    date: "2026-08-24",
    sleep: 6.5,
    feelings: ["FOGGY", "TIRED"],
    note: "First day of classes",
  },
  {
    date: "2026-08-25",
    sleep: 8.5,
    feelings: ["ENERGETIC"],
    note: "Slept well",
  },
  {
    date: "2026-08-26",
    sleep: 7.5,
    feelings: ["MOTIVATED", "ENERGETIC"],
  }
];

/**
 * @param {{target: HTMLInputElement}} checkbox 
 */
function handleFeelingSelection({ target: checkbox}) {
  // Not currently possible to change date, so we can assume user is updating the current day
  const entry = userData.find(entry => entry.date === CURRENT_DATE);
  const feeling = checkbox.id.split("-").pop().toUpperCase()
  if (checkbox.checked && !entry.feelings?.includes(feeling)) {
    entry.feelings = [...(entry.feelings ?? []), feeling];
  } else {
    entry.feelings = (entry.feelings ?? []).filter(f => f !== feeling);
  }
  computeFeelingsCount();
}

function handleSleepInput() {
  const input = document.getElementById("hours-of-sleep");
  const entry = userData.find(entry => entry.date === CURRENT_DATE);
  entry.sleep = isNaN(Number(input.value)) ? 0 : Number(input.value);
  computeAverageSleep();
}

function handleNoteUpdate() {
  userData.at(-1).note = document.getElementById("daily-notes").value;
}

function setupListeners() {
  // ==== Checkboxes ====
  /** @type {HTMLInputElement[]} */
  const energyCheckboxes = Array.from(document.querySelectorAll("input[type=checkbox][id^=energy-option-]"));
  for (const checkbox of energyCheckboxes) {
    checkbox.addEventListener("click", handleFeelingSelection);
  }

  // ==== Sleep Input ====
  SLEEP_INPUT.addEventListener("click", handleSleepInput);

  // ==== Notes ====
  SAVE_NOTES.addEventListener("click", handleNoteUpdate);
}

/** Add the current data if its entry is missing */
function insertCurrentDate() {
  const entry = userData.find(entry => entry.date === CURRENT_DATE);
  if (!entry) {
    userData.push({ date: CURRENT_DATE });
  }
}

function computeAverageSleep() {
  // Assume 0 hours of sleep if it is not provided
  const average = (userData.reduce((total, entry) => total + (entry.sleep ?? 0), 0) / userData.length).toFixed(2);
  AVERAGE_SLEEP_DISPLAY.innerText = average;
}

function computeFeelingsCount() {
  const energyLevelDisplays = Array.from(document.querySelectorAll("span[id^=energy-level-display-]"));
  for (const levelDisplay of energyLevelDisplays) {
    const feeling = levelDisplay.id.split("-").pop().toUpperCase();
    const feelingCount = userData.filter(entry => entry.feelings?.includes(feeling)).length;
    levelDisplay.innerText = feelingCount;
  }
}

window.onload = () => {
  insertCurrentDate();
  setupListeners();
  computeAverageSleep();
  computeFeelingsCount();
};
