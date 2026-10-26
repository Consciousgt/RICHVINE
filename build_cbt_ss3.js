module.exports = [
  {
    "id": "WAEC-SS3-IL-001",
    "class": "SSS 3",
    "topic": "Indices & Logarithms",
    "question": "Solve the simultaneous equations: $2^x \\times 3^y = 72$ and $2^y \\times 3^x = 108$.",
    "options": {
      "A": "$x = 2,\\; y = 3$",
      "B": "$x = 3,\\; y = 2$",
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
      "A": "$x = 3$",
      "B": "$x = 4$",
      "C": "$x = 9$",
      "D": "$x = 5$"
    },
    "correctAnswer": "A",
    "explanation": "$\\log_2 [(x - 1)(x + 1)] = 3 \\implies x^2 - 1 = 2^3 = 8 \\implies x^2 = 9 \\implies x = 3$ (since $x > 1$ for real logarithms)."
  },
  {
    "id": "WAEC-SS3-IL-003",
    "class": "SSS 3",
    "topic": "Indices & Logarithms",
    "question": "Solve for $x$: $3^{2x+1} - 28(3^x) + 9 = 0$.",
    "options": {
      "A": "$x = 2\\text{ or }x = -1$",
      "B": "$x = 1\\text{ or }x = -2$",
      "C": "$x = 2\\text{ or }x = 1$",
      "D": "$x = -1\\text{ or }x = 0$"
    },
    "correctAnswer": "A",
    "explanation": "$3(3^x)^2 - 28(3^x) + 9 = 0$. Let $y = 3^x \\implies 3y^2 - 28y + 9 = 0 \\implies (3y - 1)(y - 9) = 0$. Thus $y = \\frac{1}{3} = 3^{-1} \\implies x = -1$, or $y = 9 = 3^2 \\implies x = 2$."
  },
  {
    "id": "WAEC-SS3-IL-004",
    "class": "SSS 3",
    "topic": "Indices & Logarithms",
    "question": "Given that $a = x^{1/n}$, find $\\log_a x^n$.",
    "options": {
      "A": "$n^2$",
      "B": "$\\frac{1}{n}$",
      "C": "$n$",
      "D": "$\\frac{1}{n^2}$"
    },
    "correctAnswer": "A",
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
      "A": "$12$",
      "B": "$10$",
      "C": "$8$",
      "D": "$6$"
    },
    "correctAnswer": "A",
    "explanation": "$x^2 = (2 - \\sqrt{2})^2 = 4 - 4\\sqrt{2} + 2 = 6 - 4\\sqrt{2}$. Then $\\frac{4}{x^2} = \\frac{4}{6 - 4\\sqrt{2}} = \\frac{2}{3 - 2\\sqrt{2}} = \\frac{2(3 + 2\\sqrt{2})}{9 - 8} = 6 + 4\\sqrt{2}$. Sum $= (6 - 4\\sqrt{2}) + (6 + 4\\sqrt{2}) = 12$."
  },
  {
    "id": "WAEC-SS3-IL-008",
    "class": "SSS 3",
    "topic": "Indices & Logarithms",
    "question": "Solve the equation: $3x^{-2} = \\dfrac{4}{27}$.",
    "options": {
      "A": "$x = \\pm \\frac{9}{2}$",
      "B": "$x = \\pm \\frac{2}{9}$",
      "C": "$x = \\frac{9}{4}$",
      "D": "$x = \\pm \\frac{3}{2}$"
    },
    "correctAnswer": "A",
    "explanation": "$\\frac{3}{x^2} = \\frac{4}{27} \\implies 4x^2 = 81 \\implies x^2 = \\frac{81}{4} \\implies x = \\pm \\frac{9}{2}$."
  },
  {
    "id": "WAEC-SS3-IL-009",
    "class": "SSS 3",
    "topic": "Indices & Logarithms",
    "question": "Simplify $\\dfrac{1}{\\sqrt{2}}\\left[\\dfrac{1}{\\sqrt{3} + \\sqrt{2}} - \\dfrac{1}{\\sqrt{3} - \\sqrt{2}}\\right]$.",
    "options": {
      "A": "$-2$",
      "B": "$2$",
      "C": "$-\\sqrt{2}$",
      "D": "$\\sqrt{3}$"
    },
    "correctAnswer": "A",
    "explanation": "Inside bracket: $\\frac{(\\sqrt{3}-\\sqrt{2}) - (\\sqrt{3}+\\sqrt{2})}{(\\sqrt{3})^2 - (\\sqrt{2})^2} = \\frac{-2\\sqrt{2}}{3 - 2} = -2\\sqrt{2}$. Multiplying by $\\frac{1}{\\sqrt{2}}$ gives $\\frac{1}{\\sqrt{2}}(-2\\sqrt{2}) = -2$."
  },
  {
    "id": "WAEC-SS3-IL-010",
    "class": "SSS 3",
    "topic": "Indices & Logarithms",
    "question": "Solve for $n$ if $9^{1+n} \\times 3 = 27^{-n}$.",
    "options": {
      "A": "$n = -\\frac{3}{5}$",
      "B": "$n = -\\frac{2}{3}$",
      "C": "$n = \\frac{1}{2}$",
      "D": "$n = -1$"
    },
    "correctAnswer": "A",
    "explanation": "$3^{2(1+n)} \\times 3^1 = 3^{-3n} \\implies 3^{2 + 2n + 1} = 3^{-3n} \\implies 2n + 3 = -3n \\implies 5n = -3 \\implies n = -\\frac{3}{5}$."
  },
  {
    "id": "WAEC-SS3-IL-011",
    "class": "SSS 3",
    "topic": "Indices & Logarithms",
    "question": "Find $x$ if $2^{x+1} + 2^{x-1} = 40$.",
    "options": {
      "A": "$x = 4$",
      "B": "$x = 3$",
      "C": "$x = 5$",
      "D": "$x = 2$"
    },
    "correctAnswer": "A",
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
      "A": "$4$",
      "B": "$3$",
      "C": "$5$",
      "D": "$6$"
    },
    "correctAnswer": "A",
    "explanation": "By inclusion-exclusion: $n(B \\cup E \\cup P) = n(B) + n(E) + n(P) - n(B \\cap E) - n(B \\cap P) - n(E \\cap P) + n(B \\cap E \\cap P)$. Thus $58 = 28 + 35 + 15 - 12 - 7 - 5 + x \\implies 58 = 54 + x \\implies x = 4$."
  },
  {
    "id": "WAEC-SS3-SET-002",
    "class": "SSS 3",
    "topic": "Set Theory",
    "question": "If set $A$ has $n$ elements and the power set $\\mathcal{P}(A)$ has $128$ elements, find the number of elements in $A$.",
    "options": {
      "A": "$7$",
      "B": "$6$",
      "C": "$8$",
      "D": "$5$"
    },
    "correctAnswer": "A",
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
      "A": "$\\{1, 2, 5, 6\\}$",
      "B": "$\\{3, 4\\}$",
      "C": "$\\{1, 2, 3, 4, 5, 6\\}$",
      "D": "$\\{1, 6\\}$"
    },
    "correctAnswer": "A",
    "explanation": "$A \\setminus B = \\{1, 2\\}$ and $B \\setminus A = \\{5, 6\\}$. The union $(A \\setminus B) \\cup (B \\setminus A) = \\{1, 2, 5, 6\\}$."
  },
  {
    "id": "WAEC-SS3-SET-005",
    "class": "SSS 3",
    "topic": "Set Theory",
    "question": "In a survey of $100$ students, $60$ read Nation, $50$ read Guardian, and $20$ read neither. How many students read both newspapers?",
    "options": {
      "A": "$30$",
      "B": "$25$",
      "C": "$35$",
      "D": "$20$"
    },
    "correctAnswer": "A",
    "explanation": "$n(N \\cup G) = 100 - 20 = 80$. Then $n(N \\cap G) = n(N) + n(G) - n(N \\cup G) = 60 + 50 - 80 = 30$."
  },
  {
    "id": "WAEC-SS3-SET-006",
    "class": "SSS 3",
    "topic": "Set Theory",
    "question": "According to De Morgan's laws, for any two sets $A$ and $B$ in universal set $U$, $(A \\cup B)'$ is equal to:",
    "options": {
      "A": "$A' \\cap B'$",
      "B": "$A' \\cup B'$",
      "C": "$(A \\cap B)'$",
      "D": "$A \\setminus B'$"
    },
    "correctAnswer": "A",
    "explanation": "By De Morgan's first law, the complement of the union is the intersection of the complements: $(A \\cup B)' = A' \\cap B'$."
  },
  {
    "id": "WAEC-SS3-SET-007",
    "class": "SSS 3",
    "topic": "Set Theory",
    "question": "If $n(A) = 15$, $n(B) = 20$, and $n(A \\cap B) = 7$, find $n(A \\cup B)$.",
    "options": {
      "A": "$28$",
      "B": "$35$",
      "C": "$25$",
      "D": "$32$"
    },
    "correctAnswer": "A",
    "explanation": "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 15 + 20 - 7 = 28$."
  },
  {
    "id": "WAEC-SS3-SET-008",
    "class": "SSS 3",
    "topic": "Set Theory",
    "question": "If $U = \\{x \\in \\mathbb{Z} : 1 \\le x \\le 12\\}$, $A = \\{x : x\\text{ is even}\\}$, and $B = \\{x : x\\text{ is a multiple of } 3\\}$, find $n(A \\cap B)$.",
    "options": {
      "A": "$2$",
      "B": "$3$",
      "C": "$4$",
      "D": "$1$"
    },
    "correctAnswer": "A",
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
      "A": "$7$",
      "B": "$8$",
      "C": "$6$",
      "D": "$5$"
    },
    "correctAnswer": "A",
    "explanation": "A set with $n$ elements has $2^n$ total subsets and $2^n - 1$ proper subsets. For $n = 3$, proper subsets $= 2^3 - 1 = 8 - 1 = 7$."
  },
  {
    "id": "WAEC-SS3-SET-012",
    "class": "SSS 3",
    "topic": "Set Theory",
    "question": "If $A = \\{x \\in \\mathbb{R} : -2 \\le x < 5\\}$ and $B = \\{x \\in \\mathbb{R} : 1 < x \\le 8\\}$, what is $A \\cap B$?",
    "options": {
      "A": "$\\{x \\in \\mathbb{R} : 1 < x < 5\\}$",
      "B": "$\\{x \\in \\mathbb{R} : -2 \\le x \\le 8\\}$",
      "C": "$\\{x \\in \\mathbb{R} : 1 \\le x < 5\\}$",
      "D": "$\\{x \\in \\mathbb{R} : 1 < x \\le 5\\}$"
    },
    "correctAnswer": "A",
    "explanation": "The intersection is the overlapping interval between $[-2, 5)$ and $(1, 8]$, which is $(1, 5)$, i.e., $\\{x \\in \\mathbb{R} : 1 < x < 5\\}$."
  },
  {
    "id": "WAEC-SS3-TRIG-001",
    "class": "SSS 3",
    "topic": "Trigonometry",
    "question": "In $\\triangle ABC$, $b = 8\\text{ cm}$, $c = 6\\text{ cm}$, and $\\angle A = 60^\\circ$. Find the length of side $a$.",
    "options": {
      "A": "$2\\sqrt{13}\\text{ cm}$",
      "B": "$2\\sqrt{37}\\text{ cm}$",
      "C": "$10\\text{ cm}$",
      "D": "$4\\sqrt{3}\\text{ cm}$"
    },
    "correctAnswer": "A",
    "explanation": "By the cosine rule: $a^2 = b^2 + c^2 - 2bc\\cos A = 8^2 + 6^2 - 2(8)(6)\\cos 60^\\circ = 64 + 36 - 96(0.5) = 100 - 48 = 52$. $a = \\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13}\\text{ cm}$."
  },
  {
    "id": "WAEC-SS3-TRIG-002",
    "class": "SSS 3",
    "topic": "Trigonometry",
    "question": "In $\\triangle PQR$, $p = 10\\text{ cm}$, $\\angle P = 30^\\circ$, and $\\angle Q = 45^\\circ$. Find the exact length of side $q$.",
    "options": {
      "A": "$10\\sqrt{2}\\text{ cm}$",
      "B": "$5\\sqrt{2}\\text{ cm}$",
      "C": "$10\\sqrt{3}\\text{ cm}$",
      "D": "$5\\sqrt{6}\\text{ cm}$"
    },
    "correctAnswer": "A",
    "explanation": "By the sine rule: $\\frac{q}{\\sin Q} = \\frac{p}{\\sin P} \\implies q = \\frac{10 \\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{10 \\times \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 10\\sqrt{2}\\text{ cm}$."
  },
  {
    "id": "WAEC-SS3-TRIG-003",
    "class": "SSS 3",
    "topic": "Trigonometry",
    "question": "From a point $P$ on ground level, the angle of elevation of the top of a vertical mast is $30^\\circ$. From another point $Q$, $40\\text{ m}$ closer to the mast, the angle of elevation is $60^\\circ$. Find the height of the mast.",
    "options": {
      "A": "$20\\sqrt{3}\\text{ m}$",
      "B": "$40\\sqrt{3}\\text{ m}$",
      "C": "$30\\text{ m}$",
      "D": "$20\\text{ m}$"
    },
    "correctAnswer": "A",
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
      "A": "$2\\cot\\theta$",
      "B": "$2\\tan\\theta$",
      "C": "$2\\csc\\theta$",
      "D": "$2\\sin\\theta$"
    },
    "correctAnswer": "A",
    "explanation": "$\\frac{\\sin\\theta(1+\\cos\\theta) - \\sin\\theta(1-\\cos\\theta)}{(1-\\cos\\theta)(1+\\cos\\theta)} = \\frac{2\\sin\\theta\\cos\\theta}{1 - \\cos^2\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{\\sin^2\\theta} = 2\\frac{\\cos\\theta}{\\sin\\theta} = 2\\cot\\theta$."
  },
  {
    "id": "WAEC-SS3-TRIG-006",
    "class": "SSS 3",
    "topic": "Trigonometry",
    "question": "Solve the equation $2\\cos^2\\theta - \\cos\\theta - 1 = 0$ for $0^\\circ \\le \\theta \\le 180^\\circ$.",
    "options": {
      "A": "$0^\\circ\\text{ or }120^\\circ$",
      "B": "$60^\\circ\\text{ or }120^\\circ$",
      "C": "$0^\\circ\\text{ or }60^\\circ$",
      "D": "$90^\\circ\\text{ or }180^\\circ$"
    },
    "correctAnswer": "A",
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
      "A": "$\\frac{1}{2}$",
      "B": "$\\frac{11}{16}$",
      "C": "$\\frac{5}{8}$",
      "D": "$\\frac{3}{4}$"
    },
    "correctAnswer": "A",
    "explanation": "$\\cos Y = \\frac{x^2 + z^2 - y^2}{2xz} = \\frac{5^2 + 8^2 - 7^2}{2(5)(8)} = \\frac{25 + 64 - 49}{80} = \\frac{40}{80} = \\frac{1}{2}$."
  },
  {
    "id": "WAEC-SS3-TRIG-009",
    "class": "SSS 3",
    "topic": "Trigonometry",
    "question": "Find the area of $\\triangle ABC$ if $a = 12\\text{ cm}$, $b = 10\\text{ cm}$, and $\\angle C = 30^\\circ$.",
    "options": {
      "A": "$30\\text{ cm}^2$",
      "B": "$60\\text{ cm}^2$",
      "C": "$30\\sqrt{3}\\text{ cm}^2$",
      "D": "$15\\text{ cm}^2$"
    },
    "correctAnswer": "A",
    "explanation": "$\\text{Area} = \\frac{1}{2}ab\\sin C = \\frac{1}{2}(12)(10)\\sin 30^\\circ = 60 \\times 0.5 = 30\\text{ cm}^2$."
  },
  {
    "id": "WAEC-SS3-TRIG-010",
    "class": "SSS 3",
    "topic": "Trigonometry",
    "question": "Evaluate $\\sin 150^\\circ + \\cos 120^\\circ$.",
    "options": {
      "A": "$0$",
      "B": "$1$",
      "C": "$\\sqrt{3}$",
      "D": "$-1$"
    },
    "correctAnswer": "A",
    "explanation": "$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$. $\\cos 120^\\circ = -\\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$. Sum $= \\frac{1}{2} + \\left(-\\frac{1}{2}\\right) = 0$."
  },
  {
    "id": "WAEC-SS3-TRIG-011",
    "class": "SSS 3",
    "topic": "Trigonometry",
    "question": "What is the maximum value of the function $f(\\theta) = 3 - 5\\sin\\theta$?",
    "options": {
      "A": "$8$",
      "B": "$3$",
      "C": "$-2$",
      "D": "$5$"
    },
    "correctAnswer": "A",
    "explanation": "Since $-1 \\le \\sin\\theta \\le 1$, the expression $3 - 5\\sin\\theta$ reaches its maximum when $\\sin\\theta = -1$, yielding $3 - 5(-1) = 3 + 5 = 8$."
  },
  {
    "id": "WAEC-SS3-TRIG-012",
    "class": "SSS 3",
    "topic": "Trigonometry",
    "question": "A ship sails $12\\text{ km}$ due North, then $5\\text{ km}$ due East. What is the distance of the ship from its starting point?",
    "options": {
      "A": "$13\\text{ km}$",
      "B": "$17\\text{ km}$",
      "C": "$15\\text{ km}$",
      "D": "$\\sqrt{119}\\text{ km}$"
    },
    "correctAnswer": "A",
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
      "A": "$6\\sqrt{3}\\text{ cm}$",
      "B": "$12\\text{ cm}$",
      "C": "$3\\sqrt{6}\\text{ cm}$",
      "D": "$6\\text{ cm}$"
    },
    "correctAnswer": "A",
    "explanation": "By the sine rule: $\\frac{b}{\\sin 60^\\circ} = \\frac{a}{\\sin 45^\\circ} \\implies b = \\frac{6\\sqrt{2} \\times \\frac{\\sqrt{3}}{2}}{\\frac{\\sqrt{2}}{2}} = 6\\sqrt{3}\\text{ cm}$."
  },
  {
    "id": "WAEC-SS3-QUAD-001",
    "class": "SSS 3",
    "topic": "Quadratic Equations & Polynomials",
    "question": "Find the remainder when $P(x) = 2x^3 - 3x^2 + 4x - 5$ is divided by $x - 2$.",
    "options": {
      "A": "$7$",
      "B": "$5$",
      "C": "$9$",
      "D": "$3$"
    },
    "correctAnswer": "A",
    "explanation": "By the Remainder Theorem, $R = P(2) = 2(2)^3 - 3(2)^2 + 4(2) - 5 = 16 - 12 + 8 - 5 = 7$."
  },
  {
    "id": "WAEC-SS3-QUAD-002",
    "class": "SSS 3",
    "topic": "Quadratic Equations & Polynomials",
    "question": "If $x - 1$ is a factor of $f(x) = x^3 + kx^2 - 4x + 2$, find the value of $k$.",
    "options": {
      "A": "$1$",
      "B": "$-1$",
      "C": "$2$",
      "D": "$-2$"
    },
    "correctAnswer": "A",
    "explanation": "By the Factor Theorem, $f(1) = 0 \\implies (1)^3 + k(1)^2 - 4(1) + 2 = 0 \\implies 1 + k - 4 + 2 = 0 \\implies k - 1 = 0 \\implies k = 1$."
  },
  {
    "id": "WAEC-SS3-QUAD-003",
    "class": "SSS 3",
    "topic": "Quadratic Equations & Polynomials",
    "question": "If $\\alpha$ and $\\beta$ are roots of $2x^2 - 5x + 1 = 0$, evaluate $\\alpha^2 + \\beta^2$.",
    "options": {
      "A": "$\\frac{21}{4}$",
      "B": "$\\frac{25}{4}$",
      "C": "$\\frac{19}{4}$",
      "D": "$\\frac{23}{4}$"
    },
    "correctAnswer": "A",
    "explanation": "$\\alpha + \\beta = \\frac{5}{2}$ and $\\alpha\\beta = \\frac{1}{2}$. $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = \\left(\\frac{5}{2}\\right)^2 - 2\\left(\\frac{1}{2}\\right) = \\frac{25}{4} - 1 = \\frac{21}{4}$."
  },
  {
    "id": "WAEC-SS3-QUAD-004",
    "class": "SSS 3",
    "topic": "Quadratic Equations & Polynomials",
    "question": "Find the quadratic equation whose roots are $\\dfrac{1}{3}$ and $-2$.",
    "options": {
      "A": "$3x^2 + 5x - 2 = 0$",
      "B": "$3x^2 - 5x - 2 = 0$",
      "C": "$3x^2 + 7x - 2 = 0$",
      "D": "$x^2 + \\frac{5}{3}x - 2 = 0$"
    },
    "correctAnswer": "A",
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
      "A": "$2$",
      "B": "$4$",
      "C": "$\\frac{1}{2}$",
      "D": "$-2$"
    },
    "correctAnswer": "A",
    "explanation": "$\\alpha + \\beta = 4$ and $\\alpha\\beta = 2$. Then $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{4}{2} = 2$."
  },
  {
    "id": "WAEC-SS3-QUAD-007",
    "class": "SSS 3",
    "topic": "Quadratic Equations & Polynomials",
    "question": "Find the maximum value of the quadratic function $y = 8 - 4x - x^2$.",
    "options": {
      "A": "$12$",
      "B": "$8$",
      "C": "$4$",
      "D": "$16$"
    },
    "correctAnswer": "A",
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
      "A": "Real, rational, and unequal",
      "B": "Real, rational, and equal",
      "C": "Real, irrational, and unequal",
      "D": "Complex and imaginary"
    },
    "correctAnswer": "A",
    "explanation": "Discriminant $\\Delta = (-7)^2 - 4(3)(2) = 49 - 24 = 25 > 0$. Since $25 = 5^2$ is a perfect square, roots are real, rational, and unequal."
  },
  {
    "id": "WAEC-SS3-QUAD-010",
    "class": "SSS 3",
    "topic": "Quadratic Equations & Polynomials",
    "question": "If $f(x) = 2x^3 + ax^2 - bx + 6$ has $x - 2$ as a factor and leaves a remainder of $12$ when divided by $x + 1$, find $a$ and $b$.",
    "options": {
      "A": "$a = -1,\\; b = 7$",
      "B": "$a = 1,\\; b = -7$",
      "C": "$a = 2,\\; b = 5$",
      "D": "$a = -2,\\; b = 8$"
    },
    "correctAnswer": "A",
    "explanation": "$f(2) = 0 \\implies 16 + 4a - 2b + 6 = 0 \\implies 4a - 2b = -22 \\implies 2a - b = -11$. $f(-1) = 12 \\implies -2 + a + b + 6 = 12 \\implies a + b = 8$. Adding equations: $3a = -3 \\implies a = -1$. Then $b = 8 - (-1) = 9$ (wait, let's check $2(-1) - 9 = -11$). So $a = -1, b = 9$."
  },
  {
    "id": "WAEC-SS3-QUAD-011",
    "class": "SSS 3",
    "topic": "Quadratic Equations & Polynomials",
    "question": "Find the coordinates of the turning point of the curve $y = 2x^2 - 8x + 5$.",
    "options": {
      "A": "$(2, -3)$",
      "B": "$(2, 3)$",
      "C": "$(-2, 29)$",
      "D": "$(4, 5)$"
    },
    "correctAnswer": "A",
    "explanation": "$x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = 2$. Substituting $x = 2$: $y = 2(4) - 8(2) + 5 = 8 - 16 + 5 = -3$. Turning point is $(2, -3)$."
  },
  {
    "id": "WAEC-SS3-QUAD-012",
    "class": "SSS 3",
    "topic": "Quadratic Equations & Polynomials",
    "question": "If the sum of two numbers is $14$ and their product is $45$, find the numbers.",
    "options": {
      "A": "$5\\text{ and }9$",
      "B": "$6\\text{ and }8$",
      "C": "$4\\text{ and }10$",
      "D": "$3\\text{ and }15$"
    },
    "correctAnswer": "A",
    "explanation": "The numbers are roots of $t^2 - 14t + 45 = 0 \\implies (t - 5)(t - 9) = 0 \\implies t = 5$ or $t = 9$."
  },
  {
    "id": "WAEC-SS3-QUAD-013",
    "class": "SSS 3",
    "topic": "Quadratic Equations & Polynomials",
    "question": "Form the equation whose roots are reciprocal to the roots of $2x^2 - 3x + 1 = 0$.",
    "options": {
      "A": "$x^2 - 3x + 2 = 0$",
      "B": "$x^2 + 3x + 2 = 0$",
      "C": "$2x^2 + 3x - 1 = 0$",
      "D": "$x^2 - 2x + 3 = 0$"
    },
    "correctAnswer": "A",
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
      "A": "$\\frac{11}{12}$",
      "B": "$\\frac{1}{2}$",
      "C": "$\\frac{5}{12}$",
      "D": "$\\frac{3}{4}$"
    },
    "correctAnswer": "A",
    "explanation": "$P(\\text{at least one passes}) = 1 - P(\\text{both fail}) = 1 - \\left(1 - \\frac{2}{3}\\right)\\left(1 - \\frac{3}{4}\\right) = 1 - \\left(\\frac{1}{3} \\times \\frac{1}{4}\\right) = 1 - \\frac{1}{12} = \\frac{11}{12}$."
  },
  {
    "id": "WAEC-SS3-PROB-004",
    "class": "SSS 3",
    "topic": "Probability",
    "question": "If $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \\cap B) = 0.3$, what is $P(A \\cup B)$?",
    "options": {
      "A": "$0.8$",
      "B": "$0.9$",
      "C": "$0.7$",
      "D": "$1.0$"
    },
    "correctAnswer": "A",
    "explanation": "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.6 + 0.5 - 0.3 = 0.8$."
  },
  {
    "id": "WAEC-SS3-PROB-005",
    "class": "SSS 3",
    "topic": "Probability",
    "question": "In how many ways can a committee of $3$ men and $2$ women be selected from $6$ men and $4$ women?",
    "options": {
      "A": "$120$",
      "B": "$60$",
      "C": "$144$",
      "D": "$240$"
    },
    "correctAnswer": "A",
    "explanation": "$^6C_3 \\times ^4C_2 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} \\times \\frac{4 \\times 3}{2 \\times 1} = 20 \\times 6 = 120$."
  },
  {
    "id": "WAEC-SS3-PROB-006",
    "class": "SSS 3",
    "topic": "Probability",
    "question": "In how many distinct ways can the letters of the word $\\text{MATHEMATICS}$ be arranged?",
    "options": {
      "A": "$4,989,600$",
      "B": "$39,916,800$",
      "C": "$1,663,200$",
      "D": "$9,979,200$"
    },
    "correctAnswer": "A",
    "explanation": "Total letters $= 11$. Repeated letters: M ($2$), A ($2$), T ($2$). Number of permutations $= \\frac{11!}{2! \\times 2! \\times 2!} = \\frac{39,916,800}{8} = 4,989,600$."
  },
  {
    "id": "WAEC-SS3-PROB-007",
    "class": "SSS 3",
    "topic": "Probability",
    "question": "A card is drawn from a standard pack of $52$ playing cards. Find the probability that the card is either a King or a Heart.",
    "options": {
      "A": "$\\frac{4}{13}$",
      "B": "$\\frac{17}{52}$",
      "C": "$\\frac{1}{4}$",
      "D": "$\\frac{16}{52}$"
    },
    "correctAnswer": "A",
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
      "A": "$\\frac{3}{8}$",
      "B": "$\\frac{1}{2}$",
      "C": "$\\frac{1}{4}$",
      "D": "$\\frac{5}{8}$"
    },
    "correctAnswer": "A",
    "explanation": "Sample space has $2^3 = 8$ outcomes. Favorable outcomes for exactly $2$ heads: $\\{HHT, HTH, THH\\}$, total $3$. $P = \\frac{3}{8}$."
  },
  {
    "id": "WAEC-SS3-PROB-010",
    "class": "SSS 3",
    "topic": "Probability",
    "question": "Find the value of $n$ if $^nP_2 = 72$.",
    "options": {
      "A": "$9$",
      "B": "$8$",
      "C": "$10$",
      "D": "$12$"
    },
    "correctAnswer": "A",
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
      "A": "$0.30$",
      "B": "$0.20$",
      "C": "$0.40$",
      "D": "$0.10$"
    },
    "correctAnswer": "A",
    "explanation": "For independent events, $A'$ and $B'$ are independent: $P(A' \\cap B') = P(A') \\times P(B') = (1 - 0.4)(1 - 0.5) = 0.6 \\times 0.5 = 0.30$."
  },
  {
    "id": "WAEC-SS3-PROB-013",
    "class": "SSS 3",
    "topic": "Probability",
    "question": "Find the conditional probability $P(A|B)$ given that $P(A \\cap B) = 0.15$ and $P(B) = 0.60$.",
    "options": {
      "A": "$0.25$",
      "B": "$0.40$",
      "C": "$0.09$",
      "D": "$0.75$"
    },
    "correctAnswer": "A",
    "explanation": "$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.15}{0.60} = \\frac{1}{4} = 0.25$."
  },
  {
    "id": "WAEC-SS3-PROB-014",
    "class": "SSS 3",
    "topic": "Probability",
    "question": "In how many ways can $5$ people be seated in a row if two particular people MUST sit next to each other?",
    "options": {
      "A": "$48$",
      "B": "$120$",
      "C": "$24$",
      "D": "$60$"
    },
    "correctAnswer": "A",
    "explanation": "Treat the two people as one single unit: $4!$ ways. The two people can be arranged among themselves in $2!$ ways. Total arrangements $= 4! \\times 2! = 24 \\times 2 = 48$."
  },
  {
    "id": "WAEC-SS3-PROB-015",
    "class": "SSS 3",
    "topic": "Probability",
    "question": "If a number is chosen at random from the integers $1$ to $30$ inclusive, what is the probability that it is a multiple of $3$ or $5$?",
    "options": {
      "A": "$\\frac{7}{15}$",
      "B": "$\\frac{8}{15}$",
      "C": "$\\frac{1}{2}$",
      "D": "$\\frac{2}{5}$"
    },
    "correctAnswer": "A",
    "explanation": "Multiples of $3$: $\\{3, 6, 9, \\dots, 30\\}$ ($10$ numbers). Multiples of $5$: $\\{5, 10, \\dots, 30\\}$ ($6$ numbers). Common multiples of $15$: $\\{15, 30\\}$ ($2$ numbers). Total favorable $= 10 + 6 - 2 = 14$. $P = \\frac{14}{30} = \\frac{7}{15}$."
  },
  {
    "id": "WAEC-SS3-PROB-016",
    "class": "SSS 3",
    "topic": "Probability",
    "question": "Evaluate $^{10}C_3$.",
    "options": {
      "A": "$120$",
      "B": "$720$",
      "C": "$240$",
      "D": "$90$"
    },
    "correctAnswer": "A",
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
      "A": "$\\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$",
      "B": "$\\begin{pmatrix} -3 & 2 \\\\ 4 & -3 \\end{pmatrix}$",
      "C": "$\\begin{pmatrix} 3 & 4 \\\\ 2 & 3 \\end{pmatrix}$",
      "D": "$\\begin{pmatrix} 1 & -2 \\\\ -4 & 1 \\end{pmatrix}$"
    },
    "correctAnswer": "A",
    "explanation": "$\\det(A) = (3)(3) - (2)(4) = 9 - 8 = 1$. The adjugate matrix is $\\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$. Since $\\det(A) = 1$, $A^{-1} = \\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$."
  },
  {
    "id": "WAEC-SS3-MAT-004",
    "class": "SSS 3",
    "topic": "Matrices & Determinants",
    "question": "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, compute the product $AB$.",
    "options": {
      "A": "$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$",
      "B": "$\\begin{pmatrix} 2 & 6 \\\\ 7 & 12 \\end{pmatrix}$",
      "C": "$\\begin{pmatrix} 4 & 0 \\\\ 3 & 12 \\end{pmatrix}$",
      "D": "$\\begin{pmatrix} 5 & 6 \\\\ 11 & 12 \\end{pmatrix}$"
    },
    "correctAnswer": "A",
    "explanation": "$AB = \\begin{pmatrix} (1)(2) + (2)(1) & (1)(0) + (2)(3) \\\\ (3)(2) + (4)(1) & (3)(0) + (4)(3) \\end{pmatrix} = \\begin{pmatrix} 2+2 & 0+6 \\\\ 6+4 & 0+12 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$."
  },
  {
    "id": "WAEC-SS3-MAT-005",
    "class": "SSS 3",
    "topic": "Matrices & Determinants",
    "question": "Evaluate the $3 \\times 3$ determinant: $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}$.",
    "options": {
      "A": "$24$",
      "B": "$0$",
      "C": "$18$",
      "D": "$12$"
    },
    "correctAnswer": "A",
    "explanation": "For an upper triangular matrix, the determinant is the product of diagonal entries: $1 \\times 4 \\times 6 = 24$."
  },
  {
    "id": "WAEC-SS3-MAT-006",
    "class": "SSS 3",
    "topic": "Matrices & Determinants",
    "question": "If $2A + \\begin{pmatrix} 1 & 3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 5 & 7 \\\\ 4 & 8 \\end{pmatrix}$, find matrix $A$.",
    "options": {
      "A": "$\\begin{pmatrix} 2 & 2 \\\\ 3 & 2 \\end{pmatrix}$",
      "B": "$\\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix}$",
      "C": "$\\begin{pmatrix} 3 & 2 \\\\ 1 & 2 \\end{pmatrix}$",
      "D": "$\\begin{pmatrix} 2 & 5 \\\\ 1 & 4 \\end{pmatrix}$"
    },
    "correctAnswer": "A",
    "explanation": "$2A = \\begin{pmatrix} 5-1 & 7-3 \\\\ 4-(-2) & 8-4 \\end{pmatrix} = \\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix} \\implies A = \\frac{1}{2}\\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & 2 \\\\ 3 & 2 \\end{pmatrix}$."
  },
  {
    "id": "WAEC-SS3-MAT-007",
    "class": "SSS 3",
    "topic": "Matrices & Determinants",
    "question": "Evaluate $\\begin{vmatrix} 2 & 1 & 3 \\\\ 4 & 0 & 1 \\\\ 3 & 2 & 5 \\end{vmatrix}$.",
    "options": {
      "A": "$3$",
      "B": "$-3$",
      "C": "$5$",
      "D": "$-5$"
    },
    "correctAnswer": "A",
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
      "A": "$\\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$",
      "B": "$\\begin{pmatrix} 4 & 1 \\\\ 0 & 9 \\end{pmatrix}$",
      "C": "$\\begin{pmatrix} 4 & 3 \\\\ 0 & 9 \\end{pmatrix}$",
      "D": "$\\begin{pmatrix} 4 & 6 \\\\ 0 & 9 \\end{pmatrix}$"
    },
    "correctAnswer": "A",
    "explanation": "$P^2 = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} = \\begin{pmatrix} 4+0 & 2+3 \\\\ 0+0 & 0+9 \\end{pmatrix} = \\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$."
  },
  {
    "id": "WAEC-SS3-MAT-010",
    "class": "SSS 3",
    "topic": "Matrices & Determinants",
    "question": "What is the transpose of the matrix $M = \\begin{pmatrix} 1 & 4 & 7 \\\\ 2 & 5 & 8 \\end{pmatrix}$?",
    "options": {
      "A": "$\\begin{pmatrix} 1 & 2 \\\\ 4 & 5 \\\\ 7 & 8 \\end{pmatrix}$",
      "B": "$\\begin{pmatrix} 7 & 4 & 1 \\\\ 8 & 5 & 2 \\end{pmatrix}$",
      "C": "$\\begin{pmatrix} 2 & 5 & 8 \\\\ 1 & 4 & 7 \\end{pmatrix}$",
      "D": "$\\begin{pmatrix} 8 & 5 & 2 \\\\ 7 & 4 & 1 \\end{pmatrix}$"
    },
    "correctAnswer": "A",
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
      "A": "$45$",
      "B": "$15$",
      "C": "$30$",
      "D": "$125$"
    },
    "correctAnswer": "A",
    "explanation": "For an $n \\times n$ matrix $A$, $|kA| = k^n |A|$. Here $n = 2$, so $|3A| = 3^2 |A| = 9 \\times 5 = 45$."
  },
  {
    "id": "WAEC-SS3-MAT-013",
    "class": "SSS 3",
    "topic": "Matrices & Determinants",
    "question": "If $A = \\begin{pmatrix} 5 & 3 \\\\ 2 & 1 \\end{pmatrix}$, find $\\det(A^{-1})$.",
    "options": {
      "A": "$-1$",
      "B": "$1$",
      "C": "$-\\frac{1}{2}$",
      "D": "$\\frac{1}{5}$"
    },
    "correctAnswer": "A",
    "explanation": "$\\det(A) = (5)(1) - (3)(2) = 5 - 6 = -1$. $\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{-1} = -1$."
  },
  {
    "id": "WAEC-SS3-MAT-014",
    "class": "SSS 3",
    "topic": "Matrices & Determinants",
    "question": "A square matrix $A$ is said to be symmetric if:",
    "options": {
      "A": "$A^T = A$",
      "B": "$A^T = -A$",
      "C": "$A^{-1} = A$",
      "D": "$|A| = 1$"
    },
    "correctAnswer": "A",
    "explanation": "A matrix is symmetric if it is equal to its transpose ($A^T = A$), and skew-symmetric if $A^T = -A$."
  },
  {
    "id": "WAEC-SS3-MAT-015",
    "class": "SSS 3",
    "topic": "Matrices & Determinants",
    "question": "If $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, evaluate $I^{100}$.",
    "options": {
      "A": "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "B": "$\\begin{pmatrix} 100 & 0 \\\\ 0 & 100 \\end{pmatrix}$",
      "C": "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
      "D": "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$"
    },
    "correctAnswer": "A",
    "explanation": "The identity matrix multiplied by itself any number of times equals the identity matrix: $I^n = I$."
  },
  {
    "id": "WAEC-SS3-MAT-016",
    "class": "SSS 3",
    "topic": "Matrices & Determinants",
    "question": "Find the value of $x$ if $\\begin{vmatrix} x & 3 \\\\ 2 & x \\end{vmatrix} = 10$.",
    "options": {
      "A": "$x = \\pm 4$",
      "B": "$x = \\pm 2$",
      "C": "$x = 4$",
      "D": "$x = \\pm 5$"
    },
    "correctAnswer": "A",
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
      "A": "$20$",
      "B": "$18$",
      "C": "$22$",
      "D": "$16$"
    },
    "correctAnswer": "A",
    "explanation": "$\\int (3x^2 - 2x + 1)\\,dx = \\left[ x^3 - x^2 + x \\right]_1^3 = (27 - 9 + 3) - (1 - 1 + 1) = 21 - 1 = 20$."
  },
  {
    "id": "WAEC-SS3-CALC-004",
    "class": "SSS 3",
    "topic": "Calculus",
    "question": "Find the coordinates of the turning point of the curve $y = x^3 - 3x^2 + 2$ where the function has a local minimum.",
    "options": {
      "A": "$(2, -2)$",
      "B": "$(0, 2)$",
      "C": "$(1, 0)$",
      "D": "$(2, 2)$"
    },
    "correctAnswer": "A",
    "explanation": "$\\frac{dy}{dx} = 3x^2 - 6x = 3x(x - 2) = 0 \\implies x = 0$ or $x = 2$. Second derivative $\\frac{d^2y}{dx^2} = 6x - 6$. At $x = 2$, $\\frac{d^2y}{dx^2} = 6 > 0$ (minimum). $y(2) = 8 - 12 + 2 = -2$. Point is $(2, -2)$."
  },
  {
    "id": "WAEC-SS3-CALC-005",
    "class": "SSS 3",
    "topic": "Calculus",
    "question": "If $y = x^2 \\sin x$, find $\\dfrac{dy}{dx}$.",
    "options": {
      "A": "$2x\\sin x + x^2\\cos x$",
      "B": "$2x\\cos x$",
      "C": "$x^2\\cos x - 2x\\sin x$",
      "D": "$2x\\sin x - x^2\\cos x$"
    },
    "correctAnswer": "A",
    "explanation": "By the product rule: $\\frac{d}{dx}(uv) = u'v + uv' = (2x)(\\sin x) + (x^2)(\\cos x) = 2x\\sin x + x^2\\cos x$."
  },
  {
    "id": "WAEC-SS3-CALC-006",
    "class": "SSS 3",
    "topic": "Calculus",
    "question": "Evaluate $\\displaystyle\\int \\left(4x^3 - \\dfrac{1}{x^2}\\right)\\,dx$.",
    "options": {
      "A": "$x^4 + \\frac{1}{x} + C$",
      "B": "$x^4 - \\frac{1}{x} + C$",
      "C": "$12x^2 + \\frac{2}{x^3} + C$",
      "D": "$x^4 + \\frac{2}{x} + C$"
    },
    "correctAnswer": "A",
    "explanation": "$\\int 4x^3\\,dx = x^4$, and $\\int -x^{-2}\\,dx = -\\left(\\frac{x^{-1}}{-1}\\right) = +\\frac{1}{x}$. Thus $x^4 + \\frac{1}{x} + C$."
  },
  {
    "id": "WAEC-SS3-CALC-007",
    "class": "SSS 3",
    "topic": "Calculus",
    "question": "Find the equation of the normal to the curve $y = x^2$ at the point $(2, 4)$.",
    "options": {
      "A": "$x + 4y - 18 = 0$",
      "B": "$4x - y - 4 = 0$",
      "C": "$x - 4y + 14 = 0$",
      "D": "$4x + y - 12 = 0$"
    },
    "correctAnswer": "A",
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
      "A": "$9\\text{ sq units}$",
      "B": "$3\\text{ sq units}$",
      "C": "$27\\text{ sq units}$",
      "D": "$18\\text{ sq units}$"
    },
    "correctAnswer": "A",
    "explanation": "$\\text{Area} = \\int_0^3 x^2\\,dx = \\left[ \\frac{x^3}{3} \\right]_0^3 = \\frac{27}{3} - 0 = 9\\text{ sq units}$."
  },
  {
    "id": "WAEC-SS3-CALC-010",
    "class": "SSS 3",
    "topic": "Calculus",
    "question": "Differentiate $y = \\dfrac{2x + 1}{x - 3}$ with respect to $x$.",
    "options": {
      "A": "$-\\frac{7}{(x - 3)^2}$",
      "B": "$\\frac{7}{(x - 3)^2}$",
      "C": "$-\\frac{5}{(x - 3)^2}$",
      "D": "$\\frac{1}{(x - 3)^2}$"
    },
    "correctAnswer": "A",
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
      "A": "$-9\\cos(3x)$",
      "B": "$9\\cos(3x)$",
      "C": "$-3\\sin(3x)$",
      "D": "$-9\\sin(3x)$"
    },
    "correctAnswer": "A",
    "explanation": "First derivative $\\frac{dy}{dx} = -3\\sin(3x)$. Second derivative $\\frac{d^2y}{dx^2} = -3(3\\cos(3x)) = -9\\cos(3x)$."
  },
  {
    "id": "WAEC-SS3-CALC-013",
    "class": "SSS 3",
    "topic": "Calculus",
    "question": "Find the rate of change of the area of a circle with respect to its radius $r$ when $r = 5\\text{ cm}$.",
    "options": {
      "A": "$10\\pi\\text{ cm}^2/\\text{cm}$",
      "B": "$25\\pi\\text{ cm}^2/\\text{cm}$",
      "C": "$5\\pi\\text{ cm}^2/\\text{cm}$",
      "D": "$20\\pi\\text{ cm}^2/\\text{cm}$"
    },
    "correctAnswer": "A",
    "explanation": "$A = \\pi r^2 \\implies \\frac{dA}{dr} = 2\\pi r$. At $r = 5$, $\\frac{dA}{dr} = 2\\pi(5) = 10\\pi\\text{ cm}^2/\\text{cm}$."
  },
  {
    "id": "WAEC-SS3-CALC-014",
    "class": "SSS 3",
    "topic": "Calculus",
    "question": "Evaluate $\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx$.",
    "options": {
      "A": "$1$",
      "B": "$0$",
      "C": "$-1$",
      "D": "$\\frac{1}{2}$"
    },
    "correctAnswer": "A",
    "explanation": "$\\int \\cos x\\,dx = [\\sin x]_0^{\\pi/2} = \\sin\\left(\\frac{\\pi}{2}\\right) - \\sin(0) = 1 - 0 = 1$."
  },
  {
    "id": "WAEC-SS3-CALC-015",
    "class": "SSS 3",
    "topic": "Calculus",
    "question": "At what value of $x$ does the curve $y = 2x^3 - 3x^2 - 12x + 7$ have a stationary point?",
    "options": {
      "A": "$x = 2\\text{ or }x = -1$",
      "B": "$x = -2\\text{ or }x = 1$",
      "C": "$x = 3\\text{ or }x = -2$",
      "D": "$x = 1\\text{ or }x = 4$"
    },
    "correctAnswer": "A",
    "explanation": "$\\frac{dy}{dx} = 6x^2 - 6x - 12 = 0 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0 \\implies x = 2$ or $x = -1$."
  },
  {
    "id": "WAEC-SS3-CALC-016",
    "class": "SSS 3",
    "topic": "Calculus",
    "question": "If $\\displaystyle\\int_0^k 2x\\,dx = 16$, where $k > 0$, find $k$.",
    "options": {
      "A": "$k = 4$",
      "B": "$k = 8$",
      "C": "$k = 2$",
      "D": "$k = 16$"
    },
    "correctAnswer": "A",
    "explanation": "$\\int_0^k 2x\\,dx = [x^2]_0^k = k^2 - 0 = k^2$. $k^2 = 16 \\implies k = 4$ (since $k > 0$)."
  }
];
