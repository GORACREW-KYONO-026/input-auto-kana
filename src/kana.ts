const ROMAJI_TO_KATAKANA: Record<string, string> = {
  a: 'ア',
  i: 'イ',
  u: 'ウ',
  e: 'エ',
  o: 'オ',
  ka: 'カ',
  ki: 'キ',
  ku: 'ク',
  ke: 'ケ',
  ko: 'コ',
  ga: 'ガ',
  gi: 'ギ',
  gu: 'グ',
  ge: 'ゲ',
  go: 'ゴ',
  sa: 'サ',
  shi: 'シ',
  si: 'シ',
  su: 'ス',
  se: 'セ',
  so: 'ソ',
  za: 'ザ',
  ji: 'ジ',
  zi: 'ジ',
  zu: 'ズ',
  ze: 'ゼ',
  zo: 'ゾ',
  ta: 'タ',
  chi: 'チ',
  ti: 'チ',
  tsu: 'ツ',
  tu: 'ツ',
  te: 'テ',
  to: 'ト',
  da: 'ダ',
  di: 'ヂ',
  du: 'ヅ',
  de: 'デ',
  do: 'ド',
  na: 'ナ',
  ni: 'ニ',
  nu: 'ヌ',
  ne: 'ネ',
  no: 'ノ',
  ha: 'ハ',
  hi: 'ヒ',
  fu: 'フ',
  hu: 'フ',
  he: 'ヘ',
  ho: 'ホ',
  ba: 'バ',
  bi: 'ビ',
  bu: 'ブ',
  be: 'ベ',
  bo: 'ボ',
  pa: 'パ',
  pi: 'ピ',
  pu: 'プ',
  pe: 'ペ',
  po: 'ポ',
  ma: 'マ',
  mi: 'ミ',
  mu: 'ム',
  me: 'メ',
  mo: 'モ',
  ya: 'ヤ',
  yu: 'ユ',
  yo: 'ヨ',
  ra: 'ラ',
  ri: 'リ',
  ru: 'ル',
  re: 'レ',
  ro: 'ロ',
  wa: 'ワ',
  wi: 'ウィ',
  we: 'ウェ',
  wo: 'ヲ',
  kya: 'キャ',
  kyu: 'キュ',
  kyo: 'キョ',
  gya: 'ギャ',
  gyu: 'ギュ',
  gyo: 'ギョ',
  sha: 'シャ',
  shu: 'シュ',
  sho: 'ショ',
  sya: 'シャ',
  syu: 'シュ',
  syo: 'ショ',
  she: 'シェ',
  sye: 'シェ',
  ja: 'ジャ',
  ju: 'ジュ',
  jo: 'ジョ',
  jya: 'ジャ',
  jyu: 'ジュ',
  jyo: 'ジョ',
  zya: 'ジャ',
  zyu: 'ジュ',
  zyo: 'ジョ',
  je: 'ジェ',
  jye: 'ジェ',
  cha: 'チャ',
  chu: 'チュ',
  cho: 'チョ',
  cya: 'チャ',
  cyu: 'チュ',
  cyo: 'チョ',
  tya: 'チャ',
  tyu: 'チュ',
  tyo: 'チョ',
  che: 'チェ',
  cye: 'チェ',
  tye: 'チェ',
  dya: 'ヂャ',
  dyu: 'ヂュ',
  dyo: 'ヂョ',
  nya: 'ニャ',
  nyu: 'ニュ',
  nyo: 'ニョ',
  hya: 'ヒャ',
  hyu: 'ヒュ',
  hyo: 'ヒョ',
  bya: 'ビャ',
  byu: 'ビュ',
  byo: 'ビョ',
  pya: 'ピャ',
  pyu: 'ピュ',
  pyo: 'ピョ',
  mya: 'ミャ',
  myu: 'ミュ',
  myo: 'ミョ',
  rya: 'リャ',
  ryu: 'リュ',
  ryo: 'リョ',
  fa: 'ファ',
  fi: 'フィ',
  fe: 'フェ',
  fo: 'フォ',
  fya: 'フャ',
  fyu: 'フュ',
  fyo: 'フョ',
  va: 'ヴァ',
  vi: 'ヴィ',
  vu: 'ヴ',
  ve: 'ヴェ',
  vo: 'ヴォ',
  vya: 'ヴャ',
  vyu: 'ヴュ',
  vyo: 'ヴョ',
  shya: 'シャ',
  shyu: 'シュ',
  shyo: 'ショ',
  chya: 'チャ',
  chyu: 'チュ',
  chyo: 'チョ',
  tsa: 'ツァ',
  tsi: 'ツィ',
  tse: 'ツェ',
  tso: 'ツォ',
  dzu: 'ヅ',
  dji: 'ヂ',
  kwa: 'クァ',
  kwi: 'クィ',
  kwu: 'クゥ',
  kwe: 'クェ',
  kwo: 'クォ',
  gwa: 'グァ',
  gwi: 'グィ',
  gwu: 'グゥ',
  gwe: 'グェ',
  gwo: 'グォ',
  xwa: 'ヮ',
  lwa: 'ヮ',
  xya: 'ャ',
  xyu: 'ュ',
  xyo: 'ョ',
  lya: 'ャ',
  lyu: 'ュ',
  lyo: 'ョ',
  xa: 'ァ',
  xi: 'ィ',
  xu: 'ゥ',
  xe: 'ェ',
  xo: 'ォ',
  la: 'ァ',
  li: 'ィ',
  lu: 'ゥ',
  le: 'ェ',
  lo: 'ォ',
  xtsu: 'ッ',
  ltsu: 'ッ',
  xtu: 'ッ',
  ltu: 'ッ',
  ye: 'イェ',
  yi: 'イ',
  lka: 'ヵ',
  lke: 'ヶ',
  xka: 'ヵ',
  xke: 'ヶ',
};

const MAX_ROMAJI_SEQUENCE_LENGTH = Object.keys(ROMAJI_TO_KATAKANA).reduce(
  (max, key) => Math.max(max, key.length),
  1,
);

const HIRAGANA_START = 0x3041;
const HIRAGANA_END = 0x3096;
const HIRAGANA_ITERATION_START = 0x309d;
const HIRAGANA_ITERATION_END = 0x309f;
const HIRAGANA_TO_KATAKANA_OFFSET = 0x60;

const ASCII_LETTER_REGEX = /[a-zA-Z]/;
const ASCII_CONSONANT_REGEX = /[bcdfghjklmnpqrstvwxyz]/;

const isHiraganaChar = (char: string): boolean => {
  if (!char) {
    return false;
  }

  const code = char.charCodeAt(0);
  return (
    (code >= HIRAGANA_START && code <= HIRAGANA_END) ||
    (code >= HIRAGANA_ITERATION_START && code <= HIRAGANA_ITERATION_END)
  );
};

const toKatakanaFromHiragana = (text: string): string =>
  Array.from(text)
    .map((char) => {
      if (!isHiraganaChar(char)) {
        return char;
      }

      const code = char.charCodeAt(0);
      return String.fromCharCode(code + HIRAGANA_TO_KATAKANA_OFFSET);
    })
    .join('');

const convertRomajiBufferToKatakana = (buffer: string): string => {
  if (!buffer) {
    return '';
  }

  let result = '';
  let index = 0;
  const lower = buffer.toLowerCase();

  while (index < lower.length) {
    const currentChar = lower[index];
    const originalChar = buffer[index];

    if (!ASCII_LETTER_REGEX.test(currentChar)) {
      if (currentChar === "'") {
        index += 1;
        continue;
      }

      result += originalChar;
      index += 1;
      continue;
    }

    if (currentChar === 'n') {
      const nextChar = lower[index + 1];
      if (!nextChar) {
        result += 'ン';
        index += 1;
        continue;
      }

      if (nextChar === "'") {
        result += 'ン';
        index += 2;
        continue;
      }

      if (!ASCII_LETTER_REGEX.test(nextChar) || !/[aiueoy]/.test(nextChar)) {
        result += 'ン';
        index += 1;
        continue;
      }
    }

    const nextChar = lower[index + 1];
    if (
      nextChar &&
      nextChar === currentChar &&
      ASCII_CONSONANT_REGEX.test(currentChar) &&
      currentChar !== 'n'
    ) {
      result += 'ッ';
      index += 1;
      continue;
    }

    let matched = '';
    let matchedValue = '';
    const maxLength = Math.min(MAX_ROMAJI_SEQUENCE_LENGTH, lower.length - index);

    for (let length = maxLength; length > 0; length -= 1) {
      const segment = lower.slice(index, index + length);
      const kana = ROMAJI_TO_KATAKANA[segment];
      if (kana) {
        matched = segment;
        matchedValue = kana;
        break;
      }
    }

    if (matched) {
      result += matchedValue;
      index += matched.length;
      continue;
    }

    result += originalChar;
    index += 1;
  }

  return result;
};

export const normaliseSpaces = (value: string): string =>
  value
    .normalize('NFKC')
    .replace(/\u3000/g, ' ')
    .replace(/\s+/g, ' ')
    .trimStart();

export const convertToKatakana = (value: string): string => {
  if (!value) {
    return '';
  }

  const normalised = normaliseSpaces(value);
  let result = '';
  let romajiBuffer = '';

  for (const char of normalised) {
    if (ASCII_LETTER_REGEX.test(char) || char === "'") {
      romajiBuffer += char;
      continue;
    }

    if (romajiBuffer) {
      result += convertRomajiBufferToKatakana(romajiBuffer);
      romajiBuffer = '';
    }

    if (isHiraganaChar(char)) {
      result += toKatakanaFromHiragana(char);
      continue;
    }

    result += char;
  }

  if (romajiBuffer) {
    result += convertRomajiBufferToKatakana(romajiBuffer);
  }

  return result;
};
