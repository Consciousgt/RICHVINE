// Standard WAEC SSS 1 Mathematics Question Bank (100 Questions)
// Formatted with standard LaTeX math: $...$ for inline formulas and expressions
// Topics:
// 1. Set Theory (25)
// 2. Indices & Surds (25)
// 3. Logarithms of Numbers > 1 & Log Rules (25)
// 4. Number Base Systems (25)

const ss1Questions = [
  // ── 1. SET THEORY (25 Questions) ──────────────────────────────────────────
  {
    id: "WAEC-SS1-SET-001",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If universal set $U = \\{5, 6, 7, 8\\}$, $P = \\{6, 7\\}$, and $Q = \\{6, 8\\}$, find $(P \\cap Q)'$.",
    options: { A: "$\\{5, 7, 8\\}$", B: "$\\{5, 6, 8\\}$", C: "$\\{6, 7, 8\\}$", D: "$\\{5, 6, 7, 8\\}$" },
    correctAnswer: "A",
    explanation: "$P \\cap Q = \\{6\\}$. The complement $(P \\cap Q)' = U \\setminus \\{6\\} = \\{5, 7, 8\\}$."
  },
  {
    id: "WAEC-SS1-SET-002",
    class: "SSS 1",
    topic: "Set Theory",
    question: "The universal set $U = \\{2, 3, 4, 5, 6, 7, 8, 9\\}$ has subsets $P = \\{2, 4, 6, 8\\}$ and $Q = \\{x : x^2 < 50,\\ x \\text{ is odd}\\}$. Find $(P \\cap Q)'$.",
    options: { A: "$\\{2, 3, 4, 5, 6, 7, 8, 9\\}$", B: "$\\{2, 4, 6, 8\\}$", C: "$\\{3, 5, 7\\}$", D: "$\\emptyset$" },
    correctAnswer: "A",
    explanation: "Odd numbers in $U$ with $x^2 < 50$ are $Q = \\{3, 5, 7\\}$. $P \\cap Q = \\emptyset$. Thus $(P \\cap Q)' = U = \\{2, 3, 4, 5, 6, 7, 8, 9\\}$."
  },
  {
    id: "WAEC-SS1-SET-003",
    class: "SSS 1",
    topic: "Set Theory",
    question: "In a class of $45$ students, every student offers either Chemistry or Economics or both. If $25$ students offer Chemistry while $34$ offer Economics, find the number of students who offer both subjects.",
    options: { A: "$14$", B: "$12$", C: "$16$", D: "$10$" },
    correctAnswer: "A",
    explanation: "Using $n(C \\cup E) = n(C) + n(E) - n(C \\cap E)$: $45 = 25 + 34 - n(C \\cap E) \\implies n(C \\cap E) = 59 - 45 = 14$."
  },
  {
    id: "WAEC-SS1-SET-004",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If $R = \\{x : x^2 = 16,\\ x > 5\\}$, which of the following is equal to $R$?",
    options: { A: "$\\emptyset\\text{ (Empty set)}$", B: "$\\{4\\}$", C: "$\\{-4, 4\\}$", D: "$\\{16\\}$" },
    correctAnswer: "A",
    explanation: "$x^2 = 16 \\implies x = 4$ or $x = -4$. Neither value satisfies the condition $x > 5$. Hence $R = \\emptyset$."
  },
  {
    id: "WAEC-SS1-SET-005",
    class: "SSS 1",
    topic: "Set Theory",
    question: "Let $X = \\{\\text{prime factors of } 84\\}$ and $Y = \\{\\text{prime factors of } 315\\}$. Find $X \\cup Y$ and $X \\cap Y$ respectively.",
    options: { A: "$\\{2, 3, 5, 7\\}\\text{ and }\\{3, 7\\}$", B: "$\\{2, 3, 5, 7\\}\\text{ and }\\{2, 7\\}$", C: "$\\{3, 7\\}\\text{ and }\\{2, 5\\}$", D: "$\\{2, 3, 7\\}\\text{ and }\\{3, 5, 7\\}$" },
    correctAnswer: "A",
    explanation: "Prime factorization: $84 = 2^2 \\times 3 \\times 7 \\implies X = \\{2, 3, 7\\}$; $315 = 3^2 \\times 5 \\times 7 \\implies Y = \\{3, 5, 7\\}$. $X \\cup Y = \\{2, 3, 5, 7\\}$ and $X \\cap Y = \\{3, 7\\}$."
  },
  {
    id: "WAEC-SS1-SET-006",
    class: "SSS 1",
    topic: "Set Theory",
    question: "A school registers $300$ candidates for an examination. $180$ candidates offer Economics and $70$ offer Geography. If $80$ candidates offer neither Economics nor Geography, how many candidates offer at least one subject?",
    options: { A: "$220$", B: "$250$", C: "$180$", D: "$150$" },
    correctAnswer: "A",
    explanation: "Candidates offering at least one subject $= \\text{Total} - \\text{Neither} = 300 - 80 = 220$."
  },
  {
    id: "WAEC-SS1-SET-007",
    class: "SSS 1",
    topic: "Set Theory",
    question: "Given that $P = \\{1, 3, 4\\}$ and $Q = \\{2, 3, 4\\}$, find $P \\cap Q$.",
    options: { A: "$\\{3, 4\\}$", B: "$\\{1, 2, 3, 4\\}$", C: "$\\{3\\}$", D: "$\\{4\\}$" },
    correctAnswer: "A",
    explanation: "The elements common to both $P$ and $Q$ are $3$ and $4$, so $P \\cap Q = \\{3, 4\\}$."
  },
  {
    id: "WAEC-SS1-SET-008",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If $P = \\{x : x > 0\\}$, $R = \\{x : -5 \\le x < 5\\}$, and the universal set $U$ is the set of all integers, find $P' \\cap R$.",
    options: { A: "$\\{-5, -4, -3, -2, -1, 0\\}$", B: "$\\{-5, -4, -3, -2, -1\\}$", C: "$\\{0, 1, 2, 3, 4\\}$", D: "$\\{-4, -3, -2, -1, 0\\}$" },
    correctAnswer: "A",
    explanation: "$P' = \\{x \\in \\mathbb{Z} : x \\le 0\\}$. The intersection with $R = \\{-5, -4, -3, -2, -1, 0, 1, 2, 3, 4\\}$ is $\\{-5, -4, -3, -2, -1, 0\\}$."
  },
  {
    id: "WAEC-SS1-SET-009",
    class: "SSS 1",
    topic: "Set Theory",
    question: "In a class of $60$ students, $40$ speak Hausa, $19$ speak Igbo, and $7$ students speak both languages. Find the number of students who speak neither of the languages.",
    options: { A: "$8$", B: "$12$", C: "$7$", D: "$14$" },
    correctAnswer: "A",
    explanation: "$n(H \\cup I) = 40 + 19 - 7 = 52$. Number speaking neither $= 60 - 52 = 8$."
  },
  {
    id: "WAEC-SS1-SET-010",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If $I$ is the set of positive integers and $P = \\{x : x \\in I,\\ x^2 < 10\\ \\text{and}\\ x \\neq 0\\}$, find $P$.",
    options: { A: "$\\{1, 2, 3\\}$", B: "$\\{0, 1, 2, 3\\}$", C: "$\\{-3, -2, -1, 1, 2, 3\\}$", D: "$\\{1, 2\\}$" },
    correctAnswer: "A",
    explanation: "Positive integers whose squares are strictly less than $10$: $1^2 = 1 < 10$, $2^2 = 4 < 10$, $3^2 = 9 < 10$. Thus $P = \\{1, 2, 3\\}$."
  },
  {
    id: "WAEC-SS1-SET-011",
    class: "SSS 1",
    topic: "Set Theory",
    question: "How many subsets can be formed from a set containing $6$ elements?",
    options: { A: "$64$", B: "$32$", C: "$128$", D: "$36$" },
    correctAnswer: "A",
    explanation: "The number of subsets of a set of cardinality $n$ is $2^n$. For $n = 6$, $2^6 = 64$."
  },
  {
    id: "WAEC-SS1-SET-012",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If $n(A) = 18$, $n(B) = 24$, and $n(A \\cup B) = 32$, find $n(A \\cap B)$.",
    options: { A: "$10$", B: "$8$", C: "$14$", D: "$12$" },
    correctAnswer: "A",
    explanation: "$n(A \\cap B) = n(A) + n(B) - n(A \\cup B) = 18 + 24 - 32 = 42 - 32 = 10$."
  },
  {
    id: "WAEC-SS1-SET-013",
    class: "SSS 1",
    topic: "Set Theory",
    question: "Which of the following is equivalent to $(A \\cup B)'$ by De Morgan's Law?",
    options: { A: "$A' \\cap B'$", B: "$A' \\cup B'$", C: "$A \\cap B'$", D: "$(A \\cap B)'$" },
    correctAnswer: "A",
    explanation: "De Morgan's first law states that the complement of the union equals the intersection of the complements: $(A \\cup B)' = A' \\cap B'$."
  },
  {
    id: "WAEC-SS1-SET-014",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If $A = \\{x : x \\text{ is a factor of } 12\\}$ and $B = \\{x : x \\text{ is a factor of } 18\\}$, find $A \\cap B$.",
    options: { A: "$\\{1, 2, 3, 6\\}$", B: "$\\{1, 2, 6\\}$", C: "$\\{2, 3, 6\\}$", D: "$\\{1, 2, 3, 4, 6\\}$" },
    correctAnswer: "A",
    explanation: "Factors of $12$: $\\{1, 2, 3, 4, 6, 12\\}$. Factors of $18$: $\\{1, 2, 3, 6, 9, 18\\}$. Common factors: $\\{1, 2, 3, 6\\}$."
  },
  {
    id: "WAEC-SS1-SET-015",
    class: "SSS 1",
    topic: "Set Theory",
    question: "Two sets $A$ and $B$ are disjoint if and only if:",
    options: { A: "$A \\cap B = \\emptyset$", B: "$A \\cup B = \\emptyset$", C: "$n(A) = n(B)$", D: "$A \\subset B$" },
    correctAnswer: "A",
    explanation: "Disjoint sets have no common members, meaning their intersection is the empty set: $A \\cap B = \\emptyset$."
  },
  {
    id: "WAEC-SS1-SET-016",
    class: "SSS 1",
    topic: "Set Theory",
    question: "In a survey of $50$ farmers, $30$ grow cassava, $25$ grow yam, and $10$ grow neither. How many grow both crops?",
    options: { A: "$15$", B: "$10$", C: "$20$", D: "$5$" },
    correctAnswer: "A",
    explanation: "Grow at least one $= 50 - 10 = 40$. $n(C \\cap Y) = 30 + 25 - 40 = 15$."
  },
  {
    id: "WAEC-SS1-SET-017",
    class: "SSS 1",
    topic: "Set Theory",
    question: "What is the number of proper subsets of a set with $5$ elements?",
    options: { A: "$31$", B: "$32$", C: "$30$", D: "$25$" },
    correctAnswer: "A",
    explanation: "Number of proper subsets is $2^n - 1$. For $n = 5$, $2^5 - 1 = 32 - 1 = 31$."
  },
  {
    id: "WAEC-SS1-SET-018",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If $U = \\{x : 1 \\le x \\le 12,\\ x \\in \\mathbb{Z}\\}$ and $M = \\{x : x \\text{ is a multiple of } 3\\}$, find $M'$.",
    options: { A: "$\\{1, 2, 4, 5, 7, 8, 10, 11\\}$", B: "$\\{3, 6, 9, 12\\}$", C: "$\\{1, 2, 4, 5, 7, 8, 10\\}$", D: "$\\{2, 4, 5, 7, 8, 10, 11\\}$" },
    correctAnswer: "A",
    explanation: "$M = \\{3, 6, 9, 12\\}$. The complement $M' = U \\setminus M = \\{1, 2, 4, 5, 7, 8, 10, 11\\}$."
  },
  {
    id: "WAEC-SS1-SET-019",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If $A \\subset B$, which of the following expressions is always true?",
    options: { A: "$A \\cap B = A$", B: "$A \\cup B = A$", C: "$A \\cap B = B$", D: "$A' \\cap B = \\emptyset$" },
    correctAnswer: "A",
    explanation: "If every element of $A$ belongs to $B$, the intersection of $A$ and $B$ is precisely $A$."
  },
  {
    id: "WAEC-SS1-SET-020",
    class: "SSS 1",
    topic: "Set Theory",
    question: "The symmetric difference of sets $A$ and $B$, denoted $A \\,\\Delta\\, B$, is defined as:",
    options: { A: "$(A \\cup B) \\setminus (A \\cap B)$", B: "$A \\cap B$", C: "$A' \\cap B'$", D: "$(A \\cap B)'$" },
    correctAnswer: "A",
    explanation: "$A \\,\\Delta\\, B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$."
  },
  {
    id: "WAEC-SS1-SET-021",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If $n(A) = 20$, $n(B) = 30$, and $A \\cap B = \\emptyset$, find $n(A \\cup B)$.",
    options: { A: "$50$", B: "$10$", C: "$60$", D: "$25$" },
    correctAnswer: "A",
    explanation: "For disjoint sets, $n(A \\cup B) = n(A) + n(B) = 20 + 30 = 50$."
  },
  {
    id: "WAEC-SS1-SET-022",
    class: "SSS 1",
    topic: "Set Theory",
    question: "Given $S = \\{a, b, c\\}$, what is the cardinality of the power set $\\mathcal{P}(S)$?",
    options: { A: "$8$", B: "$6$", C: "$9$", D: "$7$" },
    correctAnswer: "A",
    explanation: "$|\\mathcal{P}(S)| = 2^{|S|} = 2^3 = 8$."
  },
  {
    id: "WAEC-SS1-SET-023",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If $n(U) = 100$, $n(P) = 60$, $n(Q) = 50$, and $n(P \\cap Q) = 25$, find $n(P \\cup Q)'$.",
    options: { A: "$15$", B: "$25$", C: "$35$", D: "$10$" },
    correctAnswer: "A",
    explanation: "$n(P \\cup Q) = 60 + 50 - 25 = 85$. Complement $n(P \\cup Q)' = 100 - 85 = 15$."
  },
  {
    id: "WAEC-SS1-SET-024",
    class: "SSS 1",
    topic: "Set Theory",
    question: "If set $A = \\{x : x \\in \\mathbb{R},\\ x^2 + 4 = 0\\}$, then $A$ is:",
    options: { A: "an empty set", B: "a singleton set", C: "an infinite set", D: "$\\{-2, 2\\}$" },
    correctAnswer: "A",
    explanation: "For real $x$, $x^2 \\ge 0$, so $x^2 + 4 \\ge 4 > 0$. There are no real solutions, so $A = \\emptyset$."
  },
  {
    id: "WAEC-SS1-SET-025",
    class: "SSS 1",
    topic: "Set Theory",
    question: "In a class of $40$ learners, $22$ like football, $18$ like basketball, and $8$ like neither. How many like football only?",
    options: { A: "$14$", B: "$12$", C: "$8$", D: "$16$" },
    correctAnswer: "A",
    explanation: "$n(F \\cup B) = 40 - 8 = 32$. $n(F \\cap B) = 22 + 18 - 32 = 8$. Football only $= n(F) - n(F \\cap B) = 22 - 8 = 14$."
  },

  // ── 2. INDICES & SURDS (25 Questions) ─────────────────────────────────────
  {
    id: "WAEC-SS1-IND-001",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: $\\dfrac{9^{-1/2} \\times 81^{3/4}}{9^{1/2}}$.",
    options: { A: "$3$", B: "$9$", C: "$1$", D: "$\\dfrac{1}{3}$" },
    correctAnswer: "A",
    explanation: "$9^{-1/2} = \\frac{1}{3}$, $81^{3/4} = (3^4)^{3/4} = 3^3 = 27$, and $9^{1/2} = 3$. Hence $\\dfrac{\\frac{1}{3} \\times 27}{3} = \\dfrac{9}{3} = 3$."
  },
  {
    id: "WAEC-SS1-IND-002",
    class: "SSS 1",
    topic: "Indices",
    question: "Solve for $m$: $9^{2m+1} = \\dfrac{81^{m+2}}{3^m}$.",
    options: { A: "$m = 6$", B: "$m = 4$", C: "$m = 8$", D: "$m = 2$" },
    correctAnswer: "A",
    explanation: "$3^{2(2m+1)} = \\dfrac{3^{4(m+2)}}{3^m} \\implies 3^{4m+2} = 3^{3m+8} \\implies 4m + 2 = 3m + 8 \\implies m = 6$."
  },
  {
    id: "WAEC-SS1-IND-003",
    class: "SSS 1",
    topic: "Indices",
    question: "Find $n$ if $9^{1+n} \\times 3 = 27^{-n}$.",
    options: { A: "$-\\dfrac{3}{5}$", B: "$\\dfrac{3}{5}$", C: "$-\\dfrac{5}{3}$", D: "$-1$" },
    correctAnswer: "A",
    explanation: "$3^{2(1+n)} \\times 3^1 = 3^{-3n} \\implies 3^{2n+3} = 3^{-3n} \\implies 2n + 3 = -3n \\implies 5n = -3 \\implies n = -\\dfrac{3}{5}$."
  },
  {
    id: "WAEC-SS1-IND-004",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: $(3^0 - 9^{-1/2})^{-3}$.",
    options: { A: "$\\dfrac{27}{8}$", B: "$\\dfrac{8}{27}$", C: "$\\dfrac{9}{4}$", D: "$\\dfrac{4}{9}$" },
    correctAnswer: "A",
    explanation: "$3^0 = 1$, $9^{-1/2} = \\frac{1}{3}$. $(1 - \\frac{1}{3})^{-3} = (\\frac{2}{3})^{-3} = (\\frac{3}{2})^3 = \\dfrac{27}{8}$."
  },
  {
    id: "WAEC-SS1-IND-005",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: $\\dfrac{2^x - 2^{x-1}}{2^3 \\times 2^x - 8 \\times 2^{x-1}}$.",
    options: { A: "$\\dfrac{1}{8}$", B: "$\\dfrac{1}{4}$", C: "$\\dfrac{1}{2}$", D: "$1$" },
    correctAnswer: "A",
    explanation: "Factor out $2^x$: Numerator $= 2^x(1 - \\frac{1}{2}) = \\frac{1}{2} \\cdot 2^x$. Denominator $= 2^x(8 - 8 \\cdot \\frac{1}{2}) = 4 \\cdot 2^x$. Ratio $= \\dfrac{1/2}{4} = \\dfrac{1}{8}$."
  },
  {
    id: "WAEC-SS1-IND-006",
    class: "SSS 1",
    topic: "Indices",
    question: "Find the value of $x$ which satisfies the equation $\\dfrac{9^{2x}}{9^{3x}} = 3$.",
    options: { A: "$-\\dfrac{1}{2}$", B: "$\\dfrac{1}{2}$", C: "$-1$", D: "$1$" },
    correctAnswer: "A",
    explanation: "$9^{2x - 3x} = 9^{-x} = (3^2)^{-x} = 3^{-2x} = 3^1 \\implies -2x = 1 \\implies x = -\\dfrac{1}{2}$."
  },
  {
    id: "WAEC-SS1-IND-007",
    class: "SSS 1",
    topic: "Indices",
    question: "If $\\left(\\dfrac{2}{3}\\right)^{a-1} = \\dfrac{27}{8}$, find the value of $a$.",
    options: { A: "$-2$", B: "$2$", C: "$-4$", D: "$4$" },
    correctAnswer: "A",
    explanation: "$\\dfrac{27}{8} = \\left(\\dfrac{3}{2}\\right)^3 = \\left(\\dfrac{2}{3}\\right)^{-3}$. Then $a - 1 = -3 \\implies a = -2$."
  },
  {
    id: "WAEC-SS1-IND-008",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: $\\dfrac{16^{-1/2}}{64^{2/3}}$.",
    options: { A: "$\\dfrac{1}{64}$", B: "$\\dfrac{1}{16}$", C: "$\\dfrac{1}{32}$", D: "$4$" },
    correctAnswer: "A",
    explanation: "$16^{-1/2} = \\frac{1}{\\sqrt{16}} = \\frac{1}{4}$. $64^{2/3} = (4^3)^{2/3} = 4^2 = 16$. Then $\\dfrac{1/4}{16} = \\dfrac{1}{64}$."
  },
  {
    id: "WAEC-SS1-IND-009",
    class: "SSS 1",
    topic: "Indices",
    question: "Solve the equation: $3x^{-2} = \\dfrac{4}{27}$.",
    options: { A: "$\\pm\\dfrac{9}{2}$", B: "$\\pm\\dfrac{3}{2}$", C: "$\\pm\\dfrac{27}{2}$", D: "$\\dfrac{9}{2}\\text{ only}$" },
    correctAnswer: "A",
    explanation: "$\\dfrac{3}{x^2} = \\dfrac{4}{27} \\implies 4x^2 = 81 \\implies x^2 = \\dfrac{81}{4} \\implies x = \\pm\\dfrac{9}{2}$."
  },
  {
    id: "WAEC-SS1-IND-010",
    class: "SSS 1",
    topic: "Indices",
    question: "Express $\\dfrac{3.50}{0.0025}$ in standard form.",
    options: { A: "$1.4 \\times 10^3$", B: "$1.4 \\times 10^2$", C: "$1.4 \\times 10^4$", D: "$14 \\times 10^2$" },
    correctAnswer: "A",
    explanation: "$\\dfrac{3.5}{2.5 \\times 10^{-3}} = \\dfrac{3.5}{2.5} \\times 10^3 = 1.4 \\times 10^3$."
  },
  {
    id: "WAEC-SS1-IND-011",
    class: "SSS 1",
    topic: "Indices",
    question: "The product of $0.0022$ and $0.017$ expressed in standard form is:",
    options: { A: "$3.74 \\times 10^{-5}$", B: "$3.74 \\times 10^{-4}$", C: "$3.74 \\times 10^{-6}$", D: "$37.4 \\times 10^{-6}$" },
    correctAnswer: "A",
    explanation: "$(2.2 \\times 10^{-3}) \\times (1.7 \\times 10^{-2}) = (2.2 \\times 1.7) \\times 10^{-5} = 3.74 \\times 10^{-5}$."
  },
  {
    id: "WAEC-SS1-IND-012",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: $\\sqrt{3} + 2 - \\dfrac{1}{2 - \\sqrt{3}}$.",
    options: { A: "$0$", B: "$2\\sqrt{3}$", C: "$4$", D: "$1$" },
    correctAnswer: "A",
    explanation: "Rationalize: $\\dfrac{1}{2 - \\sqrt{3}} = \\dfrac{2 + \\sqrt{3}}{(2-\\sqrt{3})(2+\\sqrt{3})} = 2 + \\sqrt{3}$. Then $\\sqrt{3} + 2 - (2 + \\sqrt{3}) = 0$."
  },
  {
    id: "WAEC-SS1-IND-013",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: $\\dfrac{3\\sqrt{15} \\times 2\\sqrt{48}}{\\sqrt{32} \\times 4\\sqrt{45}}$.",
    options: { A: "$\\dfrac{3\\sqrt{2}}{4}$", B: "$\\dfrac{3}{4}$", C: "$\\dfrac{\\sqrt{2}}{2}$", D: "$\\dfrac{3\\sqrt{5}}{4}$" },
    correctAnswer: "A",
    explanation: "$\\dfrac{6\\sqrt{720}}{4\\sqrt{1440}} = \\dfrac{6}{4\\sqrt{2}} = \\dfrac{3}{2\\sqrt{2}} = \\dfrac{3\\sqrt{2}}{4}$."
  },
  {
    id: "WAEC-SS1-IND-014",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: $5\\sqrt{12} - 4\\sqrt{75} + 3\\sqrt{48}$.",
    options: { A: "$2\\sqrt{3}$", B: "$3\\sqrt{3}$", C: "$\\sqrt{3}$", D: "$4\\sqrt{3}$" },
    correctAnswer: "A",
    explanation: "$5(2\\sqrt{3}) - 4(5\\sqrt{3}) + 3(4\\sqrt{3}) = 10\\sqrt{3} - 20\\sqrt{3} + 12\\sqrt{3} = 2\\sqrt{3}$."
  },
  {
    id: "WAEC-SS1-IND-015",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify by rationalizing the denominator: $\\dfrac{\\sqrt{5} + \\sqrt{3}}{\\sqrt{5} - \\sqrt{3}}$.",
    options: { A: "$4 + \\sqrt{15}$", B: "$4 - \\sqrt{15}$", C: "$8 + 2\\sqrt{15}$", D: "$2 + \\sqrt{15}$" },
    correctAnswer: "A",
    explanation: "$\\dfrac{(\\sqrt{5} + \\sqrt{3})^2}{5 - 3} = \\dfrac{5 + 2\\sqrt{15} + 3}{2} = \\dfrac{8 + 2\\sqrt{15}}{2} = 4 + \\sqrt{15}$."
  },
  {
    id: "WAEC-SS1-IND-016",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: $\\dfrac{1}{\\sqrt{2}}\\left[\\dfrac{1}{\\sqrt{3} + \\sqrt{2}} - \\dfrac{1}{\\sqrt{3} - \\sqrt{2}}\\right]$.",
    options: { A: "$-2$", B: "$2$", C: "$-\\sqrt{2}$", D: "$0$" },
    correctAnswer: "A",
    explanation: "Inside bracket: $(\\sqrt{3} - \\sqrt{2}) - (\\sqrt{3} + \\sqrt{2}) = -2\\sqrt{2}$. Multiply by $\\frac{1}{\\sqrt{2}}$: $\\dfrac{-2\\sqrt{2}}{\\sqrt{2}} = -2$."
  },
  {
    id: "WAEC-SS1-IND-017",
    class: "SSS 1",
    topic: "Indices",
    question: "If $x = 2 - \\sqrt{2}$, evaluate $x^2 + \\dfrac{4}{x^2}$.",
    options: { A: "$12$", B: "$6$", C: "$8$", D: "$16$" },
    correctAnswer: "A",
    explanation: "$x^2 = (2-\\sqrt{2})^2 = 6 - 4\\sqrt{2}$. $\\dfrac{4}{x^2} = \\dfrac{4}{6 - 4\\sqrt{2}} = 6 + 4\\sqrt{2}$. Sum $= (6 - 4\\sqrt{2}) + (6 + 4\\sqrt{2}) = 12$."
  },
  {
    id: "WAEC-SS1-IND-018",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: $\\dfrac{1}{2 - \\sqrt{3}} - \\dfrac{1}{2 + \\sqrt{3}}$.",
    options: { A: "$2\\sqrt{3}$", B: "$4$", C: "$0$", D: "$\\sqrt{3}$" },
    correctAnswer: "A",
    explanation: "$\\dfrac{(2 + \\sqrt{3}) - (2 - \\sqrt{3})}{(2 - \\sqrt{3})(2 + \\sqrt{3})} = \\dfrac{2\\sqrt{3}}{4 - 3} = 2\\sqrt{3}$."
  },
  {
    id: "WAEC-SS1-IND-019",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: $3\\sqrt{18} - \\dfrac{16}{\\sqrt{2}} + \\sqrt{50}$.",
    options: { A: "$6\\sqrt{2}$", B: "$7\\sqrt{2}$", C: "$4\\sqrt{2}$", D: "$5\\sqrt{2}$" },
    correctAnswer: "A",
    explanation: "$3(3\\sqrt{2}) - 8\\sqrt{2} + 5\\sqrt{2} = 9\\sqrt{2} - 8\\sqrt{2} + 5\\sqrt{2} = 6\\sqrt{2}$."
  },
  {
    id: "WAEC-SS1-IND-020",
    class: "SSS 1",
    topic: "Indices",
    question: "Find the square of $3 - \\sqrt{2}$.",
    options: { A: "$11 - 6\\sqrt{2}$", B: "$7 - 6\\sqrt{2}$", C: "$11 + 6\\sqrt{2}$", D: "$9 - 2\\sqrt{2}$" },
    correctAnswer: "A",
    explanation: "$(3 - \\sqrt{2})^2 = 3^2 - 2(3)(\\sqrt{2}) + (\\sqrt{2})^2 = 9 - 6\\sqrt{2} + 2 = 11 - 6\\sqrt{2}$."
  },
  {
    id: "WAEC-SS1-IND-021",
    class: "SSS 1",
    topic: "Indices",
    question: "If $a\\sqrt{5} + b\\sqrt{2}$ is a square root of $95 - 30\\sqrt{10}$, find the values of $a$ and $b$.",
    options: { A: "$a = 3,\\ b = -5$", B: "$a = 5,\\ b = -3$", C: "$a = 3,\\ b = 5$", D: "$a = 15,\\ b = -1$" },
    correctAnswer: "A",
    explanation: "$(a\\sqrt{5} + b\\sqrt{2})^2 = 5a^2 + 2b^2 + 2ab\\sqrt{10} = 95 - 30\\sqrt{10}$. $2ab = -30 \\implies ab = -15$. Testing $a=3, b=-5$: $5(9) + 2(25) = 45 + 50 = 95$."
  },
  {
    id: "WAEC-SS1-IND-022",
    class: "SSS 1",
    topic: "Indices",
    question: "Solve for $x$: $2^{2x+1} - 9(2^x) + 4 = 0$.",
    options: { A: "$x = -1\\text{ or }x = 2$", B: "$x = 1\\text{ or }x = -2$", C: "$x = 0\\text{ or }x = 2$", D: "$x = 1\\text{ or }x = 4$" },
    correctAnswer: "A",
    explanation: "$2(2^x)^2 - 9(2^x) + 4 = 0 \\implies (2y - 1)(y - 4) = 0 \\implies 2^x = \\frac{1}{2} \\implies x = -1$, or $2^x = 4 \\implies x = 2$."
  },
  {
    id: "WAEC-SS1-IND-023",
    class: "SSS 1",
    topic: "Indices",
    question: "Evaluate: $(0.008)^{-2/3}$.",
    options: { A: "$25$", B: "$125$", C: "$5$", D: "$\\dfrac{1}{25}$" },
    correctAnswer: "A",
    explanation: "$0.008 = \\frac{8}{1000} = \\frac{1}{125} = 5^{-3}$. $(5^{-3})^{-2/3} = 5^2 = 25$."
  },
  {
    id: "WAEC-SS1-IND-024",
    class: "SSS 1",
    topic: "Indices",
    question: "Simplify: $\\dfrac{x^{2/3} \\times x^{-1/2}}{x^{1/6}}$.",
    options: { A: "$1$", B: "$x$", C: "$x^{1/3}$", D: "$x^{-1/3}$" },
    correctAnswer: "A",
    explanation: "Exponent: $\\frac{2}{3} - \\frac{1}{2} - \\frac{1}{6} = \\frac{4 - 3 - 1}{6} = 0$. $x^0 = 1$."
  },
  {
    id: "WAEC-SS1-IND-025",
    class: "SSS 1",
    topic: "Indices",
    question: "If $4^{x+1} = 64$, find $x$.",
    options: { A: "$2$", B: "$3$", C: "$1$", D: "$4$" },
    correctAnswer: "A",
    explanation: "$4^{x+1} = 4^3 \\implies x + 1 = 3 \\implies x = 2$."
  },

  // ── 3. LOGARITHMS OF NUMBERS > 1 & LOG LAWS (25 Questions) ────────────────
  {
    id: "WAEC-SS1-LOG-001",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Evaluate $\\log_{10}\\dfrac{1}{70}$ given that $\\log_{10}7 = 0.8451$.",
    options: { A: "$-1.8451\\text{ (or }\\bar{2}.1549\\text{)}$", B: "$-1.1549$", C: "$0.8451$", D: "$-2.8451$" },
    correctAnswer: "A",
    explanation: "$\\log_{10}\\frac{1}{70} = -\\log_{10}(7 \\times 10) = -(0.8451 + 1) = -1.8451 = -2 + 0.1549 = \\bar{2}.1549$."
  },
  {
    id: "WAEC-SS1-LOG-002",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Find $x$ if $4\\log x + 5\\log x - 7\\log x = \\log 16$.",
    options: { A: "$4$", B: "$2$", C: "$8$", D: "$16$" },
    correctAnswer: "A",
    explanation: "$2\\log x = \\log(x^2) = \\log 16 \\implies x^2 = 16 \\implies x = 4$ ($x > 0$)."
  },
  {
    id: "WAEC-SS1-LOG-003",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Evaluate $\\log_{10}0.225$ if $\\log_{10}3 = 0.477$ and $\\log_{10}5 = 0.699$.",
    options: { A: "$\\bar{1}.352\\text{ (or }-0.648\\text{)}$", B: "$\\bar{2}.352$", C: "$-0.352$", D: "$0.352$" },
    correctAnswer: "A",
    explanation: "$0.225 = \\frac{225}{1000} = \\frac{3^2 \\times 5^2}{10^3}$. $\\log(0.225) = 2(0.477) + 2(0.699) - 3 = 0.954 + 1.398 - 3 = 2.352 - 3 = -0.648 = \\bar{1}.352$."
  },
  {
    id: "WAEC-SS1-LOG-004",
    class: "SSS 1",
    topic: "Logarithm",
    question: "If $\\log_{10}3 = 0.4771$ and $10^x = 0.3$, find $x$.",
    options: { A: "$-0.5229\\text{ (or }\\bar{1}.4771\\text{)}$", B: "$0.4771$", C: "$-1.4771$", D: "$0.5229$" },
    correctAnswer: "A",
    explanation: "$x = \\log_{10}(0.3) = \\log_{10}\\left(\\frac{3}{10}\\right) = \\log_{10}3 - 1 = 0.4771 - 1 = -0.5229$."
  },
  {
    id: "WAEC-SS1-LOG-005",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Evaluate: $\\log_3 27 + \\log_3 6 - \\log_3 54$.",
    options: { A: "$1$", B: "$0$", C: "$3$", D: "$2$" },
    correctAnswer: "A",
    explanation: "$\\log_3\\left(\\dfrac{27 \\times 6}{54}\\right) = \\log_3\\left(\\dfrac{162}{54}\\right) = \\log_3 3 = 1$."
  },
  {
    id: "WAEC-SS1-LOG-006",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Evaluate: $\\dfrac{\\log_2 8 - \\log_{1/3}81}{\\log_4(1/64)}$.",
    options: { A: "$-\\dfrac{7}{3}$", B: "$\\dfrac{7}{3}$", C: "$-\\dfrac{1}{3}$", D: "$-3$" },
    correctAnswer: "A",
    explanation: "$\\log_2 8 = 3$, $\\log_{1/3} 81 = -4$, $\\log_4(1/64) = -3$. Numerator $= 3 - (-4) = 7$. Denominator $= -3$. Result $= -\\dfrac{7}{3}$."
  },
  {
    id: "WAEC-SS1-LOG-007",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Solve for $x$: $\\log_{10}(3x - 4) - \\log_{10}2 = 1$.",
    options: { A: "$8$", B: "$6$", C: "$10$", D: "$4$" },
    correctAnswer: "A",
    explanation: "$\\log_{10}\\left(\\dfrac{3x-4}{2}\\right) = 1 \\implies \\dfrac{3x-4}{2} = 10 \\implies 3x - 4 = 20 \\implies 3x = 24 \\implies x = 8$."
  },
  {
    id: "WAEC-SS1-LOG-008",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Calculate the value of $4^{3/2} + \\log_5 0.04 + \\log_3 81$.",
    options: { A: "$10$", B: "$8$", C: "$12$", D: "$14$" },
    correctAnswer: "A",
    explanation: "$4^{3/2} = 8$, $\\log_5 0.04 = \\log_5(1/25) = -2$, $\\log_3 81 = 4$. Total $= 8 + (-2) + 4 = 10$."
  },
  {
    id: "WAEC-SS1-LOG-009",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Express $x$ in terms of $p$ and $q$ if $\\log p = 0.5\\log x + 2\\log q$.",
    options: { A: "$\\dfrac{p^2}{q^4}$", B: "$\\dfrac{p}{q^2}$", C: "$\\dfrac{p^2}{q^2}$", D: "$p^2 q^4$" },
    correctAnswer: "A",
    explanation: "$\\log p = \\log(x^{1/2} q^2) \\implies p = \\sqrt{x} q^2 \\implies \\sqrt{x} = \\dfrac{p}{q^2} \\implies x = \\dfrac{p^2}{q^4}$."
  },
  {
    id: "WAEC-SS1-LOG-010",
    class: "SSS 1",
    topic: "Logarithm",
    question: "If $\\log_{10}4 = 0.6021$, evaluate $\\log_{10}40 + 3\\log_{10}400$.",
    options: { A: "$9.4084$", B: "$8.8063$", C: "$7.4084$", D: "$9.2042$" },
    correctAnswer: "A",
    explanation: "$\\log_{10}40 = 1.6021$; $\\log_{10}400 = 2.6021$. $1.6021 + 3(2.6021) = 1.6021 + 7.8063 = 9.4084$."
  },
  {
    id: "WAEC-SS1-LOG-011",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Find the value of $ab$ if $a = \\log_2 3$ and $b = \\log_3 8$.",
    options: { A: "$3$", B: "$2$", C: "$4$", D: "$8$" },
    correctAnswer: "A",
    explanation: "$ab = \\log_2 3 \\times \\log_3 8 = \\log_2 8 = 3$ by change of base rule."
  },
  {
    id: "WAEC-SS1-LOG-012",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Find $a$ if $\\log a - \\log(a - 1) = \\log 3$.",
    options: { A: "$\\dfrac{3}{2}$", B: "$\\dfrac{2}{3}$", C: "$3$", D: "$2$" },
    correctAnswer: "A",
    explanation: "$\\log\\left(\\dfrac{a}{a-1}\\right) = \\log 3 \\implies \\dfrac{a}{a-1} = 3 \\implies a = 3a - 3 \\implies 2a = 3 \\implies a = \\dfrac{3}{2}$."
  },
  {
    id: "WAEC-SS1-LOG-013",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Find $x$ if $\\log_4 x = 3.5$.",
    options: { A: "$128$", B: "$64$", C: "$256$", D: "$14$" },
    correctAnswer: "A",
    explanation: "$x = 4^{3.5} = 4^{7/2} = (2^2)^{7/2} = 2^7 = 128$."
  },
  {
    id: "WAEC-SS1-LOG-014",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Find the value of $x$ if $\\dfrac{1}{2}\\log_{10}x = 1$.",
    options: { A: "$100$", B: "$10$", C: "$1000$", D: "$20$" },
    correctAnswer: "A",
    explanation: "$\\log_{10}x = 2 \\implies x = 10^2 = 100$."
  },
  {
    id: "WAEC-SS1-LOG-015",
    class: "SSS 1",
    topic: "Logarithm",
    question: "If $\\log_{10}x = 0.5$, what is the exact value of $x$?",
    options: { A: "$\\sqrt{10}$", B: "$5$", C: "$10$", D: "$0.25$" },
    correctAnswer: "A",
    explanation: "$x = 10^{0.5} = 10^{1/2} = \\sqrt{10}$."
  },
  {
    id: "WAEC-SS1-LOG-016",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Given $\\log_b 2 = 0.693$ and $\\log_b 5 = 1.609$, evaluate $\\log_b 62.5$.",
    options: { A: "$4.134$", B: "$4.827$", C: "$3.525$", D: "$2.415$" },
    correctAnswer: "A",
    explanation: "$62.5 = \\frac{125}{2} = \\frac{5^3}{2}$. $\\log_b 62.5 = 3\\log_b 5 - \\log_b 2 = 3(1.609) - 0.693 = 4.827 - 0.693 = 4.134$."
  },
  {
    id: "WAEC-SS1-LOG-017",
    class: "SSS 1",
    topic: "Logarithm",
    question: "If $a = x^{1/n}$, evaluate $\\log_a x^n$.",
    options: { A: "$n^2$", B: "$n$", C: "$1$", D: "$\\dfrac{1}{n^2}$" },
    correctAnswer: "A",
    explanation: "$x = a^n \\implies x^n = a^{n^2}$. Therefore $\\log_a x^n = \\log_a(a^{n^2}) = n^2$."
  },
  {
    id: "WAEC-SS1-LOG-018",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Evaluate: $\\dfrac{\\log_{10}0.04 + \\log_{10}0.25}{\\log_5 100 - \\log_5 4}$.",
    options: { A: "$-1$", B: "$1$", C: "$0$", D: "$-2$" },
    correctAnswer: "A",
    explanation: "Numerator: $\\log_{10}(0.04 \\times 0.25) = \\log_{10}(0.01) = -2$. Denominator: $\\log_5(100/4) = \\log_5 25 = 2$. Ratio: $\\frac{-2}{2} = -1$."
  },
  {
    id: "WAEC-SS1-LOG-019",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Given that $\\log_{10}2 = 0.3010$ and $\\log_{10}3 = 0.4771$, calculate $\\log_{10}18$.",
    options: { A: "$1.2552$", B: "$1.5562$", C: "$0.7781$", D: "$1.0791$" },
    correctAnswer: "A",
    explanation: "$18 = 2 \\times 3^2$. $\\log_{10}18 = \\log_{10}2 + 2\\log_{10}3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552$."
  },
  {
    id: "WAEC-SS1-LOG-020",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Solve for $x$: $\\log_2 x + \\log_2(x - 2) = 3$.",
    options: { A: "$x = 4$", B: "$x = 2$", C: "$x = -2$", D: "$x = 4\\text{ or }x = -2$" },
    correctAnswer: "A",
    explanation: "$\\log_2[x(x - 2)] = 3 \\implies x^2 - 2x = 8 \\implies x^2 - 2x - 8 = 0 \\implies (x - 4)(x + 2) = 0$. Since $x > 2$, $x = 4$."
  },
  {
    id: "WAEC-SS1-LOG-021",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Evaluate: $\\log_5 125 - \\log_2 32 + \\log_7 49$.",
    options: { A: "$0$", B: "$1$", C: "$2$", D: "$-1$" },
    correctAnswer: "A",
    explanation: "$\\log_5 125 = 3$; $\\log_2 32 = 5$; $\\log_7 49 = 2$. Then $3 - 5 + 2 = 0$."
  },
  {
    id: "WAEC-SS1-LOG-022",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Solve: $\\log_3(x + 1) + \\log_3(x - 1) = 1$.",
    options: { A: "$x = 2$", B: "$x = 1$", C: "$x = \\sqrt{2}$", D: "$x = 3$" },
    correctAnswer: "A",
    explanation: "$\\log_3(x^2 - 1) = 1 \\implies x^2 - 1 = 3 \\implies x^2 = 4 \\implies x = 2$ ($x > 1$)."
  },
  {
    id: "WAEC-SS1-LOG-023",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Find the characteristic of $\\log_{10} 45200$.",
    options: { A: "$4$", B: "$5$", C: "$3$", D: "$2$" },
    correctAnswer: "A",
    explanation: "$45200 = 4.52 \\times 10^4$. The power of $10$ is $4$, so the characteristic is $4$."
  },
  {
    id: "WAEC-SS1-LOG-024",
    class: "SSS 1",
    topic: "Logarithm",
    question: "If $\\log_x 64 = 3$, find $x$.",
    options: { A: "$4$", B: "$8$", C: "$2$", D: "$16$" },
    correctAnswer: "A",
    explanation: "$x^3 = 64 = 4^3 \\implies x = 4$."
  },
  {
    id: "WAEC-SS1-LOG-025",
    class: "SSS 1",
    topic: "Logarithm",
    question: "Simplify: $\\dfrac{\\log 8}{\\log 4}$.",
    options: { A: "$\\dfrac{3}{2}$", B: "$2$", C: "$\\dfrac{2}{3}$", D: "$\\log 2$" },
    correctAnswer: "A",
    explanation: "$\\dfrac{\\log(2^3)}{\\log(2^2)} = \\dfrac{3\\log 2}{2\\log 2} = \\dfrac{3}{2}$."
  },

  // ── 4. NUMBER BASE SYSTEMS (25 Questions) ─────────────────────────────────
  {
    id: "WAEC-SS1-BASE-001",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "If $102_x = 27_{10}$, find the value of the base $x$.",
    options: { A: "$5$", B: "$4$", C: "$6$", D: "$3$" },
    correctAnswer: "A",
    explanation: "$1(x^2) + 0(x^1) + 2(x^0) = 27 \\implies x^2 + 2 = 27 \\implies x^2 = 25 \\implies x = 5$."
  },
  {
    id: "WAEC-SS1-BASE-002",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Evaluate in base two: $11011_2 + 10101_2$.",
    options: { A: "$110000_2$", B: "$101000_2$", C: "$110010_2$", D: "$100110_2$" },
    correctAnswer: "A",
    explanation: "$27_{10} + 21_{10} = 48_{10}$. Converting $48_{10}$ to binary gives $110000_2$."
  },
  {
    id: "WAEC-SS1-BASE-003",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Subtract in base eight: $634_8 - 257_8$.",
    options: { A: "$355_8$", B: "$365_8$", C: "$345_8$", D: "$375_8$" },
    correctAnswer: "A",
    explanation: "$634_8 = 412_{10}$; $257_8 = 175_{10}$. $412 - 175 = 237_{10} = 355_8$."
  },
  {
    id: "WAEC-SS1-BASE-004",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "If $32_x = 24_8$, find the base $x$.",
    options: { A: "$6$", B: "$5$", C: "$7$", D: "$8$" },
    correctAnswer: "A",
    explanation: "$24_8 = 2(8) + 4 = 20_{10}$. $3x + 2 = 20 \\implies 3x = 18 \\implies x = 6$."
  },
  {
    id: "WAEC-SS1-BASE-005",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Convert $(11.011)_2$ to a decimal fraction.",
    options: { A: "$3.375$", B: "$3.625$", C: "$3.25$", D: "$3.75$" },
    correctAnswer: "A",
    explanation: "$11_2 = 3$. $0.011_2 = 0(\\frac{1}{2}) + 1(\\frac{1}{4}) + 1(\\frac{1}{8}) = 0.25 + 0.125 = 0.375$. Total $= 3.375$."
  },
  {
    id: "WAEC-SS1-BASE-006",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "If $23_x + 101_2 = 130_4$, find $x$.",
    options: { A: "$10$", B: "$8$", C: "$7$", D: "$6$" },
    correctAnswer: "A",
    explanation: "$101_2 = 5_{10}$. $130_4 = 1(16) + 3(4) + 0 = 28_{10}$. $(2x + 3) + 5 = 28 \\implies 2x + 8 = 28 \\implies 2x = 20 \\implies x = 10$."
  },
  {
    id: "WAEC-SS1-BASE-007",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Multiply $110_2$ by $11_2$.",
    options: { A: "$10010_2$", B: "$10100_2$", C: "$11100_2$", D: "$10001_2$" },
    correctAnswer: "A",
    explanation: "$110_2 = 6_{10}$; $11_2 = 3_{10}$. $6 \\times 3 = 18_{10} = 10010_2$."
  },
  {
    id: "WAEC-SS1-BASE-008",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Convert $101101_2$ to an octal (base 8) number.",
    options: { A: "$55_8$", B: "$45_8$", C: "$53_8$", D: "$65_8$" },
    correctAnswer: "A",
    explanation: "Group in 3s from right: $101$ and $101$. $101_2 = 5$. Thus $101101_2 = 55_8$."
  },
  {
    id: "WAEC-SS1-BASE-009",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Convert $1101101_2$ to hexadecimal (base 16).",
    options: { A: "$6D_{16}$", B: "$5D_{16}$", C: "$6C_{16}$", D: "$7D_{16}$" },
    correctAnswer: "A",
    explanation: "Group in 4s: $0110$ ($6$) and $1101$ ($13 = D$). Hence $6D_{16}$."
  },
  {
    id: "WAEC-SS1-BASE-010",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Find the value of $P$ if $P_5 = 43_7$.",
    options: { A: "$111_5$", B: "$121_5$", C: "$104_5$", D: "$114_5$" },
    correctAnswer: "A",
    explanation: "$43_7 = 4(7) + 3 = 31_{10}$. Converting $31_{10}$ to base $5$: $31 = 1(25) + 1(5) + 1(1) = 111_5$."
  },
  {
    id: "WAEC-SS1-BASE-011",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "If $121_x = 36_{10}$, find $x$.",
    options: { A: "$5$", B: "$6$", C: "$7$", D: "$4$" },
    correctAnswer: "A",
    explanation: "$x^2 + 2x + 1 = 36 \\implies (x + 1)^2 = 36 \\implies x + 1 = 6 \\implies x = 5$."
  },
  {
    id: "WAEC-SS1-BASE-012",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Evaluate: $324_5 + 412_5$.",
    options: { A: "$1241_5$", B: "$1231_5$", C: "$1242_5$", D: "$1211_5$" },
    correctAnswer: "A",
    explanation: "$324_5 = 89_{10}$; $412_5 = 107_{10}$. Sum $= 196_{10}$. $196 = 1(125) + 2(25) + 4(5) + 1 = 1241_5$."
  },
  {
    id: "WAEC-SS1-BASE-013",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Subtract in base six: $432_6 - 155_6$.",
    options: { A: "$233_6$", B: "$243_6$", C: "$223_6$", D: "$333_6$" },
    correctAnswer: "A",
    explanation: "$432_6 = 164_{10}$; $155_6 = 71_{10}$. $164 - 71 = 93_{10}$. $93 = 2(36) + 3(6) + 3 = 233_6$."
  },
  {
    id: "WAEC-SS1-BASE-014",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Convert $234_8$ to a base $10$ integer.",
    options: { A: "$156$", B: "$164$", C: "$148$", D: "$172$" },
    correctAnswer: "A",
    explanation: "$2(8^2) + 3(8^1) + 4(8^0) = 2(64) + 24 + 4 = 128 + 28 = 156_{10}$."
  },
  {
    id: "WAEC-SS1-BASE-015",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "If $1101_2 - x_2 = 111_2$, find $x_2$.",
    options: { A: "$110_2$", B: "$101_2$", C: "$100_2$", D: "$111_2$" },
    correctAnswer: "A",
    explanation: "$1101_2 = 13_{10}$, $111_2 = 7_{10}$. $x = 13 - 7 = 6_{10} = 110_2$."
  },
  {
    id: "WAEC-SS1-BASE-016",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "If $34_n = 22_{10}$, find $n$.",
    options: { A: "$6$", B: "$5$", C: "$7$", D: "$8$" },
    correctAnswer: "A",
    explanation: "$3n + 4 = 22 \\implies 3n = 18 \\implies n = 6$."
  },
  {
    id: "WAEC-SS1-BASE-017",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Evaluate: $1011_2 \\div 11_2$.",
    options: { A: "$3\\text{ rem }2\\text{ (or }11_2\\text{ rem }10_2\\text{)}$", B: "$4\\text{ rem }1$", C: "$2\\text{ rem }1$", D: "$3\\text{ rem }0$" },
    correctAnswer: "A",
    explanation: "$1011_2 = 11_{10}$; $11_2 = 3_{10}$. $11 \\div 3 = 3$ remainder $2$ ($11_2$ remainder $10_2$)."
  },
  {
    id: "WAEC-SS1-BASE-018",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Convert $47_{10}$ to base $3$.",
    options: { A: "$1202_3$", B: "$1212_3$", C: "$1102_3$", D: "$1222_3$" },
    correctAnswer: "A",
    explanation: "$47 = 1(27) + 2(9) + 0(3) + 2(1) = 1202_3$."
  },
  {
    id: "WAEC-SS1-BASE-019",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "If $212_3 = x_{10}$, find $x$.",
    options: { A: "$23$", B: "$21$", C: "$19$", D: "$25$" },
    correctAnswer: "A",
    explanation: "$2(3^2) + 1(3^1) + 2(3^0) = 18 + 3 + 2 = 23$."
  },
  {
    id: "WAEC-SS1-BASE-020",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Solve for $y$ if $y_8 = 10110_2$.",
    options: { A: "$26_8$", B: "$36_8$", C: "$16_8$", D: "$24_8$" },
    correctAnswer: "A",
    explanation: "$10110_2 = 010\\ 110_2 = 26_8$."
  },
  {
    id: "WAEC-SS1-BASE-021",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "If $43_x = 23_{10}$, find $x$.",
    options: { A: "Invalid base (no solution in positive integers)", B: "$5$", C: "$6$", D: "$4$" },
    correctAnswer: "A",
    explanation: "$4x + 3 = 23 \\implies 4x = 20 \\implies x = 5$. Since digit $4 < 5$, $x = 5$ is valid! Wait, $4(5) + 3 = 23$. So $x = 5$."
  },
  {
    id: "WAEC-SS1-BASE-022",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Calculate $1000_2 - 111_2$.",
    options: { A: "$1_2$", B: "$10_2$", C: "$11_2$", D: "$100_2$" },
    correctAnswer: "A",
    explanation: "$1000_2 = 8_{10}$; $111_2 = 7_{10}$. $8 - 7 = 1_{10} = 1_2$."
  },
  {
    id: "WAEC-SS1-BASE-023",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Convert $0.625_{10}$ to binary.",
    options: { A: "$0.101_2$", B: "$0.110_2$", C: "$0.011_2$", D: "$0.111_2$" },
    correctAnswer: "A",
    explanation: "$0.625 = \\frac{1}{2} + \\frac{1}{8} = 0.101_2$."
  },
  {
    id: "WAEC-SS1-BASE-024",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "Find the base $b$ such that $13_b + 24_b = 42_b$.",
    options: { A: "$5$", B: "$6$", C: "$7$", D: "$8$" },
    correctAnswer: "A",
    explanation: "$(b + 3) + (2b + 4) = 4b + 2 \\implies 3b + 7 = 4b + 2 \\implies b = 5$."
  },
  {
    id: "WAEC-SS1-BASE-025",
    class: "SSS 1",
    topic: "Number Base Systems",
    question: "If $204_n = 54_{10}$, find the value of $n$.",
    options: { A: "$5$", B: "$6$", C: "$7$", D: "$4$" },
    correctAnswer: "A",
    explanation: "$2n^2 + 0n + 4 = 54 \\implies 2n^2 = 50 \\implies n^2 = 25 \\implies n = 5$."
  }
];

// Let's refine option for Q21 of Number Base Systems
ss1Questions[95] = {
  id: "WAEC-SS1-BASE-021",
  class: "SSS 1",
  topic: "Number Base Systems",
  question: "If $43_x = 23_{10}$, find the value of $x$.",
  options: { A: "$5$", B: "$6$", C: "$7$", D: "$4$" },
  correctAnswer: "A",
  explanation: "$4x + 3 = 23 \\implies 4x = 20 \\implies x = 5$."
};

module.exports = ss1Questions;
