/**
 * RichVine College - Computer Based Test (CBT) Question Bank
 * Total: 300 Curated General Mathematics Questions (100 for SSS 1, 100 for SSS 2, 100 for SSS 3)
 * Sampled: Exactly 40 multiple-choice questions randomized per student test session.
 */

(function () {
  'use strict';

  var CBT_BANK = {
  "SSS 1": [
    {
      "id": "SS1-SET-001",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If A = {2, 3, 5, 7, 11} and B = {1, 3, 5, 7, 9}, find A ∩ B.",
      "options": {
        "A": "{3, 5, 7}",
        "B": "{2, 3, 5, 7}",
        "C": "{1, 2, 3, 5, 7, 9, 11}",
        "D": "{2, 11}"
      },
      "correctAnswer": "A",
      "explanation": "A ∩ B contains the elements common to both sets. 3, 5, and 7 appear in both A and B. Hence, A ∩ B = {3, 5, 7}."
    },
    {
      "id": "SS1-SET-002",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "How many subsets can be formed from a set containing 5 elements?",
      "options": {
        "A": "10",
        "B": "25",
        "C": "32",
        "D": "64"
      },
      "correctAnswer": "C",
      "explanation": "The number of subsets of a set with n elements is given by 2^n. For n = 5, 2^5 = 32 subsets."
    },
    {
      "id": "SS1-SET-003",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Let universal set ξ = {x : 1 ≤ x ≤ 10, x is an integer} and P = {prime numbers in ξ}. Find P'.",
      "options": {
        "A": "{1, 4, 6, 8, 9, 10}",
        "B": "{4, 6, 8, 9, 10}",
        "C": "{1, 4, 6, 8, 10}",
        "D": "{2, 3, 5, 7}"
      },
      "correctAnswer": "A",
      "explanation": "P = {2, 3, 5, 7}. The complement P' contains elements in ξ not in P: {1, 4, 6, 8, 9, 10}. Note that 1 is neither prime nor composite."
    },
    {
      "id": "SS1-SET-004",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Two sets P and Q are said to be disjoint if:",
      "options": {
        "A": "P ∪ Q = ∅",
        "B": "P ∩ Q = ∅",
        "C": "P ⊂ Q",
        "D": "n(P) = n(Q)"
      },
      "correctAnswer": "B",
      "explanation": "Disjoint sets have no common elements, meaning their intersection is the empty set: P ∩ Q = ∅."
    },
    {
      "id": "SS1-SET-005",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If n(A) = 15, n(B) = 20, and n(A ∩ B) = 7, find n(A ∪ B).",
      "options": {
        "A": "35",
        "B": "28",
        "C": "21",
        "D": "42"
      },
      "correctAnswer": "B",
      "explanation": "Using the formula n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 15 + 20 - 7 = 28."
    },
    {
      "id": "SS1-SET-006",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If X = {factors of 12} and Y = {factors of 18}, find X ∪ Y.",
      "options": {
        "A": "{1, 2, 3, 6}",
        "B": "{1, 2, 3, 4, 6, 9, 12, 18}",
        "C": "{1, 2, 3, 6, 12, 18}",
        "D": "{4, 9, 12, 18}"
      },
      "correctAnswer": "B",
      "explanation": "X = {1, 2, 3, 4, 6, 12} and Y = {1, 2, 3, 6, 9, 18}. X ∪ Y combines all unique elements: {1, 2, 3, 4, 6, 9, 12, 18}."
    },
    {
      "id": "SS1-SET-007",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "A set with no elements is termed a/an:",
      "options": {
        "A": "Singleton set",
        "B": "Infinite set",
        "C": "Empty or Null set",
        "D": "Universal set"
      },
      "correctAnswer": "C",
      "explanation": "A set containing no elements is called an empty or null set, symbolized as ∅ or {}."
    },
    {
      "id": "SS1-SET-008",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a class of 40 students, 25 offer Economics and 20 offer Commerce. If 5 students offer neither subject, how many students offer both subjects?",
      "options": {
        "A": "10",
        "B": "15",
        "C": "5",
        "D": "8"
      },
      "correctAnswer": "A",
      "explanation": "Students offering at least one subject = 40 - 5 = 35. n(E ∪ C) = n(E) + n(C) - n(E ∩ C) => 35 = 25 + 20 - x => 35 = 45 - x => x = 10."
    },
    {
      "id": "SS1-SET-009",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If P = {a, b, c}, which of the following is a proper subset of P?",
      "options": {
        "A": "{a, b, c}",
        "B": "{a, b, c, d}",
        "C": "{a, c}",
        "D": "{x, y}"
      },
      "correctAnswer": "C",
      "explanation": "A proper subset must be strictly contained in P and not equal to P. {a, c} ⊂ P and {a, c} ≠ P, so it is a proper subset."
    },
    {
      "id": "SS1-SET-010",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "According to De Morgan's laws, (A ∪ B)' is equivalent to:",
      "options": {
        "A": "A' ∪ B'",
        "B": "A' ∩ B'",
        "C": "A ∩ B",
        "D": "(A ∩ B)'"
      },
      "correctAnswer": "B",
      "explanation": "De Morgan's first law states that the complement of the union equals the intersection of the complements: (A ∪ B)' = A' ∩ B'."
    },
    {
      "id": "SS1-SET-011",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}, find A \\ B (or A - B).",
      "options": {
        "A": "{1, 2}",
        "B": "{6, 7}",
        "C": "{3, 4, 5}",
        "D": "{1, 2, 6, 7}"
      },
      "correctAnswer": "A",
      "explanation": "A - B consists of elements in A that are not in B. Elements 1 and 2 are in A but not in B."
    },
    {
      "id": "SS1-SET-012",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If universal set ξ = {integers from 1 to 20} and M = {multiples of 3 up to 20}, what is n(M)?",
      "options": {
        "A": "5",
        "B": "6",
        "C": "7",
        "D": "8"
      },
      "correctAnswer": "B",
      "explanation": "M = {3, 6, 9, 12, 15, 18}. There are 6 elements, so n(M) = 6."
    },
    {
      "id": "SS1-SET-013",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Which of the following represents the cardinality of the power set of a set S with n(S) = 4?",
      "options": {
        "A": "8",
        "B": "12",
        "C": "16",
        "D": "20"
      },
      "correctAnswer": "C",
      "explanation": "The power set has 2^n elements. For n = 4, 2^4 = 16."
    },
    {
      "id": "SS1-SET-014",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If A ⊂ B, then A ∩ B equals:",
      "options": {
        "A": "B",
        "B": "A",
        "C": "∅",
        "D": "A ∪ B"
      },
      "correctAnswer": "B",
      "explanation": "When A is a subset of B, all elements of A are inside B. Hence the intersection A ∩ B is A."
    },
    {
      "id": "SS1-SET-015",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If A ⊂ B, then A ∪ B equals:",
      "options": {
        "A": "A",
        "B": "B",
        "C": "∅",
        "D": "A ∩ B"
      },
      "correctAnswer": "B",
      "explanation": "When A is a subset of B, combining A and B yields B, because B already contains all of A."
    },
    {
      "id": "SS1-SET-016",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a survey of 60 traders, 38 sell rice and 28 sell beans. If all traders sell at least one of these food items, how many sell only rice?",
      "options": {
        "A": "6",
        "B": "32",
        "C": "26",
        "D": "22"
      },
      "correctAnswer": "B",
      "explanation": "n(R ∪ B) = n(R) + n(B) - n(R ∩ B) => 60 = 38 + 28 - x => x = 6 sell both. Those selling only rice = n(R) - x = 38 - 6 = 32."
    },
    {
      "id": "SS1-SET-017",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "What is the number of proper subsets of a set with 3 elements?",
      "options": {
        "A": "8",
        "B": "7",
        "C": "6",
        "D": "5"
      },
      "correctAnswer": "B",
      "explanation": "The number of proper subsets is 2^n - 1. For n = 3, 2^3 - 1 = 8 - 1 = 7."
    },
    {
      "id": "SS1-SET-018",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If P = {odd numbers between 2 and 10} and Q = {multiples of 3 between 2 and 10}, find P ∩ Q.",
      "options": {
        "A": "{3, 9}",
        "B": "{3, 6, 9}",
        "C": "{3}",
        "D": "{9}"
      },
      "correctAnswer": "A",
      "explanation": "P = {3, 5, 7, 9} and Q = {3, 6, 9}. Their intersection P ∩ Q = {3, 9}."
    },
    {
      "id": "SS1-SET-019",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If n(ξ) = 50, n(A) = 30, and n(B) = 25, with n(A ∪ B)' = 5, what is n(A ∩ B)?",
      "options": {
        "A": "5",
        "B": "10",
        "C": "15",
        "D": "20"
      },
      "correctAnswer": "B",
      "explanation": "n(A ∪ B) = n(ξ) - n(A ∪ B)' = 50 - 5 = 45. Using n(A ∪ B) = n(A) + n(B) - n(A ∩ B): 45 = 30 + 25 - n(A ∩ B) => n(A ∩ B) = 55 - 45 = 10."
    },
    {
      "id": "SS1-SET-020",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Which of the following sets is infinite?",
      "options": {
        "A": "{letters in English alphabet}",
        "B": "{grains of sand on earth}",
        "C": "{positive integers}",
        "D": "{students in RichVine College}"
      },
      "correctAnswer": "C",
      "explanation": "The set of positive integers {1, 2, 3, 4, ...} has no upper bound and continues indefinitely, making it infinite."
    },
    {
      "id": "SS1-SET-021",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "A set with only one element is called a:",
      "options": {
        "A": "Unit or singleton set",
        "B": "Universal set",
        "C": "Null set",
        "D": "Power set"
      },
      "correctAnswer": "A",
      "explanation": "A set consisting of exactly one element, such as {5}, is termed a singleton or unit set."
    },
    {
      "id": "SS1-SET-022",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If A = {x : x^2 = 16, x is a positive integer}, then A is:",
      "options": {
        "A": "{-4, 4}",
        "B": "{4}",
        "C": "{-4}",
        "D": "{16}"
      },
      "correctAnswer": "B",
      "explanation": "Although (-4)^2 = 16, the condition specifies x is positive. Therefore, A = {4}."
    },
    {
      "id": "SS1-SET-023",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In set notation, the symbol ∈ denotes:",
      "options": {
        "A": "Is a subset of",
        "B": "Is an element of",
        "C": "Contains",
        "D": "Is disjoint to"
      },
      "correctAnswer": "B",
      "explanation": "The symbol ∈ means 'is a member of' or 'is an element of'."
    },
    {
      "id": "SS1-SET-024",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If A and B are two sets such that n(A) = 12, n(B) = 8, and n(A ∪ B) = 20, what can be said about A and B?",
      "options": {
        "A": "A = B",
        "B": "A ⊂ B",
        "C": "A and B are disjoint",
        "D": "A ∩ B has 4 elements"
      },
      "correctAnswer": "C",
      "explanation": "Since n(A ∪ B) = n(A) + n(B) = 12 + 8 = 20, n(A ∩ B) = 0. Therefore, A and B are disjoint sets."
    },
    {
      "id": "SS1-SET-025",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Let A = {m, a, t, h} and B = {h, a, t, s}. Find (A ∩ B).",
      "options": {
        "A": "{a, t, h}",
        "B": "{m, s}",
        "C": "{m, a, t, h, s}",
        "D": "{h}"
      },
      "correctAnswer": "A",
      "explanation": "The common letters are 'a', 't', and 'h'. Therefore, A ∩ B = {a, t, h}."
    },
    {
      "id": "SS1-IND-026",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: 2^4 × 2^3.",
      "options": {
        "A": "2^12",
        "B": "2^7",
        "C": "4^7",
        "D": "2^1"
      },
      "correctAnswer": "B",
      "explanation": "By the multiplication law of indices: a^m × a^n = a^(m+n). 2^4 × 2^3 = 2^(4+3) = 2^7 = 128."
    },
    {
      "id": "SS1-IND-027",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: 5^8 ÷ 5^5.",
      "options": {
        "A": "5^13",
        "B": "5^3",
        "C": "1^3",
        "D": "5^40"
      },
      "correctAnswer": "B",
      "explanation": "By the division law of indices: a^m ÷ a^n = a^(m-n). 5^8 ÷ 5^5 = 5^(8-5) = 5^3 = 125."
    },
    {
      "id": "SS1-IND-028",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: (3^2)^3.",
      "options": {
        "A": "3^5",
        "B": "3^6",
        "C": "3^8",
        "D": "9^5"
      },
      "correctAnswer": "B",
      "explanation": "By the power law: (a^m)^n = a^(m×n). (3^2)^3 = 3^(2×3) = 3^6 = 729."
    },
    {
      "id": "SS1-IND-029",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: (2026)^0 + 4^0.",
      "options": {
        "A": "2030",
        "B": "0",
        "C": "1",
        "D": "2"
      },
      "correctAnswer": "D",
      "explanation": "Any non-zero real number raised to the power of 0 equals 1: 2026^0 = 1, 4^0 = 1. 1 + 1 = 2."
    },
    {
      "id": "SS1-IND-030",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: 5^(-2).",
      "options": {
        "A": "-10",
        "B": "-25",
        "C": "1/25",
        "D": "1/10"
      },
      "correctAnswer": "C",
      "explanation": "By the negative index law: a^(-n) = 1/a^n. 5^(-2) = 1/(5^2) = 1/25."
    },
    {
      "id": "SS1-IND-031",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: 27^(2/3).",
      "options": {
        "A": "3",
        "B": "6",
        "C": "9",
        "D": "18"
      },
      "correctAnswer": "C",
      "explanation": "27^(2/3) = (27^(1/3))^2 = (∛27)^2 = 3^2 = 9."
    },
    {
      "id": "SS1-IND-032",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: 16^(-3/4).",
      "options": {
        "A": "1/8",
        "B": "-8",
        "C": "1/12",
        "D": "8"
      },
      "correctAnswer": "A",
      "explanation": "16^(-3/4) = 1 / (16^(3/4)) = 1 / (⁴√16)^3 = 1 / (2^3) = 1/8."
    },
    {
      "id": "SS1-IND-033",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve the exponential equation: 2^x = 64.",
      "options": {
        "A": "5",
        "B": "6",
        "C": "7",
        "D": "8"
      },
      "correctAnswer": "B",
      "explanation": "Express 64 in base 2: 64 = 2^6. Since 2^x = 2^6, x = 6."
    },
    {
      "id": "SS1-IND-034",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for x: 3^(2x - 1) = 81.",
      "options": {
        "A": "2",
        "B": "2.5",
        "C": "3",
        "D": "3.5"
      },
      "correctAnswer": "B",
      "explanation": "81 = 3^4. So 3^(2x - 1) = 3^4 => 2x - 1 = 4 => 2x = 5 => x = 2.5."
    },
    {
      "id": "SS1-IND-035",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: (8/27)^(-2/3).",
      "options": {
        "A": "4/9",
        "B": "9/4",
        "C": "2/3",
        "D": "-4/9"
      },
      "correctAnswer": "B",
      "explanation": "(8/27)^(-2/3) = (27/8)^(2/3) = (∛(27/8))^2 = (3/2)^2 = 9/4."
    },
    {
      "id": "SS1-IND-036",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: (x^5 × x^3) / x^4.",
      "options": {
        "A": "x^2",
        "B": "x^4",
        "C": "x^6",
        "D": "x^8"
      },
      "correctAnswer": "B",
      "explanation": "x^5 × x^3 = x^(5+3) = x^8. Then x^8 / x^4 = x^(8-4) = x^4."
    },
    {
      "id": "SS1-IND-037",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for y: 4^(y + 1) = 16^(y - 1).",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "correctAnswer": "C",
      "explanation": "Express both sides in base 4: 4^(y + 1) = (4^2)^(y - 1) = 4^(2y - 2). Equating exponents: y + 1 = 2y - 2 => y = 3."
    },
    {
      "id": "SS1-IND-038",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: (2a^3 b^2)^3.",
      "options": {
        "A": "6a^6 b^5",
        "B": "8a^9 b^6",
        "C": "8a^6 b^5",
        "D": "2a^9 b^6"
      },
      "correctAnswer": "B",
      "explanation": "(2a^3 b^2)^3 = 2^3 × (a^3)^3 × (b^2)^3 = 8a^9 b^6."
    },
    {
      "id": "SS1-IND-039",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Find the value of x if 9^x = 1/27.",
      "options": {
        "A": "-3/2",
        "B": "-2/3",
        "C": "3/2",
        "D": "-3"
      },
      "correctAnswer": "A",
      "explanation": "9^x = (3^2)^x = 3^(2x). 1/27 = 3^(-3). Thus, 2x = -3 => x = -3/2."
    },
    {
      "id": "SS1-IND-040",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: 100^(1/2) × 64^(1/3).",
      "options": {
        "A": "20",
        "B": "40",
        "C": "80",
        "D": "16"
      },
      "correctAnswer": "B",
      "explanation": "100^(1/2) = √100 = 10. 64^(1/3) = ∛64 = 4. 10 × 4 = 40."
    },
    {
      "id": "SS1-IND-041",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "If 5^(x - 2) = 1, find x.",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "5"
      },
      "correctAnswer": "C",
      "explanation": "1 = 5^0. Therefore, 5^(x - 2) = 5^0 => x - 2 = 0 => x = 2."
    },
    {
      "id": "SS1-IND-042",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: (3^x × 9^(x+1)) / 27^x.",
      "options": {
        "A": "9",
        "B": "3",
        "C": "27",
        "D": "1"
      },
      "correctAnswer": "A",
      "explanation": "Express in base 3: 3^x × 3^(2x+2) / 3^(3x) = 3^(x + 2x + 2 - 3x) = 3^2 = 9."
    },
    {
      "id": "SS1-IND-043",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Find the value of (1/16)^(-1/4).",
      "options": {
        "A": "1/2",
        "B": "2",
        "C": "4",
        "D": "-2"
      },
      "correctAnswer": "B",
      "explanation": "(1/16)^(-1/4) = 16^(1/4) = ⁴√16 = 2."
    },
    {
      "id": "SS1-IND-044",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for x: (1/3)^x = 243.",
      "options": {
        "A": "-5",
        "B": "-4",
        "C": "5",
        "D": "4"
      },
      "correctAnswer": "A",
      "explanation": "(1/3)^x = 3^(-x). 243 = 3^5. So 3^(-x) = 3^5 => -x = 5 => x = -5."
    },
    {
      "id": "SS1-IND-045",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: 32^(0.4).",
      "options": {
        "A": "2",
        "B": "4",
        "C": "8",
        "D": "16"
      },
      "correctAnswer": "B",
      "explanation": "0.4 = 4/10 = 2/5. 32^(2/5) = (⁵√32)^2 = 2^2 = 4."
    },
    {
      "id": "SS1-IND-046",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve the equation: 8^(x + 1) = 32.",
      "options": {
        "A": "2/3",
        "B": "1/3",
        "C": "4/3",
        "D": "5/3"
      },
      "correctAnswer": "A",
      "explanation": "8 = 2^3 and 32 = 2^5. (2^3)^(x + 1) = 2^5 => 3(x + 1) = 5 => 3x + 3 = 5 => 3x = 2 => x = 2/3."
    },
    {
      "id": "SS1-IND-047",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: (4p^4 q^(-3)) / (2p^2 q^(-1)).",
      "options": {
        "A": "2p^2 / q^2",
        "B": "2p^6 / q^4",
        "C": "2p^2 q^4",
        "D": "p^2 / (2q^2)"
      },
      "correctAnswer": "A",
      "explanation": "4/2 = 2; p^(4 - 2) = p^2; q^(-3 - (-1)) = q^(-2) = 1/q^2. Result is 2p^2 / q^2."
    },
    {
      "id": "SS1-IND-048",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Find x if 2^(3x - 1) = 1/16.",
      "options": {
        "A": "-1",
        "B": "1",
        "C": "-5/3",
        "D": "-3"
      },
      "correctAnswer": "A",
      "explanation": "1/16 = 2^(-4). 2^(3x - 1) = 2^(-4) => 3x - 1 = -4 => 3x = -3 => x = -1."
    },
    {
      "id": "SS1-IND-049",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: (125/64)^(-1/3).",
      "options": {
        "A": "4/5",
        "B": "5/4",
        "C": "25/16",
        "D": "16/25"
      },
      "correctAnswer": "A",
      "explanation": "(125/64)^(-1/3) = (64/125)^(1/3) = ∛64 / ∛125 = 4/5."
    },
    {
      "id": "SS1-IND-050",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: 2^(n+2) - 2^(n+1) + 2^n.",
      "options": {
        "A": "3 × 2^n",
        "B": "2^n",
        "C": "5 × 2^n",
        "D": "2^(n+3)"
      },
      "correctAnswer": "A",
      "explanation": "Factor out 2^n: 2^n(2^2 - 2^1 + 1) = 2^n(4 - 2 + 1) = 3 × 2^n."
    },
    {
      "id": "SS1-LOG-051",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "What is the characteristic of log10(4532)?",
      "options": {
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "5"
      },
      "correctAnswer": "B",
      "explanation": "In scientific notation, 4532 = 4.532 × 10^3. The exponent of 10 is 3, which is the characteristic (or number of digits before decimal minus 1: 4 - 1 = 3)."
    },
    {
      "id": "SS1-LOG-052",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Evaluate log2(32).",
      "options": {
        "A": "4",
        "B": "5",
        "C": "6",
        "D": "16"
      },
      "correctAnswer": "B",
      "explanation": "Since 2^5 = 32, log2(32) = 5."
    },
    {
      "id": "SS1-LOG-053",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "If log10(2) = 0.3010 and log10(3) = 0.4771, find log10(6).",
      "options": {
        "A": "0.1761",
        "B": "0.7781",
        "C": "0.1436",
        "D": "0.9542"
      },
      "correctAnswer": "B",
      "explanation": "log(6) = log(2 × 3) = log 2 + log 3 = 0.3010 + 0.4771 = 0.7781."
    },
    {
      "id": "SS1-LOG-054",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "If log10(2) = 0.3010, find log10(5).",
      "options": {
        "A": "0.6990",
        "B": "0.7010",
        "C": "0.4990",
        "D": "0.5000"
      },
      "correctAnswer": "A",
      "explanation": "log 5 = log(10 / 2) = log 10 - log 2 = 1 - 0.3010 = 0.6990."
    },
    {
      "id": "SS1-LOG-055",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Solve for x: log3(x) = 4.",
      "options": {
        "A": "12",
        "B": "64",
        "C": "81",
        "D": "27"
      },
      "correctAnswer": "C",
      "explanation": "Converting from logarithmic to index form: x = 3^4 = 81."
    },
    {
      "id": "SS1-LOG-056",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "What is the characteristic of log10(78.4)?",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "3"
      },
      "correctAnswer": "B",
      "explanation": "78.4 = 7.84 × 10^1. There are 2 digits before the decimal point, so the characteristic is 2 - 1 = 1."
    },
    {
      "id": "SS1-LOG-057",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Evaluate: log5(125) + log3(27).",
      "options": {
        "A": "5",
        "B": "6",
        "C": "7",
        "D": "8"
      },
      "correctAnswer": "B",
      "explanation": "5^3 = 125 => log5(125) = 3. 3^3 = 27 => log3(27) = 3. 3 + 3 = 6."
    },
    {
      "id": "SS1-LOG-058",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "If log10(x) = 3, what is the value of x?",
      "options": {
        "A": "30",
        "B": "100",
        "C": "1000",
        "D": "300"
      },
      "correctAnswer": "C",
      "explanation": "log10(x) = 3 means x = 10^3 = 1000."
    },
    {
      "id": "SS1-LOG-059",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Simplify: log(a^3) - log(a).",
      "options": {
        "A": "log(a^2)",
        "B": "2",
        "C": "log(3)",
        "D": "3"
      },
      "correctAnswer": "A",
      "explanation": "log(a^3) - log(a) = log(a^3 / a) = log(a^2) = 2 log(a)."
    },
    {
      "id": "SS1-LOG-060",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Given that log10(2) = 0.3010, find log10(8).",
      "options": {
        "A": "0.6020",
        "B": "0.9030",
        "C": "1.2040",
        "D": "2.4080"
      },
      "correctAnswer": "B",
      "explanation": "log(8) = log(2^3) = 3 × log 2 = 3 × 0.3010 = 0.9030."
    },
    {
      "id": "SS1-LOG-061",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Evaluate: log4(64) - log4(16).",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "correctAnswer": "A",
      "explanation": "log4(64) = 3 (since 4^3 = 64) and log4(16) = 2 (since 4^2 = 16). 3 - 2 = 1."
    },
    {
      "id": "SS1-LOG-062",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Express log(x^2 y / z) in expanded form.",
      "options": {
        "A": "2 log x + log y - log z",
        "B": "2 log x - log y - log z",
        "C": "log 2x + log y - log z",
        "D": "2(log x + log y) - log z"
      },
      "correctAnswer": "A",
      "explanation": "By log laws: log(x^2 y / z) = log(x^2) + log y - log z = 2 log x + log y - log z."
    },
    {
      "id": "SS1-LOG-063",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "If logx(64) = 3, what is x?",
      "options": {
        "A": "2",
        "B": "4",
        "C": "8",
        "D": "16"
      },
      "correctAnswer": "B",
      "explanation": "logx(64) = 3 => x^3 = 64 => x = ∛64 = 4."
    },
    {
      "id": "SS1-LOG-064",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "What is the value of loga(1) for any valid base a > 0, a ≠ 1?",
      "options": {
        "A": "1",
        "B": "0",
        "C": "a",
        "D": "undefined"
      },
      "correctAnswer": "B",
      "explanation": "Since a^0 = 1 for any non-zero base, loga(1) = 0."
    },
    {
      "id": "SS1-LOG-065",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Evaluate: log10(10000).",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "40"
      },
      "correctAnswer": "B",
      "explanation": "10000 = 10^4. Hence, log10(10000) = 4."
    },
    {
      "id": "SS1-LOG-066",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "If log10(2) = 0.3010 and log10(3) = 0.4771, calculate log10(18).",
      "options": {
        "A": "1.2552",
        "B": "1.1093",
        "C": "1.0821",
        "D": "0.9542"
      },
      "correctAnswer": "A",
      "explanation": "18 = 2 × 3^2. log 18 = log 2 + 2 log 3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552."
    },
    {
      "id": "SS1-LOG-067",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Solve for y if log2(y + 3) = 4.",
      "options": {
        "A": "11",
        "B": "13",
        "C": "16",
        "D": "19"
      },
      "correctAnswer": "B",
      "explanation": "log2(y + 3) = 4 => y + 3 = 2^4 = 16 => y = 16 - 3 = 13."
    },
    {
      "id": "SS1-LOG-068",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "What is the characteristic of log10(8.35)?",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "-1"
      },
      "correctAnswer": "A",
      "explanation": "8.35 = 8.35 × 10^0. Since there is 1 digit before the decimal point, characteristic = 1 - 1 = 0."
    },
    {
      "id": "SS1-LOG-069",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Simplify: (log 8) / (log 2).",
      "options": {
        "A": "log 4",
        "B": "3",
        "C": "4",
        "D": "log 6"
      },
      "correctAnswer": "B",
      "explanation": "log 8 = log(2^3) = 3 log 2. Thus, (3 log 2) / (log 2) = 3."
    },
    {
      "id": "SS1-LOG-070",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "If logx(1/8) = -3, find x.",
      "options": {
        "A": "2",
        "B": "1/2",
        "C": "4",
        "D": "8"
      },
      "correctAnswer": "A",
      "explanation": "x^(-3) = 1/8 = 2^(-3). Since exponents are equal, x = 2."
    },
    {
      "id": "SS1-LOG-071",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Find the value of log3(√27).",
      "options": {
        "A": "3/2",
        "B": "2/3",
        "C": "3",
        "D": "1/3"
      },
      "correctAnswer": "A",
      "explanation": "√27 = (27)^(1/2) = (3^3)^(1/2) = 3^(3/2). Hence, log3(3^(3/2)) = 3/2."
    },
    {
      "id": "SS1-LOG-072",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "If log 2 = 0.3010 and log 3 = 0.4771, find log(1.5).",
      "options": {
        "A": "0.1761",
        "B": "0.7781",
        "C": "0.1500",
        "D": "0.3221"
      },
      "correctAnswer": "A",
      "explanation": "log(1.5) = log(3/2) = log 3 - log 2 = 0.4771 - 0.3010 = 0.1761."
    },
    {
      "id": "SS1-LOG-073",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Solve for x: log10(2x) - log10(x - 1) = 1.",
      "options": {
        "A": "5/4",
        "B": "4/5",
        "C": "10/9",
        "D": "9/8"
      },
      "correctAnswer": "A",
      "explanation": "log10(2x / (x - 1)) = 1 => 2x / (x - 1) = 10^1 = 10 => 2x = 10(x - 1) => 2x = 10x - 10 => 8x = 10 => x = 10/8 = 5/4."
    },
    {
      "id": "SS1-LOG-074",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Evaluate: log7(7).",
      "options": {
        "A": "0",
        "B": "1",
        "C": "7",
        "D": "49"
      },
      "correctAnswer": "B",
      "explanation": "The logarithm of any base to itself is 1: loga(a) = 1."
    },
    {
      "id": "SS1-LOG-075",
      "class": "SSS 1",
      "topic": "Logarithms (> 1)",
      "question": "Write 35600 in standard form.",
      "options": {
        "A": "3.56 × 10^4",
        "B": "35.6 × 10^3",
        "C": "3.56 × 10^5",
        "D": "0.356 × 10^5"
      },
      "correctAnswer": "A",
      "explanation": "Standard form is A × 10^n where 1 ≤ A < 10. Moving decimal point 4 places to the left gives 3.56 × 10^4."
    },
    {
      "id": "SS1-BAS-076",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 1101_2 to base 10 (denary).",
      "options": {
        "A": "11",
        "B": "12",
        "C": "13",
        "D": "15"
      },
      "correctAnswer": "C",
      "explanation": "1101_2 = (1 × 2^3) + (1 × 2^2) + (0 × 2^1) + (1 × 2^0) = 8 + 4 + 0 + 1 = 13_10."
    },
    {
      "id": "SS1-BAS-077",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 27_10 to binary (base 2).",
      "options": {
        "A": "11011_2",
        "B": "11101_2",
        "C": "10111_2",
        "D": "11111_2"
      },
      "correctAnswer": "A",
      "explanation": "27 ÷ 2 = 13 r 1; 13 ÷ 2 = 6 r 1; 6 ÷ 2 = 3 r 0; 3 ÷ 2 = 1 r 1; 1 ÷ 2 = 0 r 1. Reading remainders upward: 11011_2."
    },
    {
      "id": "SS1-BAS-078",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Evaluate: 1011_2 + 110_2 in base 2.",
      "options": {
        "A": "10001_2",
        "B": "10010_2",
        "C": "10011_2",
        "D": "10101_2"
      },
      "correctAnswer": "A",
      "explanation": "1011_2 = 11_10 and 110_2 = 6_10. 11 + 6 = 17_10. Converting 17 to base 2 gives 10001_2."
    },
    {
      "id": "SS1-BAS-079",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Evaluate: 11001_2 - 1011_2 in base 2.",
      "options": {
        "A": "1110_2",
        "B": "1101_2",
        "C": "1010_2",
        "D": "1100_2"
      },
      "correctAnswer": "A",
      "explanation": "11001_2 = 25_10, 1011_2 = 11_10. 25 - 11 = 14_10. 14 in binary is 1110_2."
    },
    {
      "id": "SS1-BAS-080",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 234_5 to base 10.",
      "options": {
        "A": "59",
        "B": "69",
        "C": "74",
        "D": "84"
      },
      "correctAnswer": "B",
      "explanation": "234_5 = (2 × 5^2) + (3 × 5^1) + (4 × 5^0) = (2 × 25) + 15 + 4 = 50 + 15 + 4 = 69_10."
    },
    {
      "id": "SS1-BAS-081",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 75_10 to base 8 (octal).",
      "options": {
        "A": "111_8",
        "B": "113_8",
        "C": "123_8",
        "D": "105_8"
      },
      "correctAnswer": "B",
      "explanation": "75 ÷ 8 = 9 r 3; 9 ÷ 8 = 1 r 1; 1 ÷ 8 = 0 r 1. Reading remainders upward: 113_8."
    },
    {
      "id": "SS1-BAS-082",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "If 23_x = 11_10, find the base x.",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
      },
      "correctAnswer": "B",
      "explanation": "23_x = 2(x) + 3 = 11 => 2x = 8 => x = 4."
    },
    {
      "id": "SS1-BAS-083",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Multiply 101_2 by 11_2 in binary.",
      "options": {
        "A": "1111_2",
        "B": "1110_2",
        "C": "1001_2",
        "D": "1101_2"
      },
      "correctAnswer": "A",
      "explanation": "101_2 = 5_10 and 11_2 = 3_10. 5 × 3 = 15_10. 15 in binary is 1111_2."
    },
    {
      "id": "SS1-BAS-084",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 101.11_2 to base 10.",
      "options": {
        "A": "5.5",
        "B": "5.75",
        "C": "5.25",
        "D": "5.375"
      },
      "correctAnswer": "B",
      "explanation": "Whole part: 101_2 = 4 + 1 = 5. Fractional part: (1 × 2^(-1)) + (1 × 2^(-2)) = 0.5 + 0.25 = 0.75. Result = 5.75."
    },
    {
      "id": "SS1-BAS-085",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Add: 234_5 + 341_5.",
      "options": {
        "A": "1130_5",
        "B": "1120_5",
        "C": "1030_5",
        "D": "1125_5"
      },
      "correctAnswer": "A",
      "explanation": "Units: 4 + 1 = 5 = 10_5 (write 0, carry 1). Fives: 3 + 4 + 1 = 8 = 13_5 (write 3, carry 1). Twenty-fives: 2 + 3 + 1 = 6 = 11_5. Total: 1130_5."
    },
    {
      "id": "SS1-BAS-086",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "If 102_x = 11_10, find x.",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
      },
      "correctAnswer": "A",
      "explanation": "102_x = 1(x^2) + 0(x) + 2 = x^2 + 2 = 11 => x^2 = 9 => x = 3 (since base must be positive and > 2)."
    },
    {
      "id": "SS1-BAS-087",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 111011_2 directly to octal (base 8).",
      "options": {
        "A": "67_8",
        "B": "73_8",
        "C": "71_8",
        "D": "63_8"
      },
      "correctAnswer": "B",
      "explanation": "Group binary digits into sets of 3 from the right: (111)(011)_2. 111_2 = 7 and 011_2 = 3. Result = 73_8."
    },
    {
      "id": "SS1-BAS-088",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 56_8 to binary.",
      "options": {
        "A": "101110_2",
        "B": "110101_2",
        "C": "111010_2",
        "D": "101101_2"
      },
      "correctAnswer": "A",
      "explanation": "Each octal digit maps to 3 binary bits: 5 = 101_2 and 6 = 110_2. Concatenating: 101110_2."
    },
    {
      "id": "SS1-BAS-089",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Subtract: 421_5 - 234_5.",
      "options": {
        "A": "132_5",
        "B": "142_5",
        "C": "133_5",
        "D": "141_5"
      },
      "correctAnswer": "A",
      "explanation": "Units: 1 - 4: borrow 1 (worth 5): (1 + 5) - 4 = 2. Fives: (2 - 1) - 3 = 1 - 3: borrow 1 (worth 5): (1 + 5) - 3 = 3. Twenty-fives: (4 - 1) - 2 = 1. Result = 132_5."
    },
    {
      "id": "SS1-BAS-090",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "If 32_x = 24_8, find x.",
      "options": {
        "A": "5",
        "B": "6",
        "C": "7",
        "D": "8"
      },
      "correctAnswer": "B",
      "explanation": "24_8 = 2(8) + 4 = 20_10. 32_x = 3x + 2 = 20 => 3x = 18 => x = 6."
    },
    {
      "id": "SS1-BAS-091",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 43_10 to base 5.",
      "options": {
        "A": "133_5",
        "B": "143_5",
        "C": "123_5",
        "D": "233_5"
      },
      "correctAnswer": "A",
      "explanation": "43 ÷ 5 = 8 r 3; 8 ÷ 5 = 1 r 3; 1 ÷ 5 = 0 r 1. Result = 133_5."
    },
    {
      "id": "SS1-BAS-092",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "In which number base is 12 + 13 = 30?",
      "options": {
        "A": "Base 4",
        "B": "Base 5",
        "C": "Base 6",
        "D": "Base 7"
      },
      "correctAnswer": "B",
      "explanation": "Express in base x: (x + 2) + (x + 3) = 3x + 0 => 2x + 5 = 3x => x = 5. Checking: 12_5 (7) + 13_5 (8) = 15_10 = 30_5. Correct!"
    },
    {
      "id": "SS1-BAS-093",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "What is the highest single digit allowed in base 7 arithmetic?",
      "options": {
        "A": "7",
        "B": "6",
        "C": "8",
        "D": "5"
      },
      "correctAnswer": "B",
      "explanation": "In any base b, the allowed digits run from 0 to b - 1. For base 7, the allowed digits are 0, 1, 2, 3, 4, 5, 6. The highest is 6."
    },
    {
      "id": "SS1-BAS-094",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Evaluate in binary: 110_2 × 10_2.",
      "options": {
        "A": "1100_2",
        "B": "1110_2",
        "C": "1000_2",
        "D": "1010_2"
      },
      "correctAnswer": "A",
      "explanation": "Multiplying by 10_2 (which is 2 in denary) simply shifts bits one place left: 110_2 × 10_2 = 1100_2."
    },
    {
      "id": "SS1-BAS-095",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 210_3 to base 10.",
      "options": {
        "A": "19",
        "B": "20",
        "C": "21",
        "D": "23"
      },
      "correctAnswer": "C",
      "explanation": "210_3 = (2 × 3^2) + (1 × 3^1) + (0 × 3^0) = 18 + 3 + 0 = 21_10."
    },
    {
      "id": "SS1-BAS-096",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "If 110_x = 42_10, find the positive value of x.",
      "options": {
        "A": "5",
        "B": "6",
        "C": "7",
        "D": "8"
      },
      "correctAnswer": "B",
      "explanation": "1(x^2) + 1(x) + 0 = 42 => x^2 + x - 42 = 0 => (x + 7)(x - 6) = 0. Since base must be positive, x = 6."
    },
    {
      "id": "SS1-BAS-097",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Evaluate: 1000_2 - 1_2 in binary.",
      "options": {
        "A": "111_2",
        "B": "101_2",
        "C": "110_2",
        "D": "100_2"
      },
      "correctAnswer": "A",
      "explanation": "1000_2 = 8_10. 8 - 1 = 7_10 = 111_2."
    },
    {
      "id": "SS1-BAS-098",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 0.625_10 to binary fraction.",
      "options": {
        "A": "0.101_2",
        "B": "0.110_2",
        "C": "0.011_2",
        "D": "0.111_2"
      },
      "correctAnswer": "A",
      "explanation": "0.625 × 2 = 1.25 (1); 0.25 × 2 = 0.5 (0); 0.5 × 2 = 1.0 (1). Reading downwards: 0.101_2."
    },
    {
      "id": "SS1-BAS-099",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "Convert 47_10 to base 3.",
      "options": {
        "A": "1202_3",
        "B": "1121_3",
        "C": "1210_3",
        "D": "1022_3"
      },
      "correctAnswer": "A",
      "explanation": "47 ÷ 3 = 15 r 2; 15 ÷ 3 = 5 r 0; 5 ÷ 3 = 1 r 2; 1 ÷ 3 = 0 r 1. Reading upwards: 1202_3."
    },
    {
      "id": "SS1-BAS-100",
      "class": "SSS 1",
      "topic": "Number Bases",
      "question": "If 21_x + 34_x = 55_x, what is the value of base x?",
      "options": {
        "A": "Base 6",
        "B": "Any base greater than 5",
        "C": "Base 7 only",
        "D": "Base 10 only"
      },
      "correctAnswer": "B",
      "explanation": "21_x + 34_x: units digit 1 + 4 = 5 (no carry for any base > 5); tens digit 2 + 3 = 5. Since digits 5 appear, x must be strictly greater than 5. Hence, it holds in any base > 5."
    }
  ],
  "SSS 2": [
    {
      "id": "SS2-IND-001",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve the equation: 2^(2x) - 5(2^x) + 4 = 0.",
      "options": {
        "A": "x = 0 or x = 2",
        "B": "x = 1 or x = 4",
        "C": "x = 2 or x = 4",
        "D": "x = -1 or x = 2"
      },
      "correctAnswer": "A",
      "explanation": "Let y = 2^x. Then y^2 - 5y + 4 = 0. Factorizing gives (y - 1)(y - 4) = 0, so y = 1 or y = 4. Since 2^x = 1 = 2^0, x = 0; since 2^x = 4 = 2^2, x = 2. Thus x = 0 or x = 2."
    },
    {
      "id": "SS2-IND-002",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Evaluate: (16/81)^(-3/4).",
      "options": {
        "A": "8/27",
        "B": "27/8",
        "C": "9/4",
        "D": "4/9"
      },
      "correctAnswer": "B",
      "explanation": "(16/81)^(-3/4) = (81/16)^(3/4) = [(81/16)^(1/4)]^3 = (3/2)^3 = 27/8."
    },
    {
      "id": "SS2-IND-003",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If 3^(2x - 1) * 9^(x + 1) = 27^(x + 2), find the value of x.",
      "options": {
        "A": "3",
        "B": "5",
        "C": "2",
        "D": "4"
      },
      "correctAnswer": "B",
      "explanation": "Express in base 3: 3^(2x - 1) * (3^2)^(x + 1) = (3^3)^(x + 2). Then 3^(2x - 1 + 2x + 2) = 3^(3x + 6). 4x + 1 = 3x + 6 => x = 5."
    },
    {
      "id": "SS2-IND-004",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for x if 4^(x + 1) - 9(2^x) + 2 = 0.",
      "options": {
        "A": "x = 1 or x = -2",
        "B": "x = 1 or x = -1",
        "C": "x = -1 or x = -2",
        "D": "x = 2 or x = -1"
      },
      "correctAnswer": "A",
      "explanation": "4^(x+1) = 4 * 2^(2x). Let y = 2^x: 4y^2 - 9y + 2 = 0. (4y - 1)(y - 2) = 0 => y = 1/4 or y = 2. 2^x = 1/4 = 2^(-2) => x = -2; 2^x = 2^1 => x = 1. Thus x = 1 or -2."
    },
    {
      "id": "SS2-IND-005",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: (x^(1/2) * y^(-2/3)) / (x^(-1/4) * y^(1/3)).",
      "options": {
        "A": "x^(3/4) / y",
        "B": "x^(1/4) * y",
        "C": "x^(3/4) * y",
        "D": "1 / (x^(3/4) * y)"
      },
      "correctAnswer": "A",
      "explanation": "x^(1/2 - (-1/4)) * y^(-2/3 - 1/3) = x^(3/4) * y^(-1) = x^(3/4) / y."
    },
    {
      "id": "SS2-IND-006",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If 2^(x + y) = 16 and 3^(x - y) = 9, find the values of x and y.",
      "options": {
        "A": "x = 3, y = 1",
        "B": "x = 4, y = 2",
        "C": "x = 2, y = 1",
        "D": "x = 5, y = 1"
      },
      "correctAnswer": "A",
      "explanation": "2^(x+y) = 2^4 => x + y = 4. 3^(x-y) = 3^2 => x - y = 2. Adding the two equations: 2x = 6 => x = 3. Substituting into x + y = 4 gives y = 1."
    },
    {
      "id": "SS2-IND-007",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Find x if (1/2)^(2x - 3) = 8^(x + 1).",
      "options": {
        "A": "x = 0",
        "B": "x = -1/5",
        "C": "x = 1/5",
        "D": "x = 1"
      },
      "correctAnswer": "A",
      "explanation": "2^(-(2x - 3)) = (2^3)^(x + 1) => 2^(3 - 2x) = 2^(3x + 3). Equating exponents: 3 - 2x = 3x + 3 => 5x = 0 => x = 0."
    },
    {
      "id": "SS2-IND-008",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Evaluate: (0.125)^(-2/3).",
      "options": {
        "A": "2",
        "B": "4",
        "C": "8",
        "D": "1/4"
      },
      "correctAnswer": "B",
      "explanation": "0.125 = 1/8 = 2^(-3). (2^(-3))^(-2/3) = 2^((-3)*(-2/3)) = 2^2 = 4."
    },
    {
      "id": "SS2-IND-009",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve the equation: 5^(2x) - 26(5^x) + 25 = 0.",
      "options": {
        "A": "x = 0 or x = 2",
        "B": "x = 1 or x = 2",
        "C": "x = -1 or x = 2",
        "D": "x = 1 or x = 5"
      },
      "correctAnswer": "A",
      "explanation": "Let u = 5^x. u^2 - 26u + 25 = 0 => (u - 1)(u - 25) = 0. So u = 1 or u = 25. Since 5^x = 1 => x = 0; 5^x = 25 => x = 2."
    },
    {
      "id": "SS2-IND-010",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: (27^(2/3) * 4^(-1/2)) / 36^(1/2).",
      "options": {
        "A": "3/4",
        "B": "3/2",
        "C": "9/4",
        "D": "1/4"
      },
      "correctAnswer": "A",
      "explanation": "27^(2/3) = (3^3)^(2/3) = 3^2 = 9. 4^(-1/2) = 1/2. 36^(1/2) = 6. Result = (9 * 0.5) / 6 = 4.5 / 6 = 3/4."
    },
    {
      "id": "SS2-IND-011",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If 8^x = 32^y and 9^x = 27^(y + 1), find the values of x and y.",
      "options": {
        "A": "x = 15, y = 9",
        "B": "x = 10, y = 6",
        "C": "x = 5, y = 3",
        "D": "x = 12, y = 8"
      },
      "correctAnswer": "A",
      "explanation": "Express in prime bases: 2^(3x) = 2^(5y) => 3x = 5y => y = 3x/5. Also 3^(2x) = 3^(3(y+1)) => 2x = 3y + 3. Substituting y: 2x = 3(3x/5) + 3 => 2x - 9x/5 = 3 => x/5 = 3 => x = 15. Then y = 3(15)/5 = 9."
    },
    {
      "id": "SS2-IND-012",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for x: (25)^(x - 1) = (1/125)^(x + 2).",
      "options": {
        "A": "-4/5",
        "B": "-2/5",
        "C": "4/5",
        "D": "-1/2"
      },
      "correctAnswer": "A",
      "explanation": "5^(2(x - 1)) = 5^(-3(x + 2)). Equating exponents: 2x - 2 = -3x - 6 => 5x = -4 => x = -4/5."
    },
    {
      "id": "SS2-IND-013",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: (2^(n+4) - 2 * 2^n) / (2 * 2^(n+3)).",
      "options": {
        "A": "7/8",
        "B": "3/4",
        "C": "1/2",
        "D": "7/16"
      },
      "correctAnswer": "A",
      "explanation": "Numerator: 2^n(2^4 - 2) = 2^n(16 - 2) = 14 * 2^n. Denominator: 2 * 2^(n+3) = 2^(n+4) = 16 * 2^n. Ratio = 14/16 = 7/8."
    },
    {
      "id": "SS2-IND-014",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Find the value of x that satisfies: 9^(x + 1) - 28(3^x) + 3 = 0.",
      "options": {
        "A": "x = 1 or x = -2",
        "B": "x = -1 or x = 1",
        "C": "x = -1 or x = -2",
        "D": "x = 2 or x = 0"
      },
      "correctAnswer": "A",
      "explanation": "9 * (3^x)^2 - 28(3^x) + 3 = 0. Let u = 3^x: 9u^2 - 28u + 3 = 0 => (9u - 1)(u - 3) = 0. u = 1/9 => 3^x = 3^(-2) => x = -2; u = 3 => 3^x = 3^1 => x = 1. Thus x = 1 or x = -2."
    },
    {
      "id": "SS2-IND-015",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If 10^(0.3010) = 2 and 10^(0.4771) = 3, what is 10^(1.0791)?",
      "options": {
        "A": "12",
        "B": "6",
        "C": "18",
        "D": "24"
      },
      "correctAnswer": "A",
      "explanation": "10^(1.0791) = 10^(2 * 0.3010 + 0.4771) = 10^(0.6020 + 0.4771) = (10^0.3010)^2 * 10^0.4771 = 2^2 * 3 = 12."
    },
    {
      "id": "SS2-IND-016",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for y in the equation: 3^(2y + 1) - 10(3^y) + 3 = 0.",
      "options": {
        "A": "y = 1 or y = -1",
        "B": "y = 2 or y = 0",
        "C": "y = 3 or y = 1/3",
        "D": "y = -1 or y = -2"
      },
      "correctAnswer": "A",
      "explanation": "3 * 3^(2y) - 10(3^y) + 3 = 0. Let m = 3^y: 3m^2 - 10m + 3 = 0 => (3m - 1)(m - 3) = 0. m = 1/3 => y = -1; m = 3 => y = 1."
    },
    {
      "id": "SS2-IND-017",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Evaluate: (64/27)^(-2/3) * (16/81)^(1/2).",
      "options": {
        "A": "1/4",
        "B": "1/3",
        "C": "2/3",
        "D": "3/4"
      },
      "correctAnswer": "A",
      "explanation": "(64/27)^(-2/3) = (27/64)^(2/3) = (3/4)^2 = 9/16. (16/81)^(1/2) = 4/9. Then (9/16) * (4/9) = 36/144 = 1/4."
    },
    {
      "id": "SS2-IND-018",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If 2^(x - 1) + 2^(x + 1) = 40, find x.",
      "options": {
        "A": "4",
        "B": "3",
        "C": "5",
        "D": "6"
      },
      "correctAnswer": "A",
      "explanation": "2^x * (1/2 + 2) = 40 => 2^x * (5/2) = 40 => 2^x = 40 * (2/5) = 16 = 2^4 => x = 4."
    },
    {
      "id": "SS2-IND-019",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Given that 2^x = 3^y = 6^(-z), express z in terms of x and y.",
      "options": {
        "A": "z = -xy / (x + y)",
        "B": "z = xy / (x + y)",
        "C": "z = (x + y) / xy",
        "D": "z = x + y"
      },
      "correctAnswer": "A",
      "explanation": "Let 2^x = 3^y = 6^(-z) = k. Then 2 = k^(1/x), 3 = k^(1/y), 6 = k^(-1/z). Since 2 * 3 = 6, k^(1/x + 1/y) = k^(-1/z). Hence 1/x + 1/y = -1/z => (x + y)/(xy) = -1/z => z = -xy / (x + y)."
    },
    {
      "id": "SS2-IND-020",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: ((a^3 * b^(-2)) / (a^(-1) * b^4))^(-1/2).",
      "options": {
        "A": "b^3 / a^2",
        "B": "a^2 / b^3",
        "C": "b^2 / a^3",
        "D": "a / b^2"
      },
      "correctAnswer": "A",
      "explanation": "Inside parenthesis: a^(3 - (-1)) * b^(-2 - 4) = a^4 * b^(-6). Taking power of -1/2: (a^4)^(-1/2) * (b^(-6))^(-1/2) = a^(-2) * b^3 = b^3 / a^2."
    },
    {
      "id": "SS2-LOG-001",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If log_a (x) = m and log_a (y) = n, express log_a (x^3 / y^2) in terms of m and n.",
      "options": {
        "A": "3m - 2n",
        "B": "3m + 2n",
        "C": "m^3 - n^2",
        "D": "(3m) / (2n)"
      },
      "correctAnswer": "A",
      "explanation": "By logarithm properties: log_a(x^3 / y^2) = log_a(x^3) - log_a(y^2) = 3 log_a(x) - 2 log_a(y) = 3m - 2n."
    },
    {
      "id": "SS2-LOG-002",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve the equation: log_2 (x) + log_2 (x - 2) = 3.",
      "options": {
        "A": "x = 4",
        "B": "x = -2",
        "C": "x = 4 or x = -2",
        "D": "x = 6"
      },
      "correctAnswer": "A",
      "explanation": "log_2[x(x - 2)] = 3 => x(x - 2) = 2^3 = 8 => x^2 - 2x - 8 = 0 => (x - 4)(x + 2) = 0. Since log of negative number is undefined, x = 4 only."
    },
    {
      "id": "SS2-LOG-003",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "By the change of base rule, log_b (a) is equivalent to:",
      "options": {
        "A": "log_c (a) / log_c (b)",
        "B": "log_c (b) / log_c (a)",
        "C": "log_c (a * b)",
        "D": "log_c (a - b)"
      },
      "correctAnswer": "A",
      "explanation": "The change of base formula states that log_b(a) = log_c(a) / log_c(b) for any valid base c."
    },
    {
      "id": "SS2-LOG-004",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Find x if log_3 (x + 6) - log_3 (x) = 2.",
      "options": {
        "A": "3/4",
        "B": "4/3",
        "C": "2",
        "D": "1/2"
      },
      "correctAnswer": "A",
      "explanation": "log_3((x + 6)/x) = 2 => (x + 6)/x = 3^2 = 9 => x + 6 = 9x => 8x = 6 => x = 6/8 = 3/4."
    },
    {
      "id": "SS2-LOG-005",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If log_10 (2) = 0.3010 and log_10 (3) = 0.4771, calculate log_10 (15).",
      "options": {
        "A": "1.1761",
        "B": "1.4771",
        "C": "0.7781",
        "D": "1.2552"
      },
      "correctAnswer": "A",
      "explanation": "15 = (3 * 10) / 2. log_10(15) = log_10(3) + log_10(10) - log_10(2) = 0.4771 + 1 - 0.3010 = 1.1761."
    },
    {
      "id": "SS2-LOG-006",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Evaluate without tables: log_2 (32) + log_3 (81) - log_5 (125).",
      "options": {
        "A": "6",
        "B": "4",
        "C": "7",
        "D": "5"
      },
      "correctAnswer": "A",
      "explanation": "log_2(32) = 5, log_3(81) = 4, log_5(125) = 3. 5 + 4 - 3 = 6."
    },
    {
      "id": "SS2-LOG-007",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for x: log_x (64) = -3.",
      "options": {
        "A": "1/4",
        "B": "4",
        "C": "-4",
        "D": "1/8"
      },
      "correctAnswer": "A",
      "explanation": "x^(-3) = 64 => (1/x)^3 = 4^3 => 1/x = 4 => x = 1/4."
    },
    {
      "id": "SS2-LOG-008",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Given that log_10 (y) = 2 log_10 (x) + 3, express y in terms of x.",
      "options": {
        "A": "y = 1000x^2",
        "B": "y = x^2 + 1000",
        "C": "y = 3x^2",
        "D": "y = 1000x"
      },
      "correctAnswer": "A",
      "explanation": "log_10(y) = log_10(x^2) + log_10(1000) = log_10(1000x^2). Removing logs gives y = 1000x^2."
    },
    {
      "id": "SS2-LOG-009",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If log_4 (x) = 2.5, find x.",
      "options": {
        "A": "32",
        "B": "16",
        "C": "64",
        "D": "10"
      },
      "correctAnswer": "A",
      "explanation": "x = 4^(2.5) = 4^(5/2) = (sqrt(4))^5 = 2^5 = 32."
    },
    {
      "id": "SS2-LOG-010",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Simplify: log_a (b) * log_b (c) * log_c (a).",
      "options": {
        "A": "1",
        "B": "0",
        "C": "a * b * c",
        "D": "log_a (abc)"
      },
      "correctAnswer": "A",
      "explanation": "Using change of base to common base 10: (log b / log a) * (log c / log b) * (log a / log c) = 1."
    },
    {
      "id": "SS2-LOG-011",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve the equation: log_10 (x^2 - 1) - log_10 (x - 1) = 1.",
      "options": {
        "A": "x = 9",
        "B": "x = 10",
        "C": "x = 11",
        "D": "x = 8"
      },
      "correctAnswer": "A",
      "explanation": "log_10((x^2 - 1)/(x - 1)) = 1 => log_10(x + 1) = 1 => x + 1 = 10^1 = 10 => x = 9."
    },
    {
      "id": "SS2-LOG-012",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If log_2 (x) + 2 log_4 (x) = 4, find x.",
      "options": {
        "A": "4",
        "B": "8",
        "C": "16",
        "D": "2"
      },
      "correctAnswer": "A",
      "explanation": "log_4(x) = log_2(x) / log_2(4) = (1/2) log_2(x). So 2 log_4(x) = log_2(x). Equation becomes log_2(x) + log_2(x) = 4 => 2 log_2(x) = 4 => log_2(x) = 2 => x = 4."
    },
    {
      "id": "SS2-LOG-013",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "What is the value of log_8 (16)?",
      "options": {
        "A": "4/3",
        "B": "3/4",
        "C": "2",
        "D": "1/2"
      },
      "correctAnswer": "A",
      "explanation": "Let log_8(16) = x => 8^x = 16 => (2^3)^x = 2^4 => 3x = 4 => x = 4/3."
    },
    {
      "id": "SS2-LOG-014",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If log_10 (2) = 0.3010, how many digits are there in 2^50?",
      "options": {
        "A": "16",
        "B": "15",
        "C": "17",
        "D": "50"
      },
      "correctAnswer": "A",
      "explanation": "Number of digits = floor(log_10(2^50)) + 1 = floor(50 * 0.3010) + 1 = floor(15.05) + 1 = 15 + 1 = 16 digits."
    },
    {
      "id": "SS2-LOG-015",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for x: (log_3 x)^2 - 4 log_3 x + 3 = 0.",
      "options": {
        "A": "x = 3 or x = 27",
        "B": "x = 1 or x = 3",
        "C": "x = 9 or x = 27",
        "D": "x = 3 or x = 9"
      },
      "correctAnswer": "A",
      "explanation": "Let y = log_3 x: y^2 - 4y + 3 = 0 => (y - 1)(y - 3) = 0. y = 1 => log_3 x = 1 => x = 3; y = 3 => log_3 x = 3 => x = 3^3 = 27."
    },
    {
      "id": "SS2-LOG-016",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If log_a (2) = x and log_a (3) = y, find log_a (√6).",
      "options": {
        "A": "(x + y) / 2",
        "B": "x + y",
        "C": "2(x + y)",
        "D": "sqrt(xy)"
      },
      "correctAnswer": "A",
      "explanation": "log_a(sqrt(6)) = (1/2) log_a(6) = (1/2)[log_a(2) + log_a(3)] = (x + y)/2."
    },
    {
      "id": "SS2-LOG-017",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Evaluate: 5^(log_5 7).",
      "options": {
        "A": "7",
        "B": "5",
        "C": "35",
        "D": "log_5 7"
      },
      "correctAnswer": "A",
      "explanation": "By the fundamental identity of logarithms, b^(log_b x) = x. Hence 5^(log_5 7) = 7."
    },
    {
      "id": "SS2-LOG-018",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Find x if log_2 (log_3 x) = 1.",
      "options": {
        "A": "9",
        "B": "6",
        "C": "8",
        "D": "3"
      },
      "correctAnswer": "A",
      "explanation": "log_2(log_3 x) = 1 => log_3 x = 2^1 = 2 => x = 3^2 = 9."
    },
    {
      "id": "SS2-LOG-019",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If log_10 (x - 3) + log_10 (x) = 1, find x.",
      "options": {
        "A": "x = 5",
        "B": "x = 2",
        "C": "x = -2",
        "D": "x = 5 or x = -2"
      },
      "correctAnswer": "A",
      "explanation": "log_10[x(x - 3)] = 1 => x^2 - 3x = 10 => x^2 - 3x - 10 = 0 => (x - 5)(x + 2) = 0. Since x > 3 for log to be real, x = 5."
    },
    {
      "id": "SS2-LOG-020",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Express log_b (sqrt(x^3 / y)) in terms of log_b x and log_b y.",
      "options": {
        "A": "(3/2) log_b x - (1/2) log_b y",
        "B": "3 log_b x - log_b y",
        "C": "(1/2)(3 log_b x + log_b y)",
        "D": "(3/2) log_b (x/y)"
      },
      "correctAnswer": "A",
      "explanation": "log_b((x^3 / y)^(1/2)) = (1/2) log_b(x^3 / y) = (1/2)[3 log_b x - log_b y] = (3/2) log_b x - (1/2) log_b y."
    },
    {
      "id": "SS2-SET-001",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a class of 50 students, 30 study Physics, 25 study Chemistry, and 10 study both. How many study neither Physics nor Chemistry?",
      "options": {
        "A": "5",
        "B": "10",
        "C": "15",
        "D": "0"
      },
      "correctAnswer": "A",
      "explanation": "n(P ∪ C) = n(P) + n(C) - n(P ∩ C) = 30 + 25 - 10 = 45. Number studying neither = Total - n(P ∪ C) = 50 - 45 = 5."
    },
    {
      "id": "SS2-SET-002",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "For three sets A, B, and C, the expression (A ∪ B)' is equivalent to:",
      "options": {
        "A": "A' ∩ B'",
        "B": "A' ∪ B'",
        "C": "A ∩ B'",
        "D": "(A ∩ B)'"
      },
      "correctAnswer": "A",
      "explanation": "By De Morgan's Law, the complement of the union of two sets is the intersection of their complements: (A ∪ B)' = A' ∩ B'."
    },
    {
      "id": "SS2-SET-003",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a survey of 100 people, 60 like Apple, 45 like Banana, 35 like Orange, 20 like Apple and Banana, 15 like Apple and Orange, 10 like Banana and Orange, and 5 like all three. How many like none of the three fruits?",
      "options": {
        "A": "0",
        "B": "5",
        "C": "10",
        "D": "15"
      },
      "correctAnswer": "A",
      "explanation": "n(A ∪ B ∪ O) = 60 + 45 + 35 - (20 + 15 + 10) + 5 = 140 - 45 + 5 = 100. People liking none = 100 - 100 = 0."
    },
    {
      "id": "SS2-SET-004",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If n(A) = 28, n(B) = 32, and n(A ∪ B) = 45, find the number of elements in only set A, n(A ∩ B').",
      "options": {
        "A": "13",
        "B": "15",
        "C": "17",
        "D": "28"
      },
      "correctAnswer": "A",
      "explanation": "n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 28 + 32 - 45 = 15. Elements in only A = n(A) - n(A ∩ B) = 28 - 15 = 13."
    },
    {
      "id": "SS2-SET-005",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "The symmetric difference of two sets A and B, denoted A Δ B, is defined as:",
      "options": {
        "A": "(A ∪ B) \\ (A ∩ B)",
        "B": "A ∩ B",
        "C": "A' ∪ B'",
        "D": "(A \\ B) ∩ (B \\ A)"
      },
      "correctAnswer": "A",
      "explanation": "A Δ B consists of elements in A or B but not in both: (A ∪ B) \\ (A ∩ B) or (A \\ B) ∪ (B \\ A)."
    },
    {
      "id": "SS2-SET-006",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If A = {1, 2} and B = {3, 4, 5}, how many elements are in the Cartesian product A x B?",
      "options": {
        "A": "6",
        "B": "5",
        "C": "8",
        "D": "9"
      },
      "correctAnswer": "A",
      "explanation": "n(A x B) = n(A) * n(B) = 2 * 3 = 6."
    },
    {
      "id": "SS2-SET-007",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a group of 60 students, 35 play football, 30 play volleyball, and 12 play both. How many students play exactly one sport?",
      "options": {
        "A": "41",
        "B": "53",
        "C": "23",
        "D": "18"
      },
      "correctAnswer": "A",
      "explanation": "Football only = 35 - 12 = 23. Volleyball only = 30 - 12 = 18. Exactly one sport = 23 + 18 = 41."
    },
    {
      "id": "SS2-SET-008",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If set P has 6 elements, what is the number of proper subsets of P?",
      "options": {
        "A": "63",
        "B": "64",
        "C": "31",
        "D": "32"
      },
      "correctAnswer": "A",
      "explanation": "The number of proper subsets is 2^n - 1. For n = 6: 2^6 - 1 = 64 - 1 = 63."
    },
    {
      "id": "SS2-SET-009",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Which of the following represents the shaded region for (A ∩ B) ∪ (A ∩ C)?",
      "options": {
        "A": "A ∩ (B ∪ C)",
        "B": "A ∪ (B ∩ C)",
        "C": "(A ∪ B) ∩ C",
        "D": "A' ∩ (B ∪ C)"
      },
      "correctAnswer": "A",
      "explanation": "By the distributive law of sets: (A ∩ B) ∪ (A ∩ C) = A ∩ (B ∪ C)."
    },
    {
      "id": "SS2-SET-010",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Out of 80 students, 45 take French, 40 take German. If 15 take neither, how many take both French and German?",
      "options": {
        "A": "20",
        "B": "15",
        "C": "25",
        "D": "30"
      },
      "correctAnswer": "A",
      "explanation": "Total taking at least one = 80 - 15 = 65. n(F ∪ G) = n(F) + n(G) - n(F ∩ G) => 65 = 45 + 40 - n(F ∩ G) => n(F ∩ G) = 85 - 65 = 20."
    },
    {
      "id": "SS2-SET-011",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If ξ = {integers from 1 to 20}, E = {multiples of 2}, F = {multiples of 3}, find n(E ∩ F).",
      "options": {
        "A": "3",
        "B": "6",
        "C": "10",
        "D": "2"
      },
      "correctAnswer": "A",
      "explanation": "E ∩ F consists of multiples of LCM(2, 3) = 6 between 1 and 20: {6, 12, 18}. There are 3 elements."
    },
    {
      "id": "SS2-SET-012",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If A ⊂ B, which of the following is ALWAYS true?",
      "options": {
        "A": "A ∩ B = A",
        "B": "A ∪ B = A",
        "C": "A ∩ B = B",
        "D": "A' ⊂ B'"
      },
      "correctAnswer": "A",
      "explanation": "If A is a subset of B, all elements of A are in B, so their intersection is A: A ∩ B = A, and their union is B."
    },
    {
      "id": "SS2-SET-013",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a town, 70% of households have a TV, 60% have a radio, and 50% have both. What percentage of households have neither?",
      "options": {
        "A": "20%",
        "B": "10%",
        "C": "30%",
        "D": "15%"
      },
      "correctAnswer": "A",
      "explanation": "Percentage with TV or radio = 70 + 60 - 50 = 80%. Percentage with neither = 100% - 80% = 20%."
    },
    {
      "id": "SS2-SET-014",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If n(A) = 10, n(B) = 15, what is the MAXIMUM possible value of n(A ∪ B)?",
      "options": {
        "A": "25",
        "B": "15",
        "C": "10",
        "D": "30"
      },
      "correctAnswer": "A",
      "explanation": "The union is maximized when the sets are completely disjoint (n(A ∩ B) = 0). Then n(A ∪ B) = 10 + 15 = 25."
    },
    {
      "id": "SS2-SET-015",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If n(A) = 10, n(B) = 15, what is the MINIMUM possible value of n(A ∪ B)?",
      "options": {
        "A": "15",
        "B": "10",
        "C": "5",
        "D": "25"
      },
      "correctAnswer": "A",
      "explanation": "The union is minimized when the smaller set A is completely contained in B (A ⊂ B). Then n(A ∪ B) = n(B) = 15."
    },
    {
      "id": "SS2-SET-016",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Given A = {x : x is a letter in the word 'MATHEMATICS'}, find n(A).",
      "options": {
        "A": "8",
        "B": "11",
        "C": "7",
        "D": "9"
      },
      "correctAnswer": "A",
      "explanation": "The distinct letters are M, A, T, H, E, I, C, S. There are 8 distinct letters."
    },
    {
      "id": "SS2-SET-017",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Which of the following is equivalent to (A ∩ B)'?",
      "options": {
        "A": "A' ∪ B'",
        "B": "A' ∩ B'",
        "C": "A ∪ B'",
        "D": "A' ∪ B"
      },
      "correctAnswer": "A",
      "explanation": "By De Morgan's Law, (A ∩ B)' = A' ∪ B'."
    },
    {
      "id": "SS2-SET-018",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If A and B are two sets such that A \\ B = A, what can be deduced about A and B?",
      "options": {
        "A": "A and B are disjoint",
        "B": "A ⊂ B",
        "C": "B ⊂ A",
        "D": "A = B"
      },
      "correctAnswer": "A",
      "explanation": "A \\ B = A means removing all elements of B from A leaves A unchanged. This occurs if and only if A and B have no common elements, i.e., A ∩ B = ∅."
    },
    {
      "id": "SS2-SET-019",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a class of 40 students, 22 offer Biology, 18 offer Geography, and 6 offer both. How many offer Biology only?",
      "options": {
        "A": "16",
        "B": "12",
        "C": "22",
        "D": "14"
      },
      "correctAnswer": "A",
      "explanation": "Biology only = n(B) - n(B ∩ G) = 22 - 6 = 16."
    },
    {
      "id": "SS2-SET-020",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a 3-set problem where n(ξ) = 50, n(A) = 20, n(B) = 25, n(C) = 22, n(A ∩ B) = 10, n(B ∩ C) = 8, n(A ∩ C) = 7, and n(A ∩ B ∩ C) = 3, how many elements are outside A ∪ B ∪ C?",
      "options": {
        "A": "5",
        "B": "8",
        "C": "10",
        "D": "3"
      },
      "correctAnswer": "A",
      "explanation": "n(A ∪ B ∪ C) = 20 + 25 + 22 - (10 + 8 + 7) + 3 = 67 - 25 + 3 = 45. Outside = 50 - 45 = 5."
    },
    {
      "id": "SS2-QUA-001",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the roots of the quadratic equation: 2x^2 - 5x - 3 = 0.",
      "options": {
        "A": "x = 3 or x = -1/2",
        "B": "x = -3 or x = 1/2",
        "C": "x = 3 or x = 1/2",
        "D": "x = -3 or x = -1/2"
      },
      "correctAnswer": "A",
      "explanation": "Factorizing: 2x^2 - 6x + x - 3 = 0 => 2x(x - 3) + 1(x - 3) = 0 => (2x + 1)(x - 3) = 0. Hence x = 3 or x = -1/2."
    },
    {
      "id": "SS2-QUA-002",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If alpha and beta are the roots of 3x^2 - 7x + 2 = 0, find the value of alpha + beta.",
      "options": {
        "A": "7/3",
        "B": "-7/3",
        "C": "2/3",
        "D": "-2/3"
      },
      "correctAnswer": "A",
      "explanation": "For ax^2 + bx + c = 0, sum of roots alpha + beta = -b/a = -(-7)/3 = 7/3."
    },
    {
      "id": "SS2-QUA-003",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "For what value of k will the quadratic equation x^2 + kx + 9 = 0 have equal roots?",
      "options": {
        "A": "±6",
        "B": "±3",
        "C": "±9",
        "D": "±18"
      },
      "correctAnswer": "A",
      "explanation": "For equal roots, the discriminant b^2 - 4ac = 0. Here k^2 - 4(1)(9) = 0 => k^2 - 36 = 0 => k = ±6."
    },
    {
      "id": "SS2-QUA-004",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Form the quadratic equation whose roots are -3 and 5.",
      "options": {
        "A": "x^2 - 2x - 15 = 0",
        "B": "x^2 + 2x - 15 = 0",
        "C": "x^2 - 8x + 15 = 0",
        "D": "x^2 + 8x - 15 = 0"
      },
      "correctAnswer": "A",
      "explanation": "Sum of roots = -3 + 5 = 2. Product of roots = -3 * 5 = -15. Equation: x^2 - (sum)x + product = 0 => x^2 - 2x - 15 = 0."
    },
    {
      "id": "SS2-QUA-005",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If alpha and beta are roots of 2x^2 + 3x - 5 = 0, find the value of alpha * beta.",
      "options": {
        "A": "-5/2",
        "B": "5/2",
        "C": "-3/2",
        "D": "3/2"
      },
      "correctAnswer": "A",
      "explanation": "Product of roots = c/a = -5/2."
    },
    {
      "id": "SS2-QUA-006",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If the roots of ax^2 + bx + c = 0 are real and distinct, then:",
      "options": {
        "A": "b^2 - 4ac > 0",
        "B": "b^2 - 4ac = 0",
        "C": "b^2 - 4ac < 0",
        "D": "b^2 - 4ac ≤ 0"
      },
      "correctAnswer": "A",
      "explanation": "A positive discriminant (b^2 - 4ac > 0) indicates two real and distinct roots."
    },
    {
      "id": "SS2-QUA-007",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve by completing the square: x^2 + 6x - 7 = 0.",
      "options": {
        "A": "x = 1 or x = -7",
        "B": "x = -1 or x = 7",
        "C": "x = 2 or x = -8",
        "D": "x = -2 or x = 8"
      },
      "correctAnswer": "A",
      "explanation": "x^2 + 6x = 7 => (x + 3)^2 = 7 + 9 = 16 => x + 3 = ±4 => x = 4 - 3 = 1 or x = -4 - 3 = -7."
    },
    {
      "id": "SS2-QUA-008",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If alpha and beta are roots of x^2 - 4x + 1 = 0, evaluate alpha^2 + beta^2.",
      "options": {
        "A": "14",
        "B": "16",
        "C": "18",
        "D": "12"
      },
      "correctAnswer": "A",
      "explanation": "alpha + beta = 4, alpha * beta = 1. alpha^2 + beta^2 = (alpha + beta)^2 - 2(alpha * beta) = 4^2 - 2(1) = 16 - 2 = 14."
    },
    {
      "id": "SS2-QUA-009",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the values of m for which the line y = 2x + m is tangent to the curve y = x^2.",
      "options": {
        "A": "m = -1",
        "B": "m = 1",
        "C": "m = -2",
        "D": "m = 2"
      },
      "correctAnswer": "A",
      "explanation": "x^2 = 2x + m => x^2 - 2x - m = 0. Tangency means equal roots (b^2 - 4ac = 0): (-2)^2 - 4(1)(-m) = 0 => 4 + 4m = 0 => m = -1."
    },
    {
      "id": "SS2-QUA-010",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "The length of a rectangular field is 3m more than its width. If the area is 70 m^2, find its perimeter.",
      "options": {
        "A": "34 m",
        "B": "20 m",
        "C": "40 m",
        "D": "28 m"
      },
      "correctAnswer": "A",
      "explanation": "w(w + 3) = 70 => w^2 + 3w - 70 = 0 => (w + 10)(w - 7) = 0 => w = 7 m. Length = 10 m. Perimeter = 2(7 + 10) = 34 m."
    },
    {
      "id": "SS2-QUA-011",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve the equation: 3x^2 = 12.",
      "options": {
        "A": "x = ±2",
        "B": "x = 4",
        "C": "x = ±4",
        "D": "x = 2"
      },
      "correctAnswer": "A",
      "explanation": "x^2 = 12 / 3 = 4 => x = ±sqrt(4) = ±2."
    },
    {
      "id": "SS2-QUA-012",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If alpha and beta are roots of x^2 - 5x + 6 = 0, find the value of (1/alpha) + (1/beta).",
      "options": {
        "A": "5/6",
        "B": "6/5",
        "C": "-5/6",
        "D": "1/5"
      },
      "correctAnswer": "A",
      "explanation": "alpha + beta = 5, alpha * beta = 6. (1/alpha) + (1/beta) = (alpha + beta)/(alpha * beta) = 5/6."
    },
    {
      "id": "SS2-QUA-013",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Determine the nature of the roots of 2x^2 + 3x + 5 = 0.",
      "options": {
        "A": "Complex / Non-real",
        "B": "Real and equal",
        "C": "Real and distinct",
        "D": "Rational and unequal"
      },
      "correctAnswer": "A",
      "explanation": "b^2 - 4ac = 3^2 - 4(2)(5) = 9 - 40 = -31 < 0. Since the discriminant is negative, the roots are complex/non-real."
    },
    {
      "id": "SS2-QUA-014",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve the equation: (2x - 3)^2 = 25.",
      "options": {
        "A": "x = 4 or x = -1",
        "B": "x = 4 or x = 1",
        "C": "x = 14 or x = -11",
        "D": "x = 5 or x = -5"
      },
      "correctAnswer": "A",
      "explanation": "2x - 3 = ±5. 2x - 3 = 5 => 2x = 8 => x = 4. 2x - 3 = -5 => 2x = -2 => x = -1."
    },
    {
      "id": "SS2-QUA-015",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the quadratic equation whose roots are 1/2 and -2/3.",
      "options": {
        "A": "6x^2 + x - 2 = 0",
        "B": "6x^2 - x - 2 = 0",
        "C": "6x^2 - x + 2 = 0",
        "D": "6x^2 + x + 2 = 0"
      },
      "correctAnswer": "A",
      "explanation": "Sum of roots = 1/2 + (-2/3) = -1/6. Product = (1/2)(-2/3) = -1/3. Equation: x^2 - (-1/6)x + (-1/3) = 0 => 6x^2 + x - 2 = 0."
    },
    {
      "id": "SS2-QUA-016",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "The sum of the squares of two consecutive positive integers is 41. Find the two numbers.",
      "options": {
        "A": "4 and 5",
        "B": "3 and 4",
        "C": "5 and 6",
        "D": "6 and 7"
      },
      "correctAnswer": "A",
      "explanation": "n^2 + (n + 1)^2 = 41 => n^2 + n^2 + 2n + 1 = 41 => 2n^2 + 2n - 40 = 0 => n^2 + n - 20 = 0 => (n + 5)(n - 4) = 0. Since positive, n = 4 and n + 1 = 5."
    },
    {
      "id": "SS2-QUA-017",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve for x in: x + 6/x = 5.",
      "options": {
        "A": "x = 2 or x = 3",
        "B": "x = 1 or x = 6",
        "C": "x = -2 or x = -3",
        "D": "x = 3 or x = -2"
      },
      "correctAnswer": "A",
      "explanation": "Multiply by x: x^2 + 6 = 5x => x^2 - 5x + 6 = 0 => (x - 2)(x - 3) = 0 => x = 2 or x = 3."
    },
    {
      "id": "SS2-QUA-018",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If one root of x^2 + px + 12 = 0 is 3, find the other root and p.",
      "options": {
        "A": "other root = 4, p = -7",
        "B": "other root = 4, p = 7",
        "C": "other root = -4, p = 1",
        "D": "other root = -4, p = -7"
      },
      "correctAnswer": "A",
      "explanation": "Product of roots = 12. Since one root is 3, other root = 12 / 3 = 4. Sum of roots = 3 + 4 = 7 = -p => p = -7."
    },
    {
      "id": "SS2-QUA-019",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve the equation: 4x^2 - 12x + 9 = 0.",
      "options": {
        "A": "x = 3/2 (twice)",
        "B": "x = -3/2 (twice)",
        "C": "x = 3 or x = 2",
        "D": "x = 9/4"
      },
      "correctAnswer": "A",
      "explanation": "This is a perfect square trinomial: (2x - 3)^2 = 0 => 2x - 3 = 0 => x = 3/2."
    },
    {
      "id": "SS2-QUA-020",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If alpha and beta are roots of x^2 - 3x + 1 = 0, form the equation whose roots are 2*alpha and 2*beta.",
      "options": {
        "A": "x^2 - 6x + 4 = 0",
        "B": "x^2 - 6x + 2 = 0",
        "C": "x^2 - 3x + 4 = 0",
        "D": "x^2 + 6x - 4 = 0"
      },
      "correctAnswer": "A",
      "explanation": "New sum = 2(alpha + beta) = 2(3) = 6. New product = (2*alpha)(2*beta) = 4(alpha * beta) = 4(1) = 4. Equation: x^2 - 6x + 4 = 0."
    },
    {
      "id": "SS2-BAR-001",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "What is the characteristic of log_10 (0.00452)?",
      "options": {
        "A": "Bar 3 (-3)",
        "B": "Bar 2 (-2)",
        "C": "Bar 4 (-4)",
        "D": "3"
      },
      "correctAnswer": "A",
      "explanation": "In scientific notation, 0.00452 = 4.52 * 10^(-3). The first non-zero digit is in the 3rd decimal place (or 2 zeros between decimal point and first non-zero digit). Hence characteristic is Bar 3."
    },
    {
      "id": "SS2-BAR-002",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Evaluate: Bar 2.456 + Bar 1.328.",
      "options": {
        "A": "Bar 3.784",
        "B": "Bar 2.784",
        "C": "Bar 4.784",
        "D": "-3.784"
      },
      "correctAnswer": "A",
      "explanation": "Mantissa addition: 0.456 + 0.328 = 0.784. Characteristic addition: (-2) + (-1) = -3 = Bar 3. Combining gives Bar 3.784."
    },
    {
      "id": "SS2-BAR-003",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Evaluate: Bar 2.845 + Bar 3.426.",
      "options": {
        "A": "Bar 4.271",
        "B": "Bar 5.271",
        "C": "Bar 6.271",
        "D": "Bar 5.171"
      },
      "correctAnswer": "A",
      "explanation": "Mantissa: 0.845 + 0.426 = 1.271 (write 0.271 and carry +1 to characteristic). Characteristic: (-2) + (-3) + (+1) = -4 = Bar 4. Result: Bar 4.271."
    },
    {
      "id": "SS2-BAR-004",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Subtract: Bar 3.452 - Bar 1.638.",
      "options": {
        "A": "Bar 3.814",
        "B": "Bar 2.814",
        "C": "Bar 1.814",
        "D": "Bar 4.814"
      },
      "correctAnswer": "A",
      "explanation": "(-3 + 0.452) - (-1 + 0.638) = -3 + 0.452 + 1 - 0.638 = -2 - 0.186 = -2.186. Expressing as integer + positive mantissa: -3 + 0.814 = Bar 3.814."
    },
    {
      "id": "SS2-BAR-005",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Calculate: Bar 2.345 * 3.",
      "options": {
        "A": "Bar 5.035",
        "B": "Bar 6.035",
        "C": "Bar 4.035",
        "D": "Bar 7.035"
      },
      "correctAnswer": "A",
      "explanation": "Bar 2.345 = -2 + 0.345. Multiplying by 3: 3 * 0.345 = 1.035 = 1 + 0.035. 3 * (-2) = -6. Combining: -6 + 1 + 0.035 = -5 + 0.035 = Bar 5.035."
    },
    {
      "id": "SS2-BAR-006",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Evaluate: Bar 3.756 / 2.",
      "options": {
        "A": "Bar 2.878",
        "B": "Bar 1.878",
        "C": "Bar 3.378",
        "D": "Bar 1.378"
      },
      "correctAnswer": "A",
      "explanation": "To divide by 2, write the characteristic as a multiple of 2: Bar 3.756 = (-4 + 1.756) / 2 = (-4 / 2) + (1.756 / 2) = -2 + 0.878 = Bar 2.878."
    },
    {
      "id": "SS2-BAR-007",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Evaluate: Bar 5.612 / 3.",
      "options": {
        "A": "Bar 2.537",
        "B": "Bar 2.871",
        "C": "Bar 1.871",
        "D": "Bar 3.204"
      },
      "correctAnswer": "A",
      "explanation": "Make characteristic a multiple of 3: Bar 5 = -6 + 1. So Bar 5.612 = (-6 + 1.612) / 3 = -2 + (1.612 / 3) = -2 + 0.5373 = Bar 2.537 (to 3 d.p.)."
    },
    {
      "id": "SS2-BAR-008",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "What is the characteristic of log_10 (0.75)?",
      "options": {
        "A": "Bar 1 (-1)",
        "B": "0",
        "C": "Bar 2 (-2)",
        "D": "1"
      },
      "correctAnswer": "A",
      "explanation": "0.75 = 7.5 * 10^(-1). Since the first non-zero digit is immediately after the decimal point (0 zeros between), characteristic is Bar 1."
    },
    {
      "id": "SS2-BAR-009",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Convert the bar notation Bar 3.45 to an ordinary negative decimal number.",
      "options": {
        "A": "-2.55",
        "B": "-3.45",
        "C": "-3.55",
        "D": "-2.45"
      },
      "correctAnswer": "A",
      "explanation": "Bar 3.45 means -3 + 0.45 = -2.55."
    },
    {
      "id": "SS2-BAR-010",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Convert the ordinary negative number -1.72 into bar notation.",
      "options": {
        "A": "Bar 2.28",
        "B": "Bar 1.28",
        "C": "Bar 1.72",
        "D": "Bar 2.72"
      },
      "correctAnswer": "A",
      "explanation": "Write as integer + positive mantissa: -1.72 = -2 + (2 - 1.72) = -2 + 0.28 = Bar 2.28."
    },
    {
      "id": "SS2-BAR-011",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "If log_10 (x) = Bar 2.6021, find the value of x (given anti-log of 0.6021 is 4.00).",
      "options": {
        "A": "0.0400",
        "B": "0.00400",
        "C": "0.400",
        "D": "4.00"
      },
      "correctAnswer": "A",
      "explanation": "Characteristic Bar 2 means x = 4.00 * 10^(-2) = 0.0400."
    },
    {
      "id": "SS2-BAR-012",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Evaluate: Bar 1.624 * 4.",
      "options": {
        "A": "Bar 2.496",
        "B": "Bar 3.496",
        "C": "Bar 4.496",
        "D": "Bar 1.496"
      },
      "correctAnswer": "A",
      "explanation": "4 * 0.624 = 2.496 (mantissa is 0.496, carry +2). 4 * (-1) = -4. Combining: -4 + 2 + 0.496 = -2 + 0.496 = Bar 2.496."
    },
    {
      "id": "SS2-BAR-013",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "What is the characteristic of log_10 (0.000078)?",
      "options": {
        "A": "Bar 5",
        "B": "Bar 4",
        "C": "Bar 6",
        "D": "Bar 3"
      },
      "correctAnswer": "A",
      "explanation": "0.000078 = 7.8 * 10^(-5). There are 4 zeros between the decimal point and the first non-zero digit (7), so characteristic is -(4 + 1) = Bar 5."
    },
    {
      "id": "SS2-BAR-014",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Evaluate: Bar 4.821 + Bar 2.543.",
      "options": {
        "A": "Bar 5.364",
        "B": "Bar 6.364",
        "C": "Bar 7.364",
        "D": "Bar 6.264"
      },
      "correctAnswer": "A",
      "explanation": "Mantissa: 0.821 + 0.543 = 1.364 (write 0.364, carry +1). Characteristic: -4 + (-2) + (+1) = -5 = Bar 5. Result: Bar 5.364."
    },
    {
      "id": "SS2-BAR-015",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Find the square root of 0.0064 using logarithms: if log(0.0064) = Bar 3.8062, what is (1/2) * log(0.0064)?",
      "options": {
        "A": "Bar 2.9031",
        "B": "Bar 1.9031",
        "C": "Bar 1.4031",
        "D": "Bar 3.4031"
      },
      "correctAnswer": "A",
      "explanation": "Bar 3.8062 / 2 = (-4 + 1.8062) / 2 = -2 + 0.9031 = Bar 2.9031."
    },
    {
      "id": "SS2-BAR-016",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Subtract: Bar 2.378 - Bar 4.825.",
      "options": {
        "A": "1.553",
        "B": "Bar 2.553",
        "C": "2.553",
        "D": "Bar 1.553"
      },
      "correctAnswer": "A",
      "explanation": "(-2 + 0.378) - (-4 + 0.825) = -2 + 0.378 + 4 - 0.825 = 2 - 0.447 = 1.553."
    },
    {
      "id": "SS2-BAR-017",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Evaluate: Bar 7.425 / 5.",
      "options": {
        "A": "Bar 2.685",
        "B": "Bar 1.485",
        "C": "Bar 2.485",
        "D": "Bar 1.685"
      },
      "correctAnswer": "A",
      "explanation": "Make characteristic a multiple of 5: Bar 7 = -10 + 3. So (-10 + 3.425) / 5 = -2 + 0.685 = Bar 2.685."
    },
    {
      "id": "SS2-BAR-018",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "If log_10 (k) = Bar 1.5200, then log_10 (k^3) equals:",
      "options": {
        "A": "Bar 2.5600",
        "B": "Bar 3.5600",
        "C": "Bar 1.5600",
        "D": "-3.5600"
      },
      "correctAnswer": "A",
      "explanation": "3 * Bar 1.5200 = 3 * (-1 + 0.5200) = 3 * (-1) + 3 * 0.5200 = -3 + 1.5600 = -2 + 0.5600 = Bar 2.5600."
    },
    {
      "id": "SS2-BAR-019",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Given that log_10 (2) = 0.3010, find log_10 (0.02).",
      "options": {
        "A": "Bar 2.3010",
        "B": "Bar 1.3010",
        "C": "-2.3010",
        "D": "Bar 3.3010"
      },
      "correctAnswer": "A",
      "explanation": "0.02 = 2 * 10^(-2). log_10(0.02) = log_10(2) + log_10(10^(-2)) = 0.3010 + (-2) = Bar 2.3010."
    },
    {
      "id": "SS2-BAR-020",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less Than 1",
      "question": "Given that log_10 (3.54) = 0.5490, find log_10 (0.000354).",
      "options": {
        "A": "Bar 4.5490",
        "B": "Bar 3.5490",
        "C": "Bar 5.5490",
        "D": "-4.5490"
      },
      "correctAnswer": "A",
      "explanation": "0.000354 = 3.54 * 10^(-4). Therefore log_10(0.000354) = Bar 4.5490."
    }
  ],
  "SSS 3": [
    {
      "id": "SS3-IL-001",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve the simultaneous equations: 2^x * 3^y = 72 and 2^y * 3^x = 108.",
      "options": {
        "A": "x = 2, y = 3",
        "B": "x = 3, y = 2",
        "C": "x = 1, y = 2",
        "D": "x = 3, y = 1"
      },
      "correctAnswer": "B",
      "explanation": "Multiply the two equations: 2^(x+y) * 3^(x+y) = 6^(x+y) = 72 * 108 = 7776 = 6^5 => x + y = 5. Divide the second by the first: (3/2)^(x - y) = 108/72 = 3/2 = (3/2)^1 => x - y = 1. Adding gives 2x = 6 => x = 3, y = 2."
    },
    {
      "id": "SS3-IL-002",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If log_2 (x - 1) + log_2 (x + 1) = 3, find the positive value of x.",
      "options": {
        "A": "3",
        "B": "4",
        "C": "9",
        "D": "5"
      },
      "correctAnswer": "A",
      "explanation": "log_2[(x - 1)(x + 1)] = 3 => x^2 - 1 = 2^3 = 8 => x^2 = 9 => x = 3 (since x > 1)."
    },
    {
      "id": "SS3-IL-003",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve for x: 3^(2x + 1) - 28(3^x) + 9 = 0.",
      "options": {
        "A": "x = 2 or x = -1",
        "B": "x = 1 or x = -2",
        "C": "x = 2 or x = 1",
        "D": "x = -1 or x = 0"
      },
      "correctAnswer": "A",
      "explanation": "3 * (3^x)^2 - 28(3^x) + 9 = 0. Let y = 3^x: 3y^2 - 28y + 9 = 0 => (3y - 1)(y - 9) = 0. y = 1/3 => 3^x = 3^(-1) => x = -1; y = 9 => 3^x = 3^2 => x = 2."
    },
    {
      "id": "SS3-IL-004",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If log_10 (2) = a and log_10 (3) = b, express log_10 (0.75) in terms of a and b.",
      "options": {
        "A": "b - 2a",
        "B": "2b - a",
        "C": "b - a",
        "D": "a + b - 1"
      },
      "correctAnswer": "A",
      "explanation": "0.75 = 3/4 = 3 / (2^2). log_10(3/4) = log_10(3) - log_10(2^2) = log_10(3) - 2 log_10(2) = b - 2a."
    },
    {
      "id": "SS3-IL-005",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve the equation: log_x (81) - log_x (9) = 2.",
      "options": {
        "A": "3",
        "B": "9",
        "C": "2",
        "D": "sqrt(3)"
      },
      "correctAnswer": "A",
      "explanation": "log_x(81/9) = 2 => log_x(9) = 2 => x^2 = 9 => x = 3 (base must be positive)."
    },
    {
      "id": "SS3-IL-006",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Evaluate: (1/8)^(-2/3) + (1/27)^(-1/3).",
      "options": {
        "A": "7",
        "B": "5",
        "C": "13",
        "D": "12"
      },
      "correctAnswer": "A",
      "explanation": "(1/8)^(-2/3) = 8^(2/3) = (2^3)^(2/3) = 2^2 = 4. (1/27)^(-1/3) = 27^(1/3) = 3. 4 + 3 = 7."
    },
    {
      "id": "SS3-IL-007",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If 2^(x - y) = 4 and 3^(x + y) = 81, find the value of x * y.",
      "options": {
        "A": "3",
        "B": "4",
        "C": "2",
        "D": "6"
      },
      "correctAnswer": "A",
      "explanation": "2^(x - y) = 4 = 2^2 => x - y = 2. 3^(x + y) = 81 = 3^4 => x + y = 4. Adding the two equations: 2x = 6 => x = 3. Substituting into x + y = 4 gives y = 1. Therefore, x * y = 3 * 1 = 3."
    },
    {
      "id": "SS3-IL-008",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If log_a (b) = c, which of the following is true?",
      "options": {
        "A": "a^c = b",
        "B": "c^a = b",
        "C": "b^c = a",
        "D": "a * b = c"
      },
      "correctAnswer": "A",
      "explanation": "By definition of logarithm, log_a(b) = c is equivalent to the exponential form a^c = b."
    },
    {
      "id": "SS3-IL-009",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Simplify: log_2 (sqrt(32)).",
      "options": {
        "A": "5/2",
        "B": "5",
        "C": "2",
        "D": "3/2"
      },
      "correctAnswer": "A",
      "explanation": "sqrt(32) = 32^(1/2) = (2^5)^(1/2) = 2^(5/2). log_2(2^(5/2)) = 5/2."
    },
    {
      "id": "SS3-IL-010",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve: log_3 (x) + 2 log_9 (x) = 4.",
      "options": {
        "A": "9",
        "B": "27",
        "C": "3",
        "D": "81"
      },
      "correctAnswer": "A",
      "explanation": "log_9(x) = log_3(x) / log_3(9) = log_3(x) / 2. So 2 log_9(x) = log_3(x). The equation is log_3(x) + log_3(x) = 4 => 2 log_3(x) = 4 => log_3(x) = 2 => x = 3^2 = 9."
    },
    {
      "id": "SS3-IL-011",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Simplify: (4^(3/2) * 16^(-1/4)) / 2^(-1).",
      "options": {
        "A": "8",
        "B": "4",
        "C": "16",
        "D": "2"
      },
      "correctAnswer": "A",
      "explanation": "4^(3/2) = 8. 16^(-1/4) = 1/2. Numerator = 8 * (1/2) = 4. Denominator = 2^(-1) = 1/2. Result = 4 / (1/2) = 8."
    },
    {
      "id": "SS3-IL-012",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If log_10 (5) = 0.6990, find log_10 (20).",
      "options": {
        "A": "1.3010",
        "B": "1.6990",
        "C": "0.3010",
        "D": "1.4990"
      },
      "correctAnswer": "A",
      "explanation": "20 = 100 / 5. log_10(20) = log_10(100) - log_10(5) = 2 - 0.6990 = 1.3010."
    },
    {
      "id": "SS3-SET-001",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If A and B are subsets of a universal set ξ, which expression is identically equal to (A \\ B) ∪ (B \\ A)?",
      "options": {
        "A": "(A ∪ B) \\ (A ∩ B)",
        "B": "A ∩ B",
        "C": "A' ∪ B'",
        "D": "(A ∩ B)'"
      },
      "correctAnswer": "A",
      "explanation": "(A \\ B) ∪ (B \\ A) is the symmetric difference A Δ B, which consists of elements in either A or B but not both: (A ∪ B) \\ (A ∩ B)."
    },
    {
      "id": "SS3-SET-002",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "In a senior class of 60 students, 36 take Mathematics, 32 take Physics, and 28 take Chemistry. 18 take Math and Physics, 14 take Math and Chem, 12 take Physics and Chem, and 6 take all three. How many students take NONE of the three subjects?",
      "options": {
        "A": "2",
        "B": "4",
        "C": "6",
        "D": "0"
      },
      "correctAnswer": "A",
      "explanation": "n(M ∪ P ∪ C) = 36 + 32 + 28 - (18 + 14 + 12) + 6 = 96 - 44 + 6 = 58. Students taking none = Total - 58 = 60 - 58 = 2."
    },
    {
      "id": "SS3-SET-003",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If n(P(S)) = 128, where P(S) is the power set of S, find the number of elements in S.",
      "options": {
        "A": "7",
        "B": "6",
        "C": "8",
        "D": "5"
      },
      "correctAnswer": "A",
      "explanation": "n(P(S)) = 2^n. If 2^n = 128 = 2^7, then n = 7."
    },
    {
      "id": "SS3-SET-004",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "By De Morgan's laws, (P' ∪ Q)' is equivalent to:",
      "options": {
        "A": "P ∩ Q'",
        "B": "P' ∩ Q",
        "C": "P ∪ Q'",
        "D": "P ∩ Q"
      },
      "correctAnswer": "A",
      "explanation": "(P' ∪ Q)' = (P')' ∩ Q' = P ∩ Q'."
    },
    {
      "id": "SS3-SET-005",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If A = {x : x^2 - 5x + 6 = 0} and B = {x : x^2 - 7x + 12 = 0}, find A ∩ B.",
      "options": {
        "A": "{3}",
        "B": "{2}",
        "C": "{4}",
        "D": "{2, 3, 4}"
      },
      "correctAnswer": "A",
      "explanation": "A: (x - 2)(x - 3) = 0 => A = {2, 3}. B: (x - 3)(x - 4) = 0 => B = {3, 4}. The common element is 3: A ∩ B = {3}."
    },
    {
      "id": "SS3-SET-006",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If A ⊂ B and B ⊂ C, which statement must be true?",
      "options": {
        "A": "A ⊂ C",
        "B": "C ⊂ A",
        "C": "A ∩ C = ∅",
        "D": "A ∪ C = B"
      },
      "correctAnswer": "A",
      "explanation": "The subset relation is transitive: if A is a subset of B and B is a subset of C, then every element in A is in C, so A ⊂ C."
    },
    {
      "id": "SS3-SET-007",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If n(A) = 12 and n(B) = 8, what is the minimum value of n(A ∩ B)?",
      "options": {
        "A": "0",
        "B": "4",
        "C": "8",
        "D": "12"
      },
      "correctAnswer": "A",
      "explanation": "If sets A and B are completely disjoint, their intersection is empty, so minimum n(A ∩ B) = 0."
    },
    {
      "id": "SS3-SET-008",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If n(A) = 15, n(B) = 25, and n(ξ) = 30, what is the MINIMUM possible value of n(A ∩ B)?",
      "options": {
        "A": "10",
        "B": "5",
        "C": "0",
        "D": "15"
      },
      "correctAnswer": "A",
      "explanation": "n(A ∪ B) ≤ n(ξ) = 30. Since n(A ∪ B) = n(A) + n(B) - n(A ∩ B), 30 ≥ 15 + 25 - n(A ∩ B) => n(A ∩ B) ≥ 40 - 30 = 10."
    },
    {
      "id": "SS3-SET-009",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "Which of the following is an empty set?",
      "options": {
        "A": "{x : x is a real number and x^2 + 1 = 0}",
        "B": "{x : x is an even prime number}",
        "C": "{0}",
        "D": "{x : x is an integer and x > 0}"
      },
      "correctAnswer": "A",
      "explanation": "For real numbers, x^2 ≥ 0, so x^2 + 1 ≥ 1 > 0. There are no real numbers satisfying x^2 + 1 = 0, so the set is empty."
    },
    {
      "id": "SS3-SET-010",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "The number of non-empty proper subsets of a set with 4 elements is:",
      "options": {
        "A": "14",
        "B": "15",
        "C": "16",
        "D": "12"
      },
      "correctAnswer": "A",
      "explanation": "Total subsets = 2^4 = 16. Proper subsets exclude the set itself (16 - 1 = 15). Non-empty proper subsets also exclude the empty set: 15 - 1 = 14."
    },
    {
      "id": "SS3-SET-011",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If A = {1, 2} and B = {a, b, c}, find n(A x B).",
      "options": {
        "A": "6",
        "B": "5",
        "C": "8",
        "D": "9"
      },
      "correctAnswer": "A",
      "explanation": "n(A x B) = n(A) * n(B) = 2 * 3 = 6."
    },
    {
      "id": "SS3-SET-012",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If A ∩ B = A ∪ B, what does this imply?",
      "options": {
        "A": "A = B",
        "B": "A = ∅",
        "C": "B = ∅",
        "D": "A and B are disjoint"
      },
      "correctAnswer": "A",
      "explanation": "Since A ∩ B ⊆ A ⊆ A ∪ B, equality across intersection and union forces all sets in between to be equal, meaning A = B."
    },
    {
      "id": "SS3-TRG-001",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In a triangle ABC, a = 7 cm, b = 5 cm, and c = 8 cm. Find cos B.",
      "options": {
        "A": "11/14",
        "B": "13/14",
        "C": "1/2",
        "D": "5/7"
      },
      "correctAnswer": "A",
      "explanation": "By the Cosine Rule: cos B = (a^2 + c^2 - b^2) / (2ac) = (49 + 64 - 25) / (2 * 7 * 8) = 88 / 112 = 11/14."
    },
    {
      "id": "SS3-TRG-002",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In triangle PQR, p = 10 cm, angle P = 30°, and angle Q = 45°. Find side q.",
      "options": {
        "A": "10√2 cm",
        "B": "5√2 cm",
        "C": "10√3 cm",
        "D": "20 cm"
      },
      "correctAnswer": "A",
      "explanation": "By Sine Rule: q / sin Q = p / sin P => q = (p * sin 45°) / sin 30° = (10 * (√2/2)) / (1/2) = 10√2 cm."
    },
    {
      "id": "SS3-TRG-003",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Simplify the trigonometric expression: (1 - cos^2 θ) / sin θ.",
      "options": {
        "A": "sin θ",
        "B": "cos θ",
        "C": "tan θ",
        "D": "1"
      },
      "correctAnswer": "A",
      "explanation": "Using the fundamental Pythagorean identity: 1 - cos^2 θ = sin^2 θ. Thus sin^2 θ / sin θ = sin θ."
    },
    {
      "id": "SS3-TRG-004",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "An observer at the top of a cliff 60m high spots a boat at an angle of depression of 30°. How far is the boat from the foot of the cliff?",
      "options": {
        "A": "60√3 m",
        "B": "30√3 m",
        "C": "120 m",
        "D": "20√3 m"
      },
      "correctAnswer": "A",
      "explanation": "tan 30° = Opposite / Adjacent = 60 / d => 1/√3 = 60 / d => d = 60√3 m."
    },
    {
      "id": "SS3-TRG-005",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "If sin θ = 3/5 and θ is acute, find the value of tan θ + cos θ.",
      "options": {
        "A": "31/20",
        "B": "7/5",
        "C": "23/20",
        "D": "19/20"
      },
      "correctAnswer": "A",
      "explanation": "In a 3-4-5 right triangle: cos θ = 4/5 and tan θ = 3/4. tan θ + cos θ = 3/4 + 4/5 = (15 + 16)/20 = 31/20."
    },
    {
      "id": "SS3-TRG-006",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "The bearing of point B from point A is 060°. What is the back bearing of A from B?",
      "options": {
        "A": "240°",
        "B": "120°",
        "C": "150°",
        "D": "300°"
      },
      "correctAnswer": "A",
      "explanation": "Back bearing = forward bearing + 180° (if < 180°). 60° + 180° = 240°."
    },
    {
      "id": "SS3-TRG-007",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Find the area of triangle XYZ where x = 8 cm, y = 10 cm, and the included angle Z = 30°.",
      "options": {
        "A": "20 cm^2",
        "B": "40 cm^2",
        "C": "20√3 cm^2",
        "D": "10 cm^2"
      },
      "correctAnswer": "A",
      "explanation": "Area = (1/2) * x * y * sin Z = (1/2) * 8 * 10 * sin 30° = 40 * 0.5 = 20 cm^2."
    },
    {
      "id": "SS3-TRG-008",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Evaluate: cos 120°.",
      "options": {
        "A": "-1/2",
        "B": "1/2",
        "C": "-√3/2",
        "D": "√3/2"
      },
      "correctAnswer": "A",
      "explanation": "120° is in the second quadrant where cosine is negative: cos 120° = -cos(180° - 120°) = -cos 60° = -1/2."
    },
    {
      "id": "SS3-TRG-009",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Simplify: (sin θ / cos θ) + (cos θ / sin θ).",
      "options": {
        "A": "1 / (sin θ cos θ)",
        "B": "1",
        "C": "tan θ",
        "D": "sin θ + cos θ"
      },
      "correctAnswer": "A",
      "explanation": "(sin^2 θ + cos^2 θ) / (sin θ cos θ) = 1 / (sin θ cos θ)."
    },
    {
      "id": "SS3-TRG-010",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "If tan θ = 1 and 180° < θ < 270°, find θ.",
      "options": {
        "A": "225°",
        "B": "135°",
        "C": "240°",
        "D": "210°"
      },
      "correctAnswer": "A",
      "explanation": "In quadrant 3, tan is positive. θ = 180° + 45° = 225°."
    },
    {
      "id": "SS3-TRG-011",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Solve for θ in the range 0° ≤ θ ≤ 90° if 2 sin θ - 1 = 0.",
      "options": {
        "A": "30°",
        "B": "60°",
        "C": "45°",
        "D": "90°"
      },
      "correctAnswer": "A",
      "explanation": "2 sin θ = 1 => sin θ = 1/2 => θ = 30°."
    },
    {
      "id": "SS3-TRG-012",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Find the maximum value of the function y = 3 sin 2x + 4.",
      "options": {
        "A": "7",
        "B": "4",
        "C": "10",
        "D": "1"
      },
      "correctAnswer": "A",
      "explanation": "The maximum value of sin 2x is 1. Thus y_max = 3(1) + 4 = 7."
    },
    {
      "id": "SS3-TRG-013",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "What is the period of the function y = tan x?",
      "options": {
        "A": "180° (π radians)",
        "B": "360° (2π radians)",
        "C": "90° (π/2 radians)",
        "D": "720° (4π radians)"
      },
      "correctAnswer": "A",
      "explanation": "The tangent function repeats every 180° (π radians), whereas sine and cosine have a period of 360° (2π radians)."
    },
    {
      "id": "SS3-TRG-014",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "If sin A = 4/5 and cos B = 12/13, where A and B are acute angles, calculate sin(A + B) using sin(A+B) = sin A cos B + cos A sin B.",
      "options": {
        "A": "63/65",
        "B": "33/65",
        "C": "56/65",
        "D": "16/65"
      },
      "correctAnswer": "A",
      "explanation": "cos A = 3/5, sin B = 5/13. sin(A + B) = (4/5)(12/13) + (3/5)(5/13) = 48/65 + 15/65 = 63/65."
    },
    {
      "id": "SS3-TRG-015",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "A ladder 10m long leans against a vertical wall, making an angle of 60° with the horizontal ground. How high up the wall does the ladder reach?",
      "options": {
        "A": "5√3 m",
        "B": "5 m",
        "C": "10√3 m",
        "D": "8 m"
      },
      "correctAnswer": "A",
      "explanation": "Height = Hypotenuse * sin 60° = 10 * (√3 / 2) = 5√3 m."
    },
    {
      "id": "SS3-QP-001",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "When the polynomial P(x) = 2x^3 - 3x^2 + kx - 4 is divided by (x - 2), the remainder is 6. Find k.",
      "options": {
        "A": "3",
        "B": "5",
        "C": "-3",
        "D": "7"
      },
      "correctAnswer": "A",
      "explanation": "By the Remainder Theorem, P(2) = 6. P(2) = 2(8) - 3(4) + 2k - 4 = 16 - 12 + 2k - 4 = 2k. 2k = 6 => k = 3."
    },
    {
      "id": "SS3-QP-002",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the condition for (x + 1) to be a factor of P(x) = x^3 + ax^2 + bx + 3.",
      "options": {
        "A": "a - b = -2",
        "B": "a + b = 2",
        "C": "a - b = 2",
        "D": "a + b = -2"
      },
      "correctAnswer": "A",
      "explanation": "By the Factor Theorem, P(-1) = 0 => (-1)^3 + a(-1)^2 + b(-1) + 3 = 0 => -1 + a - b + 3 = 0 => a - b + 2 = 0 => a - b = -2."
    },
    {
      "id": "SS3-QP-003",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If alpha and beta are the roots of 2x^2 - 4x + 1 = 0, find the value of alpha^3 + beta^3.",
      "options": {
        "A": "5",
        "B": "7",
        "C": "4",
        "D": "6"
      },
      "correctAnswer": "A",
      "explanation": "alpha + beta = -(-4)/2 = 2. alpha * beta = 1/2. alpha^3 + beta^3 = (alpha + beta)^3 - 3(alpha * beta)(alpha + beta) = 2^3 - 3(1/2)(2) = 8 - 3 = 5."
    },
    {
      "id": "SS3-QP-004",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the roots of the cubic equation: x^3 - 6x^2 + 11x - 6 = 0.",
      "options": {
        "A": "1, 2, 3",
        "B": "-1, -2, -3",
        "C": "1, -2, 3",
        "D": "2, 3, 4"
      },
      "correctAnswer": "A",
      "explanation": "Sum of coefficients 1 - 6 + 11 - 6 = 0, so x = 1 is a root. Dividing by (x - 1) gives x^2 - 5x + 6 = (x - 2)(x - 3). Thus roots are 1, 2, 3."
    },
    {
      "id": "SS3-QP-005",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "For what value of p does px^2 + 4x + 1 = 0 have equal roots?",
      "options": {
        "A": "4",
        "B": "2",
        "C": "16",
        "D": "1"
      },
      "correctAnswer": "A",
      "explanation": "Discriminant b^2 - 4ac = 0 => 4^2 - 4(p)(1) = 0 => 16 - 4p = 0 => p = 4."
    },
    {
      "id": "SS3-QP-006",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If (x - 2) is a factor of x^3 + kx^2 - 4x + 4, find k.",
      "options": {
        "A": "-1",
        "B": "1",
        "C": "2",
        "D": "-2"
      },
      "correctAnswer": "A",
      "explanation": "P(2) = 0 => 2^3 + k(2^2) - 4(2) + 4 = 0 => 8 + 4k - 8 + 4 = 0 => 4k + 4 = 0 => k = -1."
    },
    {
      "id": "SS3-QP-007",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Form the quadratic equation whose roots are 3 + √2 and 3 - √2.",
      "options": {
        "A": "x^2 - 6x + 7 = 0",
        "B": "x^2 + 6x + 7 = 0",
        "C": "x^2 - 6x - 7 = 0",
        "D": "x^2 - 7x + 6 = 0"
      },
      "correctAnswer": "A",
      "explanation": "Sum = (3 + √2) + (3 - √2) = 6. Product = (3 + √2)(3 - √2) = 3^2 - 2 = 7. Equation: x^2 - 6x + 7 = 0."
    },
    {
      "id": "SS3-QP-008",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the remainder when 3x^4 - 2x^2 + 5x - 1 is divided by (x + 1).",
      "options": {
        "A": "-5",
        "B": "5",
        "C": "1",
        "D": "-1"
      },
      "correctAnswer": "A",
      "explanation": "P(-1) = 3(-1)^4 - 2(-1)^2 + 5(-1) - 1 = 3(1) - 2(1) - 5 - 1 = 3 - 2 - 5 - 1 = -5."
    },
    {
      "id": "SS3-QP-009",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If alpha and beta are roots of x^2 - 5x + 3 = 0, find the value of (alpha - beta)^2.",
      "options": {
        "A": "13",
        "B": "19",
        "C": "25",
        "D": "16"
      },
      "correctAnswer": "A",
      "explanation": "(alpha - beta)^2 = (alpha + beta)^2 - 4(alpha * beta) = 5^2 - 4(3) = 25 - 12 = 13."
    },
    {
      "id": "SS3-QP-010",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the quotient when x^3 + 2x^2 - x - 2 is divided by (x - 1).",
      "options": {
        "A": "x^2 + 3x + 2",
        "B": "x^2 - 3x + 2",
        "C": "x^2 + x - 2",
        "D": "x^2 - x - 2"
      },
      "correctAnswer": "A",
      "explanation": "By polynomial division: (x^3 + 2x^2 - x - 2) / (x - 1) = x^2 + 3x + 2 = (x + 1)(x + 2)."
    },
    {
      "id": "SS3-QP-011",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If the roots of x^2 + mx + 16 = 0 differ by 6, find the positive value of m.",
      "options": {
        "A": "10",
        "B": "8",
        "C": "12",
        "D": "14"
      },
      "correctAnswer": "A",
      "explanation": "(alpha - beta)^2 = (alpha + beta)^2 - 4(alpha * beta) => 6^2 = m^2 - 4(16) => 36 = m^2 - 64 => m^2 = 100 => m = 10."
    },
    {
      "id": "SS3-QP-012",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "What is the degree of the polynomial P(x) = (3x^2 - 2)(2x^3 + 5x - 1)?",
      "options": {
        "A": "5",
        "B": "6",
        "C": "4",
        "D": "3"
      },
      "correctAnswer": "A",
      "explanation": "The degree of the product of two polynomials is the sum of their degrees: 2 + 3 = 5."
    },
    {
      "id": "SS3-QP-013",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If (x + 2) and (x - 1) are both factors of x^3 + ax^2 + bx - 2, find a and b.",
      "options": {
        "A": "a = 2, b = -1",
        "B": "a = 0, b = -3",
        "C": "a = 1, b = -2",
        "D": "a = -2, b = 1"
      },
      "correctAnswer": "A",
      "explanation": "P(1) = 1 + a + b - 2 = 0 => a + b = 1. P(-2) = -8 + 4a - 2b - 2 = 0 => 4a - 2b = 10 => 2a - b = 5. Adding the two equations: 3a = 6 => a = 2, then b = -1."
    },
    {
      "id": "SS3-PRB-001",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Two fair dice are thrown simultaneously. What is the probability of obtaining a sum of 8?",
      "options": {
        "A": "5/36",
        "B": "1/6",
        "C": "7/36",
        "D": "1/9"
      },
      "correctAnswer": "A",
      "explanation": "Sample space has 36 outcomes. Pairs giving sum of 8: (2,6), (3,5), (4,4), (5,3), (6,2) - 5 outcomes. Probability = 5/36."
    },
    {
      "id": "SS3-PRB-002",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A bag contains 5 red, 4 blue, and 3 green marbles. Two marbles are drawn at random without replacement. Find the probability that both are red.",
      "options": {
        "A": "5/33",
        "B": "25/144",
        "C": "5/12",
        "D": "1/6"
      },
      "correctAnswer": "A",
      "explanation": "Total = 12. P(first red) = 5/12. P(second red) = 4/11. Combined P = (5/12) * (4/11) = 20/132 = 5/33."
    },
    {
      "id": "SS3-PRB-003",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If A and B are independent events with P(A) = 0.4 and P(B) = 0.5, find P(A ∪ B).",
      "options": {
        "A": "0.7",
        "B": "0.9",
        "C": "0.2",
        "D": "0.6"
      },
      "correctAnswer": "A",
      "explanation": "For independent events, P(A ∩ B) = P(A) * P(B) = 0.4 * 0.5 = 0.2. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - 0.2 = 0.7."
    },
    {
      "id": "SS3-PRB-004",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Three coins are tossed simultaneously. What is the probability of getting at least two heads?",
      "options": {
        "A": "1/2",
        "B": "3/8",
        "C": "5/8",
        "D": "1/4"
      },
      "correctAnswer": "A",
      "explanation": "Total outcomes = 2^3 = 8. Outcomes with ≥ 2 heads: HHH, HHT, HTH, THH (4 outcomes). Probability = 4/8 = 1/2."
    },
    {
      "id": "SS3-PRB-005",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "From a standard deck of 52 cards, one card is drawn at random. What is the probability that it is either a King or a Heart?",
      "options": {
        "A": "4/13",
        "B": "17/52",
        "C": "1/4",
        "D": "16/52"
      },
      "correctAnswer": "A",
      "explanation": "Kings = 4, Hearts = 13, King of Hearts = 1. P(King ∪ Heart) = (4 + 13 - 1) / 52 = 16/52 = 4/13."
    },
    {
      "id": "SS3-PRB-006",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A student targets solving a problem with probability 2/3 and another with probability 3/4. If they work independently, what is the probability that the problem is solved?",
      "options": {
        "A": "11/12",
        "B": "1/2",
        "C": "5/12",
        "D": "1/12"
      },
      "correctAnswer": "A",
      "explanation": "P(neither solves) = (1 - 2/3) * (1 - 3/4) = (1/3) * (1/4) = 1/12. P(at least one solves) = 1 - 1/12 = 11/12."
    },
    {
      "id": "SS3-PRB-007",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A card is drawn from a well-shuffled pack of 52 cards. What is the probability that it is a Queen or a Jack?",
      "options": {
        "A": "2/13",
        "B": "1/13",
        "C": "4/13",
        "D": "8/52"
      },
      "correctAnswer": "A",
      "explanation": "Queens = 4, Jacks = 4. They are mutually exclusive. P = (4 + 4)/52 = 8/52 = 2/13."
    },
    {
      "id": "SS3-PRB-008",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If P(E) = 0.35, what is the probability of the complement event, P(E')?",
      "options": {
        "A": "0.65",
        "B": "0.75",
        "C": "0.35",
        "D": "1.35"
      },
      "correctAnswer": "A",
      "explanation": "P(E') = 1 - P(E) = 1 - 0.35 = 0.65."
    },
    {
      "id": "SS3-PRB-009",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A letter is chosen at random from the word 'PROBABILITY'. What is the probability that it is a vowel?",
      "options": {
        "A": "4/11",
        "B": "3/11",
        "C": "5/11",
        "D": "2/11"
      },
      "correctAnswer": "A",
      "explanation": "Total letters = 11. Vowels are O, A, I, I (4 vowels). Probability = 4/11."
    },
    {
      "id": "SS3-PRB-010",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "In how many ways can 5 students be seated in a row?",
      "options": {
        "A": "120",
        "B": "60",
        "C": "24",
        "D": "720"
      },
      "correctAnswer": "A",
      "explanation": "5! = 5 * 4 * 3 * 2 * 1 = 120."
    },
    {
      "id": "SS3-PRB-011",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A committee of 3 is to be chosen from 5 men and 4 women. In how many ways can this be done if it must contain 2 men and 1 woman?",
      "options": {
        "A": "40",
        "B": "20",
        "C": "84",
        "D": "30"
      },
      "correctAnswer": "A",
      "explanation": "5C2 * 4C1 = 10 * 4 = 40 ways."
    },
    {
      "id": "SS3-PRB-012",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Two numbers are selected at random from {1, 2, 3, 4, 5, 6} without replacement. What is the probability that their product is even?",
      "options": {
        "A": "4/5",
        "B": "3/5",
        "C": "1/5",
        "D": "2/5"
      },
      "correctAnswer": "A",
      "explanation": "Total pairs = 6C2 = 15. Product is odd only if both numbers are odd ({1, 3, 5}: 3C2 = 3 pairs). P(even product) = 1 - (3/15) = 12/15 = 4/5."
    },
    {
      "id": "SS3-PRB-013",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If two events A and B are mutually exclusive, what is P(A ∩ B)?",
      "options": {
        "A": "0",
        "B": "1",
        "C": "P(A) * P(B)",
        "D": "P(A) + P(B)"
      },
      "correctAnswer": "A",
      "explanation": "Mutually exclusive events cannot occur simultaneously, so their intersection has probability 0."
    },
    {
      "id": "SS3-PRB-014",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "What is the probability of getting a total of 7 when two dice are thrown?",
      "options": {
        "A": "1/6",
        "B": "7/36",
        "C": "5/36",
        "D": "1/12"
      },
      "correctAnswer": "A",
      "explanation": "Outcomes for sum of 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. P = 6/36 = 1/6."
    },
    {
      "id": "SS3-PRB-015",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A bag has 6 white and 4 black balls. A ball is drawn, its color noted, and NOT replaced. A second ball is drawn. Find the probability that both are black.",
      "options": {
        "A": "2/15",
        "B": "4/25",
        "C": "1/5",
        "D": "1/6"
      },
      "correctAnswer": "A",
      "explanation": "P = (4/10) * (3/9) = (2/5) * (1/3) = 2/15."
    },
    {
      "id": "SS3-PRB-016",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If a fair coin is tossed 4 times, what is the probability of getting exactly 2 heads?",
      "options": {
        "A": "3/8",
        "B": "1/2",
        "C": "1/4",
        "D": "5/16"
      },
      "correctAnswer": "A",
      "explanation": "Binomial probability: 4C2 * (1/2)^2 * (1/2)^2 = 6 * (1/16) = 6/16 = 3/8."
    },
    {
      "id": "SS3-MAT-001",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the determinant of the 2x2 matrix: [[4, 3], [2, 5]].",
      "options": {
        "A": "14",
        "B": "26",
        "C": "10",
        "D": "-14"
      },
      "correctAnswer": "A",
      "explanation": "det = (4 * 5) - (3 * 2) = 20 - 6 = 14."
    },
    {
      "id": "SS3-MAT-002",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the inverse of the matrix M = [[2, 1], [5, 3]].",
      "options": {
        "A": "[[3, -1], [-5, 2]]",
        "B": "[[-3, 1], [5, -2]]",
        "C": "[[2, -1], [-5, 3]]",
        "D": "[[3, 1], [5, 2]]"
      },
      "correctAnswer": "A",
      "explanation": "det(M) = (2*3) - (1*5) = 6 - 5 = 1. Inverse = (1/det) * [[d, -b], [-c, a]] = [[3, -1], [-5, 2]]."
    },
    {
      "id": "SS3-MAT-003",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 3]], find the matrix product AB.",
      "options": {
        "A": "[[4, 6], [10, 12]]",
        "B": "[[2, 6], [4, 12]]",
        "C": "[[4, 8], [8, 12]]",
        "D": "[[2, 0], [3, 12]]"
      },
      "correctAnswer": "A",
      "explanation": "Row 1: [1*2 + 2*1, 1*0 + 2*3] = [4, 6]. Row 2: [3*2 + 4*1, 3*0 + 4*3] = [10, 12]. Thus AB = [[4, 6], [10, 12]]."
    },
    {
      "id": "SS3-MAT-004",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "For what value of x is the matrix [[x, 4], [3, 6]] singular?",
      "options": {
        "A": "2",
        "B": "4",
        "C": "6",
        "D": "8"
      },
      "correctAnswer": "A",
      "explanation": "A matrix is singular if its determinant is zero. 6x - (4 * 3) = 0 => 6x = 12 => x = 2."
    },
    {
      "id": "SS3-MAT-005",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Evaluate the determinant: |[[1, 2, 3], [0, 4, 5], [0, 0, 6]]|.",
      "options": {
        "A": "24",
        "B": "15",
        "C": "0",
        "D": "36"
      },
      "correctAnswer": "A",
      "explanation": "For an upper triangular matrix, the determinant is the product of its main diagonal elements: 1 * 4 * 6 = 24."
    },
    {
      "id": "SS3-MAT-006",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If A is a 2x2 matrix and det(A) = 5, what is det(3A)?",
      "options": {
        "A": "45",
        "B": "15",
        "C": "25",
        "D": "30"
      },
      "correctAnswer": "A",
      "explanation": "For an n x n matrix, det(kA) = k^n * det(A). Here n = 2, so det(3A) = 3^2 * 5 = 9 * 5 = 45."
    },
    {
      "id": "SS3-MAT-007",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Solve for x and y using Cramer's rule: 2x + 3y = 8 and x - y = -1.",
      "options": {
        "A": "x = 1, y = 2",
        "B": "x = 2, y = 1",
        "C": "x = -1, y = 3",
        "D": "x = 3, y = 2"
      },
      "correctAnswer": "A",
      "explanation": "D = |[[2, 3], [1, -1]]| = -2 - 3 = -5. Dx = |[[8, 3], [-1, -1]]| = -8 - (-3) = -5 => x = -5/-5 = 1. Dy = |[[2, 8], [1, -1]]| = -2 - 8 = -10 => y = -10/-5 = 2."
    },
    {
      "id": "SS3-MAT-008",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If A = [[2, -1], [3, 4]], find the transpose matrix A^T.",
      "options": {
        "A": "[[2, 3], [-1, 4]]",
        "B": "[[-2, 1], [-3, -4]]",
        "C": "[[4, 1], [-3, 2]]",
        "D": "[[2, -1], [3, 4]]"
      },
      "correctAnswer": "A",
      "explanation": "Transposition interchanges rows and columns: Row 1 [2, -1] becomes Col 1; Row 2 [3, 4] becomes Col 2: [[2, 3], [-1, 4]]."
    },
    {
      "id": "SS3-MAT-009",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If A is an invertible matrix, then A * A^(-1) is equal to:",
      "options": {
        "A": "Identity Matrix I",
        "B": "Zero Matrix O",
        "C": "A",
        "D": "A^T"
      },
      "correctAnswer": "A",
      "explanation": "By definition, multiplying a matrix by its inverse produces the identity matrix I."
    },
    {
      "id": "SS3-MAT-010",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Given A = [[3, 1], [0, 2]], evaluate A^2.",
      "options": {
        "A": "[[9, 5], [0, 4]]",
        "B": "[[9, 1], [0, 4]]",
        "C": "[[6, 2], [0, 4]]",
        "D": "[[9, 6], [0, 4]]"
      },
      "correctAnswer": "A",
      "explanation": "Row 1: [3*3 + 1*0, 3*1 + 1*2] = [9, 5]. Row 2: [0*3 + 2*0, 0*1 + 2*2] = [0, 4]. Thus A^2 = [[9, 5], [0, 4]]."
    },
    {
      "id": "SS3-MAT-011",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the trace of the matrix [[5, 2, -1], [3, -2, 4], [1, 0, 8]].",
      "options": {
        "A": "11",
        "B": "15",
        "C": "10",
        "D": "12"
      },
      "correctAnswer": "A",
      "explanation": "The trace of a square matrix is the sum of its main diagonal elements: 5 + (-2) + 8 = 11."
    },
    {
      "id": "SS3-MAT-012",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If matrix P has order 3x2 and matrix Q has order 2x4, what is the order of the product PQ?",
      "options": {
        "A": "3x4",
        "B": "2x2",
        "C": "4x3",
        "D": "Cannot be multiplied"
      },
      "correctAnswer": "A",
      "explanation": "Since the number of columns in P (2) equals the number of rows in Q (2), PQ is defined and has dimension (rows of P) x (cols of Q) = 3x4."
    },
    {
      "id": "SS3-MAT-013",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Evaluate the determinant: |[[2, 1], [6, 3]]|.",
      "options": {
        "A": "0",
        "B": "12",
        "C": "6",
        "D": "-6"
      },
      "correctAnswer": "A",
      "explanation": "det = (2 * 3) - (1 * 6) = 6 - 6 = 0."
    },
    {
      "id": "SS3-MAT-014",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If [[x + 2, 3], [4, y - 1]] = [[5, 3], [4, 7]], find x and y.",
      "options": {
        "A": "x = 3, y = 8",
        "B": "x = 7, y = 6",
        "C": "x = 3, y = 6",
        "D": "x = 5, y = 8"
      },
      "correctAnswer": "A",
      "explanation": "Equating corresponding entries: x + 2 = 5 => x = 3; y - 1 = 7 => y = 8."
    },
    {
      "id": "SS3-MAT-015",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the determinant of the 3x3 matrix: |[[1, 0, 2], [2, -1, 3], [4, 1, 8]]|.",
      "options": {
        "A": "1",
        "B": "-3",
        "C": "3",
        "D": "-1"
      },
      "correctAnswer": "A",
      "explanation": "Expand along Row 1: 1 * |[-1, 3], [1, 8]| - 0 + 2 * |[2, -1], [4, 1]| = 1*(-8 - 3) + 2*(2 - (-4)) = -11 + 2(6) = -11 + 12 = 1."
    },
    {
      "id": "SS3-MAT-016",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "A matrix is said to be skew-symmetric if:",
      "options": {
        "A": "A^T = -A",
        "B": "A^T = A",
        "C": "det(A) = 0",
        "D": "A * A = I"
      },
      "correctAnswer": "A",
      "explanation": "A matrix is skew-symmetric if its transpose equals its negative: A^T = -A (with all main diagonal elements being 0)."
    },
    {
      "id": "SS3-CAL-001",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the derivative dy/dx if y = 4x^3 - 5x^2 + 7x - 9.",
      "options": {
        "A": "12x^2 - 10x + 7",
        "B": "12x^2 - 10x",
        "C": "4x^2 - 5x + 7",
        "D": "12x^3 - 10x^2 + 7"
      },
      "correctAnswer": "A",
      "explanation": "Applying the power rule d/dx(x^n) = n*x^(n-1): dy/dx = 4(3)x^2 - 5(2)x + 7 = 12x^2 - 10x + 7."
    },
    {
      "id": "SS3-CAL-002",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the gradient of the curve y = 2x^2 - 3x + 1 at the point (2, 3).",
      "options": {
        "A": "5",
        "B": "8",
        "C": "3",
        "D": "7"
      },
      "correctAnswer": "A",
      "explanation": "dy/dx = 4x - 3. At x = 2: gradient m = 4(2) - 3 = 8 - 3 = 5."
    },
    {
      "id": "SS3-CAL-003",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Differentiate y = (3x^2 - 1)^4 with respect to x using the chain rule.",
      "options": {
        "A": "24x(3x^2 - 1)^3",
        "B": "12x(3x^2 - 1)^3",
        "C": "4(3x^2 - 1)^3",
        "D": "8x(3x^2 - 1)^3"
      },
      "correctAnswer": "A",
      "explanation": "dy/dx = 4(3x^2 - 1)^3 * d/dx(3x^2 - 1) = 4(3x^2 - 1)^3 * (6x) = 24x(3x^2 - 1)^3."
    },
    {
      "id": "SS3-CAL-004",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate the indefinite integral: ∫ (6x^2 - 4x + 3) dx.",
      "options": {
        "A": "2x^3 - 2x^2 + 3x + C",
        "B": "3x^3 - 4x^2 + 3x + C",
        "C": "2x^3 - 4x^2 + 3x + C",
        "D": "6x^3 - 2x^2 + 3x + C"
      },
      "correctAnswer": "A",
      "explanation": "∫ 6x^2 dx = 6(x^3/3) = 2x^3. ∫ -4x dx = -4(x^2/2) = -2x^2. ∫ 3 dx = 3x. Sum: 2x^3 - 2x^2 + 3x + C."
    },
    {
      "id": "SS3-CAL-005",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate the definite integral: ∫[1 to 3] (2x + 1) dx.",
      "options": {
        "A": "10",
        "B": "12",
        "C": "8",
        "D": "14"
      },
      "correctAnswer": "A",
      "explanation": "Antiderivative is x^2 + x. At 3: 3^2 + 3 = 12. At 1: 1^2 + 1 = 2. Value = 12 - 2 = 10."
    },
    {
      "id": "SS3-CAL-006",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the coordinates of the turning point of the curve y = x^2 - 4x + 7 and determine its nature.",
      "options": {
        "A": "(2, 3), minimum",
        "B": "(2, 3), maximum",
        "C": "(-2, 19), minimum",
        "D": "(4, 7), maximum"
      },
      "correctAnswer": "A",
      "explanation": "dy/dx = 2x - 4 = 0 => x = 2. y = 2^2 - 4(2) + 7 = 3. d^2y/dx^2 = 2 > 0, so it is a minimum point at (2, 3)."
    },
    {
      "id": "SS3-CAL-007",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the rate of change of the area of a circle with respect to its radius r when r = 5 cm.",
      "options": {
        "A": "10π cm^2/cm",
        "B": "25π cm^2/cm",
        "C": "5π cm^2/cm",
        "D": "20π cm^2/cm"
      },
      "correctAnswer": "A",
      "explanation": "A = πr^2. dA/dr = 2πr. When r = 5, dA/dr = 2π(5) = 10π cm^2/cm."
    },
    {
      "id": "SS3-CAL-008",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Differentiate y = x * sin x with respect to x using the product rule.",
      "options": {
        "A": "sin x + x cos x",
        "B": "cos x",
        "C": "x cos x",
        "D": "sin x - x cos x"
      },
      "correctAnswer": "A",
      "explanation": "Product rule: d(uv)/dx = u'v + uv'. Here u = x (u'=1), v = sin x (v'=cos x). Result = 1 * sin x + x * cos x = sin x + x cos x."
    },
    {
      "id": "SS3-CAL-009",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the equation of the tangent line to the curve y = x^2 at the point (1, 1).",
      "options": {
        "A": "y = 2x - 1",
        "B": "y = 2x + 1",
        "C": "y = x",
        "D": "y = -2x + 3"
      },
      "correctAnswer": "A",
      "explanation": "dy/dx = 2x. At x = 1, gradient m = 2. Equation: y - 1 = 2(x - 1) => y - 1 = 2x - 2 => y = 2x - 1."
    },
    {
      "id": "SS3-CAL-010",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the area bounded by the curve y = x^2, the x-axis, and the lines x = 0 and x = 3.",
      "options": {
        "A": "9 sq units",
        "B": "27 sq units",
        "C": "6 sq units",
        "D": "18 sq units"
      },
      "correctAnswer": "A",
      "explanation": "Area = ∫[0 to 3] x^2 dx = [x^3 / 3][0 to 3] = 3^3 / 3 - 0 = 27 / 3 = 9 square units."
    },
    {
      "id": "SS3-CAL-011",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "If s = 3t^2 - 12t + 5 represents the displacement of a particle at time t, at what time is the particle momentarily at rest?",
      "options": {
        "A": "t = 2 s",
        "B": "t = 4 s",
        "C": "t = 0 s",
        "D": "t = 3 s"
      },
      "correctAnswer": "A",
      "explanation": "Velocity v = ds/dt = 6t - 12. At rest, v = 0 => 6t - 12 = 0 => t = 2 seconds."
    },
    {
      "id": "SS3-CAL-012",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Differentiate y = 1/x^2 with respect to x.",
      "options": {
        "A": "-2 / x^3",
        "B": "-1 / x",
        "C": "2 / x^3",
        "D": "-2 / x"
      },
      "correctAnswer": "A",
      "explanation": "y = x^(-2). dy/dx = -2 x^(-3) = -2 / x^3."
    },
    {
      "id": "SS3-CAL-013",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate: ∫[0 to 2] 3x^2 dx.",
      "options": {
        "A": "8",
        "B": "12",
        "C": "6",
        "D": "24"
      },
      "correctAnswer": "A",
      "explanation": "∫ 3x^2 dx = x^3. [x^3][0 to 2] = 2^3 - 0 = 8."
    },
    {
      "id": "SS3-CAL-014",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "The gradient of the normal to the curve y = 3x^2 at the point where x = 1 is:",
      "options": {
        "A": "-1/6",
        "B": "6",
        "C": "-6",
        "D": "1/6"
      },
      "correctAnswer": "A",
      "explanation": "dy/dx = 6x. At x = 1, tangent gradient m_t = 6. Gradient of normal m_n = -1 / m_t = -1/6."
    },
    {
      "id": "SS3-CAL-015",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find d^2y/dx^2 if y = x^4 - 2x^3 + 5x.",
      "options": {
        "A": "12x^2 - 12x",
        "B": "4x^3 - 6x^2 + 5",
        "C": "12x^2 - 6x",
        "D": "24x - 12"
      },
      "correctAnswer": "A",
      "explanation": "dy/dx = 4x^3 - 6x^2 + 5. Second derivative d^2y/dx^2 = 12x^2 - 12x."
    },
    {
      "id": "SS3-CAL-016",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate: ∫ (1 / x) dx for x > 0.",
      "options": {
        "A": "ln(x) + C",
        "B": "-1 / x^2 + C",
        "C": "x + C",
        "D": "e^x + C"
      },
      "correctAnswer": "A",
      "explanation": "The standard integral of 1/x is the natural logarithm ln(x) + C."
    }
  ]
};

  /**
   * Determine the target senior base level ('SSS 1', 'SSS 2', 'SSS 3') from a class name
   * Examples: 'SSS 1 Science', 'SSS 2 Art', 'SSS 3 Commercial' -> 'SSS 1', 'SSS 2', 'SSS 3'
   */
  function normalizeSeniorClass(className) {
    if (!className) return null;
    var str = String(className).trim().toUpperCase();
    if (str.indexOf('SSS 1') !== -1 || str.indexOf('SS 1') !== -1 || str.indexOf('SSS1') !== -1) return 'SSS 1';
    if (str.indexOf('SSS 2') !== -1 || str.indexOf('SS 2') !== -1 || str.indexOf('SSS2') !== -1) return 'SSS 2';
    if (str.indexOf('SSS 3') !== -1 || str.indexOf('SS 3') !== -1 || str.indexOf('SSS3') !== -1) return 'SSS 3';
    return null;
  }

  /**
   * Fisher-Yates array shuffle (returns a new copy)
   */
  function shuffleArray(arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  /**
   * Get 40 randomized questions for a given student class
   * @param {string} className e.g. "SSS 1 Science", "SSS 2 Commercial", "SSS 3 Art"
   * @param {number} count Number of questions to pick (default: 40)
   * @returns {Array} Array of question objects
   */
  function getRandomExamQuestions(className, count) {
    count = count || 40;
    var baseClass = normalizeSeniorClass(className);
    if (!baseClass || !CBT_BANK[baseClass]) {
      console.warn('CBT: No question bank found for class:', className);
      return [];
    }

    var fullBank = CBT_BANK[baseClass];
    var shuffled = shuffleArray(fullBank);
    var selected = shuffled.slice(0, Math.min(count, shuffled.length));

    // Return deep copy with student-facing properties and question numbering
    return selected.map(function (q, index) {
      return {
        number: index + 1,
        id: q.id,
        class: q.class,
        topic: q.topic,
        question: q.question,
        options: {
          A: q.options.A,
          B: q.options.B,
          C: q.options.C,
          D: q.options.D
        },
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      };
    });
  }

  // Export to window
  if (typeof window !== 'undefined') {
    window.CBT_QUESTION_BANK = CBT_BANK;
    window.CBT_HELPERS = {
      normalizeSeniorClass: normalizeSeniorClass,
      getRandomExamQuestions: getRandomExamQuestions,
      shuffleArray: shuffleArray
    };
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      CBT_BANK: CBT_BANK,
      normalizeSeniorClass: normalizeSeniorClass,
      getRandomExamQuestions: getRandomExamQuestions
    };
  }
})();
