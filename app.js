const seeds = [
  {
    number: "①",
    icon: "🌳",
    title: "素材①",
    items: [
      "自分の信じる道を切り拓いている",
      "理想を大切にしている",
      "真っ直ぐ向き合っている",
      "芯を持って進んでいる",
      "物事を発展させている",
      "客観的に捉えている",
      "最後までやり遂げている",
      "自分が育つことで周りを豊かにしている"
    ]
  },
  {
    number: "②",
    icon: "🌱",
    title: "素材②",
    items: [
      "人と人を繋いでいる",
      "調和を大切にしている",
      "周囲と共に歩んでいる",
      "いつも相手を思いやっている",
      "物事を柔軟に受け止めている",
      "穏やかな空気を育てている",
      "場のみんなが心地よい形を整えている",
      "周りと育つことで全体を豊かにしている"
    ]
  },
  {
    number: "③",
    icon: "☀️",
    title: "素材③",
    items: [
      "周りを明るく照らしている",
      "自分から行動している",
      "素直に気持ちを表現している",
      "思ったことを率直に伝えている",
      "のびのびと世界を広げている",
      "周りを安心させている",
      "みんなの中心となって動いている",
      "自分が輝くことで周りを元気にしている"
    ]
  },
  {
    number: "④",
    icon: "🕯️",
    title: "素材④",
    items: [
      "見えないものを感じ取っている",
      "自分らしく表現している",
      "感性を大切にしている",
      "一つのことを深く育てている",
      "自分の世界観を形にしている",
      "静かな情熱を灯している",
      "心が動くものを大切にしている",
      "自分が灯ることで周りを温めている"
    ]
  },
  {
    number: "⑤",
    icon: "⛰️",
    title: "素材⑤",
    items: [
      "どっしりと構えている",
      "周りを支えている",
      "安心できる土台をつくっている",
      "物事を積み重ねている",
      "動じずに見守っている",
      "信頼関係を育てている",
      "場や仕組みを整えている",
      "自分が安定することで周りに安心を届けている"
    ]
  },
  {
    number: "⑥",
    icon: "🏺",
    title: "素材⑥",
    items: [
      "相手の成長を見守っている",
      "一人ひとりに丁寧に向き合っている",
      "思いやりを持って接している",
      "学び続けている",
      "着実に積み重ねている",
      "必要なことを育てている",
      "優しく支えている",
      "自分が育むことで周りの可能性を広げている"
    ]
  },
  {
    number: "⑦",
    icon: "🗡️",
    title: "素材⑦",
    items: [
      "困難にも立ち向かっている",
      "決断して前へ進んでいる",
      "信念を持って行動している",
      "変化を恐れず進んでいる",
      "必要なものを見極めている",
      "自分を磨き続けている",
      "最後までやり抜いている",
      "自分が突破して周りに勇気を届けている"
    ]
  },
  {
    number: "⑧",
    icon: "💎",
    title: "素材⑧",
    items: [
      "美しさを大切にしている",
      "細かな違いに気づいている",
      "自分を磨き続けている",
      "妥協せずに整えている",
      "感性を育てている",
      "本質を見極めている",
      "上質なものを選び取っている",
      "自分が磨かれることで周りを輝かせている"
    ]
  },
  {
    number: "⑨",
    icon: "🌊",
    title: "素材⑨",
    items: [
      "広い視野で物事を見ている",
      "状況に合わせて柔軟に動いている",
      "人や世界と繋がっている",
      "新しい流れを取り入れている",
      "変化を受け入れながら進んでいる",
      "大きな視点で考えている",
      "流れを止めず巡らせている",
      "周りに新しい可能性を運んでいる"
    ]
  },
  {
    number: "⑩",
    icon: "🌧️",
    title: "素材⑩",
    items: [
      "小さな変化に気づいている",
      "優しく寄り添っている",
      "穏やかに受け止めている",
      "丁寧に積み重ねている",
      "必要なものを習得している",
      "想像力を働かせている",
      "静かに育てている",
      "自分が潤うことで周りを癒している"
    ]
  }
];

const choices = [
  { value: 1, label: "❶", text: "10％以下" },
  { value: 2, label: "❷", text: "10〜30％未満" },
  { value: 3, label: "❸", text: "30〜50％未満" },
  { value: 4, label: "❹", text: "50〜70％未満" },
  { value: 5, label: "❺", text: "70％以上" }
];

let currentSeedIndex = 0;

const answers = seeds.map((seed) =>
  Array(seed.items.length).fill(null)
);

const startScreen = document.getElementById("start-screen");
const checkScreen = document.getElementById("check-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const seedNumber = document.getElementById("seed-number");
const seedTitle = document.getElementById("seed-title");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const questions = document.getElementById("questions");
const errorMessage = document.getElementById("error-message");
const resultContent = document.getElementById("result-content");

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach((item) => {
    item.classList.remove("active");
  });

  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSeed() {
  const seed = seeds[currentSeedIndex];

  seedNumber.textContent = `素材 ${seed.number}`;
  seedTitle.textContent = `${seed.icon} ${seed.title}`;
  progressText.textContent = `${currentSeedIndex + 1} / ${seeds.length}`;
  progressFill.style.width =
    `${((currentSeedIndex + 1) / seeds.length) * 100}%`;

  backButton.style.visibility =
    currentSeedIndex === 0 ? "hidden" : "visible";

  nextButton.textContent =
    currentSeedIndex === seeds.length - 1
      ? "結果を見る"
      : "次へ";

  questions.innerHTML = "";
  errorMessage.textContent = "";

  seed.items.forEach((item, questionIndex) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const title = document.createElement("p");
    title.className = "question-title";
    title.textContent = item;

    const choiceGroup = document.createElement("div");
    choiceGroup.className = "choice-group";

    choices.forEach((choice) => {
      const label = document.createElement("label");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `seed-${currentSeedIndex}-question-${questionIndex}`;
      input.value = choice.value;
      input.checked =
        answers[currentSeedIndex][questionIndex] === choice.value;

      input.addEventListener("change", () => {
        answers[currentSeedIndex][questionIndex] = choice.value;
        errorMessage.textContent = "";
      });

      const symbol = document.createElement("span");
      symbol.textContent = choice.label;

      const text = document.createElement("small");
      text.textContent = choice.text;

      label.appendChild(input);
      label.appendChild(symbol);
      label.appendChild(text);
      choiceGroup.appendChild(label);
    });

    card.appendChild(title);
    card.appendChild(choiceGroup);
    questions.appendChild(card);
  });
}

function isCurrentSeedComplete() {
  return answers[currentSeedIndex].every(
    (answer) => answer !== null
  );
}

function calculateResults() {
  return seeds.map((seed, index) => {
    const count4 = answers[index].filter(
      (answer) => answer === 4
    ).length;

    const count5 = answers[index].filter(
      (answer) => answer === 5
    ).length;

    return {
      ...seed,
      count4,
      count5,
      total: count4 + count5
    };
  });
}

function getWinningSeeds(results) {
  const highestTotal = Math.max(
    ...results.map((result) => result.total)
  );

  const totalWinners = results.filter(
    (result) => result.total === highestTotal
  );

  const highestCount5 = Math.max(
    ...totalWinners.map((result) => result.count5)
  );

  return totalWinners.filter(
    (result) => result.count5 === highestCount5
  );
}

function showResults() {
  const results = calculateResults();
  const winners = getWinningSeeds(results);

  let html = "";

  winners.forEach((winner) => {
    html += `
      <div class="result-card">
        <h3>${winner.icon} ${winner.title}</h3>
        <p>❹の数：${winner.count4}</p>
        <p>❺の数：${winner.count5}</p>
        <p>❹と❺の合計：${winner.total}</p>
      </div>
    `;
  });

  if (winners.length > 1) {
    html += `
      <p class="tie-message">
        どちらのタネも<br>
        持ち合わせているようです🌱
      </p>
    `;
  }

  resultContent.innerHTML = html;
  showScreen(resultScreen);
}

startButton.addEventListener("click", () => {
  currentSeedIndex = 0;
  renderSeed();
  showScreen(checkScreen);
});

backButton.addEventListener("click", () => {
  if (currentSeedIndex > 0) {
    currentSeedIndex -= 1;
    renderSeed();
  }
});

nextButton.addEventListener("click", () => {
  if (!isCurrentSeedComplete()) {
    errorMessage.textContent =
      "すべての項目を選んでから進んでね🌱";
    return;
  }

  if (currentSeedIndex < seeds.length - 1) {
    currentSeedIndex += 1;
    renderSeed();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showResults();
  }
});

restartButton.addEventListener("click", () => {
  answers.forEach((seedAnswers) => {
    seedAnswers.fill(null);
  });

  currentSeedIndex = 0;
  showScreen(startScreen);
});
