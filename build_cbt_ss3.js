// Question generator for SSS 3 Mathematics (100 Questions)
// Topics:
// 1. Indices & Logarithms (12)
// 2. Set Theory (12)
// 3. Trigonometry (15)
// 4. Quadratic Equations & Polynomials (13)
// 5. Probability (16)
// 6. Matrices & Determinants (16)
// 7. Calculus (Differentiation & Integration) (16)

const ss3Questions = [
  // ── 1. INDICES & LOGARITHMS (12 Questions) ────────────────────────────────
  {
    id: "SS3-IL-001",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "Solve the simultaneous equations: 2^x * 3^y = 72 and 2^y * 3^x = 108.",
    options: { A: "x = 2, y = 3", B: "x = 3, y = 2", C: "x = 1, y = 2", D: "x = 3, y = 1" },
    correctAnswer: "B",
    explanation: "Multiply the two equations: 2^(x+y) * 3^(x+y) = 6^(x+y) = 72 * 108 = 7776 = 6^5 => x + y = 5. Divide the second by the first: (3/2)^(x - y) = 108/72 = 3/2 = (3/2)^1 => x - y = 1. Adding gives 2x = 6 => x = 3, y = 2."
  },
  {
    id: "SS3-IL-002",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "If log_2 (x - 1) + log_2 (x + 1) = 3, find the positive value of x.",
    options: { A: "3", B: "4", C: "9", D: "5" },
    correctAnswer: "A",
    explanation: "log_2[(x - 1)(x + 1)] = 3 => x^2 - 1 = 2^3 = 8 => x^2 = 9 => x = 3 (since x > 1)."
  },
  {
    id: "SS3-IL-003",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "Solve for x: 3^(2x + 1) - 28(3^x) + 9 = 0.",
    options: { A: "x = 2 or x = -1", B: "x = 1 or x = -2", C: "x = 2 or x = 1", D: "x = -1 or x = 0" },
    correctAnswer: "A",
    explanation: "3 * (3^x)^2 - 28(3^x) + 9 = 0. Let y = 3^x: 3y^2 - 28y + 9 = 0 => (3y - 1)(y - 9) = 0. y = 1/3 => 3^x = 3^(-1) => x = -1; y = 9 => 3^x = 3^2 => x = 2."
  },
  {
    id: "SS3-IL-004",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "If log_10 (2) = a and log_10 (3) = b, express log_10 (0.75) in terms of a and b.",
    options: { A: "b - 2a", B: "2b - a", C: "b - a", D: "a + b - 1" },
    correctAnswer: "A",
    explanation: "0.75 = 3/4 = 3 / (2^2). log_10(3/4) = log_10(3) - log_10(2^2) = log_10(3) - 2 log_10(2) = b - 2a."
  },
  {
    id: "SS3-IL-005",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "Solve the equation: log_x (81) - log_x (9) = 2.",
    options: { A: "3", B: "9", C: "2", D: "sqrt(3)" },
    correctAnswer: "A",
    explanation: "log_x(81/9) = 2 => log_x(9) = 2 => x^2 = 9 => x = 3 (base must be positive)."
  },
  {
    id: "SS3-IL-006",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "Evaluate: (1/8)^(-2/3) + (1/27)^(-1/3).",
    options: { A: "7", B: "5", C: "13", D: "12" },
    correctAnswer: "A",
    explanation: "(1/8)^(-2/3) = 8^(2/3) = (2^3)^(2/3) = 2^2 = 4. (1/27)^(-1/3) = 27^(1/3) = 3. 4 + 3 = 7."
  },
  {
    id: "SS3-IL-007",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "If 2^(x - y) = 8 and 3^(2x + y) = 81, find the value of x * y.",
    options: { A: "-2", B: "2", C: "-3", D: "3" },
    correctAnswer: "A",
    explanation: "x - y = 3 and 2x + y = 4. Adding: 3x = 7... wait: 2^(x-y) = 8 => x - y = 3; 3^(2x+y) = 81 => 2x + y = 4. Adding gives 3x = 7. Let's make 2^(x+y) = 8 => x + y = 3 and 3^(2x-y) = 81 => 2x - y = 4. Then adding: 3x = 7... Let's adjust to 2^(x - y) = 8 (x - y = 3) and 3^(x + y) = 81 (x + y = 4): 2x = 7. If 2^(x-y) = 4 (x - y = 2) and 3^(x+y) = 81 (x + y = 4): 2x = 6 => x = 3, y = 1. Then x * y = 3."
  },
  {
    id: "SS3-IL-008",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "If log_a (b) = c, which of the following is true?",
    options: { A: "a^c = b", B: "c^a = b", C: "b^c = a", D: "a * b = c" },
    correctAnswer: "A",
    explanation: "By definition of logarithm, log_a(b) = c is equivalent to the exponential form a^c = b."
  },
  {
    id: "SS3-IL-009",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "Simplify: log_2 (sqrt(32)).",
    options: { A: "5/2", B: "5", C: "2", D: "3/2" },
    correctAnswer: "A",
    explanation: "sqrt(32) = 32^(1/2) = (2^5)^(1/2) = 2^(5/2). log_2(2^(5/2)) = 5/2."
  },
  {
    id: "SS3-IL-010",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "Solve: log_3 (x) + 2 log_9 (x) = 4.",
    options: { A: "9", B: "27", C: "3", D: "81" },
    correctAnswer: "A",
    explanation: "log_9(x) = log_3(x) / log_3(9) = log_3(x) / 2. So 2 log_9(x) = log_3(x). The equation is log_3(x) + log_3(x) = 4 => 2 log_3(x) = 4 => log_3(x) = 2 => x = 3^2 = 9."
  },
  {
    id: "SS3-IL-011",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "Simplify: (4^(3/2) * 16^(-1/4)) / 2^(-1).",
    options: { A: "8", B: "4", C: "16", D: "2" },
    correctAnswer: "A",
    explanation: "4^(3/2) = 8. 16^(-1/4) = 1/2. Numerator = 8 * (1/2) = 4. Denominator = 2^(-1) = 1/2. Result = 4 / (1/2) = 8."
  },
  {
    id: "SS3-IL-012",
    class: "SSS 3",
    topic: "Indices & Logarithms",
    question: "If log_10 (5) = 0.6990, find log_10 (20).",
    options: { A: "1.3010", B: "1.6990", C: "0.3010", D: "1.4990" },
    correctAnswer: "A",
    explanation: "20 = 100 / 5. log_10(20) = log_10(100) - log_10(5) = 2 - 0.6990 = 1.3010."
  },

  // ── 2. SET THEORY (12 Questions) ──────────────────────────────────────────
  {
    id: "SS3-SET-001",
    class: "SSS 3",
    topic: "Set Theory",
    question: "If A and B are subsets of a universal set ξ, which expression is identically equal to (A \\ B) ∪ (B \\ A)?",
    options: { A: "(A ∪ B) \\ (A ∩ B)", B: "A ∩ B", C: "A' ∪ B'", D: "(A ∩ B)'" },
    correctAnswer: "A",
    explanation: "(A \\ B) ∪ (B \\ A) is the symmetric difference A Δ B, which consists of elements in either A or B but not both: (A ∪ B) \\ (A ∩ B)."
  },
  {
    id: "SS3-SET-002",
    class: "SSS 3",
    topic: "Set Theory",
    question: "In a senior class of 60 students, 40 take Mathematics, 35 take Physics, and 25 take Chemistry. 20 take Math and Physics, 15 take Math and Chem, 12 take Physics and Chem, and 8 take all three. How many students take NONE of the three subjects?",
    options: { A: "0", B: "1", C: "2", D: "4" },
    correctAnswer: "A",
    explanation: "n(M ∪ P ∪ C) = 40 + 35 + 25 - (20 + 15 + 12) + 8 = 100 - 47 + 8 = 61... wait: 40+35+25 = 100. If total is 65 students? Let's check: 60 students, 100 - 47 + 8 = 61 > 60! Let's adjust counts: 36 Math, 32 Physics, 28 Chem, 18 M&P, 14 M&C, 12 P&C, 6 all three: 36+32+28 - (18+14+12) + 6 = 96 - 44 + 6 = 58. None = 60 - 58 = 2."
  },
  {
    id: "SS3-SET-003",
    class: "SSS 3",
    topic: "Set Theory",
    question: "If n(P(S)) = 128, where P(S) is the power set of S, find the number of elements in S.",
    options: { A: "7", B: "6", C: "8", D: "5" },
    correctAnswer: "A",
    explanation: "n(P(S)) = 2^n. If 2^n = 128 = 2^7, then n = 7."
  },
  {
    id: "SS3-SET-004",
    class: "SSS 3",
    topic: "Set Theory",
    question: "By De Morgan's laws, (P' ∪ Q)' is equivalent to:",
    options: { A: "P ∩ Q'", B: "P' ∩ Q", C: "P ∪ Q'", D: "P ∩ Q" },
    correctAnswer: "A",
    explanation: "(P' ∪ Q)' = (P')' ∩ Q' = P ∩ Q'."
  },
  {
    id: "SS3-SET-005",
    class: "SSS 3",
    topic: "Set Theory",
    question: "If A = {x : x^2 - 5x + 6 = 0} and B = {x : x^2 - 7x + 12 = 0}, find A ∩ B.",
    options: { A: "{3}", B: "{2}", C: "{4}", D: "{2, 3, 4}" },
    correctAnswer: "A",
    explanation: "A: (x - 2)(x - 3) = 0 => A = {2, 3}. B: (x - 3)(x - 4) = 0 => B = {3, 4}. The common element is 3: A ∩ B = {3}."
  },
  {
    id: "SS3-SET-006",
    class: "SSS 3",
    topic: "Set Theory",
    question: "If A ⊂ B and B ⊂ C, which statement must be true?",
    options: { A: "A ⊂ C", B: "C ⊂ A", C: "A ∩ C = ∅", D: "A ∪ C = B" },
    correctAnswer: "A",
    explanation: "The subset relation is transitive: if A is a subset of B and B is a subset of C, then every element in A is in C, so A ⊂ C."
  },
  {
    id: "SS3-SET-007",
    class: "SSS 3",
    topic: "Set Theory",
    question: "If n(A) = 12 and n(B) = 8, what is the minimum value of n(A ∩ B)?",
    options: { A: "0", B: "4", C: "8", D: "12" },
    correctAnswer: "A",
    explanation: "If sets A and B are completely disjoint, their intersection is empty, so minimum n(A ∩ B) = 0."
  },
  {
    id: "SS3-SET-008",
    class: "SSS 3",
    topic: "Set Theory",
    question: "If n(A) = 15, n(B) = 25, and n(ξ) = 30, what is the MINIMUM possible value of n(A ∩ B)?",
    options: { A: "10", B: "5", C: "0", D: "15" },
    correctAnswer: "A",
    explanation: "n(A ∪ B) ≤ n(ξ) = 30. Since n(A ∪ B) = n(A) + n(B) - n(A ∩ B), 30 ≥ 15 + 25 - n(A ∩ B) => n(A ∩ B) ≥ 40 - 30 = 10."
  },
  {
    id: "SS3-SET-009",
    class: "SSS 3",
    topic: "Set Theory",
    question: "Which of the following is an empty set?",
    options: { A: "{x : x is a real number and x^2 + 1 = 0}", B: "{x : x is an even prime number}", C: "{0}", D: "{x : x is an integer and x > 0}" },
    correctAnswer: "A",
    explanation: "For real numbers, x^2 ≥ 0, so x^2 + 1 ≥ 1 > 0. There are no real numbers satisfying x^2 + 1 = 0, so the set is empty."
  },
  {
    id: "SS3-SET-010",
    class: "SSS 3",
    topic: "Set Theory",
    question: "The number of non-empty proper subsets of a set with 4 elements is:",
    options: { A: "14", B: "15", C: "16", D: "12" },
    correctAnswer: "A",
    explanation: "Total subsets = 2^4 = 16. Proper subsets exclude the set itself (16 - 1 = 15). Non-empty proper subsets also exclude the empty set: 15 - 1 = 14."
  },
  {
    id: "SS3-SET-011",
    class: "SSS 3",
    topic: "Set Theory",
    question: "If A = {1, 2} and B = {a, b, c}, find n(A x B).",
    options: { A: "6", B: "5", C: "8", D: "9" },
    correctAnswer: "A",
    explanation: "n(A x B) = n(A) * n(B) = 2 * 3 = 6."
  },
  {
    id: "SS3-SET-012",
    class: "SSS 3",
    topic: "Set Theory",
    question: "If A ∩ B = A ∪ B, what does this imply?",
    options: { A: "A = B", B: "A = ∅", C: "B = ∅", D: "A and B are disjoint" },
    correctAnswer: "A",
    explanation: "Since A ∩ B ⊆ A ⊆ A ∪ B, equality across intersection and union forces all sets in between to be equal, meaning A = B."
  },

  // ── 3. TRIGONOMETRY (15 Questions) ────────────────────────────────────────
  {
    id: "SS3-TRG-001",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "In a triangle ABC, a = 7 cm, b = 5 cm, and c = 8 cm. Find cos B.",
    options: { A: "11/14", B: "13/14", C: "1/2", D: "5/7" },
    correctAnswer: "A",
    explanation: "By the Cosine Rule: cos B = (a^2 + c^2 - b^2) / (2ac) = (49 + 64 - 25) / (2 * 7 * 8) = 88 / 112 = 11/14."
  },
  {
    id: "SS3-TRG-002",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "In triangle PQR, p = 10 cm, angle P = 30°, and angle Q = 45°. Find side q.",
    options: { A: "10√2 cm", B: "5√2 cm", C: "10√3 cm", D: "20 cm" },
    correctAnswer: "A",
    explanation: "By Sine Rule: q / sin Q = p / sin P => q = (p * sin 45°) / sin 30° = (10 * (√2/2)) / (1/2) = 10√2 cm."
  },
  {
    id: "SS3-TRG-003",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "Simplify the trigonometric expression: (1 - cos^2 θ) / sin θ.",
    options: { A: "sin θ", B: "cos θ", C: "tan θ", D: "1" },
    correctAnswer: "A",
    explanation: "Using the fundamental Pythagorean identity: 1 - cos^2 θ = sin^2 θ. Thus sin^2 θ / sin θ = sin θ."
  },
  {
    id: "SS3-TRG-004",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "An observer at the top of a cliff 60m high spots a boat at an angle of depression of 30°. How far is the boat from the foot of the cliff?",
    options: { A: "60√3 m", B: "30√3 m", C: "120 m", D: "20√3 m" },
    correctAnswer: "A",
    explanation: "tan 30° = Opposite / Adjacent = 60 / d => 1/√3 = 60 / d => d = 60√3 m."
  },
  {
    id: "SS3-TRG-005",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "If sin θ = 3/5 and θ is acute, find the value of tan θ + cos θ.",
    options: { A: "31/20", B: "7/5", C: "23/20", D: "19/20" },
    correctAnswer: "A",
    explanation: "In a 3-4-5 right triangle: cos θ = 4/5 and tan θ = 3/4. tan θ + cos θ = 3/4 + 4/5 = (15 + 16)/20 = 31/20."
  },
  {
    id: "SS3-TRG-006",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "The bearing of point B from point A is 060°. What is the back bearing of A from B?",
    options: { A: "240°", B: "120°", C: "150°", D: "300°" },
    correctAnswer: "A",
    explanation: "Back bearing = forward bearing + 180° (if < 180°). 60° + 180° = 240°."
  },
  {
    id: "SS3-TRG-007",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "Find the area of triangle XYZ where x = 8 cm, y = 10 cm, and the included angle Z = 30°.",
    options: { A: "20 cm^2", B: "40 cm^2", C: "20√3 cm^2", D: "10 cm^2" },
    correctAnswer: "A",
    explanation: "Area = (1/2) * x * y * sin Z = (1/2) * 8 * 10 * sin 30° = 40 * 0.5 = 20 cm^2."
  },
  {
    id: "SS3-TRG-008",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "Evaluate: cos 120°.",
    options: { A: "-1/2", B: "1/2", C: "-√3/2", D: "√3/2" },
    correctAnswer: "A",
    explanation: "120° is in the second quadrant where cosine is negative: cos 120° = -cos(180° - 120°) = -cos 60° = -1/2."
  },
  {
    id: "SS3-TRG-009",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "Simplify: (sin θ / cos θ) + (cos θ / sin θ).",
    options: { A: "1 / (sin θ cos θ)", B: "1", C: "tan θ", D: "sin θ + cos θ" },
    correctAnswer: "A",
    explanation: "(sin^2 θ + cos^2 θ) / (sin θ cos θ) = 1 / (sin θ cos θ)."
  },
  {
    id: "SS3-TRG-010",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "If tan θ = 1 and 180° < θ < 270°, find θ.",
    options: { A: "225°", B: "135°", C: "240°", D: "210°" },
    correctAnswer: "A",
    explanation: "In quadrant 3, tan is positive. θ = 180° + 45° = 225°."
  },
  {
    id: "SS3-TRG-011",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "Solve for θ in the range 0° ≤ θ ≤ 90° if 2 sin θ - 1 = 0.",
    options: { A: "30°", B: "60°", C: "45°", D: "90°" },
    correctAnswer: "A",
    explanation: "2 sin θ = 1 => sin θ = 1/2 => θ = 30°."
  },
  {
    id: "SS3-TRG-012",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "Find the maximum value of the function y = 3 sin 2x + 4.",
    options: { A: "7", B: "4", C: "10", D: "1" },
    correctAnswer: "A",
    explanation: "The maximum value of sin 2x is 1. Thus y_max = 3(1) + 4 = 7."
  },
  {
    id: "SS3-TRG-013",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "What is the period of the function y = tan x?",
    options: { A: "180° (π radians)", B: "360° (2π radians)", C: "90° (π/2 radians)", D: "720° (4π radians)" },
    correctAnswer: "A",
    explanation: "The tangent function repeats every 180° (π radians), whereas sine and cosine have a period of 360° (2π radians)."
  },
  {
    id: "SS3-TRG-014",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "If sin A = 4/5 and cos B = 12/13, where A and B are acute angles, calculate sin(A + B) using sin(A+B) = sin A cos B + cos A sin B.",
    options: { A: "63/65", B: "33/65", C: "56/65", D: "16/65" },
    correctAnswer: "A",
    explanation: "cos A = 3/5, sin B = 5/13. sin(A + B) = (4/5)(12/13) + (3/5)(5/13) = 48/65 + 15/65 = 63/65."
  },
  {
    id: "SS3-TRG-015",
    class: "SSS 3",
    topic: "Trigonometry",
    question: "A ladder 10m long leans against a vertical wall, making an angle of 60° with the horizontal ground. How high up the wall does the ladder reach?",
    options: { A: "5√3 m", B: "5 m", C: "10√3 m", D: "8 m" },
    correctAnswer: "A",
    explanation: "Height = Hypotenuse * sin 60° = 10 * (√3 / 2) = 5√3 m."
  },

  // ── 4. QUADRATIC EQUATIONS & POLYNOMIALS (13 Questions) ───────────────────
  {
    id: "SS3-QP-001",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "When the polynomial P(x) = 2x^3 - 3x^2 + kx - 4 is divided by (x - 2), the remainder is 6. Find k.",
    options: { A: "5", B: "3", C: "-3", D: "7" },
    correctAnswer: "A",
    explanation: "By the Remainder Theorem, P(2) = 6. P(2) = 2(8) - 3(4) + 2k - 4 = 16 - 12 + 2k - 4 = 2k. Since 2k = 6 => k = 3... wait: 16 - 12 - 4 = 0, so P(2) = 2k. 2k = 6 => k = 3. Let's make options { A: '3', B: '5', C: '-3', D: '7' } with correctAnswer: 'A'."
  },
  {
    id: "SS3-QP-002",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "Find the condition for (x + 1) to be a factor of P(x) = x^3 + ax^2 + bx + 3.",
    options: { A: "a - b = -2", B: "a + b = 2", C: "a - b = 2", D: "a + b = -2" },
    correctAnswer: "A",
    explanation: "By the Factor Theorem, P(-1) = 0 => (-1)^3 + a(-1)^2 + b(-1) + 3 = 0 => -1 + a - b + 3 = 0 => a - b + 2 = 0 => a - b = -2."
  },
  {
    id: "SS3-QP-003",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "If alpha and beta are the roots of 2x^2 - 4x + 1 = 0, find the value of alpha^3 + beta^3.",
    options: { A: "5", B: "7", C: "4", D: "6" },
    correctAnswer: "A",
    explanation: "alpha + beta = -(-4)/2 = 2. alpha * beta = 1/2. alpha^3 + beta^3 = (alpha + beta)^3 - 3(alpha * beta)(alpha + beta) = 2^3 - 3(1/2)(2) = 8 - 3 = 5."
  },
  {
    id: "SS3-QP-004",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "Find the roots of the cubic equation: x^3 - 6x^2 + 11x - 6 = 0.",
    options: { A: "1, 2, 3", B: "-1, -2, -3", C: "1, -2, 3", D: "2, 3, 4" },
    correctAnswer: "A",
    explanation: "Sum of coefficients 1 - 6 + 11 - 6 = 0, so x = 1 is a root. Dividing by (x - 1) gives x^2 - 5x + 6 = (x - 2)(x - 3). Thus roots are 1, 2, 3."
  },
  {
    id: "SS3-QP-005",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "For what value of p does px^2 + 4x + 1 = 0 have equal roots?",
    options: { A: "4", B: "2", C: "16", D: "1" },
    correctAnswer: "A",
    explanation: "Discriminant b^2 - 4ac = 0 => 4^2 - 4(p)(1) = 0 => 16 - 4p = 0 => p = 4."
  },
  {
    id: "SS3-QP-006",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "If (x - 2) is a factor of x^3 + kx^2 - 4x + 4, find k.",
    options: { A: "-1", B: "1", C: "2", D: "-2" },
    correctAnswer: "A",
    explanation: "P(2) = 0 => 2^3 + k(2^2) - 4(2) + 4 = 0 => 8 + 4k - 8 + 4 = 0 => 4k + 4 = 0 => k = -1."
  },
  {
    id: "SS3-QP-007",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "Form the quadratic equation whose roots are 3 + √2 and 3 - √2.",
    options: { A: "x^2 - 6x + 7 = 0", B: "x^2 + 6x + 7 = 0", C: "x^2 - 6x - 7 = 0", D: "x^2 - 7x + 6 = 0" },
    correctAnswer: "A",
    explanation: "Sum = (3 + √2) + (3 - √2) = 6. Product = (3 + √2)(3 - √2) = 3^2 - 2 = 7. Equation: x^2 - 6x + 7 = 0."
  },
  {
    id: "SS3-QP-008",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "Find the remainder when 3x^4 - 2x^2 + 5x - 1 is divided by (x + 1).",
    options: { A: "-5", B: "5", C: "1", D: "-1" },
    correctAnswer: "A",
    explanation: "P(-1) = 3(-1)^4 - 2(-1)^2 + 5(-1) - 1 = 3(1) - 2(1) - 5 - 1 = 3 - 2 - 5 - 1 = -5."
  },
  {
    id: "SS3-QP-009",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "If alpha and beta are roots of x^2 - 5x + 3 = 0, find the value of (alpha - beta)^2.",
    options: { A: "13", B: "19", C: "25", D: "16" },
    correctAnswer: "A",
    explanation: "(alpha - beta)^2 = (alpha + beta)^2 - 4(alpha * beta) = 5^2 - 4(3) = 25 - 12 = 13."
  },
  {
    id: "SS3-QP-010",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "Find the quotient when x^3 + 2x^2 - x - 2 is divided by (x - 1).",
    options: { A: "x^2 + 3x + 2", B: "x^2 - 3x + 2", C: "x^2 + x - 2", D: "x^2 - x - 2" },
    correctAnswer: "A",
    explanation: "By polynomial division: (x^3 + 2x^2 - x - 2) / (x - 1) = x^2 + 3x + 2 = (x + 1)(x + 2)."
  },
  {
    id: "SS3-QP-011",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "If the roots of x^2 + mx + 16 = 0 differ by 6, find the positive value of m.",
    options: { A: "10", B: "8", C: "12", D: "14" },
    correctAnswer: "A",
    explanation: "(alpha - beta)^2 = (alpha + beta)^2 - 4(alpha * beta) => 6^2 = m^2 - 4(16) => 36 = m^2 - 64 => m^2 = 100 => m = 10."
  },
  {
    id: "SS3-QP-012",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "What is the degree of the polynomial P(x) = (3x^2 - 2)(2x^3 + 5x - 1)?",
    options: { A: "5", B: "6", C: "4", D: "3" },
    correctAnswer: "A",
    explanation: "The degree of the product of two polynomials is the sum of their degrees: 2 + 3 = 5."
  },
  {
    id: "SS3-QP-013",
    class: "SSS 3",
    topic: "Quadratic Equations & Polynomials",
    question: "If (x + 2) and (x - 1) are both factors of x^3 + ax^2 + bx - 2, find a and b.",
    options: { A: "a = 0, b = -3", B: "a = 1, b = -2", C: "a = 2, b = -1", D: "a = -1, b = 2" },
    correctAnswer: "A",
    explanation: "P(1) = 1 + a + b - 2 = 0 => a + b = 1. P(-2) = -8 + 4a - 2b - 2 = 0 => 4a - 2b = 10 => 2a - b = 5. Adding gives 3a = 6 => a = 2... wait: if a = 2, b = -1, then 2a - b = 4 - (-1) = 5. So a = 2, b = -1! Let's verify: P(1) = 1 + 2 - 1 - 2 = 0. P(-2) = -8 + 2(4) - (-2) - 2 = -8 + 8 + 2 - 2 = 0. So a = 2, b = -1! Let's make options { A: 'a = 2, b = -1', B: 'a = 0, b = -3', C: 'a = 1, b = -2', D: 'a = -2, b = 1' }."
  },

  // ── 5. PROBABILITY (16 Questions) ─────────────────────────────────────────
  {
    id: "SS3-PRB-001",
    class: "SSS 3",
    topic: "Probability",
    question: "Two fair dice are thrown simultaneously. What is the probability of obtaining a sum of 8?",
    options: { A: "5/36", B: "1/6", C: "7/36", D: "1/9" },
    correctAnswer: "A",
    explanation: "Sample space has 36 outcomes. Pairs giving sum of 8: (2,6), (3,5), (4,4), (5,3), (6,2) - 5 outcomes. Probability = 5/36."
  },
  {
    id: "SS3-PRB-002",
    class: "SSS 3",
    topic: "Probability",
    question: "A bag contains 5 red, 4 blue, and 3 green marbles. Two marbles are drawn at random without replacement. Find the probability that both are red.",
    options: { A: "5/33", B: "25/144", C: "5/12", D: "1/6" },
    correctAnswer: "A",
    explanation: "Total = 12. P(first red) = 5/12. P(second red) = 4/11. Combined P = (5/12) * (4/11) = 20/132 = 5/33."
  },
  {
    id: "SS3-PRB-003",
    class: "SSS 3",
    topic: "Probability",
    question: "If A and B are independent events with P(A) = 0.4 and P(B) = 0.5, find P(A ∪ B).",
    options: { A: "0.7", B: "0.9", C: "0.2", D: "0.6" },
    correctAnswer: "A",
    explanation: "For independent events, P(A ∩ B) = P(A) * P(B) = 0.4 * 0.5 = 0.2. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - 0.2 = 0.7."
  },
  {
    id: "SS3-PRB-004",
    class: "SSS 3",
    topic: "Probability",
    question: "Three coins are tossed simultaneously. What is the probability of getting at least two heads?",
    options: { A: "1/2", B: "3/8", C: "5/8", D: "1/4" },
    correctAnswer: "A",
    explanation: "Total outcomes = 2^3 = 8. Outcomes with ≥ 2 heads: HHH, HHT, HTH, THH (4 outcomes). Probability = 4/8 = 1/2."
  },
  {
    id: "SS3-PRB-005",
    class: "SSS 3",
    topic: "Probability",
    question: "From a standard deck of 52 cards, one card is drawn at random. What is the probability that it is either a King or a Heart?",
    options: { A: "4/13", B: "17/52", C: "1/4", D: "16/52" },
    correctAnswer: "A",
    explanation: "Kings = 4, Hearts = 13, King of Hearts = 1. P(King ∪ Heart) = (4 + 13 - 1) / 52 = 16/52 = 4/13."
  },
  {
    id: "SS3-PRB-006",
    class: "SSS 3",
    topic: "Probability",
    question: "A student targets solving a problem with probability 2/3 and another with probability 3/4. If they work independently, what is the probability that the problem is solved?",
    options: { A: "11/12", B: "1/2", C: "5/12", D: "1/12" },
    correctAnswer: "A",
    explanation: "P(neither solves) = (1 - 2/3) * (1 - 3/4) = (1/3) * (1/4) = 1/12. P(at least one solves) = 1 - 1/12 = 11/12."
  },
  {
    id: "SS3-PRB-007",
    class: "SSS 3",
    topic: "Probability",
    question: "A card is drawn from a well-shuffled pack of 52 cards. What is the probability that it is a Queen or a Jack?",
    options: { A: "2/13", B: "1/13", C: "4/13", D: "8/52" },
    correctAnswer: "A",
    explanation: "Queens = 4, Jacks = 4. They are mutually exclusive. P = (4 + 4)/52 = 8/52 = 2/13."
  },
  {
    id: "SS3-PRB-008",
    class: "SSS 3",
    topic: "Probability",
    question: "If P(E) = 0.35, what is the probability of the complement event, P(E')?",
    options: { A: "0.65", B: "0.75", C: "0.35", D: "1.35" },
    correctAnswer: "A",
    explanation: "P(E') = 1 - P(E) = 1 - 0.35 = 0.65."
  },
  {
    id: "SS3-PRB-009",
    class: "SSS 3",
    topic: "Probability",
    question: "A letter is chosen at random from the word 'PROBABILITY'. What is the probability that it is a vowel?",
    options: { A: "4/11", B: "3/11", C: "5/11", D: "2/11" },
    correctAnswer: "A",
    explanation: "Total letters = 11. Vowels are O, A, I, I (4 vowels). Probability = 4/11."
  },
  {
    id: "SS3-PRB-010",
    class: "SSS 3",
    topic: "Probability",
    question: "In how many ways can 5 students be seated in a row?",
    options: { A: "120", B: "60", C: "24", D: "720" },
    correctAnswer: "A",
    explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    id: "SS3-PRB-011",
    class: "SSS 3",
    topic: "Probability",
    question: "A committee of 3 is to be chosen from 5 men and 4 women. In how many ways can this be done if it must contain 2 men and 1 woman?",
    options: { A: "40", B: "20", C: "84", D: "30" },
    correctAnswer: "A",
    explanation: "5C2 * 4C1 = 10 * 4 = 40 ways."
  },
  {
    id: "SS3-PRB-012",
    class: "SSS 3",
    topic: "Probability",
    question: "Two numbers are selected at random from {1, 2, 3, 4, 5, 6} without replacement. What is the probability that their product is even?",
    options: { A: "4/5", B: "3/5", C: "1/5", D: "2/5" },
    correctAnswer: "A",
    explanation: "Total pairs = 6C2 = 15. Product is odd only if both numbers are odd ({1, 3, 5}: 3C2 = 3 pairs). P(even product) = 1 - (3/15) = 12/15 = 4/5."
  },
  {
    id: "SS3-PRB-013",
    class: "SSS 3",
    topic: "Probability",
    question: "If two events A and B are mutually exclusive, what is P(A ∩ B)?",
    options: { A: "0", B: "1", C: "P(A) * P(B)", D: "P(A) + P(B)" },
    correctAnswer: "A",
    explanation: "Mutually exclusive events cannot occur simultaneously, so their intersection has probability 0."
  },
  {
    id: "SS3-PRB-014",
    class: "SSS 3",
    topic: "Probability",
    question: "What is the probability of getting a total of 7 when two dice are thrown?",
    options: { A: "1/6", B: "7/36", C: "5/36", D: "1/12" },
    correctAnswer: "A",
    explanation: "Outcomes for sum of 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. P = 6/36 = 1/6."
  },
  {
    id: "SS3-PRB-015",
    class: "SSS 3",
    topic: "Probability",
    question: "A bag has 6 white and 4 black balls. A ball is drawn, its color noted, and NOT replaced. A second ball is drawn. Find the probability that both are black.",
    options: { A: "2/15", B: "4/25", C: "1/5", D: "1/6" },
    correctAnswer: "A",
    explanation: "P = (4/10) * (3/9) = (2/5) * (1/3) = 2/15."
  },
  {
    id: "SS3-PRB-016",
    class: "SSS 3",
    topic: "Probability",
    question: "If a fair coin is tossed 4 times, what is the probability of getting exactly 2 heads?",
    options: { A: "3/8", B: "1/2", C: "1/4", D: "5/16" },
    correctAnswer: "A",
    explanation: "Binomial probability: 4C2 * (1/2)^2 * (1/2)^2 = 6 * (1/16) = 6/16 = 3/8."
  },

  // ── 6. MATRICES & DETERMINANTS (16 Questions) ─────────────────────────────
  {
    id: "SS3-MAT-001",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "Find the determinant of the 2x2 matrix: [[4, 3], [2, 5]].",
    options: { A: "14", B: "26", C: "10", D: "-14" },
    correctAnswer: "A",
    explanation: "det = (4 * 5) - (3 * 2) = 20 - 6 = 14."
  },
  {
    id: "SS3-MAT-002",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "Find the inverse of the matrix M = [[2, 1], [5, 3]].",
    options: { A: "[[3, -1], [-5, 2]]", B: "[[-3, 1], [5, -2]]", C: "[[2, -1], [-5, 3]]", D: "[[3, 1], [5, 2]]" },
    correctAnswer: "A",
    explanation: "det(M) = (2*3) - (1*5) = 6 - 5 = 1. Inverse = (1/det) * [[d, -b], [-c, a]] = [[3, -1], [-5, 2]]."
  },
  {
    id: "SS3-MAT-003",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "If A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 3]], find the matrix product AB.",
    options: { A: "[[4, 6], [10, 12]]", B: "[[2, 6], [4, 12]]", C: "[[4, 8], [8, 12]]", D: "[[2, 0], [3, 12]]" },
    correctAnswer: "A",
    explanation: "Row 1: [1*2 + 2*1, 1*0 + 2*3] = [4, 6]. Row 2: [3*2 + 4*1, 3*0 + 4*3] = [10, 12]. Thus AB = [[4, 6], [10, 12]]."
  },
  {
    id: "SS3-MAT-004",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "For what value of x is the matrix [[x, 4], [3, 6]] singular?",
    options: { A: "2", B: "4", C: "6", D: "8" },
    correctAnswer: "A",
    explanation: "A matrix is singular if its determinant is zero. 6x - (4 * 3) = 0 => 6x = 12 => x = 2."
  },
  {
    id: "SS3-MAT-005",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "Evaluate the determinant: |[[1, 2, 3], [0, 4, 5], [0, 0, 6]]|.",
    options: { A: "24", B: "15", C: "0", D: "36" },
    correctAnswer: "A",
    explanation: "For an upper triangular matrix, the determinant is the product of its main diagonal elements: 1 * 4 * 6 = 24."
  },
  {
    id: "SS3-MAT-006",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "If A is a 2x2 matrix and det(A) = 5, what is det(3A)?",
    options: { A: "45", B: "15", C: "25", D: "30" },
    correctAnswer: "A",
    explanation: "For an n x n matrix, det(kA) = k^n * det(A). Here n = 2, so det(3A) = 3^2 * 5 = 9 * 5 = 45."
  },
  {
    id: "SS3-MAT-007",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "Solve for x and y using Cramer's rule: 2x + 3y = 8 and x - y = -1.",
    options: { A: "x = 1, y = 2", B: "x = 2, y = 1", C: "x = -1, y = 3", D: "x = 3, y = 2" },
    correctAnswer: "A",
    explanation: "D = |[[2, 3], [1, -1]]| = -2 - 3 = -5. Dx = |[[8, 3], [-1, -1]]| = -8 - (-3) = -5 => x = -5/-5 = 1. Dy = |[[2, 8], [1, -1]]| = -2 - 8 = -10 => y = -10/-5 = 2."
  },
  {
    id: "SS3-MAT-008",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "If A = [[2, -1], [3, 4]], find the transpose matrix A^T.",
    options: { A: "[[2, 3], [-1, 4]]", B: "[[-2, 1], [-3, -4]]", C: "[[4, 1], [-3, 2]]", D: "[[2, -1], [3, 4]]" },
    correctAnswer: "A",
    explanation: "Transposition interchanges rows and columns: Row 1 [2, -1] becomes Col 1; Row 2 [3, 4] becomes Col 2: [[2, 3], [-1, 4]]."
  },
  {
    id: "SS3-MAT-009",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "If A is an invertible matrix, then A * A^(-1) is equal to:",
    options: { A: "Identity Matrix I", B: "Zero Matrix O", C: "A", D: "A^T" },
    correctAnswer: "A",
    explanation: "By definition, multiplying a matrix by its inverse produces the identity matrix I."
  },
  {
    id: "SS3-MAT-010",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "Given A = [[3, 1], [0, 2]], evaluate A^2.",
    options: { A: "[[9, 5], [0, 4]]", B: "[[9, 1], [0, 4]]", C: "[[6, 2], [0, 4]]", D: "[[9, 6], [0, 4]]" },
    correctAnswer: "A",
    explanation: "Row 1: [3*3 + 1*0, 3*1 + 1*2] = [9, 5]. Row 2: [0*3 + 2*0, 0*1 + 2*2] = [0, 4]. Thus A^2 = [[9, 5], [0, 4]]."
  },
  {
    id: "SS3-MAT-011",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "Find the trace of the matrix [[5, 2, -1], [3, -2, 4], [1, 0, 8]].",
    options: { A: "11", B: "15", C: "10", D: "12" },
    correctAnswer: "A",
    explanation: "The trace of a square matrix is the sum of its main diagonal elements: 5 + (-2) + 8 = 11."
  },
  {
    id: "SS3-MAT-012",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "If matrix P has order 3x2 and matrix Q has order 2x4, what is the order of the product PQ?",
    options: { A: "3x4", B: "2x2", C: "4x3", D: "Cannot be multiplied" },
    correctAnswer: "A",
    explanation: "Since the number of columns in P (2) equals the number of rows in Q (2), PQ is defined and has dimension (rows of P) x (cols of Q) = 3x4."
  },
  {
    id: "SS3-MAT-013",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "Evaluate the determinant: |[[2, 1], [6, 3]]|.",
    options: { A: "0", B: "12", C: "6", D: "-6" },
    correctAnswer: "A",
    explanation: "det = (2 * 3) - (1 * 6) = 6 - 6 = 0."
  },
  {
    id: "SS3-MAT-014",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "If [[x + 2, 3], [4, y - 1]] = [[5, 3], [4, 7]], find x and y.",
    options: { A: "x = 3, y = 8", B: "x = 7, y = 6", C: "x = 3, y = 6", D: "x = 5, y = 8" },
    correctAnswer: "A",
    explanation: "Equating corresponding entries: x + 2 = 5 => x = 3; y - 1 = 7 => y = 8."
  },
  {
    id: "SS3-MAT-015",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "Find the determinant of the 3x3 matrix: |[[1, 0, 2], [2, -1, 3], [4, 1, 8]]|.",
    options: { A: "-3", B: "3", C: "5", D: "-5" },
    correctAnswer: "A",
    explanation: "Expand along Row 1: 1*|[-1, 3], [1, 8]| - 0 + 2*|[2, -1], [4, 1]| = 1*(-8 - 3) + 2*(2 - (-4)) = -11 + 2(6) = -11 + 12 = 1... wait! -11 + 12 = 1. Let's make options { A: '1', B: '-3', C: '3', D: '-1' }."
  },
  {
    id: "SS3-MAT-016",
    class: "SSS 3",
    topic: "Matrices & Determinants",
    question: "A matrix is said to be skew-symmetric if:",
    options: { A: "A^T = -A", B: "A^T = A", C: "det(A) = 0", D: "A * A = I" },
    correctAnswer: "A",
    explanation: "A matrix is skew-symmetric if its transpose equals its negative: A^T = -A (with all main diagonal elements being 0)."
  },

  // ── 7. CALCULUS (DIFFERENTIATION & INTEGRATION) (16 Questions) ─────────────
  {
    id: "SS3-CAL-001",
    class: "SSS 3",
    topic: "Calculus",
    question: "Find the derivative dy/dx if y = 4x^3 - 5x^2 + 7x - 9.",
    options: { A: "12x^2 - 10x + 7", B: "12x^2 - 10x", C: "4x^2 - 5x + 7", D: "12x^3 - 10x^2 + 7" },
    correctAnswer: "A",
    explanation: "Applying the power rule d/dx(x^n) = n*x^(n-1): dy/dx = 4(3)x^2 - 5(2)x + 7 = 12x^2 - 10x + 7."
  },
  {
    id: "SS3-CAL-002",
    class: "SSS 3",
    topic: "Calculus",
    question: "Find the gradient of the curve y = 2x^2 - 3x + 1 at the point (2, 3).",
    options: { A: "5", B: "8", C: "3", D: "7" },
    correctAnswer: "A",
    explanation: "dy/dx = 4x - 3. At x = 2: gradient m = 4(2) - 3 = 8 - 3 = 5."
  },
  {
    id: "SS3-CAL-003",
    class: "SSS 3",
    topic: "Calculus",
    question: "Differentiate y = (3x^2 - 1)^4 with respect to x using the chain rule.",
    options: { A: "24x(3x^2 - 1)^3", B: "12x(3x^2 - 1)^3", C: "4(3x^2 - 1)^3", D: "8x(3x^2 - 1)^3" },
    correctAnswer: "A",
    explanation: "dy/dx = 4(3x^2 - 1)^3 * d/dx(3x^2 - 1) = 4(3x^2 - 1)^3 * (6x) = 24x(3x^2 - 1)^3."
  },
  {
    id: "SS3-CAL-004",
    class: "SSS 3",
    topic: "Calculus",
    question: "Evaluate the indefinite integral: ∫ (6x^2 - 4x + 3) dx.",
    options: { A: "2x^3 - 2x^2 + 3x + C", B: "3x^3 - 4x^2 + 3x + C", C: "2x^3 - 4x^2 + 3x + C", D: "6x^3 - 2x^2 + 3x + C" },
    correctAnswer: "A",
    explanation: "∫ 6x^2 dx = 6(x^3/3) = 2x^3. ∫ -4x dx = -4(x^2/2) = -2x^2. ∫ 3 dx = 3x. Sum: 2x^3 - 2x^2 + 3x + C."
  },
  {
    id: "SS3-CAL-005",
    class: "SSS 3",
    topic: "Calculus",
    question: "Evaluate the definite integral: ∫[1 to 3] (2x + 1) dx.",
    options: { A: "10", B: "12", C: "8", D: "14" },
    correctAnswer: "A",
    explanation: "Antiderivative is x^2 + x. At 3: 3^2 + 3 = 12. At 1: 1^2 + 1 = 2. Value = 12 - 2 = 10."
  },
  {
    id: "SS3-CAL-006",
    class: "SSS 3",
    topic: "Calculus",
    question: "Find the coordinates of the turning point of the curve y = x^2 - 4x + 7 and determine its nature.",
    options: { A: "(2, 3), minimum", B: "(2, 3), maximum", C: "(-2, 19), minimum", D: "(4, 7), maximum" },
    correctAnswer: "A",
    explanation: "dy/dx = 2x - 4 = 0 => x = 2. y = 2^2 - 4(2) + 7 = 3. d^2y/dx^2 = 2 > 0, so it is a minimum point at (2, 3)."
  },
  {
    id: "SS3-CAL-007",
    class: "SSS 3",
    topic: "Calculus",
    question: "Find the rate of change of the area of a circle with respect to its radius r when r = 5 cm.",
    options: { A: "10π cm^2/cm", B: "25π cm^2/cm", C: "5π cm^2/cm", D: "20π cm^2/cm" },
    correctAnswer: "A",
    explanation: "A = πr^2. dA/dr = 2πr. When r = 5, dA/dr = 2π(5) = 10π cm^2/cm."
  },
  {
    id: "SS3-CAL-008",
    class: "SSS 3",
    topic: "Calculus",
    question: "Differentiate y = x * sin x with respect to x using the product rule.",
    options: { A: "sin x + x cos x", B: "cos x", C: "x cos x", D: "sin x - x cos x" },
    correctAnswer: "A",
    explanation: "Product rule: d(uv)/dx = u'v + uv'. Here u = x (u'=1), v = sin x (v'=cos x). Result = 1 * sin x + x * cos x = sin x + x cos x."
  },
  {
    id: "SS3-CAL-009",
    class: "SSS 3",
    topic: "Calculus",
    question: "Find the equation of the tangent line to the curve y = x^2 at the point (1, 1).",
    options: { A: "y = 2x - 1", B: "y = 2x + 1", C: "y = x", D: "y = -2x + 3" },
    correctAnswer: "A",
    explanation: "dy/dx = 2x. At x = 1, gradient m = 2. Equation: y - 1 = 2(x - 1) => y - 1 = 2x - 2 => y = 2x - 1."
  },
  {
    id: "SS3-CAL-010",
    class: "SSS 3",
    topic: "Calculus",
    question: "Find the area bounded by the curve y = x^2, the x-axis, and the lines x = 0 and x = 3.",
    options: { A: "9 sq units", B: "27 sq units", C: "6 sq units", D: "18 sq units" },
    correctAnswer: "A",
    explanation: "Area = ∫[0 to 3] x^2 dx = [x^3 / 3][0 to 3] = 3^3 / 3 - 0 = 27 / 3 = 9 square units."
  },
  {
    id: "SS3-CAL-011",
    class: "SSS 3",
    topic: "Calculus",
    question: "If s = 3t^2 - 12t + 5 represents the displacement of a particle at time t, at what time is the particle momentarily at rest?",
    options: { A: "t = 2 s", B: "t = 4 s", C: "t = 0 s", D: "t = 3 s" },
    correctAnswer: "A",
    explanation: "Velocity v = ds/dt = 6t - 12. At rest, v = 0 => 6t - 12 = 0 => t = 2 seconds."
  },
  {
    id: "SS3-CAL-012",
    class: "SSS 3",
    topic: "Calculus",
    question: "Differentiate y = 1/x^2 with respect to x.",
    options: { A: "-2 / x^3", B: "-1 / x", C: "2 / x^3", D: "-2 / x" },
    correctAnswer: "A",
    explanation: "y = x^(-2). dy/dx = -2 x^(-3) = -2 / x^3."
  },
  {
    id: "SS3-CAL-013",
    class: "SSS 3",
    topic: "Calculus",
    question: "Evaluate: ∫[0 to 2] 3x^2 dx.",
    options: { A: "8", B: "12", C: "6", D: "24" },
    correctAnswer: "A",
    explanation: "∫ 3x^2 dx = x^3. [x^3][0 to 2] = 2^3 - 0 = 8."
  },
  {
    id: "SS3-CAL-014",
    class: "SSS 3",
    topic: "Calculus",
    question: "The gradient of the normal to the curve y = 3x^2 at the point where x = 1 is:",
    options: { A: "-1/6", B: "6", C: "-6", D: "1/6" },
    correctAnswer: "A",
    explanation: "dy/dx = 6x. At x = 1, tangent gradient m_t = 6. Gradient of normal m_n = -1 / m_t = -1/6."
  },
  {
    id: "SS3-CAL-015",
    class: "SSS 3",
    topic: "Calculus",
    question: "Find d^2y/dx^2 if y = x^4 - 2x^3 + 5x.",
    options: { A: "12x^2 - 12x", B: "4x^3 - 6x^2 + 5", C: "12x^2 - 6x", D: "24x - 12" },
    correctAnswer: "A",
    explanation: "dy/dx = 4x^3 - 6x^2 + 5. Second derivative d^2y/dx^2 = 12x^2 - 12x."
  },
  {
    id: "SS3-CAL-016",
    class: "SSS 3",
    topic: "Calculus",
    question: "Evaluate: ∫ (1 / x) dx for x > 0.",
    options: { A: "ln(x) + C", B: "-1 / x^2 + C", C: "x + C", D: "e^x + C" },
    correctAnswer: "A",
    explanation: "The standard integral of 1/x is the natural logarithm ln(x) + C."
  }
];

// Let's refine SS3-IL-007, SS3-SET-002, SS3-QP-001, SS3-QP-013, SS3-MAT-015 to ensure exact options match explanations
ss3Questions[6] = {
  id: "SS3-IL-007",
  class: "SSS 3",
  topic: "Indices & Logarithms",
  question: "If 2^(x - y) = 4 and 3^(x + y) = 81, find the value of x * y.",
  options: { A: "3", B: "4", C: "2", D: "6" },
  correctAnswer: "A",
  explanation: "2^(x - y) = 4 = 2^2 => x - y = 2. 3^(x + y) = 81 = 3^4 => x + y = 4. Adding the two equations: 2x = 6 => x = 3. Substituting into x + y = 4 gives y = 1. Therefore, x * y = 3 * 1 = 3."
};

ss3Questions[13] = {
  id: "SS3-SET-002",
  class: "SSS 3",
  topic: "Set Theory",
  question: "In a senior class of 60 students, 36 take Mathematics, 32 take Physics, and 28 take Chemistry. 18 take Math and Physics, 14 take Math and Chem, 12 take Physics and Chem, and 6 take all three. How many students take NONE of the three subjects?",
  options: { A: "2", B: "4", C: "6", D: "0" },
  correctAnswer: "A",
  explanation: "n(M ∪ P ∪ C) = 36 + 32 + 28 - (18 + 14 + 12) + 6 = 96 - 44 + 6 = 58. Students taking none = Total - 58 = 60 - 58 = 2."
};

ss3Questions[39] = {
  id: "SS3-QP-001",
  class: "SSS 3",
  topic: "Quadratic Equations & Polynomials",
  question: "When the polynomial P(x) = 2x^3 - 3x^2 + kx - 4 is divided by (x - 2), the remainder is 6. Find k.",
  options: { A: "3", B: "5", C: "-3", D: "7" },
  correctAnswer: "A",
  explanation: "By the Remainder Theorem, P(2) = 6. P(2) = 2(8) - 3(4) + 2k - 4 = 16 - 12 + 2k - 4 = 2k. 2k = 6 => k = 3."
};

ss3Questions[51] = {
  id: "SS3-QP-013",
  class: "SSS 3",
  topic: "Quadratic Equations & Polynomials",
  question: "If (x + 2) and (x - 1) are both factors of x^3 + ax^2 + bx - 2, find a and b.",
  options: { A: "a = 2, b = -1", B: "a = 0, b = -3", C: "a = 1, b = -2", D: "a = -2, b = 1" },
  correctAnswer: "A",
  explanation: "P(1) = 1 + a + b - 2 = 0 => a + b = 1. P(-2) = -8 + 4a - 2b - 2 = 0 => 4a - 2b = 10 => 2a - b = 5. Adding the two equations: 3a = 6 => a = 2, then b = -1."
};

ss3Questions[82] = {
  id: "SS3-MAT-015",
  class: "SSS 3",
  topic: "Matrices & Determinants",
  question: "Find the determinant of the 3x3 matrix: |[[1, 0, 2], [2, -1, 3], [4, 1, 8]]|.",
  options: { A: "1", B: "-3", C: "3", D: "-1" },
  correctAnswer: "A",
  explanation: "Expand along Row 1: 1 * |[-1, 3], [1, 8]| - 0 + 2 * |[2, -1], [4, 1]| = 1*(-8 - 3) + 2*(2 - (-4)) = -11 + 2(6) = -11 + 12 = 1."
};

module.exports = ss3Questions;
