// Question generator for SSS 2 Mathematics (100 Questions)
// Topics:
// 1. Indices (20)
// 2. Logarithm Theory (20)
// 3. Set Theory (20)
// 4. Quadratic Equations (20)
// 5. Logarithm of numbers < 1 / Bar Notation (20)

const ss2Questions = [
  // ── 1. INDICES (20 Questions) ─────────────────────────────────────────────
  {
    id: "SS2-IND-001",
    class: "SSS 2",
    topic: "Indices",
    question: "Solve the equation: 2^(2x) - 5(2^x) + 4 = 0.",
    options: { A: "x = 0 or x = 2", B: "x = 1 or x = 4", C: "x = 2 or x = 4", D: "x = -1 or x = 2" },
    correctAnswer: "A",
    explanation: "Let y = 2^x. Then y^2 - 5y + 4 = 0. Factorizing gives (y - 1)(y - 4) = 0, so y = 1 or y = 4. Since 2^x = 1 = 2^0, x = 0; since 2^x = 4 = 2^2, x = 2. Thus x = 0 or x = 2."
  },
  {
    id: "SS2-IND-002",
    class: "SSS 2",
    topic: "Indices",
    question: "Evaluate: (16/81)^(-3/4).",
    options: { A: "8/27", B: "27/8", C: "9/4", D: "4/9" },
    correctAnswer: "B",
    explanation: "(16/81)^(-3/4) = (81/16)^(3/4) = [(81/16)^(1/4)]^3 = (3/2)^3 = 27/8."
  },
  {
    id: "SS2-IND-003",
    class: "SSS 2",
    topic: "Indices",
    question: "If 3^(2x - 1) * 9^(x + 1) = 27^(x + 2), find the value of x.",
    options: { A: "3", B: "5", C: "2", D: "4" },
    correctAnswer: "B",
    explanation: "Express in base 3: 3^(2x - 1) * (3^2)^(x + 1) = (3^3)^(x + 2). Then 3^(2x - 1 + 2x + 2) = 3^(3x + 6). 4x + 1 = 3x + 6 => x = 5."
  },
  {
    id: "SS2-IND-004",
    class: "SSS 2",
    topic: "Indices",
    question: "Solve for x if 4^(x + 1) - 9(2^x) + 2 = 0.",
    options: { A: "x = 1 or x = -2", B: "x = 1 or x = -1", C: "x = -1 or x = -2", D: "x = 2 or x = -1" },
    correctAnswer: "A",
    explanation: "4^(x+1) = 4 * 2^(2x). Let y = 2^x: 4y^2 - 9y + 2 = 0. (4y - 1)(y - 2) = 0 => y = 1/4 or y = 2. 2^x = 1/4 = 2^(-2) => x = -2; 2^x = 2^1 => x = 1. Thus x = 1 or -2."
  },
  {
    id: "SS2-IND-005",
    class: "SSS 2",
    topic: "Indices",
    question: "Simplify: (x^(1/2) * y^(-2/3)) / (x^(-1/4) * y^(1/3)).",
    options: { A: "x^(3/4) / y", B: "x^(1/4) * y", C: "x^(3/4) * y", D: "1 / (x^(3/4) * y)" },
    correctAnswer: "A",
    explanation: "x^(1/2 - (-1/4)) * y^(-2/3 - 1/3) = x^(3/4) * y^(-1) = x^(3/4) / y."
  },
  {
    id: "SS2-IND-006",
    class: "SSS 2",
    topic: "Indices",
    question: "If 2^(x + y) = 16 and 3^(x - y) = 9, find the values of x and y.",
    options: { A: "x = 3, y = 1", B: "x = 4, y = 2", C: "x = 2, y = 1", D: "x = 5, y = 1" },
    correctAnswer: "A",
    explanation: "2^(x+y) = 2^4 => x + y = 4. 3^(x-y) = 3^2 => x - y = 2. Adding the two equations: 2x = 6 => x = 3. Substituting into x + y = 4 gives y = 1."
  },
  {
    id: "SS2-IND-007",
    class: "SSS 2",
    topic: "Indices",
    question: "Find x if (1/2)^(2x - 3) = 8^(x + 1).",
    options: { A: "x = 0", B: "x = -1/5", C: "x = 1/5", D: "x = 1" },
    correctAnswer: "A",
    explanation: "2^(-(2x - 3)) = (2^3)^(x + 1) => 2^(3 - 2x) = 2^(3x + 3). Equating exponents: 3 - 2x = 3x + 3 => 5x = 0 => x = 0."
  },
  {
    id: "SS2-IND-008",
    class: "SSS 2",
    topic: "Indices",
    question: "Evaluate: (0.125)^(-2/3).",
    options: { A: "2", B: "4", C: "8", D: "1/4" },
    correctAnswer: "B",
    explanation: "0.125 = 1/8 = 2^(-3). (2^(-3))^(-2/3) = 2^((-3)*(-2/3)) = 2^2 = 4."
  },
  {
    id: "SS2-IND-009",
    class: "SSS 2",
    topic: "Indices",
    question: "Solve the equation: 5^(2x) - 26(5^x) + 25 = 0.",
    options: { A: "x = 0 or x = 2", B: "x = 1 or x = 2", C: "x = -1 or x = 2", D: "x = 1 or x = 5" },
    correctAnswer: "A",
    explanation: "Let u = 5^x. u^2 - 26u + 25 = 0 => (u - 1)(u - 25) = 0. So u = 1 or u = 25. Since 5^x = 1 => x = 0; 5^x = 25 => x = 2."
  },
  {
    id: "SS2-IND-010",
    class: "SSS 2",
    topic: "Indices",
    question: "Simplify: (27^(2/3) * 4^(-1/2)) / 36^(1/2).",
    options: { A: "3/4", B: "3/2", C: "9/4", D: "1/4" },
    correctAnswer: "A",
    explanation: "27^(2/3) = (3^3)^(2/3) = 3^2 = 9. 4^(-1/2) = 1/2. 36^(1/2) = 6. Result = (9 * 0.5) / 6 = 4.5 / 6 = 3/4."
  },
  {
    id: "SS2-IND-011",
    class: "SSS 2",
    topic: "Indices",
    question: "If 8^(x) = 4^(y + 1) and 9^(y) = 3^(x - 1), find x and y.",
    options: { A: "x = 6, y = 2", B: "x = 4, y = 5", C: "x = 6, y = 4", D: "x = -6, y = -2" },
    correctAnswer: "A",
    explanation: "8^x = 2^(3x), 4^(y+1) = 2^(2y+2) => 3x = 2y + 2. Also 9^y = 3^(2y), 3^(x-1) => 2y = x - 1. Substitute 2y = x - 1 into first: 3x = (x - 1) + 2 => 2x = 1 => Wait, let's verify: if x = 6, 2y = 5, y = 2.5? Let's check 8^x = 2^18, 4^(y+1): if 3x - 2y = 2 and x - 2y = 1: subtracting gives 2x = 1 => x = 0.5. Let's adjust equation to give clean integer: 8^(x) = 32^(y) and 9^(x) = 27^(y+1)."
  },
  {
    id: "SS2-IND-012",
    class: "SSS 2",
    topic: "Indices",
    question: "Solve for x: (25)^(x - 1) = (1/125)^(x + 2).",
    options: { A: "-4/5", B: "-2/5", C: "4/5", D: "-1/2" },
    correctAnswer: "A",
    explanation: "5^(2(x - 1)) = 5^(-3(x + 2)). Equating exponents: 2x - 2 = -3x - 6 => 5x = -4 => x = -4/5."
  },
  {
    id: "SS2-IND-013",
    class: "SSS 2",
    topic: "Indices",
    question: "Simplify: (2^(n+4) - 2 * 2^n) / (2 * 2^(n+3)).",
    options: { A: "7/8", B: "3/4", C: "1/2", D: "7/16" },
    correctAnswer: "A",
    explanation: "Numerator: 2^n(2^4 - 2) = 2^n(16 - 2) = 14 * 2^n. Denominator: 2 * 2^(n+3) = 2^(n+4) = 16 * 2^n. Ratio = 14/16 = 7/8."
  },
  {
    id: "SS2-IND-014",
    class: "SSS 2",
    topic: "Indices",
    question: "Find the value of x that satisfies: 9^(x + 1) - 28(3^x) + 3 = 0.",
    options: { A: "x = 1 or x = -2", B: "x = -1 or x = 1", C: "x = -1 or x = -2", D: "x = 2 or x = 0" },
    correctAnswer: "A",
    explanation: "9 * (3^x)^2 - 28(3^x) + 3 = 0. Let u = 3^x: 9u^2 - 28u + 3 = 0 => (9u - 1)(u - 3) = 0. u = 1/9 => 3^x = 3^(-2) => x = -2; u = 3 => 3^x = 3^1 => x = 1. Thus x = 1 or x = -2."
  },
  {
    id: "SS2-IND-015",
    class: "SSS 2",
    topic: "Indices",
    question: "If 10^(0.3010) = 2 and 10^(0.4771) = 3, what is 10^(1.0791)?",
    options: { A: "12", B: "6", C: "18", D: "24" },
    correctAnswer: "A",
    explanation: "10^(1.0791) = 10^(2 * 0.3010 + 0.4771) = 10^(0.6020 + 0.4771) = (10^0.3010)^2 * 10^0.4771 = 2^2 * 3 = 12."
  },
  {
    id: "SS2-IND-016",
    class: "SSS 2",
    topic: "Indices",
    question: "Solve for y in the equation: 3^(2y + 1) - 10(3^y) + 3 = 0.",
    options: { A: "y = 1 or y = -1", B: "y = 2 or y = 0", C: "y = 3 or y = 1/3", D: "y = -1 or y = -2" },
    correctAnswer: "A",
    explanation: "3 * 3^(2y) - 10(3^y) + 3 = 0. Let m = 3^y: 3m^2 - 10m + 3 = 0 => (3m - 1)(m - 3) = 0. m = 1/3 => y = -1; m = 3 => y = 1."
  },
  {
    id: "SS2-IND-017",
    class: "SSS 2",
    topic: "Indices",
    question: "Evaluate: (64/27)^(-2/3) * (16/81)^(1/2).",
    options: { A: "1/4", B: "1/3", C: "2/3", D: "3/4" },
    correctAnswer: "A",
    explanation: "(64/27)^(-2/3) = (27/64)^(2/3) = (3/4)^2 = 9/16. (16/81)^(1/2) = 4/9. Then (9/16) * (4/9) = 36/144 = 1/4."
  },
  {
    id: "SS2-IND-018",
    class: "SSS 2",
    topic: "Indices",
    question: "If 2^(x - 1) + 2^(x + 1) = 40, find x.",
    options: { A: "4", B: "3", C: "5", D: "6" },
    correctAnswer: "A",
    explanation: "2^x * (1/2 + 2) = 40 => 2^x * (5/2) = 40 => 2^x = 40 * (2/5) = 16 = 2^4 => x = 4."
  },
  {
    id: "SS2-IND-019",
    class: "SSS 2",
    topic: "Indices",
    question: "Given that 2^x = 3^y = 6^(-z), express z in terms of x and y.",
    options: { A: "z = -xy / (x + y)", B: "z = xy / (x + y)", C: "z = (x + y) / xy", D: "z = x + y" },
    correctAnswer: "A",
    explanation: "Let 2^x = 3^y = 6^(-z) = k. Then 2 = k^(1/x), 3 = k^(1/y), 6 = k^(-1/z). Since 2 * 3 = 6, k^(1/x + 1/y) = k^(-1/z). Hence 1/x + 1/y = -1/z => (x + y)/(xy) = -1/z => z = -xy / (x + y)."
  },
  {
    id: "SS2-IND-020",
    class: "SSS 2",
    topic: "Indices",
    question: "Simplify: ((a^3 * b^(-2)) / (a^(-1) * b^4))^(-1/2).",
    options: { A: "b^3 / a^2", B: "a^2 / b^3", C: "b^2 / a^3", D: "a / b^2" },
    correctAnswer: "A",
    explanation: "Inside parenthesis: a^(3 - (-1)) * b^(-2 - 4) = a^4 * b^(-6). Taking power of -1/2: (a^4)^(-1/2) * (b^(-6))^(-1/2) = a^(-2) * b^3 = b^3 / a^2."
  },

  // ── 2. LOGARITHM THEORY (20 Questions) ────────────────────────────────────
  {
    id: "SS2-LOG-001",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If log_a (x) = m and log_a (y) = n, express log_a (x^3 / y^2) in terms of m and n.",
    options: { A: "3m - 2n", B: "3m + 2n", C: "m^3 - n^2", D: "(3m) / (2n)" },
    correctAnswer: "A",
    explanation: "By logarithm properties: log_a(x^3 / y^2) = log_a(x^3) - log_a(y^2) = 3 log_a(x) - 2 log_a(y) = 3m - 2n."
  },
  {
    id: "SS2-LOG-002",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Solve the equation: log_2 (x) + log_2 (x - 2) = 3.",
    options: { A: "x = 4", B: "x = -2", C: "x = 4 or x = -2", D: "x = 6" },
    correctAnswer: "A",
    explanation: "log_2[x(x - 2)] = 3 => x(x - 2) = 2^3 = 8 => x^2 - 2x - 8 = 0 => (x - 4)(x + 2) = 0. Since log of negative number is undefined, x = 4 only."
  },
  {
    id: "SS2-LOG-003",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "By the change of base rule, log_b (a) is equivalent to:",
    options: { A: "log_c (a) / log_c (b)", B: "log_c (b) / log_c (a)", C: "log_c (a * b)", D: "log_c (a - b)" },
    correctAnswer: "A",
    explanation: "The change of base formula states that log_b(a) = log_c(a) / log_c(b) for any valid base c."
  },
  {
    id: "SS2-LOG-004",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Find x if log_3 (x + 6) - log_3 (x) = 2.",
    options: { A: "3/4", B: "4/3", C: "2", D: "1/2" },
    correctAnswer: "A",
    explanation: "log_3((x + 6)/x) = 2 => (x + 6)/x = 3^2 = 9 => x + 6 = 9x => 8x = 6 => x = 6/8 = 3/4."
  },
  {
    id: "SS2-LOG-005",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If log_10 (2) = 0.3010 and log_10 (3) = 0.4771, calculate log_10 (15).",
    options: { A: "1.1761", B: "1.4771", C: "0.7781", D: "1.2552" },
    correctAnswer: "A",
    explanation: "15 = (3 * 10) / 2. log_10(15) = log_10(3) + log_10(10) - log_10(2) = 0.4771 + 1 - 0.3010 = 1.1761."
  },
  {
    id: "SS2-LOG-006",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Evaluate without tables: log_2 (32) + log_3 (81) - log_5 (125).",
    options: { A: "6", B: "4", C: "7", D: "5" },
    correctAnswer: "A",
    explanation: "log_2(32) = 5, log_3(81) = 4, log_5(125) = 3. 5 + 4 - 3 = 6."
  },
  {
    id: "SS2-LOG-007",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Solve for x: log_x (64) = -3.",
    options: { A: "1/4", B: "4", C: "-4", D: "1/8" },
    correctAnswer: "A",
    explanation: "x^(-3) = 64 => (1/x)^3 = 4^3 => 1/x = 4 => x = 1/4."
  },
  {
    id: "SS2-LOG-008",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Given that log_10 (y) = 2 log_10 (x) + 3, express y in terms of x.",
    options: { A: "y = 1000x^2", B: "y = x^2 + 1000", C: "y = 3x^2", D: "y = 1000x" },
    correctAnswer: "A",
    explanation: "log_10(y) = log_10(x^2) + log_10(1000) = log_10(1000x^2). Removing logs gives y = 1000x^2."
  },
  {
    id: "SS2-LOG-009",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If log_4 (x) = 2.5, find x.",
    options: { A: "32", B: "16", C: "64", D: "10" },
    correctAnswer: "A",
    explanation: "x = 4^(2.5) = 4^(5/2) = (sqrt(4))^5 = 2^5 = 32."
  },
  {
    id: "SS2-LOG-010",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Simplify: log_a (b) * log_b (c) * log_c (a).",
    options: { A: "1", B: "0", C: "a * b * c", D: "log_a (abc)" },
    correctAnswer: "A",
    explanation: "Using change of base to common base 10: (log b / log a) * (log c / log b) * (log a / log c) = 1."
  },
  {
    id: "SS2-LOG-011",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Solve the equation: log_10 (x^2 - 1) - log_10 (x - 1) = 1.",
    options: { A: "x = 9", B: "x = 10", C: "x = 11", D: "x = 8" },
    correctAnswer: "A",
    explanation: "log_10((x^2 - 1)/(x - 1)) = 1 => log_10(x + 1) = 1 => x + 1 = 10^1 = 10 => x = 9."
  },
  {
    id: "SS2-LOG-012",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If log_2 (x) + 2 log_4 (x) = 4, find x.",
    options: { A: "4", B: "8", C: "16", D: "2" },
    correctAnswer: "A",
    explanation: "log_4(x) = log_2(x) / log_2(4) = (1/2) log_2(x). So 2 log_4(x) = log_2(x). Equation becomes log_2(x) + log_2(x) = 4 => 2 log_2(x) = 4 => log_2(x) = 2 => x = 4."
  },
  {
    id: "SS2-LOG-013",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "What is the value of log_8 (16)?",
    options: { A: "4/3", B: "3/4", C: "2", D: "1/2" },
    correctAnswer: "A",
    explanation: "Let log_8(16) = x => 8^x = 16 => (2^3)^x = 2^4 => 3x = 4 => x = 4/3."
  },
  {
    id: "SS2-LOG-014",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If log_10 (2) = 0.3010, how many digits are there in 2^50?",
    options: { A: "16", B: "15", C: "17", D: "50" },
    correctAnswer: "A",
    explanation: "Number of digits = floor(log_10(2^50)) + 1 = floor(50 * 0.3010) + 1 = floor(15.05) + 1 = 15 + 1 = 16 digits."
  },
  {
    id: "SS2-LOG-015",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Solve for x: (log_3 x)^2 - 4 log_3 x + 3 = 0.",
    options: { A: "x = 3 or x = 27", B: "x = 1 or x = 3", C: "x = 9 or x = 27", D: "x = 3 or x = 9" },
    correctAnswer: "A",
    explanation: "Let y = log_3 x: y^2 - 4y + 3 = 0 => (y - 1)(y - 3) = 0. y = 1 => log_3 x = 1 => x = 3; y = 3 => log_3 x = 3 => x = 3^3 = 27."
  },
  {
    id: "SS2-LOG-016",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If log_a (2) = x and log_a (3) = y, find log_a (√6).",
    options: { A: "(x + y) / 2", B: "x + y", C: "2(x + y)", D: "sqrt(xy)" },
    correctAnswer: "A",
    explanation: "log_a(sqrt(6)) = (1/2) log_a(6) = (1/2)[log_a(2) + log_a(3)] = (x + y)/2."
  },
  {
    id: "SS2-LOG-017",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Evaluate: 5^(log_5 7).",
    options: { A: "7", B: "5", C: "35", D: "log_5 7" },
    correctAnswer: "A",
    explanation: "By the fundamental identity of logarithms, b^(log_b x) = x. Hence 5^(log_5 7) = 7."
  },
  {
    id: "SS2-LOG-018",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Find x if log_2 (log_3 x) = 1.",
    options: { A: "9", B: "6", C: "8", D: "3" },
    correctAnswer: "A",
    explanation: "log_2(log_3 x) = 1 => log_3 x = 2^1 = 2 => x = 3^2 = 9."
  },
  {
    id: "SS2-LOG-019",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If log_10 (x - 3) + log_10 (x) = 1, find x.",
    options: { A: "x = 5", B: "x = 2", C: "x = -2", D: "x = 5 or x = -2" },
    correctAnswer: "A",
    explanation: "log_10[x(x - 3)] = 1 => x^2 - 3x = 10 => x^2 - 3x - 10 = 0 => (x - 5)(x + 2) = 0. Since x > 3 for log to be real, x = 5."
  },
  {
    id: "SS2-LOG-020",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Express log_b (sqrt(x^3 / y)) in terms of log_b x and log_b y.",
    options: { A: "(3/2) log_b x - (1/2) log_b y", B: "3 log_b x - log_b y", C: "(1/2)(3 log_b x + log_b y)", D: "(3/2) log_b (x/y)" },
    correctAnswer: "A",
    explanation: "log_b((x^3 / y)^(1/2)) = (1/2) log_b(x^3 / y) = (1/2)[3 log_b x - log_b y] = (3/2) log_b x - (1/2) log_b y."
  },

  // ── 3. SET THEORY (20 Questions - 3 Sets & Advanced) ─────────────────────
  {
    id: "SS2-SET-001",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a class of 50 students, 30 study Physics, 25 study Chemistry, and 10 study both. How many study neither Physics nor Chemistry?",
    options: { A: "5", B: "10", C: "15", D: "0" },
    correctAnswer: "A",
    explanation: "n(P ∪ C) = n(P) + n(C) - n(P ∩ C) = 30 + 25 - 10 = 45. Number studying neither = Total - n(P ∪ C) = 50 - 45 = 5."
  },
  {
    id: "SS2-SET-002",
    class: "SSS 2",
    topic: "Set Theory",
    question: "For three sets A, B, and C, the expression (A ∪ B)' is equivalent to:",
    options: { A: "A' ∩ B'", B: "A' ∪ B'", C: "A ∩ B'", D: "(A ∩ B)'" },
    correctAnswer: "A",
    explanation: "By De Morgan's Law, the complement of the union of two sets is the intersection of their complements: (A ∪ B)' = A' ∩ B'."
  },
  {
    id: "SS2-SET-003",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a survey of 100 people, 60 like Apple, 45 like Banana, 35 like Orange, 20 like Apple and Banana, 15 like Apple and Orange, 10 like Banana and Orange, and 5 like all three. How many like none of the three fruits?",
    options: { A: "0", B: "5", C: "10", D: "15" },
    correctAnswer: "A",
    explanation: "n(A ∪ B ∪ O) = 60 + 45 + 35 - (20 + 15 + 10) + 5 = 140 - 45 + 5 = 100. People liking none = 100 - 100 = 0."
  },
  {
    id: "SS2-SET-004",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If n(A) = 28, n(B) = 32, and n(A ∪ B) = 45, find the number of elements in only set A, n(A ∩ B').",
    options: { A: "13", B: "15", C: "17", D: "28" },
    correctAnswer: "A",
    explanation: "n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 28 + 32 - 45 = 15. Elements in only A = n(A) - n(A ∩ B) = 28 - 15 = 13."
  },
  {
    id: "SS2-SET-005",
    class: "SSS 2",
    topic: "Set Theory",
    question: "The symmetric difference of two sets A and B, denoted A Δ B, is defined as:",
    options: { A: "(A ∪ B) \\ (A ∩ B)", B: "A ∩ B", C: "A' ∪ B'", D: "(A \\ B) ∩ (B \\ A)" },
    correctAnswer: "A",
    explanation: "A Δ B consists of elements in A or B but not in both: (A ∪ B) \\ (A ∩ B) or (A \\ B) ∪ (B \\ A)."
  },
  {
    id: "SS2-SET-006",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If A = {1, 2} and B = {3, 4, 5}, how many elements are in the Cartesian product A x B?",
    options: { A: "6", B: "5", C: "8", D: "9" },
    correctAnswer: "A",
    explanation: "n(A x B) = n(A) * n(B) = 2 * 3 = 6."
  },
  {
    id: "SS2-SET-007",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a group of 60 students, 35 play football, 30 play volleyball, and 12 play both. How many students play exactly one sport?",
    options: { A: "41", B: "53", C: "23", D: "18" },
    correctAnswer: "A",
    explanation: "Football only = 35 - 12 = 23. Volleyball only = 30 - 12 = 18. Exactly one sport = 23 + 18 = 41."
  },
  {
    id: "SS2-SET-008",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If set P has 6 elements, what is the number of proper subsets of P?",
    options: { A: "63", B: "64", C: "31", D: "32" },
    correctAnswer: "A",
    explanation: "The number of proper subsets is 2^n - 1. For n = 6: 2^6 - 1 = 64 - 1 = 63."
  },
  {
    id: "SS2-SET-009",
    class: "SSS 2",
    topic: "Set Theory",
    question: "Which of the following represents the shaded region for (A ∩ B) ∪ (A ∩ C)?",
    options: { A: "A ∩ (B ∪ C)", B: "A ∪ (B ∩ C)", C: "(A ∪ B) ∩ C", D: "A' ∩ (B ∪ C)" },
    correctAnswer: "A",
    explanation: "By the distributive law of sets: (A ∩ B) ∪ (A ∩ C) = A ∩ (B ∪ C)."
  },
  {
    id: "SS2-SET-010",
    class: "SSS 2",
    topic: "Set Theory",
    question: "Out of 80 students, 45 take French, 40 take German. If 15 take neither, how many take both French and German?",
    options: { A: "20", B: "15", C: "25", D: "30" },
    correctAnswer: "A",
    explanation: "Total taking at least one = 80 - 15 = 65. n(F ∪ G) = n(F) + n(G) - n(F ∩ G) => 65 = 45 + 40 - n(F ∩ G) => n(F ∩ G) = 85 - 65 = 20."
  },
  {
    id: "SS2-SET-011",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If ξ = {integers from 1 to 20}, E = {multiples of 2}, F = {multiples of 3}, find n(E ∩ F).",
    options: { A: "3", B: "6", C: "10", D: "2" },
    correctAnswer: "A",
    explanation: "E ∩ F consists of multiples of LCM(2, 3) = 6 between 1 and 20: {6, 12, 18}. There are 3 elements."
  },
  {
    id: "SS2-SET-012",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If A ⊂ B, which of the following is ALWAYS true?",
    options: { A: "A ∩ B = A", B: "A ∪ B = A", C: "A ∩ B = B", D: "A' ⊂ B'" },
    correctAnswer: "A",
    explanation: "If A is a subset of B, all elements of A are in B, so their intersection is A: A ∩ B = A, and their union is B."
  },
  {
    id: "SS2-SET-013",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a town, 70% of households have a TV, 60% have a radio, and 50% have both. What percentage of households have neither?",
    options: { A: "20%", B: "10%", C: "30%", D: "15%" },
    correctAnswer: "A",
    explanation: "Percentage with TV or radio = 70 + 60 - 50 = 80%. Percentage with neither = 100% - 80% = 20%."
  },
  {
    id: "SS2-SET-014",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If n(A) = 10, n(B) = 15, what is the MAXIMUM possible value of n(A ∪ B)?",
    options: { A: "25", B: "15", C: "10", D: "30" },
    correctAnswer: "A",
    explanation: "The union is maximized when the sets are completely disjoint (n(A ∩ B) = 0). Then n(A ∪ B) = 10 + 15 = 25."
  },
  {
    id: "SS2-SET-015",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If n(A) = 10, n(B) = 15, what is the MINIMUM possible value of n(A ∪ B)?",
    options: { A: "15", B: "10", C: "5", D: "25" },
    correctAnswer: "A",
    explanation: "The union is minimized when the smaller set A is completely contained in B (A ⊂ B). Then n(A ∪ B) = n(B) = 15."
  },
  {
    id: "SS2-SET-016",
    class: "SSS 2",
    topic: "Set Theory",
    question: "Given A = {x : x is a letter in the word 'MATHEMATICS'}, find n(A).",
    options: { A: "8", B: "11", C: "7", D: "9" },
    correctAnswer: "A",
    explanation: "The distinct letters are M, A, T, H, E, I, C, S. There are 8 distinct letters."
  },
  {
    id: "SS2-SET-017",
    class: "SSS 2",
    topic: "Set Theory",
    question: "Which of the following is equivalent to (A ∩ B)'?",
    options: { A: "A' ∪ B'", B: "A' ∩ B'", C: "A ∪ B'", D: "A' ∪ B" },
    correctAnswer: "A",
    explanation: "By De Morgan's Law, (A ∩ B)' = A' ∪ B'."
  },
  {
    id: "SS2-SET-018",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If A and B are two sets such that A \\ B = A, what can be deduced about A and B?",
    options: { A: "A and B are disjoint", B: "A ⊂ B", C: "B ⊂ A", D: "A = B" },
    correctAnswer: "A",
    explanation: "A \\ B = A means removing all elements of B from A leaves A unchanged. This occurs if and only if A and B have no common elements, i.e., A ∩ B = ∅."
  },
  {
    id: "SS2-SET-019",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a class of 40 students, 22 offer Biology, 18 offer Geography, and 6 offer both. How many offer Biology only?",
    options: { A: "16", B: "12", C: "22", D: "14" },
    correctAnswer: "A",
    explanation: "Biology only = n(B) - n(B ∩ G) = 22 - 6 = 16."
  },
  {
    id: "SS2-SET-020",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a 3-set problem where n(ξ) = 50, n(A) = 20, n(B) = 25, n(C) = 22, n(A ∩ B) = 10, n(B ∩ C) = 8, n(A ∩ C) = 7, and n(A ∩ B ∩ C) = 3, how many elements are outside A ∪ B ∪ C?",
    options: { A: "5", B: "8", C: "10", D: "3" },
    correctAnswer: "A",
    explanation: "n(A ∪ B ∪ C) = 20 + 25 + 22 - (10 + 8 + 7) + 3 = 67 - 25 + 3 = 45. Outside = 50 - 45 = 5."
  },

  // ── 4. QUADRATIC EQUATIONS (20 Questions) ─────────────────────────────────
  {
    id: "SS2-QUA-001",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Find the roots of the quadratic equation: 2x^2 - 5x - 3 = 0.",
    options: { A: "x = 3 or x = -1/2", B: "x = -3 or x = 1/2", C: "x = 3 or x = 1/2", D: "x = -3 or x = -1/2" },
    correctAnswer: "A",
    explanation: "Factorizing: 2x^2 - 6x + x - 3 = 0 => 2x(x - 3) + 1(x - 3) = 0 => (2x + 1)(x - 3) = 0. Hence x = 3 or x = -1/2."
  },
  {
    id: "SS2-QUA-002",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If alpha and beta are the roots of 3x^2 - 7x + 2 = 0, find the value of alpha + beta.",
    options: { A: "7/3", B: "-7/3", C: "2/3", D: "-2/3" },
    correctAnswer: "A",
    explanation: "For ax^2 + bx + c = 0, sum of roots alpha + beta = -b/a = -(-7)/3 = 7/3."
  },
  {
    id: "SS2-QUA-003",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "For what value of k will the quadratic equation x^2 + kx + 9 = 0 have equal roots?",
    options: { A: "±6", B: "±3", C: "±9", D: "±18" },
    correctAnswer: "A",
    explanation: "For equal roots, the discriminant b^2 - 4ac = 0. Here k^2 - 4(1)(9) = 0 => k^2 - 36 = 0 => k = ±6."
  },
  {
    id: "SS2-QUA-004",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Form the quadratic equation whose roots are -3 and 5.",
    options: { A: "x^2 - 2x - 15 = 0", B: "x^2 + 2x - 15 = 0", C: "x^2 - 8x + 15 = 0", D: "x^2 + 8x - 15 = 0" },
    correctAnswer: "A",
    explanation: "Sum of roots = -3 + 5 = 2. Product of roots = -3 * 5 = -15. Equation: x^2 - (sum)x + product = 0 => x^2 - 2x - 15 = 0."
  },
  {
    id: "SS2-QUA-005",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If alpha and beta are roots of 2x^2 + 3x - 5 = 0, find the value of alpha * beta.",
    options: { A: "-5/2", B: "5/2", C: "-3/2", D: "3/2" },
    correctAnswer: "A",
    explanation: "Product of roots = c/a = -5/2."
  },
  {
    id: "SS2-QUA-006",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If the roots of ax^2 + bx + c = 0 are real and distinct, then:",
    options: { A: "b^2 - 4ac > 0", B: "b^2 - 4ac = 0", C: "b^2 - 4ac < 0", D: "b^2 - 4ac ≤ 0" },
    correctAnswer: "A",
    explanation: "A positive discriminant (b^2 - 4ac > 0) indicates two real and distinct roots."
  },
  {
    id: "SS2-QUA-007",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Solve by completing the square: x^2 + 6x - 7 = 0.",
    options: { A: "x = 1 or x = -7", B: "x = -1 or x = 7", C: "x = 2 or x = -8", D: "x = -2 or x = 8" },
    correctAnswer: "A",
    explanation: "x^2 + 6x = 7 => (x + 3)^2 = 7 + 9 = 16 => x + 3 = ±4 => x = 4 - 3 = 1 or x = -4 - 3 = -7."
  },
  {
    id: "SS2-QUA-008",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If alpha and beta are roots of x^2 - 4x + 1 = 0, evaluate alpha^2 + beta^2.",
    options: { A: "14", B: "16", C: "18", D: "12" },
    correctAnswer: "A",
    explanation: "alpha + beta = 4, alpha * beta = 1. alpha^2 + beta^2 = (alpha + beta)^2 - 2(alpha * beta) = 4^2 - 2(1) = 16 - 2 = 14."
  },
  {
    id: "SS2-QUA-009",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Find the values of m for which the line y = 2x + m is tangent to the curve y = x^2.",
    options: { A: "m = -1", B: "m = 1", C: "m = -2", D: "m = 2" },
    correctAnswer: "A",
    explanation: "x^2 = 2x + m => x^2 - 2x - m = 0. Tangency means equal roots (b^2 - 4ac = 0): (-2)^2 - 4(1)(-m) = 0 => 4 + 4m = 0 => m = -1."
  },
  {
    id: "SS2-QUA-010",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "The length of a rectangular field is 3m more than its width. If the area is 70 m^2, find its perimeter.",
    options: { A: "34 m", B: "20 m", C: "40 m", D: "28 m" },
    correctAnswer: "A",
    explanation: "w(w + 3) = 70 => w^2 + 3w - 70 = 0 => (w + 10)(w - 7) = 0 => w = 7 m. Length = 10 m. Perimeter = 2(7 + 10) = 34 m."
  },
  {
    id: "SS2-QUA-011",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Solve the equation: 3x^2 = 12.",
    options: { A: "x = ±2", B: "x = 4", C: "x = ±4", D: "x = 2" },
    correctAnswer: "A",
    explanation: "x^2 = 12 / 3 = 4 => x = ±sqrt(4) = ±2."
  },
  {
    id: "SS2-QUA-012",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If alpha and beta are roots of x^2 - 5x + 6 = 0, find the value of (1/alpha) + (1/beta).",
    options: { A: "5/6", B: "6/5", C: "-5/6", D: "1/5" },
    correctAnswer: "A",
    explanation: "alpha + beta = 5, alpha * beta = 6. (1/alpha) + (1/beta) = (alpha + beta)/(alpha * beta) = 5/6."
  },
  {
    id: "SS2-QUA-013",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Determine the nature of the roots of 2x^2 + 3x + 5 = 0.",
    options: { A: "Complex / Non-real", B: "Real and equal", C: "Real and distinct", D: "Rational and unequal" },
    correctAnswer: "A",
    explanation: "b^2 - 4ac = 3^2 - 4(2)(5) = 9 - 40 = -31 < 0. Since the discriminant is negative, the roots are complex/non-real."
  },
  {
    id: "SS2-QUA-014",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Solve the equation: (2x - 3)^2 = 25.",
    options: { A: "x = 4 or x = -1", B: "x = 4 or x = 1", C: "x = 14 or x = -11", D: "x = 5 or x = -5" },
    correctAnswer: "A",
    explanation: "2x - 3 = ±5. 2x - 3 = 5 => 2x = 8 => x = 4. 2x - 3 = -5 => 2x = -2 => x = -1."
  },
  {
    id: "SS2-QUA-015",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Find the quadratic equation whose roots are 1/2 and -2/3.",
    options: { A: "6x^2 + x - 2 = 0", B: "6x^2 - x - 2 = 0", C: "6x^2 - x + 2 = 0", D: "6x^2 + x + 2 = 0" },
    correctAnswer: "A",
    explanation: "Sum of roots = 1/2 + (-2/3) = -1/6. Product = (1/2)(-2/3) = -1/3. Equation: x^2 - (-1/6)x + (-1/3) = 0 => 6x^2 + x - 2 = 0."
  },
  {
    id: "SS2-QUA-016",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "The sum of the squares of two consecutive positive integers is 41. Find the two numbers.",
    options: { A: "4 and 5", B: "3 and 4", C: "5 and 6", D: "6 and 7" },
    correctAnswer: "A",
    explanation: "n^2 + (n + 1)^2 = 41 => n^2 + n^2 + 2n + 1 = 41 => 2n^2 + 2n - 40 = 0 => n^2 + n - 20 = 0 => (n + 5)(n - 4) = 0. Since positive, n = 4 and n + 1 = 5."
  },
  {
    id: "SS2-QUA-017",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Solve for x in: x + 6/x = 5.",
    options: { A: "x = 2 or x = 3", B: "x = 1 or x = 6", C: "x = -2 or x = -3", D: "x = 3 or x = -2" },
    correctAnswer: "A",
    explanation: "Multiply by x: x^2 + 6 = 5x => x^2 - 5x + 6 = 0 => (x - 2)(x - 3) = 0 => x = 2 or x = 3."
  },
  {
    id: "SS2-QUA-018",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If one root of x^2 + px + 12 = 0 is 3, find the other root and p.",
    options: { A: "other root = 4, p = -7", B: "other root = 4, p = 7", C: "other root = -4, p = 1", D: "other root = -4, p = -7" },
    correctAnswer: "A",
    explanation: "Product of roots = 12. Since one root is 3, other root = 12 / 3 = 4. Sum of roots = 3 + 4 = 7 = -p => p = -7."
  },
  {
    id: "SS2-QUA-019",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Solve the equation: 4x^2 - 12x + 9 = 0.",
    options: { A: "x = 3/2 (twice)", B: "x = -3/2 (twice)", C: "x = 3 or x = 2", D: "x = 9/4" },
    correctAnswer: "A",
    explanation: "This is a perfect square trinomial: (2x - 3)^2 = 0 => 2x - 3 = 0 => x = 3/2."
  },
  {
    id: "SS2-QUA-020",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If alpha and beta are roots of x^2 - 3x + 1 = 0, form the equation whose roots are 2*alpha and 2*beta.",
    options: { A: "x^2 - 6x + 4 = 0", B: "x^2 - 6x + 2 = 0", C: "x^2 - 3x + 4 = 0", D: "x^2 + 6x - 4 = 0" },
    correctAnswer: "A",
    explanation: "New sum = 2(alpha + beta) = 2(3) = 6. New product = (2*alpha)(2*beta) = 4(alpha * beta) = 4(1) = 4. Equation: x^2 - 6x + 4 = 0."
  },

  // ── 5. LOGARITHMS OF NUMBERS < 1 / BAR NOTATION (20 Questions) ───────────
  {
    id: "SS2-BAR-001",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "What is the characteristic of log_10 (0.00452)?",
    options: { A: "Bar 3 (-3)", B: "Bar 2 (-2)", C: "Bar 4 (-4)", D: "3" },
    correctAnswer: "A",
    explanation: "In scientific notation, 0.00452 = 4.52 * 10^(-3). The first non-zero digit is in the 3rd decimal place (or 2 zeros between decimal point and first non-zero digit). Hence characteristic is Bar 3."
  },
  {
    id: "SS2-BAR-002",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Evaluate: Bar 2.456 + Bar 1.328.",
    options: { A: "Bar 3.784", B: "Bar 2.784", C: "Bar 4.784", D: "-3.784" },
    correctAnswer: "A",
    explanation: "Mantissa addition: 0.456 + 0.328 = 0.784. Characteristic addition: (-2) + (-1) = -3 = Bar 3. Combining gives Bar 3.784."
  },
  {
    id: "SS2-BAR-003",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Evaluate: Bar 2.845 + Bar 3.426.",
    options: { A: "Bar 4.271", B: "Bar 5.271", C: "Bar 6.271", D: "Bar 5.171" },
    correctAnswer: "A",
    explanation: "Mantissa: 0.845 + 0.426 = 1.271 (write 0.271 and carry +1 to characteristic). Characteristic: (-2) + (-3) + (+1) = -4 = Bar 4. Result: Bar 4.271."
  },
  {
    id: "SS2-BAR-004",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Subtract: Bar 3.452 - Bar 1.638.",
    options: { A: "Bar 2.814", B: "Bar 3.814", C: "Bar 1.814", D: "Bar 4.814" },
    correctAnswer: "A",
    explanation: "Mantissa subtraction: 0.452 - 0.638 is negative. Borrow 1 from characteristic: (1 + 0.452) - 0.638 = 1.452 - 0.638 = 0.814. Characteristic becomes (-3 - 1) - (-1) = -4 + 1 = -3 = Bar 3? Let's check: (-3 + 0.452) - (-1 + 0.638) = -2.548 - (-0.362) = -2.186 = Bar 3.814! Wait: -3 + 0.814 = -2.186. So Bar 3.814! Let's check: Bar 3 - Bar 1 - 1 = -3 - (-1) - 1 = -3 + 1 - 1 = -3. So characteristic is Bar 3. Thus the answer is Bar 3.814."
  },
  {
    id: "SS2-BAR-005",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Calculate: Bar 2.345 * 3.",
    options: { A: "Bar 5.035", B: "Bar 6.035", C: "Bar 4.035", D: "Bar 7.035" },
    correctAnswer: "A",
    explanation: "Bar 2.345 = -2 + 0.345. Multiplying by 3: 3 * 0.345 = 1.035 = 1 + 0.035. 3 * (-2) = -6. Combining: -6 + 1 + 0.035 = -5 + 0.035 = Bar 5.035."
  },
  {
    id: "SS2-BAR-006",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Evaluate: Bar 3.756 / 2.",
    options: { A: "Bar 2.878", B: "Bar 1.878", C: "Bar 3.378", D: "Bar 1.378" },
    correctAnswer: "A",
    explanation: "To divide by 2, write the characteristic as a multiple of 2: Bar 3.756 = (-4 + 1.756) / 2 = (-4 / 2) + (1.756 / 2) = -2 + 0.878 = Bar 2.878."
  },
  {
    id: "SS2-BAR-007",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Evaluate: Bar 5.612 / 3.",
    options: { A: "Bar 2.537", B: "Bar 2.871", C: "Bar 1.871", D: "Bar 3.204" },
    correctAnswer: "A",
    explanation: "Make characteristic a multiple of 3: Bar 5 = -6 + 1. So Bar 5.612 = (-6 + 1.612) / 3 = -2 + (1.612 / 3) = -2 + 0.5373 = Bar 2.537 (to 3 d.p.)."
  },
  {
    id: "SS2-BAR-008",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "What is the characteristic of log_10 (0.75)?",
    options: { A: "Bar 1 (-1)", B: "0", C: "Bar 2 (-2)", D: "1" },
    correctAnswer: "A",
    explanation: "0.75 = 7.5 * 10^(-1). Since the first non-zero digit is immediately after the decimal point (0 zeros between), characteristic is Bar 1."
  },
  {
    id: "SS2-BAR-009",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Convert the bar notation Bar 3.45 to an ordinary negative decimal number.",
    options: { A: "-2.55", B: "-3.45", C: "-3.55", D: "-2.45" },
    correctAnswer: "A",
    explanation: "Bar 3.45 means -3 + 0.45 = -2.55."
  },
  {
    id: "SS2-BAR-010",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Convert the ordinary negative number -1.72 into bar notation.",
    options: { A: "Bar 2.28", B: "Bar 1.28", C: "Bar 1.72", D: "Bar 2.72" },
    correctAnswer: "A",
    explanation: "Write as integer + positive mantissa: -1.72 = -2 + (2 - 1.72) = -2 + 0.28 = Bar 2.28."
  },
  {
    id: "SS2-BAR-011",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "If log_10 (x) = Bar 2.6021, find the value of x (given anti-log of 0.6021 is 4.00).",
    options: { A: "0.0400", B: "0.00400", C: "0.400", D: "4.00" },
    correctAnswer: "A",
    explanation: "Characteristic Bar 2 means x = 4.00 * 10^(-2) = 0.0400."
  },
  {
    id: "SS2-BAR-012",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Evaluate: Bar 1.624 * 4.",
    options: { A: "Bar 2.496", B: "Bar 3.496", C: "Bar 4.496", D: "Bar 1.496" },
    correctAnswer: "A",
    explanation: "4 * 0.624 = 2.496 (mantissa is 0.496, carry +2). 4 * (-1) = -4. Combining: -4 + 2 + 0.496 = -2 + 0.496 = Bar 2.496."
  },
  {
    id: "SS2-BAR-013",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "What is the characteristic of log_10 (0.000078)?",
    options: { A: "Bar 5", B: "Bar 4", C: "Bar 6", D: "Bar 3" },
    correctAnswer: "A",
    explanation: "0.000078 = 7.8 * 10^(-5). There are 4 zeros between the decimal point and the first non-zero digit (7), so characteristic is -(4 + 1) = Bar 5."
  },
  {
    id: "SS2-BAR-014",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Evaluate: Bar 4.821 + Bar 2.543.",
    options: { A: "Bar 5.364", B: "Bar 6.364", C: "Bar 7.364", D: "Bar 6.264" },
    correctAnswer: "A",
    explanation: "Mantissa: 0.821 + 0.543 = 1.364 (write 0.364, carry +1). Characteristic: -4 + (-2) + (+1) = -5 = Bar 5. Result: Bar 5.364."
  },
  {
    id: "SS2-BAR-015",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Find the square root of 0.0064 using logarithms: if log(0.0064) = Bar 3.8062, what is (1/2) * log(0.0064)?",
    options: { A: "Bar 2.9031", B: "Bar 1.9031", C: "Bar 1.4031", D: "Bar 3.4031" },
    correctAnswer: "A",
    explanation: "Bar 3.8062 / 2 = (-4 + 1.8062) / 2 = -2 + 0.9031 = Bar 2.9031."
  },
  {
    id: "SS2-BAR-016",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Subtract: Bar 2.378 - Bar 4.825.",
    options: { A: "1.553", B: "Bar 2.553", C: "2.553", D: "Bar 1.553" },
    correctAnswer: "A",
    explanation: "(-2 + 0.378) - (-4 + 0.825) = -2 + 0.378 + 4 - 0.825 = 2 - 0.447 = 1.553."
  },
  {
    id: "SS2-BAR-017",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Evaluate: Bar 7.425 / 5.",
    options: { A: "Bar 2.685", B: "Bar 1.485", C: "Bar 2.485", D: "Bar 1.685" },
    correctAnswer: "A",
    explanation: "Make characteristic a multiple of 5: Bar 7 = -10 + 3. So (-10 + 3.425) / 5 = -2 + 0.685 = Bar 2.685."
  },
  {
    id: "SS2-BAR-018",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "If log_10 (k) = Bar 1.5200, then log_10 (k^3) equals:",
    options: { A: "Bar 2.5600", B: "Bar 3.5600", C: "Bar 1.5600", D: "-3.5600" },
    correctAnswer: "A",
    explanation: "3 * Bar 1.5200 = 3 * (-1 + 0.5200) = 3 * (-1) + 3 * 0.5200 = -3 + 1.5600 = -2 + 0.5600 = Bar 2.5600."
  },
  {
    id: "SS2-BAR-019",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Given that log_10 (2) = 0.3010, find log_10 (0.02).",
    options: { A: "Bar 2.3010", B: "Bar 1.3010", C: "-2.3010", D: "Bar 3.3010" },
    correctAnswer: "A",
    explanation: "0.02 = 2 * 10^(-2). log_10(0.02) = log_10(2) + log_10(10^(-2)) = 0.3010 + (-2) = Bar 2.3010."
  },
  {
    id: "SS2-BAR-020",
    class: "SSS 2",
    topic: "Logarithms of Numbers Less Than 1",
    question: "Given that log_10 (3.54) = 0.5490, find log_10 (0.000354).",
    options: { A: "Bar 4.5490", B: "Bar 3.5490", C: "Bar 5.5490", D: "-4.5490" },
    correctAnswer: "A",
    explanation: "0.000354 = 3.54 * 10^(-4). Therefore log_10(0.000354) = Bar 4.5490."
  }
];

// In Q4 and Q17 of Indices, let's make sure the options are completely precise
// Let's verify Q11 of Indices:
// 8^x = 32^y => 2^(3x) = 2^(5y) => 3x = 5y. And 9^x = 27^(y+1) => 3^(2x) = 3^(3y+3) => 2x = 3y + 3.
// From 3x = 5y => y = 3x/5.
// 2x = 3(3x/5) + 3 = 9x/5 + 3 => x/5 = 3 => x = 15, y = 9.
ss2Questions[10] = {
  id: "SS2-IND-011",
  class: "SSS 2",
  topic: "Indices",
  question: "If 8^x = 32^y and 9^x = 27^(y + 1), find the values of x and y.",
  options: { A: "x = 15, y = 9", B: "x = 10, y = 6", C: "x = 5, y = 3", D: "x = 12, y = 8" },
  correctAnswer: "A",
  explanation: "Express in prime bases: 2^(3x) = 2^(5y) => 3x = 5y => y = 3x/5. Also 3^(2x) = 3^(3(y+1)) => 2x = 3y + 3. Substituting y: 2x = 3(3x/5) + 3 => 2x - 9x/5 = 3 => x/5 = 3 => x = 15. Then y = 3(15)/5 = 9."
};

// Also let's double check Q4 of Bar notation:
// Bar 3.452 - Bar 1.638
// (-3 + 0.452) - (-1 + 0.638) = -2.548 - (-0.362) = -2.186 = -3 + 0.814 = Bar 3.814
ss2Questions[83] = {
  id: "SS2-BAR-004",
  class: "SSS 2",
  topic: "Logarithms of Numbers Less Than 1",
  question: "Subtract: Bar 3.452 - Bar 1.638.",
  options: { A: "Bar 3.814", B: "Bar 2.814", C: "Bar 1.814", D: "Bar 4.814" },
  correctAnswer: "A",
  explanation: "(-3 + 0.452) - (-1 + 0.638) = -3 + 0.452 + 1 - 0.638 = -2 - 0.186 = -2.186. Expressing as integer + positive mantissa: -3 + 0.814 = Bar 3.814."
};

module.exports = ss2Questions;
