// ================================
// FF DATABASE JS - PART 1/10
// DEVICE DATA
// ================================

const deviceData = {

  Apple: {
    "iPhone 6s": [180,175,165,150,95,125],
    "iPhone 7": [182,177,168,152,96,126],
    "iPhone 8": [184,179,170,154,97,127],
    "iPhone X": [186,181,172,156,98,128],
    "iPhone XR": [188,183,174,158,99,129],
    "iPhone 11": [190,185,175,160,100,130],
    "iPhone 11 Pro": [190,186,176,161,100,130],
    "iPhone 11 Pro Max": [191,186,177,162,101,131],
    "iPhone 12": [192,187,178,163,102,132],
    "iPhone 12 Pro": [192,188,179,164,102,132],
    "iPhone 12 Pro Max": [193,188,180,165,103,133],
    "iPhone 13": [194,189,181,166,104,134],
    "iPhone 13 Pro": [195,190,182,167,104,134],
    "iPhone 13 Pro Max": [196,191,183,168,105,135],
    "iPhone 14": [195,190,182,168,105,135],
    "iPhone 14 Plus": [195,190,182,168,105,135],
    "iPhone 14 Pro": [196,191,183,169,106,136],
    "iPhone 14 Pro Max": [197,192,184,170,106,136],
    "iPhone 15": [197,192,184,170,107,137],
    "iPhone 15 Plus": [197,192,184,170,107,137],
    "iPhone 15 Pro": [198,193,185,171,108,138],
    "iPhone 15 Pro Max": [199,194,186,172,108,138],
    "iPhone 16": [198,193,185,171,108,138],
    "iPhone 16 Plus": [198,193,185,171,108,138],
    "iPhone 16 Pro": [199,194,186,172,109,139],
    "iPhone 16 Pro Max": [200,195,187,173,110,140]
  },

  Samsung: {
    "Galaxy A12": [185,180,170,155,95,125],
    "Galaxy A13": [187,182,172,157,96,126],
    "Galaxy A14": [189,184,174,159,97,127],
    "Galaxy A15": [190,185,175,160,98,128],
    "Galaxy A24": [192,187,177,162,100,130],
    "Galaxy A34": [194,189,179,164,102,132],
    "Galaxy A54": [196,191,181,166,104,134],
    "Galaxy S20": [193,188,178,163,102,132],
    "Galaxy S21": [195,190,180,165,104,134],
    "Galaxy S22": [197,192,182,167,106,136],
    "Galaxy S23": [198,193,184,169,108,138],
    "Galaxy S24": [199,194,185,171,109,139],
    "Galaxy S25": [200,195,187,173,110,140]
  },

  Xiaomi: {
    "Mi 10": [190,185,175,160,100,130],
    "Mi 11": [193,188,178,163,102,132],
    "Mi 12": [195,190,180,165,104,134],
    "Mi 13": [197,192,182,167,106,136],
    "Mi 14": [199,194,185,171,108,138],
    "Mi 15": [200,195,187,173,110,140]
  },

  Redmi: {
    "Redmi 9": [180,175,165,150,95,125],
    "Redmi 10": [184,179,169,154,97,127],
    "Redmi Note 10": [188,183,173,158,99,129],
    "Redmi Note 11": [190,185,175,160,100,130],
    "Redmi Note 12": [193,188,178,163,102,132],
    "Redmi Note 13": [196,191,181,166,104,134],
    "Redmi Note 14": [198,193,184,169,107,137]
  },

  Realme: {
    "Realme C25": [182,177,167,152,96,126],
    "Realme C35": [186,181,171,156,98,128],
    "Realme C55": [190,185,175,160,100,130],
    "Realme C67": [193,188,178,163,102,132],
    "Realme 8": [190,185,175,160,100,130],
    "Realme 9": [193,188,178,163,102,132],
    "Realme 10": [195,190,180,165,104,134],
    "Realme 11": [197,192,182,167,106,136],
    "Realme 12": [199,194,185,171,108,138]
  }

};
// ================================
// FF DATABASE JS - PART 2/10
// MORE DEVICE DATA
// ================================

deviceData.OnePlus = {
  "OnePlus 8": [190,185,175,160,100,130],
  "OnePlus 9": [193,188,178,163,102,132],
  "OnePlus 10": [196,191,181,166,104,134],
  "OnePlus 11": [198,193,184,169,107,137],
  "OnePlus 12": [200,195,187,173,110,140]
};

deviceData.POCO = {
  "POCO X3": [188,183,173,158,99,129],
  "POCO X4": [191,186,176,161,101,131],
  "POCO X5": [194,189,179,164,103,133],
  "POCO X6": [197,192,182,167,106,136],
  "POCO F3": [193,188,178,163,102,132],
  "POCO F4": [196,191,181,166,104,134],
  "POCO F5": [198,193,184,169,107,137],
  "POCO F6": [200,195,187,173,110,140]
};

deviceData.Vivo = {
  "Vivo Y20": [182,177,167,152,96,126],
  "Vivo Y21": [185,180,170,155,97,127],
  "Vivo Y22": [188,183,173,158,99,129],
  "Vivo Y35": [191,186,176,161,101,131],
  "Vivo V21": [193,188,178,163,102,132],
  "Vivo V23": [195,190,180,165,104,134],
  "Vivo V25": [197,192,182,167,106,136],
  "Vivo V27": [199,194,185,171,108,138]
};

deviceData.OPPO = {
  "OPPO A16": [182,177,167,152,96,126],
  "OPPO A17": [185,180,170,155,97,127],
  "OPPO A18": [188,183,173,158,99,129],
  "OPPO A38": [191,186,176,161,101,131],
  "OPPO A58": [193,188,178,163,102,132],
  "OPPO Reno 6": [194,189,179,164,103,133],
  "OPPO Reno 8": [197,192,182,167,106,136],
  "OPPO Reno 10": [199,194,185,171,108,138]
};

deviceData.Infinix = {
  "Infinix Hot 10": [180,175,165,150,95,125],
  "Infinix Hot 11": [183,178,168,153,96,126],
  "Infinix Hot 12": [186,181,171,156,98,128],
  "Infinix Hot 20": [189,184,174,159,99,129],
  "Infinix Hot 30": [192,187,177,162,101,131],
  "Infinix Hot 40": [195,190,180,165,104,134],
  "Infinix Note 12": [190,185,175,160,100,130],
  "Infinix Note 30": [194,189,179,164,103,133],
  "Infinix GT 10 Pro": [198,193,184,169,107,137]
};

deviceData.Tecno = {
  "Tecno Spark 8": [180,175,165,150,95,125],
  "Tecno Spark 9": [183,178,168,153,96,126],
  "Tecno Spark 10": [186,181,171,156,98,128],
  "Tecno Spark 20": [190,185,175,160,100,130],
  "Tecno Spark 30": [193,188,178,163,102,132],
  "Tecno Camon 19": [190,185,175,160,100,130],
  "Tecno Camon 20": [194,189,179,164,103,133],
  "Tecno Camon 30": [197,192,182,167,106,136],
  "Tecno Pova 5": [196,191,181,166,104,134],
  "Tecno Pova 6": [199,194,185,171,108,138]
};
// ================================
// FF DATABASE JS - PART 3/10
// DEVICE MODEL DISPLAY + SENSITIVITY
// ================================

const brandButtons = document.querySelectorAll(".brand-btn");
const modelGrid = document.querySelector(".model-grid");

const resultTitle = document.querySelector(
  ".result-title h3"
);

const sensitivityValues = document.querySelectorAll(
  ".sensitivity-list strong"
);


// ---------- SHOW MODELS ----------

function showModels(brand) {

  if (!modelGrid) return;

  modelGrid.innerHTML = "";

  const models = deviceData[brand];

  if (!models) return;

  Object.keys(models).forEach(function(model) {

    const button = document.createElement("button");

    button.className = "model-btn";
    button.textContent = model;

    button.addEventListener("click", function() {

      showSensitivity(brand, model);

    });

    modelGrid.appendChild(button);

  });
}


// ---------- SHOW SENSITIVITY ----------

function showSensitivity(brand, model) {

  const values = deviceData[brand][model];

  if (!values) return;

  if (resultTitle) {
    resultTitle.textContent = model;
  }

  sensitivityValues.forEach(function(
    element,
    index
  ) {

    if (values[index] !== undefined) {
      element.textContent = values[index];
    }

  });

}


// ---------- BRAND BUTTONS ----------

brandButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    brandButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const brand =
      button.textContent.trim();

    showModels(brand);

  });

});


// ---------- DEFAULT DEVICE ----------

if (brandButtons.length > 0) {

  brandButtons[0].classList.add("active");

  showModels(
    brandButtons[0].textContent.trim()
  );

}
// ================================
// CHARACTER DATABASE - PART 4
// ================================

const characters = [
  {
    name: "Alok",
    type: "Active",
    skill: "Drop the Beat",
    description: "Creates an aura that supports movement and HP recovery."
  },

  {
    name: "K",
    type: "Active",
    skill: "Master of All",
    description: "Provides EP-related advantages and supports EP conversion."
  },

  {
    name: "Dimitri",
    type: "Active",
    skill: "Healing Heartbeat",
    description: "Creates a healing zone that helps players recover."
  },

  {
    name: "Chrono",
    type: "Active",
    skill: "Time Turner",
    description: "Creates a temporary protective force field."
  },

  {
    name: "Wukong",
    type: "Active",
    skill: "Camouflage",
    description: "Allows the player to transform into a bush."
  },

  {
    name: "Skyler",
    type: "Active",
    skill: "Riptide Rhythm",
    description: "Provides advantages involving Gloo Walls and HP recovery."
  },

  {
    name: "Clu",
    type: "Active",
    skill: "Tracing Steps",
    description: "Helps detect nearby enemies under suitable conditions."
  },

  {
    name: "Hayato",
    type: "Passive",
    skill: "Bushido",
    description: "Provides armor penetration advantages as HP decreases."
  },

  {
    name: "Jota",
    type: "Passive",
    skill: "Sustained Raids",
    description: "Provides HP recovery benefits after suitable eliminations."
  },

  {
    name: "Kelly",
    type: "Passive",
    skill: "Dash",
    description: "Improves sprinting speed."
  }
];
// ================================
// CHARACTER DATABASE - PART 5
// RENDER CHARACTERS
// ================================

const characterGrid =
  document.querySelector(".character-grid");

const characterSearch =
  document.querySelector(".character-search input");

const characterFilters =
  document.querySelectorAll(".character-filter");

let characterType = "ALL";

function renderCharacters() {

  if (!characterGrid) return;

  const searchText = characterSearch
    ? characterSearch.value.toLowerCase().trim()
    : "";

  const filtered = characters.filter(function(character) {

    const nameMatch =
      character.name.toLowerCase().includes(searchText);

    const skillMatch =
      character.skill.toLowerCase().includes(searchText);

    const typeMatch =
      characterType === "ALL" ||
      character.type.toUpperCase() === characterType;

    return (nameMatch || skillMatch) && typeMatch;

  });

  characterGrid.innerHTML = "";

  if (filtered.length === 0) {

    characterGrid.innerHTML =
      "<div class='character-card'>" +
      "<h3>Character not found</h3>" +
      "<p>Try another character name.</p>" +
      "</div>";

    return;
  }

  filtered.forEach(function(character) {

    const card = document.createElement("div");

    card.className = "character-card";

    card.innerHTML =
      "<div class='character-image'>👤</div>" +
      "<h3>" + character.name + "</h3>" +
      "<span>" + character.type.toUpperCase() + "</span>" +
      "<p>" + character.skill + "</p>" +
      "<button class='character-details'>" +
      "View Details →" +
      "</button>";

    characterGrid.appendChild(card);

  });

}

renderCharacters();
// ================================
// CHARACTER DATABASE - PART 6
// FILTER + SEARCH + DETAILS
// ================================

characterFilters.forEach(function(button) {

  button.addEventListener("click", function() {

    characterFilters.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const text = button.textContent.toLowerCase();

    if (text.includes("active")) {
      characterType = "ACTIVE";
    } else if (text.includes("passive")) {
      characterType = "PASSIVE";
    } else {
      characterType = "ALL";
    }

    renderCharacters();

  });

});

if (characterSearch) {

  characterSearch.addEventListener(
    "input",
    function() {
      renderCharacters();
    }
  );

}


// ---------- CHARACTER DETAILS ----------

if (characterGrid) {

  characterGrid.addEventListener(
    "click",
    function(event) {

      const button =
        event.target.closest(".character-details");

      if (!button) return;

      const card =
        button.closest(".character-card");

      if (!card) return;

      const nameElement =
        card.querySelector("h3");

      if (!nameElement) return;

      const characterName =
        nameElement.textContent;

      const character =
        characters.find(function(item) {
          return item.name === characterName;
        });

      if (!character) return;

      alert(
        character.name +
        "\n\nType: " +
        character.type +
        "\n\nSkill: " +
        character.skill +
        "\n\n" +
        character.description
      );

    }
  );


}// ================================
// PART 7 - COMBOS
// ================================

const comboGrid = document.querySelector(".combo-grid");
const comboTabs = document.querySelectorAll(".combo-tab");

const combos = {
  BR: [
    ["Alok","Kelly","Hayato","Jota"],
    ["K","Moco","Laura","Shirou"],
    ["Wukong","Kelly","Hayato","Moco"]
  ],
  CS: [
    ["Alok","Kelly","Hayato","Jota"],
    ["Chrono","Moco","Laura","Shirou"],
    ["Wukong","Kelly","Hayato","Moco"]
  ]
};

let comboMode = "BR";

function showCombos() {
  if (!comboGrid) return;

  comboGrid.innerHTML = "";

  combos[comboMode].forEach(function(c, i) {

    const card = document.createElement("div");
    card.className = "combo-card";

    card.innerHTML =
      "<span class='combo-number'>" +
      comboMode + " COMBO #" + (i + 1) +
      "</span>" +

      "<h3>" + c[0] + " Combo</h3>" +

      "<div class='combo-skills'>" +
      "<div><small>ACTIVE</small><strong>" + c[0] + "</strong></div>" +
      "<div><small>PASSIVE</small><strong>" + c[1] + "</strong></div>" +
      "<div><small>PASSIVE</small><strong>" + c[2] + "</strong></div>" +
      "<div><small>PASSIVE</small><strong>" + c[3] + "</strong></div>" +
      "</div>" +

      "<p>Recommended character combination for " +
      (comboMode === "BR" ? "Battle Royale." : "Clash Squad.") +
      "</p>";

    comboGrid.appendChild(card);
  });
}

showCombos();
// ================================
// PART 8 - COMBO BUTTONS
// ================================

comboTabs.forEach(function(button, index) {

  button.addEventListener("click", function() {

    comboTabs.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    if (index === 0) {
      comboMode = "BR";
    } else {
      comboMode = "CS";
    }

    showCombos();

  });

});
// ================================
// PART 9 - GUIDES
// ================================

const guideGrid = document.querySelector(".guide-grid");

const guides = [
  {
    icon: "🎯",
    title: "Headshot Guide",
    text: "Learn drag-shot technique, sensitivity basics and crosshair control."
  },
  {
    icon: "🎮",
    title: "HUD Settings",
    text: "Learn how to arrange fire, scope, jump, crouch and movement buttons."
  },
  {
    icon: "🔫",
    title: "Weapon Guide",
    text: "Learn about weapon types, range, accuracy and suitable situations."
  },
  {
    icon: "⚙️",
    title: "Sensitivity Guide",
    text: "Learn how to adjust General, Red Dot and scope sensitivity."
  },
  {
    icon: "👤",
    title: "Character Guide",
    text: "Learn how active and passive character skills can be used."
  },
  {
    icon: "🪂",
    title: "Battle Royale Guide",
    text: "Learn useful tips for landing, looting, rotating and surviving."
  }
];

function showGuides() {

  if (!guideGrid) return;

  guideGrid.innerHTML = "";

  guides.forEach(function(guide) {

    const card = document.createElement("div");

    card.className = "guide-card";

    card.innerHTML =
      "<div class='guide-icon'>" +
      guide.icon +
      "</div>" +

      "<h3>" +
      guide.title +
      "</h3>" +

      "<p>" +
      guide.text +
      "</p>" +

      "<button class='guide-button'>" +
      "Read Guide →" +
      "</button>";

    guideGrid.appendChild(card);

  });

}

showGuides();
// ================================
// PART 10 - FINAL CHECK
// ================================

// Copy settings button
const copySettings = document.querySelector(".copy-sensitivity");

if (copySettings) {
  copySettings.addEventListener("click", function() {

    let text = "";

    document.querySelectorAll(
      ".sensitivity-list div"
    ).forEach(function(row) {

      const name = row.querySelector("span");
      const value = row.querySelector("strong");

      if (name && value) {
        text += name.textContent + ": " +
          value.textContent + "\n";
      }

    });

    if (navigator.clipboard) {

      navigator.clipboard.writeText(text)
        .then(function() {
          copySettings.textContent = "✅ Copied!";
          setTimeout(function() {
            copySettings.textContent =
              "📋 Copy Settings";
          }, 1500);
        });

    } else {
      alert(text);
    }

  });
}


// Mobile menu
const menuButton =
  document.querySelector(".menu-btn");

const navigation =
  document.querySelector(".header nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", function() {

    navigation.classList.toggle("show");

  });

}


// Smooth scrolling
document.querySelectorAll(
  'a[href^="#"]'
).forEach(function(link) {

  link.addEventListener("click", function(event) {

    const target =
      document.querySelector(
        link.getAttribute("href")
      );

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

console.log("FF Database loaded successfully!");
