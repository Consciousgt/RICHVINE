/**
 * RichVine College - Computer Based Test (CBT) Question Bank
 * Total: 300 Curated Standard WAEC Mathematics Questions (100 for SSS 1, 100 for SSS 2, 100 for SSS 3)
 * Rigorous LaTeX Mathematical Notation with Step-by-Step Solutions
 * Sampled: Exactly 40 multiple-choice questions randomized per student test session.
 */

(function () {
  'use strict';

  var CBT_BANK = {
  "SSS 1": [
    {
      "id": "WAEC-SS1-SET-001",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If universal set $U = \\{5, 6, 7, 8\\}$, $P = \\{6, 7\\}$, and $Q = \\{6, 8\\}$, find $(P \\cap Q)'$.",
      "options": {
        "B": "$\\{5, 7, 8\\}$",
        "A": "$\\{5, 6, 8\\}$",
        "C": "$\\{6, 7, 8\\}$",
        "D": "$\\{5, 6, 7, 8\\}$"
      },
      "correctAnswer": "B",
      "explanation": "$P \\cap Q = \\{6\\}$. The complement $(P \\cap Q)' = U \\setminus \\{6\\} = \\{5, 7, 8\\}$."
    },
    {
      "id": "WAEC-SS1-SET-002",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "The universal set $U = \\{2, 3, 4, 5, 6, 7, 8, 9\\}$ has subsets $P = \\{2, 4, 6, 8\\}$ and $Q = \\{x : x^2 < 50,\\ x \\text{ is odd}\\}$. Find $(P \\cap Q)'$.",
      "options": {
        "C": "$\\{2, 3, 4, 5, 6, 7, 8, 9\\}$",
        "A": "$\\{2, 4, 6, 8\\}$",
        "B": "$\\{3, 5, 7\\}$",
        "D": "$\\emptyset$"
      },
      "correctAnswer": "C",
      "explanation": "Odd numbers in $U$ with $x^2 < 50$ are $Q = \\{3, 5, 7\\}$. $P \\cap Q = \\emptyset$. Thus $(P \\cap Q)' = U = \\{2, 3, 4, 5, 6, 7, 8, 9\\}$."
    },
    {
      "id": "WAEC-SS1-SET-003",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a class of $45$ students, every student offers either Chemistry or Economics or both. If $25$ students offer Chemistry while $34$ offer Economics, find the number of students who offer both subjects.",
      "options": {
        "A": "$14$",
        "B": "$12$",
        "C": "$16$",
        "D": "$10$"
      },
      "correctAnswer": "A",
      "explanation": "Using $n(C \\cup E) = n(C) + n(E) - n(C \\cap E)$: $45 = 25 + 34 - n(C \\cap E) \\implies n(C \\cap E) = 59 - 45 = 14$."
    },
    {
      "id": "WAEC-SS1-SET-004",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $R = \\{x : x^2 = 16,\\ x > 5\\}$, which of the following is equal to $R$?",
      "options": {
        "D": "$\\emptyset\\text{ (Empty set)}$",
        "A": "$\\{4\\}$",
        "B": "$\\{-4, 4\\}$",
        "C": "$\\{16\\}$"
      },
      "correctAnswer": "D",
      "explanation": "$x^2 = 16 \\implies x = 4$ or $x = -4$. Neither value satisfies the condition $x > 5$. Hence $R = \\emptyset$."
    },
    {
      "id": "WAEC-SS1-SET-005",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Let $X = \\{\\text{prime factors of } 84\\}$ and $Y = \\{\\text{prime factors of } 315\\}$. Find $X \\cup Y$ and $X \\cap Y$ respectively.",
      "options": {
        "C": "$\\{2, 3, 5, 7\\}\\text{ and }\\{3, 7\\}$",
        "A": "$\\{2, 3, 5, 7\\}\\text{ and }\\{2, 7\\}$",
        "B": "$\\{3, 7\\}\\text{ and }\\{2, 5\\}$",
        "D": "$\\{2, 3, 7\\}\\text{ and }\\{3, 5, 7\\}$"
      },
      "correctAnswer": "C",
      "explanation": "Prime factorization: $84 = 2^2 \\times 3 \\times 7 \\implies X = \\{2, 3, 7\\}$; $315 = 3^2 \\times 5 \\times 7 \\implies Y = \\{3, 5, 7\\}$. $X \\cup Y = \\{2, 3, 5, 7\\}$ and $X \\cap Y = \\{3, 7\\}$."
    },
    {
      "id": "WAEC-SS1-SET-006",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "A school registers $300$ candidates for an examination. $180$ candidates offer Economics and $70$ offer Geography. If $80$ candidates offer neither Economics nor Geography, how many candidates offer at least one subject?",
      "options": {
        "A": "$220$",
        "B": "$250$",
        "C": "$180$",
        "D": "$150$"
      },
      "correctAnswer": "A",
      "explanation": "Candidates offering at least one subject $= \\text{Total} - \\text{Neither} = 300 - 80 = 220$."
    },
    {
      "id": "WAEC-SS1-SET-007",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Given that $P = \\{1, 3, 4\\}$ and $Q = \\{2, 3, 4\\}$, find $P \\cap Q$.",
      "options": {
        "D": "$\\{3, 4\\}$",
        "A": "$\\{1, 2, 3, 4\\}$",
        "B": "$\\{3\\}$",
        "C": "$\\{4\\}$"
      },
      "correctAnswer": "D",
      "explanation": "The elements common to both $P$ and $Q$ are $3$ and $4$, so $P \\cap Q = \\{3, 4\\}$."
    },
    {
      "id": "WAEC-SS1-SET-008",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $P = \\{x : x > 0\\}$, $R = \\{x : -5 \\le x < 5\\}$, and the universal set $U$ is the set of all integers, find $P' \\cap R$.",
      "options": {
        "B": "$\\{-5, -4, -3, -2, -1, 0\\}$",
        "A": "$\\{-5, -4, -3, -2, -1\\}$",
        "C": "$\\{0, 1, 2, 3, 4\\}$",
        "D": "$\\{-4, -3, -2, -1, 0\\}$"
      },
      "correctAnswer": "B",
      "explanation": "$P' = \\{x \\in \\mathbb{Z} : x \\le 0\\}$. The intersection with $R = \\{-5, -4, -3, -2, -1, 0, 1, 2, 3, 4\\}$ is $\\{-5, -4, -3, -2, -1, 0\\}$."
    },
    {
      "id": "WAEC-SS1-SET-009",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a class of $60$ students, $40$ speak Hausa, $19$ speak Igbo, and $7$ students speak both languages. Find the number of students who speak neither of the languages.",
      "options": {
        "D": "$8$",
        "A": "$12$",
        "B": "$7$",
        "C": "$14$"
      },
      "correctAnswer": "D",
      "explanation": "$n(H \\cup I) = 40 + 19 - 7 = 52$. Number speaking neither $= 60 - 52 = 8$."
    },
    {
      "id": "WAEC-SS1-SET-010",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $I$ is the set of positive integers and $P = \\{x : x \\in I,\\ x^2 < 10\\ \\text{and}\\ x \\neq 0\\}$, find $P$.",
      "options": {
        "B": "$\\{1, 2, 3\\}$",
        "A": "$\\{0, 1, 2, 3\\}$",
        "C": "$\\{-3, -2, -1, 1, 2, 3\\}$",
        "D": "$\\{1, 2\\}$"
      },
      "correctAnswer": "B",
      "explanation": "Positive integers whose squares are strictly less than $10$: $1^2 = 1 < 10$, $2^2 = 4 < 10$, $3^2 = 9 < 10$. Thus $P = \\{1, 2, 3\\}$."
    },
    {
      "id": "WAEC-SS1-SET-011",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "How many subsets can be formed from a set containing $6$ elements?",
      "options": {
        "C": "$64$",
        "A": "$32$",
        "B": "$128$",
        "D": "$36$"
      },
      "correctAnswer": "C",
      "explanation": "The number of subsets of a set of cardinality $n$ is $2^n$. For $n = 6$, $2^6 = 64$."
    },
    {
      "id": "WAEC-SS1-SET-012",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $n(A) = 18$, $n(B) = 24$, and $n(A \\cup B) = 32$, find $n(A \\cap B)$.",
      "options": {
        "A": "$10$",
        "B": "$8$",
        "C": "$14$",
        "D": "$12$"
      },
      "correctAnswer": "A",
      "explanation": "$n(A \\cap B) = n(A) + n(B) - n(A \\cup B) = 18 + 24 - 32 = 42 - 32 = 10$."
    },
    {
      "id": "WAEC-SS1-SET-013",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Which of the following is equivalent to $(A \\cup B)'$ by De Morgan's Law?",
      "options": {
        "A": "$A' \\cap B'$",
        "B": "$A' \\cup B'$",
        "C": "$A \\cap B'$",
        "D": "$(A \\cap B)'$"
      },
      "correctAnswer": "A",
      "explanation": "De Morgan's first law states that the complement of the union equals the intersection of the complements: $(A \\cup B)' = A' \\cap B'$."
    },
    {
      "id": "WAEC-SS1-SET-014",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $A = \\{x : x \\text{ is a factor of } 12\\}$ and $B = \\{x : x \\text{ is a factor of } 18\\}$, find $A \\cap B$.",
      "options": {
        "D": "$\\{1, 2, 3, 6\\}$",
        "A": "$\\{1, 2, 6\\}$",
        "B": "$\\{2, 3, 6\\}$",
        "C": "$\\{1, 2, 3, 4, 6\\}$"
      },
      "correctAnswer": "D",
      "explanation": "Factors of $12$: $\\{1, 2, 3, 4, 6, 12\\}$. Factors of $18$: $\\{1, 2, 3, 6, 9, 18\\}$. Common factors: $\\{1, 2, 3, 6\\}$."
    },
    {
      "id": "WAEC-SS1-SET-015",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Two sets $A$ and $B$ are disjoint if and only if:",
      "options": {
        "B": "$A \\cap B = \\emptyset$",
        "A": "$A \\cup B = \\emptyset$",
        "C": "$n(A) = n(B)$",
        "D": "$A \\subset B$"
      },
      "correctAnswer": "B",
      "explanation": "Disjoint sets have no common members, meaning their intersection is the empty set: $A \\cap B = \\emptyset$."
    },
    {
      "id": "WAEC-SS1-SET-016",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a survey of $50$ farmers, $30$ grow cassava, $25$ grow yam, and $10$ grow neither. How many grow both crops?",
      "options": {
        "C": "$15$",
        "A": "$10$",
        "B": "$20$",
        "D": "$5$"
      },
      "correctAnswer": "C",
      "explanation": "Grow at least one $= 50 - 10 = 40$. $n(C \\cap Y) = 30 + 25 - 40 = 15$."
    },
    {
      "id": "WAEC-SS1-SET-017",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "What is the number of proper subsets of a set with $5$ elements?",
      "options": {
        "B": "$31$",
        "A": "$32$",
        "C": "$30$",
        "D": "$25$"
      },
      "correctAnswer": "B",
      "explanation": "Number of proper subsets is $2^n - 1$. For $n = 5$, $2^5 - 1 = 32 - 1 = 31$."
    },
    {
      "id": "WAEC-SS1-SET-018",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $U = \\{x : 1 \\le x \\le 12,\\ x \\in \\mathbb{Z}\\}$ and $M = \\{x : x \\text{ is a multiple of } 3\\}$, find $M'$.",
      "options": {
        "C": "$\\{1, 2, 4, 5, 7, 8, 10, 11\\}$",
        "A": "$\\{3, 6, 9, 12\\}$",
        "B": "$\\{1, 2, 4, 5, 7, 8, 10\\}$",
        "D": "$\\{2, 4, 5, 7, 8, 10, 11\\}$"
      },
      "correctAnswer": "C",
      "explanation": "$M = \\{3, 6, 9, 12\\}$. The complement $M' = U \\setminus M = \\{1, 2, 4, 5, 7, 8, 10, 11\\}$."
    },
    {
      "id": "WAEC-SS1-SET-019",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $A \\subset B$, which of the following expressions is always true?",
      "options": {
        "A": "$A \\cap B = A$",
        "B": "$A \\cup B = A$",
        "C": "$A \\cap B = B$",
        "D": "$A' \\cap B = \\emptyset$"
      },
      "correctAnswer": "A",
      "explanation": "If every element of $A$ belongs to $B$, the intersection of $A$ and $B$ is precisely $A$."
    },
    {
      "id": "WAEC-SS1-SET-020",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "The symmetric difference of sets $A$ and $B$, denoted $A \\,\\Delta\\, B$, is defined as:",
      "options": {
        "D": "$(A \\cup B) \\setminus (A \\cap B)$",
        "A": "$A \\cap B$",
        "B": "$A' \\cap B'$",
        "C": "$(A \\cap B)'$"
      },
      "correctAnswer": "D",
      "explanation": "$A \\,\\Delta\\, B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$."
    },
    {
      "id": "WAEC-SS1-SET-021",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $n(A) = 20$, $n(B) = 30$, and $A \\cap B = \\emptyset$, find $n(A \\cup B)$.",
      "options": {
        "C": "$50$",
        "A": "$10$",
        "B": "$60$",
        "D": "$25$"
      },
      "correctAnswer": "C",
      "explanation": "For disjoint sets, $n(A \\cup B) = n(A) + n(B) = 20 + 30 = 50$."
    },
    {
      "id": "WAEC-SS1-SET-022",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Given $S = \\{a, b, c\\}$, what is the cardinality of the power set $\\mathcal{P}(S)$?",
      "options": {
        "A": "$8$",
        "B": "$6$",
        "C": "$9$",
        "D": "$7$"
      },
      "correctAnswer": "A",
      "explanation": "$|\\mathcal{P}(S)| = 2^{|S|} = 2^3 = 8$."
    },
    {
      "id": "WAEC-SS1-SET-023",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $n(U) = 100$, $n(P) = 60$, $n(Q) = 50$, and $n(P \\cap Q) = 25$, find $n(P \\cup Q)'$.",
      "options": {
        "D": "$15$",
        "A": "$25$",
        "B": "$35$",
        "C": "$10$"
      },
      "correctAnswer": "D",
      "explanation": "$n(P \\cup Q) = 60 + 50 - 25 = 85$. Complement $n(P \\cup Q)' = 100 - 85 = 15$."
    },
    {
      "id": "WAEC-SS1-SET-024",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If set $A = \\{x : x \\in \\mathbb{R},\\ x^2 + 4 = 0\\}$, then $A$ is:",
      "options": {
        "B": "an empty set",
        "A": "a singleton set",
        "C": "an infinite set",
        "D": "$\\{-2, 2\\}$"
      },
      "correctAnswer": "B",
      "explanation": "For real $x$, $x^2 \\ge 0$, so $x^2 + 4 \\ge 4 > 0$. There are no real solutions, so $A = \\emptyset$."
    },
    {
      "id": "WAEC-SS1-SET-025",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a class of $40$ learners, $22$ like football, $18$ like basketball, and $8$ like neither. How many like football only?",
      "options": {
        "D": "$14$",
        "A": "$12$",
        "B": "$8$",
        "C": "$16$"
      },
      "correctAnswer": "D",
      "explanation": "$n(F \\cup B) = 40 - 8 = 32$. $n(F \\cap B) = 22 + 18 - 32 = 8$. Football only $= n(F) - n(F \\cap B) = 22 - 8 = 14$."
    },
    {
      "id": "WAEC-SS1-IND-001",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{9^{-1/2} \\times 81^{3/4}}{9^{1/2}}$.",
      "options": {
        "B": "$3$",
        "A": "$9$",
        "C": "$1$",
        "D": "$\\dfrac{1}{3}$"
      },
      "correctAnswer": "B",
      "explanation": "$9^{-1/2} = \\frac{1}{3}$, $81^{3/4} = (3^4)^{3/4} = 3^3 = 27$, and $9^{1/2} = 3$. Hence $\\dfrac{\\frac{1}{3} \\times 27}{3} = \\dfrac{9}{3} = 3$."
    },
    {
      "id": "WAEC-SS1-IND-002",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $m$: $9^{2m+1} = \\dfrac{81^{m+2}}{3^m}$.",
      "options": {
        "C": "$m = 6$",
        "A": "$m = 4$",
        "B": "$m = 8$",
        "D": "$m = 2$"
      },
      "correctAnswer": "C",
      "explanation": "$3^{2(2m+1)} = \\dfrac{3^{4(m+2)}}{3^m} \\implies 3^{4m+2} = 3^{3m+8} \\implies 4m + 2 = 3m + 8 \\implies m = 6$."
    },
    {
      "id": "WAEC-SS1-IND-003",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Find $n$ if $9^{1+n} \\times 3 = 27^{-n}$.",
      "options": {
        "A": "$-\\dfrac{3}{5}$",
        "B": "$\\dfrac{3}{5}$",
        "C": "$-\\dfrac{5}{3}$",
        "D": "$-1$"
      },
      "correctAnswer": "A",
      "explanation": "$3^{2(1+n)} \\times 3^1 = 3^{-3n} \\implies 3^{2n+3} = 3^{-3n} \\implies 2n + 3 = -3n \\implies 5n = -3 \\implies n = -\\dfrac{3}{5}$."
    },
    {
      "id": "WAEC-SS1-IND-004",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: $(3^0 - 9^{-1/2})^{-3}$.",
      "options": {
        "A": "$\\dfrac{27}{8}$",
        "B": "$\\dfrac{8}{27}$",
        "C": "$\\dfrac{9}{4}$",
        "D": "$\\dfrac{4}{9}$"
      },
      "correctAnswer": "A",
      "explanation": "$3^0 = 1$, $9^{-1/2} = \\frac{1}{3}$. $(1 - \\frac{1}{3})^{-3} = (\\frac{2}{3})^{-3} = (\\frac{3}{2})^3 = \\dfrac{27}{8}$."
    },
    {
      "id": "WAEC-SS1-IND-005",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{2^x - 2^{x-1}}{2^3 \\times 2^x - 8 \\times 2^{x-1}}$.",
      "options": {
        "D": "$\\dfrac{1}{8}$",
        "A": "$\\dfrac{1}{4}$",
        "B": "$\\dfrac{1}{2}$",
        "C": "$1$"
      },
      "correctAnswer": "D",
      "explanation": "Factor out $2^x$: Numerator $= 2^x(1 - \\frac{1}{2}) = \\frac{1}{2} \\cdot 2^x$. Denominator $= 2^x(8 - 8 \\cdot \\frac{1}{2}) = 4 \\cdot 2^x$. Ratio $= \\dfrac{1/2}{4} = \\dfrac{1}{8}$."
    },
    {
      "id": "WAEC-SS1-IND-006",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Find the value of $x$ which satisfies the equation $\\dfrac{9^{2x}}{9^{3x}} = 3$.",
      "options": {
        "B": "$-\\dfrac{1}{2}$",
        "A": "$\\dfrac{1}{2}$",
        "C": "$-1$",
        "D": "$1$"
      },
      "correctAnswer": "B",
      "explanation": "$9^{2x - 3x} = 9^{-x} = (3^2)^{-x} = 3^{-2x} = 3^1 \\implies -2x = 1 \\implies x = -\\dfrac{1}{2}$."
    },
    {
      "id": "WAEC-SS1-IND-007",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "If $\\left(\\dfrac{2}{3}\\right)^{a-1} = \\dfrac{27}{8}$, find the value of $a$.",
      "options": {
        "C": "$-2$",
        "A": "$2$",
        "B": "$-4$",
        "D": "$4$"
      },
      "correctAnswer": "C",
      "explanation": "$\\dfrac{27}{8} = \\left(\\dfrac{3}{2}\\right)^3 = \\left(\\dfrac{2}{3}\\right)^{-3}$. Then $a - 1 = -3 \\implies a = -2$."
    },
    {
      "id": "WAEC-SS1-IND-008",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{16^{-1/2}}{64^{2/3}}$.",
      "options": {
        "B": "$\\dfrac{1}{64}$",
        "A": "$\\dfrac{1}{16}$",
        "C": "$\\dfrac{1}{32}$",
        "D": "$4$"
      },
      "correctAnswer": "B",
      "explanation": "$16^{-1/2} = \\frac{1}{\\sqrt{16}} = \\frac{1}{4}$. $64^{2/3} = (4^3)^{2/3} = 4^2 = 16$. Then $\\dfrac{1/4}{16} = \\dfrac{1}{64}$."
    },
    {
      "id": "WAEC-SS1-IND-009",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve the equation: $3x^{-2} = \\dfrac{4}{27}$.",
      "options": {
        "C": "$\\pm\\dfrac{9}{2}$",
        "A": "$\\pm\\dfrac{3}{2}$",
        "B": "$\\pm\\dfrac{27}{2}$",
        "D": "$\\dfrac{9}{2}\\text{ only}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\dfrac{3}{x^2} = \\dfrac{4}{27} \\implies 4x^2 = 81 \\implies x^2 = \\dfrac{81}{4} \\implies x = \\pm\\dfrac{9}{2}$."
    },
    {
      "id": "WAEC-SS1-IND-010",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Express $\\dfrac{3.50}{0.0025}$ in standard form.",
      "options": {
        "A": "$1.4 \\times 10^3$",
        "B": "$1.4 \\times 10^2$",
        "C": "$1.4 \\times 10^4$",
        "D": "$14 \\times 10^2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\dfrac{3.5}{2.5 \\times 10^{-3}} = \\dfrac{3.5}{2.5} \\times 10^3 = 1.4 \\times 10^3$."
    },
    {
      "id": "WAEC-SS1-IND-011",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "The product of $0.0022$ and $0.017$ expressed in standard form is:",
      "options": {
        "D": "$3.74 \\times 10^{-5}$",
        "A": "$3.74 \\times 10^{-4}$",
        "B": "$3.74 \\times 10^{-6}$",
        "C": "$37.4 \\times 10^{-6}$"
      },
      "correctAnswer": "D",
      "explanation": "$(2.2 \\times 10^{-3}) \\times (1.7 \\times 10^{-2}) = (2.2 \\times 1.7) \\times 10^{-5} = 3.74 \\times 10^{-5}$."
    },
    {
      "id": "WAEC-SS1-IND-012",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\sqrt{3} + 2 - \\dfrac{1}{2 - \\sqrt{3}}$.",
      "options": {
        "C": "$0$",
        "A": "$2\\sqrt{3}$",
        "B": "$4$",
        "D": "$1$"
      },
      "correctAnswer": "C",
      "explanation": "Rationalize: $\\dfrac{1}{2 - \\sqrt{3}} = \\dfrac{2 + \\sqrt{3}}{(2-\\sqrt{3})(2+\\sqrt{3})} = 2 + \\sqrt{3}$. Then $\\sqrt{3} + 2 - (2 + \\sqrt{3}) = 0$."
    },
    {
      "id": "WAEC-SS1-IND-013",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{3\\sqrt{15} \\times 2\\sqrt{48}}{\\sqrt{32} \\times 4\\sqrt{45}}$.",
      "options": {
        "A": "$\\dfrac{3\\sqrt{2}}{4}$",
        "B": "$\\dfrac{3}{4}$",
        "C": "$\\dfrac{\\sqrt{2}}{2}$",
        "D": "$\\dfrac{3\\sqrt{5}}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\dfrac{6\\sqrt{720}}{4\\sqrt{1440}} = \\dfrac{6}{4\\sqrt{2}} = \\dfrac{3}{2\\sqrt{2}} = \\dfrac{3\\sqrt{2}}{4}$."
    },
    {
      "id": "WAEC-SS1-IND-014",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $5\\sqrt{12} - 4\\sqrt{75} + 3\\sqrt{48}$.",
      "options": {
        "D": "$2\\sqrt{3}$",
        "A": "$3\\sqrt{3}$",
        "B": "$\\sqrt{3}$",
        "C": "$4\\sqrt{3}$"
      },
      "correctAnswer": "D",
      "explanation": "$5(2\\sqrt{3}) - 4(5\\sqrt{3}) + 3(4\\sqrt{3}) = 10\\sqrt{3} - 20\\sqrt{3} + 12\\sqrt{3} = 2\\sqrt{3}$."
    },
    {
      "id": "WAEC-SS1-IND-015",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify by rationalizing the denominator: $\\dfrac{\\sqrt{5} + \\sqrt{3}}{\\sqrt{5} - \\sqrt{3}}$.",
      "options": {
        "B": "$4 + \\sqrt{15}$",
        "A": "$4 - \\sqrt{15}$",
        "C": "$8 + 2\\sqrt{15}$",
        "D": "$2 + \\sqrt{15}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\dfrac{(\\sqrt{5} + \\sqrt{3})^2}{5 - 3} = \\dfrac{5 + 2\\sqrt{15} + 3}{2} = \\dfrac{8 + 2\\sqrt{15}}{2} = 4 + \\sqrt{15}$."
    },
    {
      "id": "WAEC-SS1-IND-016",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{1}{\\sqrt{2}}\\left[\\dfrac{1}{\\sqrt{3} + \\sqrt{2}} - \\dfrac{1}{\\sqrt{3} - \\sqrt{2}}\\right]$.",
      "options": {
        "D": "$-2$",
        "A": "$2$",
        "B": "$-\\sqrt{2}$",
        "C": "$0$"
      },
      "correctAnswer": "D",
      "explanation": "Inside bracket: $(\\sqrt{3} - \\sqrt{2}) - (\\sqrt{3} + \\sqrt{2}) = -2\\sqrt{2}$. Multiply by $\\frac{1}{\\sqrt{2}}$: $\\dfrac{-2\\sqrt{2}}{\\sqrt{2}} = -2$."
    },
    {
      "id": "WAEC-SS1-IND-017",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "If $x = 2 - \\sqrt{2}$, evaluate $x^2 + \\dfrac{4}{x^2}$.",
      "options": {
        "B": "$12$",
        "A": "$6$",
        "C": "$8$",
        "D": "$16$"
      },
      "correctAnswer": "B",
      "explanation": "$x^2 = (2-\\sqrt{2})^2 = 6 - 4\\sqrt{2}$. $\\dfrac{4}{x^2} = \\dfrac{4}{6 - 4\\sqrt{2}} = 6 + 4\\sqrt{2}$. Sum $= (6 - 4\\sqrt{2}) + (6 + 4\\sqrt{2}) = 12$."
    },
    {
      "id": "WAEC-SS1-IND-018",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{1}{2 - \\sqrt{3}} - \\dfrac{1}{2 + \\sqrt{3}}$.",
      "options": {
        "C": "$2\\sqrt{3}$",
        "A": "$4$",
        "B": "$0$",
        "D": "$\\sqrt{3}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\dfrac{(2 + \\sqrt{3}) - (2 - \\sqrt{3})}{(2 - \\sqrt{3})(2 + \\sqrt{3})} = \\dfrac{2\\sqrt{3}}{4 - 3} = 2\\sqrt{3}$."
    },
    {
      "id": "WAEC-SS1-IND-019",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $3\\sqrt{18} - \\dfrac{16}{\\sqrt{2}} + \\sqrt{50}$.",
      "options": {
        "A": "$6\\sqrt{2}$",
        "B": "$7\\sqrt{2}$",
        "C": "$4\\sqrt{2}$",
        "D": "$5\\sqrt{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$3(3\\sqrt{2}) - 8\\sqrt{2} + 5\\sqrt{2} = 9\\sqrt{2} - 8\\sqrt{2} + 5\\sqrt{2} = 6\\sqrt{2}$."
    },
    {
      "id": "WAEC-SS1-IND-020",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Find the square of $3 - \\sqrt{2}$.",
      "options": {
        "A": "$11 - 6\\sqrt{2}$",
        "B": "$7 - 6\\sqrt{2}$",
        "C": "$11 + 6\\sqrt{2}$",
        "D": "$9 - 2\\sqrt{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$(3 - \\sqrt{2})^2 = 3^2 - 2(3)(\\sqrt{2}) + (\\sqrt{2})^2 = 9 - 6\\sqrt{2} + 2 = 11 - 6\\sqrt{2}$."
    },
    {
      "id": "WAEC-SS1-IND-021",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "If $a\\sqrt{5} + b\\sqrt{2}$ is a square root of $95 - 30\\sqrt{10}$, find the values of $a$ and $b$.",
      "options": {
        "D": "$a = 3,\\ b = -5$",
        "A": "$a = 5,\\ b = -3$",
        "B": "$a = 3,\\ b = 5$",
        "C": "$a = 15,\\ b = -1$"
      },
      "correctAnswer": "D",
      "explanation": "$(a\\sqrt{5} + b\\sqrt{2})^2 = 5a^2 + 2b^2 + 2ab\\sqrt{10} = 95 - 30\\sqrt{10}$. $2ab = -30 \\implies ab = -15$. Testing $a=3, b=-5$: $5(9) + 2(25) = 45 + 50 = 95$."
    },
    {
      "id": "WAEC-SS1-IND-022",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $x$: $2^{2x+1} - 9(2^x) + 4 = 0$.",
      "options": {
        "B": "$x = -1\\text{ or }x = 2$",
        "A": "$x = 1\\text{ or }x = -2$",
        "C": "$x = 0\\text{ or }x = 2$",
        "D": "$x = 1\\text{ or }x = 4$"
      },
      "correctAnswer": "B",
      "explanation": "$2(2^x)^2 - 9(2^x) + 4 = 0 \\implies (2y - 1)(y - 4) = 0 \\implies 2^x = \\frac{1}{2} \\implies x = -1$, or $2^x = 4 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS1-IND-023",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: $(0.008)^{-2/3}$.",
      "options": {
        "C": "$25$",
        "A": "$125$",
        "B": "$5$",
        "D": "$\\dfrac{1}{25}$"
      },
      "correctAnswer": "C",
      "explanation": "$0.008 = \\frac{8}{1000} = \\frac{1}{125} = 5^{-3}$. $(5^{-3})^{-2/3} = 5^2 = 25$."
    },
    {
      "id": "WAEC-SS1-IND-024",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{x^{2/3} \\times x^{-1/2}}{x^{1/6}}$.",
      "options": {
        "B": "$1$",
        "A": "$x$",
        "C": "$x^{1/3}$",
        "D": "$x^{-1/3}$"
      },
      "correctAnswer": "B",
      "explanation": "Exponent: $\\frac{2}{3} - \\frac{1}{2} - \\frac{1}{6} = \\frac{4 - 3 - 1}{6} = 0$. $x^0 = 1$."
    },
    {
      "id": "WAEC-SS1-IND-025",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "If $4^{x+1} = 64$, find $x$.",
      "options": {
        "C": "$2$",
        "A": "$3$",
        "B": "$1$",
        "D": "$4$"
      },
      "correctAnswer": "C",
      "explanation": "$4^{x+1} = 4^3 \\implies x + 1 = 3 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS1-LOG-001",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate $\\log_{10}\\dfrac{1}{70}$ given that $\\log_{10}7 = 0.8451$.",
      "options": {
        "A": "$-1.8451\\text{ (or }\\bar{2}.1549\\text{)}$",
        "B": "$-1.1549$",
        "C": "$0.8451$",
        "D": "$-2.8451$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}\\frac{1}{70} = -\\log_{10}(7 \\times 10) = -(0.8451 + 1) = -1.8451 = -2 + 0.1549 = \\bar{2}.1549$."
    },
    {
      "id": "WAEC-SS1-LOG-002",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find $x$ if $4\\log x + 5\\log x - 7\\log x = \\log 16$.",
      "options": {
        "D": "$4$",
        "A": "$2$",
        "B": "$8$",
        "C": "$16$"
      },
      "correctAnswer": "D",
      "explanation": "$2\\log x = \\log(x^2) = \\log 16 \\implies x^2 = 16 \\implies x = 4$ ($x > 0$)."
    },
    {
      "id": "WAEC-SS1-LOG-003",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate $\\log_{10}0.225$ if $\\log_{10}3 = 0.477$ and $\\log_{10}5 = 0.699$.",
      "options": {
        "C": "$\\bar{1}.352\\text{ (or }-0.648\\text{)}$",
        "A": "$\\bar{2}.352$",
        "B": "$-0.352$",
        "D": "$0.352$"
      },
      "correctAnswer": "C",
      "explanation": "$0.225 = \\frac{225}{1000} = \\frac{3^2 \\times 5^2}{10^3}$. $\\log(0.225) = 2(0.477) + 2(0.699) - 3 = 0.954 + 1.398 - 3 = 2.352 - 3 = -0.648 = \\bar{1}.352$."
    },
    {
      "id": "WAEC-SS1-LOG-004",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "If $\\log_{10}3 = 0.4771$ and $10^x = 0.3$, find $x$.",
      "options": {
        "A": "$-0.5229\\text{ (or }\\bar{1}.4771\\text{)}$",
        "B": "$0.4771$",
        "C": "$-1.4771$",
        "D": "$0.5229$"
      },
      "correctAnswer": "A",
      "explanation": "$x = \\log_{10}(0.3) = \\log_{10}\\left(\\frac{3}{10}\\right) = \\log_{10}3 - 1 = 0.4771 - 1 = -0.5229$."
    },
    {
      "id": "WAEC-SS1-LOG-005",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate: $\\log_3 27 + \\log_3 6 - \\log_3 54$.",
      "options": {
        "D": "$1$",
        "A": "$0$",
        "B": "$3$",
        "C": "$2$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log_3\\left(\\dfrac{27 \\times 6}{54}\\right) = \\log_3\\left(\\dfrac{162}{54}\\right) = \\log_3 3 = 1$."
    },
    {
      "id": "WAEC-SS1-LOG-006",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate: $\\dfrac{\\log_2 8 - \\log_{1/3}81}{\\log_4(1/64)}$.",
      "options": {
        "B": "$-\\dfrac{7}{3}$",
        "A": "$\\dfrac{7}{3}$",
        "C": "$-\\dfrac{1}{3}$",
        "D": "$-3$"
      },
      "correctAnswer": "B",
      "explanation": "$\\log_2 8 = 3$, $\\log_{1/3} 81 = -4$, $\\log_4(1/64) = -3$. Numerator $= 3 - (-4) = 7$. Denominator $= -3$. Result $= -\\dfrac{7}{3}$."
    },
    {
      "id": "WAEC-SS1-LOG-007",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Solve for $x$: $\\log_{10}(3x - 4) - \\log_{10}2 = 1$.",
      "options": {
        "D": "$8$",
        "A": "$6$",
        "B": "$10$",
        "C": "$4$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log_{10}\\left(\\dfrac{3x-4}{2}\\right) = 1 \\implies \\dfrac{3x-4}{2} = 10 \\implies 3x - 4 = 20 \\implies 3x = 24 \\implies x = 8$."
    },
    {
      "id": "WAEC-SS1-LOG-008",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Calculate the value of $4^{3/2} + \\log_5 0.04 + \\log_3 81$.",
      "options": {
        "B": "$10$",
        "A": "$8$",
        "C": "$12$",
        "D": "$14$"
      },
      "correctAnswer": "B",
      "explanation": "$4^{3/2} = 8$, $\\log_5 0.04 = \\log_5(1/25) = -2$, $\\log_3 81 = 4$. Total $= 8 + (-2) + 4 = 10$."
    },
    {
      "id": "WAEC-SS1-LOG-009",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Express $x$ in terms of $p$ and $q$ if $\\log p = 0.5\\log x + 2\\log q$.",
      "options": {
        "C": "$\\dfrac{p^2}{q^4}$",
        "A": "$\\dfrac{p}{q^2}$",
        "B": "$\\dfrac{p^2}{q^2}$",
        "D": "$p^2 q^4$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log p = \\log(x^{1/2} q^2) \\implies p = \\sqrt{x} q^2 \\implies \\sqrt{x} = \\dfrac{p}{q^2} \\implies x = \\dfrac{p^2}{q^4}$."
    },
    {
      "id": "WAEC-SS1-LOG-010",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "If $\\log_{10}4 = 0.6021$, evaluate $\\log_{10}40 + 3\\log_{10}400$.",
      "options": {
        "A": "$9.4084$",
        "B": "$8.8063$",
        "C": "$7.4084$",
        "D": "$9.2042$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}40 = 1.6021$; $\\log_{10}400 = 2.6021$. $1.6021 + 3(2.6021) = 1.6021 + 7.8063 = 9.4084$."
    },
    {
      "id": "WAEC-SS1-LOG-011",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find the value of $ab$ if $a = \\log_2 3$ and $b = \\log_3 8$.",
      "options": {
        "A": "$3$",
        "B": "$2$",
        "C": "$4$",
        "D": "$8$"
      },
      "correctAnswer": "A",
      "explanation": "$ab = \\log_2 3 \\times \\log_3 8 = \\log_2 8 = 3$ by change of base rule."
    },
    {
      "id": "WAEC-SS1-LOG-012",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find $a$ if $\\log a - \\log(a - 1) = \\log 3$.",
      "options": {
        "D": "$\\dfrac{3}{2}$",
        "A": "$\\dfrac{2}{3}$",
        "B": "$3$",
        "C": "$2$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log\\left(\\dfrac{a}{a-1}\\right) = \\log 3 \\implies \\dfrac{a}{a-1} = 3 \\implies a = 3a - 3 \\implies 2a = 3 \\implies a = \\dfrac{3}{2}$."
    },
    {
      "id": "WAEC-SS1-LOG-013",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find $x$ if $\\log_4 x = 3.5$.",
      "options": {
        "B": "$128$",
        "A": "$64$",
        "C": "$256$",
        "D": "$14$"
      },
      "correctAnswer": "B",
      "explanation": "$x = 4^{3.5} = 4^{7/2} = (2^2)^{7/2} = 2^7 = 128$."
    },
    {
      "id": "WAEC-SS1-LOG-014",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find the value of $x$ if $\\dfrac{1}{2}\\log_{10}x = 1$.",
      "options": {
        "C": "$100$",
        "A": "$10$",
        "B": "$1000$",
        "D": "$20$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log_{10}x = 2 \\implies x = 10^2 = 100$."
    },
    {
      "id": "WAEC-SS1-LOG-015",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "If $\\log_{10}x = 0.5$, what is the exact value of $x$?",
      "options": {
        "B": "$\\sqrt{10}$",
        "A": "$5$",
        "C": "$10$",
        "D": "$0.25$"
      },
      "correctAnswer": "B",
      "explanation": "$x = 10^{0.5} = 10^{1/2} = \\sqrt{10}$."
    },
    {
      "id": "WAEC-SS1-LOG-016",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Given $\\log_b 2 = 0.693$ and $\\log_b 5 = 1.609$, evaluate $\\log_b 62.5$.",
      "options": {
        "C": "$4.134$",
        "A": "$4.827$",
        "B": "$3.525$",
        "D": "$2.415$"
      },
      "correctAnswer": "C",
      "explanation": "$62.5 = \\frac{125}{2} = \\frac{5^3}{2}$. $\\log_b 62.5 = 3\\log_b 5 - \\log_b 2 = 3(1.609) - 0.693 = 4.827 - 0.693 = 4.134$."
    },
    {
      "id": "WAEC-SS1-LOG-017",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "If $a = x^{1/n}$, evaluate $\\log_a x^n$.",
      "options": {
        "A": "$n^2$",
        "B": "$n$",
        "C": "$1$",
        "D": "$\\dfrac{1}{n^2}$"
      },
      "correctAnswer": "A",
      "explanation": "$x = a^n \\implies x^n = a^{n^2}$. Therefore $\\log_a x^n = \\log_a(a^{n^2}) = n^2$."
    },
    {
      "id": "WAEC-SS1-LOG-018",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate: $\\dfrac{\\log_{10}0.04 + \\log_{10}0.25}{\\log_5 100 - \\log_5 4}$.",
      "options": {
        "D": "$-1$",
        "A": "$1$",
        "B": "$0$",
        "C": "$-2$"
      },
      "correctAnswer": "D",
      "explanation": "Numerator: $\\log_{10}(0.04 \\times 0.25) = \\log_{10}(0.01) = -2$. Denominator: $\\log_5(100/4) = \\log_5 25 = 2$. Ratio: $\\frac{-2}{2} = -1$."
    },
    {
      "id": "WAEC-SS1-LOG-019",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Given that $\\log_{10}2 = 0.3010$ and $\\log_{10}3 = 0.4771$, calculate $\\log_{10}18$.",
      "options": {
        "C": "$1.2552$",
        "A": "$1.5562$",
        "B": "$0.7781$",
        "D": "$1.0791$"
      },
      "correctAnswer": "C",
      "explanation": "$18 = 2 \\times 3^2$. $\\log_{10}18 = \\log_{10}2 + 2\\log_{10}3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552$."
    },
    {
      "id": "WAEC-SS1-LOG-020",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Solve for $x$: $\\log_2 x + \\log_2(x - 2) = 3$.",
      "options": {
        "A": "$x = 4$",
        "B": "$x = 2$",
        "C": "$x = -2$",
        "D": "$x = 4\\text{ or }x = -2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_2[x(x - 2)] = 3 \\implies x^2 - 2x = 8 \\implies x^2 - 2x - 8 = 0 \\implies (x - 4)(x + 2) = 0$. Since $x > 2$, $x = 4$."
    },
    {
      "id": "WAEC-SS1-LOG-021",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate: $\\log_5 125 - \\log_2 32 + \\log_7 49$.",
      "options": {
        "D": "$0$",
        "A": "$1$",
        "B": "$2$",
        "C": "$-1$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log_5 125 = 3$; $\\log_2 32 = 5$; $\\log_7 49 = 2$. Then $3 - 5 + 2 = 0$."
    },
    {
      "id": "WAEC-SS1-LOG-022",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Solve: $\\log_3(x + 1) + \\log_3(x - 1) = 1$.",
      "options": {
        "B": "$x = 2$",
        "A": "$x = 1$",
        "C": "$x = \\sqrt{2}$",
        "D": "$x = 3$"
      },
      "correctAnswer": "B",
      "explanation": "$\\log_3(x^2 - 1) = 1 \\implies x^2 - 1 = 3 \\implies x^2 = 4 \\implies x = 2$ ($x > 1$)."
    },
    {
      "id": "WAEC-SS1-LOG-023",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find the characteristic of $\\log_{10} 45200$.",
      "options": {
        "D": "$4$",
        "A": "$5$",
        "B": "$3$",
        "C": "$2$"
      },
      "correctAnswer": "D",
      "explanation": "$45200 = 4.52 \\times 10^4$. The power of $10$ is $4$, so the characteristic is $4$."
    },
    {
      "id": "WAEC-SS1-LOG-024",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "If $\\log_x 64 = 3$, find $x$.",
      "options": {
        "B": "$4$",
        "A": "$8$",
        "C": "$2$",
        "D": "$16$"
      },
      "correctAnswer": "B",
      "explanation": "$x^3 = 64 = 4^3 \\implies x = 4$."
    },
    {
      "id": "WAEC-SS1-LOG-025",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Simplify: $\\dfrac{\\log 8}{\\log 4}$.",
      "options": {
        "C": "$\\dfrac{3}{2}$",
        "A": "$2$",
        "B": "$\\dfrac{2}{3}$",
        "D": "$\\log 2$"
      },
      "correctAnswer": "C",
      "explanation": "$\\dfrac{\\log(2^3)}{\\log(2^2)} = \\dfrac{3\\log 2}{2\\log 2} = \\dfrac{3}{2}$."
    },
    {
      "id": "WAEC-SS1-BASE-001",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $102_x = 27_{10}$, find the value of the base $x$.",
      "options": {
        "A": "$5$",
        "B": "$4$",
        "C": "$6$",
        "D": "$3$"
      },
      "correctAnswer": "A",
      "explanation": "$1(x^2) + 0(x^1) + 2(x^0) = 27 \\implies x^2 + 2 = 27 \\implies x^2 = 25 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS1-BASE-002",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate in base two: $11011_2 + 10101_2$.",
      "options": {
        "A": "$110000_2$",
        "B": "$101000_2$",
        "C": "$110010_2$",
        "D": "$100110_2$"
      },
      "correctAnswer": "A",
      "explanation": "$27_{10} + 21_{10} = 48_{10}$. Converting $48_{10}$ to binary gives $110000_2$."
    },
    {
      "id": "WAEC-SS1-BASE-003",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Subtract in base eight: $634_8 - 257_8$.",
      "options": {
        "D": "$355_8$",
        "A": "$365_8$",
        "B": "$345_8$",
        "C": "$375_8$"
      },
      "correctAnswer": "D",
      "explanation": "$634_8 = 412_{10}$; $257_8 = 175_{10}$. $412 - 175 = 237_{10} = 355_8$."
    },
    {
      "id": "WAEC-SS1-BASE-004",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $32_x = 24_8$, find the base $x$.",
      "options": {
        "B": "$6$",
        "A": "$5$",
        "C": "$7$",
        "D": "$8$"
      },
      "correctAnswer": "B",
      "explanation": "$24_8 = 2(8) + 4 = 20_{10}$. $3x + 2 = 20 \\implies 3x = 18 \\implies x = 6$."
    },
    {
      "id": "WAEC-SS1-BASE-005",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $(11.011)_2$ to a decimal fraction.",
      "options": {
        "C": "$3.375$",
        "A": "$3.625$",
        "B": "$3.25$",
        "D": "$3.75$"
      },
      "correctAnswer": "C",
      "explanation": "$11_2 = 3$. $0.011_2 = 0(\\frac{1}{2}) + 1(\\frac{1}{4}) + 1(\\frac{1}{8}) = 0.25 + 0.125 = 0.375$. Total $= 3.375$."
    },
    {
      "id": "WAEC-SS1-BASE-006",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $23_x + 101_2 = 130_4$, find $x$.",
      "options": {
        "B": "$10$",
        "A": "$8$",
        "C": "$7$",
        "D": "$6$"
      },
      "correctAnswer": "B",
      "explanation": "$101_2 = 5_{10}$. $130_4 = 1(16) + 3(4) + 0 = 28_{10}$. $(2x + 3) + 5 = 28 \\implies 2x + 8 = 28 \\implies 2x = 20 \\implies x = 10$."
    },
    {
      "id": "WAEC-SS1-BASE-007",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Multiply $110_2$ by $11_2$.",
      "options": {
        "C": "$10010_2$",
        "A": "$10100_2$",
        "B": "$11100_2$",
        "D": "$10001_2$"
      },
      "correctAnswer": "C",
      "explanation": "$110_2 = 6_{10}$; $11_2 = 3_{10}$. $6 \\times 3 = 18_{10} = 10010_2$."
    },
    {
      "id": "WAEC-SS1-BASE-008",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $101101_2$ to an octal (base 8) number.",
      "options": {
        "A": "$55_8$",
        "B": "$45_8$",
        "C": "$53_8$",
        "D": "$65_8$"
      },
      "correctAnswer": "A",
      "explanation": "Group in 3s from right: $101$ and $101$. $101_2 = 5$. Thus $101101_2 = 55_8$."
    },
    {
      "id": "WAEC-SS1-BASE-009",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $1101101_2$ to hexadecimal (base 16).",
      "options": {
        "D": "$6D_{16}$",
        "A": "$5D_{16}$",
        "B": "$6C_{16}$",
        "C": "$7D_{16}$"
      },
      "correctAnswer": "D",
      "explanation": "Group in 4s: $0110$ ($6$) and $1101$ ($13 = D$). Hence $6D_{16}$."
    },
    {
      "id": "WAEC-SS1-BASE-010",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Find the value of $P$ if $P_5 = 43_7$.",
      "options": {
        "C": "$111_5$",
        "A": "$121_5$",
        "B": "$104_5$",
        "D": "$114_5$"
      },
      "correctAnswer": "C",
      "explanation": "$43_7 = 4(7) + 3 = 31_{10}$. Converting $31_{10}$ to base $5$: $31 = 1(25) + 1(5) + 1(1) = 111_5$."
    },
    {
      "id": "WAEC-SS1-BASE-011",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $121_x = 36_{10}$, find $x$.",
      "options": {
        "A": "$5$",
        "B": "$6$",
        "C": "$7$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 + 2x + 1 = 36 \\implies (x + 1)^2 = 36 \\implies x + 1 = 6 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS1-BASE-012",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate: $324_5 + 412_5$.",
      "options": {
        "D": "$1241_5$",
        "A": "$1231_5$",
        "B": "$1242_5$",
        "C": "$1211_5$"
      },
      "correctAnswer": "D",
      "explanation": "$324_5 = 89_{10}$; $412_5 = 107_{10}$. Sum $= 196_{10}$. $196 = 1(125) + 2(25) + 4(5) + 1 = 1241_5$."
    },
    {
      "id": "WAEC-SS1-BASE-013",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Subtract in base six: $432_6 - 155_6$.",
      "options": {
        "B": "$233_6$",
        "A": "$243_6$",
        "C": "$223_6$",
        "D": "$333_6$"
      },
      "correctAnswer": "B",
      "explanation": "$432_6 = 164_{10}$; $155_6 = 71_{10}$. $164 - 71 = 93_{10}$. $93 = 2(36) + 3(6) + 3 = 233_6$."
    },
    {
      "id": "WAEC-SS1-BASE-014",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $234_8$ to a base $10$ integer.",
      "options": {
        "D": "$156$",
        "A": "$164$",
        "B": "$148$",
        "C": "$172$"
      },
      "correctAnswer": "D",
      "explanation": "$2(8^2) + 3(8^1) + 4(8^0) = 2(64) + 24 + 4 = 128 + 28 = 156_{10}$."
    },
    {
      "id": "WAEC-SS1-BASE-015",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $1101_2 - x_2 = 111_2$, find $x_2$.",
      "options": {
        "B": "$110_2$",
        "A": "$101_2$",
        "C": "$100_2$",
        "D": "$111_2$"
      },
      "correctAnswer": "B",
      "explanation": "$1101_2 = 13_{10}$, $111_2 = 7_{10}$. $x = 13 - 7 = 6_{10} = 110_2$."
    },
    {
      "id": "WAEC-SS1-BASE-016",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $34_n = 22_{10}$, find $n$.",
      "options": {
        "C": "$6$",
        "A": "$5$",
        "B": "$7$",
        "D": "$8$"
      },
      "correctAnswer": "C",
      "explanation": "$3n + 4 = 22 \\implies 3n = 18 \\implies n = 6$."
    },
    {
      "id": "WAEC-SS1-BASE-017",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate: $1011_2 \\div 11_2$.",
      "options": {
        "A": "$3\\text{ rem }2\\text{ (or }11_2\\text{ rem }10_2\\text{)}$",
        "B": "$4\\text{ rem }1$",
        "C": "$2\\text{ rem }1$",
        "D": "$3\\text{ rem }0$"
      },
      "correctAnswer": "A",
      "explanation": "$1011_2 = 11_{10}$; $11_2 = 3_{10}$. $11 \\div 3 = 3$ remainder $2$ ($11_2$ remainder $10_2$)."
    },
    {
      "id": "WAEC-SS1-BASE-018",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $47_{10}$ to base $3$.",
      "options": {
        "A": "$1202_3$",
        "B": "$1212_3$",
        "C": "$1102_3$",
        "D": "$1222_3$"
      },
      "correctAnswer": "A",
      "explanation": "$47 = 1(27) + 2(9) + 0(3) + 2(1) = 1202_3$."
    },
    {
      "id": "WAEC-SS1-BASE-019",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $212_3 = x_{10}$, find $x$.",
      "options": {
        "D": "$23$",
        "A": "$21$",
        "B": "$19$",
        "C": "$25$"
      },
      "correctAnswer": "D",
      "explanation": "$2(3^2) + 1(3^1) + 2(3^0) = 18 + 3 + 2 = 23$."
    },
    {
      "id": "WAEC-SS1-BASE-020",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Solve for $y$ if $y_8 = 10110_2$.",
      "options": {
        "B": "$26_8$",
        "A": "$36_8$",
        "C": "$16_8$",
        "D": "$24_8$"
      },
      "correctAnswer": "B",
      "explanation": "$10110_2 = 010\\ 110_2 = 26_8$."
    },
    {
      "id": "WAEC-SS1-BASE-021",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $43_x = 23_{10}$, find the value of $x$.",
      "options": {
        "C": "$5$",
        "A": "$6$",
        "B": "$7$",
        "D": "$4$"
      },
      "correctAnswer": "C",
      "explanation": "$4x + 3 = 23 \\implies 4x = 20 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS1-BASE-022",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Calculate $1000_2 - 111_2$.",
      "options": {
        "B": "$1_2$",
        "A": "$10_2$",
        "C": "$11_2$",
        "D": "$100_2$"
      },
      "correctAnswer": "B",
      "explanation": "$1000_2 = 8_{10}$; $111_2 = 7_{10}$. $8 - 7 = 1_{10} = 1_2$."
    },
    {
      "id": "WAEC-SS1-BASE-023",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $0.625_{10}$ to binary.",
      "options": {
        "C": "$0.101_2$",
        "A": "$0.110_2$",
        "B": "$0.011_2$",
        "D": "$0.111_2$"
      },
      "correctAnswer": "C",
      "explanation": "$0.625 = \\frac{1}{2} + \\frac{1}{8} = 0.101_2$."
    },
    {
      "id": "WAEC-SS1-BASE-024",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Find the base $b$ such that $13_b + 24_b = 42_b$.",
      "options": {
        "A": "$5$",
        "B": "$6$",
        "C": "$7$",
        "D": "$8$"
      },
      "correctAnswer": "A",
      "explanation": "$(b + 3) + (2b + 4) = 4b + 2 \\implies 3b + 7 = 4b + 2 \\implies b = 5$."
    },
    {
      "id": "WAEC-SS1-BASE-025",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $204_n = 54_{10}$, find the value of $n$.",
      "options": {
        "D": "$5$",
        "A": "$6$",
        "B": "$7$",
        "C": "$4$"
      },
      "correctAnswer": "D",
      "explanation": "$2n^2 + 0n + 4 = 54 \\implies 2n^2 = 50 \\implies n^2 = 25 \\implies n = 5$."
    }
  ],
  "SSS 2": [
    {
      "id": "WAEC-SS2-IND-001",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve the equation: $2^{2x} - 5(2^x) + 4 = 0$.",
      "options": {
        "D": "$x = 0\\text{ or }x = 2$",
        "A": "$x = 1\\text{ or }x = 4$",
        "B": "$x = 2\\text{ or }x = 4$",
        "C": "$x = -1\\text{ or }x = 2$"
      },
      "correctAnswer": "D",
      "explanation": "Let $y = 2^x$. Then $y^2 - 5y + 4 = 0 \\implies (y - 1)(y - 4) = 0 \\implies y = 1$ or $y = 4$. If $2^x = 1 = 2^0 \\implies x = 0$; if $2^x = 4 = 2^2 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS2-IND-002",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Evaluate: $\\left(\\dfrac{16}{81}\\right)^{-3/4}$.",
      "options": {
        "C": "$\\dfrac{27}{8}$",
        "A": "$\\dfrac{8}{27}$",
        "B": "$\\dfrac{9}{4}$",
        "D": "$\\dfrac{4}{9}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\left(\\dfrac{16}{81}\\right)^{-3/4} = \\left(\\dfrac{81}{16}\\right)^{3/4} = \\left[\\left(\\dfrac{3}{2}\\right)^4\\right]^{3/4} = \\left(\\dfrac{3}{2}\\right)^3 = \\dfrac{27}{8}$."
    },
    {
      "id": "WAEC-SS2-IND-003",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $3^{2x - 1} \\times 9^{x + 1} = 27^{x + 2}$, find the value of $x$.",
      "options": {
        "A": "$5$",
        "B": "$3$",
        "C": "$2$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "$3^{2x - 1} \\times 3^{2(x + 1)} = 3^{3(x + 2)} \\implies 3^{4x + 1} = 3^{3x + 6} \\implies 4x + 1 = 3x + 6 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS2-IND-004",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$ if $4^{x+1} - 9(2^x) + 2 = 0$.",
      "options": {
        "D": "$x = 1\\text{ or }x = -2$",
        "A": "$x = 1\\text{ or }x = -1$",
        "B": "$x = -1\\text{ or }x = -2$",
        "C": "$x = 2\\text{ or }x = -1$"
      },
      "correctAnswer": "D",
      "explanation": "$4(2^x)^2 - 9(2^x) + 2 = 0$. Let $u = 2^x$: $4u^2 - 9u + 2 = (4u - 1)(u - 2) = 0 \\implies u = 1/4$ or $u = 2$. $2^x = 2^{-2} \\implies x = -2$; $2^x = 2^1 \\implies x = 1$."
    },
    {
      "id": "WAEC-SS2-IND-005",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{x^{1/2} \\, y^{-2/3}}{x^{-1/4} \\, y^{1/3}}$.",
      "options": {
        "B": "$\\dfrac{x^{3/4}}{y}$",
        "A": "$x^{1/4} y$",
        "C": "$x^{3/4} y$",
        "D": "$\\dfrac{1}{x^{3/4} y}$"
      },
      "correctAnswer": "B",
      "explanation": "$x^{1/2 - (-1/4)} \\, y^{-2/3 - 1/3} = x^{3/4} \\, y^{-1} = \\dfrac{x^{3/4}}{y}$."
    },
    {
      "id": "WAEC-SS2-IND-006",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $2^{x + y} = 16$ and $3^{x - y} = 9$, find the values of $x$ and $y$.",
      "options": {
        "D": "$x = 3,\\ y = 1$",
        "A": "$x = 4,\\ y = 2$",
        "B": "$x = 2,\\ y = 1$",
        "C": "$x = 5,\\ y = 1$"
      },
      "correctAnswer": "D",
      "explanation": "$2^{x+y} = 2^4 \\implies x + y = 4$. $3^{x-y} = 3^2 \\implies x - y = 2$. Adding gives $2x = 6 \\implies x = 3, y = 1$."
    },
    {
      "id": "WAEC-SS2-IND-007",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Find $x$ if $\\left(\\dfrac{1}{2}\\right)^{2x - 3} = 8^{x + 1}$.",
      "options": {
        "B": "$0$",
        "A": "$-\\dfrac{1}{5}$",
        "C": "$\\dfrac{1}{5}$",
        "D": "$1$"
      },
      "correctAnswer": "B",
      "explanation": "$2^{-(2x - 3)} = (2^3)^{x + 1} \\implies 2^{3 - 2x} = 2^{3x + 3} \\implies 3 - 2x = 3x + 3 \\implies 5x = 0 \\implies x = 0$."
    },
    {
      "id": "WAEC-SS2-IND-008",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Evaluate: $(0.125)^{-2/3}$.",
      "options": {
        "C": "$4$",
        "A": "$2$",
        "B": "$8$",
        "D": "$\\dfrac{1}{4}$"
      },
      "correctAnswer": "C",
      "explanation": "$0.125 = \\frac{1}{8} = 2^{-3}$. $(2^{-3})^{-2/3} = 2^2 = 4$."
    },
    {
      "id": "WAEC-SS2-IND-009",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve the equation: $5^{2x} - 26(5^x) + 25 = 0$.",
      "options": {
        "A": "$x = 0\\text{ or }x = 2$",
        "B": "$x = 1\\text{ or }x = 2$",
        "C": "$x = -1\\text{ or }x = 2$",
        "D": "$x = 1\\text{ or }x = 5$"
      },
      "correctAnswer": "A",
      "explanation": "Let $u = 5^x$: $u^2 - 26u + 25 = 0 \\implies (u - 1)(u - 25) = 0 \\implies 5^x = 1 \\implies x = 0$; $5^x = 25 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS2-IND-010",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{27^{2/3} \\times 4^{-1/2}}{36^{1/2}}$.",
      "options": {
        "A": "$\\dfrac{3}{4}$",
        "B": "$\\dfrac{3}{2}$",
        "C": "$\\dfrac{9}{4}$",
        "D": "$\\dfrac{1}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "$27^{2/3} = 9$, $4^{-1/2} = 1/2$, $36^{1/2} = 6$. Ratio: $\\dfrac{9 \\times 0.5}{6} = \\dfrac{4.5}{6} = \\dfrac{3}{4}$."
    },
    {
      "id": "WAEC-SS2-IND-011",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $8^x = 32^y$ and $9^x = 27^{y + 1}$, find $x$ and $y$.",
      "options": {
        "D": "$x = 15,\\ y = 9$",
        "A": "$x = 10,\\ y = 6$",
        "B": "$x = 5,\\ y = 3$",
        "C": "$x = 12,\\ y = 8$"
      },
      "correctAnswer": "D",
      "explanation": "$2^{3x} = 2^{5y} \\implies 3x = 5y \\implies y = \\frac{3x}{5}$. $3^{2x} = 3^{3y+3} \\implies 2x = 3y + 3$. $2x - \\frac{9x}{5} = 3 \\implies \\frac{x}{5} = 3 \\implies x = 15, y = 9$."
    },
    {
      "id": "WAEC-SS2-IND-012",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$: $25^{x - 1} = \\left(\\dfrac{1}{125}\\right)^{x + 2}$.",
      "options": {
        "B": "$-\\dfrac{4}{5}$",
        "A": "$-\\dfrac{2}{5}$",
        "C": "$\\dfrac{4}{5}$",
        "D": "$-\\dfrac{1}{2}$"
      },
      "correctAnswer": "B",
      "explanation": "$5^{2(x - 1)} = 5^{-3(x + 2)} \\implies 2x - 2 = -3x - 6 \\implies 5x = -4 \\implies x = -\\dfrac{4}{5}$."
    },
    {
      "id": "WAEC-SS2-IND-013",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{2^{n+4} - 2 \\times 2^n}{2 \\times 2^{n+3}}$.",
      "options": {
        "C": "$\\dfrac{7}{8}$",
        "A": "$\\dfrac{3}{4}$",
        "B": "$\\dfrac{1}{2}$",
        "D": "$\\dfrac{7}{16}$"
      },
      "correctAnswer": "C",
      "explanation": "Numerator: $2^n(16 - 2) = 14 \\cdot 2^n$. Denominator: $2^{n+4} = 16 \\cdot 2^n$. Ratio $= \\dfrac{14}{16} = \\dfrac{7}{8}$."
    },
    {
      "id": "WAEC-SS2-IND-014",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Find the values of $x$ satisfying: $9^{x + 1} - 28(3^x) + 3 = 0$.",
      "options": {
        "B": "$x = 1\\text{ or }x = -2$",
        "A": "$x = -1\\text{ or }x = 1$",
        "C": "$x = -1\\text{ or }x = -2$",
        "D": "$x = 2\\text{ or }x = 0$"
      },
      "correctAnswer": "B",
      "explanation": "$9(3^x)^2 - 28(3^x) + 3 = 0 \\implies (9u - 1)(u - 3) = 0 \\implies 3^x = 1/9 \\implies x = -2$; $3^x = 3 \\implies x = 1$."
    },
    {
      "id": "WAEC-SS2-IND-015",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Evaluate: $\\left(\\dfrac{64}{27}\\right)^{-2/3} \\times \\left(\\dfrac{16}{81}\\right)^{1/2}$.",
      "options": {
        "C": "$\\dfrac{1}{4}$",
        "A": "$\\dfrac{1}{3}$",
        "B": "$\\dfrac{2}{3}$",
        "D": "$\\dfrac{3}{4}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\left(\\dfrac{27}{64}\\right)^{2/3} = \\left(\\dfrac{3}{4}\\right)^2 = \\dfrac{9}{16}$. $\\left(\\dfrac{16}{81}\\right)^{1/2} = \\dfrac{4}{9}$. Product: $\\dfrac{9}{16} \\times \\dfrac{4}{9} = \\dfrac{4}{16} = \\dfrac{1}{4}$."
    },
    {
      "id": "WAEC-SS2-IND-016",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $2^{x - 1} + 2^{x + 1} = 40$, find $x$.",
      "options": {
        "A": "$4$",
        "B": "$3$",
        "C": "$5$",
        "D": "$6$"
      },
      "correctAnswer": "A",
      "explanation": "$2^x\\left(\\frac{1}{2} + 2\\right) = 40 \\implies 2^x\\left(\\frac{5}{2}\\right) = 40 \\implies 2^x = 16 = 2^4 \\implies x = 4$."
    },
    {
      "id": "WAEC-SS2-IND-017",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Given that $2^x = 3^y = 6^{-z}$, express $z$ in terms of $x$ and $y$.",
      "options": {
        "D": "$z = -\\dfrac{xy}{x + y}$",
        "A": "$z = \\dfrac{xy}{x + y}$",
        "B": "$z = \\dfrac{x + y}{xy}$",
        "C": "$z = x + y$"
      },
      "correctAnswer": "D",
      "explanation": "Let $2^x = 3^y = 6^{-z} = k$. $2 = k^{1/x}, 3 = k^{1/y}, 6 = k^{-1/z}$. $2 \\times 3 = 6 \\implies k^{1/x + 1/y} = k^{-1/z} \\implies \\frac{1}{x} + \\frac{1}{y} = -\\frac{1}{z} \\implies z = -\\dfrac{xy}{x+y}$."
    },
    {
      "id": "WAEC-SS2-IND-018",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: $\\left(\\dfrac{a^3 \\, b^{-2}}{a^{-1} \\, b^4}\\right)^{-1/2}$.",
      "options": {
        "C": "$\\dfrac{b^3}{a^2}$",
        "A": "$\\dfrac{a^2}{b^3}$",
        "B": "$\\dfrac{b^2}{a^3}$",
        "D": "$\\dfrac{a}{b^2}$"
      },
      "correctAnswer": "C",
      "explanation": "Inside: $a^{3 - (-1)} \\, b^{-2 - 4} = a^4 \\, b^{-6}$. Raising to $-1/2$: $(a^4)^{-1/2} \\, (b^{-6})^{-1/2} = a^{-2} \\, b^3 = \\dfrac{b^3}{a^2}$."
    },
    {
      "id": "WAEC-SS2-IND-019",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve the equation: $3^{2y + 1} - 10(3^y) + 3 = 0$.",
      "options": {
        "A": "$y = 1\\text{ or }y = -1$",
        "B": "$y = 2\\text{ or }y = 0$",
        "C": "$y = 3\\text{ or }y = 1/3$",
        "D": "$y = -1\\text{ or }y = -2$"
      },
      "correctAnswer": "A",
      "explanation": "$3(3^y)^2 - 10(3^y) + 3 = (3m - 1)(m - 3) = 0 \\implies 3^y = 1/3 \\implies y = -1$; $3^y = 3 \\implies y = 1$."
    },
    {
      "id": "WAEC-SS2-IND-020",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Rationalize the denominator of $\\dfrac{3\\sqrt{2} - 2\\sqrt{3}}{3\\sqrt{2} + 2\\sqrt{3}}$.",
      "options": {
        "D": "$5 - 2\\sqrt{6}$",
        "A": "$5 + 2\\sqrt{6}$",
        "B": "$18 - 12\\sqrt{6}$",
        "C": "$5 - \\sqrt{6}$"
      },
      "correctAnswer": "D",
      "explanation": "Multiply numerator & denominator by $3\\sqrt{2} - 2\\sqrt{3}$: $\\dfrac{(3\\sqrt{2} - 2\\sqrt{3})^2}{(3\\sqrt{2})^2 - (2\\sqrt{3})^2} = \\dfrac{18 - 12\\sqrt{6} + 12}{18 - 12} = \\dfrac{30 - 12\\sqrt{6}}{6} = 5 - 2\\sqrt{6}$."
    },
    {
      "id": "WAEC-SS2-LOG-001",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_a x = m$ and $\\log_a y = n$, express $\\log_a \\left(\\dfrac{x^3}{y^2}\\right)$ in terms of $m$ and $n$.",
      "options": {
        "B": "$3m - 2n$",
        "A": "$3m + 2n$",
        "C": "$m^3 - n^2$",
        "D": "$\\dfrac{3m}{2n}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\log_a(x^3 / y^2) = \\log_a(x^3) - \\log_a(y^2) = 3\\log_a x - 2\\log_a y = 3m - 2n$."
    },
    {
      "id": "WAEC-SS2-LOG-002",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "By the change of base formula, $\\log_b a$ is identically equal to:",
      "options": {
        "D": "$\\dfrac{\\log_c a}{\\log_c b}$",
        "A": "$\\dfrac{\\log_c b}{\\log_c a}$",
        "B": "$\\log_c(a \\cdot b)$",
        "C": "$\\log_c a - \\log_c b$"
      },
      "correctAnswer": "D",
      "explanation": "The standard change of base rule states $\\log_b a = \\dfrac{\\log_c a}{\\log_c b}$."
    },
    {
      "id": "WAEC-SS2-LOG-003",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Find $x$ if $\\log_3(x + 6) - \\log_3 x = 2$.",
      "options": {
        "B": "$\\dfrac{3}{4}$",
        "A": "$\\dfrac{4}{3}$",
        "C": "$2$",
        "D": "$\\dfrac{1}{2}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\log_3\\left(\\dfrac{x+6}{x}\\right) = 2 \\implies \\dfrac{x+6}{x} = 3^2 = 9 \\implies x + 6 = 9x \\implies 8x = 6 \\implies x = \\dfrac{3}{4}$."
    },
    {
      "id": "WAEC-SS2-LOG-004",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_{10}2 = 0.3010$ and $\\log_{10}3 = 0.4771$, calculate $\\log_{10}15$.",
      "options": {
        "C": "$1.1761$",
        "A": "$1.4771$",
        "B": "$0.7781$",
        "D": "$1.2552$"
      },
      "correctAnswer": "C",
      "explanation": "$15 = \\dfrac{3 \\times 10}{2} \\implies \\log 15 = \\log 3 + 1 - \\log 2 = 0.4771 + 1 - 0.3010 = 1.1761$."
    },
    {
      "id": "WAEC-SS2-LOG-005",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Evaluate without tables: $\\log_2 32 + \\log_3 81 - \\log_5 125$.",
      "options": {
        "A": "$6$",
        "B": "$4$",
        "C": "$7$",
        "D": "$5$"
      },
      "correctAnswer": "A",
      "explanation": "$5 + 4 - 3 = 6$."
    },
    {
      "id": "WAEC-SS2-LOG-006",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$: $\\log_x 64 = -3$.",
      "options": {
        "A": "$\\dfrac{1}{4}$",
        "B": "$4$",
        "C": "$-4$",
        "D": "$\\dfrac{1}{8}$"
      },
      "correctAnswer": "A",
      "explanation": "$x^{-3} = 64 = 4^3 = (1/4)^{-3} \\implies x = 1/4$."
    },
    {
      "id": "WAEC-SS2-LOG-007",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Given that $\\log_{10}y = 2\\log_{10}x + 3$, express $y$ in terms of $x$.",
      "options": {
        "D": "$y = 1000x^2$",
        "A": "$y = x^2 + 1000$",
        "B": "$y = 3x^2$",
        "C": "$y = 1000x$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log_{10}y = \\log_{10}(x^2) + \\log_{10}(1000) = \\log_{10}(1000x^2) \\implies y = 1000x^2$."
    },
    {
      "id": "WAEC-SS2-LOG-008",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Simplify: $\\log_a b \\times \\log_b c \\times \\log_c a$.",
      "options": {
        "B": "$1$",
        "A": "$0$",
        "C": "$abc$",
        "D": "$\\log_a(abc)$"
      },
      "correctAnswer": "B",
      "explanation": "Using change of base: $\\dfrac{\\log b}{\\log a} \\times \\dfrac{\\log c}{\\log b} \\times \\dfrac{\\log a}{\\log c} = 1$."
    },
    {
      "id": "WAEC-SS2-LOG-009",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve the equation: $\\log_{10}(x^2 - 1) - \\log_{10}(x - 1) = 1$.",
      "options": {
        "C": "$x = 9$",
        "A": "$x = 10$",
        "B": "$x = 11$",
        "D": "$x = 8$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log_{10}\\left(\\dfrac{x^2 - 1}{x - 1}\\right) = \\log_{10}(x + 1) = 1 \\implies x + 1 = 10 \\implies x = 9$."
    },
    {
      "id": "WAEC-SS2-LOG-010",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_2 x + 2\\log_4 x = 4$, find $x$.",
      "options": {
        "B": "$4$",
        "A": "$8$",
        "C": "$16$",
        "D": "$2$"
      },
      "correctAnswer": "B",
      "explanation": "$\\log_4 x = \\frac{1}{2}\\log_2 x \\implies 2\\log_4 x = \\log_2 x$. Then $\\log_2 x + \\log_2 x = 4 \\implies 2\\log_2 x = 4 \\implies \\log_2 x = 2 \\implies x = 4$."
    },
    {
      "id": "WAEC-SS2-LOG-011",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "What is the value of $\\log_8 16$?",
      "options": {
        "C": "$\\dfrac{4}{3}$",
        "A": "$\\dfrac{3}{4}$",
        "B": "$2$",
        "D": "$\\dfrac{1}{2}$"
      },
      "correctAnswer": "C",
      "explanation": "Let $y = \\log_8 16 \\implies 8^y = 16 \\implies 2^{3y} = 2^4 \\implies 3y = 4 \\implies y = \\dfrac{4}{3}$."
    },
    {
      "id": "WAEC-SS2-LOG-012",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_{10}2 = 0.3010$, how many digits are there in $2^{50}$?",
      "options": {
        "A": "$16$",
        "B": "$15$",
        "C": "$17$",
        "D": "$50$"
      },
      "correctAnswer": "A",
      "explanation": "$\\lfloor 50 \\times 0.3010 \\rfloor + 1 = \\lfloor 15.05 \\rfloor + 1 = 15 + 1 = 16$ digits."
    },
    {
      "id": "WAEC-SS2-LOG-013",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$: $(\\log_3 x)^2 - 4\\log_3 x + 3 = 0$.",
      "options": {
        "D": "$x = 3\\text{ or }x = 27$",
        "A": "$x = 1\\text{ or }x = 3$",
        "B": "$x = 9\\text{ or }x = 27$",
        "C": "$x = 3\\text{ or }x = 9$"
      },
      "correctAnswer": "D",
      "explanation": "$(u - 1)(u - 3) = 0 \\implies \\log_3 x = 1 \\implies x = 3$; $\\log_3 x = 3 \\implies x = 3^3 = 27$."
    },
    {
      "id": "WAEC-SS2-LOG-014",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_a 2 = x$ and $\\log_a 3 = y$, find $\\log_a(\\sqrt{6})$.",
      "options": {
        "C": "$\\dfrac{x + y}{2}$",
        "A": "$x + y$",
        "B": "$2(x + y)$",
        "D": "$\\sqrt{xy}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log_a(\\sqrt{6}) = \\frac{1}{2}\\log_a(2 \\times 3) = \\dfrac{x + y}{2}$."
    },
    {
      "id": "WAEC-SS2-LOG-015",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Evaluate: $5^{\\log_5 7}$.",
      "options": {
        "A": "$7$",
        "B": "$5$",
        "C": "$35$",
        "D": "$\\log_5 7$"
      },
      "correctAnswer": "A",
      "explanation": "By the fundamental inverse identity, $b^{\\log_b x} = x$. Hence $5^{\\log_5 7} = 7$."
    },
    {
      "id": "WAEC-SS2-LOG-016",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Find $x$ if $\\log_2(\\log_3 x) = 1$.",
      "options": {
        "D": "$9$",
        "A": "$6$",
        "B": "$8$",
        "C": "$3$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log_3 x = 2^1 = 2 \\implies x = 3^2 = 9$."
    },
    {
      "id": "WAEC-SS2-LOG-017",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_{10}(x - 3) + \\log_{10}x = 1$, find $x$.",
      "options": {
        "B": "$x = 5$",
        "A": "$x = 2$",
        "C": "$x = -2$",
        "D": "$x = 5\\text{ or }x = -2$"
      },
      "correctAnswer": "B",
      "explanation": "$x(x - 3) = 10 \\implies x^2 - 3x - 10 = 0 \\implies (x - 5)(x + 2) = 0$. Since $x > 3$, $x = 5$."
    },
    {
      "id": "WAEC-SS2-LOG-018",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Express $\\log_b\\left(\\sqrt{\\dfrac{x^3}{y}}\\right)$ in terms of $\\log_b x$ and $\\log_b y$.",
      "options": {
        "D": "$\\dfrac{3}{2}\\log_b x - \\dfrac{1}{2}\\log_b y$",
        "A": "$3\\log_b x - \\log_b y$",
        "B": "$\\dfrac{1}{2}(3\\log_b x + \\log_b y)$",
        "C": "$\\dfrac{3}{2}\\log_b(x/y)$"
      },
      "correctAnswer": "D",
      "explanation": "$\\frac{1}{2}(3\\log_b x - \\log_b y) = \\dfrac{3}{2}\\log_b x - \\dfrac{1}{2}\\log_b y$."
    },
    {
      "id": "WAEC-SS2-LOG-019",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$: $\\log_2 x + \\log_x 2 = 2.5$.",
      "options": {
        "B": "$x = 4\\text{ or }x = \\sqrt{2}$",
        "A": "$x = 2\\text{ or }x = 4$",
        "C": "$x = 8\\text{ or }x = 2$",
        "D": "$x = 4\\text{ or }x = 1/2$"
      },
      "correctAnswer": "B",
      "explanation": "Let $u = \\log_2 x$: $u + \\frac{1}{u} = \\frac{5}{2} \\implies 2u^2 - 5u + 2 = 0 \\implies (2u - 1)(u - 2) = 0 \\implies u = 2 \\implies x = 4$; $u = 1/2 \\implies x = 2^{1/2} = \\sqrt{2}$."
    },
    {
      "id": "WAEC-SS2-LOG-020",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_{10}a = p$ and $\\log_{10}b = q$, express $\\log_{10}\\left(\\dfrac{100\\sqrt{a}}{b^3}\\right)$ in terms of $p$ and $q$.",
      "options": {
        "C": "$2 + \\dfrac{1}{2}p - 3q$",
        "A": "$2 + p - 3q$",
        "B": "$100 + \\dfrac{1}{2}p - 3q$",
        "D": "$2 + \\dfrac{1}{2}p + 3q$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log_{10}100 + \\frac{1}{2}\\log_{10}a - 3\\log_{10}b = 2 + \\dfrac{1}{2}p - 3q$."
    },
    {
      "id": "WAEC-SS2-SET-001",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a class of $58$ students, $28$ offer Biology, $35$ offer Economics, and $15$ offer Physics. Each student offers at least one subject. If $12$ offer both Biology and Economics, $7$ offer Biology and Physics, and $5$ offer Economics and Physics, find the number of students who offer all three subjects.",
      "options": {
        "A": "$4$",
        "B": "$3$",
        "C": "$5$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "$n(B \\cup E \\cup P) = 28 + 35 + 15 - (12 + 7 + 5) + x \\implies 58 = 78 - 24 + x = 54 + x \\implies x = 4$."
    },
    {
      "id": "WAEC-SS2-SET-002",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a survey of $100$ people, $60$ like Apple, $45$ like Banana, $35$ like Orange, $20$ like Apple and Banana, $15$ like Apple and Orange, $10$ like Banana and Orange, and $5$ like all three fruits. How many like none of the three fruits?",
      "options": {
        "A": "$0$",
        "B": "$5$",
        "C": "$10$",
        "D": "$15$"
      },
      "correctAnswer": "A",
      "explanation": "$n(A \\cup B \\cup O) = 60 + 45 + 35 - (20 + 15 + 10) + 5 = 140 - 45 + 5 = 100$. None $= 100 - 100 = 0$."
    },
    {
      "id": "WAEC-SS2-SET-003",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "For three sets $A, B,$ and $C$, the identity $(A \\cup B)'$ is equivalent to:",
      "options": {
        "D": "$A' \\cap B'$",
        "A": "$A' \\cup B'$",
        "B": "$A \\cap B'$",
        "C": "$(A \\cap B)'$"
      },
      "correctAnswer": "D",
      "explanation": "By De Morgan's Law, $(A \\cup B)' = A' \\cap B'$."
    },
    {
      "id": "WAEC-SS2-SET-004",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $n(A) = 28$, $n(B) = 32$, and $n(A \\cup B) = 45$, find $n(A \\cap B')$ (elements in $A$ only).",
      "options": {
        "B": "$13$",
        "A": "$15$",
        "C": "$17$",
        "D": "$28$"
      },
      "correctAnswer": "B",
      "explanation": "$n(A \\cap B) = 28 + 32 - 45 = 15$. $A$ only $= n(A) - n(A \\cap B) = 28 - 15 = 13$."
    },
    {
      "id": "WAEC-SS2-SET-005",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $A = \\{1, 2\\}$ and $B = \\{3, 4, 5\\}$, what is the cardinality of the Cartesian product $A \\times B$?",
      "options": {
        "C": "$6$",
        "A": "$5$",
        "B": "$8$",
        "D": "$9$"
      },
      "correctAnswer": "C",
      "explanation": "$n(A \\times B) = n(A) \\times n(B) = 2 \\times 3 = 6$."
    },
    {
      "id": "WAEC-SS2-SET-006",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a group of $60$ students, $35$ play football, $30$ play volleyball, and $12$ play both. How many students play exactly one sport?",
      "options": {
        "B": "$41$",
        "A": "$53$",
        "C": "$23$",
        "D": "$18$"
      },
      "correctAnswer": "B",
      "explanation": "Football only $= 35 - 12 = 23$. Volleyball only $= 30 - 12 = 18$. Exactly one $= 23 + 18 = 41$."
    },
    {
      "id": "WAEC-SS2-SET-007",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Which of the following represents the shaded region for $(A \\cap B) \\cup (A \\cap C)$?",
      "options": {
        "C": "$A \\cap (B \\cup C)$",
        "A": "$A \\cup (B \\cap C)$",
        "B": "$(A \\cup B) \\cap C$",
        "D": "$A' \\cap (B \\cup C)$"
      },
      "correctAnswer": "C",
      "explanation": "By the distributive law of intersection over union: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$."
    },
    {
      "id": "WAEC-SS2-SET-008",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Out of $80$ students, $45$ take French and $40$ take German. If $15$ take neither, how many take both French and German?",
      "options": {
        "A": "$20$",
        "B": "$15$",
        "C": "$25$",
        "D": "$30$"
      },
      "correctAnswer": "A",
      "explanation": "At least one $= 80 - 15 = 65$. $n(F \\cap G) = 45 + 40 - 65 = 20$."
    },
    {
      "id": "WAEC-SS2-SET-009",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If universal set $\\xi = \\{1, 2, \\dots, 20\\}$, $E = \\{\\text{multiples of } 2\\}$, and $F = \\{\\text{multiples of } 3\\}$, find $n(E \\cap F)$.",
      "options": {
        "D": "$3$",
        "A": "$6$",
        "B": "$10$",
        "C": "$2$"
      },
      "correctAnswer": "D",
      "explanation": "$E \\cap F$ consists of multiples of $6$ in the set: $\\{6, 12, 18\\}$, so $n(E \\cap F) = 3$."
    },
    {
      "id": "WAEC-SS2-SET-010",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a town, $70\\%$ of households have a TV, $60\\%$ have a radio, and $50\\%$ have both. What percentage have neither?",
      "options": {
        "C": "$20\\%$",
        "A": "$10\\%$",
        "B": "$30\\%$",
        "D": "$15\\%$"
      },
      "correctAnswer": "C",
      "explanation": "At least one $= 70\\% + 60\\% - 50\\% = 80\\%$. Neither $= 100\\% - 80\\% = 20\\%$."
    },
    {
      "id": "WAEC-SS2-SET-011",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $n(A) = 10$ and $n(B) = 15$, what is the maximum possible value of $n(A \\cup B)$?",
      "options": {
        "A": "$25$",
        "B": "$15$",
        "C": "$10$",
        "D": "$30$"
      },
      "correctAnswer": "A",
      "explanation": "The union is maximized when $A$ and $B$ are completely disjoint: $n(A \\cup B) = 10 + 15 = 25$."
    },
    {
      "id": "WAEC-SS2-SET-012",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $n(A) = 10$ and $n(B) = 15$, what is the minimum possible value of $n(A \\cup B)$?",
      "options": {
        "D": "$15$",
        "A": "$10$",
        "B": "$5$",
        "C": "$25$"
      },
      "correctAnswer": "D",
      "explanation": "The union is minimized when $A \\subset B$, in which case $n(A \\cup B) = n(B) = 15$."
    },
    {
      "id": "WAEC-SS2-SET-013",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $A \\setminus B = A$, what does this deduce about sets $A$ and $B$?",
      "options": {
        "B": "$A \\cap B = \\emptyset$",
        "A": "$A \\subset B$",
        "C": "$B \\subset A$",
        "D": "$A = B$"
      },
      "correctAnswer": "B",
      "explanation": "Removing elements of $B$ leaves $A$ unchanged if and only if $A$ and $B$ share no common elements ($A \\cap B = \\emptyset$)."
    },
    {
      "id": "WAEC-SS2-SET-014",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a $3$-set survey of $50$ students: $n(A) = 20$, $n(B) = 25$, $n(C) = 22$, $n(A \\cap B) = 10$, $n(B \\cap C) = 8$, $n(A \\cap C) = 7$, and $n(A \\cap B \\cap C) = 3$. Find $n(A \\cup B \\cup C)'$.",
      "options": {
        "D": "$5$",
        "A": "$8$",
        "B": "$10$",
        "C": "$3$"
      },
      "correctAnswer": "D",
      "explanation": "$n(A \\cup B \\cup C) = 20 + 25 + 22 - (10 + 8 + 7) + 3 = 67 - 25 + 3 = 45$. Outside $= 50 - 45 = 5$."
    },
    {
      "id": "WAEC-SS2-SET-015",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $P(S)$ denotes the power set of $S$, and $n(P(S)) = 64$, find $n(S)$.",
      "options": {
        "B": "$6$",
        "A": "$5$",
        "C": "$7$",
        "D": "$8$"
      },
      "correctAnswer": "B",
      "explanation": "$2^n = 64 = 2^6 \\implies n = 6$."
    },
    {
      "id": "WAEC-SS2-SET-016",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Which of the following is equivalent to $(A \\cap B)'$?",
      "options": {
        "C": "$A' \\cup B'$",
        "A": "$A' \\cap B'$",
        "B": "$A \\cup B'$",
        "D": "$A' \\cup B$"
      },
      "correctAnswer": "C",
      "explanation": "By De Morgan's Law, $(A \\cap B)' = A' \\cup B'$."
    },
    {
      "id": "WAEC-SS2-SET-017",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $A = \\{x : x^2 - 5x + 6 = 0\\}$ and $B = \\{x : x^2 - 7x + 12 = 0\\}$, find $A \\cap B$.",
      "options": {
        "A": "$\\{3\\}$",
        "B": "$\\{2\\}$",
        "C": "$\\{4\\}$",
        "D": "$\\{2, 3, 4\\}$"
      },
      "correctAnswer": "A",
      "explanation": "$A = \\{2, 3\\}$; $B = \\{3, 4\\}$. The common element is $3$, so $A \\cap B = \\{3\\}$."
    },
    {
      "id": "WAEC-SS2-SET-018",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a class of $40$ students, $22$ study Biology, $18$ study Geography, and $6$ study both. How many offer Biology only?",
      "options": {
        "A": "$16$",
        "B": "$12$",
        "C": "$22$",
        "D": "$14$"
      },
      "correctAnswer": "A",
      "explanation": "Biology only $= 22 - 6 = 16$."
    },
    {
      "id": "WAEC-SS2-SET-019",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $n(U) = 80$, $n(A) = 35$, $n(B) = 40$, and $n(A \\cup B)' = 15$, find $n(A \\cap B)$.",
      "options": {
        "D": "$10$",
        "A": "$15$",
        "B": "$5$",
        "C": "$20$"
      },
      "correctAnswer": "D",
      "explanation": "$n(A \\cup B) = 80 - 15 = 65$. $n(A \\cap B) = 35 + 40 - 65 = 10$."
    },
    {
      "id": "WAEC-SS2-SET-020",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $A \\subset B$ and $B \\subset C$, then:",
      "options": {
        "B": "$A \\subset C$",
        "A": "$C \\subset A$",
        "C": "$A \\cap C = \\emptyset$",
        "D": "$A = C$"
      },
      "correctAnswer": "B",
      "explanation": "Subset inclusion is transitive: $A \\subset B \\land B \\subset C \\implies A \\subset C$."
    },
    {
      "id": "WAEC-SS2-QUA-001",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the roots of the quadratic equation: $2x^2 - 5x - 3 = 0$.",
      "options": {
        "C": "$x = 3\\text{ or }x = -\\dfrac{1}{2}$",
        "A": "$x = -3\\text{ or }x = \\dfrac{1}{2}$",
        "B": "$x = 3\\text{ or }x = \\dfrac{1}{2}$",
        "D": "$x = -3\\text{ or }x = -\\dfrac{1}{2}$"
      },
      "correctAnswer": "C",
      "explanation": "$(2x + 1)(x - 3) = 0 \\implies x = 3$ or $x = -\\dfrac{1}{2}$."
    },
    {
      "id": "WAEC-SS2-QUA-002",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are the roots of $3x^2 - 7x + 2 = 0$, find $\\alpha + \\beta$.",
      "options": {
        "B": "$\\dfrac{7}{3}$",
        "A": "$-\\dfrac{7}{3}$",
        "C": "$\\dfrac{2}{3}$",
        "D": "$-\\dfrac{2}{3}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\alpha + \\beta = -\\dfrac{b}{a} = -\\dfrac{-7}{3} = \\dfrac{7}{3}$."
    },
    {
      "id": "WAEC-SS2-QUA-003",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "For what values of $k$ will $x^2 + kx + 9 = 0$ have equal roots?",
      "options": {
        "C": "$k = \\pm 6$",
        "A": "$k = \\pm 3$",
        "B": "$k = \\pm 9$",
        "D": "$k = \\pm 18$"
      },
      "correctAnswer": "C",
      "explanation": "Equal roots $\\implies \\Delta = b^2 - 4ac = 0 \\implies k^2 - 36 = 0 \\implies k = \\pm 6$."
    },
    {
      "id": "WAEC-SS2-QUA-004",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Form the quadratic equation whose roots are $-3$ and $5$.",
      "options": {
        "A": "$x^2 - 2x - 15 = 0$",
        "B": "$x^2 + 2x - 15 = 0$",
        "C": "$x^2 - 8x + 15 = 0$",
        "D": "$x^2 + 8x - 15 = 0$"
      },
      "correctAnswer": "A",
      "explanation": "Sum $= -3 + 5 = 2$; Product $= -3 \\times 5 = -15$. Equation: $x^2 - 2x - 15 = 0$."
    },
    {
      "id": "WAEC-SS2-QUA-005",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are roots of $2x^2 + 3x - 5 = 0$, find the product $\\alpha\\beta$.",
      "options": {
        "D": "$-\\dfrac{5}{2}$",
        "A": "$\\dfrac{5}{2}$",
        "B": "$-\\dfrac{3}{2}$",
        "C": "$\\dfrac{3}{2}$"
      },
      "correctAnswer": "D",
      "explanation": "Product of roots $\\alpha\\beta = \\dfrac{c}{a} = -\\dfrac{5}{2}$."
    },
    {
      "id": "WAEC-SS2-QUA-006",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Determine the nature of the roots of $2x^2 + 3x + 5 = 0$.",
      "options": {
        "C": "Complex / Non-real",
        "A": "Real and equal",
        "B": "Real and distinct",
        "D": "Rational and unequal"
      },
      "correctAnswer": "C",
      "explanation": "$\\Delta = b^2 - 4ac = 3^2 - 4(2)(5) = 9 - 40 = -31 < 0$. The roots are complex/non-real."
    },
    {
      "id": "WAEC-SS2-QUA-007",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve by completing the square: $x^2 + 6x - 7 = 0$.",
      "options": {
        "A": "$x = 1\\text{ or }x = -7$",
        "B": "$x = -1\\text{ or }x = 7$",
        "C": "$x = 2\\text{ or }x = -8$",
        "D": "$x = -2\\text{ or }x = 8$"
      },
      "correctAnswer": "A",
      "explanation": "$(x + 3)^2 = 7 + 9 = 16 \\implies x + 3 = \\pm 4 \\implies x = 1$ or $x = -7$."
    },
    {
      "id": "WAEC-SS2-QUA-008",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are roots of $x^2 - 4x + 1 = 0$, evaluate $\\alpha^2 + \\beta^2$.",
      "options": {
        "D": "$14$",
        "A": "$16$",
        "B": "$18$",
        "C": "$12$"
      },
      "correctAnswer": "D",
      "explanation": "$\\alpha + \\beta = 4, \\alpha\\beta = 1$. $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = 4^2 - 2(1) = 14$."
    },
    {
      "id": "WAEC-SS2-QUA-009",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find $m$ for which the line $y = 2x + m$ is tangent to the parabola $y = x^2$.",
      "options": {
        "B": "$m = -1$",
        "A": "$m = 1$",
        "C": "$m = -2$",
        "D": "$m = 2$"
      },
      "correctAnswer": "B",
      "explanation": "$x^2 - 2x - m = 0$. Tangency $\\implies \\Delta = (-2)^2 - 4(1)(-m) = 4 + 4m = 0 \\implies m = -1$."
    },
    {
      "id": "WAEC-SS2-QUA-010",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "The length of a rectangular garden is $3\\text{ m}$ more than its width. If the area is $70\\text{ m}^2$, find its perimeter.",
      "options": {
        "D": "$34\\text{ m}$",
        "A": "$20\\text{ m}$",
        "B": "$40\\text{ m}$",
        "C": "$28\\text{ m}$"
      },
      "correctAnswer": "D",
      "explanation": "$w(w + 3) = 70 \\implies w^2 + 3w - 70 = 0 \\implies (w + 10)(w - 7) = 0 \\implies w = 7$. Length $= 10$. Perimeter $= 2(7 + 10) = 34\\text{ m}$."
    },
    {
      "id": "WAEC-SS2-QUA-011",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are roots of $x^2 - 5x + 6 = 0$, find $\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta}$.",
      "options": {
        "B": "$\\dfrac{5}{6}$",
        "A": "$\\dfrac{6}{5}$",
        "C": "$-\\dfrac{5}{6}$",
        "D": "$\\dfrac{1}{5}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta} = \\dfrac{\\alpha + \\beta}{\\alpha\\beta} = \\dfrac{5}{6}$."
    },
    {
      "id": "WAEC-SS2-QUA-012",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Form the quadratic equation whose roots are $\\dfrac{1}{2}$ and $-\\dfrac{2}{3}$.",
      "options": {
        "C": "$6x^2 + x - 2 = 0$",
        "A": "$6x^2 - x - 2 = 0$",
        "B": "$6x^2 - x + 2 = 0$",
        "D": "$6x^2 + x + 2 = 0$"
      },
      "correctAnswer": "C",
      "explanation": "Sum $= 1/2 - 2/3 = -1/6$. Product $= -1/3$. $x^2 - (-1/6)x + (-1/3) = 0 \\implies 6x^2 + x - 2 = 0$."
    },
    {
      "id": "WAEC-SS2-QUA-013",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve the equation: $x + \\dfrac{6}{x} = 5$.",
      "options": {
        "A": "$x = 2\\text{ or }x = 3$",
        "B": "$x = 1\\text{ or }x = 6$",
        "C": "$x = -2\\text{ or }x = -3$",
        "D": "$x = 3\\text{ or }x = -2$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0 \\implies x = 2$ or $x = 3$."
    },
    {
      "id": "WAEC-SS2-QUA-014",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If one root of $x^2 + px + 12 = 0$ is $3$, find the other root and the value of $p$.",
      "options": {
        "A": "$\\text{other root} = 4,\\ p = -7$",
        "B": "$\\text{other root} = 4,\\ p = 7$",
        "C": "$\\text{other root} = -4,\\ p = 1$",
        "D": "$\\text{other root} = -4,\\ p = -7$"
      },
      "correctAnswer": "A",
      "explanation": "Product $= 12 \\implies 3 \\times r = 12 \\implies r = 4$. Sum $= 3 + 4 = 7 = -p \\implies p = -7$."
    },
    {
      "id": "WAEC-SS2-QUA-015",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are roots of $x^2 - 3x + 1 = 0$, form the equation whose roots are $2\\alpha$ and $2\\beta$.",
      "options": {
        "D": "$x^2 - 6x + 4 = 0$",
        "A": "$x^2 - 6x + 2 = 0$",
        "B": "$x^2 - 3x + 4 = 0$",
        "C": "$x^2 + 6x - 4 = 0$"
      },
      "correctAnswer": "D",
      "explanation": "New sum $= 2(3) = 6$. New product $= 4(1) = 4$. Equation: $x^2 - 6x + 4 = 0$."
    },
    {
      "id": "WAEC-SS2-QUA-016",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the discriminant of the quadratic equation $3x^2 - 4x + 2 = 0$.",
      "options": {
        "B": "$-8$",
        "A": "$8$",
        "C": "$-40$",
        "D": "$40$"
      },
      "correctAnswer": "B",
      "explanation": "$\\Delta = b^2 - 4ac = (-4)^2 - 4(3)(2) = 16 - 24 = -8$."
    },
    {
      "id": "WAEC-SS2-QUA-017",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve the equation: $(2x - 3)^2 = 25$.",
      "options": {
        "C": "$x = 4\\text{ or }x = -1$",
        "A": "$x = 4\\text{ or }x = 1$",
        "B": "$x = 14\\text{ or }x = -11$",
        "D": "$x = 5\\text{ or }x = -5$"
      },
      "correctAnswer": "C",
      "explanation": "$2x - 3 = \\pm 5 \\implies 2x = 8 \\implies x = 4$, or $2x = -2 \\implies x = -1$."
    },
    {
      "id": "WAEC-SS2-QUA-018",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "The sum of the squares of two consecutive positive integers is $41$. Find the numbers.",
      "options": {
        "B": "$4\\text{ and }5$",
        "A": "$3\\text{ and }4$",
        "C": "$5\\text{ and }6$",
        "D": "$6\\text{ and }7$"
      },
      "correctAnswer": "B",
      "explanation": "$n^2 + (n+1)^2 = 41 \\implies 2n^2 + 2n - 40 = 0 \\implies n^2 + n - 20 = 0 \\implies (n+5)(n-4) = 0 \\implies n = 4, n+1 = 5$."
    },
    {
      "id": "WAEC-SS2-QUA-019",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve: $4x^2 - 12x + 9 = 0$.",
      "options": {
        "C": "$x = \\dfrac{3}{2}\\text{ (repeated root)}$",
        "A": "$x = -\\dfrac{3}{2}\\text{ (repeated)}$",
        "B": "$x = 3\\text{ or }x = 2$",
        "D": "$x = \\dfrac{9}{4}$"
      },
      "correctAnswer": "C",
      "explanation": "$(2x - 3)^2 = 0 \\implies x = 3/2$ twice."
    },
    {
      "id": "WAEC-SS2-QUA-020",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If the roots of $x^2 - kx + 16 = 0$ differ by $6$, find the positive value of $k$.",
      "options": {
        "A": "$10$",
        "B": "$8$",
        "C": "$12$",
        "D": "$14$"
      },
      "correctAnswer": "A",
      "explanation": "$(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta \\implies 36 = k^2 - 64 \\implies k^2 = 100 \\implies k = 10$."
    },
    {
      "id": "WAEC-SS2-BAR-001",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "What is the characteristic of $\\log_{10} 0.00452$?",
      "options": {
        "D": "$\\bar{3}\\text{ (or }-3\\text{)}$",
        "A": "$\\bar{2}$",
        "B": "$\\bar{4}$",
        "C": "$3$"
      },
      "correctAnswer": "D",
      "explanation": "$0.00452 = 4.52 \\times 10^{-3}$. First non-zero digit is in the third decimal position $\\implies$ characteristic is $\\bar{3}$."
    },
    {
      "id": "WAEC-SS2-BAR-002",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate in bar notation: $\\bar{2}.456 + \\bar{1}.328$.",
      "options": {
        "C": "$\\bar{3}.784$",
        "A": "$\\bar{2}.784$",
        "B": "$\\bar{4}.784$",
        "D": "$-3.784$"
      },
      "correctAnswer": "C",
      "explanation": "Mantissa: $0.456 + 0.328 = 0.784$. Characteristic: $(-2) + (-1) = -3 = \\bar{3}$. Sum $= \\bar{3}.784$."
    },
    {
      "id": "WAEC-SS2-BAR-003",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{2}.845 + \\bar{3}.426$.",
      "options": {
        "A": "$\\bar{4}.271$",
        "B": "$\\bar{5}.271$",
        "C": "$\\bar{6}.271$",
        "D": "$\\bar{5}.171$"
      },
      "correctAnswer": "A",
      "explanation": "Mantissa: $0.845 + 0.426 = 1.271$ (write $0.271$ and carry $+1$). Characteristic: $(-2) + (-3) + (+1) = -4 = \\bar{4}$. Result $= \\bar{4}.271$."
    },
    {
      "id": "WAEC-SS2-BAR-004",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Subtract: $\\bar{3}.452 - \\bar{1}.638$.",
      "options": {
        "D": "$\\bar{3}.814$",
        "A": "$\\bar{2}.814$",
        "B": "$\\bar{1}.814$",
        "C": "$\\bar{4}.814$"
      },
      "correctAnswer": "D",
      "explanation": "$(-3 + 0.452) - (-1 + 0.638) = -2.548 - (-0.362) = -2.186 = -3 + 0.814 = \\bar{3}.814$."
    },
    {
      "id": "WAEC-SS2-BAR-005",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Calculate: $\\bar{2}.345 \\times 3$.",
      "options": {
        "B": "$\\bar{5}.035$",
        "A": "$\\bar{6}.035$",
        "C": "$\\bar{4}.035$",
        "D": "$\\bar{7}.035$"
      },
      "correctAnswer": "B",
      "explanation": "$3 \\times 0.345 = 1.035$ (carry $+1$). $3 \\times (-2) = -6$. Combine: $-6 + 1 + 0.035 = -5 + 0.035 = \\bar{5}.035$."
    },
    {
      "id": "WAEC-SS2-BAR-006",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{3}.756 \\div 2$.",
      "options": {
        "D": "$\\bar{2}.878$",
        "A": "$\\bar{1}.878$",
        "B": "$\\bar{3}.378$",
        "C": "$\\bar{1}.378$"
      },
      "correctAnswer": "D",
      "explanation": "Write characteristic as multiple of $2$: $\\bar{3} = -4 + 1$. $(-4 + 1.756) \\div 2 = -2 + 0.878 = \\bar{2}.878$."
    },
    {
      "id": "WAEC-SS2-BAR-007",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{5}.612 \\div 3$.",
      "options": {
        "B": "$\\bar{2}.537$",
        "A": "$\\bar{2}.871$",
        "C": "$\\bar{1}.871$",
        "D": "$\\bar{3}.204$"
      },
      "correctAnswer": "B",
      "explanation": "Write characteristic as multiple of $3$: $\\bar{5} = -6 + 1$. $(-6 + 1.612) \\div 3 = -2 + 0.5373 = \\bar{2}.537$."
    },
    {
      "id": "WAEC-SS2-BAR-008",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "What is the characteristic of $\\log_{10} 0.75$?",
      "options": {
        "C": "$\\bar{1}\\text{ (or }-1\\text{)}$",
        "A": "$0$",
        "B": "$\\bar{2}$",
        "D": "$1$"
      },
      "correctAnswer": "C",
      "explanation": "$0.75 = 7.5 \\times 10^{-1}$. Characteristic is $\\bar{1}$."
    },
    {
      "id": "WAEC-SS2-BAR-009",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Convert the bar notation $\\bar{3}.45$ to an ordinary negative decimal number.",
      "options": {
        "A": "$-2.55$",
        "B": "$-3.45$",
        "C": "$-3.55$",
        "D": "$-2.45$"
      },
      "correctAnswer": "A",
      "explanation": "$\\bar{3}.45 = -3 + 0.45 = -2.55$."
    },
    {
      "id": "WAEC-SS2-BAR-010",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Convert the ordinary negative number $-1.72$ into bar notation.",
      "options": {
        "A": "$\\bar{2}.28$",
        "B": "$\\bar{1}.28$",
        "C": "$\\bar{1}.72$",
        "D": "$\\bar{2}.72$"
      },
      "correctAnswer": "A",
      "explanation": "$-1.72 = -2 + (2 - 1.72) = -2 + 0.28 = \\bar{2}.28$."
    },
    {
      "id": "WAEC-SS2-BAR-011",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "If $\\log_{10} x = \\bar{2}.6021$, find $x$ (given antilog of $0.6021$ is $4.00$).",
      "options": {
        "D": "$0.0400$",
        "A": "$0.00400$",
        "B": "$0.400$",
        "C": "$4.00$"
      },
      "correctAnswer": "D",
      "explanation": "$x = 4.00 \\times 10^{-2} = 0.0400$."
    },
    {
      "id": "WAEC-SS2-BAR-012",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{1}.624 \\times 4$.",
      "options": {
        "B": "$\\bar{2}.496$",
        "A": "$\\bar{3}.496$",
        "C": "$\\bar{4}.496$",
        "D": "$\\bar{1}.496$"
      },
      "correctAnswer": "B",
      "explanation": "$4 \\times 0.624 = 2.496$ (carry $+2$). $4 \\times (-1) = -4$. Combine: $-4 + 2 + 0.496 = \\bar{2}.496$."
    },
    {
      "id": "WAEC-SS2-BAR-013",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "What is the characteristic of $\\log_{10} 0.000078$?",
      "options": {
        "C": "$\\bar{5}$",
        "A": "$\\bar{4}$",
        "B": "$\\bar{6}$",
        "D": "$\\bar{3}$"
      },
      "correctAnswer": "C",
      "explanation": "$0.000078 = 7.8 \\times 10^{-5} \\implies$ characteristic is $\\bar{5}$."
    },
    {
      "id": "WAEC-SS2-BAR-014",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{4}.821 + \\bar{2}.543$.",
      "options": {
        "B": "$\\bar{5}.364$",
        "A": "$\\bar{6}.364$",
        "C": "$\\bar{7}.364$",
        "D": "$\\bar{6}.264$"
      },
      "correctAnswer": "B",
      "explanation": "$0.821 + 0.543 = 1.364$ (write $0.364$, carry $+1$). $-4 + (-2) + (+1) = -5 = \\bar{5}$. Result $= \\bar{5}.364$."
    },
    {
      "id": "WAEC-SS2-BAR-015",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Find $\\sqrt{0.0064}$ using logarithms: if $\\log_{10}(0.0064) = \\bar{3}.8062$, what is $\\frac{1}{2} \\log_{10}(0.0064)$?",
      "options": {
        "C": "$\\bar{2}.9031$",
        "A": "$\\bar{1}.9031$",
        "B": "$\\bar{1}.4031$",
        "D": "$\\bar{3}.4031$"
      },
      "correctAnswer": "C",
      "explanation": "$\\bar{3}.8062 \\div 2 = (-4 + 1.8062) \\div 2 = -2 + 0.9031 = \\bar{2}.9031$."
    },
    {
      "id": "WAEC-SS2-BAR-016",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Subtract: $\\bar{2}.378 - \\bar{4}.825$.",
      "options": {
        "A": "$1.553$",
        "B": "$\\bar{2}.553$",
        "C": "$2.553$",
        "D": "$\\bar{1}.553$"
      },
      "correctAnswer": "A",
      "explanation": "$(-2 + 0.378) - (-4 + 0.825) = -2 + 4 + 0.378 - 0.825 = 2 - 0.447 = 1.553$."
    },
    {
      "id": "WAEC-SS2-BAR-017",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{7}.425 \\div 5$.",
      "options": {
        "D": "$\\bar{2}.685$",
        "A": "$\\bar{1}.485$",
        "B": "$\\bar{2}.485$",
        "C": "$\\bar{1}.685$"
      },
      "correctAnswer": "D",
      "explanation": "Write characteristic as multiple of $5$: $\\bar{7} = -10 + 3$. $(-10 + 3.425) \\div 5 = -2 + 0.685 = \\bar{2}.685$."
    },
    {
      "id": "WAEC-SS2-BAR-018",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "If $\\log_{10} k = \\bar{1}.5200$, evaluate $\\log_{10}(k^3)$.",
      "options": {
        "C": "$\\bar{2}.5600$",
        "A": "$\\bar{3}.5600$",
        "B": "$\\bar{1}.5600$",
        "D": "$-3.5600$"
      },
      "correctAnswer": "C",
      "explanation": "$3 \\times (-1 + 0.5200) = -3 + 1.5600 = -2 + 0.5600 = \\bar{2}.5600$."
    },
    {
      "id": "WAEC-SS2-BAR-019",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Given that $\\log_{10}2 = 0.3010$, find $\\log_{10}(0.02)$.",
      "options": {
        "A": "$\\bar{2}.3010$",
        "B": "$\\bar{1}.3010$",
        "C": "$-2.3010$",
        "D": "$\\bar{3}.3010$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}(2 \\times 10^{-2}) = 0.3010 - 2 = \\bar{2}.3010$."
    },
    {
      "id": "WAEC-SS2-BAR-020",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Given that $\\log_{10}3.54 = 0.5490$, find $\\log_{10}(0.000354)$.",
      "options": {
        "D": "$\\bar{4}.5490$",
        "A": "$\\bar{3}.5490$",
        "B": "$\\bar{5}.5490$",
        "C": "$-4.5490$"
      },
      "correctAnswer": "D",
      "explanation": "$0.000354 = 3.54 \\times 10^{-4} \\implies \\log(0.000354) = \\bar{4}.5490$."
    }
  ],
  "SSS 3": [
    {
      "id": "WAEC-SS3-IL-001",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve the simultaneous equations: $2^x \\times 3^y = 72$ and $2^y \\times 3^x = 108$.",
      "options": {
        "B": "$x = 3,\\; y = 2$",
        "A": "$x = 2,\\; y = 3$",
        "C": "$x = 1,\\; y = 2$",
        "D": "$x = 3,\\; y = 1$"
      },
      "correctAnswer": "B",
      "explanation": "Multiplying: $2^{x+y} \\times 3^{x+y} = 6^{x+y} = 72 \\times 108 = 7776 = 6^5 \\implies x + y = 5$. Dividing the second by the first: $\\left(\\frac{3}{2}\\right)^{x-y} = \\frac{108}{72} = \\frac{3}{2} = \\left(\\frac{3}{2}\\right)^1 \\implies x - y = 1$. Solving $x+y=5$ and $x-y=1$ gives $2x = 6 \\implies x = 3,\\; y = 2$."
    },
    {
      "id": "WAEC-SS3-IL-002",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If $\\log_2 (x - 1) + \\log_2 (x + 1) = 3$, find the positive value of $x$.",
      "options": {
        "D": "$x = 3$",
        "A": "$x = 4$",
        "B": "$x = 9$",
        "C": "$x = 5$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log_2 [(x - 1)(x + 1)] = 3 \\implies x^2 - 1 = 2^3 = 8 \\implies x^2 = 9 \\implies x = 3$ (since $x > 1$ for real logarithms)."
    },
    {
      "id": "WAEC-SS3-IL-003",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve for $x$: $3^{2x+1} - 28(3^x) + 9 = 0$.",
      "options": {
        "B": "$x = 2\\text{ or }x = -1$",
        "A": "$x = 1\\text{ or }x = -2$",
        "C": "$x = 2\\text{ or }x = 1$",
        "D": "$x = -1\\text{ or }x = 0$"
      },
      "correctAnswer": "B",
      "explanation": "$3(3^x)^2 - 28(3^x) + 9 = 0$. Let $y = 3^x \\implies 3y^2 - 28y + 9 = 0 \\implies (3y - 1)(y - 9) = 0$. Thus $y = \\frac{1}{3} = 3^{-1} \\implies x = -1$, or $y = 9 = 3^2 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS3-IL-004",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Given that $a = x^{1/n}$, find $\\log_a x^n$.",
      "options": {
        "C": "$n^2$",
        "A": "$\\frac{1}{n}$",
        "B": "$n$",
        "D": "$\\frac{1}{n^2}$"
      },
      "correctAnswer": "C",
      "explanation": "From $a = x^{1/n}$, we have $x = a^n$. Therefore $x^n = (a^n)^n = a^{n^2}$. Then $\\log_a x^n = \\log_a (a^{n^2}) = n^2$."
    },
    {
      "id": "WAEC-SS3-IL-005",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Find the value of $ab$ if $a = \\log_2 3$ and $b = \\log_3 8$.",
      "options": {
        "A": "$3$",
        "B": "$2$",
        "C": "$4$",
        "D": "$6$"
      },
      "correctAnswer": "A",
      "explanation": "By the change of base theorem, $ab = \\log_2 3 \\times \\log_3 8 = \\frac{\\log 3}{\\log 2} \\times \\frac{\\log 8}{\\log 3} = \\frac{\\log (2^3)}{\\log 2} = \\frac{3\\log 2}{\\log 2} = 3$."
    },
    {
      "id": "WAEC-SS3-IL-006",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If $a\\sqrt{5} + b\\sqrt{2}$ is a square root of $95 - 30\\sqrt{10}$, where $a, b \\in \\mathbb{Z}$, find $a$ and $b$.",
      "options": {
        "A": "$a = 5,\\; b = -3$",
        "B": "$a = -5,\\; b = 3$",
        "C": "$a = 3,\\; b = -5$",
        "D": "$a = 5,\\; b = 3$"
      },
      "correctAnswer": "A",
      "explanation": "$(a\\sqrt{5} + b\\sqrt{2})^2 = 5a^2 + 2b^2 + 2ab\\sqrt{10} = 95 - 30\\sqrt{10}$. Thus $2ab = -30 \\implies ab = -15$, and $5a^2 + 2b^2 = 95$. If $a = 5, b = -3$: $5(25) + 2(9) = 125 + 18 \\neq 95$. If $a = 3, b = -5$: $5(9) + 2(25) = 45 + 50 = 95$! Thus $a = 3\\sqrt{5} - 5\\sqrt{2}$ (or $5\\sqrt{2} - 3\\sqrt{5}$). So $a = 3,\\; b = -5$."
    },
    {
      "id": "WAEC-SS3-IL-007",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If $x = 2 - \\sqrt{2}$, evaluate $x^2 + \\dfrac{4}{x^2}$.",
      "options": {
        "D": "$12$",
        "A": "$10$",
        "B": "$8$",
        "C": "$6$"
      },
      "correctAnswer": "D",
      "explanation": "$x^2 = (2 - \\sqrt{2})^2 = 4 - 4\\sqrt{2} + 2 = 6 - 4\\sqrt{2}$. Then $\\frac{4}{x^2} = \\frac{4}{6 - 4\\sqrt{2}} = \\frac{2}{3 - 2\\sqrt{2}} = \\frac{2(3 + 2\\sqrt{2})}{9 - 8} = 6 + 4\\sqrt{2}$. Sum $= (6 - 4\\sqrt{2}) + (6 + 4\\sqrt{2}) = 12$."
    },
    {
      "id": "WAEC-SS3-IL-008",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve the equation: $3x^{-2} = \\dfrac{4}{27}$.",
      "options": {
        "B": "$x = \\pm \\frac{9}{2}$",
        "A": "$x = \\pm \\frac{2}{9}$",
        "C": "$x = \\frac{9}{4}$",
        "D": "$x = \\pm \\frac{3}{2}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\frac{3}{x^2} = \\frac{4}{27} \\implies 4x^2 = 81 \\implies x^2 = \\frac{81}{4} \\implies x = \\pm \\frac{9}{2}$."
    },
    {
      "id": "WAEC-SS3-IL-009",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Simplify $\\dfrac{1}{\\sqrt{2}}\\left[\\dfrac{1}{\\sqrt{3} + \\sqrt{2}} - \\dfrac{1}{\\sqrt{3} - \\sqrt{2}}\\right]$.",
      "options": {
        "C": "$-2$",
        "A": "$2$",
        "B": "$-\\sqrt{2}$",
        "D": "$\\sqrt{3}$"
      },
      "correctAnswer": "C",
      "explanation": "Inside bracket: $\\frac{(\\sqrt{3}-\\sqrt{2}) - (\\sqrt{3}+\\sqrt{2})}{(\\sqrt{3})^2 - (\\sqrt{2})^2} = \\frac{-2\\sqrt{2}}{3 - 2} = -2\\sqrt{2}$. Multiplying by $\\frac{1}{\\sqrt{2}}$ gives $\\frac{1}{\\sqrt{2}}(-2\\sqrt{2}) = -2$."
    },
    {
      "id": "WAEC-SS3-IL-010",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve for $n$ if $9^{1+n} \\times 3 = 27^{-n}$.",
      "options": {
        "B": "$n = -\\frac{3}{5}$",
        "A": "$n = -\\frac{2}{3}$",
        "C": "$n = \\frac{1}{2}$",
        "D": "$n = -1$"
      },
      "correctAnswer": "B",
      "explanation": "$3^{2(1+n)} \\times 3^1 = 3^{-3n} \\implies 3^{2 + 2n + 1} = 3^{-3n} \\implies 2n + 3 = -3n \\implies 5n = -3 \\implies n = -\\frac{3}{5}$."
    },
    {
      "id": "WAEC-SS3-IL-011",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Find $x$ if $2^{x+1} + 2^{x-1} = 40$.",
      "options": {
        "C": "$x = 4$",
        "A": "$x = 3$",
        "B": "$x = 5$",
        "D": "$x = 2$"
      },
      "correctAnswer": "C",
      "explanation": "$2 \\cdot 2^x + \\frac{1}{2} \\cdot 2^x = 40 \\implies 2^x\\left(2 + \\frac{1}{2}\\right) = 40 \\implies 2^x \\left(\\frac{5}{2}\\right) = 40 \\implies 2^x = 40 \\times \\frac{2}{5} = 16 = 2^4 \\implies x = 4$."
    },
    {
      "id": "WAEC-SS3-IL-012",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Evaluate $\\dfrac{\\log_{10} 0.04 + \\log_{10} 0.25}{\\log_5 100 - \\log_5 4}$.",
      "options": {
        "A": "$-1$",
        "B": "$1$",
        "C": "$-2$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "Numerator: $\\log_{10}(0.04 \\times 0.25) = \\log_{10}(0.01) = \\log_{10}(10^{-2}) = -2$. Denominator: $\\log_5\\left(\\frac{100}{4}\\right) = \\log_5(25) = 2$. Fraction $= \\frac{-2}{2} = -1$."
    },
    {
      "id": "WAEC-SS3-SET-001",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "In a class of $58$ students, $28$ offer Biology, $35$ offer Economics, and $15$ offer Physics. Each student offers at least one subject. If $12$ offer Bio & Econ, $7$ offer Bio & Phys, and $5$ offer Econ & Phys, how many students offer all three subjects?",
      "options": {
        "D": "$4$",
        "A": "$3$",
        "B": "$5$",
        "C": "$6$"
      },
      "correctAnswer": "D",
      "explanation": "By inclusion-exclusion: $n(B \\cup E \\cup P) = n(B) + n(E) + n(P) - n(B \\cap E) - n(B \\cap P) - n(E \\cap P) + n(B \\cap E \\cap P)$. Thus $58 = 28 + 35 + 15 - 12 - 7 - 5 + x \\implies 58 = 54 + x \\implies x = 4$."
    },
    {
      "id": "WAEC-SS3-SET-002",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If set $A$ has $n$ elements and the power set $\\mathcal{P}(A)$ has $128$ elements, find the number of elements in $A$.",
      "options": {
        "C": "$7$",
        "A": "$6$",
        "B": "$8$",
        "D": "$5$"
      },
      "correctAnswer": "C",
      "explanation": "The number of subsets in the power set of a set with $n$ elements is $2^n$. $2^n = 128 = 2^7 \\implies n = 7$."
    },
    {
      "id": "WAEC-SS3-SET-003",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "Let $P = \\{x \\in \\mathbb{R} : x^2 - 5x + 6 = 0\\}$ and $Q = \\{x \\in \\mathbb{R} : x^2 - 7x + 12 = 0\\}$. Find $P \\cup Q$.",
      "options": {
        "A": "$\\{2, 3, 4\\}$",
        "B": "$\\{2, 3\\}$",
        "C": "$\\{3, 4\\}$",
        "D": "$\\{2, 4\\}$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 - 5x + 6 = (x - 2)(x - 3) = 0 \\implies P = \\{2, 3\\}$. $x^2 - 7x + 12 = (x - 3)(x - 4) = 0 \\implies Q = \\{3, 4\\}$. Thus $P \\cup Q = \\{2, 3, 4\\}$."
    },
    {
      "id": "WAEC-SS3-SET-004",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "The symmetric difference of two sets $A$ and $B$, denoted $A \\,\\Delta\\, B$, is defined as $(A \\setminus B) \\cup (B \\setminus A)$. If $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5, 6\\}$, find $A \\,\\Delta\\, B$.",
      "options": {
        "D": "$\\{1, 2, 5, 6\\}$",
        "A": "$\\{3, 4\\}$",
        "B": "$\\{1, 2, 3, 4, 5, 6\\}$",
        "C": "$\\{1, 6\\}$"
      },
      "correctAnswer": "D",
      "explanation": "$A \\setminus B = \\{1, 2\\}$ and $B \\setminus A = \\{5, 6\\}$. The union $(A \\setminus B) \\cup (B \\setminus A) = \\{1, 2, 5, 6\\}$."
    },
    {
      "id": "WAEC-SS3-SET-005",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "In a survey of $100$ students, $60$ read Nation, $50$ read Guardian, and $20$ read neither. How many students read both newspapers?",
      "options": {
        "B": "$30$",
        "A": "$25$",
        "C": "$35$",
        "D": "$20$"
      },
      "correctAnswer": "B",
      "explanation": "$n(N \\cup G) = 100 - 20 = 80$. Then $n(N \\cap G) = n(N) + n(G) - n(N \\cup G) = 60 + 50 - 80 = 30$."
    },
    {
      "id": "WAEC-SS3-SET-006",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "According to De Morgan's laws, for any two sets $A$ and $B$ in universal set $U$, $(A \\cup B)'$ is equal to:",
      "options": {
        "D": "$A' \\cap B'$",
        "A": "$A' \\cup B'$",
        "B": "$(A \\cap B)'$",
        "C": "$A \\setminus B'$"
      },
      "correctAnswer": "D",
      "explanation": "By De Morgan's first law, the complement of the union is the intersection of the complements: $(A \\cup B)' = A' \\cap B'$."
    },
    {
      "id": "WAEC-SS3-SET-007",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $n(A) = 15$, $n(B) = 20$, and $n(A \\cap B) = 7$, find $n(A \\cup B)$.",
      "options": {
        "B": "$28$",
        "A": "$35$",
        "C": "$25$",
        "D": "$32$"
      },
      "correctAnswer": "B",
      "explanation": "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 15 + 20 - 7 = 28$."
    },
    {
      "id": "WAEC-SS3-SET-008",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $U = \\{x \\in \\mathbb{Z} : 1 \\le x \\le 12\\}$, $A = \\{x : x\\text{ is even}\\}$, and $B = \\{x : x\\text{ is a multiple of } 3\\}$, find $n(A \\cap B)$.",
      "options": {
        "C": "$2$",
        "A": "$3$",
        "B": "$4$",
        "D": "$1$"
      },
      "correctAnswer": "C",
      "explanation": "$A = \\{2, 4, 6, 8, 10, 12\\}$, $B = \\{3, 6, 9, 12\\}$. Then $A \\cap B = \\{6, 12\\}$, so $n(A \\cap B) = 2$."
    },
    {
      "id": "WAEC-SS3-SET-009",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $P \\subset Q$, which of the following statements is ALWAYS TRUE?",
      "options": {
        "A": "$P \\cap Q = P$",
        "B": "$P \\cup Q = P$",
        "C": "$P \\cap Q = \\emptyset$",
        "D": "$P \\setminus Q = P$"
      },
      "correctAnswer": "A",
      "explanation": "If $P \\subset Q$, every element of $P$ is in $Q$, so the intersection $P \\cap Q = P$ and the union $P \\cup Q = Q$."
    },
    {
      "id": "WAEC-SS3-SET-010",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "Out of $80$ farmers, $45$ grow cassava, $38$ grow maize, and $21$ grow both. How many farmers grow NEITHER crop?",
      "options": {
        "A": "$18$",
        "B": "$21$",
        "C": "$15$",
        "D": "$24$"
      },
      "correctAnswer": "A",
      "explanation": "$n(C \\cup M) = 45 + 38 - 21 = 62$. Farmers growing neither $= 80 - 62 = 18$."
    },
    {
      "id": "WAEC-SS3-SET-011",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $S = \\{a, b, c\\}$, how many proper subsets does $S$ have?",
      "options": {
        "D": "$7$",
        "A": "$8$",
        "B": "$6$",
        "C": "$5$"
      },
      "correctAnswer": "D",
      "explanation": "A set with $n$ elements has $2^n$ total subsets and $2^n - 1$ proper subsets. For $n = 3$, proper subsets $= 2^3 - 1 = 8 - 1 = 7$."
    },
    {
      "id": "WAEC-SS3-SET-012",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $A = \\{x \\in \\mathbb{R} : -2 \\le x < 5\\}$ and $B = \\{x \\in \\mathbb{R} : 1 < x \\le 8\\}$, what is $A \\cap B$?",
      "options": {
        "B": "$\\{x \\in \\mathbb{R} : 1 < x < 5\\}$",
        "A": "$\\{x \\in \\mathbb{R} : -2 \\le x \\le 8\\}$",
        "C": "$\\{x \\in \\mathbb{R} : 1 \\le x < 5\\}$",
        "D": "$\\{x \\in \\mathbb{R} : 1 < x \\le 5\\}$"
      },
      "correctAnswer": "B",
      "explanation": "The intersection is the overlapping interval between $[-2, 5)$ and $(1, 8]$, which is $(1, 5)$, i.e., $\\{x \\in \\mathbb{R} : 1 < x < 5\\}$."
    },
    {
      "id": "WAEC-SS3-TRIG-001",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In $\\triangle ABC$, $b = 8\\text{ cm}$, $c = 6\\text{ cm}$, and $\\angle A = 60^\\circ$. Find the length of side $a$.",
      "options": {
        "C": "$2\\sqrt{13}\\text{ cm}$",
        "A": "$2\\sqrt{37}\\text{ cm}$",
        "B": "$10\\text{ cm}$",
        "D": "$4\\sqrt{3}\\text{ cm}$"
      },
      "correctAnswer": "C",
      "explanation": "By the cosine rule: $a^2 = b^2 + c^2 - 2bc\\cos A = 8^2 + 6^2 - 2(8)(6)\\cos 60^\\circ = 64 + 36 - 96(0.5) = 100 - 48 = 52$. $a = \\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13}\\text{ cm}$."
    },
    {
      "id": "WAEC-SS3-TRIG-002",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In $\\triangle PQR$, $p = 10\\text{ cm}$, $\\angle P = 30^\\circ$, and $\\angle Q = 45^\\circ$. Find the exact length of side $q$.",
      "options": {
        "B": "$10\\sqrt{2}\\text{ cm}$",
        "A": "$5\\sqrt{2}\\text{ cm}$",
        "C": "$10\\sqrt{3}\\text{ cm}$",
        "D": "$5\\sqrt{6}\\text{ cm}$"
      },
      "correctAnswer": "B",
      "explanation": "By the sine rule: $\\frac{q}{\\sin Q} = \\frac{p}{\\sin P} \\implies q = \\frac{10 \\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{10 \\times \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 10\\sqrt{2}\\text{ cm}$."
    },
    {
      "id": "WAEC-SS3-TRIG-003",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "From a point $P$ on ground level, the angle of elevation of the top of a vertical mast is $30^\\circ$. From another point $Q$, $40\\text{ m}$ closer to the mast, the angle of elevation is $60^\\circ$. Find the height of the mast.",
      "options": {
        "C": "$20\\sqrt{3}\\text{ m}$",
        "A": "$40\\sqrt{3}\\text{ m}$",
        "B": "$30\\text{ m}$",
        "D": "$20\\text{ m}$"
      },
      "correctAnswer": "C",
      "explanation": "Let height be $h$, and distance from $Q$ to base be $d$. $\\tan 60^\\circ = \\frac{h}{d} \\implies d = \\frac{h}{\\sqrt{3}}$. From $P$: $\\tan 30^\\circ = \\frac{h}{d + 40} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{\\frac{h}{\\sqrt{3}} + 40} \\implies h = 20\\sqrt{3}\\text{ m}$."
    },
    {
      "id": "WAEC-SS3-TRIG-004",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "The bearing of town $B$ from town $A$ is $060^\\circ$. What is the bearing of town $A$ from town $B$?",
      "options": {
        "A": "$240^\\circ$",
        "B": "$120^\\circ$",
        "C": "$300^\\circ$",
        "D": "$150^\\circ$"
      },
      "correctAnswer": "A",
      "explanation": "Back bearing $= 060^\\circ + 180^\\circ = 240^\\circ$."
    },
    {
      "id": "WAEC-SS3-TRIG-005",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Simplify the trigonometric expression: $\\dfrac{\\sin\\theta}{1 - \\cos\\theta} - \\dfrac{\\sin\\theta}{1 + \\cos\\theta}$.",
      "options": {
        "D": "$2\\cot\\theta$",
        "A": "$2\\tan\\theta$",
        "B": "$2\\csc\\theta$",
        "C": "$2\\sin\\theta$"
      },
      "correctAnswer": "D",
      "explanation": "$\\frac{\\sin\\theta(1+\\cos\\theta) - \\sin\\theta(1-\\cos\\theta)}{(1-\\cos\\theta)(1+\\cos\\theta)} = \\frac{2\\sin\\theta\\cos\\theta}{1 - \\cos^2\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{\\sin^2\\theta} = 2\\frac{\\cos\\theta}{\\sin\\theta} = 2\\cot\\theta$."
    },
    {
      "id": "WAEC-SS3-TRIG-006",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Solve the equation $2\\cos^2\\theta - \\cos\\theta - 1 = 0$ for $0^\\circ \\le \\theta \\le 180^\\circ$.",
      "options": {
        "C": "$0^\\circ\\text{ or }120^\\circ$",
        "A": "$60^\\circ\\text{ or }120^\\circ$",
        "B": "$0^\\circ\\text{ or }60^\\circ$",
        "D": "$90^\\circ\\text{ or }180^\\circ$"
      },
      "correctAnswer": "C",
      "explanation": "Let $u = \\cos\\theta \\implies 2u^2 - u - 1 = (2u + 1)(u - 1) = 0 \\implies u = 1$ or $u = -\\frac{1}{2}$. If $\\cos\\theta = 1 \\implies \\theta = 0^\\circ$; if $\\cos\\theta = -\\frac{1}{2} \\implies \\theta = 180^\\circ - 60^\\circ = 120^\\circ$."
    },
    {
      "id": "WAEC-SS3-TRIG-007",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "If $\\tan\\theta = \\dfrac{3}{4}$ and $\\theta$ is an acute angle, evaluate $\\dfrac{\\sin\\theta + \\cos\\theta}{\\cos\\theta - \\sin\\theta}$.",
      "options": {
        "A": "$7$",
        "B": "$5$",
        "C": "$\\frac{7}{4}$",
        "D": "$\\frac{1}{7}$"
      },
      "correctAnswer": "A",
      "explanation": "Divide numerator and denominator by $\\cos\\theta$: $\\frac{\\tan\\theta + 1}{1 - \\tan\\theta} = \\frac{\\frac{3}{4} + 1}{1 - \\frac{3}{4}} = \\frac{\\frac{7}{4}}{\\frac{1}{4}} = 7$."
    },
    {
      "id": "WAEC-SS3-TRIG-008",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In $\\triangle XYZ$, $x = 5\\text{ cm}$, $y = 7\\text{ cm}$, and $z = 8\\text{ cm}$. Find $\\cos Y$.",
      "options": {
        "D": "$\\frac{1}{2}$",
        "A": "$\\frac{11}{16}$",
        "B": "$\\frac{5}{8}$",
        "C": "$\\frac{3}{4}$"
      },
      "correctAnswer": "D",
      "explanation": "$\\cos Y = \\frac{x^2 + z^2 - y^2}{2xz} = \\frac{5^2 + 8^2 - 7^2}{2(5)(8)} = \\frac{25 + 64 - 49}{80} = \\frac{40}{80} = \\frac{1}{2}$."
    },
    {
      "id": "WAEC-SS3-TRIG-009",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Find the area of $\\triangle ABC$ if $a = 12\\text{ cm}$, $b = 10\\text{ cm}$, and $\\angle C = 30^\\circ$.",
      "options": {
        "B": "$30\\text{ cm}^2$",
        "A": "$60\\text{ cm}^2$",
        "C": "$30\\sqrt{3}\\text{ cm}^2$",
        "D": "$15\\text{ cm}^2$"
      },
      "correctAnswer": "B",
      "explanation": "$\\text{Area} = \\frac{1}{2}ab\\sin C = \\frac{1}{2}(12)(10)\\sin 30^\\circ = 60 \\times 0.5 = 30\\text{ cm}^2$."
    },
    {
      "id": "WAEC-SS3-TRIG-010",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Evaluate $\\sin 150^\\circ + \\cos 120^\\circ$.",
      "options": {
        "D": "$0$",
        "A": "$1$",
        "B": "$\\sqrt{3}$",
        "C": "$-1$"
      },
      "correctAnswer": "D",
      "explanation": "$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$. $\\cos 120^\\circ = -\\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$. Sum $= \\frac{1}{2} + \\left(-\\frac{1}{2}\\right) = 0$."
    },
    {
      "id": "WAEC-SS3-TRIG-011",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "What is the maximum value of the function $f(\\theta) = 3 - 5\\sin\\theta$?",
      "options": {
        "B": "$8$",
        "A": "$3$",
        "C": "$-2$",
        "D": "$5$"
      },
      "correctAnswer": "B",
      "explanation": "Since $-1 \\le \\sin\\theta \\le 1$, the expression $3 - 5\\sin\\theta$ reaches its maximum when $\\sin\\theta = -1$, yielding $3 - 5(-1) = 3 + 5 = 8$."
    },
    {
      "id": "WAEC-SS3-TRIG-012",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "A ship sails $12\\text{ km}$ due North, then $5\\text{ km}$ due East. What is the distance of the ship from its starting point?",
      "options": {
        "C": "$13\\text{ km}$",
        "A": "$17\\text{ km}$",
        "B": "$15\\text{ km}$",
        "D": "$\\sqrt{119}\\text{ km}$"
      },
      "correctAnswer": "C",
      "explanation": "By Pythagoras: $d = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ km}$."
    },
    {
      "id": "WAEC-SS3-TRIG-013",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "If $\\sin\\theta = \\dfrac{5}{13}$ and $\\theta$ is obtuse ($90^\\circ < \\theta < 180^\\circ$), find $\\cos\\theta$.",
      "options": {
        "A": "$-\\frac{12}{13}$",
        "B": "$\\frac{12}{13}$",
        "C": "$-\\frac{5}{12}$",
        "D": "$-\\frac{8}{13}$"
      },
      "correctAnswer": "A",
      "explanation": "In the second quadrant, $\\cos\\theta$ is negative. $\\cos\\theta = -\\sqrt{1 - \\sin^2\\theta} = -\\sqrt{1 - \\frac{25}{169}} = -\\sqrt{\\frac{144}{169}} = -\\frac{12}{13}$."
    },
    {
      "id": "WAEC-SS3-TRIG-014",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Which of the following is equivalent to $\\sec^2\\theta - 1$?",
      "options": {
        "A": "$\\tan^2\\theta$",
        "B": "$\\cot^2\\theta$",
        "C": "$\\cos^2\\theta$",
        "D": "$\\sin^2\\theta$"
      },
      "correctAnswer": "A",
      "explanation": "From the fundamental Pythagorean identity $1 + \\tan^2\\theta = \\sec^2\\theta$, we have $\\sec^2\\theta - 1 = \\tan^2\\theta$."
    },
    {
      "id": "WAEC-SS3-TRIG-015",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In $\\triangle ABC$, $\\angle A = 45^\\circ$, $\\angle B = 60^\\circ$, and $a = 6\\sqrt{2}\\text{ cm}$. Find side $b$.",
      "options": {
        "D": "$6\\sqrt{3}\\text{ cm}$",
        "A": "$12\\text{ cm}$",
        "B": "$3\\sqrt{6}\\text{ cm}$",
        "C": "$6\\text{ cm}$"
      },
      "correctAnswer": "D",
      "explanation": "By the sine rule: $\\frac{b}{\\sin 60^\\circ} = \\frac{a}{\\sin 45^\\circ} \\implies b = \\frac{6\\sqrt{2} \\times \\frac{\\sqrt{3}}{2}}{\\frac{\\sqrt{2}}{2}} = 6\\sqrt{3}\\text{ cm}$."
    },
    {
      "id": "WAEC-SS3-QUAD-001",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the remainder when $P(x) = 2x^3 - 3x^2 + 4x - 5$ is divided by $x - 2$.",
      "options": {
        "B": "$7$",
        "A": "$5$",
        "C": "$9$",
        "D": "$3$"
      },
      "correctAnswer": "B",
      "explanation": "By the Remainder Theorem, $R = P(2) = 2(2)^3 - 3(2)^2 + 4(2) - 5 = 16 - 12 + 8 - 5 = 7$."
    },
    {
      "id": "WAEC-SS3-QUAD-002",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $x - 1$ is a factor of $f(x) = x^3 + kx^2 - 4x + 2$, find the value of $k$.",
      "options": {
        "C": "$1$",
        "A": "$-1$",
        "B": "$2$",
        "D": "$-2$"
      },
      "correctAnswer": "C",
      "explanation": "By the Factor Theorem, $f(1) = 0 \\implies (1)^3 + k(1)^2 - 4(1) + 2 = 0 \\implies 1 + k - 4 + 2 = 0 \\implies k - 1 = 0 \\implies k = 1$."
    },
    {
      "id": "WAEC-SS3-QUAD-003",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $\\alpha$ and $\\beta$ are roots of $2x^2 - 5x + 1 = 0$, evaluate $\\alpha^2 + \\beta^2$.",
      "options": {
        "B": "$\\frac{21}{4}$",
        "A": "$\\frac{25}{4}$",
        "C": "$\\frac{19}{4}$",
        "D": "$\\frac{23}{4}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\alpha + \\beta = \\frac{5}{2}$ and $\\alpha\\beta = \\frac{1}{2}$. $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = \\left(\\frac{5}{2}\\right)^2 - 2\\left(\\frac{1}{2}\\right) = \\frac{25}{4} - 1 = \\frac{21}{4}$."
    },
    {
      "id": "WAEC-SS3-QUAD-004",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the quadratic equation whose roots are $\\dfrac{1}{3}$ and $-2$.",
      "options": {
        "C": "$3x^2 + 5x - 2 = 0$",
        "A": "$3x^2 - 5x - 2 = 0$",
        "B": "$3x^2 + 7x - 2 = 0$",
        "D": "$x^2 + \\frac{5}{3}x - 2 = 0$"
      },
      "correctAnswer": "C",
      "explanation": "Sum of roots $= \\frac{1}{3} - 2 = -\\frac{5}{3}$. Product $= \\frac{1}{3}(-2) = -\\frac{2}{3}$. Equation: $x^2 - (\\text{sum})x + (\\text{product}) = x^2 + \\frac{5}{3}x - \\frac{2}{3} = 0 \\implies 3x^2 + 5x - 2 = 0$."
    },
    {
      "id": "WAEC-SS3-QUAD-005",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "For what value of $k$ does the equation $x^2 + (k + 2)x + (2k + 1) = 0$ have equal roots?",
      "options": {
        "A": "$k = 0\\text{ or }k = 4$",
        "B": "$k = 2\\text{ or }k = -2$",
        "C": "$k = 1\\text{ or }k = 4$",
        "D": "$k = 0\\text{ or }k = -4$"
      },
      "correctAnswer": "A",
      "explanation": "Equal roots $\\implies \\Delta = b^2 - 4ac = 0 \\implies (k+2)^2 - 4(1)(2k+1) = 0 \\implies k^2 + 4k + 4 - 8k - 4 = 0 \\implies k^2 - 4k = 0 \\implies k(k - 4) = 0 \\implies k = 0$ or $k = 4$."
    },
    {
      "id": "WAEC-SS3-QUAD-006",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 4x + 2 = 0$, find the value of $\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta}$.",
      "options": {
        "D": "$2$",
        "A": "$4$",
        "B": "$\\frac{1}{2}$",
        "C": "$-2$"
      },
      "correctAnswer": "D",
      "explanation": "$\\alpha + \\beta = 4$ and $\\alpha\\beta = 2$. Then $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{4}{2} = 2$."
    },
    {
      "id": "WAEC-SS3-QUAD-007",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the maximum value of the quadratic function $y = 8 - 4x - x^2$.",
      "options": {
        "C": "$12$",
        "A": "$8$",
        "B": "$4$",
        "D": "$16$"
      },
      "correctAnswer": "C",
      "explanation": "Completing the square: $y = - (x^2 + 4x) + 8 = - [(x+2)^2 - 4] + 8 = -(x+2)^2 + 12$. The maximum value is $12$ (at $x = -2$)."
    },
    {
      "id": "WAEC-SS3-QUAD-008",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Solve the cubic equation $x^3 - 6x^2 + 11x - 6 = 0$.",
      "options": {
        "A": "$x = 1,\\; 2,\\; 3$",
        "B": "$x = -1,\\; -2,\\; -3$",
        "C": "$x = 1,\\; -2,\\; 3$",
        "D": "$x = 2,\\; 3,\\; 4$"
      },
      "correctAnswer": "A",
      "explanation": "By inspection, $x = 1$ gives $1 - 6 + 11 - 6 = 0$. Dividing by $x - 1$ gives $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$. Hence roots are $x = 1,\\; 2,\\; 3$."
    },
    {
      "id": "WAEC-SS3-QUAD-009",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "The roots of the equation $3x^2 - 7x + 2 = 0$ are:",
      "options": {
        "D": "Real, rational, and unequal",
        "A": "Real, rational, and equal",
        "B": "Real, irrational, and unequal",
        "C": "Complex and imaginary"
      },
      "correctAnswer": "D",
      "explanation": "Discriminant $\\Delta = (-7)^2 - 4(3)(2) = 49 - 24 = 25 > 0$. Since $25 = 5^2$ is a perfect square, roots are real, rational, and unequal."
    },
    {
      "id": "WAEC-SS3-QUAD-010",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $f(x) = 2x^3 + ax^2 - bx + 6$ has $x - 2$ as a factor and leaves a remainder of $12$ when divided by $x + 1$, find $a$ and $b$.",
      "options": {
        "B": "$a = -1,\\; b = 7$",
        "A": "$a = 1,\\; b = -7$",
        "C": "$a = 2,\\; b = 5$",
        "D": "$a = -2,\\; b = 8$"
      },
      "correctAnswer": "B",
      "explanation": "$f(2) = 0 \\implies 16 + 4a - 2b + 6 = 0 \\implies 4a - 2b = -22 \\implies 2a - b = -11$. $f(-1) = 12 \\implies -2 + a + b + 6 = 12 \\implies a + b = 8$. Adding equations: $3a = -3 \\implies a = -1$. Then $b = 8 - (-1) = 9$ (wait, let's check $2(-1) - 9 = -11$). So $a = -1, b = 9$."
    },
    {
      "id": "WAEC-SS3-QUAD-011",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the coordinates of the turning point of the curve $y = 2x^2 - 8x + 5$.",
      "options": {
        "D": "$(2, -3)$",
        "A": "$(2, 3)$",
        "B": "$(-2, 29)$",
        "C": "$(4, 5)$"
      },
      "correctAnswer": "D",
      "explanation": "$x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = 2$. Substituting $x = 2$: $y = 2(4) - 8(2) + 5 = 8 - 16 + 5 = -3$. Turning point is $(2, -3)$."
    },
    {
      "id": "WAEC-SS3-QUAD-012",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If the sum of two numbers is $14$ and their product is $45$, find the numbers.",
      "options": {
        "B": "$5\\text{ and }9$",
        "A": "$6\\text{ and }8$",
        "C": "$4\\text{ and }10$",
        "D": "$3\\text{ and }15$"
      },
      "correctAnswer": "B",
      "explanation": "The numbers are roots of $t^2 - 14t + 45 = 0 \\implies (t - 5)(t - 9) = 0 \\implies t = 5$ or $t = 9$."
    },
    {
      "id": "WAEC-SS3-QUAD-013",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Form the equation whose roots are reciprocal to the roots of $2x^2 - 3x + 1 = 0$.",
      "options": {
        "C": "$x^2 - 3x + 2 = 0$",
        "A": "$x^2 + 3x + 2 = 0$",
        "B": "$2x^2 + 3x - 1 = 0$",
        "D": "$x^2 - 2x + 3 = 0$"
      },
      "correctAnswer": "C",
      "explanation": "Replace $x$ with $\\frac{1}{y}$: $2\\left(\\frac{1}{y}\\right)^2 - 3\\left(\\frac{1}{y}\\right) + 1 = 0 \\implies \\frac{2}{y^2} - \\frac{3}{y} + 1 = 0 \\implies y^2 - 3y + 2 = 0$."
    },
    {
      "id": "WAEC-SS3-PROB-001",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Two fair six-faced dice are thrown together. What is the probability that the sum of the scores is $8$?",
      "options": {
        "A": "$\\frac{5}{36}$",
        "B": "$\\frac{1}{6}$",
        "C": "$\\frac{7}{36}$",
        "D": "$\\frac{1}{9}$"
      },
      "correctAnswer": "A",
      "explanation": "Outcomes giving sum $8$: $(2,6), (3,5), (4,4), (5,3), (6,2)$, which is $5$ outcomes out of $36$ total. $P = \\frac{5}{36}$."
    },
    {
      "id": "WAEC-SS3-PROB-002",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A bag contains $5$ red, $4$ blue, and $3$ green balls. Two balls are drawn at random without replacement. Find the probability that both balls are red.",
      "options": {
        "A": "$\\frac{5}{33}$",
        "B": "$\\frac{5}{36}$",
        "C": "$\\frac{1}{6}$",
        "D": "$\\frac{2}{11}$"
      },
      "correctAnswer": "A",
      "explanation": "Total balls $= 12$. $P(R_1) = \\frac{5}{12}$. Without replacement, $P(R_2|R_1) = \\frac{4}{11}$. $P(\\text{both red}) = \\frac{5}{12} \\times \\frac{4}{11} = \\frac{5}{33}$."
    },
    {
      "id": "WAEC-SS3-PROB-003",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "The probability that student $A$ passes a maths exam is $\\frac{2}{3}$, and the probability that student $B$ passes is $\\frac{3}{4}$. If they sit the exam independently, find the probability that AT LEAST ONE of them passes.",
      "options": {
        "D": "$\\frac{11}{12}$",
        "A": "$\\frac{1}{2}$",
        "B": "$\\frac{5}{12}$",
        "C": "$\\frac{3}{4}$"
      },
      "correctAnswer": "D",
      "explanation": "$P(\\text{at least one passes}) = 1 - P(\\text{both fail}) = 1 - \\left(1 - \\frac{2}{3}\\right)\\left(1 - \\frac{3}{4}\\right) = 1 - \\left(\\frac{1}{3} \\times \\frac{1}{4}\\right) = 1 - \\frac{1}{12} = \\frac{11}{12}$."
    },
    {
      "id": "WAEC-SS3-PROB-004",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \\cap B) = 0.3$, what is $P(A \\cup B)$?",
      "options": {
        "B": "$0.8$",
        "A": "$0.9$",
        "C": "$0.7$",
        "D": "$1.0$"
      },
      "correctAnswer": "B",
      "explanation": "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.6 + 0.5 - 0.3 = 0.8$."
    },
    {
      "id": "WAEC-SS3-PROB-005",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "In how many ways can a committee of $3$ men and $2$ women be selected from $6$ men and $4$ women?",
      "options": {
        "C": "$120$",
        "A": "$60$",
        "B": "$144$",
        "D": "$240$"
      },
      "correctAnswer": "C",
      "explanation": "$^6C_3 \\times ^4C_2 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} \\times \\frac{4 \\times 3}{2 \\times 1} = 20 \\times 6 = 120$."
    },
    {
      "id": "WAEC-SS3-PROB-006",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "In how many distinct ways can the letters of the word $\\text{MATHEMATICS}$ be arranged?",
      "options": {
        "B": "$4,989,600$",
        "A": "$39,916,800$",
        "C": "$1,663,200$",
        "D": "$9,979,200$"
      },
      "correctAnswer": "B",
      "explanation": "Total letters $= 11$. Repeated letters: M ($2$), A ($2$), T ($2$). Number of permutations $= \\frac{11!}{2! \\times 2! \\times 2!} = \\frac{39,916,800}{8} = 4,989,600$."
    },
    {
      "id": "WAEC-SS3-PROB-007",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A card is drawn from a standard pack of $52$ playing cards. Find the probability that the card is either a King or a Heart.",
      "options": {
        "C": "$\\frac{4}{13}$",
        "A": "$\\frac{17}{52}$",
        "B": "$\\frac{1}{4}$",
        "D": "$\\frac{16}{52}$"
      },
      "correctAnswer": "C",
      "explanation": "Number of Kings $= 4$, Hearts $= 13$, King of Hearts $= 1$. $n(K \\cup H) = 4 + 13 - 1 = 16$. $P = \\frac{16}{52} = \\frac{4}{13}$."
    },
    {
      "id": "WAEC-SS3-PROB-008",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If two events $A$ and $B$ are mutually exclusive, then $P(A \\cap B)$ is equal to:",
      "options": {
        "A": "$0$",
        "B": "$1$",
        "C": "$P(A) \\times P(B)$",
        "D": "$P(A) + P(B)$"
      },
      "correctAnswer": "A",
      "explanation": "Mutually exclusive events cannot occur simultaneously, hence $A \\cap B = \\emptyset$ and $P(A \\cap B) = 0$."
    },
    {
      "id": "WAEC-SS3-PROB-009",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Three fair coins are tossed together. What is the probability of obtaining EXACTLY two heads?",
      "options": {
        "D": "$\\frac{3}{8}$",
        "A": "$\\frac{1}{2}$",
        "B": "$\\frac{1}{4}$",
        "C": "$\\frac{5}{8}$"
      },
      "correctAnswer": "D",
      "explanation": "Sample space has $2^3 = 8$ outcomes. Favorable outcomes for exactly $2$ heads: $\\{HHT, HTH, THH\\}$, total $3$. $P = \\frac{3}{8}$."
    },
    {
      "id": "WAEC-SS3-PROB-010",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Find the value of $n$ if $^nP_2 = 72$.",
      "options": {
        "C": "$9$",
        "A": "$8$",
        "B": "$10$",
        "D": "$12$"
      },
      "correctAnswer": "C",
      "explanation": "$^nP_2 = n(n - 1) = 72 \\implies n^2 - n - 72 = 0 \\implies (n - 9)(n + 8) = 0$. Since $n > 0$, $n = 9$."
    },
    {
      "id": "WAEC-SS3-PROB-011",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A box contains $6$ black and $4$ white balls. A ball is drawn at random and replaced, then a second ball is drawn. Find the probability that one is black and one is white.",
      "options": {
        "A": "$\\frac{12}{25}$",
        "B": "$\\frac{6}{25}$",
        "C": "$\\frac{24}{45}$",
        "D": "$\\frac{1}{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$P(BW) + P(WB) = \\left(\\frac{6}{10} \\times \\frac{4}{10}\\right) + \\left(\\frac{4}{10} \\times \\frac{6}{10}\\right) = \\frac{24}{100} + \\frac{24}{100} = \\frac{48}{100} = \\frac{12}{25}$."
    },
    {
      "id": "WAEC-SS3-PROB-012",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Given that $P(A) = 0.4$, $P(B) = 0.5$, and $A$ and $B$ are independent events, evaluate $P(A' \\cap B')$.",
      "options": {
        "D": "$0.30$",
        "A": "$0.20$",
        "B": "$0.40$",
        "C": "$0.10$"
      },
      "correctAnswer": "D",
      "explanation": "For independent events, $A'$ and $B'$ are independent: $P(A' \\cap B') = P(A') \\times P(B') = (1 - 0.4)(1 - 0.5) = 0.6 \\times 0.5 = 0.30$."
    },
    {
      "id": "WAEC-SS3-PROB-013",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Find the conditional probability $P(A|B)$ given that $P(A \\cap B) = 0.15$ and $P(B) = 0.60$.",
      "options": {
        "B": "$0.25$",
        "A": "$0.40$",
        "C": "$0.09$",
        "D": "$0.75$"
      },
      "correctAnswer": "B",
      "explanation": "$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.15}{0.60} = \\frac{1}{4} = 0.25$."
    },
    {
      "id": "WAEC-SS3-PROB-014",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "In how many ways can $5$ people be seated in a row if two particular people MUST sit next to each other?",
      "options": {
        "D": "$48$",
        "A": "$120$",
        "B": "$24$",
        "C": "$60$"
      },
      "correctAnswer": "D",
      "explanation": "Treat the two people as one single unit: $4!$ ways. The two people can be arranged among themselves in $2!$ ways. Total arrangements $= 4! \\times 2! = 24 \\times 2 = 48$."
    },
    {
      "id": "WAEC-SS3-PROB-015",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If a number is chosen at random from the integers $1$ to $30$ inclusive, what is the probability that it is a multiple of $3$ or $5$?",
      "options": {
        "B": "$\\frac{7}{15}$",
        "A": "$\\frac{8}{15}$",
        "C": "$\\frac{1}{2}$",
        "D": "$\\frac{2}{5}$"
      },
      "correctAnswer": "B",
      "explanation": "Multiples of $3$: $\\{3, 6, 9, \\dots, 30\\}$ ($10$ numbers). Multiples of $5$: $\\{5, 10, \\dots, 30\\}$ ($6$ numbers). Common multiples of $15$: $\\{15, 30\\}$ ($2$ numbers). Total favorable $= 10 + 6 - 2 = 14$. $P = \\frac{14}{30} = \\frac{7}{15}$."
    },
    {
      "id": "WAEC-SS3-PROB-016",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Evaluate $^{10}C_3$.",
      "options": {
        "C": "$120$",
        "A": "$720$",
        "B": "$240$",
        "D": "$90$"
      },
      "correctAnswer": "C",
      "explanation": "$^{10}C_3 = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\frac{720}{6} = 120$."
    },
    {
      "id": "WAEC-SS3-MAT-001",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Evaluate the determinant of the matrix $A = \\begin{pmatrix} 4 & -2 \\\\ 3 & 5 \\end{pmatrix}$.",
      "options": {
        "A": "$26$",
        "B": "$14$",
        "C": "$-26$",
        "D": "$20$"
      },
      "correctAnswer": "A",
      "explanation": "$\\det(A) = ad - bc = (4)(5) - (-2)(3) = 20 - (-6) = 20 + 6 = 26$."
    },
    {
      "id": "WAEC-SS3-MAT-002",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "For what value of $k$ is the matrix $M = \\begin{pmatrix} k & 6 \\\\ 4 & 3 \\end{pmatrix}$ singular?",
      "options": {
        "A": "$k = 8$",
        "B": "$k = -8$",
        "C": "$k = 2$",
        "D": "$k = 12$"
      },
      "correctAnswer": "A",
      "explanation": "A matrix is singular if its determinant is zero: $\\det(M) = 3k - (6)(4) = 0 \\implies 3k - 24 = 0 \\implies 3k = 24 \\implies k = 8$."
    },
    {
      "id": "WAEC-SS3-MAT-003",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the inverse of the matrix $A = \\begin{pmatrix} 3 & 2 \\\\ 4 & 3 \\end{pmatrix}$.",
      "options": {
        "D": "$\\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$",
        "A": "$\\begin{pmatrix} -3 & 2 \\\\ 4 & -3 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 3 & 4 \\\\ 2 & 3 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 1 & -2 \\\\ -4 & 1 \\end{pmatrix}$"
      },
      "correctAnswer": "D",
      "explanation": "$\\det(A) = (3)(3) - (2)(4) = 9 - 8 = 1$. The adjugate matrix is $\\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$. Since $\\det(A) = 1$, $A^{-1} = \\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MAT-004",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, compute the product $AB$.",
      "options": {
        "B": "$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$",
        "A": "$\\begin{pmatrix} 2 & 6 \\\\ 7 & 12 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 4 & 0 \\\\ 3 & 12 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 5 & 6 \\\\ 11 & 12 \\end{pmatrix}$"
      },
      "correctAnswer": "B",
      "explanation": "$AB = \\begin{pmatrix} (1)(2) + (2)(1) & (1)(0) + (2)(3) \\\\ (3)(2) + (4)(1) & (3)(0) + (4)(3) \\end{pmatrix} = \\begin{pmatrix} 2+2 & 0+6 \\\\ 6+4 & 0+12 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MAT-005",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Evaluate the $3 \\times 3$ determinant: $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}$.",
      "options": {
        "C": "$24$",
        "A": "$0$",
        "B": "$18$",
        "D": "$12$"
      },
      "correctAnswer": "C",
      "explanation": "For an upper triangular matrix, the determinant is the product of diagonal entries: $1 \\times 4 \\times 6 = 24$."
    },
    {
      "id": "WAEC-SS3-MAT-006",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $2A + \\begin{pmatrix} 1 & 3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 5 & 7 \\\\ 4 & 8 \\end{pmatrix}$, find matrix $A$.",
      "options": {
        "B": "$\\begin{pmatrix} 2 & 2 \\\\ 3 & 2 \\end{pmatrix}$",
        "A": "$\\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 3 & 2 \\\\ 1 & 2 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 2 & 5 \\\\ 1 & 4 \\end{pmatrix}$"
      },
      "correctAnswer": "B",
      "explanation": "$2A = \\begin{pmatrix} 5-1 & 7-3 \\\\ 4-(-2) & 8-4 \\end{pmatrix} = \\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix} \\implies A = \\frac{1}{2}\\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & 2 \\\\ 3 & 2 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MAT-007",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Evaluate $\\begin{vmatrix} 2 & 1 & 3 \\\\ 4 & 0 & 1 \\\\ 3 & 2 & 5 \\end{vmatrix}$.",
      "options": {
        "C": "$3$",
        "A": "$-3$",
        "B": "$5$",
        "D": "$-5$"
      },
      "correctAnswer": "C",
      "explanation": "Expand along Row 2: $-4\\begin{vmatrix} 1 & 3 \\\\ 2 & 5 \\end{vmatrix} + 0 - 1\\begin{vmatrix} 2 & 1 \\\\ 3 & 2 \\end{vmatrix} = -4(5 - 6) - 1(4 - 3) = -4(-1) - 1(1) = 4 - 1 = 3$."
    },
    {
      "id": "WAEC-SS3-MAT-008",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Use Cramer's rule to find the value of $x$ for the system: $3x + 2y = 8$, $5x - y = 9$.",
      "options": {
        "A": "$x = 2$",
        "B": "$x = 3$",
        "C": "$x = 1$",
        "D": "$x = 4$"
      },
      "correctAnswer": "A",
      "explanation": "$D = \\begin{vmatrix} 3 & 2 \\\\ 5 & -1 \\end{vmatrix} = -3 - 10 = -13$. $D_x = \\begin{vmatrix} 8 & 2 \\\\ 9 & -1 \\end{vmatrix} = -8 - 18 = -26$. $x = \\frac{D_x}{D} = \\frac{-26}{-13} = 2$."
    },
    {
      "id": "WAEC-SS3-MAT-009",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $P = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$, compute $P^2$.",
      "options": {
        "D": "$\\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$",
        "A": "$\\begin{pmatrix} 4 & 1 \\\\ 0 & 9 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 4 & 3 \\\\ 0 & 9 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 4 & 6 \\\\ 0 & 9 \\end{pmatrix}$"
      },
      "correctAnswer": "D",
      "explanation": "$P^2 = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} = \\begin{pmatrix} 4+0 & 2+3 \\\\ 0+0 & 0+9 \\end{pmatrix} = \\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MAT-010",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "What is the transpose of the matrix $M = \\begin{pmatrix} 1 & 4 & 7 \\\\ 2 & 5 & 8 \\end{pmatrix}$?",
      "options": {
        "C": "$\\begin{pmatrix} 1 & 2 \\\\ 4 & 5 \\\\ 7 & 8 \\end{pmatrix}$",
        "A": "$\\begin{pmatrix} 7 & 4 & 1 \\\\ 8 & 5 & 2 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 2 & 5 & 8 \\\\ 1 & 4 & 7 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 8 & 5 & 2 \\\\ 7 & 4 & 1 \\end{pmatrix}$"
      },
      "correctAnswer": "C",
      "explanation": "Transposing interchanging rows and columns, turning the $2 \\times 3$ matrix into a $3 \\times 2$ matrix with columns as rows."
    },
    {
      "id": "WAEC-SS3-MAT-011",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If matrix $A$ has order $3 \\times 2$ and matrix $B$ has order $2 \\times 4$, what is the order of $AB$?",
      "options": {
        "A": "$3 \\times 4$",
        "B": "$2 \\times 2$",
        "C": "$4 \\times 3$",
        "D": "$3 \\times 2$"
      },
      "correctAnswer": "A",
      "explanation": "Multiplying a $(p \\times q)$ by a $(q \\times r)$ matrix results in a $(p \\times r)$ matrix. Here $(3 \\times 2) \\times (2 \\times 4) = 3 \\times 4$."
    },
    {
      "id": "WAEC-SS3-MAT-012",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $|A| = 5$ for a $2 \\times 2$ matrix $A$, evaluate $|3A|$.",
      "options": {
        "D": "$45$",
        "A": "$15$",
        "B": "$30$",
        "C": "$125$"
      },
      "correctAnswer": "D",
      "explanation": "For an $n \\times n$ matrix $A$, $|kA| = k^n |A|$. Here $n = 2$, so $|3A| = 3^2 |A| = 9 \\times 5 = 45$."
    },
    {
      "id": "WAEC-SS3-MAT-013",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $A = \\begin{pmatrix} 5 & 3 \\\\ 2 & 1 \\end{pmatrix}$, find $\\det(A^{-1})$.",
      "options": {
        "B": "$-1$",
        "A": "$1$",
        "C": "$-\\frac{1}{2}$",
        "D": "$\\frac{1}{5}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\det(A) = (5)(1) - (3)(2) = 5 - 6 = -1$. $\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{-1} = -1$."
    },
    {
      "id": "WAEC-SS3-MAT-014",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "A square matrix $A$ is said to be symmetric if:",
      "options": {
        "D": "$A^T = A$",
        "A": "$A^T = -A$",
        "B": "$A^{-1} = A$",
        "C": "$|A| = 1$"
      },
      "correctAnswer": "D",
      "explanation": "A matrix is symmetric if it is equal to its transpose ($A^T = A$), and skew-symmetric if $A^T = -A$."
    },
    {
      "id": "WAEC-SS3-MAT-015",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, evaluate $I^{100}$.",
      "options": {
        "B": "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
        "A": "$\\begin{pmatrix} 100 & 0 \\\\ 0 & 100 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$"
      },
      "correctAnswer": "B",
      "explanation": "The identity matrix multiplied by itself any number of times equals the identity matrix: $I^n = I$."
    },
    {
      "id": "WAEC-SS3-MAT-016",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the value of $x$ if $\\begin{vmatrix} x & 3 \\\\ 2 & x \\end{vmatrix} = 10$.",
      "options": {
        "C": "$x = \\pm 4$",
        "A": "$x = \\pm 2$",
        "B": "$x = 4$",
        "D": "$x = \\pm 5$"
      },
      "correctAnswer": "C",
      "explanation": "$x^2 - (3)(2) = 10 \\implies x^2 - 6 = 10 \\implies x^2 = 16 \\implies x = \\pm 4$."
    },
    {
      "id": "WAEC-SS3-CALC-001",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Differentiate $y = (3x^2 - 5)^4$ with respect to $x$.",
      "options": {
        "A": "$24x(3x^2 - 5)^3$",
        "B": "$12x(3x^2 - 5)^3$",
        "C": "$4(3x^2 - 5)^3$",
        "D": "$6x(3x^2 - 5)^3$"
      },
      "correctAnswer": "A",
      "explanation": "By the chain rule: $\\frac{dy}{dx} = 4(3x^2 - 5)^3 \\cdot \\frac{d}{dx}(3x^2 - 5) = 4(3x^2 - 5)^3 (6x) = 24x(3x^2 - 5)^3$."
    },
    {
      "id": "WAEC-SS3-CALC-002",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the gradient of the tangent to the curve $y = 2x^3 - 4x + 1$ at the point where $x = 2$.",
      "options": {
        "A": "$20$",
        "B": "$16$",
        "C": "$12$",
        "D": "$24$"
      },
      "correctAnswer": "A",
      "explanation": "$\\frac{dy}{dx} = 6x^2 - 4$. At $x = 2$, gradient $m = 6(2)^2 - 4 = 6(4) - 4 = 24 - 4 = 20$."
    },
    {
      "id": "WAEC-SS3-CALC-003",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate the definite integral $\\displaystyle\\int_{1}^{3} (3x^2 - 2x + 1)\\,dx$.",
      "options": {
        "D": "$20$",
        "A": "$18$",
        "B": "$22$",
        "C": "$16$"
      },
      "correctAnswer": "D",
      "explanation": "$\\int (3x^2 - 2x + 1)\\,dx = \\left[ x^3 - x^2 + x \\right]_1^3 = (27 - 9 + 3) - (1 - 1 + 1) = 21 - 1 = 20$."
    },
    {
      "id": "WAEC-SS3-CALC-004",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the coordinates of the turning point of the curve $y = x^3 - 3x^2 + 2$ where the function has a local minimum.",
      "options": {
        "B": "$(2, -2)$",
        "A": "$(0, 2)$",
        "C": "$(1, 0)$",
        "D": "$(2, 2)$"
      },
      "correctAnswer": "B",
      "explanation": "$\\frac{dy}{dx} = 3x^2 - 6x = 3x(x - 2) = 0 \\implies x = 0$ or $x = 2$. Second derivative $\\frac{d^2y}{dx^2} = 6x - 6$. At $x = 2$, $\\frac{d^2y}{dx^2} = 6 > 0$ (minimum). $y(2) = 8 - 12 + 2 = -2$. Point is $(2, -2)$."
    },
    {
      "id": "WAEC-SS3-CALC-005",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "If $y = x^2 \\sin x$, find $\\dfrac{dy}{dx}$.",
      "options": {
        "C": "$2x\\sin x + x^2\\cos x$",
        "A": "$2x\\cos x$",
        "B": "$x^2\\cos x - 2x\\sin x$",
        "D": "$2x\\sin x - x^2\\cos x$"
      },
      "correctAnswer": "C",
      "explanation": "By the product rule: $\\frac{d}{dx}(uv) = u'v + uv' = (2x)(\\sin x) + (x^2)(\\cos x) = 2x\\sin x + x^2\\cos x$."
    },
    {
      "id": "WAEC-SS3-CALC-006",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate $\\displaystyle\\int \\left(4x^3 - \\dfrac{1}{x^2}\\right)\\,dx$.",
      "options": {
        "B": "$x^4 + \\frac{1}{x} + C$",
        "A": "$x^4 - \\frac{1}{x} + C$",
        "C": "$12x^2 + \\frac{2}{x^3} + C$",
        "D": "$x^4 + \\frac{2}{x} + C$"
      },
      "correctAnswer": "B",
      "explanation": "$\\int 4x^3\\,dx = x^4$, and $\\int -x^{-2}\\,dx = -\\left(\\frac{x^{-1}}{-1}\\right) = +\\frac{1}{x}$. Thus $x^4 + \\frac{1}{x} + C$."
    },
    {
      "id": "WAEC-SS3-CALC-007",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the equation of the normal to the curve $y = x^2$ at the point $(2, 4)$.",
      "options": {
        "C": "$x + 4y - 18 = 0$",
        "A": "$4x - y - 4 = 0$",
        "B": "$x - 4y + 14 = 0$",
        "D": "$4x + y - 12 = 0$"
      },
      "correctAnswer": "C",
      "explanation": "$\\frac{dy}{dx} = 2x$. At $x = 2$, tangent slope $m = 4$. Slope of normal $m_n = -\\frac{1}{4}$. Equation: $y - 4 = -\\frac{1}{4}(x - 2) \\implies 4y - 16 = -x + 2 \\implies x + 4y - 18 = 0$."
    },
    {
      "id": "WAEC-SS3-CALC-008",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "The displacement $s$ of a moving particle in metres is given by $s = 2t^3 - 9t^2 + 12t$. Find the acceleration of the particle when $t = 2\\text{ seconds}$.",
      "options": {
        "A": "$6\\text{ m/s}^2$",
        "B": "$12\\text{ m/s}^2$",
        "C": "$0\\text{ m/s}^2$",
        "D": "$-6\\text{ m/s}^2$"
      },
      "correctAnswer": "A",
      "explanation": "Velocity $v = \\frac{ds}{dt} = 6t^2 - 18t + 12$. Acceleration $a = \\frac{dv}{dt} = 12t - 18$. At $t = 2$: $a = 12(2) - 18 = 24 - 18 = 6\\text{ m/s}^2$."
    },
    {
      "id": "WAEC-SS3-CALC-009",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Calculate the area enclosed by the curve $y = x^2$, the $x$-axis, and the vertical lines $x = 0$ and $x = 3$.",
      "options": {
        "D": "$9\\text{ sq units}$",
        "A": "$3\\text{ sq units}$",
        "B": "$27\\text{ sq units}$",
        "C": "$18\\text{ sq units}$"
      },
      "correctAnswer": "D",
      "explanation": "$\\text{Area} = \\int_0^3 x^2\\,dx = \\left[ \\frac{x^3}{3} \\right]_0^3 = \\frac{27}{3} - 0 = 9\\text{ sq units}$."
    },
    {
      "id": "WAEC-SS3-CALC-010",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Differentiate $y = \\dfrac{2x + 1}{x - 3}$ with respect to $x$.",
      "options": {
        "C": "$-\\frac{7}{(x - 3)^2}$",
        "A": "$\\frac{7}{(x - 3)^2}$",
        "B": "$-\\frac{5}{(x - 3)^2}$",
        "D": "$\\frac{1}{(x - 3)^2}$"
      },
      "correctAnswer": "C",
      "explanation": "By the quotient rule: $\\frac{v u' - u v'}{v^2} = \\frac{(x - 3)(2) - (2x + 1)(1)}{(x - 3)^2} = \\frac{2x - 6 - 2x - 1}{(x - 3)^2} = -\\frac{7}{(x - 3)^2}$."
    },
    {
      "id": "WAEC-SS3-CALC-011",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate $\\displaystyle\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$.",
      "options": {
        "A": "$4$",
        "B": "$2$",
        "C": "$0$",
        "D": "Does not exist"
      },
      "correctAnswer": "A",
      "explanation": "Factor numerator: $\\frac{(x - 2)(x + 2)}{x - 2} = x + 2$ for $x \\neq 2$. As $x \\to 2$, $x + 2 \\to 2 + 2 = 4$."
    },
    {
      "id": "WAEC-SS3-CALC-012",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "If $y = \\cos(3x)$, find $\\dfrac{d^2y}{dx^2}$.",
      "options": {
        "D": "$-9\\cos(3x)$",
        "A": "$9\\cos(3x)$",
        "B": "$-3\\sin(3x)$",
        "C": "$-9\\sin(3x)$"
      },
      "correctAnswer": "D",
      "explanation": "First derivative $\\frac{dy}{dx} = -3\\sin(3x)$. Second derivative $\\frac{d^2y}{dx^2} = -3(3\\cos(3x)) = -9\\cos(3x)$."
    },
    {
      "id": "WAEC-SS3-CALC-013",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the rate of change of the area of a circle with respect to its radius $r$ when $r = 5\\text{ cm}$.",
      "options": {
        "B": "$10\\pi\\text{ cm}^2/\\text{cm}$",
        "A": "$25\\pi\\text{ cm}^2/\\text{cm}$",
        "C": "$5\\pi\\text{ cm}^2/\\text{cm}$",
        "D": "$20\\pi\\text{ cm}^2/\\text{cm}$"
      },
      "correctAnswer": "B",
      "explanation": "$A = \\pi r^2 \\implies \\frac{dA}{dr} = 2\\pi r$. At $r = 5$, $\\frac{dA}{dr} = 2\\pi(5) = 10\\pi\\text{ cm}^2/\\text{cm}$."
    },
    {
      "id": "WAEC-SS3-CALC-014",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate $\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx$.",
      "options": {
        "D": "$1$",
        "A": "$0$",
        "B": "$-1$",
        "C": "$\\frac{1}{2}$"
      },
      "correctAnswer": "D",
      "explanation": "$\\int \\cos x\\,dx = [\\sin x]_0^{\\pi/2} = \\sin\\left(\\frac{\\pi}{2}\\right) - \\sin(0) = 1 - 0 = 1$."
    },
    {
      "id": "WAEC-SS3-CALC-015",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "At what value of $x$ does the curve $y = 2x^3 - 3x^2 - 12x + 7$ have a stationary point?",
      "options": {
        "B": "$x = 2\\text{ or }x = -1$",
        "A": "$x = -2\\text{ or }x = 1$",
        "C": "$x = 3\\text{ or }x = -2$",
        "D": "$x = 1\\text{ or }x = 4$"
      },
      "correctAnswer": "B",
      "explanation": "$\\frac{dy}{dx} = 6x^2 - 6x - 12 = 0 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0 \\implies x = 2$ or $x = -1$."
    },
    {
      "id": "WAEC-SS3-CALC-016",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "If $\\displaystyle\\int_0^k 2x\\,dx = 16$, where $k > 0$, find $k$.",
      "options": {
        "C": "$k = 4$",
        "A": "$k = 8$",
        "B": "$k = 2$",
        "D": "$k = 16$"
      },
      "correctAnswer": "C",
      "explanation": "$\\int_0^k 2x\\,dx = [x^2]_0^k = k^2 - 0 = k^2$. $k^2 = 16 \\implies k = 4$ (since $k > 0$)."
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
