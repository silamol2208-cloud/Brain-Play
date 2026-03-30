'use strict';

/* เปลี่ยนธีม */
let currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  /* ปุ่ม */
  document.getElementById('theme-icon').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', currentTheme);
}
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme();
}

const ANIMALS = [
  { emoji:'🐶', name:'สุนัข',sound:'sounds/dog.mp3'      },
  { emoji:'🐱', name:'แมว',sound:'sounds/cat.mp3'      },
  { emoji:'🐮', name:'วัว',sound:'sounds/cow.mp3'      },
  { emoji:'🐸', name:'กบ',sound:'sounds/frog.mp3'     },
  { emoji:'🐦', name:'นก',sound:'sounds/bird.mp3'     },
  { emoji:'🦁', name:'สิงโต',sound:'sounds/lion.mp3'     },
  { emoji:'🐘', name:'ช้าง',sound:'sounds/elephant.mp3' },
  { emoji:'🐑', name:'แกะ',sound:'sounds/sheep.mp3'    },
  { emoji:'🦆', name:'เป็ด',sound:'sounds/duck.mp3'     },
  { emoji:'🐺', name:'หมาป่า',sound:'sounds/wolf.mp3'     },
];

const SOUND_ROUNDS  = 10;  /* จำนวนรอบ */
const SOUND_CHOICES = 4;   /* จำนวนตัวเลือก */


/* อย่าจำ */
const PICTURES = [
  { emoji:'🌈', label:'รุ้ง'        }, { emoji:'🏖️', label:'ชายหาด'    },
  { emoji:'🎠', label:'ม้าหมุน'     }, { emoji:'🌺', label:'ดอกไม้'    },
  { emoji:'🦋', label:'ผีเสื้อ'     }, { emoji:'🍕', label:'พิซซ่า'    },
  { emoji:'🎸', label:'กีตาร์'      }, { emoji:'🚀', label:'จรวด'      },
  { emoji:'🏔️', label:'ภูเขา'      }, { emoji:'🎪', label:'ละคร'      },
  { emoji:'🌙', label:'พระจันทร์'   }, { emoji:'🦄', label:'ยูนิคอร์'  },
  { emoji:'🍦', label:'ไอศกรีม'     }, { emoji:'🎡', label:'ชิงช้า'    },
  { emoji:'🐬', label:'โลมา'        }, { emoji:'🌋', label:'ภูเขาไฟ'   },
];

const DR_ROUNDS = 8;  /* จำนวนรอบ */


/* อิโมจิไพ่ */
const MJ_EMOJIS_6 = ['🍎','🍊','🍋','🍇','🍓','🍑'];
const MJ_COLS = 4;                /* 4 คอลัม × 3 แถว = 12 ใบ */
const MJ_POINTS_PER_MATCH = 20;  /* คะแนนต่อคู่ที่ได้ */

/* จับผิดภาพ*/
const DIFF_SCENES = [
  {
    /* ภาพที่ 1 */
    title:     'ด่าน 1',
    imageA:    'images/imagesc.png',  
    imageB:    'images/imagesd.png',   
    total:     5,                       
    timeLimit: 60,                     

   zones: [
  { cx: 31.25, cy: 30.91, r: 8 },
  { cx: 38.02, cy: 59.09, r: 8 },
  { cx: 56.25, cy: 83.64, r: 8 },
  { cx: 9.38,  cy: 82.73, r: 8 },
  { cx: 55.21, cy: 5.45,  r: 8 }
   ],
  },
  {
    /* ภาพที่ 2 */
    title:     'ด่าน 2',
    imageA:    'images/imagesa.png',
    imageB:    'images/imagesb.png',
    total:     5,
    timeLimit: 60,

    zones: [
      { cx: 17.9, cy: 14.4, r: 8 }, 
      { cx: 44.3, cy: 76.9, r: 8 }, 
      { cx: 91.4, cy: 86.3, r: 8 }, 
      { cx: 92.9, cy: 47.5, r: 8 }, 
      { cx: 30.0, cy: 31.3, r: 8 }, 
    ],
  },
  { /* ภาพที่ 3 */
    title:     'ด่าน 3',
    imageA:    'images/imagese.png',  
    imageB:    'images/imagesf.png',   
    total:     5,                       
    timeLimit: 60,                     

    zones: [
        { cx: 86.5, cy: 7.3, r: 8 },
        { cx: 78.6, cy: 59.5, r: 8 },
        { cx: 36.0, cy: 61.8, r: 8 },
        { cx: 25.5, cy: 87.7, r: 8 },
        { cx: 84.4, cy: 85.5, r: 8 }
    ]
  }
];

/* เต้นตาม */
const MOVES = [
  { emoji:'🙆', name:'ยกมือขึ้น!',     instr:'ยกแขนทั้งสองข้างขึ้นเหนือหัวแล้วค้างไว้'  },
  { emoji:'🕺', name:'ก้าวข้าง',        instr:'ก้าวขวา แล้วก้าวซ้าย รักษาจังหวะ'         },
  { emoji:'🙌', name:'ตบมือ',           instr:'ตบมือสามครั้งเหนือหัว'                     },
  { emoji:'💃', name:'หมุนตัว',         instr:'หมุนตัวครบ 360 องศา'                       },
  { emoji:'🤸', name:'กระโดดดาว',       instr:'กระโดดและกางแขนขาออกเหมือนดาว'            },
  { emoji:'🦵', name:'ยกเข่าสูง',       instr:'เดินยกเข่าสูงให้มากที่สุด'                 },
  { emoji:'🤜', name:'ต่อยอากาศ',       instr:'ต่อยขวาขึ้น แล้วซ้าย ทำสองรอบ!'            },
  { emoji:'🦩', name:'ยืนขาเดียว',      instr:'ยืนขาเดียวกางแขนออกค้างไว้ 3 วินาที'      },
  { emoji:'👇', name:'แตะพื้น',         instr:'งอตัวแตะพื้นด้วยมือทั้งสองข้าง'           },
  { emoji:'🫶', name:'ท่าหัวใจ',        instr:'กอดอกและกอดตัวเองแน่นๆ'                    },
];

const JM_ROUNDS          = 8;    /* จำนวนท่าต่อเกม */
const JM_POINTS_PER_MOVE = 15;   /* คะแนนต่อท่า */


/* ชื่อเกม */
const SCORE_KEYS = {
  sound:        { icon:'🔊', name:'จำเสียงสัตว์' },
  dontremember: { icon:'🚫', name:'อย่าจำนะ!'    },
  mahjong:      { icon:'🀄', name:'อิโมจิไพ่'    },
  difference:   { icon:'🔍', name:'หาภาพต่าง'    },
  justmove:     { icon:'🕺', name:'เต้นตามนะ!'   },
};


/* routing */
let currentGame = null;

/* แสดงหน้าจอid */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) el.classList.add('active');
  if (id === 'scores') renderScores();
  if (id === 'home')   stopAllTimers();
}

/* เริ่มเกม */
function startGame(gid) {
  currentGame = gid;
  showScreen(gid);
  /* เรียก init function */
  ({ sound:soundInit, dontremember:drInit, mahjong:mjInit, difference:diffInit, justmove:jmInit })[gid]?.();
}

/* ออกจากเกมกลับหน้าหลัก */
function exitGame() { stopAllTimers(); showScreen('home'); }

/* ปุ่มหน้าหลักในหน้าต่างจบเกม */
function goHomeFromModal() {
  document.getElementById('gameover-modal').classList.add('hidden');
  stopAllTimers();
  showScreen('home');
}


/* คะแนน */
function getHS(k)    { return parseInt(localStorage.getItem('hs_'+k) || '0'); }
function setHS(k, v) { if (v > getHS(k)) { localStorage.setItem('hs_'+k, v); return true; } return false; }

function clearScores() {
  if (!confirm('ล้างคะแนนทั้งหมดใช่ไหม?')) return;
  Object.keys(SCORE_KEYS).forEach(k => localStorage.removeItem('hs_'+k));
  renderScores();
}

/* ตารางคะแนน */
function renderScores() {
  document.getElementById('scores-grid').innerHTML =
    Object.entries(SCORE_KEYS).map(([k, v]) => `
      <div class="score-card">
        <div class="sc-icon">${v.icon}</div>
        <div class="sc-name">${v.name}</div>
        <div class="sc-score">${getHS(k)}</div>
        <div class="sc-label">คะแนนสูงสุด</div>
      </div>`).join('');
}


/* จบเกม */
function showGameOver(gid, score) {
  stopAllTimers();
  const isNew = setHS(gid, score);
  document.getElementById('modal-emoji').textContent  = score > 0 ? '🎉' : '😅';
  document.getElementById('modal-title').textContent  = score > 0 ? 'เล่นได้เก่งมาก!' : 'เกมจบแล้ว!';
  document.getElementById('modal-score').textContent  = score;
  document.getElementById('modal-hs').textContent     = isNew ? '🌟 สถิติใหม่!' : `ดีที่สุด: ${getHS(gid)}`;
  /* เล่นอีกครั้ง */
  document.getElementById('modal-play-again').onclick = () => {
    document.getElementById('gameover-modal').classList.add('hidden');
    startGame(gid);
  };
  document.getElementById('gameover-modal').classList.remove('hidden');
}


/* timer กัน memory leak */
const _timers = [];
function addTimer(id)    { _timers.push(id); }
function stopAllTimers() {
  _timers.forEach(id => { clearInterval(id); clearTimeout(id); });
  _timers.length = 0;
}


/* ฟังค์ชั้น */
/* สุ่มสับเปลี่ยน array */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = 0 | Math.random() * (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick(arr, n)  { return shuffle(arr).slice(0, n); }
function rand(a, b)    { return 0 | Math.random() * (b - a + 1) + a; }

/* แสดงข้อความตอบรับแล้วลบหลัง */
function setFeedback(id, msg, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className   = 'feedback-msg ' + type;
  addTimer(setTimeout(() => { el.textContent = ''; el.className = 'feedback-msg'; }, 1900));
}


/* เสียงสัตว์ */
let soundState    = {};
let _currentAudio = null;

function soundInit() {
  soundState = { score:0, round:0, current:null, choices:[], answered:false };
  document.getElementById('sound-score').textContent = 0;
  soundNextRound();
}

function soundNextRound() {
  const s = soundState;
  if (s.round >= SOUND_ROUNDS) { showGameOver('sound', s.score); return; }
  s.round++; s.answered = false;

  const correct     = ANIMALS[rand(0, ANIMALS.length - 1)];
  const distractors = shuffle(ANIMALS.filter(a => a !== correct)).slice(0, SOUND_CHOICES - 1);
  s.choices         = shuffle([correct, ...distractors]);
  s.current         = correct;

  document.getElementById('sound-round').textContent  = s.round;
  document.getElementById('sound-total').textContent  = SOUND_ROUNDS;
  document.getElementById('sound-score').textContent  = s.score;
  document.getElementById('sound-prompt').textContent = 'กด เล่นเสียง แล้วเลือกสัตว์ให้ถูก!';

  const btn = document.getElementById('sound-play-btn');
  btn.classList.remove('playing');
  btn.textContent = '🔊 เล่นเสียง';

  document.getElementById('sound-choices').innerHTML = s.choices.map((a, i) => `
    <button class="sound-choice-btn" onclick="soundAnswer(${i})" id="scb-${i}">
      <span class="choice-emoji">${a.emoji}</span>
      <span class="choice-name">${a.name}</span>
    </button>`).join('');
}

function soundPlayCurrent() {
  if (soundState.answered) return;

  if (_currentAudio) { _currentAudio.pause(); _currentAudio.currentTime = 0; }

  const btn = document.getElementById('sound-play-btn');
  btn.classList.add('playing');
  btn.textContent = '🎵 กำลังเล่น...';

  const audio = new Audio(soundState.current.sound);
  _currentAudio = audio;

  audio.play().catch(err => {
    console.warn('ไม่พบไฟล์เสียง:', err);
    btn.classList.remove('playing');
    btn.textContent = 'หาเสียงไม่เจอ';
  });

  audio.onended = () => {
    btn.classList.remove('playing');
    btn.textContent = '🔊 เล่นอีกครั้ง';
  };
}

function soundAnswer(idx) {
  const s = soundState;
  if (s.answered) return;
  s.answered = true;

  if (_currentAudio) { _currentAudio.pause(); _currentAudio.currentTime = 0; }

  const chosen  = s.choices[idx];
  const correct = s.current;
  document.querySelectorAll('.sound-choice-btn').forEach(b => b.disabled = true);

  const ci = s.choices.indexOf(correct);
  document.getElementById('scb-' + ci).classList.add('correct-ans');

  if (chosen === correct) {
    s.score += 10;
    document.getElementById('scb-' + idx).classList.add('correct-ans');
    setFeedback('sound-feedback', '✅ ถูกต้อง! +10', 'correct');
  } else {
    document.getElementById('scb-' + idx).classList.add('wrong-ans');
    setFeedback('sound-feedback', `❌ คำตอบที่ถูกคือ ${correct.emoji} ${correct.name}`, 'wrong');
  }

  document.getElementById('sound-score').textContent = s.score;
  addTimer(setTimeout(soundNextRound, 1900));
}


/* อย่าจำ */
let drState = {};

function drInit() {
  drState = { score:0, round:0, forbidden:null, pictures:[], testOrder:[] };
  document.getElementById('dr-score').textContent = 0;
  document.getElementById('dr-total').textContent = DR_ROUNDS;
  drNextRound();
}

function drNextRound() {
  const s = drState;
  if (s.round >= DR_ROUNDS) { showGameOver('dontremember', s.score); return; }
  s.round++;

  document.getElementById('dr-round').textContent = s.round;
  document.getElementById('dr-score').textContent = s.score;

  s.pictures  = pick(PICTURES, 3);
  s.forbidden = s.pictures[rand(0, 2)];

  document.getElementById('dr-phase-study').classList.remove('hidden');
  document.getElementById('dr-phase-test').classList.add('hidden');
  document.getElementById('dr-forbidden-display').textContent = s.forbidden.emoji;
  document.getElementById('dr-forbidden-label').textContent   = `❌ ห้ามจำภาพนี้: ${s.forbidden.label}`;

  document.getElementById('dr-study-pictures').style.opacity = 0;
  setTimeout(() => {
  document.getElementById('dr-study-pictures').style.opacity = 1;
}, 2000);

  const btn = document.getElementById('dr-ready-btn');
  btn.disabled = false;
  btn.textContent = 'พร้อมแล้ว! ✔';
}

function drStartTest() {
  document.getElementById('dr-ready-btn').disabled = true;
  document.getElementById('dr-phase-study').classList.add('hidden');
  document.getElementById('dr-phase-test').classList.remove('hidden');

  const shuffled   = shuffle(drState.pictures);
  drState.testOrder = shuffled;

  document.getElementById('dr-test-pictures').innerHTML = shuffled.map((p, i) => `
    <div class="dr-pic-card" onclick="drAnswer(${i})" id="drp-${i}">
      ${p.emoji}
      <div class="pic-label">${p.label}</div>
    </div>`).join('');
}

function drAnswer(idx) {
  const s = drState, chosen = s.testOrder[idx];
  document.querySelectorAll('.dr-test-pictures .dr-pic-card').forEach(c => c.onclick = null);

  if (chosen === s.forbidden) {
    s.score += 15;
    document.getElementById('drp-' + idx).classList.add('selected-right');
    setFeedback('dr-feedback', '✅ ถูกต้อง! จำว่าห้ามจำได้! +15', 'correct');
  } else {
    document.getElementById('drp-' + idx).classList.add('selected-wrong');
    const ci = s.testOrder.indexOf(s.forbidden);
    document.getElementById('drp-' + ci).classList.add('selected-right');
    setFeedback('dr-feedback', `❌ ภาพต้องห้ามคือ ${s.forbidden.emoji} ${s.forbidden.label}`, 'wrong');
  }

  document.getElementById('dr-score').textContent = s.score;
  addTimer(setTimeout(drNextRound, 2000));
}


/* อิโมจิไพ่ */
let mjState = {};

function mjInit() {
  stopAllTimers();
  const pairs = shuffle([...MJ_EMOJIS_6, ...MJ_EMOJIS_6]);
  mjState = {
    tiles:   pairs.map((e, i) => ({ id:i, emoji:e, matched:false, flipped:false })),
    flipped: [],
    locked:  false,
    score:0, matched:0, elapsed:0, started:false,
  };
  document.getElementById('mj-score').textContent       = 0;
  document.getElementById('mj-timer').textContent       = 0;
  document.getElementById('mj-matched').textContent     = 0;
  document.getElementById('mj-total-pairs').textContent = MJ_EMOJIS_6.length;
  mjRender();

  const t = setInterval(() => {
    if (!mjState.started) return;
    mjState.elapsed++;
    document.getElementById('mj-timer').textContent = mjState.elapsed;
  }, 1000);
  addTimer(t);
}

function mjRender() {
  const board = document.getElementById('mj-board');
  board.style.gridTemplateColumns = `repeat(${MJ_COLS}, clamp(52px,12vw,68px))`;
  board.innerHTML = mjState.tiles.map(tile => {
    let cls = 'mj-tile-wrap';
    if (tile.flipped || tile.matched) cls += ' flipped';
    if (tile.matched) cls += ' mj-matched';
    return `
      <div class="${cls}" id="mj-wrap-${tile.id}" onclick="mjClickTile(${tile.id})">
        <div class="mj-tile-inner">
          <div class="mj-tile-back">🀄</div>
          <div class="mj-tile-front">${tile.emoji}</div>
        </div>
      </div>`;
  }).join('');
}

function mjClickTile(id) {
  const s    = mjState;
  const tile = s.tiles[id];

  if (tile.matched || tile.flipped || s.locked) return;
  s.started = true;

  tile.flipped = true;
  document.getElementById('mj-wrap-' + id).classList.add('flipped');
  s.flipped.push(tile);

  if (s.flipped.length < 2) return;

  s.locked = true;
  const [a, b] = s.flipped;

  if (a.emoji === b.emoji) {
    addTimer(setTimeout(() => {
      a.matched = b.matched = true;
      a.flipped = b.flipped = false;
      s.flipped = []; s.locked = false;
      s.matched += 1; s.score += MJ_POINTS_PER_MATCH;

      document.getElementById('mj-wrap-' + a.id).classList.add('mj-matched');
      document.getElementById('mj-wrap-' + b.id).classList.add('mj-matched');
      [a.id, b.id].forEach(wid => {
        document.getElementById('mj-wrap-' + wid)
          .querySelector('.mj-tile-inner').style.animation = 'mj-match-pop 0.35s ease';
      });

      document.getElementById('mj-score').textContent   = s.score;
      document.getElementById('mj-matched').textContent = s.matched;

      if (s.matched >= MJ_EMOJIS_6.length) {
        const bonus = Math.max(0, 180 - s.elapsed) * 3;
        s.score += bonus;
        addTimer(setTimeout(() => showGameOver('mahjong', s.score), 500));
      }
    }, 350));

  } else {
    [a, b].forEach(tile => {
      document.getElementById('mj-wrap-' + tile.id)
        .querySelector('.mj-tile-inner').classList.add('mj-wrong');
    });
    addTimer(setTimeout(() => {
      [a, b].forEach(tile => {
        tile.flipped = false;
        const el = document.getElementById('mj-wrap-' + tile.id);
        el.classList.remove('flipped');
        el.querySelector('.mj-tile-inner').classList.remove('mj-wrong');
      });
      s.flipped = []; s.locked = false;
    }, 950));
  }
}

function mahjongHint() {
  const s = mjState;
  if (s.locked) return;
  const unmatched = s.tiles.filter(t => !t.matched && !t.flipped);
  const emojis    = unmatched.map(t => t.emoji);
  const dup       = emojis.find((e, i) => emojis.indexOf(e) !== i);
  if (!dup) return;
  const pair = unmatched.filter(t => t.emoji === dup).slice(0, 2);
  pair.forEach(t => {
    const el = document.getElementById('mj-wrap-' + t.id);
    if (el) {
      el.classList.add('mj-hint');
      addTimer(setTimeout(() => el.classList.remove('mj-hint'), 1200));
    }
  });
  s.score = Math.max(0, s.score - 5);
  document.getElementById('mj-score').textContent = s.score;
}


/* หาภาพต่าง */
let diffState = {}, diffTimerID = null;

function diffInit() {
  stopAllTimers();
  diffState = { levelIdx:0, score:0, found:[] };
  document.getElementById('diff-score').textContent = 0;
  diffLoadLevel();
}

function diffLoadLevel() {
  const s     = diffState;
  const level = DIFF_SCENES[s.levelIdx % DIFF_SCENES.length];
  s.found    = [];
  s.timeLeft = level.timeLimit || 60;

  document.getElementById('diff-found').textContent       = 0;
  document.getElementById('diff-total-diffs').textContent = level.total;
  document.getElementById('diff-timer').textContent       = s.timeLeft;
  document.getElementById('diff-next-btn').style.display  = 'none';

  document.getElementById('diff-img-a').src = level.imageA;
  document.getElementById('diff-img-b').src = level.imageB;

  const overlay = document.getElementById('diff-overlay');
  overlay.innerHTML = '';

  overlay.onclick    = (e) => diffHandleClick(e, overlay, level);
  overlay.ontouchend = (e) => { e.preventDefault(); diffHandleTouch(e, overlay, level); };

  document.getElementById('diff-wrap-a').onclick = () =>
    setFeedback('diff-feedback', '👆 แตะที่ภาพ ข เพื่อหาความต่าง!', 'wrong');

  clearInterval(diffTimerID);
  diffTimerID = setInterval(() => {
    s.timeLeft--;
    document.getElementById('diff-timer').textContent = s.timeLeft;
    if (s.timeLeft <= 0) { clearInterval(diffTimerID); showGameOver('difference', s.score); }
  }, 1000);
  addTimer(diffTimerID);
}

function diffHandleClick(e, overlay, level) {
  const rect = overlay.getBoundingClientRect();
  const pctX = (e.clientX - rect.left) / rect.width  * 100;
  const pctY = (e.clientY - rect.top)  / rect.height * 100;
  diffCheckHit(pctX, pctY, overlay, level);
}

function diffHandleTouch(e, overlay, level) {
  const touch = e.changedTouches[0];
  const rect  = overlay.getBoundingClientRect();
  const pctX  = (touch.clientX - rect.left) / rect.width  * 100;
  const pctY  = (touch.clientY - rect.top)  / rect.height * 100;
  diffCheckHit(pctX, pctY, overlay, level);
}

function diffCheckHit(pctX, pctY, overlay, level) {
  const s = diffState;

  for (let i = 0; i < level.zones.length; i++) {
    if (s.found.includes(i)) continue;
    const z = level.zones[i];

    console.log("CLICK:", pctX.toFixed(1), pctY.toFixed(1));
    console.log("ZONE :", z.cx, z.cy);

    const dist = Math.sqrt((pctX - z.cx) ** 2 + (pctY - z.cy) ** 2);
    console.log("DIST :", dist, "R:", z.r);

    if (dist <= z.r) {
      s.found.push(i);
      s.score += 20;
      diffDrawDot(overlay, z.cx, z.cy, z.r, 'hit');
      document.getElementById('diff-score').textContent = s.score;
      document.getElementById('diff-found').textContent = s.found.length;
      setFeedback('diff-feedback', '✅ เจอแล้ว! +20', 'correct');

      if (s.found.length >= level.total) {
        clearInterval(diffTimerID);
        const bonus = s.timeLeft * 2;
        s.score += bonus;
        document.getElementById('diff-score').textContent = s.score;
        setFeedback('diff-feedback', `🎉 เจอครบ! โบนัสเวลา +${bonus}`, 'correct');
        document.getElementById('diff-next-btn').style.display = 'inline-block';
      }
      return;
    }
  }

  diffDrawMissDot(overlay, pctX, pctY);
  setFeedback('diff-feedback', '❌ ไม่มีอะไรตรงนั้น ลองใหม่!', 'wrong');
}

function diffDrawDot(overlay, cx, cy, r) {
  const dot = document.createElement('div');
  dot.className    = 'diff-dot hit';
  dot.style.left   = cx + '%';
  dot.style.top    = cy + '%';
  dot.style.width  = (r * 2) + '%';
  dot.style.height = (r * 2) + '%';
  overlay.appendChild(dot);
}

function diffDrawMissDot(overlay, cx, cy) {
  const dot = document.createElement('div');
  dot.className    = 'diff-dot miss';
  dot.style.left   = cx + '%';
  dot.style.top    = cy + '%';
  dot.style.width  = '6%';
  dot.style.height = '6%';
  overlay.appendChild(dot);
  addTimer(setTimeout(() => dot.remove(), 900));
}

function diffNextLevel() {
  diffState.levelIdx++;
  if (diffState.levelIdx >= DIFF_SCENES.length) showGameOver('difference', diffState.score);
  else diffLoadLevel();
}


/* เต้นตาม */
let jmState = {};

function jmInit() {
  stopAllTimers();
  const selected = shuffle([...MOVES]).slice(0, JM_ROUNDS);
  jmState = { score:0, moveIdx:0, moves:selected, beatPct:0 };
  document.getElementById('jm-score').textContent = 0;
  document.getElementById('jm-total').textContent = JM_ROUNDS;
  jmShowMove();
}

function jmShowMove() {
  const s = jmState;
  if (s.moveIdx >= s.moves.length) { showGameOver('justmove', s.score); return; }

  const move = s.moves[s.moveIdx];
  document.getElementById('jm-current').textContent       = s.moveIdx + 1;
  document.getElementById('jm-pose-emoji').textContent    = move.emoji;
  document.getElementById('jm-pose-name').textContent     = move.name;
  document.getElementById('jm-pose-instruction').textContent = move.instr;
  document.getElementById('jm-feedback').textContent      = '';

  s.beatPct = 0;
  document.getElementById('jm-beat-fill').style.width = '0%';
  const t = setInterval(() => {
    s.beatPct = Math.min(100, s.beatPct + 0.5);
    document.getElementById('jm-beat-fill').style.width = s.beatPct + '%';
    if (s.beatPct >= 100) clearInterval(t);
  }, 30);
  addTimer(t);

  const card = document.getElementById('jm-pose-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = '';
}

function jmNext() {
  const s = jmState;
  s.score += JM_POINTS_PER_MOVE;
  document.getElementById('jm-score').textContent = s.score;
  setFeedback('jm-feedback', `✅ ท่าสวย! +${JM_POINTS_PER_MOVE}`, 'correct');
  s.moveIdx++;
  addTimer(setTimeout(jmShowMove, 750));
}


/* app */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  showScreen('home');
});