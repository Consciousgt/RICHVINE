// Standard WAEC SSS 2 Mathematics Question Bank (100 Questions)
// Formatted with standard LaTeX math: $...$ for inline formulas and expressions
// Topics:
// 1. Indices & Surds (20)
// 2. Logarithm Theory (20)
// 3. Set Theory (20)
// 4. Quadratic Equations (20)
// 5. Logarithms of Numbers < 1 & Bar Notation (20)

const ss2Questions = [
  // ── 1. INDICES & SURDS (20 Questions) ─────────────────────────────────────
  {
    id: "WAEC-SS2-IND-001",
    class: "SSS 2",
    topic: "Indices",
    question: "Solve the equation: $2^{2x} - 5(2^x) + 4 = 0$.",
    options: { A: "$x = 0\\text{ or }x = 2$", B: "$x = 1\\text{ or }x = 4$", C: "$x = 2\\text{ or }x = 4$", D: "$x = -1\\text{ or }x = 2$" },
    correctAnswer: "A",
    explanation: "Let $y = 2^x$. Then $y^2 - 5y + 4 = 0 \\implies (y - 1)(y - 4) = 0 \\implies y = 1$ or $y = 4$. If $2^x = 1 = 2^0 \\implies x = 0$; if $2^x = 4 = 2^2 \\implies x = 2$."
  },
  {
    id: "WAEC-SS2-IND-002",
    class: "SSS 2",
    topic: "Indices",
    question: "Evaluate: $\\left(\\dfrac{16}{81}\\right)^{-3/4}$.",
    options: { A: "$\\dfrac{27}{8}$", B: "$\\dfrac{8}{27}$", C: "$\\dfrac{9}{4}$", D: "$\\dfrac{4}{9}$" },
    correctAnswer: "A",
    explanation: "$\\left(\\dfrac{16}{81}\\right)^{-3/4} = \\left(\\dfrac{81}{16}\\right)^{3/4} = \\left[\\left(\\dfrac{3}{2}\\right)^4\\right]^{3/4} = \\left(\\dfrac{3}{2}\\right)^3 = \\dfrac{27}{8}$."
  },
  {
    id: "WAEC-SS2-IND-003",
    class: "SSS 2",
    topic: "Indices",
    question: "If $3^{2x - 1} \\times 9^{x + 1} = 27^{x + 2}$, find the value of $x$.",
    options: { A: "$5$", B: "$3$", C: "$2$", D: "$4$" },
    correctAnswer: "A",
    explanation: "$3^{2x - 1} \\times 3^{2(x + 1)} = 3^{3(x + 2)} \\implies 3^{4x + 1} = 3^{3x + 6} \\implies 4x + 1 = 3x + 6 \\implies x = 5$."
  },
  {
    id: "WAEC-SS2-IND-004",
    class: "SSS 2",
    topic: "Indices",
    question: "Solve for $x$ if $4^{x+1} - 9(2^x) + 2 = 0$.",
    options: { A: "$x = 1\\text{ or }x = -2$", B: "$x = 1\\text{ or }x = -1$", C: "$x = -1\\text{ or }x = -2$", D: "$x = 2\\text{ or }x = -1$" },
    correctAnswer: "A",
    explanation: "$4(2^x)^2 - 9(2^x) + 2 = 0$. Let $u = 2^x$: $4u^2 - 9u + 2 = (4u - 1)(u - 2) = 0 \\implies u = 1/4$ or $u = 2$. $2^x = 2^{-2} \\implies x = -2$; $2^x = 2^1 \\implies x = 1$."
  },
  {
    id: "WAEC-SS2-IND-005",
    class: "SSS 2",
    topic: "Indices",
    question: "Simplify: $\\dfrac{x^{1/2} \\, y^{-2/3}}{x^{-1/4} \\, y^{1/3}}$.",
    options: { A: "$\\dfrac{x^{3/4}}{y}$", B: "$x^{1/4} y$", C: "$x^{3/4} y$", D: "$\\dfrac{1}{x^{3/4} y}$" },
    correctAnswer: "A",
    explanation: "$x^{1/2 - (-1/4)} \\, y^{-2/3 - 1/3} = x^{3/4} \\, y^{-1} = \\dfrac{x^{3/4}}{y}$."
  },
  {
    id: "WAEC-SS2-IND-006",
    class: "SSS 2",
    topic: "Indices",
    question: "If $2^{x + y} = 16$ and $3^{x - y} = 9$, find the values of $x$ and $y$.",
    options: { A: "$x = 3,\\ y = 1$", B: "$x = 4,\\ y = 2$", C: "$x = 2,\\ y = 1$", D: "$x = 5,\\ y = 1$" },
    correctAnswer: "A",
    explanation: "$2^{x+y} = 2^4 \\implies x + y = 4$. $3^{x-y} = 3^2 \\implies x - y = 2$. Adding gives $2x = 6 \\implies x = 3, y = 1$."
  },
  {
    id: "WAEC-SS2-IND-007",
    class: "SSS 2",
    topic: "Indices",
    question: "Find $x$ if $\\left(\\dfrac{1}{2}\\right)^{2x - 3} = 8^{x + 1}$.",
    options: { A: "$0$", B: "$-\\dfrac{1}{5}$", C: "$\\dfrac{1}{5}$", D: "$1$" },
    correctAnswer: "A",
    explanation: "$2^{-(2x - 3)} = (2^3)^{x + 1} \\implies 2^{3 - 2x} = 2^{3x + 3} \\implies 3 - 2x = 3x + 3 \\implies 5x = 0 \\implies x = 0$."
  },
  {
    id: "WAEC-SS2-IND-008",
    class: "SSS 2",
    topic: "Indices",
    question: "Evaluate: $(0.125)^{-2/3}$.",
    options: { A: "$4$", B: "$2$", C: "$8$", D: "$\\dfrac{1}{4}$" },
    correctAnswer: "A",
    explanation: "$0.125 = \\frac{1}{8} = 2^{-3}$. $(2^{-3})^{-2/3} = 2^2 = 4$."
  },
  {
    id: "WAEC-SS2-IND-009",
    class: "SSS 2",
    topic: "Indices",
    question: "Solve the equation: $5^{2x} - 26(5^x) + 25 = 0$.",
    options: { A: "$x = 0\\text{ or }x = 2$", B: "$x = 1\\text{ or }x = 2$", C: "$x = -1\\text{ or }x = 2$", D: "$x = 1\\text{ or }x = 5$" },
    correctAnswer: "A",
    explanation: "Let $u = 5^x$: $u^2 - 26u + 25 = 0 \\implies (u - 1)(u - 25) = 0 \\implies 5^x = 1 \\implies x = 0$; $5^x = 25 \\implies x = 2$."
  },
  {
    id: "WAEC-SS2-IND-010",
    class: "SSS 2",
    topic: "Indices",
    question: "Simplify: $\\dfrac{27^{2/3} \\times 4^{-1/2}}{36^{1/2}}$.",
    options: { A: "$\\dfrac{3}{4}$", B: "$\\dfrac{3}{2}$", C: "$\\dfrac{9}{4}$", D: "$\\dfrac{1}{4}$" },
    correctAnswer: "A",
    explanation: "$27^{2/3} = 9$, $4^{-1/2} = 1/2$, $36^{1/2} = 6$. Ratio: $\\dfrac{9 \\times 0.5}{6} = \\dfrac{4.5}{6} = \\dfrac{3}{4}$."
  },
  {
    id: "WAEC-SS2-IND-011",
    class: "SSS 2",
    topic: "Indices",
    question: "If $8^x = 32^y$ and $9^x = 27^{y + 1}$, find $x$ and $y$.",
    options: { A: "$x = 15,\\ y = 9$", B: "$x = 10,\\ y = 6$", C: "$x = 5,\\ y = 3$", D: "$x = 12,\\ y = 8$" },
    correctAnswer: "A",
    explanation: "$2^{3x} = 2^{5y} \\implies 3x = 5y \\implies y = \\frac{3x}{5}$. $3^{2x} = 3^{3y+3} \\implies 2x = 3y + 3$. $2x - \\frac{9x}{5} = 3 \\implies \\frac{x}{5} = 3 \\implies x = 15, y = 9$."
  },
  {
    id: "WAEC-SS2-IND-012",
    class: "SSS 2",
    topic: "Indices",
    question: "Solve for $x$: $25^{x - 1} = \\left(\\dfrac{1}{125}\\right)^{x + 2}$.",
    options: { A: "$-\\dfrac{4}{5}$", B: "$-\\dfrac{2}{5}$", C: "$\\dfrac{4}{5}$", D: "$-\\dfrac{1}{2}$" },
    correctAnswer: "A",
    explanation: "$5^{2(x - 1)} = 5^{-3(x + 2)} \\implies 2x - 2 = -3x - 6 \\implies 5x = -4 \\implies x = -\\dfrac{4}{5}$."
  },
  {
    id: "WAEC-SS2-IND-013",
    class: "SSS 2",
    topic: "Indices",
    question: "Simplify: $\\dfrac{2^{n+4} - 2 \\times 2^n}{2 \\times 2^{n+3}}$.",
    options: { A: "$\\dfrac{7}{8}$", B: "$\\dfrac{3}{4}$", C: "$\\dfrac{1}{2}$", D: "$\\dfrac{7}{16}$" },
    correctAnswer: "A",
    explanation: "Numerator: $2^n(16 - 2) = 14 \\cdot 2^n$. Denominator: $2^{n+4} = 16 \\cdot 2^n$. Ratio $= \\dfrac{14}{16} = \\dfrac{7}{8}$."
  },
  {
    id: "WAEC-SS2-IND-014",
    class: "SSS 2",
    topic: "Indices",
    question: "Find the values of $x$ satisfying: $9^{x + 1} - 28(3^x) + 3 = 0$.",
    options: { A: "$x = 1\\text{ or }x = -2$", B: "$x = -1\\text{ or }x = 1$", C: "$x = -1\\text{ or }x = -2$", D: "$x = 2\\text{ or }x = 0$" },
    correctAnswer: "A",
    explanation: "$9(3^x)^2 - 28(3^x) + 3 = 0 \\implies (9u - 1)(u - 3) = 0 \\implies 3^x = 1/9 \\implies x = -2$; $3^x = 3 \\implies x = 1$."
  },
  {
    id: "WAEC-SS2-IND-015",
    class: "SSS 2",
    topic: "Indices",
    question: "Evaluate: $\\left(\\dfrac{64}{27}\\right)^{-2/3} \\times \\left(\\dfrac{16}{81}\\right)^{1/2}$.",
    options: { A: "$\\dfrac{1}{4}$", B: "$\\dfrac{1}{3}$", C: "$\\dfrac{2}{3}$", D: "$\\dfrac{3}{4}$" },
    correctAnswer: "A",
    explanation: "$\\left(\\dfrac{27}{64}\\right)^{2/3} = \\left(\\dfrac{3}{4}\\right)^2 = \\dfrac{9}{16}$. $\\left(\\dfrac{16}{81}\\right)^{1/2} = \\dfrac{4}{9}$. Product: $\\dfrac{9}{16} \\times \\dfrac{4}{9} = \\dfrac{4}{16} = \\dfrac{1}{4}$."
  },
  {
    id: "WAEC-SS2-IND-016",
    class: "SSS 2",
    topic: "Indices",
    question: "If $2^{x - 1} + 2^{x + 1} = 40$, find $x$.",
    options: { A: "$4$", B: "$3$", C: "$5$", D: "$6$" },
    correctAnswer: "A",
    explanation: "$2^x\\left(\\frac{1}{2} + 2\\right) = 40 \\implies 2^x\\left(\\frac{5}{2}\\right) = 40 \\implies 2^x = 16 = 2^4 \\implies x = 4$."
  },
  {
    id: "WAEC-SS2-IND-017",
    class: "SSS 2",
    topic: "Indices",
    question: "Given that $2^x = 3^y = 6^{-z}$, express $z$ in terms of $x$ and $y$.",
    options: { A: "$z = -\\dfrac{xy}{x + y}$", B: "$z = \\dfrac{xy}{x + y}$", C: "$z = \\dfrac{x + y}{xy}$", D: "$z = x + y$" },
    correctAnswer: "A",
    explanation: "Let $2^x = 3^y = 6^{-z} = k$. $2 = k^{1/x}, 3 = k^{1/y}, 6 = k^{-1/z}$. $2 \\times 3 = 6 \\implies k^{1/x + 1/y} = k^{-1/z} \\implies \\frac{1}{x} + \\frac{1}{y} = -\\frac{1}{z} \\implies z = -\\dfrac{xy}{x+y}$."
  },
  {
    id: "WAEC-SS2-IND-018",
    class: "SSS 2",
    topic: "Indices",
    question: "Simplify: $\\left(\\dfrac{a^3 \\, b^{-2}}{a^{-1} \\, b^4}\\right)^{-1/2}$.",
    options: { A: "$\\dfrac{b^3}{a^2}$", B: "$\\dfrac{a^2}{b^3}$", C: "$\\dfrac{b^2}{a^3}$", D: "$\\dfrac{a}{b^2}$" },
    correctAnswer: "A",
    explanation: "Inside: $a^{3 - (-1)} \\, b^{-2 - 4} = a^4 \\, b^{-6}$. Raising to $-1/2$: $(a^4)^{-1/2} \\, (b^{-6})^{-1/2} = a^{-2} \\, b^3 = \\dfrac{b^3}{a^2}$."
  },
  {
    id: "WAEC-SS2-IND-019",
    class: "SSS 2",
    topic: "Indices",
    question: "Solve the equation: $3^{2y + 1} - 10(3^y) + 3 = 0$.",
    options: { A: "$y = 1\\text{ or }y = -1$", B: "$y = 2\\text{ or }y = 0$", C: "$y = 3\\text{ or }y = 1/3$", D: "$y = -1\\text{ or }y = -2$" },
    correctAnswer: "A",
    explanation: "$3(3^y)^2 - 10(3^y) + 3 = (3m - 1)(m - 3) = 0 \\implies 3^y = 1/3 \\implies y = -1$; $3^y = 3 \\implies y = 1$."
  },
  {
    id: "WAEC-SS2-IND-020",
    class: "SSS 2",
    topic: "Indices",
    question: "Rationalize the denominator of $\\dfrac{3\\sqrt{2} - 2\\sqrt{3}}{3\\sqrt{2} + 2\\sqrt{3}}$.",
    options: { A: "$5 - 2\\sqrt{6}$", B: "$5 + 2\\sqrt{6}$", C: "$18 - 12\\sqrt{6}$", D: "$5 - \\sqrt{6}$" },
    correctAnswer: "A",
    explanation: "Multiply numerator & denominator by $3\\sqrt{2} - 2\\sqrt{3}$: $\\dfrac{(3\\sqrt{2} - 2\\sqrt{3})^2}{(3\\sqrt{2})^2 - (2\\sqrt{3})^2} = \\dfrac{18 - 12\\sqrt{6} + 12}{18 - 12} = \\dfrac{30 - 12\\sqrt{6}}{6} = 5 - 2\\sqrt{6}$."
  },

  // ── 2. LOGARITHM THEORY (20 Questions) ────────────────────────────────────
  {
    id: "WAEC-SS2-LOG-001",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If $\\log_a x = m$ and $\\log_a y = n$, express $\\log_a \\left(\\dfrac{x^3}{y^2}\\right)$ in terms of $m$ and $n$.",
    options: { A: "$3m - 2n$", B: "$3m + 2n$", C: "$m^3 - n^2$", D: "$\\dfrac{3m}{2n}$" },
    correctAnswer: "A",
    explanation: "$\\log_a(x^3 / y^2) = \\log_a(x^3) - \\log_a(y^2) = 3\\log_a x - 2\\log_a y = 3m - 2n$."
  },
  {
    id: "WAEC-SS2-LOG-002",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "By the change of base formula, $\\log_b a$ is identically equal to:",
    options: { A: "$\\dfrac{\\log_c a}{\\log_c b}$", B: "$\\dfrac{\\log_c b}{\\log_c a}$", C: "$\\log_c(a \\cdot b)$", D: "$\\log_c a - \\log_c b$" },
    correctAnswer: "A",
    explanation: "The standard change of base rule states $\\log_b a = \\dfrac{\\log_c a}{\\log_c b}$."
  },
  {
    id: "WAEC-SS2-LOG-003",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Find $x$ if $\\log_3(x + 6) - \\log_3 x = 2$.",
    options: { A: "$\\dfrac{3}{4}$", B: "$\\dfrac{4}{3}$", C: "$2$", D: "$\\dfrac{1}{2}$" },
    correctAnswer: "A",
    explanation: "$\\log_3\\left(\\dfrac{x+6}{x}\\right) = 2 \\implies \\dfrac{x+6}{x} = 3^2 = 9 \\implies x + 6 = 9x \\implies 8x = 6 \\implies x = \\dfrac{3}{4}$."
  },
  {
    id: "WAEC-SS2-LOG-004",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If $\\log_{10}2 = 0.3010$ and $\\log_{10}3 = 0.4771$, calculate $\\log_{10}15$.",
    options: { A: "$1.1761$", B: "$1.4771$", C: "$0.7781$", D: "$1.2552$" },
    correctAnswer: "A",
    explanation: "$15 = \\dfrac{3 \\times 10}{2} \\implies \\log 15 = \\log 3 + 1 - \\log 2 = 0.4771 + 1 - 0.3010 = 1.1761$."
  },
  {
    id: "WAEC-SS2-LOG-005",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Evaluate without tables: $\\log_2 32 + \\log_3 81 - \\log_5 125$.",
    options: { A: "$6$", B: "$4$", C: "$7$", D: "$5$" },
    correctAnswer: "A",
    explanation: "$5 + 4 - 3 = 6$."
  },
  {
    id: "WAEC-SS2-LOG-006",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Solve for $x$: $\\log_x 64 = -3$.",
    options: { A: "$\\dfrac{1}{4}$", B: "$4$", C: "$-4$", D: "$\\dfrac{1}{8}$" },
    correctAnswer: "A",
    explanation: "$x^{-3} = 64 = 4^3 = (1/4)^{-3} \\implies x = 1/4$."
  },
  {
    id: "WAEC-SS2-LOG-007",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Given that $\\log_{10}y = 2\\log_{10}x + 3$, express $y$ in terms of $x$.",
    options: { A: "$y = 1000x^2$", B: "$y = x^2 + 1000$", C: "$y = 3x^2$", D: "$y = 1000x$" },
    correctAnswer: "A",
    explanation: "$\\log_{10}y = \\log_{10}(x^2) + \\log_{10}(1000) = \\log_{10}(1000x^2) \\implies y = 1000x^2$."
  },
  {
    id: "WAEC-SS2-LOG-008",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Simplify: $\\log_a b \\times \\log_b c \\times \\log_c a$.",
    options: { A: "$1$", B: "$0$", C: "$abc$", D: "$\\log_a(abc)$" },
    correctAnswer: "A",
    explanation: "Using change of base: $\\dfrac{\\log b}{\\log a} \\times \\dfrac{\\log c}{\\log b} \\times \\dfrac{\\log a}{\\log c} = 1$."
  },
  {
    id: "WAEC-SS2-LOG-009",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Solve the equation: $\\log_{10}(x^2 - 1) - \\log_{10}(x - 1) = 1$.",
    options: { A: "$x = 9$", B: "$x = 10$", C: "$x = 11$", D: "$x = 8$" },
    correctAnswer: "A",
    explanation: "$\\log_{10}\\left(\\dfrac{x^2 - 1}{x - 1}\\right) = \\log_{10}(x + 1) = 1 \\implies x + 1 = 10 \\implies x = 9$."
  },
  {
    id: "WAEC-SS2-LOG-010",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If $\\log_2 x + 2\\log_4 x = 4$, find $x$.",
    options: { A: "$4$", B: "$8$", C: "$16$", D: "$2$" },
    correctAnswer: "A",
    explanation: "$\\log_4 x = \\frac{1}{2}\\log_2 x \\implies 2\\log_4 x = \\log_2 x$. Then $\\log_2 x + \\log_2 x = 4 \\implies 2\\log_2 x = 4 \\implies \\log_2 x = 2 \\implies x = 4$."
  },
  {
    id: "WAEC-SS2-LOG-011",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "What is the value of $\\log_8 16$?",
    options: { A: "$\\dfrac{4}{3}$", B: "$\\dfrac{3}{4}$", C: "$2$", D: "$\\dfrac{1}{2}$" },
    correctAnswer: "A",
    explanation: "Let $y = \\log_8 16 \\implies 8^y = 16 \\implies 2^{3y} = 2^4 \\implies 3y = 4 \\implies y = \\dfrac{4}{3}$."
  },
  {
    id: "WAEC-SS2-LOG-012",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If $\\log_{10}2 = 0.3010$, how many digits are there in $2^{50}$?",
    options: { A: "$16$", B: "$15$", C: "$17$", D: "$50$" },
    correctAnswer: "A",
    explanation: "$\\lfloor 50 \\times 0.3010 \\rfloor + 1 = \\lfloor 15.05 \\rfloor + 1 = 15 + 1 = 16$ digits."
  },
  {
    id: "WAEC-SS2-LOG-013",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Solve for $x$: $(\\log_3 x)^2 - 4\\log_3 x + 3 = 0$.",
    options: { A: "$x = 3\\text{ or }x = 27$", B: "$x = 1\\text{ or }x = 3$", C: "$x = 9\\text{ or }x = 27$", D: "$x = 3\\text{ or }x = 9$" },
    correctAnswer: "A",
    explanation: "$(u - 1)(u - 3) = 0 \\implies \\log_3 x = 1 \\implies x = 3$; $\\log_3 x = 3 \\implies x = 3^3 = 27$."
  },
  {
    id: "WAEC-SS2-LOG-014",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If $\\log_a 2 = x$ and $\\log_a 3 = y$, find $\\log_a(\\sqrt{6})$.",
    options: { A: "$\\dfrac{x + y}{2}$", B: "$x + y$", C: "$2(x + y)$", D: "$\\sqrt{xy}$" },
    correctAnswer: "A",
    explanation: "$\\log_a(\\sqrt{6}) = \\frac{1}{2}\\log_a(2 \\times 3) = \\dfrac{x + y}{2}$."
  },
  {
    id: "WAEC-SS2-LOG-015",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Evaluate: $5^{\\log_5 7}$.",
    options: { A: "$7$", B: "$5$", C: "$35$", D: "$\\log_5 7$" },
    correctAnswer: "A",
    explanation: "By the fundamental inverse identity, $b^{\\log_b x} = x$. Hence $5^{\\log_5 7} = 7$."
  },
  {
    id: "WAEC-SS2-LOG-016",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Find $x$ if $\\log_2(\\log_3 x) = 1$.",
    options: { A: "$9$", B: "$6$", C: "$8$", D: "$3$" },
    correctAnswer: "A",
    explanation: "$\\log_3 x = 2^1 = 2 \\implies x = 3^2 = 9$."
  },
  {
    id: "WAEC-SS2-LOG-017",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If $\\log_{10}(x - 3) + \\log_{10}x = 1$, find $x$.",
    options: { A: "$x = 5$", B: "$x = 2$", C: "$x = -2$", D: "$x = 5\\text{ or }x = -2$" },
    correctAnswer: "A",
    explanation: "$x(x - 3) = 10 \\implies x^2 - 3x - 10 = 0 \\implies (x - 5)(x + 2) = 0$. Since $x > 3$, $x = 5$."
  },
  {
    id: "WAEC-SS2-LOG-018",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Express $\\log_b\\left(\\sqrt{\\dfrac{x^3}{y}}\\right)$ in terms of $\\log_b x$ and $\\log_b y$.",
    options: { A: "$\\dfrac{3}{2}\\log_b x - \\dfrac{1}{2}\\log_b y$", B: "$3\\log_b x - \\log_b y$", C: "$\\dfrac{1}{2}(3\\log_b x + \\log_b y)$", D: "$\\dfrac{3}{2}\\log_b(x/y)$" },
    correctAnswer: "A",
    explanation: "$\\frac{1}{2}(3\\log_b x - \\log_b y) = \\dfrac{3}{2}\\log_b x - \\dfrac{1}{2}\\log_b y$."
  },
  {
    id: "WAEC-SS2-LOG-019",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "Solve for $x$: $\\log_2 x + \\log_x 2 = 2.5$.",
    options: { A: "$x = 4\\text{ or }x = \\sqrt{2}$", B: "$x = 2\\text{ or }x = 4$", C: "$x = 8\\text{ or }x = 2$", D: "$x = 4\\text{ or }x = 1/2$" },
    correctAnswer: "A",
    explanation: "Let $u = \\log_2 x$: $u + \\frac{1}{u} = \\frac{5}{2} \\implies 2u^2 - 5u + 2 = 0 \\implies (2u - 1)(u - 2) = 0 \\implies u = 2 \\implies x = 4$; $u = 1/2 \\implies x = 2^{1/2} = \\sqrt{2}$."
  },
  {
    id: "WAEC-SS2-LOG-020",
    class: "SSS 2",
    topic: "Logarithm Theory",
    question: "If $\\log_{10}a = p$ and $\\log_{10}b = q$, express $\\log_{10}\\left(\\dfrac{100\\sqrt{a}}{b^3}\\right)$ in terms of $p$ and $q$.",
    options: { A: "$2 + \\dfrac{1}{2}p - 3q$", B: "$2 + p - 3q$", C: "$100 + \\dfrac{1}{2}p - 3q$", D: "$2 + \\dfrac{1}{2}p + 3q$" },
    correctAnswer: "A",
    explanation: "$\\log_{10}100 + \\frac{1}{2}\\log_{10}a - 3\\log_{10}b = 2 + \\dfrac{1}{2}p - 3q$."
  },

  // ── 3. SET THEORY - 3 SETS & ADVANCED (20 Questions) ──────────────────────
  {
    id: "WAEC-SS2-SET-001",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a class of $58$ students, $28$ offer Biology, $35$ offer Economics, and $15$ offer Physics. Each student offers at least one subject. If $12$ offer both Biology and Economics, $7$ offer Biology and Physics, and $5$ offer Economics and Physics, find the number of students who offer all three subjects.",
    options: { A: "$4$", B: "$3$", C: "$5$", D: "$2$" },
    correctAnswer: "A",
    explanation: "$n(B \\cup E \\cup P) = 28 + 35 + 15 - (12 + 7 + 5) + x \\implies 58 = 78 - 24 + x = 54 + x \\implies x = 4$."
  },
  {
    id: "WAEC-SS2-SET-002",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a survey of $100$ people, $60$ like Apple, $45$ like Banana, $35$ like Orange, $20$ like Apple and Banana, $15$ like Apple and Orange, $10$ like Banana and Orange, and $5$ like all three fruits. How many like none of the three fruits?",
    options: { A: "$0$", B: "$5$", C: "$10$", D: "$15$" },
    correctAnswer: "A",
    explanation: "$n(A \\cup B \\cup O) = 60 + 45 + 35 - (20 + 15 + 10) + 5 = 140 - 45 + 5 = 100$. None $= 100 - 100 = 0$."
  },
  {
    id: "WAEC-SS2-SET-003",
    class: "SSS 2",
    topic: "Set Theory",
    question: "For three sets $A, B,$ and $C$, the identity $(A \\cup B)'$ is equivalent to:",
    options: { A: "$A' \\cap B'$", B: "$A' \\cup B'$", C: "$A \\cap B'$", D: "$(A \\cap B)'$" },
    correctAnswer: "A",
    explanation: "By De Morgan's Law, $(A \\cup B)' = A' \\cap B'$."
  },
  {
    id: "WAEC-SS2-SET-004",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If $n(A) = 28$, $n(B) = 32$, and $n(A \\cup B) = 45$, find $n(A \\cap B')$ (elements in $A$ only).",
    options: { A: "$13$", B: "$15$", C: "$17$", D: "$28$" },
    correctAnswer: "A",
    explanation: "$n(A \\cap B) = 28 + 32 - 45 = 15$. $A$ only $= n(A) - n(A \\cap B) = 28 - 15 = 13$."
  },
  {
    id: "WAEC-SS2-SET-005",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If $A = \\{1, 2\\}$ and $B = \\{3, 4, 5\\}$, what is the cardinality of the Cartesian product $A \\times B$?",
    options: { A: "$6$", B: "$5$", C: "$8$", D: "$9$" },
    correctAnswer: "A",
    explanation: "$n(A \\times B) = n(A) \\times n(B) = 2 \\times 3 = 6$."
  },
  {
    id: "WAEC-SS2-SET-006",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a group of $60$ students, $35$ play football, $30$ play volleyball, and $12$ play both. How many students play exactly one sport?",
    options: { A: "$41$", B: "$53$", C: "$23$", D: "$18$" },
    correctAnswer: "A",
    explanation: "Football only $= 35 - 12 = 23$. Volleyball only $= 30 - 12 = 18$. Exactly one $= 23 + 18 = 41$."
  },
  {
    id: "WAEC-SS2-SET-007",
    class: "SSS 2",
    topic: "Set Theory",
    question: "Which of the following represents the shaded region for $(A \\cap B) \\cup (A \\cap C)$?",
    options: { A: "$A \\cap (B \\cup C)$", B: "$A \\cup (B \\cap C)$", C: "$(A \\cup B) \\cap C$", D: "$A' \\cap (B \\cup C)$" },
    correctAnswer: "A",
    explanation: "By the distributive law of intersection over union: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$."
  },
  {
    id: "WAEC-SS2-SET-008",
    class: "SSS 2",
    topic: "Set Theory",
    question: "Out of $80$ students, $45$ take French and $40$ take German. If $15$ take neither, how many take both French and German?",
    options: { A: "$20$", B: "$15$", C: "$25$", D: "$30$" },
    correctAnswer: "A",
    explanation: "At least one $= 80 - 15 = 65$. $n(F \\cap G) = 45 + 40 - 65 = 20$."
  },
  {
    id: "WAEC-SS2-SET-009",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If universal set $\\xi = \\{1, 2, \\dots, 20\\}$, $E = \\{\\text{multiples of } 2\\}$, and $F = \\{\\text{multiples of } 3\\}$, find $n(E \\cap F)$.",
    options: { A: "$3$", B: "$6$", C: "$10$", D: "$2$" },
    correctAnswer: "A",
    explanation: "$E \\cap F$ consists of multiples of $6$ in the set: $\\{6, 12, 18\\}$, so $n(E \\cap F) = 3$."
  },
  {
    id: "WAEC-SS2-SET-010",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a town, $70\\%$ of households have a TV, $60\\%$ have a radio, and $50\\%$ have both. What percentage have neither?",
    options: { A: "$20\\%$", B: "$10\\%$", C: "$30\\%$", D: "$15\\%$" },
    correctAnswer: "A",
    explanation: "At least one $= 70\\% + 60\\% - 50\\% = 80\\%$. Neither $= 100\\% - 80\\% = 20\\%$."
  },
  {
    id: "WAEC-SS2-SET-011",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If $n(A) = 10$ and $n(B) = 15$, what is the maximum possible value of $n(A \\cup B)$?",
    options: { A: "$25$", B: "$15$", C: "$10$", D: "$30$" },
    correctAnswer: "A",
    explanation: "The union is maximized when $A$ and $B$ are completely disjoint: $n(A \\cup B) = 10 + 15 = 25$."
  },
  {
    id: "WAEC-SS2-SET-012",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If $n(A) = 10$ and $n(B) = 15$, what is the minimum possible value of $n(A \\cup B)$?",
    options: { A: "$15$", B: "$10$", C: "$5$", D: "$25$" },
    correctAnswer: "A",
    explanation: "The union is minimized when $A \\subset B$, in which case $n(A \\cup B) = n(B) = 15$."
  },
  {
    id: "WAEC-SS2-SET-013",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If $A \\setminus B = A$, what does this deduce about sets $A$ and $B$?",
    options: { A: "$A \\cap B = \\emptyset$", B: "$A \\subset B$", C: "$B \\subset A$", D: "$A = B$" },
    correctAnswer: "A",
    explanation: "Removing elements of $B$ leaves $A$ unchanged if and only if $A$ and $B$ share no common elements ($A \\cap B = \\emptyset$)."
  },
  {
    id: "WAEC-SS2-SET-014",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a $3$-set survey of $50$ students: $n(A) = 20$, $n(B) = 25$, $n(C) = 22$, $n(A \\cap B) = 10$, $n(B \\cap C) = 8$, $n(A \\cap C) = 7$, and $n(A \\cap B \\cap C) = 3$. Find $n(A \\cup B \\cup C)'$.",
    options: { A: "$5$", B: "$8$", C: "$10$", D: "$3$" },
    correctAnswer: "A",
    explanation: "$n(A \\cup B \\cup C) = 20 + 25 + 22 - (10 + 8 + 7) + 3 = 67 - 25 + 3 = 45$. Outside $= 50 - 45 = 5$."
  },
  {
    id: "WAEC-SS2-SET-015",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If $P(S)$ denotes the power set of $S$, and $n(P(S)) = 64$, find $n(S)$.",
    options: { A: "$6$", B: "$5$", C: "$7$", D: "$8$" },
    correctAnswer: "A",
    explanation: "$2^n = 64 = 2^6 \\implies n = 6$."
  },
  {
    id: "WAEC-SS2-SET-016",
    class: "SSS 2",
    topic: "Set Theory",
    question: "Which of the following is equivalent to $(A \\cap B)'$?",
    options: { A: "$A' \\cup B'$", B: "$A' \\cap B'$", C: "$A \\cup B'$", D: "$A' \\cup B$" },
    correctAnswer: "A",
    explanation: "By De Morgan's Law, $(A \\cap B)' = A' \\cup B'$."
  },
  {
    id: "WAEC-SS2-SET-017",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If $A = \\{x : x^2 - 5x + 6 = 0\\}$ and $B = \\{x : x^2 - 7x + 12 = 0\\}$, find $A \\cap B$.",
    options: { A: "$\\{3\\}$", B: "$\\{2\\}$", C: "$\\{4\\}$", D: "$\\{2, 3, 4\\}$" },
    correctAnswer: "A",
    explanation: "$A = \\{2, 3\\}$; $B = \\{3, 4\\}$. The common element is $3$, so $A \\cap B = \\{3\\}$."
  },
  {
    id: "WAEC-SS2-SET-018",
    class: "SSS 2",
    topic: "Set Theory",
    question: "In a class of $40$ students, $22$ study Biology, $18$ study Geography, and $6$ study both. How many offer Biology only?",
    options: { A: "$16$", B: "$12$", C: "$22$", D: "$14$" },
    correctAnswer: "A",
    explanation: "Biology only $= 22 - 6 = 16$."
  },
  {
    id: "WAEC-SS2-SET-019",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If $n(U) = 80$, $n(A) = 35$, $n(B) = 40$, and $n(A \\cup B)' = 15$, find $n(A \\cap B)$.",
    options: { A: "$10$", B: "$15$", C: "$5$", D: "$20$" },
    correctAnswer: "A",
    explanation: "$n(A \\cup B) = 80 - 15 = 65$. $n(A \\cap B) = 35 + 40 - 65 = 10$."
  },
  {
    id: "WAEC-SS2-SET-020",
    class: "SSS 2",
    topic: "Set Theory",
    question: "If $A \\subset B$ and $B \\subset C$, then:",
    options: { A: "$A \\subset C$", B: "$C \\subset A$", C: "$A \\cap C = \\emptyset$", D: "$A = C$" },
    correctAnswer: "A",
    explanation: "Subset inclusion is transitive: $A \\subset B \\land B \\subset C \\implies A \\subset C$."
  },

  // ── 4. QUADRATIC EQUATIONS (20 Questions) ─────────────────────────────────
  {
    id: "WAEC-SS2-QUA-001",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Find the roots of the quadratic equation: $2x^2 - 5x - 3 = 0$.",
    options: { A: "$x = 3\\text{ or }x = -\\dfrac{1}{2}$", B: "$x = -3\\text{ or }x = \\dfrac{1}{2}$", C: "$x = 3\\text{ or }x = \\dfrac{1}{2}$", D: "$x = -3\\text{ or }x = -\\dfrac{1}{2}$" },
    correctAnswer: "A",
    explanation: "$(2x + 1)(x - 3) = 0 \\implies x = 3$ or $x = -\\dfrac{1}{2}$."
  },
  {
    id: "WAEC-SS2-QUA-002",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If $\\alpha$ and $\\beta$ are the roots of $3x^2 - 7x + 2 = 0$, find $\\alpha + \\beta$.",
    options: { A: "$\\dfrac{7}{3}$", B: "$-\\dfrac{7}{3}$", C: "$\\dfrac{2}{3}$", D: "$-\\dfrac{2}{3}$" },
    correctAnswer: "A",
    explanation: "$\\alpha + \\beta = -\\dfrac{b}{a} = -\\dfrac{-7}{3} = \\dfrac{7}{3}$."
  },
  {
    id: "WAEC-SS2-QUA-003",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "For what values of $k$ will $x^2 + kx + 9 = 0$ have equal roots?",
    options: { A: "$k = \\pm 6$", B: "$k = \\pm 3$", C: "$k = \\pm 9$", D: "$k = \\pm 18$" },
    correctAnswer: "A",
    explanation: "Equal roots $\\implies \\Delta = b^2 - 4ac = 0 \\implies k^2 - 36 = 0 \\implies k = \\pm 6$."
  },
  {
    id: "WAEC-SS2-QUA-004",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Form the quadratic equation whose roots are $-3$ and $5$.",
    options: { A: "$x^2 - 2x - 15 = 0$", B: "$x^2 + 2x - 15 = 0$", C: "$x^2 - 8x + 15 = 0$", D: "$x^2 + 8x - 15 = 0$" },
    correctAnswer: "A",
    explanation: "Sum $= -3 + 5 = 2$; Product $= -3 \\times 5 = -15$. Equation: $x^2 - 2x - 15 = 0$."
  },
  {
    id: "WAEC-SS2-QUA-005",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If $\\alpha$ and $\\beta$ are roots of $2x^2 + 3x - 5 = 0$, find the product $\\alpha\\beta$.",
    options: { A: "$-\\dfrac{5}{2}$", B: "$\\dfrac{5}{2}$", C: "$-\\dfrac{3}{2}$", D: "$\\dfrac{3}{2}$" },
    correctAnswer: "A",
    explanation: "Product of roots $\\alpha\\beta = \\dfrac{c}{a} = -\\dfrac{5}{2}$."
  },
  {
    id: "WAEC-SS2-QUA-006",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Determine the nature of the roots of $2x^2 + 3x + 5 = 0$.",
    options: { A: "Complex / Non-real", B: "Real and equal", C: "Real and distinct", D: "Rational and unequal" },
    correctAnswer: "A",
    explanation: "$\\Delta = b^2 - 4ac = 3^2 - 4(2)(5) = 9 - 40 = -31 < 0$. The roots are complex/non-real."
  },
  {
    id: "WAEC-SS2-QUA-007",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Solve by completing the square: $x^2 + 6x - 7 = 0$.",
    options: { A: "$x = 1\\text{ or }x = -7$", B: "$x = -1\\text{ or }x = 7$", C: "$x = 2\\text{ or }x = -8$", D: "$x = -2\\text{ or }x = 8$" },
    correctAnswer: "A",
    explanation: "$(x + 3)^2 = 7 + 9 = 16 \\implies x + 3 = \\pm 4 \\implies x = 1$ or $x = -7$."
  },
  {
    id: "WAEC-SS2-QUA-008",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If $\\alpha$ and $\\beta$ are roots of $x^2 - 4x + 1 = 0$, evaluate $\\alpha^2 + \\beta^2$.",
    options: { A: "$14$", B: "$16$", C: "$18$", D: "$12$" },
    correctAnswer: "A",
    explanation: "$\\alpha + \\beta = 4, \\alpha\\beta = 1$. $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = 4^2 - 2(1) = 14$."
  },
  {
    id: "WAEC-SS2-QUA-009",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Find $m$ for which the line $y = 2x + m$ is tangent to the parabola $y = x^2$.",
    options: { A: "$m = -1$", B: "$m = 1$", C: "$m = -2$", D: "$m = 2$" },
    correctAnswer: "A",
    explanation: "$x^2 - 2x - m = 0$. Tangency $\\implies \\Delta = (-2)^2 - 4(1)(-m) = 4 + 4m = 0 \\implies m = -1$."
  },
  {
    id: "WAEC-SS2-QUA-010",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "The length of a rectangular garden is $3\\text{ m}$ more than its width. If the area is $70\\text{ m}^2$, find its perimeter.",
    options: { A: "$34\\text{ m}$", B: "$20\\text{ m}$", C: "$40\\text{ m}$", D: "$28\\text{ m}$" },
    correctAnswer: "A",
    explanation: "$w(w + 3) = 70 \\implies w^2 + 3w - 70 = 0 \\implies (w + 10)(w - 7) = 0 \\implies w = 7$. Length $= 10$. Perimeter $= 2(7 + 10) = 34\\text{ m}$."
  },
  {
    id: "WAEC-SS2-QUA-011",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If $\\alpha$ and $\\beta$ are roots of $x^2 - 5x + 6 = 0$, find $\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta}$.",
    options: { A: "$\\dfrac{5}{6}$", B: "$\\dfrac{6}{5}$", C: "$-\\dfrac{5}{6}$", D: "$\\dfrac{1}{5}$" },
    correctAnswer: "A",
    explanation: "$\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta} = \\dfrac{\\alpha + \\beta}{\\alpha\\beta} = \\dfrac{5}{6}$."
  },
  {
    id: "WAEC-SS2-QUA-012",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Form the quadratic equation whose roots are $\\dfrac{1}{2}$ and $-\\dfrac{2}{3}$.",
    options: { A: "$6x^2 + x - 2 = 0$", B: "$6x^2 - x - 2 = 0$", C: "$6x^2 - x + 2 = 0$", D: "$6x^2 + x + 2 = 0$" },
    correctAnswer: "A",
    explanation: "Sum $= 1/2 - 2/3 = -1/6$. Product $= -1/3$. $x^2 - (-1/6)x + (-1/3) = 0 \\implies 6x^2 + x - 2 = 0$."
  },
  {
    id: "WAEC-SS2-QUA-013",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Solve the equation: $x + \\dfrac{6}{x} = 5$.",
    options: { A: "$x = 2\\text{ or }x = 3$", B: "$x = 1\\text{ or }x = 6$", C: "$x = -2\\text{ or }x = -3$", D: "$x = 3\\text{ or }x = -2$" },
    correctAnswer: "A",
    explanation: "$x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0 \\implies x = 2$ or $x = 3$."
  },
  {
    id: "WAEC-SS2-QUA-014",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If one root of $x^2 + px + 12 = 0$ is $3$, find the other root and the value of $p$.",
    options: { A: "$\\text{other root} = 4,\\ p = -7$", B: "$\\text{other root} = 4,\\ p = 7$", C: "$\\text{other root} = -4,\\ p = 1$", D: "$\\text{other root} = -4,\\ p = -7$" },
    correctAnswer: "A",
    explanation: "Product $= 12 \\implies 3 \\times r = 12 \\implies r = 4$. Sum $= 3 + 4 = 7 = -p \\implies p = -7$."
  },
  {
    id: "WAEC-SS2-QUA-015",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If $\\alpha$ and $\\beta$ are roots of $x^2 - 3x + 1 = 0$, form the equation whose roots are $2\\alpha$ and $2\\beta$.",
    options: { A: "$x^2 - 6x + 4 = 0$", B: "$x^2 - 6x + 2 = 0$", C: "$x^2 - 3x + 4 = 0$", D: "$x^2 + 6x - 4 = 0$" },
    correctAnswer: "A",
    explanation: "New sum $= 2(3) = 6$. New product $= 4(1) = 4$. Equation: $x^2 - 6x + 4 = 0$."
  },
  {
    id: "WAEC-SS2-QUA-016",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Find the discriminant of the quadratic equation $3x^2 - 4x + 2 = 0$.",
    options: { A: "$-8$", B: "$8$", C: "$-40$", D: "$40$" },
    correctAnswer: "A",
    explanation: "$\\Delta = b^2 - 4ac = (-4)^2 - 4(3)(2) = 16 - 24 = -8$."
  },
  {
    id: "WAEC-SS2-QUA-017",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Solve the equation: $(2x - 3)^2 = 25$.",
    options: { A: "$x = 4\\text{ or }x = -1$", B: "$x = 4\\text{ or }x = 1$", C: "$x = 14\\text{ or }x = -11$", D: "$x = 5\\text{ or }x = -5$" },
    correctAnswer: "A",
    explanation: "$2x - 3 = \\pm 5 \\implies 2x = 8 \\implies x = 4$, or $2x = -2 \\implies x = -1$."
  },
  {
    id: "WAEC-SS2-QUA-018",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "The sum of the squares of two consecutive positive integers is $41$. Find the numbers.",
    options: { A: "$4\\text{ and }5$", B: "$3\\text{ and }4$", C: "$5\\text{ and }6$", D: "$6\\text{ and }7$" },
    correctAnswer: "A",
    explanation: "$n^2 + (n+1)^2 = 41 \\implies 2n^2 + 2n - 40 = 0 \\implies n^2 + n - 20 = 0 \\implies (n+5)(n-4) = 0 \\implies n = 4, n+1 = 5$."
  },
  {
    id: "WAEC-SS2-QUA-019",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "Solve: $4x^2 - 12x + 9 = 0$.",
    options: { A: "$x = \\dfrac{3}{2}\\text{ (repeated root)}$", B: "$x = -\\dfrac{3}{2}\\text{ (repeated)}$", C: "$x = 3\\text{ or }x = 2$", D: "$x = \\dfrac{9}{4}$" },
    correctAnswer: "A",
    explanation: "$(2x - 3)^2 = 0 \\implies x = 3/2$ twice."
  },
  {
    id: "WAEC-SS2-QUA-020",
    class: "SSS 2",
    topic: "Quadratic Equations",
    question: "If the roots of $x^2 - kx + 16 = 0$ differ by $6$, find the positive value of $k$.",
    options: { A: "$10$", B: "$8$", C: "$12$", D: "$14$" },
    correctAnswer: "A",
    explanation: "$(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta \\implies 36 = k^2 - 64 \\implies k^2 = 100 \\implies k = 10$."
  },

  // ── 5. LOGARITHMS OF NUMBERS < 1 / BAR NOTATION (20 Questions) ───────────
  {
    id: "WAEC-SS2-BAR-001",
    class: "SSS 2",
    topic: "Logarithm",
    question: "What is the characteristic of $\\log_{10} 0.00452$?",
    options: { A: "$\\bar{3}\\text{ (or }-3\\text{)}$", B: "$\\bar{2}$", C: "$\\bar{4}$", D: "$3$" },
    correctAnswer: "A",
    explanation: "$0.00452 = 4.52 \\times 10^{-3}$. First non-zero digit is in the third decimal position $\\implies$ characteristic is $\\bar{3}$."
  },
  {
    id: "WAEC-SS2-BAR-002",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Evaluate in bar notation: $\\bar{2}.456 + \\bar{1}.328$.",
    options: { A: "$\\bar{3}.784$", B: "$\\bar{2}.784$", C: "$\\bar{4}.784$", D: "$-3.784$" },
    correctAnswer: "A",
    explanation: "Mantissa: $0.456 + 0.328 = 0.784$. Characteristic: $(-2) + (-1) = -3 = \\bar{3}$. Sum $= \\bar{3}.784$."
  },
  {
    id: "WAEC-SS2-BAR-003",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Evaluate: $\\bar{2}.845 + \\bar{3}.426$.",
    options: { A: "$\\bar{4}.271$", B: "$\\bar{5}.271$", C: "$\\bar{6}.271$", D: "$\\bar{5}.171$" },
    correctAnswer: "A",
    explanation: "Mantissa: $0.845 + 0.426 = 1.271$ (write $0.271$ and carry $+1$). Characteristic: $(-2) + (-3) + (+1) = -4 = \\bar{4}$. Result $= \\bar{4}.271$."
  },
  {
    id: "WAEC-SS2-BAR-004",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Subtract: $\\bar{3}.452 - \\bar{1}.638$.",
    options: { A: "$\\bar{3}.814$", B: "$\\bar{2}.814$", C: "$\\bar{1}.814$", D: "$\\bar{4}.814$" },
    correctAnswer: "A",
    explanation: "$(-3 + 0.452) - (-1 + 0.638) = -2.548 - (-0.362) = -2.186 = -3 + 0.814 = \\bar{3}.814$."
  },
  {
    id: "WAEC-SS2-BAR-005",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Calculate: $\\bar{2}.345 \\times 3$.",
    options: { A: "$\\bar{5}.035$", B: "$\\bar{6}.035$", C: "$\\bar{4}.035$", D: "$\\bar{7}.035$" },
    correctAnswer: "A",
    explanation: "$3 \\times 0.345 = 1.035$ (carry $+1$). $3 \\times (-2) = -6$. Combine: $-6 + 1 + 0.035 = -5 + 0.035 = \\bar{5}.035$."
  },
  {
    id: "WAEC-SS2-BAR-006",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Evaluate: $\\bar{3}.756 \\div 2$.",
    options: { A: "$\\bar{2}.878$", B: "$\\bar{1}.878$", C: "$\\bar{3}.378$", D: "$\\bar{1}.378$" },
    correctAnswer: "A",
    explanation: "Write characteristic as multiple of $2$: $\\bar{3} = -4 + 1$. $(-4 + 1.756) \\div 2 = -2 + 0.878 = \\bar{2}.878$."
  },
  {
    id: "WAEC-SS2-BAR-007",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Evaluate: $\\bar{5}.612 \\div 3$.",
    options: { A: "$\\bar{2}.537$", B: "$\\bar{2}.871$", C: "$\\bar{1}.871$", D: "$\\bar{3}.204$" },
    correctAnswer: "A",
    explanation: "Write characteristic as multiple of $3$: $\\bar{5} = -6 + 1$. $(-6 + 1.612) \\div 3 = -2 + 0.5373 = \\bar{2}.537$."
  },
  {
    id: "WAEC-SS2-BAR-008",
    class: "SSS 2",
    topic: "Logarithm",
    question: "What is the characteristic of $\\log_{10} 0.75$?",
    options: { A: "$\\bar{1}\\text{ (or }-1\\text{)}$", B: "$0$", C: "$\\bar{2}$", D: "$1$" },
    correctAnswer: "A",
    explanation: "$0.75 = 7.5 \\times 10^{-1}$. Characteristic is $\\bar{1}$."
  },
  {
    id: "WAEC-SS2-BAR-009",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Convert the bar notation $\\bar{3}.45$ to an ordinary negative decimal number.",
    options: { A: "$-2.55$", B: "$-3.45$", C: "$-3.55$", D: "$-2.45$" },
    correctAnswer: "A",
    explanation: "$\\bar{3}.45 = -3 + 0.45 = -2.55$."
  },
  {
    id: "WAEC-SS2-BAR-010",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Convert the ordinary negative number $-1.72$ into bar notation.",
    options: { A: "$\\bar{2}.28$", B: "$\\bar{1}.28$", C: "$\\bar{1}.72$", D: "$\\bar{2}.72$" },
    correctAnswer: "A",
    explanation: "$-1.72 = -2 + (2 - 1.72) = -2 + 0.28 = \\bar{2}.28$."
  },
  {
    id: "WAEC-SS2-BAR-011",
    class: "SSS 2",
    topic: "Logarithm",
    question: "If $\\log_{10} x = \\bar{2}.6021$, find $x$ (given antilog of $0.6021$ is $4.00$).",
    options: { A: "$0.0400$", B: "$0.00400$", C: "$0.400$", D: "$4.00$" },
    correctAnswer: "A",
    explanation: "$x = 4.00 \\times 10^{-2} = 0.0400$."
  },
  {
    id: "WAEC-SS2-BAR-012",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Evaluate: $\\bar{1}.624 \\times 4$.",
    options: { A: "$\\bar{2}.496$", B: "$\\bar{3}.496$", C: "$\\bar{4}.496$", D: "$\\bar{1}.496$" },
    correctAnswer: "A",
    explanation: "$4 \\times 0.624 = 2.496$ (carry $+2$). $4 \\times (-1) = -4$. Combine: $-4 + 2 + 0.496 = \\bar{2}.496$."
  },
  {
    id: "WAEC-SS2-BAR-013",
    class: "SSS 2",
    topic: "Logarithm",
    question: "What is the characteristic of $\\log_{10} 0.000078$?",
    options: { A: "$\\bar{5}$", B: "$\\bar{4}$", C: "$\\bar{6}$", D: "$\\bar{3}$" },
    correctAnswer: "A",
    explanation: "$0.000078 = 7.8 \\times 10^{-5} \\implies$ characteristic is $\\bar{5}$."
  },
  {
    id: "WAEC-SS2-BAR-014",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Evaluate: $\\bar{4}.821 + \\bar{2}.543$.",
    options: { A: "$\\bar{5}.364$", B: "$\\bar{6}.364$", C: "$\\bar{7}.364$", D: "$\\bar{6}.264$" },
    correctAnswer: "A",
    explanation: "$0.821 + 0.543 = 1.364$ (write $0.364$, carry $+1$). $-4 + (-2) + (+1) = -5 = \\bar{5}$. Result $= \\bar{5}.364$."
  },
  {
    id: "WAEC-SS2-BAR-015",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Find $\\sqrt{0.0064}$ using logarithms: if $\\log_{10}(0.0064) = \\bar{3}.8062$, what is $\\frac{1}{2} \\log_{10}(0.0064)$?",
    options: { A: "$\\bar{2}.9031$", B: "$\\bar{1}.9031$", C: "$\\bar{1}.4031$", D: "$\\bar{3}.4031$" },
    correctAnswer: "A",
    explanation: "$\\bar{3}.8062 \\div 2 = (-4 + 1.8062) \\div 2 = -2 + 0.9031 = \\bar{2}.9031$."
  },
  {
    id: "WAEC-SS2-BAR-016",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Subtract: $\\bar{2}.378 - \\bar{4}.825$.",
    options: { A: "$1.553$", B: "$\\bar{2}.553$", C: "$2.553$", D: "$\\bar{1}.553$" },
    correctAnswer: "A",
    explanation: "$(-2 + 0.378) - (-4 + 0.825) = -2 + 4 + 0.378 - 0.825 = 2 - 0.447 = 1.553$."
  },
  {
    id: "WAEC-SS2-BAR-017",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Evaluate: $\\bar{7}.425 \\div 5$.",
    options: { A: "$\\bar{2}.685$", B: "$\\bar{1}.485$", C: "$\\bar{2}.485$", D: "$\\bar{1}.685$" },
    correctAnswer: "A",
    explanation: "Write characteristic as multiple of $5$: $\\bar{7} = -10 + 3$. $(-10 + 3.425) \\div 5 = -2 + 0.685 = \\bar{2}.685$."
  },
  {
    id: "WAEC-SS2-BAR-018",
    class: "SSS 2",
    topic: "Logarithm",
    question: "If $\\log_{10} k = \\bar{1}.5200$, evaluate $\\log_{10}(k^3)$.",
    options: { A: "$\\bar{2}.5600$", B: "$\\bar{3}.5600$", C: "$\\bar{1}.5600$", D: "$-3.5600$" },
    correctAnswer: "A",
    explanation: "$3 \\times (-1 + 0.5200) = -3 + 1.5600 = -2 + 0.5600 = \\bar{2}.5600$."
  },
  {
    id: "WAEC-SS2-BAR-019",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Given that $\\log_{10}2 = 0.3010$, find $\\log_{10}(0.02)$.",
    options: { A: "$\\bar{2}.3010$", B: "$\\bar{1}.3010$", C: "$-2.3010$", D: "$\\bar{3}.3010$" },
    correctAnswer: "A",
    explanation: "$\\log_{10}(2 \\times 10^{-2}) = 0.3010 - 2 = \\bar{2}.3010$."
  },
  {
    id: "WAEC-SS2-BAR-020",
    class: "SSS 2",
    topic: "Logarithm",
    question: "Given that $\\log_{10}3.54 = 0.5490$, find $\\log_{10}(0.000354)$.",
    options: { A: "$\\bar{4}.5490$", B: "$\\bar{3}.5490$", C: "$\\bar{5}.5490$", D: "$-4.5490$" },
    correctAnswer: "A",
    explanation: "$0.000354 = 3.54 \\times 10^{-4} \\implies \\log(0.000354) = \\bar{4}.5490$."
  }
];

module.exports = ss2Questions;
