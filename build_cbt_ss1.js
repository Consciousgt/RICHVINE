// Question generator for SSS 1 Mathematics (100 Questions)
// Topics: Set Theory (25), Indices (25), Logarithm of numbers > 1 (25), Number Base Systems (25)

const ss1Questions = [
  // ── SET THEORY (25 Questions) ─────────────────────────────────────────────
  {
    id: "SS1-SET-001",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If A = {2, 3, 5, 7, 11} and B = {1, 3, 5, 7, 9}, find A ∩ B.",
    options: { A: "{3, 5, 7}", B: "{2, 3, 5, 7}", C: "{1, 2, 3, 5, 7, 9, 11}", D: "{2, 11}" },
    correctAnswer: "A",
    explanation: "A ∩ B contains the elements common to both sets. 3, 5, and 7 appear in both A and B. Hence, A ∩ B = {3, 5, 7}."
  },
  {
    id: "SS1-SET-002",
    class: "SSS 1",
    topic: "Set Theory",
    question: "How many subsets can be formed from a set containing 5 elements?",
    options: { A: "10", B: "25", C: "32", D: "64" },
    correctAnswer: "C",
    explanation: "The number of subsets of a set with n elements is given by 2^n. For n = 5, 2^5 = 32 subsets."
  },
  {
    id: "SS1-SET-003",
    class: "SSS 1",
    topic: "Set Theory",
    question: "Let universal set ξ = {x : 1 ≤ x ≤ 10, x is an integer} and P = {prime numbers in ξ}. Find P'.",
    options: { A: "{1, 4, 6, 8, 9, 10}", B: "{4, 6, 8, 9, 10}", C: "{1, 4, 6, 8, 10}", D: "{2, 3, 5, 7}" },
    correctAnswer: "A",
    explanation: "P = {2, 3, 5, 7}. The complement P' contains elements in ξ not in P: {1, 4, 6, 8, 9, 10}. Note that 1 is neither prime nor composite."
  },
  {
    id: "SS1-SET-004",
    class: "SSS 1",
    topic: "Set Theory",
    question: "Two sets P and Q are said to be disjoint if:",
    options: { A: "P ∪ Q = ∅", B: "P ∩ Q = ∅", C: "P ⊂ Q", D: "n(P) = n(Q)" },
    correctAnswer: "B",
    explanation: "Disjoint sets have no common elements, meaning their intersection is the empty set: P ∩ Q = ∅."
  },
  {
    id: "SS1-SET-005",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If n(A) = 15, n(B) = 20, and n(A ∩ B) = 7, find n(A ∪ B).",
    options: { A: "35", B: "28", C: "21", D: "42" },
    correctAnswer: "B",
    explanation: "Using the formula n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 15 + 20 - 7 = 28."
  },
  {
    id: "SS1-SET-006",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If X = {factors of 12} and Y = {factors of 18}, find X ∪ Y.",
    options: { A: "{1, 2, 3, 6}", B: "{1, 2, 3, 4, 6, 9, 12, 18}", C: "{1, 2, 3, 6, 12, 18}", D: "{4, 9, 12, 18}" },
    correctAnswer: "B",
    explanation: "X = {1, 2, 3, 4, 6, 12} and Y = {1, 2, 3, 6, 9, 18}. X ∪ Y combines all unique elements: {1, 2, 3, 4, 6, 9, 12, 18}."
  },
  {
    id: "SS1-SET-007",
    class: "SSS 1",
    topic: "Set Theory",
    question: "A set with no elements is termed a/an:",
    options: { A: "Singleton set", B: "Infinite set", C: "Empty or Null set", D: "Universal set" },
    correctAnswer: "C",
    explanation: "A set containing no elements is called an empty or null set, symbolized as ∅ or {}."
  },
  {
    id: "SS1-SET-008",
    class: "SSS 1",
    topic: "Set Theory",
    question: "In a class of 40 students, 25 offer Economics and 20 offer Commerce. If 5 students offer neither subject, how many students offer both subjects?",
    options: { A: "10", B: "15", C: "5", D: "8" },
    correctAnswer: "A",
    explanation: "Students offering at least one subject = 40 - 5 = 35. n(E ∪ C) = n(E) + n(C) - n(E ∩ C) => 35 = 25 + 20 - x => 35 = 45 - x => x = 10."
  },
  {
    id: "SS1-SET-009",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If P = {a, b, c}, which of the following is a proper subset of P?",
    options: { A: "{a, b, c}", B: "{a, b, c, d}", C: "{a, c}", D: "{x, y}" },
    correctAnswer: "C",
    explanation: "A proper subset must be strictly contained in P and not equal to P. {a, c} ⊂ P and {a, c} ≠ P, so it is a proper subset."
  },
  {
    id: "SS1-SET-010",
    class: "SSS 1",
    topic: "Set Theory",
    question: "According to De Morgan's laws, (A ∪ B)' is equivalent to:",
    options: { A: "A' ∪ B'", B: "A' ∩ B'", C: "A ∩ B", D: "(A ∩ B)'" },
    correctAnswer: "B",
    explanation: "De Morgan's first law states that the complement of the union equals the intersection of the complements: (A ∪ B)' = A' ∩ B'."
  },
  {
    id: "SS1-SET-011",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}, find A \\ B (or A - B).",
    options: { A: "{1, 2}", B: "{6, 7}", C: "{3, 4, 5}", D: "{1, 2, 6, 7}" },
    correctAnswer: "A",
    explanation: "A - B consists of elements in A that are not in B. Elements 1 and 2 are in A but not in B."
  },
  {
    id: "SS1-SET-012",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If universal set ξ = {integers from 1 to 20} and M = {multiples of 3 up to 20}, what is n(M)?",
    options: { A: "5", B: "6", C: "7", D: "8" },
    correctAnswer: "B",
    explanation: "M = {3, 6, 9, 12, 15, 18}. There are 6 elements, so n(M) = 6."
  },
  {
    id: "SS1-SET-013",
    class: "SSS 1",
    topic: "Set Theory",
    question: "Which of the following represents the cardinality of the power set of a set S with n(S) = 4?",
    options: { A: "8", B: "12", C: "16", D: "20" },
    correctAnswer: "C",
    explanation: "The power set has 2^n elements. For n = 4, 2^4 = 16."
  },
  {
    id: "SS1-SET-014",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If A ⊂ B, then A ∩ B equals:",
    options: { A: "B", B: "A", C: "∅", D: "A ∪ B" },
    correctAnswer: "B",
    explanation: "When A is a subset of B, all elements of A are inside B. Hence the intersection A ∩ B is A."
  },
  {
    id: "SS1-SET-015",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If A ⊂ B, then A ∪ B equals:",
    options: { A: "A", B: "B", C: "∅", D: "A ∩ B" },
    correctAnswer: "B",
    explanation: "When A is a subset of B, combining A and B yields B, because B already contains all of A."
  },
  {
    id: "SS1-SET-016",
    class: "SSS 1",
    topic: "Set Theory",
    question: "In a survey of 60 traders, 38 sell rice and 28 sell beans. If all traders sell at least one of these food items, how many sell only rice?",
    options: { A: "6", B: "32", C: "26", D: "22" },
    correctAnswer: "B",
    explanation: "n(R ∪ B) = n(R) + n(B) - n(R ∩ B) => 60 = 38 + 28 - x => x = 6 sell both. Those selling only rice = n(R) - x = 38 - 6 = 32."
  },
  {
    id: "SS1-SET-017",
    class: "SSS 1",
    topic: "Set Theory",
    question: "What is the number of proper subsets of a set with 3 elements?",
    options: { A: "8", B: "7", C: "6", D: "5" },
    correctAnswer: "B",
    explanation: "The number of proper subsets is 2^n - 1. For n = 3, 2^3 - 1 = 8 - 1 = 7."
  },
  {
    id: "SS1-SET-018",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If P = {odd numbers between 2 and 10} and Q = {multiples of 3 between 2 and 10}, find P ∩ Q.",
    options: { A: "{3, 9}", B: "{3, 6, 9}", C: "{3}", D: "{9}" },
    correctAnswer: "A",
    explanation: "P = {3, 5, 7, 9} and Q = {3, 6, 9}. Their intersection P ∩ Q = {3, 9}."
  },
  {
    id: "SS1-SET-019",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If n(ξ) = 50, n(A) = 30, and n(B) = 25, with n(A ∪ B)' = 5, what is n(A ∩ B)?",
    options: { A: "5", B: "10", C: "15", D: "20" },
    correctAnswer: "B",
    explanation: "n(A ∪ B) = n(ξ) - n(A ∪ B)' = 50 - 5 = 45. Using n(A ∪ B) = n(A) + n(B) - n(A ∩ B): 45 = 30 + 25 - n(A ∩ B) => n(A ∩ B) = 55 - 45 = 10."
  },
  {
    id: "SS1-SET-020",
    class: "SSS 1",
    topic: "Set Theory",
    question: "Which of the following sets is infinite?",
    options: { A: "{letters in English alphabet}", B: "{grains of sand on earth}", C: "{positive integers}", D: "{students in RichVine College}" },
    correctAnswer: "C",
    explanation: "The set of positive integers {1, 2, 3, 4, ...} has no upper bound and continues indefinitely, making it infinite."
  },
  {
    id: "SS1-SET-021",
    class: "SSS 1",
    topic: "Set Theory",
    question: "A set with only one element is called a:",
    options: { A: "Unit or singleton set", B: "Universal set", C: "Null set", D: "Power set" },
    correctAnswer: "A",
    explanation: "A set consisting of exactly one element, such as {5}, is termed a singleton or unit set."
  },
  {
    id: "SS1-SET-022",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If A = {x : x^2 = 16, x is a positive integer}, then A is:",
    options: { A: "{-4, 4}", B: "{4}", C: "{-4}", D: "{16}" },
    correctAnswer: "B",
    explanation: "Although (-4)^2 = 16, the condition specifies x is positive. Therefore, A = {4}."
  },
  {
    id: "SS1-SET-023",
    class: "SSS 1",
    topic: "Set Theory",
    question: "In set notation, the symbol ∈ denotes:",
    options: { A: "Is a subset of", B: "Is an element of", C: "Contains", D: "Is disjoint to" },
    correctAnswer: "B",
    explanation: "The symbol ∈ means 'is a member of' or 'is an element of'."
  },
  {
    id: "SS1-SET-024",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If A and B are two sets such that n(A) = 12, n(B) = 8, and n(A ∪ B) = 20, what can be said about A and B?",
    options: { A: "A = B", B: "A ⊂ B", C: "A and B are disjoint", D: "A ∩ B has 4 elements" },
    correctAnswer: "C",
    explanation: "Since n(A ∪ B) = n(A) + n(B) = 12 + 8 = 20, n(A ∩ B) = 0. Therefore, A and B are disjoint sets."
  },
  {
    id: "SS1-SET-025",
    class: "SSS 1",
    topic: "Set Theory",
    question: "Let A = {m, a, t, h} and B = {h, a, t, s}. Find (A ∩ B).",
    options: { A: "{a, t, h}", B: "{m, s}", C: "{m, a, t, h, s}", D: "{h}" },
    correctAnswer: "A",
    explanation: "The common letters are 'a', 't', and 'h'. Therefore, A ∩ B = {a, t, h}."
  },

  // ── INDICES (25 Questions) ─────────────────────────────────────────────────
  {
    id: "SS1-IND-026",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: 2^4 × 2^3.",
    options: { A: "2^12", B: "2^7", C: "4^7", D: "2^1" },
    correctAnswer: "B",
    explanation: "By the multiplication law of indices: a^m × a^n = a^(m+n). 2^4 × 2^3 = 2^(4+3) = 2^7 = 128."
  },
  {
    id: "SS1-IND-027",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: 5^8 ÷ 5^5.",
    options: { A: "5^13", B: "5^3", C: "1^3", D: "5^40" },
    correctAnswer: "B",
    explanation: "By the division law of indices: a^m ÷ a^n = a^(m-n). 5^8 ÷ 5^5 = 5^(8-5) = 5^3 = 125."
  },
  {
    id: "SS1-IND-028",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: (3^2)^3.",
    options: { A: "3^5", B: "3^6", C: "3^8", D: "9^5" },
    correctAnswer: "B",
    explanation: "By the power law: (a^m)^n = a^(m×n). (3^2)^3 = 3^(2×3) = 3^6 = 729."
  },
  {
    id: "SS1-IND-029",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: (2026)^0 + 4^0.",
    options: { A: "2030", B: "0", C: "1", D: "2" },
    correctAnswer: "D",
    explanation: "Any non-zero real number raised to the power of 0 equals 1: 2026^0 = 1, 4^0 = 1. 1 + 1 = 2."
  },
  {
    id: "SS1-IND-030",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: 5^(-2).",
    options: { A: "-10", B: "-25", C: "1/25", D: "1/10" },
    correctAnswer: "C",
    explanation: "By the negative index law: a^(-n) = 1/a^n. 5^(-2) = 1/(5^2) = 1/25."
  },
  {
    id: "SS1-IND-031",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: 27^(2/3).",
    options: { A: "3", B: "6", C: "9", D: "18" },
    correctAnswer: "C",
    explanation: "27^(2/3) = (27^(1/3))^2 = (∛27)^2 = 3^2 = 9."
  },
  {
    id: "SS1-IND-032",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: 16^(-3/4).",
    options: { A: "1/8", B: "-8", C: "1/12", D: "8" },
    correctAnswer: "A",
    explanation: "16^(-3/4) = 1 / (16^(3/4)) = 1 / (⁴√16)^3 = 1 / (2^3) = 1/8."
  },
  {
    id: "SS1-IND-033",
    class: "SSS 1",
    topic: "Indices",
    question: "Solve the exponential equation: 2^x = 64.",
    options: { A: "5", B: "6", C: "7", D: "8" },
    correctAnswer: "B",
    explanation: "Express 64 in base 2: 64 = 2^6. Since 2^x = 2^6, x = 6."
  },
  {
    id: "SS1-IND-034",
    class: "SSS 1",
    topic: "Indices",
    question: "Solve for x: 3^(2x - 1) = 81.",
    options: { A: "2", B: "2.5", C: "3", D: "3.5" },
    correctAnswer: "B",
    explanation: "81 = 3^4. So 3^(2x - 1) = 3^4 => 2x - 1 = 4 => 2x = 5 => x = 2.5."
  },
  {
    id: "SS1-IND-035",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: (8/27)^(-2/3).",
    options: { A: "4/9", B: "9/4", C: "2/3", D: "-4/9" },
    correctAnswer: "B",
    explanation: "(8/27)^(-2/3) = (27/8)^(2/3) = (∛(27/8))^2 = (3/2)^2 = 9/4."
  },
  {
    id: "SS1-IND-036",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: (x^5 × x^3) / x^4.",
    options: { A: "x^2", B: "x^4", C: "x^6", D: "x^8" },
    correctAnswer: "B",
    explanation: "x^5 × x^3 = x^(5+3) = x^8. Then x^8 / x^4 = x^(8-4) = x^4."
  },
  {
    id: "SS1-IND-037",
    class: "SSS 1",
    topic: "Indices",
    question: "Solve for y: 4^(y + 1) = 16^(y - 1).",
    options: { A: "1", B: "2", C: "3", D: "4" },
    correctAnswer: "C",
    explanation: "Express both sides in base 4: 4^(y + 1) = (4^2)^(y - 1) = 4^(2y - 2). Equating exponents: y + 1 = 2y - 2 => y = 3."
  },
  {
    id: "SS1-IND-038",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: (2a^3 b^2)^3.",
    options: { A: "6a^6 b^5", B: "8a^9 b^6", C: "8a^6 b^5", D: "2a^9 b^6" },
    correctAnswer: "B",
    explanation: "(2a^3 b^2)^3 = 2^3 × (a^3)^3 × (b^2)^3 = 8a^9 b^6."
  },
  {
    id: "SS1-IND-039",
    class: "SSS 1",
    topic: "Indices",
    question: "Find the value of x if 9^x = 1/27.",
    options: { A: "-3/2", B: "-2/3", C: "3/2", D: "-3" },
    correctAnswer: "A",
    explanation: "9^x = (3^2)^x = 3^(2x). 1/27 = 3^(-3). Thus, 2x = -3 => x = -3/2."
  },
  {
    id: "SS1-IND-040",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: 100^(1/2) × 64^(1/3).",
    options: { A: "20", B: "40", C: "80", D: "16" },
    correctAnswer: "B",
    explanation: "100^(1/2) = √100 = 10. 64^(1/3) = ∛64 = 4. 10 × 4 = 40."
  },
  {
    id: "SS1-IND-041",
    class: "SSS 1",
    topic: "Indices",
    question: "If 5^(x - 2) = 1, find x.",
    options: { A: "0", B: "1", C: "2", D: "5" },
    correctAnswer: "C",
    explanation: "1 = 5^0. Therefore, 5^(x - 2) = 5^0 => x - 2 = 0 => x = 2."
  },
  {
    id: "SS1-IND-042",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: (3^x × 9^(x+1)) / 27^x.",
    options: { A: "9", B: "3", C: "27", D: "1" },
    correctAnswer: "A",
    explanation: "Express in base 3: 3^x × 3^(2x+2) / 3^(3x) = 3^(x + 2x + 2 - 3x) = 3^2 = 9."
  },
  {
    id: "SS1-IND-043",
    class: "SSS 1",
    topic: "Indices",
    question: "Find the value of (1/16)^(-1/4).",
    options: { A: "1/2", B: "2", C: "4", D: "-2" },
    correctAnswer: "B",
    explanation: "(1/16)^(-1/4) = 16^(1/4) = ⁴√16 = 2."
  },
  {
    id: "SS1-IND-044",
    class: "SSS 1",
    topic: "Indices",
    question: "Solve for x: (1/3)^x = 243.",
    options: { A: "-5", B: "-4", C: "5", D: "4" },
    correctAnswer: "A",
    explanation: "(1/3)^x = 3^(-x). 243 = 3^5. So 3^(-x) = 3^5 => -x = 5 => x = -5."
  },
  {
    id: "SS1-IND-045",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: 32^(0.4).",
    options: { A: "2", B: "4", C: "8", D: "16" },
    correctAnswer: "B",
    explanation: "0.4 = 4/10 = 2/5. 32^(2/5) = (⁵√32)^2 = 2^2 = 4."
  },
  {
    id: "SS1-IND-046",
    class: "SSS 1",
    topic: "Indices",
    question: "Solve the equation: 8^(x + 1) = 32.",
    options: { A: "2/3", B: "1/3", C: "4/3", D: "5/3" },
    correctAnswer: "A",
    explanation: "8 = 2^3 and 32 = 2^5. (2^3)^(x + 1) = 2^5 => 3(x + 1) = 5 => 3x + 3 = 5 => 3x = 2 => x = 2/3."
  },
  {
    id: "SS1-IND-047",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: (4p^4 q^(-3)) / (2p^2 q^(-1)).",
    options: { A: "2p^2 / q^2", B: "2p^6 / q^4", C: "2p^2 q^4", D: "p^2 / (2q^2)" },
    correctAnswer: "A",
    explanation: "4/2 = 2; p^(4 - 2) = p^2; q^(-3 - (-1)) = q^(-2) = 1/q^2. Result is 2p^2 / q^2."
  },
  {
    id: "SS1-IND-048",
    class: "SSS 1",
    topic: "Indices",
    question: "Find x if 2^(3x - 1) = 1/16.",
    options: { A: "-1", B: "1", C: "-5/3", D: "-3" },
    correctAnswer: "A",
    explanation: "1/16 = 2^(-4). 2^(3x - 1) = 2^(-4) => 3x - 1 = -4 => 3x = -3 => x = -1."
  },
  {
    id: "SS1-IND-049",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: (125/64)^(-1/3).",
    options: { A: "4/5", B: "5/4", C: "25/16", D: "16/25" },
    correctAnswer: "A",
    explanation: "(125/64)^(-1/3) = (64/125)^(1/3) = ∛64 / ∛125 = 4/5."
  },
  {
    id: "SS1-IND-050",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: 2^(n+2) - 2^(n+1) + 2^n.",
    options: { A: "3 × 2^n", B: "2^n", C: "5 × 2^n", D: "2^(n+3)" },
    correctAnswer: "A",
    explanation: "Factor out 2^n: 2^n(2^2 - 2^1 + 1) = 2^n(4 - 2 + 1) = 3 × 2^n."
  },

  // ── LOGARITHM OF NUMBERS > 1 (25 Questions) ────────────────────────────────
  {
    id: "SS1-LOG-051",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "What is the characteristic of log10(4532)?",
    options: { A: "2", B: "3", C: "4", D: "5" },
    correctAnswer: "B",
    explanation: "In scientific notation, 4532 = 4.532 × 10^3. The exponent of 10 is 3, which is the characteristic (or number of digits before decimal minus 1: 4 - 1 = 3)."
  },
  {
    id: "SS1-LOG-052",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Evaluate log2(32).",
    options: { A: "4", B: "5", C: "6", D: "16" },
    correctAnswer: "B",
    explanation: "Since 2^5 = 32, log2(32) = 5."
  },
  {
    id: "SS1-LOG-053",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "If log10(2) = 0.3010 and log10(3) = 0.4771, find log10(6).",
    options: { A: "0.1761", B: "0.7781", C: "0.1436", D: "0.9542" },
    correctAnswer: "B",
    explanation: "log(6) = log(2 × 3) = log 2 + log 3 = 0.3010 + 0.4771 = 0.7781."
  },
  {
    id: "SS1-LOG-054",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "If log10(2) = 0.3010, find log10(5).",
    options: { A: "0.6990", B: "0.7010", C: "0.4990", D: "0.5000" },
    correctAnswer: "A",
    explanation: "log 5 = log(10 / 2) = log 10 - log 2 = 1 - 0.3010 = 0.6990."
  },
  {
    id: "SS1-LOG-055",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Solve for x: log3(x) = 4.",
    options: { A: "12", B: "64", C: "81", D: "27" },
    correctAnswer: "C",
    explanation: "Converting from logarithmic to index form: x = 3^4 = 81."
  },
  {
    id: "SS1-LOG-056",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "What is the characteristic of log10(78.4)?",
    options: { A: "0", B: "1", C: "2", D: "3" },
    correctAnswer: "B",
    explanation: "78.4 = 7.84 × 10^1. There are 2 digits before the decimal point, so the characteristic is 2 - 1 = 1."
  },
  {
    id: "SS1-LOG-057",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Evaluate: log5(125) + log3(27).",
    options: { A: "5", B: "6", C: "7", D: "8" },
    correctAnswer: "B",
    explanation: "5^3 = 125 => log5(125) = 3. 3^3 = 27 => log3(27) = 3. 3 + 3 = 6."
  },
  {
    id: "SS1-LOG-058",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "If log10(x) = 3, what is the value of x?",
    options: { A: "30", B: "100", C: "1000", D: "300" },
    correctAnswer: "C",
    explanation: "log10(x) = 3 means x = 10^3 = 1000."
  },
  {
    id: "SS1-LOG-059",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Simplify: log(a^3) - log(a).",
    options: { A: "log(a^2)", B: "2", C: "log(3)", D: "3" },
    correctAnswer: "A",
    explanation: "log(a^3) - log(a) = log(a^3 / a) = log(a^2) = 2 log(a)."
  },
  {
    id: "SS1-LOG-060",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Given that log10(2) = 0.3010, find log10(8).",
    options: { A: "0.6020", B: "0.9030", C: "1.2040", D: "2.4080" },
    correctAnswer: "B",
    explanation: "log(8) = log(2^3) = 3 × log 2 = 3 × 0.3010 = 0.9030."
  },
  {
    id: "SS1-LOG-061",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Evaluate: log4(64) - log4(16).",
    options: { A: "1", B: "2", C: "3", D: "4" },
    correctAnswer: "A",
    explanation: "log4(64) = 3 (since 4^3 = 64) and log4(16) = 2 (since 4^2 = 16). 3 - 2 = 1."
  },
  {
    id: "SS1-LOG-062",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Express log(x^2 y / z) in expanded form.",
    options: { A: "2 log x + log y - log z", B: "2 log x - log y - log z", C: "log 2x + log y - log z", D: "2(log x + log y) - log z" },
    correctAnswer: "A",
    explanation: "By log laws: log(x^2 y / z) = log(x^2) + log y - log z = 2 log x + log y - log z."
  },
  {
    id: "SS1-LOG-063",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "If logx(64) = 3, what is x?",
    options: { A: "2", B: "4", C: "8", D: "16" },
    correctAnswer: "B",
    explanation: "logx(64) = 3 => x^3 = 64 => x = ∛64 = 4."
  },
  {
    id: "SS1-LOG-064",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "What is the value of loga(1) for any valid base a > 0, a ≠ 1?",
    options: { A: "1", B: "0", C: "a", D: "undefined" },
    correctAnswer: "B",
    explanation: "Since a^0 = 1 for any non-zero base, loga(1) = 0."
  },
  {
    id: "SS1-LOG-065",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Evaluate: log10(10000).",
    options: { A: "3", B: "4", C: "5", D: "40" },
    correctAnswer: "B",
    explanation: "10000 = 10^4. Hence, log10(10000) = 4."
  },
  {
    id: "SS1-LOG-066",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "If log10(2) = 0.3010 and log10(3) = 0.4771, calculate log10(18).",
    options: { A: "1.2552", B: "1.1093", C: "1.0821", D: "0.9542" },
    correctAnswer: "A",
    explanation: "18 = 2 × 3^2. log 18 = log 2 + 2 log 3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552."
  },
  {
    id: "SS1-LOG-067",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Solve for y if log2(y + 3) = 4.",
    options: { A: "11", B: "13", C: "16", D: "19" },
    correctAnswer: "B",
    explanation: "log2(y + 3) = 4 => y + 3 = 2^4 = 16 => y = 16 - 3 = 13."
  },
  {
    id: "SS1-LOG-068",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "What is the characteristic of log10(8.35)?",
    options: { A: "0", B: "1", C: "2", D: "-1" },
    correctAnswer: "A",
    explanation: "8.35 = 8.35 × 10^0. Since there is 1 digit before the decimal point, characteristic = 1 - 1 = 0."
  },
  {
    id: "SS1-LOG-069",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Simplify: (log 8) / (log 2).",
    options: { A: "log 4", B: "3", C: "4", D: "log 6" },
    correctAnswer: "B",
    explanation: "log 8 = log(2^3) = 3 log 2. Thus, (3 log 2) / (log 2) = 3."
  },
  {
    id: "SS1-LOG-070",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "If logx(1/8) = -3, find x.",
    options: { A: "2", B: "1/2", C: "4", D: "8" },
    correctAnswer: "A",
    explanation: "x^(-3) = 1/8 = 2^(-3). Since exponents are equal, x = 2."
  },
  {
    id: "SS1-LOG-071",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Find the value of log3(√27).",
    options: { A: "3/2", B: "2/3", C: "3", D: "1/3" },
    correctAnswer: "A",
    explanation: "√27 = (27)^(1/2) = (3^3)^(1/2) = 3^(3/2). Hence, log3(3^(3/2)) = 3/2."
  },
  {
    id: "SS1-LOG-072",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "If log 2 = 0.3010 and log 3 = 0.4771, find log(1.5).",
    options: { A: "0.1761", B: "0.7781", C: "0.1500", D: "0.3221" },
    correctAnswer: "A",
    explanation: "log(1.5) = log(3/2) = log 3 - log 2 = 0.4771 - 0.3010 = 0.1761."
  },
  {
    id: "SS1-LOG-073",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Solve for x: log10(2x) - log10(x - 1) = 1.",
    options: { A: "5/4", B: "4/5", C: "10/9", D: "9/8" },
    correctAnswer: "A",
    explanation: "log10(2x / (x - 1)) = 1 => 2x / (x - 1) = 10^1 = 10 => 2x = 10(x - 1) => 2x = 10x - 10 => 8x = 10 => x = 10/8 = 5/4."
  },
  {
    id: "SS1-LOG-074",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Evaluate: log7(7).",
    options: { A: "0", B: "1", C: "7", D: "49" },
    correctAnswer: "B",
    explanation: "The logarithm of any base to itself is 1: loga(a) = 1."
  },
  {
    id: "SS1-LOG-075",
    class: "SSS 1",
    topic: "Logarithms (> 1)",
    question: "Write 35600 in standard form.",
    options: { A: "3.56 × 10^4", B: "35.6 × 10^3", C: "3.56 × 10^5", D: "0.356 × 10^5" },
    correctAnswer: "A",
    explanation: "Standard form is A × 10^n where 1 ≤ A < 10. Moving decimal point 4 places to the left gives 3.56 × 10^4."
  },

  // ── NUMBER BASE SYSTEMS (25 Questions) ────────────────────────────────────
  {
    id: "SS1-BAS-076",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 1101_2 to base 10 (denary).",
    options: { A: "11", B: "12", C: "13", D: "15" },
    correctAnswer: "C",
    explanation: "1101_2 = (1 × 2^3) + (1 × 2^2) + (0 × 2^1) + (1 × 2^0) = 8 + 4 + 0 + 1 = 13_10."
  },
  {
    id: "SS1-BAS-077",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 27_10 to binary (base 2).",
    options: { A: "11011_2", B: "11101_2", C: "10111_2", D: "11111_2" },
    correctAnswer: "A",
    explanation: "27 ÷ 2 = 13 r 1; 13 ÷ 2 = 6 r 1; 6 ÷ 2 = 3 r 0; 3 ÷ 2 = 1 r 1; 1 ÷ 2 = 0 r 1. Reading remainders upward: 11011_2."
  },
  {
    id: "SS1-BAS-078",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Evaluate: 1011_2 + 110_2 in base 2.",
    options: { A: "10001_2", B: "10010_2", C: "10011_2", D: "10101_2" },
    correctAnswer: "A",
    explanation: "1011_2 = 11_10 and 110_2 = 6_10. 11 + 6 = 17_10. Converting 17 to base 2 gives 10001_2."
  },
  {
    id: "SS1-BAS-079",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Evaluate: 11001_2 - 1011_2 in base 2.",
    options: { A: "1110_2", B: "1101_2", C: "1010_2", D: "1100_2" },
    correctAnswer: "A",
    explanation: "11001_2 = 25_10, 1011_2 = 11_10. 25 - 11 = 14_10. 14 in binary is 1110_2."
  },
  {
    id: "SS1-BAS-080",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 234_5 to base 10.",
    options: { A: "59", B: "69", C: "74", D: "84" },
    correctAnswer: "B",
    explanation: "234_5 = (2 × 5^2) + (3 × 5^1) + (4 × 5^0) = (2 × 25) + 15 + 4 = 50 + 15 + 4 = 69_10."
  },
  {
    id: "SS1-BAS-081",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 75_10 to base 8 (octal).",
    options: { A: "111_8", B: "113_8", C: "123_8", D: "105_8" },
    correctAnswer: "B",
    explanation: "75 ÷ 8 = 9 r 3; 9 ÷ 8 = 1 r 1; 1 ÷ 8 = 0 r 1. Reading remainders upward: 113_8."
  },
  {
    id: "SS1-BAS-082",
    class: "SSS 1",
    topic: "Number Bases",
    question: "If 23_x = 11_10, find the base x.",
    options: { A: "3", B: "4", C: "5", D: "6" },
    correctAnswer: "B",
    explanation: "23_x = 2(x) + 3 = 11 => 2x = 8 => x = 4."
  },
  {
    id: "SS1-BAS-083",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Multiply 101_2 by 11_2 in binary.",
    options: { A: "1111_2", B: "1110_2", C: "1001_2", D: "1101_2" },
    correctAnswer: "A",
    explanation: "101_2 = 5_10 and 11_2 = 3_10. 5 × 3 = 15_10. 15 in binary is 1111_2."
  },
  {
    id: "SS1-BAS-084",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 101.11_2 to base 10.",
    options: { A: "5.5", B: "5.75", C: "5.25", D: "5.375" },
    correctAnswer: "B",
    explanation: "Whole part: 101_2 = 4 + 1 = 5. Fractional part: (1 × 2^(-1)) + (1 × 2^(-2)) = 0.5 + 0.25 = 0.75. Result = 5.75."
  },
  {
    id: "SS1-BAS-085",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Add: 234_5 + 341_5.",
    options: { A: "1130_5", B: "1120_5", C: "1030_5", D: "1125_5" },
    correctAnswer: "A",
    explanation: "Units: 4 + 1 = 5 = 10_5 (write 0, carry 1). Fives: 3 + 4 + 1 = 8 = 13_5 (write 3, carry 1). Twenty-fives: 2 + 3 + 1 = 6 = 11_5. Total: 1130_5."
  },
  {
    id: "SS1-BAS-086",
    class: "SSS 1",
    topic: "Number Bases",
    question: "If 102_x = 11_10, find x.",
    options: { A: "3", B: "4", C: "5", D: "6" },
    correctAnswer: "A",
    explanation: "102_x = 1(x^2) + 0(x) + 2 = x^2 + 2 = 11 => x^2 = 9 => x = 3 (since base must be positive and > 2)."
  },
  {
    id: "SS1-BAS-087",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 111011_2 directly to octal (base 8).",
    options: { A: "67_8", B: "73_8", C: "71_8", D: "63_8" },
    correctAnswer: "B",
    explanation: "Group binary digits into sets of 3 from the right: (111)(011)_2. 111_2 = 7 and 011_2 = 3. Result = 73_8."
  },
  {
    id: "SS1-BAS-088",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 56_8 to binary.",
    options: { A: "101110_2", B: "110101_2", C: "111010_2", D: "101101_2" },
    correctAnswer: "A",
    explanation: "Each octal digit maps to 3 binary bits: 5 = 101_2 and 6 = 110_2. Concatenating: 101110_2."
  },
  {
    id: "SS1-BAS-089",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Subtract: 421_5 - 234_5.",
    options: { A: "132_5", B: "142_5", C: "133_5", D: "141_5" },
    correctAnswer: "A",
    explanation: "Units: 1 - 4: borrow 1 (worth 5): (1 + 5) - 4 = 2. Fives: (2 - 1) - 3 = 1 - 3: borrow 1 (worth 5): (1 + 5) - 3 = 3. Twenty-fives: (4 - 1) - 2 = 1. Result = 132_5."
  },
  {
    id: "SS1-BAS-090",
    class: "SSS 1",
    topic: "Number Bases",
    question: "If 34_x = 24_8, find x.",
    options: { A: "5", B: "6", C: "7", D: "8" },
    correctAnswer: "A",
    explanation: "Convert both to base 10: 3(x) + 4 = 2(8) + 4 => 3x + 4 = 16 + 4 = 20 => 3x = 16 (not integer? Check: 24_8 = 20_10. 3x + 4 = 20 => 3x = 16. Let's recalculate: if 34_x = 20_10, if x=5: 3(5)+4=19; if 34_x = 24_7? 3(x)+4 = 20 - let x=something where 3x=15 => x=5 if rhs is 19). For 34_5 = 3(5)+4 = 19_10 and 23_8 = 19_10. If 34_x = 24_8: 3x+4=20 => not integer. If 32_x = 24_8 => 3x+2=20 => 3x=18 => x=6. Let's adjust question: If 32_x = 24_8, find x => x = 6."
  },
  {
    id: "SS1-BAS-091",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 43_10 to base 5.",
    options: { A: "133_5", B: "143_5", C: "123_5", D: "233_5" },
    correctAnswer: "A",
    explanation: "43 ÷ 5 = 8 r 3; 8 ÷ 5 = 1 r 3; 1 ÷ 5 = 0 r 1. Result = 133_5."
  },
  {
    id: "SS1-BAS-092",
    class: "SSS 1",
    topic: "Number Bases",
    question: "In which number base is 12 + 13 = 30?",
    options: { A: "Base 4", B: "Base 5", C: "Base 6", D: "Base 7" },
    correctAnswer: "B",
    explanation: "Express in base x: (x + 2) + (x + 3) = 3x + 0 => 2x + 5 = 3x => x = 5. Checking: 12_5 (7) + 13_5 (8) = 15_10 = 30_5. Correct!"
  },
  {
    id: "SS1-BAS-093",
    class: "SSS 1",
    topic: "Number Bases",
    question: "What is the highest single digit allowed in base 7 arithmetic?",
    options: { A: "7", B: "6", C: "8", D: "5" },
    correctAnswer: "B",
    explanation: "In any base b, the allowed digits run from 0 to b - 1. For base 7, the allowed digits are 0, 1, 2, 3, 4, 5, 6. The highest is 6."
  },
  {
    id: "SS1-BAS-094",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Evaluate in binary: 110_2 × 10_2.",
    options: { A: "1100_2", B: "1110_2", C: "1000_2", D: "1010_2" },
    correctAnswer: "A",
    explanation: "Multiplying by 10_2 (which is 2 in denary) simply shifts bits one place left: 110_2 × 10_2 = 1100_2."
  },
  {
    id: "SS1-BAS-095",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 210_3 to base 10.",
    options: { A: "19", B: "20", C: "21", D: "23" },
    correctAnswer: "C",
    explanation: "210_3 = (2 × 3^2) + (1 × 3^1) + (0 × 3^0) = 18 + 3 + 0 = 21_10."
  },
  {
    id: "SS1-BAS-096",
    class: "SSS 1",
    topic: "Number Bases",
    question: "If 110_x = 42_10, find the positive value of x.",
    options: { A: "5", B: "6", C: "7", D: "8" },
    correctAnswer: "B",
    explanation: "1(x^2) + 1(x) + 0 = 42 => x^2 + x - 42 = 0 => (x + 7)(x - 6) = 0. Since base must be positive, x = 6."
  },
  {
    id: "SS1-BAS-097",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Evaluate: 1000_2 - 1_2 in binary.",
    options: { A: "111_2", B: "101_2", C: "110_2", D: "100_2" },
    correctAnswer: "A",
    explanation: "1000_2 = 8_10. 8 - 1 = 7_10 = 111_2."
  },
  {
    id: "SS1-BAS-098",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 0.625_10 to binary fraction.",
    options: { A: "0.101_2", B: "0.110_2", C: "0.011_2", D: "0.111_2" },
    correctAnswer: "A",
    explanation: "0.625 × 2 = 1.25 (1); 0.25 × 2 = 0.5 (0); 0.5 × 2 = 1.0 (1). Reading downwards: 0.101_2."
  },
  {
    id: "SS1-BAS-099",
    class: "SSS 1",
    topic: "Number Bases",
    question: "Convert 142_5 to base 3.",
    options: { A: "1121_3", B: "1112_3", C: "1201_3", D: "1120_3" },
    correctAnswer: "A",
    explanation: "142_5 = (1 × 25) + (4 × 5) + 2 = 25 + 20 + 2 = 47_10. Convert 47 to base 3: 47 ÷ 3 = 15 r 2; 15 ÷ 3 = 5 r 0 (wait: 47 ÷ 3 = 15 r 2, 15 ÷ 3 = 5 r 0, 5 ÷ 3 = 1 r 2, 1 ÷ 3 = 0 r 1 => 1202_3). Let's check 142_5 = 47. 47 = 27 + 18 + 2 = 1 × 27 + 2 × 9 + 0 × 3 + 2 × 1 = 1202_3. Let's fix question options to include 1202_3."
  },
  {
    id: "SS1-BAS-100",
    class: "SSS 1",
    topic: "Number Bases",
    question: "If 21_x + 34_x = 55_x, what is the value of base x?",
    options: { A: "Base 6", B: "Any base greater than 5", C: "Base 7 only", D: "Base 10 only" },
    correctAnswer: "B",
    explanation: "21_x + 34_x: units digit 1 + 4 = 5 (no carry for any base > 5); tens digit 2 + 3 = 5. Since digits 5 appear, x must be strictly greater than 5. Hence, it holds in any base > 5."
  }
];

// Clean up Q90 and Q99 in script
ss1Questions[89] = {
  id: "SS1-BAS-090",
  class: "SSS 1",
  topic: "Number Bases",
  question: "If 32_x = 24_8, find x.",
  options: { A: "5", B: "6", C: "7", D: "8" },
  correctAnswer: "B",
  explanation: "24_8 = 2(8) + 4 = 20_10. 32_x = 3x + 2 = 20 => 3x = 18 => x = 6."
};

ss1Questions[98] = {
  id: "SS1-BAS-099",
  class: "SSS 1",
  topic: "Number Bases",
  question: "Convert 47_10 to base 3.",
  options: { A: "1202_3", B: "1121_3", C: "1210_3", D: "1022_3" },
  correctAnswer: "A",
  explanation: "47 ÷ 3 = 15 r 2; 15 ÷ 3 = 5 r 0; 5 ÷ 3 = 1 r 2; 1 ÷ 3 = 0 r 1. Reading upwards: 1202_3."
};

module.exports = ss1Questions;
