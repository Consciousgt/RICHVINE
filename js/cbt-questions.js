/**
 * RichVine College - Computer Based Test (CBT) Question Bank
 * Total: 300 WAEC/JAMB Standard Mathematics Questions
 * SSS 1: 100 questions | SSS 2: 100 questions | SSS 3: 100 questions
 * Topics per class are curriculum-aligned. 40 questions are randomly sampled per exam session.
 * All mathematical notation uses LaTeX (rendered via KaTeX in the browser).
 */

(function () {
  'use strict';

  var CBT_BANK = {
  "SSS 1": [
    {
      "id": "WAEC-SS1-SET-001",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If the universal set $U = \\{x \\in \\mathbb{Z} : 1 \\le x \\le 12\\}$, $A = \\{x : x \\text{ is a prime number}\\}$, and $B = \\{x : x \\text{ is an odd number}\\}$, find $n(A \\cap B)'$.",
      "options": {
        "A": "$8$",
        "B": "$4$",
        "C": "$9$",
        "D": "$5$"
      },
      "correctAnswer": "A",
      "explanation": "$U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12\\}$ with $n(U) = 12$. The primes are $A = \\{2, 3, 5, 7, 11\\}$ and odd numbers are $B = \\{1, 3, 5, 7, 9, 11\\}$. Thus $A \\cap B = \\{3, 5, 7, 11\\}$, which has $4$ elements. Hence $n(A \\cap B)' = n(U) - n(A \\cap B) = 12 - 4 = 8$."
    },
    {
      "id": "WAEC-SS1-SET-002",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If set $P = \\{a, b, c, d\\}$, how many proper subsets does $P$ have?",
      "options": {
        "A": "$16$",
        "B": "$15$",
        "C": "$14$",
        "D": "$8$"
      },
      "correctAnswer": "B",
      "explanation": "The total number of subsets of a set with $n$ elements is $2^n$. For $n = 4$, total subsets $= 2^4 = 16$. The number of proper subsets excludes the set itself, so $2^4 - 1 = 16 - 1 = 15$."
    },
    {
      "id": "WAEC-SS1-SET-003",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Given $X = \\{x : 2 < x \\le 10,\\ x \\text{ is an even integer}\\}$ and $Y = \\{x : 1 \\le x < 10,\\ x \\text{ is a prime number}\\}$, find $X \\cap Y$.",
      "options": {
        "A": "$\\{2\\}$",
        "B": "$\\{2, 4\\}$",
        "C": "$\\emptyset$",
        "D": "$\\{3, 5, 7\\}$"
      },
      "correctAnswer": "C",
      "explanation": "$X = \\{4, 6, 8, 10\\}$ (since $x > 2$) and $Y = \\{2, 3, 5, 7\\}$. Since no element is common to both sets, $X \\cap Y = \\emptyset$."
    },
    {
      "id": "WAEC-SS1-SET-004",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a senior class of $50$ students, $30$ study Biology, $28$ study Physics, and $8$ study neither subject. How many students study both subjects?",
      "options": {
        "A": "$14$",
        "B": "$12$",
        "C": "$18$",
        "D": "$16$"
      },
      "correctAnswer": "D",
      "explanation": "Total students studying at least one subject $= 50 - 8 = 42$. By the union formula: $n(B \\cup P) = n(B) + n(P) - n(B \\cap P) \\implies 42 = 30 + 28 - n(B \\cap P) \\implies n(B \\cap P) = 58 - 42 = 16$."
    },
    {
      "id": "WAEC-SS1-SET-005",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $M = \\{1, 3, 5, 7, 9, 11\\}$ and $N = \\{2, 3, 5, 7, 11, 13\\}$, find the set difference $M \\setminus N$.",
      "options": {
        "A": "$\\{1, 9\\}$",
        "B": "$\\{2, 13\\}$",
        "C": "$\\{3, 5, 7, 11\\}$",
        "D": "$\\{1, 2, 9, 13\\}$"
      },
      "correctAnswer": "A",
      "explanation": "$M \\setminus N$ is the set of elements that belong to $M$ but not to $N$. Removing $\\{3, 5, 7, 11\\}$ from $M$ leaves $\\{1, 9\\}$."
    },
    {
      "id": "WAEC-SS1-SET-006",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$, $A = \\{2, 3, 5, 7\\}$, and $B = \\{1, 3, 5, 7, 9\\}$, which of the following represents $(A \\cup B)'$?",
      "options": {
        "A": "$\\{1, 2, 4, 6, 8, 10\\}$",
        "B": "$\\{4, 6, 8, 10\\}$",
        "C": "$\\{4, 6, 8\\}$",
        "D": "$\\{3, 5, 7\\}$"
      },
      "correctAnswer": "B",
      "explanation": "$A \\cup B = \\{1, 2, 3, 5, 7, 9\\}$. The complement $(A \\cup B)' = U \\setminus (A \\cup B) = \\{4, 6, 8, 10\\}$."
    },
    {
      "id": "WAEC-SS1-SET-007",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $n(P) = 24$, $n(Q) = 18$, and $n(P \\cup Q) = 35$, find $n(P \\cap Q')$.",
      "options": {
        "A": "$7$",
        "B": "$11$",
        "C": "$17$",
        "D": "$13$"
      },
      "correctAnswer": "C",
      "explanation": "First find $n(P \\cap Q)$: $n(P \\cup Q) = n(P) + n(Q) - n(P \\cap Q) \\implies 35 = 24 + 18 - n(P \\cap Q) \\implies n(P \\cap Q) = 7$. Then $n(P \\cap Q') = n(P \\setminus Q) = n(P) - n(P \\cap Q) = 24 - 7 = 17$."
    },
    {
      "id": "WAEC-SS1-SET-008",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Which of the following sets is an empty set?",
      "options": {
        "A": "$\\{\\emptyset\\}$",
        "B": "$\\{x : x \\in \\mathbb{Z},\\ x^2 = 4\\}$",
        "C": "$\\{0\\}$",
        "D": "$\\{x : x \\in \\mathbb{R},\\ x^2 + 4 = 0\\}$"
      },
      "correctAnswer": "D",
      "explanation": "For any real number $x$, $x^2 \\ge 0$, so $x^2 + 4 \\ge 4 > 0$. Thus there is no real number satisfying $x^2 + 4 = 0$. Hence the set is empty ($\\emptyset$). Note that $\\{0\\}$ and $\\{\\emptyset\\}$ each contain one element."
    },
    {
      "id": "WAEC-SS1-SET-009",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Find the listing of elements in the set $T = \\{x : x \\in \\mathbb{Z},\\ -2 < x \\le 3\\}$.",
      "options": {
        "A": "$\\{-1, 0, 1, 2, 3\\}$",
        "B": "$\\{-2, -1, 0, 1, 2, 3\\}$",
        "C": "$\\{-1, 0, 1, 2\\}$",
        "D": "$\\{0, 1, 2, 3\\}$"
      },
      "correctAnswer": "A",
      "explanation": "Since $x \\in \\mathbb{Z}$ and $-2 < x \\le 3$, $x$ strictly exceeds $-2$ (starting at $-1$) and includes $3$. Thus $T = \\{-1, 0, 1, 2, 3\\}$."
    },
    {
      "id": "WAEC-SS1-SET-010",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $A = \\{1, 2, 4, 8\\}$ and $B = \\{2, 4, 6, 8, 10\\}$, find the symmetric difference $(A \\setminus B) \\cup (B \\setminus A)$.",
      "options": {
        "A": "$\\{2, 4, 8\\}$",
        "B": "$\\{1, 6, 10\\}$",
        "C": "$\\{1, 2, 4, 6, 8, 10\\}$",
        "D": "$\\{6, 10\\}$"
      },
      "correctAnswer": "B",
      "explanation": "$A \\setminus B = \\{1\\}$ and $B \\setminus A = \\{6, 10\\}$. Therefore, the symmetric difference $(A \\setminus B) \\cup (B \\setminus A) = \\{1, 6, 10\\}$."
    },
    {
      "id": "WAEC-SS1-SET-011",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a mock exam, $70\\%$ of the candidates passed Mathematics and $60\\%$ passed English. If $15\\%$ failed both subjects, what percentage of the candidates passed both subjects?",
      "options": {
        "A": "$35\\%$",
        "B": "$50\\%$",
        "C": "$45\\%$",
        "D": "$40\\%$"
      },
      "correctAnswer": "C",
      "explanation": "The percentage passing at least one subject is $100\\% - 15\\% = 85\\%$. Using $n(M \\cup E) = n(M) + n(E) - n(M \\cap E)$: $85\\% = 70\\% + 60\\% - n(M \\cap E) \\implies n(M \\cap E) = 130\\% - 85\\% = 45\\%$."
    },
    {
      "id": "WAEC-SS1-SET-012",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $U = \\{x : 10 \\le x \\le 20,\\ x \\text{ is an integer}\\}$ and $S = \\{x : x \\text{ is a multiple of } 3\\}$, find $S'$.",
      "options": {
        "A": "$\\{10, 12, 14, 16, 18, 20\\}$",
        "B": "$\\{12, 15, 18\\}$",
        "C": "$\\{11, 13, 17, 19\\}$",
        "D": "$\\{10, 11, 13, 14, 16, 17, 19, 20\\}$"
      },
      "correctAnswer": "D",
      "explanation": "In $U = \\{10, 11, \\dots, 20\\}$, the multiples of $3$ are $S = \\{12, 15, 18\\}$. The complement $S' = U \\setminus \\{12, 15, 18\\} = \\{10, 11, 13, 14, 16, 17, 19, 20\\}$."
    },
    {
      "id": "WAEC-SS1-SET-013",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If set $A = \\{1, 2, 3, 4, 5\\}$, how many subsets of $A$ contain exactly $3$ elements?",
      "options": {
        "A": "$10$",
        "B": "$12$",
        "C": "$15$",
        "D": "$8$"
      },
      "correctAnswer": "A",
      "explanation": "The number of subsets containing exactly $3$ elements is given by the combination $\\binom{5}{3} = \\frac{5 \\times 4 \\times 3}{3 \\times 2 \\times 1} = 10$."
    },
    {
      "id": "WAEC-SS1-SET-014",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a school of $120$ students, $75$ belong to the Drama Club, $60$ belong to the Debating Club, and $20$ belong to neither club. How many students belong to the Drama Club only?",
      "options": {
        "A": "$35$",
        "B": "$40$",
        "C": "$45$",
        "D": "$25$"
      },
      "correctAnswer": "B",
      "explanation": "Students belonging to at least one club $= 120 - 20 = 100$. Then $n(Drama \\cap Debating) = 75 + 60 - 100 = 35$. Students belonging to the Drama Club only $= n(Drama) - n(Drama \\cap Debating) = 75 - 35 = 40$."
    },
    {
      "id": "WAEC-SS1-SET-015",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $P = \\{a, e, i, o, u\\}$, $Q = \\{a, b, c, d, e\\}$, and $R = \\{a, c, e, g, i\\}$, find $(P \\cap Q) \\cup R$.",
      "options": {
        "A": "$\\{a, b, c, d, e, i, o, u\\}$",
        "B": "$\\{a, e\\}$",
        "C": "$\\{a, c, e, g, i\\}$",
        "D": "$\\{a, e, i\\}$"
      },
      "correctAnswer": "C",
      "explanation": "$P \\cap Q = \\{a, e\\}$. Then $(P \\cap Q) \\cup R = \\{a, e\\} \\cup \\{a, c, e, g, i\\} = \\{a, c, e, g, i\\}$."
    },
    {
      "id": "WAEC-SS1-SET-016",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Let $U = \\{\\text{factors of } 36\\}$, $A = \\{\\text{factors of } 12\\}$, and $B = \\{\\text{factors of } 18\\}$. Find $(A \\cup B)'$.",
      "options": {
        "A": "$\\{4, 36\\}$",
        "B": "$\\emptyset$",
        "C": "$\\{9, 36\\}$",
        "D": "$\\{36\\}$"
      },
      "correctAnswer": "D",
      "explanation": "$U = \\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}$. Factors of $12$ are $A = \\{1, 2, 3, 4, 6, 12\\}$. Factors of $18$ are $B = \\{1, 2, 3, 6, 9, 18\\}$. $A \\cup B = \\{1, 2, 3, 4, 6, 9, 12, 18\\}$. Hence $(A \\cup B)' = U \\setminus (A \\cup B) = \\{36\\}$."
    },
    {
      "id": "WAEC-SS1-SET-017",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Two non-empty sets $A$ and $B$ are disjoint if and only if:",
      "options": {
        "A": "$A \\cap B = \\emptyset$",
        "B": "$A \\cup B = \\emptyset$",
        "C": "$A \\setminus B = B$",
        "D": "$A = B'$"
      },
      "correctAnswer": "A",
      "explanation": "By definition, two sets are disjoint if they have no common elements, which means their intersection is the empty set: $A \\cap B = \\emptyset$."
    },
    {
      "id": "WAEC-SS1-SET-018",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Given that $n(U) = 40$, $n(A) = 2x$, $n(B) = 3x$, $n(A \\cap B) = x$, and $n(A \\cup B)' = 8$, find the value of $x$.",
      "options": {
        "A": "$6$",
        "B": "$8$",
        "C": "$10$",
        "D": "$7$"
      },
      "correctAnswer": "B",
      "explanation": "$n(A \\cup B) = n(U) - n(A \\cup B)' = 40 - 8 = 32$. Also $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 2x + 3x - x = 4x$. Therefore $4x = 32 \\implies x = 8$."
    },
    {
      "id": "WAEC-SS1-SET-019",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Find the truth set of $S = \\{x \\in \\mathbb{R} : x^2 - 7x + 10 = 0\\}$.",
      "options": {
        "A": "$\\{-2, 5\\}$",
        "B": "$\\{-2, -5\\}$",
        "C": "$\\{2, 5\\}$",
        "D": "$\\{2, -5\\}$"
      },
      "correctAnswer": "C",
      "explanation": "Factoring the quadratic equation: $x^2 - 7x + 10 = (x - 2)(x - 5) = 0 \\implies x = 2$ or $x = 5$. Thus $S = \\{2, 5\\}$."
    },
    {
      "id": "WAEC-SS1-SET-020",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $A \\subset B$, which of the following statements must be FALSE?",
      "options": {
        "A": "$A \\setminus B = \\emptyset$",
        "B": "$A \\cup B = B$",
        "C": "$A \\cap B = A$",
        "D": "$A \\cap B = B$"
      },
      "correctAnswer": "D",
      "explanation": "If $A$ is a proper subset of $B$, every element of $A$ is in $B$, so $A \\cap B = A$, not $B$. Hence $A \\cap B = B$ is false unless $A = B$."
    },
    {
      "id": "WAEC-SS1-SET-021",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "A survey of $80$ traders shows that $52$ sell yam, $40$ sell rice, and $12$ sell neither item. How many traders sell only yam?",
      "options": {
        "A": "$28$",
        "B": "$24$",
        "C": "$32$",
        "D": "$16$"
      },
      "correctAnswer": "A",
      "explanation": "Traders selling at least one item $= 80 - 12 = 68$. Traders selling both $= 52 + 40 - 68 = 24$. Traders selling only yam $= 52 - 24 = 28$."
    },
    {
      "id": "WAEC-SS1-SET-022",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$, $A = \\{1, 3, 5, 7, 9\\}$, and $B = \\{2, 3, 5, 7\\}$, find $A' \\cap B$.",
      "options": {
        "A": "$\\{3, 5, 7\\}$",
        "B": "$\\{2\\}$",
        "C": "$\\{2, 4, 6, 8, 10\\}$",
        "D": "$\\emptyset$"
      },
      "correctAnswer": "B",
      "explanation": "$A' = \\{2, 4, 6, 8, 10\\}$. The intersection $A' \\cap B = \\{2, 4, 6, 8, 10\\} \\cap \\{2, 3, 5, 7\\} = \\{2\\}$."
    },
    {
      "id": "WAEC-SS1-SET-023",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If a finite set $K$ has exactly $64$ subsets, how many elements are in $K$?",
      "options": {
        "A": "$7$",
        "B": "$5$",
        "C": "$6$",
        "D": "$8$"
      },
      "correctAnswer": "C",
      "explanation": "The total number of subsets of a set with $n$ elements is $2^n$. Here $2^n = 64 = 2^6 \\implies n = 6$."
    },
    {
      "id": "WAEC-SS1-SET-024",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $P = \\{x : 4x - 3 < 17,\\ x \\in \\mathbb{N}\\}$, where $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$, list the members of $P$.",
      "options": {
        "A": "$\\{2, 3, 4\\}$",
        "B": "$\\{1, 2, 3, 4, 5\\}$",
        "C": "$\\{0, 1, 2, 3, 4\\}$",
        "D": "$\\{1, 2, 3, 4\\}$"
      },
      "correctAnswer": "D",
      "explanation": "Solving the inequality: $4x - 3 < 17 \\implies 4x < 20 \\implies x < 5$. Since $x$ is a natural number ($x \\ge 1$), $P = \\{1, 2, 3, 4\\}$."
    },
    {
      "id": "WAEC-SS1-SET-025",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a youth camp of $65$ participants, $45$ swim, $35$ play table tennis, and each participant engages in at least one of these two sports. How many participants engage in both sports?",
      "options": {
        "A": "$15$",
        "B": "$20$",
        "C": "$10$",
        "D": "$25$"
      },
      "correctAnswer": "A",
      "explanation": "Since everyone does at least one sport, $n(S \\cup T) = 65$. Using $n(S \\cup T) = n(S) + n(T) - n(S \\cap T)$: $65 = 45 + 35 - n(S \\cap T) \\implies n(S \\cap T) = 80 - 65 = 15$."
    },
    {
      "id": "WAEC-SS1-IDX-001",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify $\\frac{x^7 \\times x^4}{(x^3)^3}$.",
      "options": {
        "A": "$x^3$",
        "B": "$x^2$",
        "C": "$x$",
        "D": "$x^5$"
      },
      "correctAnswer": "B",
      "explanation": "Numerator: $x^7 \\times x^4 = x^{7+4} = x^{11}$. Denominator: $(x^3)^3 = x^{3 \\times 3} = x^9$. Dividing: $\\frac{x^{11}}{x^9} = x^{11-9} = x^2$."
    },
    {
      "id": "WAEC-SS1-IDX-002",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate $(64)^{-\\frac{2}{3}}$.",
      "options": {
        "A": "$16$",
        "B": "$\\frac{1}{8}$",
        "C": "$\\frac{1}{16}$",
        "D": "$\\frac{1}{32}$"
      },
      "correctAnswer": "C",
      "explanation": "$(64)^{-2/3} = \\frac{1}{(64)^{2/3}} = \\frac{1}{(\\sqrt[3]{64})^2} = \\frac{1}{4^2} = \\frac{1}{16}$."
    },
    {
      "id": "WAEC-SS1-IDX-003",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate $\\left(\\frac{64}{27}\\right)^{-\\frac{2}{3}}$.",
      "options": {
        "A": "$\\frac{4}{3}$",
        "B": "$\\frac{16}{9}$",
        "C": "$\\frac{3}{4}$",
        "D": "$\\frac{9}{16}$"
      },
      "correctAnswer": "D",
      "explanation": "$\\left(\\frac{64}{27}\\right)^{-\\frac{2}{3}} = \\left(\\frac{27}{64}\\right)^{\\frac{2}{3}} = \\left(\\sqrt[3]{\\frac{27}{64}}\\right)^2 = \\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$."
    },
    {
      "id": "WAEC-SS1-IDX-004",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify $\\frac{2^{n+3} - 2^{n+1}}{2^n}$.",
      "options": {
        "A": "$6$",
        "B": "$4$",
        "C": "$8$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "Factor out $2^n$ from the numerator: $\\frac{2^n(2^3 - 2^1)}{2^n} = 2^3 - 2^1 = 8 - 2 = 6$."
    },
    {
      "id": "WAEC-SS1-IDX-005",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $x$ if $2^{3x-1} = 32$.",
      "options": {
        "A": "$3$",
        "B": "$2$",
        "C": "$1$",
        "D": "$\\frac{5}{3}$"
      },
      "correctAnswer": "B",
      "explanation": "Express $32$ as a power of $2$: $32 = 2^5$. Then $2^{3x-1} = 2^5 \\implies 3x - 1 = 5 \\implies 3x = 6 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS1-IDX-006",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $y$ if $3^{2y+1} = \\frac{1}{81}$.",
      "options": {
        "A": "$-\\frac{3}{2}$",
        "B": "$-2$",
        "C": "$-\\frac{5}{2}$",
        "D": "$-3$"
      },
      "correctAnswer": "C",
      "explanation": "$\\frac{1}{81} = 3^{-4}$. Equating powers: $3^{2y+1} = 3^{-4} \\implies 2y + 1 = -4 \\implies 2y = -5 \\implies y = -\\frac{5}{2}$."
    },
    {
      "id": "WAEC-SS1-IDX-007",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $x$ if $4^{x+1} = 8^{x-1}$.",
      "options": {
        "A": "$2$",
        "B": "$3$",
        "C": "$4$",
        "D": "$5$"
      },
      "correctAnswer": "D",
      "explanation": "Convert both sides to base $2$: $(2^2)^{x+1} = (2^3)^{x-1} \\implies 2^{2x+2} = 2^{3x-3}$. Equating powers: $2x + 2 = 3x - 3 \\implies 3x - 2x = 2 + 3 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS1-IDX-008",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify $\\frac{(27a^6 b^9)^{\\frac{2}{3}}}{3a^2 b^4}$.",
      "options": {
        "A": "$3a^2 b^2$",
        "B": "$9a^2 b^2$",
        "C": "$3ab^2$",
        "D": "$9a^4 b^6$"
      },
      "correctAnswer": "A",
      "explanation": "Numerator: $(27)^{2/3} (a^6)^{2/3} (b^9)^{2/3} = (3^3)^{2/3} a^{6 \\times 2/3} b^{9 \\times 2/3} = 9a^4 b^6$. Dividing by $3a^2 b^4$: $\\frac{9a^4 b^6}{3a^2 b^4} = 3a^{4-2} b^{6-4} = 3a^2 b^2$."
    },
    {
      "id": "WAEC-SS1-IDX-009",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate $(125)^0 + (64)^{\\frac{1}{3}} - (32)^{-\\frac{1}{5}}$.",
      "options": {
        "A": "$5$",
        "B": "$\\frac{9}{2}$",
        "C": "$\\frac{7}{2}$",
        "D": "$4$"
      },
      "correctAnswer": "B",
      "explanation": "$(125)^0 = 1$. $(64)^{1/3} = 4$. $(32)^{-1/5} = \\frac{1}{32^{1/5}} = \\frac{1}{2}$. Sum $= 1 + 4 - \\frac{1}{2} = 5 - \\frac{1}{2} = \\frac{9}{2}$."
    },
    {
      "id": "WAEC-SS1-IDX-010",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $x$ if $3^x = \\sqrt{27}$.",
      "options": {
        "A": "$\\frac{2}{3}$",
        "B": "$3$",
        "C": "$\\frac{3}{2}$",
        "D": "$\\frac{1}{2}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\sqrt{27} = 27^{1/2} = (3^3)^{1/2} = 3^{3/2}$. Thus $3^x = 3^{3/2} \\implies x = \\frac{3}{2}$."
    },
    {
      "id": "WAEC-SS1-IDX-011",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify $\\frac{5^{n+2} - 5^n}{5^{n+1} + 5^n}$.",
      "options": {
        "A": "$2$",
        "B": "$5$",
        "C": "$\\frac{24}{5}$",
        "D": "$4$"
      },
      "correctAnswer": "D",
      "explanation": "Factor out $5^n$: $\\frac{5^n(5^2 - 1)}{5^n(5^1 + 1)} = \\frac{25 - 1}{5 + 1} = \\frac{24}{6} = 4$."
    },
    {
      "id": "WAEC-SS1-IDX-012",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $x$ if $9^{2x-1} = 27^{x+1}$.",
      "options": {
        "A": "$5$",
        "B": "$4$",
        "C": "$3$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "Express in base $3$: $(3^2)^{2x-1} = (3^3)^{x+1} \\implies 3^{4x-2} = 3^{3x+3}$. Equating powers: $4x - 2 = 3x + 3 \\implies 4x - 3x = 3 + 2 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS1-IDX-013",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate $\\left(\\frac{8}{27}\\right)^{-\\frac{2}{3}} \\times \\left(\\frac{4}{9}\\right)^{\\frac{1}{2}}$.",
      "options": {
        "A": "$\\frac{9}{4}$",
        "B": "$\\frac{3}{2}$",
        "C": "$1$",
        "D": "$\\frac{2}{3}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\left(\\frac{8}{27}\\right)^{-2/3} = \\left(\\frac{27}{8}\\right)^{2/3} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$. $\\left(\\frac{4}{9}\\right)^{1/2} = \\frac{2}{3}$. Multiplying them: $\\frac{9}{4} \\times \\frac{2}{3} = \\frac{18}{12} = \\frac{3}{2}$."
    },
    {
      "id": "WAEC-SS1-IDX-014",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify $(a^{-2} b^3)^{-2} \\div (a^3 b^{-2})^2$.",
      "options": {
        "A": "$a^{-2} b^2$",
        "B": "$a^2 b^2$",
        "C": "$a^{-2} b^{-2}$",
        "D": "$a^2 b^{-2}$"
      },
      "correctAnswer": "C",
      "explanation": "$(a^{-2} b^3)^{-2} = a^{(-2)(-2)} b^{3(-2)} = a^4 b^{-6}$. $(a^3 b^{-2})^2 = a^6 b^{-4}$. Dividing: $\\frac{a^4 b^{-6}}{a^6 b^{-4}} = a^{4-6} b^{-6 - (-4)} = a^{-2} b^{-2}$."
    },
    {
      "id": "WAEC-SS1-IDX-015",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $x$ if $\\left(\\frac{1}{2}\\right)^{x-3} = 16$.",
      "options": {
        "A": "$1$",
        "B": "$-7$",
        "C": "$7$",
        "D": "$-1$"
      },
      "correctAnswer": "D",
      "explanation": "$\\left(\\frac{1}{2}\\right)^{x-3} = (2^{-1})^{x-3} = 2^{3-x}$. Since $16 = 2^4$, we have $2^{3-x} = 2^4 \\implies 3 - x = 4 \\implies x = -1$."
    },
    {
      "id": "WAEC-SS1-IDX-016",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify $\\frac{2^{n+4} - 2(2^n)}{2(2^{n+3})}$.",
      "options": {
        "A": "$\\frac{7}{8}$",
        "B": "$\\frac{3}{4}$",
        "C": "$\\frac{1}{2}$",
        "D": "$1$"
      },
      "correctAnswer": "A",
      "explanation": "Factor out $2^n$ from numerator and denominator: $\\frac{2^n(2^4 - 2)}{2^n(2 \\times 2^3)} = \\frac{16 - 2}{2 \\times 8} = \\frac{14}{16} = \\frac{7}{8}$."
    },
    {
      "id": "WAEC-SS1-IDX-017",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate $(0.04)^{-\\frac{3}{2}}$.",
      "options": {
        "A": "$25$",
        "B": "$125$",
        "C": "$\\frac{1}{125}$",
        "D": "$0.008$"
      },
      "correctAnswer": "B",
      "explanation": "$0.04 = \\frac{4}{100} = \\frac{1}{25} = 5^{-2}$. Then $(5^{-2})^{-\\frac{3}{2}} = 5^{(-2) \\times (-\\frac{3}{2})} = 5^3 = 125$."
    },
    {
      "id": "WAEC-SS1-IDX-018",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $x$ if $2^{2x} - 5(2^x) + 4 = 0$.",
      "options": {
        "A": "$x = 1 \\text{ or } 2$",
        "B": "$x = 1 \\text{ or } 4$",
        "C": "$x = 0 \\text{ or } 2$",
        "D": "$x = 0 \\text{ or } 4$"
      },
      "correctAnswer": "C",
      "explanation": "Let $y = 2^x$. Then $y^2 - 5y + 4 = 0 \\implies (y - 1)(y - 4) = 0 \\implies y = 1$ or $y = 4$. If $2^x = 1 \\implies x = 0$; if $2^x = 4 = 2^2 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS1-IDX-019",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate $\\frac{10^4 \\times 10^{-6}}{10^{-5}}$.",
      "options": {
        "A": "$\\frac{1}{10}$",
        "B": "$100$",
        "C": "$10$",
        "D": "$1000$"
      },
      "correctAnswer": "D",
      "explanation": "Numerator: $10^4 \\times 10^{-6} = 10^{4-6} = 10^{-2}$. Dividing: $\\frac{10^{-2}}{10^{-5}} = 10^{-2 - (-5)} = 10^3 = 1000$."
    },
    {
      "id": "WAEC-SS1-IDX-020",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate $(0.25)^{-\\frac{3}{2}}$.",
      "options": {
        "A": "$8$",
        "B": "$4$",
        "C": "$\\frac{1}{8}$",
        "D": "$16$"
      },
      "correctAnswer": "A",
      "explanation": "$0.25 = \\frac{1}{4} = 2^{-2}$. Then $(2^{-2})^{-3/2} = 2^{(-2) \\times (-3/2)} = 2^3 = 8$."
    },
    {
      "id": "WAEC-SS1-IDX-021",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $x$ if $2^{x-1} = \\frac{1}{\\sqrt{8}}$.",
      "options": {
        "A": "$-\\frac{3}{2}$",
        "B": "$-\\frac{1}{2}$",
        "C": "$\\frac{1}{2}$",
        "D": "$-2$"
      },
      "correctAnswer": "B",
      "explanation": "$\\frac{1}{\\sqrt{8}} = 8^{-1/2} = (2^3)^{-1/2} = 2^{-3/2}$. Equating powers: $x - 1 = -\\frac{3}{2} \\implies x = 1 - \\frac{3}{2} = -\\frac{1}{2}$."
    },
    {
      "id": "WAEC-SS1-IDX-022",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify $\\frac{3^{2n} \\times 9^{n+1}}{27^n}$.",
      "options": {
        "A": "$9^n$",
        "B": "$3^{n+1}$",
        "C": "$3^{n+2}$",
        "D": "$3^{2n+2}$"
      },
      "correctAnswer": "C",
      "explanation": "Express in base $3$: $\\frac{3^{2n} \\times (3^2)^{n+1}}{(3^3)^n} = \\frac{3^{2n} \\times 3^{2n+2}}{3^{3n}} = \\frac{3^{4n+2}}{3^{3n}} = 3^{(4n+2)-3n} = 3^{n+2}$."
    },
    {
      "id": "WAEC-SS1-IDX-023",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "If $2^x = 5$, find the value of $2^{x+2} - 2^x$.",
      "options": {
        "A": "$25$",
        "B": "$10$",
        "C": "$20$",
        "D": "$15$"
      },
      "correctAnswer": "D",
      "explanation": "$2^{x+2} - 2^x = 2^x \\times 2^2 - 2^x = 2^x(4 - 1) = 3(2^x)$. Substituting $2^x = 5$: $3 \\times 5 = 15$."
    },
    {
      "id": "WAEC-SS1-IDX-024",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $x$ if $5^{x^2 - 3x} = 625$.",
      "options": {
        "A": "$x = 4 \\text{ or } -1$",
        "B": "$x = -4 \\text{ or } 1$",
        "C": "$x = 2 \\text{ or } 3$",
        "D": "$x = 4 \\text{ or } 1$"
      },
      "correctAnswer": "A",
      "explanation": "$625 = 5^4 \\implies x^2 - 3x = 4 \\implies x^2 - 3x - 4 = 0 \\implies (x - 4)(x + 1) = 0 \\implies x = 4$ or $x = -1$."
    },
    {
      "id": "WAEC-SS1-IDX-025",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify $\\sqrt[3]{64x^6 y^9 z^{-3}}$.",
      "options": {
        "A": "$4x^3 y^3 z^{-1}$",
        "B": "$\\frac{4x^2 y^3}{z}$",
        "C": "$\\frac{8x^2 y^3}{z}$",
        "D": "$16x^2 y^3 z$"
      },
      "correctAnswer": "B",
      "explanation": "Take the cube root of each factor: $\\sqrt[3]{64} = 4$, $(x^6)^{1/3} = x^2$, $(y^9)^{1/3} = y^3$, and $(z^{-3})^{1/3} = z^{-1} = \\frac{1}{z}$. Combining gives $\\frac{4x^2 y^3}{z}$."
    },
    {
      "id": "WAEC-SS1-LOG-001",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "If $\\log_2 x = 5$, find the value of $x$.",
      "options": {
        "A": "$25$",
        "B": "$10$",
        "C": "$32$",
        "D": "$64$"
      },
      "correctAnswer": "C",
      "explanation": "Converting from logarithmic to index form: $\\log_2 x = 5 \\implies x = 2^5 = 32$."
    },
    {
      "id": "WAEC-SS1-LOG-002",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Evaluate $\\log_3 81$.",
      "options": {
        "A": "$5$",
        "B": "$3$",
        "C": "$27$",
        "D": "$4$"
      },
      "correctAnswer": "D",
      "explanation": "$81 = 3^4$. Thus $\\log_3 81 = \\log_3(3^4) = 4\\log_3 3 = 4(1) = 4$."
    },
    {
      "id": "WAEC-SS1-LOG-003",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Evaluate $\\log_4\\left(\\frac{1}{64}\\right)$.",
      "options": {
        "A": "$-3$",
        "B": "$3$",
        "C": "$-\\frac{1}{3}$",
        "D": "$-4$"
      },
      "correctAnswer": "A",
      "explanation": "$\\frac{1}{64} = 4^{-3}$. Thus $\\log_4(4^{-3}) = -3\\log_4 4 = -3$."
    },
    {
      "id": "WAEC-SS1-LOG-004",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Simplify $\\log_{10} 25 + \\log_{10} 8 - \\log_{10} 2$.",
      "options": {
        "A": "$1$",
        "B": "$2$",
        "C": "$3$",
        "D": "$\\log_{10} 100$"
      },
      "correctAnswer": "B",
      "explanation": "Using log rules: $\\log_{10}\\left(\\frac{25 \\times 8}{2}\\right) = \\log_{10}\\left(\\frac{200}{2}\\right) = \\log_{10} 100 = \\log_{10}(10^2) = 2$."
    },
    {
      "id": "WAEC-SS1-LOG-005",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Simplify $\\frac{\\log_{10} 8}{\\log_{10} 4}$.",
      "options": {
        "A": "$\\log_{10} 2$",
        "B": "$2$",
        "C": "$\\frac{3}{2}$",
        "D": "$\\frac{4}{3}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log_{10} 8 = \\log_{10}(2^3) = 3\\log_{10} 2$. $\\log_{10} 4 = \\log_{10}(2^2) = 2\\log_{10} 2$. Dividing gives $\\frac{3\\log_{10} 2}{2\\log_{10} 2} = \\frac{3}{2}$."
    },
    {
      "id": "WAEC-SS1-LOG-006",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Solve for $x$ if $\\log_3(2x + 5) = 2$.",
      "options": {
        "A": "$1$",
        "B": "$3$",
        "C": "$4$",
        "D": "$2$"
      },
      "correctAnswer": "D",
      "explanation": "In exponential form: $2x + 5 = 3^2 = 9 \\implies 2x = 9 - 5 = 4 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS1-LOG-007",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Given that $\\log_{10} 2 = 0.3010$ and $\\log_{10} 3 = 0.4771$, evaluate $\\log_{10} 72$.",
      "options": {
        "A": "$1.8572$",
        "B": "$1.7781$",
        "C": "$1.5563$",
        "D": "$2.1582$"
      },
      "correctAnswer": "A",
      "explanation": "$72 = 2^3 \\times 3^2$. $\\log_{10} 72 = 3\\log_{10} 2 + 2\\log_{10} 3 = 3(0.3010) + 2(0.4771) = 0.9030 + 0.9542 = 1.8572$."
    },
    {
      "id": "WAEC-SS1-LOG-008",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Given that $\\log_{10} 2 = 0.3010$, find the value of $\\log_{10} 5$ without using tables.",
      "options": {
        "A": "$0.7010$",
        "B": "$0.6990$",
        "C": "$0.4990$",
        "D": "$0.6020$"
      },
      "correctAnswer": "B",
      "explanation": "Since $5 = \\frac{10}{2}$, $\\log_{10} 5 = \\log_{10}\\left(\\frac{10}{2}\\right) = \\log_{10} 10 - \\log_{10} 2 = 1 - 0.3010 = 0.6990$."
    },
    {
      "id": "WAEC-SS1-LOG-009",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Given that $\\log_{10} 3 = 0.4771$, evaluate $\\log_{10}\\sqrt{27}$.",
      "options": {
        "A": "$0.2386$",
        "B": "$1.4313$",
        "C": "$0.7157$",
        "D": "$0.9542$"
      },
      "correctAnswer": "C",
      "explanation": "$\\sqrt{27} = (3^3)^{1/2} = 3^{3/2}$. Thus $\\log_{10}\\sqrt{27} = \\frac{3}{2} \\log_{10} 3 = 1.5 \\times 0.4771 = 0.71565 \\approx 0.7157$."
    },
    {
      "id": "WAEC-SS1-LOG-010",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Solve for $x$ if $\\log_{10}(x - 1) + \\log_{10}(x + 2) = 1$.",
      "options": {
        "A": "$2$",
        "B": "$4$",
        "C": "$-4$",
        "D": "$3$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log_{10}[(x - 1)(x + 2)] = 1 \\implies (x - 1)(x + 2) = 10^1 = 10 \\implies x^2 + x - 2 = 10 \\implies x^2 + x - 12 = 0 \\implies (x + 4)(x - 3) = 0$. Since $x - 1 > 0$, $x = 3$."
    },
    {
      "id": "WAEC-SS1-LOG-011",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "If $\\log_x 64 = 3$, find the value of $x$.",
      "options": {
        "A": "$4$",
        "B": "$8$",
        "C": "$2$",
        "D": "$16$"
      },
      "correctAnswer": "A",
      "explanation": "In exponential form: $x^3 = 64 = 4^3 \\implies x = 4$."
    },
    {
      "id": "WAEC-SS1-LOG-012",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Evaluate $\\log_{\\sqrt{2}} 16$.",
      "options": {
        "A": "$4$",
        "B": "$8$",
        "C": "$6$",
        "D": "$2$"
      },
      "correctAnswer": "B",
      "explanation": "Let $y = \\log_{\\sqrt{2}} 16$. Then $(\\sqrt{2})^y = 16 \\implies (2^{1/2})^y = 2^4 \\implies 2^{y/2} = 2^4 \\implies \\frac{y}{2} = 4 \\implies y = 8$."
    },
    {
      "id": "WAEC-SS1-LOG-013",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Evaluate $\\log_8 32$.",
      "options": {
        "A": "$4$",
        "B": "$\\frac{3}{5}$",
        "C": "$\\frac{5}{3}$",
        "D": "$\\frac{4}{3}$"
      },
      "correctAnswer": "C",
      "explanation": "Let $\\log_8 32 = x \\implies 8^x = 32 \\implies (2^3)^x = 2^5 \\implies 2^{3x} = 2^5 \\implies 3x = 5 \\implies x = \\frac{5}{3}$."
    },
    {
      "id": "WAEC-SS1-LOG-014",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Solve for $x$ if $\\log_2(x + 5) - \\log_2(x - 1) = 2$.",
      "options": {
        "A": "$5$",
        "B": "$2$",
        "C": "$4$",
        "D": "$3$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log_2\\left(\\frac{x+5}{x-1}\\right) = 2 \\implies \\frac{x+5}{x-1} = 2^2 = 4 \\implies x + 5 = 4(x - 1) \\implies x + 5 = 4x - 4 \\implies 3x = 9 \\implies x = 3$."
    },
    {
      "id": "WAEC-SS1-LOG-015",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "If $\\log_{10} a = p$ and $\\log_{10} b = q$, express $\\log_{10}\\left(\\frac{a^3}{\\sqrt{b}}\\right)$ in terms of $p$ and $q$.",
      "options": {
        "A": "$3p - \\frac{1}{2}q$",
        "B": "$3p - 2q$",
        "C": "$\\frac{3p}{q}$",
        "D": "$p^3 - \\sqrt{q}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}\\left(\\frac{a^3}{\\sqrt{b}}\\right) = \\log_{10}(a^3) - \\log_{10}(b^{1/2}) = 3\\log_{10} a - \\frac{1}{2}\\log_{10} b = 3p - \\frac{1}{2}q$."
    },
    {
      "id": "WAEC-SS1-LOG-016",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Evaluate $\\log_5 125 + \\log_2 1 - \\log_3\\left(\\frac{1}{9}\\right)$.",
      "options": {
        "A": "$1$",
        "B": "$5$",
        "C": "$3$",
        "D": "$-1$"
      },
      "correctAnswer": "B",
      "explanation": "$\\log_5 125 = 3$, $\\log_2 1 = 0$, and $\\log_3(3^{-2}) = -2$. Thus $3 + 0 - (-2) = 3 + 2 = 5$."
    },
    {
      "id": "WAEC-SS1-LOG-017",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Solve for $x$ if $\\log_4 x + \\log_4(x - 6) = 2$.",
      "options": {
        "A": "$-2$",
        "B": "$2$",
        "C": "$8$",
        "D": "$6$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log_4[x(x - 6)] = 2 \\implies x(x - 6) = 4^2 = 16 \\implies x^2 - 6x - 16 = 0 \\implies (x - 8)(x + 2) = 0$. Since $x > 6$ for logarithms to be defined, $x = 8$."
    },
    {
      "id": "WAEC-SS1-LOG-018",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Given that $\\log_{10} 2 = 0.3010$ and $\\log_{10} 7 = 0.8451$, find $\\log_{10} 28$.",
      "options": {
        "A": "$1.2451$",
        "B": "$1.1461$",
        "C": "$1.7471$",
        "D": "$1.4471$"
      },
      "correctAnswer": "D",
      "explanation": "$28 = 2^2 \\times 7$. Thus $\\log_{10} 28 = 2\\log_{10} 2 + \\log_{10} 7 = 2(0.3010) + 0.8451 = 0.6020 + 0.8451 = 1.4471$."
    },
    {
      "id": "WAEC-SS1-LOG-019",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Evaluate $\\log_{\\frac{1}{3}} 27$.",
      "options": {
        "A": "$-3$",
        "B": "$3$",
        "C": "$-\\frac{1}{3}$",
        "D": "$9$"
      },
      "correctAnswer": "A",
      "explanation": "Let $\\log_{1/3} 27 = y \\implies (3^{-1})^y = 3^3 \\implies 3^{-y} = 3^3 \\implies -y = 3 \\implies y = -3$."
    },
    {
      "id": "WAEC-SS1-LOG-020",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Solve for $x$ if $2\\log_3 x - \\log_3(x + 6) = 1$.",
      "options": {
        "A": "$3$",
        "B": "$6$",
        "C": "$4$",
        "D": "$-3$"
      },
      "correctAnswer": "B",
      "explanation": "$\\log_3\\left(\\frac{x^2}{x+6}\\right) = 1 \\implies \\frac{x^2}{x+6} = 3^1 = 3 \\implies x^2 = 3(x + 6) \\implies x^2 - 3x - 18 = 0$. Factoring: $(x - 6)(x + 3) = 0$. Since $\\log_3 x$ requires $x > 0$, we reject $-3$, giving $x = 6$."
    },
    {
      "id": "WAEC-SS1-LOG-021",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Simplify $\\frac{\\log 125}{\\log 25}$.",
      "options": {
        "A": "$\\log 5$",
        "B": "$5$",
        "C": "$\\frac{3}{2}$",
        "D": "$\\frac{2}{3}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log 125 = \\log(5^3) = 3\\log 5$, and $\\log 25 = \\log(5^2) = 2\\log 5$. Dividing gives $\\frac{3\\log 5}{2\\log 5} = \\frac{3}{2}$."
    },
    {
      "id": "WAEC-SS1-LOG-022",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "If $\\log_2(3x - 1) = \\log_2(x + 9)$, find the value of $x$.",
      "options": {
        "A": "$2$",
        "B": "$4$",
        "C": "$3$",
        "D": "$5$"
      },
      "correctAnswer": "D",
      "explanation": "Since bases are identical: $3x - 1 = x + 9 \\implies 3x - x = 9 + 1 \\implies 2x = 10 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS1-LOG-023",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Evaluate $3\\log_{10} 2 + \\log_{10} 125 - \\log_{10} 1$.",
      "options": {
        "A": "$3$",
        "B": "$2$",
        "C": "$1$",
        "D": "$0$"
      },
      "correctAnswer": "A",
      "explanation": "$3\\log_{10} 2 = \\log_{10}(2^3) = \\log_{10} 8$. Then $\\log_{10} 8 + \\log_{10} 125 = \\log_{10}(8 \\times 125) = \\log_{10} 1000 = 3$. Since $\\log_{10} 1 = 0$, the answer is $3$."
    },
    {
      "id": "WAEC-SS1-LOG-024",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "If $\\log_a(x^4) = 12$, find the value of $\\log_a x$.",
      "options": {
        "A": "$4$",
        "B": "$3$",
        "C": "$48$",
        "D": "$8$"
      },
      "correctAnswer": "B",
      "explanation": "By the power law of logarithms: $\\log_a(x^4) = 4\\log_a x$. Given $4\\log_a x = 12$, we divide by $4$ to get $\\log_a x = 3$."
    },
    {
      "id": "WAEC-SS1-LOG-025",
      "class": "SSS 1",
      "topic": "Logarithms",
      "question": "Solve for $x$ if $\\log_5 x = -2$.",
      "options": {
        "A": "$-10$",
        "B": "$-\\frac{1}{25}$",
        "C": "$\\frac{1}{25}$",
        "D": "$\\frac{1}{5}$"
      },
      "correctAnswer": "C",
      "explanation": "Converting to exponential form: $x = 5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$."
    },
    {
      "id": "WAEC-SS1-NBS-001",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert the binary number $11011_2$ to base $10$.",
      "options": {
        "A": "$31$",
        "B": "$25$",
        "C": "$29$",
        "D": "$27$"
      },
      "correctAnswer": "D",
      "explanation": "$11011_2 = 1(2^4) + 1(2^3) + 0(2^2) + 1(2^1) + 1(2^0) = 16 + 8 + 0 + 2 + 1 = 27_{10}$."
    },
    {
      "id": "WAEC-SS1-NBS-002",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $77_{10}$ to a binary number (base $2$).",
      "options": {
        "A": "$1001101_2$",
        "B": "$1001111_2$",
        "C": "$1011001_2$",
        "D": "$1101101_2$"
      },
      "correctAnswer": "A",
      "explanation": "Successive division of $77$ by $2$: $77 = 38 \\text{ rem } 1$, $38 = 19 \\text{ rem } 0$, $19 = 9 \\text{ rem } 1$, $9 = 4 \\text{ rem } 1$, $4 = 2 \\text{ rem } 0$, $2 = 1 \\text{ rem } 0$, $1 = 0 \\text{ rem } 1$. Reading remainders from bottom to top: $1001101_2$."
    },
    {
      "id": "WAEC-SS1-NBS-003",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $156_{10}$ to an octal number (base $8$).",
      "options": {
        "A": "$243_8$",
        "B": "$234_8$",
        "C": "$224_8$",
        "D": "$314_8$"
      },
      "correctAnswer": "B",
      "explanation": "Successive division by $8$: $156 \\div 8 = 19 \\text{ rem } 4$; $19 \\div 8 = 2 \\text{ rem } 3$; $2 \\div 8 = 0 \\text{ rem } 2$. Reading remainders upwards gives $234_8$."
    },
    {
      "id": "WAEC-SS1-NBS-004",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $234_5$ to a number in base $10$.",
      "options": {
        "A": "$74$",
        "B": "$64$",
        "C": "$69$",
        "D": "$59$"
      },
      "correctAnswer": "C",
      "explanation": "$234_5 = 2(5^2) + 3(5^1) + 4(5^0) = 2(25) + 3(5) + 4(1) = 50 + 15 + 4 = 69_{10}$."
    },
    {
      "id": "WAEC-SS1-NBS-005",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $213_x = 39_{10}$, find the value of the base $x$.",
      "options": {
        "A": "$3$",
        "B": "$5$",
        "C": "$6$",
        "D": "$4$"
      },
      "correctAnswer": "D",
      "explanation": "$2(x^2) + 1(x) + 3 = 39 \\implies 2x^2 + x - 36 = 0$. Factoring: $(2x + 9)(x - 4) = 0$. Since base $x$ must be a positive integer greater than $3$, $x = 4$."
    },
    {
      "id": "WAEC-SS1-NBS-006",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate $1101_2 + 1011_2$ in base $2$.",
      "options": {
        "A": "$11000_2$",
        "B": "$10110_2$",
        "C": "$11100_2$",
        "D": "$10010_2$"
      },
      "correctAnswer": "A",
      "explanation": "In base $10$: $1101_2 = 13$, $1011_2 = 11$. Sum $= 13 + 11 = 24_{10}$. Converting $24$ to binary: $24 = 16 + 8 = 11000_2$."
    },
    {
      "id": "WAEC-SS1-NBS-007",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate $11010_2 - 1011_2$ in binary.",
      "options": {
        "A": "$1001_2$",
        "B": "$1111_2$",
        "C": "$1011_2$",
        "D": "$1101_2$"
      },
      "correctAnswer": "B",
      "explanation": "In base $10$: $11010_2 = 16 + 8 + 2 = 26$. $1011_2 = 8 + 2 + 1 = 11$. $26 - 11 = 15_{10}$. In binary, $15 = 1111_2$."
    },
    {
      "id": "WAEC-SS1-NBS-008",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Multiply $101_2$ by $11_2$ in binary.",
      "options": {
        "A": "$1011_2$",
        "B": "$1101_2$",
        "C": "$1111_2$",
        "D": "$10011_2$"
      },
      "correctAnswer": "C",
      "explanation": "$101_2 = 5_{10}$ and $11_2 = 3_{10}$. Product $= 5 \\times 3 = 15_{10} = 1111_2$."
    },
    {
      "id": "WAEC-SS1-NBS-009",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate $324_5 + 413_5$ leaving your answer in base $5$.",
      "options": {
        "A": "$1142_5$",
        "B": "$1232_5$",
        "C": "$1241_5$",
        "D": "$1242_5$"
      },
      "correctAnswer": "D",
      "explanation": "Units: $4 + 3 = 7 = 1(5) + 2$ (write $2$, carry $1$). Fives: $2 + 1 + 1 = 4$ (write $4$, carry $0$). Twenty-fives: $3 + 4 = 7 = 1(5) + 2$ (write $2$, carry $1$). Result $= 1242_5$."
    },
    {
      "id": "WAEC-SS1-NBS-010",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Subtract $456_8$ from $732_8$ in base $8$.",
      "options": {
        "A": "$254_8$",
        "B": "$244_8$",
        "C": "$264_8$",
        "D": "$354_8$"
      },
      "correctAnswer": "A",
      "explanation": "Units: borrow $8$, $(2 + 8) - 6 = 4$. Eights: $2$ remains, borrow $8$, $(2 + 8) - 5 = 5$. Sixty-fours: $6 - 4 = 2$. Result $= 254_8$."
    },
    {
      "id": "WAEC-SS1-NBS-011",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $43_x = 31_{10}$, find the value of $x$.",
      "options": {
        "A": "$6$",
        "B": "$7$",
        "C": "$8$",
        "D": "$9$"
      },
      "correctAnswer": "B",
      "explanation": "$43_x = 4x + 3 = 31 \\implies 4x = 28 \\implies x = 7$."
    },
    {
      "id": "WAEC-SS1-NBS-012",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $102_n = 27_{10}$, find $n$.",
      "options": {
        "A": "$6$",
        "B": "$4$",
        "C": "$5$",
        "D": "$7$"
      },
      "correctAnswer": "C",
      "explanation": "$1(n^2) + 0(n) + 2 = 27 \\implies n^2 + 2 = 27 \\implies n^2 = 25 \\implies n = 5$ (since base must be positive)."
    },
    {
      "id": "WAEC-SS1-NBS-013",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $312_4$ to base $2$.",
      "options": {
        "A": "$101110_2$",
        "B": "$110101_2$",
        "C": "$111010_2$",
        "D": "$110110_2$"
      },
      "correctAnswer": "D",
      "explanation": "Each base $4$ digit corresponds to $2$ binary digits: $3_4 = 11_2$, $1_4 = 01_2$, $2_4 = 10_2$. Combining them directly: $110110_2$."
    },
    {
      "id": "WAEC-SS1-NBS-014",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $65_8$ to a binary number.",
      "options": {
        "A": "$110101_2$",
        "B": "$110011_2$",
        "C": "$101101_2$",
        "D": "$111001_2$"
      },
      "correctAnswer": "A",
      "explanation": "Convert each octal digit into $3$ binary bits: $6_8 = 110_2$, $5_8 = 101_2$. Combining gives $110101_2$."
    },
    {
      "id": "WAEC-SS1-NBS-015",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert the binary fraction $0.101_2$ to a common fraction in base $10$.",
      "options": {
        "A": "$\\frac{3}{8}$",
        "B": "$\\frac{5}{8}$",
        "C": "$\\frac{5}{16}$",
        "D": "$\\frac{1}{2}$"
      },
      "correctAnswer": "B",
      "explanation": "$0.101_2 = 1(2^{-1}) + 0(2^{-2}) + 1(2^{-3}) = \\frac{1}{2} + 0 + \\frac{1}{8} = \\frac{4+1}{8} = \\frac{5}{8}$."
    },
    {
      "id": "WAEC-SS1-NBS-016",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert the base $5$ fraction $0.32_5$ to a fraction in base $10$.",
      "options": {
        "A": "$\\frac{32}{100}$",
        "B": "$\\frac{16}{25}$",
        "C": "$\\frac{17}{25}$",
        "D": "$\\frac{7}{25}$"
      },
      "correctAnswer": "C",
      "explanation": "$0.32_5 = 3(5^{-1}) + 2(5^{-2}) = \\frac{3}{5} + \\frac{2}{25} = \\frac{15 + 2}{25} = \\frac{17}{25}$."
    },
    {
      "id": "WAEC-SS1-NBS-017",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert the decimal fraction $0.625_{10}$ to base $2$.",
      "options": {
        "A": "$0.111_2$",
        "B": "$0.110_2$",
        "C": "$0.011_2$",
        "D": "$0.101_2$"
      },
      "correctAnswer": "D",
      "explanation": "$0.625 \\times 2 = 1.25$ (integer part $1$); $0.25 \\times 2 = 0.5$ (integer part $0$); $0.5 \\times 2 = 1.0$ (integer part $1$). Reading downwards gives $0.101_2$."
    },
    {
      "id": "WAEC-SS1-NBS-018",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Multiply $23_4 \\times 12_4$ in base $4$.",
      "options": {
        "A": "$1002_4$",
        "B": "$322_4$",
        "C": "$312_4$",
        "D": "$1102_4$"
      },
      "correctAnswer": "A",
      "explanation": "In base $10$: $23_4 = 2(4) + 3 = 11$, and $12_4 = 1(4) + 2 = 6$. Product $= 11 \\times 6 = 66_{10}$. Converting $66$ to base $4$: $66 \\div 4 = 16 \\text{ rem } 2$; $16 \\div 4 = 4 \\text{ rem } 0$; $4 \\div 4 = 1 \\text{ rem } 0$; $1 \\div 4 = 0 \\text{ rem } 1$. Result is $1002_4$."
    },
    {
      "id": "WAEC-SS1-NBS-019",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $121_x = 100_3$, find the value of $x$.",
      "options": {
        "A": "$3$",
        "B": "$2$",
        "C": "$4$",
        "D": "$5$"
      },
      "correctAnswer": "B",
      "explanation": "$100_3 = 1(3^2) = 9_{10}$. For $121_x$: $x^2 + 2x + 1 = (x + 1)^2$. Thus $(x + 1)^2 = 9 \\implies x + 1 = 3 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS1-NBS-020",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate $546_7 + 235_7$ in base $7$.",
      "options": {
        "A": "$1104_7$",
        "B": "$1014_7$",
        "C": "$1114_7$",
        "D": "$1124_7$"
      },
      "correctAnswer": "C",
      "explanation": "Units: $6 + 5 = 11 = 1(7) + 4$ (write $4$, carry $1$). Sevens: $4 + 3 + 1 = 8 = 1(7) + 1$ (write $1$, carry $1$). Forty-nines: $5 + 2 + 1 = 8 = 1(7) + 1$ (write $1$, carry $1$). Result $= 1114_7$."
    },
    {
      "id": "WAEC-SS1-NBS-021",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate $1100_2 \\div 11_2$ in binary.",
      "options": {
        "A": "$101_2$",
        "B": "$10_2$",
        "C": "$11_2$",
        "D": "$100_2$"
      },
      "correctAnswer": "D",
      "explanation": "In base $10$: $1100_2 = 12$, and $11_2 = 3$. $12 \\div 3 = 4$. Converting $4$ to binary gives $100_2$."
    },
    {
      "id": "WAEC-SS1-NBS-022",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $1y01_2 = 13_{10}$, find the binary digit $y$.",
      "options": {
        "A": "$1$",
        "B": "$0$",
        "C": "$2$",
        "D": "$-1$"
      },
      "correctAnswer": "A",
      "explanation": "$1(2^3) + y(2^2) + 0(2^1) + 1(2^0) = 13 \\implies 8 + 4y + 1 = 13 \\implies 4y + 9 = 13 \\implies 4y = 4 \\implies y = 1$."
    },
    {
      "id": "WAEC-SS1-NBS-023",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate $101_2 + 110_2 + 111_2$ in base $2$.",
      "options": {
        "A": "$10001_2$",
        "B": "$10010_2$",
        "C": "$10100_2$",
        "D": "$11010_2$"
      },
      "correctAnswer": "B",
      "explanation": "Converting each to base $10$: $101_2 = 5$, $110_2 = 6$, $111_2 = 7$. Sum $= 5 + 6 + 7 = 18_{10}$. In binary, $18 = 16 + 2 = 10010_2$."
    },
    {
      "id": "WAEC-SS1-NBS-024",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $24_x + 35_x = 62_x$, find the base $x$.",
      "options": {
        "A": "$6$",
        "B": "$8$",
        "C": "$7$",
        "D": "$9$"
      },
      "correctAnswer": "C",
      "explanation": "Expanding in terms of $x$: $(2x + 4) + (3x + 5) = 6x + 2 \\implies 5x + 9 = 6x + 2 \\implies 6x - 5x = 9 - 2 \\implies x = 7$."
    },
    {
      "id": "WAEC-SS1-NBS-025",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert the number $341_5$ directly to base $8$.",
      "options": {
        "A": "$132_8$",
        "B": "$136_8$",
        "C": "$144_8$",
        "D": "$140_8$"
      },
      "correctAnswer": "D",
      "explanation": "Convert $341_5$ to base $10$: $3(25) + 4(5) + 1(1) = 75 + 20 + 1 = 96_{10}$. Now convert $96_{10}$ to octal: $96 \\div 8 = 12 \\text{ rem } 0$; $12 \\div 8 = 1 \\text{ rem } 4$; $1 \\div 8 = 0 \\text{ rem } 1$. Reading upwards gives $140_8$."
    }
  ],
  "SSS 2": [
    {
      "id": "WAEC-SS2-IDX-001",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve the exponential equation $3^{2x} - 10(3^x) + 9 = 0$.",
      "options": {
        "A": "$x = 0 \\text{ or } 2$",
        "B": "$x = 1 \\text{ or } 9$",
        "C": "$x = 1 \\text{ or } 3$",
        "D": "$x = 0 \\text{ or } 3$"
      },
      "correctAnswer": "A",
      "explanation": "Let $y = 3^x$. Then $y^2 - 10y + 9 = 0 \\implies (y - 1)(y - 9) = 0 \\implies y = 1$ or $y = 9$. When $3^x = 1 = 3^0$, $x = 0$. When $3^x = 9 = 3^2$, $x = 2$."
    },
    {
      "id": "WAEC-SS2-IDX-002",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$ in the equation $2^{2x+1} - 9(2^x) + 4 = 0$.",
      "options": {
        "A": "$x = 1 \\text{ or } -2$",
        "B": "$x = -1 \\text{ or } 2$",
        "C": "$x = \\frac{1}{2} \\text{ or } 4$",
        "D": "$x = 0 \\text{ or } 2$"
      },
      "correctAnswer": "B",
      "explanation": "Rewrite $2^{2x+1}$ as $2(2^{2x}) = 2(2^x)^2$. Let $y = 2^x$: $2y^2 - 9y + 4 = 0 \\implies (2y - 1)(y - 4) = 0 \\implies y = \\frac{1}{2}$ or $y = 4$. If $2^x = 2^{-1}$, $x = -1$; if $2^x = 2^2$, $x = 2$."
    },
    {
      "id": "WAEC-SS2-IDX-003",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve the simultaneous equations $2^{x+y} = 32$ and $3^{2x-y} = 3$.",
      "options": {
        "A": "$x = 1,\\ y = 4$",
        "B": "$x = 3,\\ y = 2$",
        "C": "$x = 2,\\ y = 3$",
        "D": "$x = 4,\\ y = 1$"
      },
      "correctAnswer": "C",
      "explanation": "$2^{x+y} = 2^5 \\implies x + y = 5$. $3^{2x-y} = 3^1 \\implies 2x - y = 1$. Adding both equations: $3x = 6 \\implies x = 2$. Substituting into $x + y = 5$: $2 + y = 5 \\implies y = 3$."
    },
    {
      "id": "WAEC-SS2-IDX-004",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify $\\frac{\\sqrt{50} - \\sqrt{18}}{\\sqrt{8}}$.",
      "options": {
        "A": "$\\frac{1}{2}$",
        "B": "$2$",
        "C": "$\\sqrt{2}$",
        "D": "$1$"
      },
      "correctAnswer": "D",
      "explanation": "$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$. $\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$. $\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$. Thus $\\frac{5\\sqrt{2} - 3\\sqrt{2}}{2\\sqrt{2}} = \\frac{2\\sqrt{2}}{2\\sqrt{2}} = 1$."
    },
    {
      "id": "WAEC-SS2-IDX-005",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$ in $4^{x-1} \\times 2^{x+1} = 8^{2x-3}$.",
      "options": {
        "A": "$\\frac{8}{3}$",
        "B": "$3$",
        "C": "$\\frac{5}{3}$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "Convert to base $2$: $(2^2)^{x-1} \\times 2^{x+1} = (2^3)^{2x-3} \\implies 2^{2x-2+x+1} = 2^{6x-9} \\implies 2^{3x-1} = 2^{6x-9}$. Equating powers: $3x - 1 = 6x - 9 \\implies 3x = 8 \\implies x = \\frac{8}{3}$."
    },
    {
      "id": "WAEC-SS2-IDX-006",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$ if $5^{2x+1} - 26(5^x) + 5 = 0$.",
      "options": {
        "A": "$x = 0 \\text{ or } 1$",
        "B": "$x = -1 \\text{ or } 1$",
        "C": "$x = \\frac{1}{5} \\text{ or } 5$",
        "D": "$x = -2 \\text{ or } 2$"
      },
      "correctAnswer": "B",
      "explanation": "Let $y = 5^x$. The equation is $5y^2 - 26y + 5 = 0 \\implies (5y - 1)(y - 5) = 0 \\implies y = \\frac{1}{5}$ or $y = 5$. Since $y = 5^x$, $5^x = 5^{-1} \\implies x = -1$, and $5^x = 5^1 \\implies x = 1$."
    },
    {
      "id": "WAEC-SS2-IDX-007",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify the expression $\\frac{x^{-1} + y^{-1}}{(xy)^{-1}}$.",
      "options": {
        "A": "$xy(x+y)$",
        "B": "$\\frac{1}{x+y}$",
        "C": "$x + y$",
        "D": "$\\frac{x+y}{xy}$"
      },
      "correctAnswer": "C",
      "explanation": "Numerator: $x^{-1} + y^{-1} = \\frac{1}{x} + \\frac{1}{y} = \\frac{y+x}{xy}$. Denominator: $(xy)^{-1} = \\frac{1}{xy}$. Dividing: $\\frac{\\frac{x+y}{xy}}{\\frac{1}{xy}} = x + y$."
    },
    {
      "id": "WAEC-SS2-IDX-008",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $x = 8$, evaluate $x^{\\frac{4}{3}} - x^{\\frac{2}{3}} + x^0$.",
      "options": {
        "A": "$9$",
        "B": "$12$",
        "C": "$15$",
        "D": "$13$"
      },
      "correctAnswer": "D",
      "explanation": "$8^{4/3} = (8^{1/3})^4 = 2^4 = 16$. $8^{2/3} = (8^{1/3})^2 = 2^2 = 4$. $8^0 = 1$. Result $= 16 - 4 + 1 = 13$."
    },
    {
      "id": "WAEC-SS2-IDX-009",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify $\\frac{2^{n+1} \\times 4^{2n-1}}{8^{n+1}}$.",
      "options": {
        "A": "$2^{2n-4}$",
        "B": "$2^{2n-1}$",
        "C": "$2^{n-2}$",
        "D": "$4^{n-2}$"
      },
      "correctAnswer": "A",
      "explanation": "Express all factors in base $2$: $\\frac{2^{n+1} \\times (2^2)^{2n-1}}{(2^3)^{n+1}} = \\frac{2^{n+1} \\times 2^{4n-2}}{2^{3n+3}} = \\frac{2^{5n-1}}{2^{3n+3}} = 2^{(5n-1)-(3n+3)} = 2^{2n-4}$."
    },
    {
      "id": "WAEC-SS2-IDX-010",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$ if $3^{x^2 - 5x + 6} = 1$.",
      "options": {
        "A": "$x = -2 \\text{ or } -3$",
        "B": "$x = 2 \\text{ or } 3$",
        "C": "$x = 1 \\text{ or } 6$",
        "D": "$x = 0 \\text{ or } 5$"
      },
      "correctAnswer": "B",
      "explanation": "Since $1 = 3^0$, $x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0 \\implies x = 2$ or $x = 3$."
    },
    {
      "id": "WAEC-SS2-IDX-011",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify $(3\\sqrt{2} - 2\\sqrt{3})^2$.",
      "options": {
        "A": "$18 - 12\\sqrt{6}$",
        "B": "$30 + 12\\sqrt{6}$",
        "C": "$30 - 12\\sqrt{6}$",
        "D": "$6$"
      },
      "correctAnswer": "C",
      "explanation": "Expanding: $(3\\sqrt{2})^2 - 2(3\\sqrt{2})(2\\sqrt{3}) + (2\\sqrt{3})^2 = (9 \\times 2) - 12\\sqrt{6} + (4 \\times 3) = 18 - 12\\sqrt{6} + 12 = 30 - 12\\sqrt{6}$."
    },
    {
      "id": "WAEC-SS2-IDX-012",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Rationalise the denominator of $\\frac{2}{\\sqrt{5} - \\sqrt{3}}$.",
      "options": {
        "A": "$2(\\sqrt{5} + \\sqrt{3})$",
        "B": "$\\sqrt{5} - \\sqrt{3}$",
        "C": "$\\frac{\\sqrt{5} + \\sqrt{3}}{2}$",
        "D": "$\\sqrt{5} + \\sqrt{3}$"
      },
      "correctAnswer": "D",
      "explanation": "Multiply numerator and denominator by conjugate $(\\sqrt{5} + \\sqrt{3})$: $\\frac{2(\\sqrt{5} + \\sqrt{3})}{(\\sqrt{5})^2 - (\\sqrt{3})^2} = \\frac{2(\\sqrt{5} + \\sqrt{3})}{5 - 3} = \\frac{2(\\sqrt{5} + \\sqrt{3})}{2} = \\sqrt{5} + \\sqrt{3}$."
    },
    {
      "id": "WAEC-SS2-IDX-013",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$ if $9^x - 4(3^x) + 3 = 0$.",
      "options": {
        "A": "$x = 0 \\text{ or } 1$",
        "B": "$x = 1 \\text{ or } 3$",
        "C": "$x = -1 \\text{ or } 0$",
        "D": "$x = 0 \\text{ or } 2$"
      },
      "correctAnswer": "A",
      "explanation": "Let $y = 3^x$. Then $y^2 - 4y + 3 = 0 \\implies (y - 1)(y - 3) = 0 \\implies y = 1$ or $y = 3$. If $3^x = 1 \\implies x = 0$; if $3^x = 3 \\implies x = 1$."
    },
    {
      "id": "WAEC-SS2-IDX-014",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $x^{-\\frac{3}{2}} = 8$, find $x$.",
      "options": {
        "A": "$4$",
        "B": "$\\frac{1}{4}$",
        "C": "$\\frac{1}{2}$",
        "D": "$2$"
      },
      "correctAnswer": "B",
      "explanation": "$x^{-3/2} = 8 = 2^3 \\implies x^{3/2} = \\frac{1}{8} = 2^{-3}$. Raising both sides to power $\\frac{2}{3}$: $x = (2^{-3})^{2/3} = 2^{-2} = \\frac{1}{4}$."
    },
    {
      "id": "WAEC-SS2-IDX-015",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $2^x \\times 3^y = 18$ and $2^{2x} \\times 3^y = 36$, find the values of $x$ and $y$.",
      "options": {
        "A": "$x = 1,\\ y = 1$",
        "B": "$x = 2,\\ y = 1$",
        "C": "$x = 1,\\ y = 2$",
        "D": "$x = 2,\\ y = 2$"
      },
      "correctAnswer": "C",
      "explanation": "Divide equation $2$ by equation $1$: $\\frac{2^{2x} \\times 3^y}{2^x \\times 3^y} = \\frac{36}{18} \\implies 2^x = 2 \\implies x = 1$. Substitute $x = 1$ into eq $1$: $2(3^y) = 18 \\implies 3^y = 9 \\implies y = 2$."
    },
    {
      "id": "WAEC-SS2-IDX-016",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Evaluate $(\\sqrt{7} + \\sqrt{5})(\\sqrt{7} - \\sqrt{5})$.",
      "options": {
        "A": "$2\\sqrt{35}$",
        "B": "$12$",
        "C": "$\\sqrt{2}$",
        "D": "$2$"
      },
      "correctAnswer": "D",
      "explanation": "Using difference of two squares: $(\\sqrt{7})^2 - (\\sqrt{5})^2 = 7 - 5 = 2$."
    },
    {
      "id": "WAEC-SS2-IDX-017",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$ in $2^{2x+1} - 5(2^x) + 2 = 0$.",
      "options": {
        "A": "$x = -1 \\text{ or } 1$",
        "B": "$x = 0 \\text{ or } 1$",
        "C": "$x = \\frac{1}{2} \\text{ or } 2$",
        "D": "$x = -2 \\text{ or } 2$"
      },
      "correctAnswer": "A",
      "explanation": "Rewrite as $2(2^x)^2 - 5(2^x) + 2 = 0$. Let $y = 2^x \\implies 2y^2 - 5y + 2 = 0 \\implies (2y - 1)(y - 2) = 0 \\implies y = \\frac{1}{2}$ or $y = 2$. Thus $2^x = 2^{-1} \\implies x = -1$, and $2^x = 2^1 \\implies x = 1$."
    },
    {
      "id": "WAEC-SS2-IDX-018",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify $\\frac{6 \\times 2^{n+1} - 2^{n+3}}{2^{n+2}}$.",
      "options": {
        "A": "$2$",
        "B": "$1$",
        "C": "$\\frac{1}{2}$",
        "D": "$4$"
      },
      "correctAnswer": "B",
      "explanation": "Factor out $2^n$: $\\frac{2^n(6 \\times 2 - 2^3)}{2^n(2^2)} = \\frac{12 - 8}{4} = \\frac{4}{4} = 1$."
    },
    {
      "id": "WAEC-SS2-IDX-019",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify $\\sqrt{75} + \\sqrt{48} - \\sqrt{108}$.",
      "options": {
        "A": "$5\\sqrt{3}$",
        "B": "$4\\sqrt{3}$",
        "C": "$3\\sqrt{3}$",
        "D": "$2\\sqrt{3}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$. $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$. $\\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3}$. Combining: $5\\sqrt{3} + 4\\sqrt{3} - 6\\sqrt{3} = 3\\sqrt{3}$."
    },
    {
      "id": "WAEC-SS2-IDX-020",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$ in $16^x - 5(4^x) + 4 = 0$.",
      "options": {
        "A": "$x = -1 \\text{ or } 1$",
        "B": "$x = 1 \\text{ or } 4$",
        "C": "$x = 0 \\text{ or } 2$",
        "D": "$x = 0 \\text{ or } 1$"
      },
      "correctAnswer": "D",
      "explanation": "Since $16^x = (4^x)^2$, let $y = 4^x \\implies y^2 - 5y + 4 = 0 \\implies (y - 1)(y - 4) = 0 \\implies y = 1$ or $y = 4$. If $4^x = 1 \\implies x = 0$; if $4^x = 4 \\implies x = 1$."
    },
    {
      "id": "WAEC-SS2-LGT-001",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$ in the equation $(\\log_2 x)^2 - 3\\log_2 x + 2 = 0$.",
      "options": {
        "A": "$x = 2 \\text{ or } 4$",
        "B": "$x = 1 \\text{ or } 2$",
        "C": "$x = 4 \\text{ or } 8$",
        "D": "$x = 2 \\text{ or } 8$"
      },
      "correctAnswer": "A",
      "explanation": "Let $u = \\log_2 x$. Then $u^2 - 3u + 2 = 0 \\implies (u - 1)(u - 2) = 0 \\implies u = 1$ or $u = 2$. When $\\log_2 x = 1 \\implies x = 2^1 = 2$. When $\\log_2 x = 2 \\implies x = 2^2 = 4$."
    },
    {
      "id": "WAEC-SS2-LGT-002",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Evaluate the cyclic product $\\log_2 3 \\times \\log_3 4 \\times \\log_4 8$.",
      "options": {
        "A": "$2$",
        "B": "$3$",
        "C": "$4$",
        "D": "$1$"
      },
      "correctAnswer": "B",
      "explanation": "Using change of base formula to natural logs: $\\frac{\\ln 3}{\\ln 2} \\times \\frac{\\ln 4}{\\ln 3} \\times \\frac{\\ln 8}{\\ln 4} = \\frac{\\ln 8}{\\ln 2} = \\log_2 8 = 3$."
    },
    {
      "id": "WAEC-SS2-LGT-003",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$ in $\\log_2 x + \\log_x 2 = \\frac{5}{2}$.",
      "options": {
        "A": "$x = 2 \\text{ or } \\sqrt{2}$",
        "B": "$x = 2 \\text{ or } 4$",
        "C": "$x = 4 \\text{ or } \\sqrt{2}$",
        "D": "$x = 4 \\text{ or } 8$"
      },
      "correctAnswer": "C",
      "explanation": "Note $\\log_x 2 = \\frac{1}{\\log_2 x}$. Let $y = \\log_2 x \\implies y + \\frac{1}{y} = \\frac{5}{2} \\implies 2y^2 - 5y + 2 = 0 \\implies (2y - 1)(y - 2) = 0 \\implies y = 2$ or $y = \\frac{1}{2}$. Thus $x = 2^2 = 4$ or $x = 2^{1/2} = \\sqrt{2}$."
    },
    {
      "id": "WAEC-SS2-LGT-004",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve the simultaneous equations $\\log_2 x + \\log_2 y = 5$ and $\\log_2\\left(\\frac{x}{y}\\right) = 1$.",
      "options": {
        "A": "$x = 6,\\ y = 4$",
        "B": "$x = 4,\\ y = 8$",
        "C": "$x = 16,\\ y = 2$",
        "D": "$x = 8,\\ y = 4$"
      },
      "correctAnswer": "D",
      "explanation": "From eq 1: $\\log_2(xy) = 5 \\implies xy = 32$. From eq 2: $\\log_2(x/y) = 1 \\implies x/y = 2 \\implies x = 2y$. Substituting: $(2y)y = 32 \\implies 2y^2 = 32 \\implies y^2 = 16 \\implies y = 4$ (since $y > 0$). Then $x = 2(4) = 8$."
    },
    {
      "id": "WAEC-SS2-LGT-005",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_2 3 = a$, express $\\log_8 18$ in terms of $a$.",
      "options": {
        "A": "$\\frac{1 + 2a}{3}$",
        "B": "$\\frac{2 + a}{3}$",
        "C": "$\\frac{1 + a}{3}$",
        "D": "$1 + 2a$"
      },
      "correctAnswer": "A",
      "explanation": "Change base to $2$: $\\log_8 18 = \\frac{\\log_2 18}{\\log_2 8} = \\frac{\\log_2(2 \\times 3^2)}{3} = \\frac{\\log_2 2 + 2\\log_2 3}{3} = \\frac{1 + 2a}{3}$."
    },
    {
      "id": "WAEC-SS2-LGT-006",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$ if $\\log_3(x^2 - 6x) = 3$.",
      "options": {
        "A": "$x = -9 \\text{ or } 3$",
        "B": "$x = 9 \\text{ or } -3$",
        "C": "$x = 9 \\text{ only}$",
        "D": "$x = 6 \\text{ or } 3$"
      },
      "correctAnswer": "B",
      "explanation": "$x^2 - 6x = 3^3 = 27 \\implies x^2 - 6x - 27 = 0 \\implies (x - 9)(x + 3) = 0 \\implies x = 9$ or $x = -3$. For both values, $x^2 - 6x = 27 > 0$, so both solutions are valid."
    },
    {
      "id": "WAEC-SS2-LGT-007",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$ in $\\log_4 x + \\log_2 x = 6$.",
      "options": {
        "A": "$8$",
        "B": "$64$",
        "C": "$16$",
        "D": "$32$"
      },
      "correctAnswer": "C",
      "explanation": "Change base of $\\log_4 x$: $\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{1}{2}\\log_2 x$. Then $\\frac{1}{2}\\log_2 x + \\log_2 x = 6 \\implies \\frac{3}{2}\\log_2 x = 6 \\implies \\log_2 x = 4 \\implies x = 2^4 = 16$."
    },
    {
      "id": "WAEC-SS2-LGT-008",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Find the solution set of the logarithmic inequality $\\log_2(x - 3) \\le 3$.",
      "options": {
        "A": "$x > 3$",
        "B": "$x \\le 11$",
        "C": "$3 \\le x \\le 11$",
        "D": "$3 < x \\le 11$"
      },
      "correctAnswer": "D",
      "explanation": "First, the argument must be positive: $x - 3 > 0 \\implies x > 3$. Second, $x - 3 \\le 2^3 = 8 \\implies x \\le 11$. Combining both conditions gives $3 < x \\le 11$."
    },
    {
      "id": "WAEC-SS2-LGT-009",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_{10}(x + y) = \\log_{10} x + \\log_{10} y$, express $y$ in terms of $x$.",
      "options": {
        "A": "$y = \\frac{x}{x - 1}$",
        "B": "$y = \\frac{x}{1 - x}$",
        "C": "$y = \\frac{x - 1}{x}$",
        "D": "$y = x - 1$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}(x + y) = \\log_{10}(xy) \\implies x + y = xy \\implies xy - y = x \\implies y(x - 1) = x \\implies y = \\frac{x}{x - 1}$."
    },
    {
      "id": "WAEC-SS2-LGT-010",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Given that $\\log_a b = 2$ and $\\log_b c = 3$, find the value of $\\log_c a$.",
      "options": {
        "A": "$6$",
        "B": "$\\frac{1}{6}$",
        "C": "$\\frac{2}{3}$",
        "D": "$\\frac{3}{2}$"
      },
      "correctAnswer": "B",
      "explanation": "By chain rule of logarithms: $\\log_a c = \\log_a b \\times \\log_b c = 2 \\times 3 = 6$. By reciprocal property: $\\log_c a = \\frac{1}{\\log_a c} = \\frac{1}{6}$."
    },
    {
      "id": "WAEC-SS2-LGT-011",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$ in $\\log_{10}(2x + 1) - \\log_{10}(x - 2) = 1$.",
      "options": {
        "A": "$3$",
        "B": "$\\frac{19}{8}$",
        "C": "$\\frac{21}{8}$",
        "D": "$\\frac{17}{8}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log_{10}\\left(\\frac{2x+1}{x-2}\\right) = 1 \\implies \\frac{2x+1}{x-2} = 10^1 = 10 \\implies 2x + 1 = 10(x - 2) \\implies 2x + 1 = 10x - 20 \\implies 8x = 21 \\implies x = \\frac{21}{8}$."
    },
    {
      "id": "WAEC-SS2-LGT-012",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Evaluate $\\frac{1}{\\log_2 36} + \\frac{1}{\\log_3 36}$.",
      "options": {
        "A": "$\\frac{1}{4}$",
        "B": "$2$",
        "C": "$1$",
        "D": "$\\frac{1}{2}$"
      },
      "correctAnswer": "D",
      "explanation": "Using $\\frac{1}{\\log_b a} = \\log_a b$: $\\frac{1}{\\log_2 36} + \\frac{1}{\\log_3 36} = \\log_{36} 2 + \\log_{36} 3 = \\log_{36}(2 \\times 3) = \\log_{36} 6 = \\log_{36}(36^{1/2}) = \\frac{1}{2}$."
    },
    {
      "id": "WAEC-SS2-LGT-013",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$ if $\\log_2(x - 1) + \\log_2(x + 1) = 3$.",
      "options": {
        "A": "$3$",
        "B": "$\\pm 3$",
        "C": "$4$",
        "D": "$\\sqrt{7}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_2[(x - 1)(x + 1)] = 3 \\implies \\log_2(x^2 - 1) = 3 \\implies x^2 - 1 = 2^3 = 8 \\implies x^2 = 9 \\implies x = \\pm 3$. Since $\\log_2(x - 1)$ requires $x > 1$, we discard $-3$, giving $x = 3$."
    },
    {
      "id": "WAEC-SS2-LGT-014",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_2 x = k$, express $\\log_4(8x^2)$ in terms of $k$.",
      "options": {
        "A": "$3 + 2k$",
        "B": "$\\frac{3}{2} + k$",
        "C": "$\\frac{3}{2} + 2k$",
        "D": "$\\frac{3 + k}{2}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\log_4(8x^2) = \\log_4 8 + \\log_4(x^2) = \\frac{\\log_2 8}{\\log_2 4} + 2\\log_4 x = \\frac{3}{2} + 2\\left(\\frac{\\log_2 x}{2}\\right) = \\frac{3}{2} + \\log_2 x = \\frac{3}{2} + k$."
    },
    {
      "id": "WAEC-SS2-LGT-015",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Simplify $\\log_b a \\times \\log_c b \\times \\log_d c \\times \\log_a d$.",
      "options": {
        "A": "$abcd$",
        "B": "$0$",
        "C": "$1$",
        "D": "$\\log(abcd)$"
      },
      "correctAnswer": "C",
      "explanation": "Expressing each term in natural logarithms: $\\frac{\\ln a}{\\ln b} \\times \\frac{\\ln b}{\\ln c} \\times \\frac{\\ln c}{\\ln d} \\times \\frac{\\ln d}{\\ln a}$. All numerators and denominators cancel out, giving $1$."
    },
    {
      "id": "WAEC-SS2-LGT-016",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$ in $x^{\\log_2 x} = 16$.",
      "options": {
        "A": "$x = 16 \\text{ or } \\frac{1}{16}$",
        "B": "$x = 2 \\text{ or } 4$",
        "C": "$x = 4 \\text{ only}$",
        "D": "$x = 4 \\text{ or } \\frac{1}{4}$"
      },
      "correctAnswer": "D",
      "explanation": "Take $\\log_2$ of both sides: $\\log_2(x^{\\log_2 x}) = \\log_2 16 \\implies (\\log_2 x)(\\log_2 x) = 4 \\implies (\\log_2 x)^2 = 4 \\implies \\log_2 x = \\pm 2$. Thus $x = 2^2 = 4$ or $x = 2^{-2} = \\frac{1}{4}$."
    },
    {
      "id": "WAEC-SS2-LGT-017",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve the inequality $\\log_{0.5}(2x - 1) > -2$.",
      "options": {
        "A": "$\\frac{1}{2} < x < \\frac{5}{2}$",
        "B": "$x < \\frac{5}{2}$",
        "C": "$x > \\frac{1}{2}$",
        "D": "$\\frac{1}{2} \\le x \\le \\frac{5}{2}$"
      },
      "correctAnswer": "A",
      "explanation": "First, $2x - 1 > 0 \\implies x > \\frac{1}{2}$. Second, since base $0.5 < 1$, the inequality sign reverses: $2x - 1 < (0.5)^{-2} = (2^{-1})^{-2} = 4 \\implies 2x < 5 \\implies x < \\frac{5}{2}$. Combining gives $\\frac{1}{2} < x < \\frac{5}{2}$."
    },
    {
      "id": "WAEC-SS2-LGT-018",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for positive $x$ and $y$ if $xy = 100$ and $\\log_{10} x - \\log_{10} y = 2$.",
      "options": {
        "A": "$x = 10,\\ y = 10$",
        "B": "$x = 100,\\ y = 1$",
        "C": "$x = 1000,\\ y = 0.1$",
        "D": "$x = 50,\\ y = 2$"
      },
      "correctAnswer": "B",
      "explanation": "$\\log_{10}(x/y) = 2 \\implies x/y = 10^2 = 100 \\implies x = 100y$. Substituting into $xy = 100$: $(100y)y = 100 \\implies y^2 = 1 \\implies y = 1$ (since $y > 0$). Then $x = 100(1) = 100$."
    },
    {
      "id": "WAEC-SS2-LGT-019",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$ in $\\log_5(5x) + \\log_5(x - 4) = 2$.",
      "options": {
        "A": "$5 \\text{ or } -1$",
        "B": "$-1$",
        "C": "$5$",
        "D": "$4$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log_5[5x(x - 4)] = 2 \\implies 5x(x - 4) = 5^2 = 25 \\implies 5x^2 - 20x - 25 = 0 \\implies x^2 - 4x - 5 = 0 \\implies (x - 5)(x + 1) = 0$. Since $\\log_5(x - 4)$ requires $x > 4$, $x = 5$."
    },
    {
      "id": "WAEC-SS2-LGT-020",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_3 2 = p$ and $\\log_3 5 = q$, express $\\log_3 50$ in terms of $p$ and $q$.",
      "options": {
        "A": "$2pq$",
        "B": "$2p + q$",
        "C": "$p + q^2$",
        "D": "$p + 2q$"
      },
      "correctAnswer": "D",
      "explanation": "$50 = 2 \\times 5^2$. Thus $\\log_3 50 = \\log_3(2 \\times 5^2) = \\log_3 2 + 2\\log_3 5 = p + 2q$."
    },
    {
      "id": "WAEC-SS2-SET-001",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a cohort of $100$ students, $50$ play Football, $45$ play Basketball, and $40$ play Cricket. $20$ play Football and Basketball, $15$ play Basketball and Cricket, $18$ play Football and Cricket, and $8$ play all three sports. How many students do not play any of the three sports?",
      "options": {
        "A": "$10$",
        "B": "$15$",
        "C": "$8$",
        "D": "$12$"
      },
      "correctAnswer": "A",
      "explanation": "By the three-set inclusion-exclusion formula: $n(F \\cup B \\cup C) = 50 + 45 + 40 - (20 + 15 + 18) + 8 = 135 - 53 + 8 = 90$. Students playing none $= 100 - 90 = 10$."
    },
    {
      "id": "WAEC-SS2-SET-002",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Referring to the cohort in the previous question ($50$ Football, $45$ Basketball, $40$ Cricket, $20$ F & B, $15$ B & C, $18$ F & C, and $8$ all three), how many students play Football only?",
      "options": {
        "A": "$22$",
        "B": "$20$",
        "C": "$18$",
        "D": "$24$"
      },
      "correctAnswer": "B",
      "explanation": "Students playing Football only $= n(F) - [n(F \\cap B) - n(F \\cap B \\cap C)] - [n(F \\cap C) - n(F \\cap B \\cap C)] - n(F \\cap B \\cap C) = 50 - (20 - 8) - (18 - 8) - 8 = 50 - 12 - 10 - 8 = 20$."
    },
    {
      "id": "WAEC-SS2-SET-003",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Referring to the cohort ($50$ Football, $45$ Basketball, $40$ Cricket, $20$ F & B, $15$ B & C, $18$ F & C, and $8$ all three), how many students play exactly two of the three sports?",
      "options": {
        "A": "$25$",
        "B": "$32$",
        "C": "$29$",
        "D": "$37$"
      },
      "correctAnswer": "C",
      "explanation": "Students playing exactly two sports $= [n(F \\cap B) - 8] + [n(B \\cap C) - 8] + [n(F \\cap C) - 8] = (20 - 8) + (15 - 8) + (18 - 8) = 12 + 7 + 10 = 29$."
    },
    {
      "id": "WAEC-SS2-SET-004",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a conference of $70$ delegates, $35$ speak English, $30$ speak French, and $25$ speak Hausa. $12$ speak English and French, $10$ speak English and Hausa, $8$ speak French and Hausa, and $5$ speak all three languages. How many delegates speak English only?",
      "options": {
        "A": "$15$",
        "B": "$20$",
        "C": "$16$",
        "D": "$18$"
      },
      "correctAnswer": "D",
      "explanation": "English only $= 35 - (12 - 5) - (10 - 5) - 5 = 35 - 7 - 5 - 5 = 18$."
    },
    {
      "id": "WAEC-SS2-SET-005",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Referring to the conference of $70$ delegates ($35$ English, $30$ French, $25$ Hausa; $12$ E & F, $10$ E & H, $8$ F & H, and $5$ all three), how many delegates speak exactly one language?",
      "options": {
        "A": "$45$",
        "B": "$42$",
        "C": "$48$",
        "D": "$50$"
      },
      "correctAnswer": "A",
      "explanation": "English only $= 35 - 7 - 5 - 5 = 18$. French only $= 30 - (12-5) - (8-5) - 5 = 30 - 7 - 3 - 5 = 15$. Hausa only $= 25 - (10-5) - (8-5) - 5 = 25 - 5 - 3 - 5 = 12$. Total speaking exactly one language $= 18 + 15 + 12 = 45$."
    },
    {
      "id": "WAEC-SS2-SET-006",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a class of $60$ students, $30$ offer Biology, $25$ offer Chemistry, and $28$ offer Physics. $12$ offer Biology and Chemistry, $10$ offer Biology and Physics, and $8$ offer Chemistry and Physics. If $3$ students offer none of these three subjects, how many students offer all three subjects?",
      "options": {
        "A": "$5$",
        "B": "$4$",
        "C": "$6$",
        "D": "$3$"
      },
      "correctAnswer": "B",
      "explanation": "Students offering at least one subject $= 60 - 3 = 57$. Let $x$ be the number offering all three: $57 = 30 + 25 + 28 - (12 + 10 + 8) + x \\implies 57 = 83 - 30 + x = 53 + x \\implies x = 57 - 53 = 4$."
    },
    {
      "id": "WAEC-SS2-SET-007",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "From the previous question ($30$ Bio, $25$ Chem, $28$ Phys, $12$ B & C, $10$ B & P, $8$ C & P, $4$ all three), how many students offer Chemistry only?",
      "options": {
        "A": "$7$",
        "B": "$11$",
        "C": "$9$",
        "D": "$13$"
      },
      "correctAnswer": "C",
      "explanation": "Chemistry only $= 25 - (12 - 4) - (8 - 4) - 4 = 25 - 8 - 4 - 4 = 9$."
    },
    {
      "id": "WAEC-SS2-SET-008",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "From the previous question, how many students offer exactly two of the three subjects?",
      "options": {
        "A": "$22$",
        "B": "$20$",
        "C": "$16$",
        "D": "$18$"
      },
      "correctAnswer": "D",
      "explanation": "Number offering exactly two subjects $= (12 - 4) + (10 - 4) + (8 - 4) = 8 + 6 + 4 = 18$."
    },
    {
      "id": "WAEC-SS2-SET-009",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Which of the following set identities represents the Distributive Law of intersection over union?",
      "options": {
        "A": "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$",
        "B": "$A \\cup (B \\cap C) = (A \\cap B) \\cup (A \\cap C)$",
        "C": "$A \\cap (B \\cap C) = (A \\cap B) \\cap C$",
        "D": "$(A \\cup B)' = A' \\cap B'$"
      },
      "correctAnswer": "A",
      "explanation": "The Distributive Law of intersection over union states that $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$."
    },
    {
      "id": "WAEC-SS2-SET-010",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "The symmetric difference $A \\Delta B$ is defined as $(A \\setminus B) \\cup (B \\setminus A)$. If $n(A) = 25$, $n(B) = 30$, and $n(A \\cap B) = 10$, find $n(A \\Delta B)$.",
      "options": {
        "A": "$45$",
        "B": "$35$",
        "C": "$25$",
        "D": "$15$"
      },
      "correctAnswer": "B",
      "explanation": "$n(A \\setminus B) = n(A) - n(A \\cap B) = 25 - 10 = 15$. $n(B \\setminus A) = n(B) - n(A \\cap B) = 30 - 10 = 20$. Therefore $n(A \\Delta B) = 15 + 20 = 35$."
    },
    {
      "id": "WAEC-SS2-SET-011",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "A universal set $U$ has $100$ elements. Subsets $A, B, C$ are mutually pairwise disjoint with $n(A) = 25$, $n(B) = 30$, and $n(C) = 20$. Find $n(A \\cup B \\cup C)'$.",
      "options": {
        "A": "$35$",
        "B": "$30$",
        "C": "$25$",
        "D": "$20$"
      },
      "correctAnswer": "C",
      "explanation": "Since the sets are pairwise disjoint: $n(A \\cup B \\cup C) = n(A) + n(B) + n(C) = 25 + 30 + 20 = 75$. Then $n(A \\cup B \\cup C)' = n(U) - 75 = 100 - 75 = 25$."
    },
    {
      "id": "WAEC-SS2-SET-012",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a farming community of $120$ farmers, $70$ grow maize, $55$ grow yam, and $60$ grow cassava. $30$ grow maize and yam, $25$ grow yam and cassava, and $35$ grow maize and cassava. If $15$ grow all three crops, how many farmers grow none of these crops?",
      "options": {
        "A": "$12$",
        "B": "$15$",
        "C": "$8$",
        "D": "$10$"
      },
      "correctAnswer": "D",
      "explanation": "$n(M \\cup Y \\cup C) = 70 + 55 + 60 - (30 + 25 + 35) + 15 = 185 - 90 + 15 = 110$. Farmers growing none $= 120 - 110 = 10$."
    },
    {
      "id": "WAEC-SS2-SET-013",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Referring to the farming community in the previous question, how many farmers grow at least two of the three crops?",
      "options": {
        "A": "$60$",
        "B": "$45$",
        "C": "$75$",
        "D": "$50$"
      },
      "correctAnswer": "A",
      "explanation": "Farmers growing exactly two crops: $(30 - 15) + (25 - 15) + (35 - 15) = 15 + 10 + 20 = 45$. Farmers growing all three $= 15$. At least two $= 45 + 15 = 60$."
    },
    {
      "id": "WAEC-SS2-SET-014",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "By De Morgan's Law extended to three sets, $(A \\cup B \\cup C)'$ is equal to:",
      "options": {
        "A": "$A' \\cup B' \\cup C'$",
        "B": "$A' \\cap B' \\cap C'$",
        "C": "$(A' \\cap B') \\cup C'$",
        "D": "$A \\cap B \\cap C$"
      },
      "correctAnswer": "B",
      "explanation": "The complement of the union of any number of sets is the intersection of their individual complements: $(A \\cup B \\cup C)' = A' \\cap B' \\cap C'$."
    },
    {
      "id": "WAEC-SS2-SET-015",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $A \\subseteq B$, simplify the expression $A \\cup (B \\setminus A)$.",
      "options": {
        "A": "$\\emptyset$",
        "B": "$A$",
        "C": "$B$",
        "D": "$B \\setminus A$"
      },
      "correctAnswer": "C",
      "explanation": "$B \\setminus A$ contains all elements of $B$ not in $A$. Since $A \\subseteq B$, uniting $A$ with $B \\setminus A$ reconstructs the entire set $B$."
    },
    {
      "id": "WAEC-SS2-SET-016",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a choir of $50$ singers, $24$ sing soprano, $22$ sing alto, and $18$ sing tenor. $8$ sing soprano and alto, $6$ sing soprano and tenor, $5$ sing alto and tenor, and $2$ sing all three parts. How many sing alto only?",
      "options": {
        "A": "$15$",
        "B": "$13$",
        "C": "$9$",
        "D": "$11$"
      },
      "correctAnswer": "D",
      "explanation": "Alto only $= n(A) - [n(S \\cap A) - 2] - [n(A \\cap T) - 2] - 2 = 22 - (8 - 2) - (5 - 2) - 2 = 22 - 6 - 3 - 2 = 11$."
    },
    {
      "id": "WAEC-SS2-SET-017",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "From the previous choir question ($50$ singers: $24$ S, $22$ A, $18$ T; $8$ S & A, $6$ S & T, $5$ A & T, and $2$ all three), how many members sing none of these three parts?",
      "options": {
        "A": "$3$",
        "B": "$5$",
        "C": "$2$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "Singing at least one part $= 24 + 22 + 18 - (8 + 6 + 5) + 2 = 64 - 19 + 2 = 47$. Members singing none $= 50 - 47 = 3$."
    },
    {
      "id": "WAEC-SS2-SET-018",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a class of $40$ students, $20$ like Mathematics, $18$ like Physics, and $16$ like Chemistry. $7$ like Mathematics and Physics, $8$ like Mathematics and Chemistry, and $6$ like Physics and Chemistry. If $3$ students like all three, find the number who like Mathematics only.",
      "options": {
        "A": "$10$",
        "B": "$8$",
        "C": "$6$",
        "D": "$12$"
      },
      "correctAnswer": "B",
      "explanation": "Mathematics only $= 20 - (7 - 3) - (8 - 3) - 3 = 20 - 4 - 5 - 3 = 8$."
    },
    {
      "id": "WAEC-SS2-SET-019",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $n(A) = 15$ and $n(B) = 25$, what is the minimum possible value of $n(A \\cup B)$?",
      "options": {
        "A": "$40$",
        "B": "$15$",
        "C": "$25$",
        "D": "$10$"
      },
      "correctAnswer": "C",
      "explanation": "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$. The union is minimized when $n(A \\cap B)$ is maximized, which occurs when $A \\subseteq B \\implies n(A \\cap B) = 15$. Thus minimum $n(A \\cup B) = 25$."
    },
    {
      "id": "WAEC-SS2-SET-020",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "What is the maximum possible value of $n(A \\cap B)$ when $n(A) = 15$ and $n(B) = 25$?",
      "options": {
        "A": "$40$",
        "B": "$25$",
        "C": "$10$",
        "D": "$15$"
      },
      "correctAnswer": "D",
      "explanation": "The intersection cannot have more elements than the smaller set: $n(A \\cap B) \\le \\min(n(A), n(B)) = \\min(15, 25) = 15$."
    },
    {
      "id": "WAEC-SS2-QEQ-001",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "What constant term must be added to $x^2 + 8x$ to make it a perfect square?",
      "options": {
        "A": "$16$",
        "B": "$64$",
        "C": "$8$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "To complete the square for $x^2 + bx$, we add $\\left(\\frac{b}{2}\\right)^2$. Here $b = 8$, so $\\left(\\frac{8}{2}\\right)^2 = 4^2 = 16$."
    },
    {
      "id": "WAEC-SS2-QEQ-002",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Using the quadratic formula, find the roots of $2x^2 - 5x + 1 = 0$.",
      "options": {
        "A": "$\\frac{-5 \\pm \\sqrt{17}}{4}$",
        "B": "$\\frac{5 \\pm \\sqrt{17}}{4}$",
        "C": "$\\frac{5 \\pm \\sqrt{33}}{4}$",
        "D": "$\\frac{5 \\pm \\sqrt{17}}{2}$"
      },
      "correctAnswer": "B",
      "explanation": "$a = 2, b = -5, c = 1$. $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4(2)(1)}}{2(2)} = \\frac{5 \\pm \\sqrt{25 - 8}}{4} = \\frac{5 \\pm \\sqrt{17}}{4}$."
    },
    {
      "id": "WAEC-SS2-QEQ-003",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "For what value of $k$ does the quadratic equation $kx^2 + 6x + 1 = 0$ have equal roots?",
      "options": {
        "A": "$12$",
        "B": "$3$",
        "C": "$9$",
        "D": "$36$"
      },
      "correctAnswer": "C",
      "explanation": "Equal roots occur when the discriminant $\\Delta = b^2 - 4ac = 0$. Here $b = 6, a = k, c = 1 \\implies 6^2 - 4(k)(1) = 0 \\implies 36 - 4k = 0 \\implies 4k = 36 \\implies k = 9$."
    },
    {
      "id": "WAEC-SS2-QEQ-004",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the range of values of $m$ for which the equation $x^2 - 4x + m = 0$ has two distinct real roots.",
      "options": {
        "A": "$m < 16$",
        "B": "$m \\le 4$",
        "C": "$m > 4$",
        "D": "$m < 4$"
      },
      "correctAnswer": "D",
      "explanation": "For distinct real roots, $\\Delta > 0 \\implies b^2 - 4ac > 0 \\implies (-4)^2 - 4(1)(m) > 0 \\implies 16 - 4m > 0 \\implies 4m < 16 \\implies m < 4$."
    },
    {
      "id": "WAEC-SS2-QEQ-005",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are the roots of $2x^2 - 7x + 3 = 0$, find the sum and product of the roots $(\\alpha + \\beta,\\ \\alpha\\beta)$.",
      "options": {
        "A": "$\\left(\\frac{7}{2},\\ \\frac{3}{2}\\right)$",
        "B": "$\\left(-\\frac{7}{2},\\ \\frac{3}{2}\\right)$",
        "C": "$\\left(\\frac{7}{2},\\ -\\frac{3}{2}\\right)$",
        "D": "$(7,\\ 3)$"
      },
      "correctAnswer": "A",
      "explanation": "For $ax^2 + bx + c = 0$, $\\alpha + \\beta = -\\frac{b}{a} = -\\frac{-7}{2} = \\frac{7}{2}$, and $\\alpha\\beta = \\frac{c}{a} = \\frac{3}{2}$."
    },
    {
      "id": "WAEC-SS2-QEQ-006",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 5x + 2 = 0$, evaluate $\\alpha^2 + \\beta^2$.",
      "options": {
        "A": "$25$",
        "B": "$21$",
        "C": "$29$",
        "D": "$17$"
      },
      "correctAnswer": "B",
      "explanation": "$\\alpha + \\beta = 5$ and $\\alpha\\beta = 2$. Then $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = 5^2 - 2(2) = 25 - 4 = 21$."
    },
    {
      "id": "WAEC-SS2-QEQ-007",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are the roots of $3x^2 - 4x + 1 = 0$, find the value of $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$.",
      "options": {
        "A": "$\\frac{3}{4}$",
        "B": "$\\frac{4}{3}$",
        "C": "$4$",
        "D": "$3$"
      },
      "correctAnswer": "C",
      "explanation": "$\\alpha + \\beta = \\frac{4}{3}$ and $\\alpha\\beta = \\frac{1}{3}$. Then $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{4/3}{1/3} = 4$."
    },
    {
      "id": "WAEC-SS2-QEQ-008",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Form the quadratic equation whose roots are $-4$ and $7$.",
      "options": {
        "A": "$x^2 + 3x + 28 = 0$",
        "B": "$x^2 + 3x - 28 = 0$",
        "C": "$x^2 - 11x - 28 = 0$",
        "D": "$x^2 - 3x - 28 = 0$"
      },
      "correctAnswer": "D",
      "explanation": "Sum of roots $= -4 + 7 = 3$. Product of roots $= (-4) \\times 7 = -28$. Using $x^2 - (\\text{sum})x + (\\text{product}) = 0$, we have $x^2 - 3x - 28 = 0$."
    },
    {
      "id": "WAEC-SS2-QEQ-009",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the quadratic equation with integer coefficients whose roots are $\\frac{2}{3}$ and $-\\frac{1}{2}$.",
      "options": {
        "A": "$6x^2 - x - 2 = 0$",
        "B": "$6x^2 + x - 2 = 0$",
        "C": "$6x^2 - 5x - 2 = 0$",
        "D": "$6x^2 + 5x - 2 = 0$"
      },
      "correctAnswer": "A",
      "explanation": "$\\left(x - \\frac{2}{3}\\right)\\left(x + \\frac{1}{2}\\right) = 0 \\implies (3x - 2)(2x + 1) = 0 \\implies 6x^2 + 3x - 4x - 2 = 0 \\implies 6x^2 - x - 2 = 0$."
    },
    {
      "id": "WAEC-SS2-QEQ-010",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 5x + 3 = 0$, find the quadratic equation whose roots are $2\\alpha$ and $2\\beta$.",
      "options": {
        "A": "$x^2 - 10x + 6 = 0$",
        "B": "$x^2 - 10x + 12 = 0$",
        "C": "$x^2 - 5x + 12 = 0$",
        "D": "$x^2 + 10x + 12 = 0$"
      },
      "correctAnswer": "B",
      "explanation": "For the original equation, $\\alpha + \\beta = 5$ and $\\alpha\\beta = 3$. For the new roots $2\\alpha$ and $2\\beta$: Sum $= 2\\alpha + 2\\beta = 2(\\alpha + \\beta) = 2(5) = 10$. Product $= (2\\alpha)(2\\beta) = 4\\alpha\\beta = 4(3) = 12$. The required equation is $x^2 - (\\text{sum})x + (\\text{product}) = 0 \\implies x^2 - 10x + 12 = 0$."
    },
    {
      "id": "WAEC-SS2-QEQ-011",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "The length of a rectangular farmland is $3\\text{ m}$ longer than its width. If the area of the farmland is $54\\text{ m}^2$, find its width.",
      "options": {
        "A": "$7\\text{ m}$",
        "B": "$9\\text{ m}$",
        "C": "$6\\text{ m}$",
        "D": "$5\\text{ m}$"
      },
      "correctAnswer": "C",
      "explanation": "Let width be $w$, then length is $w + 3$. Area: $w(w + 3) = 54 \\implies w^2 + 3w - 54 = 0 \\implies (w + 9)(w - 6) = 0$. Since width must be positive, $w = 6\\text{ m}$."
    },
    {
      "id": "WAEC-SS2-QEQ-012",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "The product of two consecutive positive odd integers is $143$. Find the two integers.",
      "options": {
        "A": "$7 \\text{ and } 9$",
        "B": "$9 \\text{ and } 11$",
        "C": "$13 \\text{ and } 15$",
        "D": "$11 \\text{ and } 13$"
      },
      "correctAnswer": "D",
      "explanation": "Let the integers be $n$ and $n + 2$. $n(n + 2) = 143 \\implies n^2 + 2n - 143 = 0 \\implies (n + 13)(n - 11) = 0$. Positive solution is $n = 11$, so the integers are $11$ and $13$."
    },
    {
      "id": "WAEC-SS2-QEQ-013",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 4x + 2 = 0$, evaluate $\\alpha^3 + \\beta^3$.",
      "options": {
        "A": "$40$",
        "B": "$64$",
        "C": "$32$",
        "D": "$48$"
      },
      "correctAnswer": "A",
      "explanation": "$\\alpha + \\beta = 4$ and $\\alpha\\beta = 2$. Using identity $\\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta) = 4^3 - 3(2)(4) = 64 - 24 = 40$."
    },
    {
      "id": "WAEC-SS2-QEQ-014",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the solution set of $6x^2 - 7x - 3 = 0$.",
      "options": {
        "A": "$\\left\\{-\\frac{3}{2},\\ \\frac{1}{3}\\right\\}$",
        "B": "$\\left\\{\\frac{3}{2},\\ -\\frac{1}{3}\\right\\}$",
        "C": "$\\left\\{\\frac{2}{3},\\ -\\frac{1}{2}\\right\\}$",
        "D": "$\\left\\{3,\\ -1\\right\\}$"
      },
      "correctAnswer": "B",
      "explanation": "Factors of $6 \\times (-3) = -18$ that sum to $-7$ are $-9$ and $2$. $6x^2 - 9x + 2x - 3 = 0 \\implies 3x(2x - 3) + 1(2x - 3) = 0 \\implies (3x + 1)(2x - 3) = 0 \\implies x = \\frac{3}{2}$ or $x = -\\frac{1}{3}$."
    },
    {
      "id": "WAEC-SS2-QEQ-015",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 6x + 4 = 0$, find the value of $(\\alpha - \\beta)^2$.",
      "options": {
        "A": "$16$",
        "B": "$36$",
        "C": "$20$",
        "D": "$24$"
      },
      "correctAnswer": "C",
      "explanation": "$(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta$. For $x^2 - 6x + 4 = 0$, $\\alpha + \\beta = 6$ and $\\alpha\\beta = 4$. Thus $(\\alpha - \\beta)^2 = 6^2 - 4(4) = 36 - 16 = 20$."
    },
    {
      "id": "WAEC-SS2-QEQ-016",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "For what values of $p$ does the equation $x^2 + px + 9 = 0$ have no real roots?",
      "options": {
        "A": "$p > -6$",
        "B": "$p > 6 \\text{ or } p < -6$",
        "C": "$p < 6$",
        "D": "$-6 < p < 6$"
      },
      "correctAnswer": "D",
      "explanation": "No real roots means discriminant $\\Delta < 0 \\implies p^2 - 4(1)(9) < 0 \\implies p^2 - 36 < 0 \\implies p^2 < 36 \\implies -6 < p < 6$."
    },
    {
      "id": "WAEC-SS2-QEQ-017",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If one root of the quadratic equation $ax^2 + bx + c = 0$ is the reciprocal of the other, which of the following must be true?",
      "options": {
        "A": "$a = c$",
        "B": "$a = b$",
        "C": "$b = c$",
        "D": "$b^2 = 4ac$"
      },
      "correctAnswer": "A",
      "explanation": "Let the roots be $\\alpha$ and $\\frac{1}{\\alpha}$. Product of roots $= \\alpha \\times \\frac{1}{\\alpha} = 1$. From formula, product of roots $= \\frac{c}{a}$. Thus $\\frac{c}{a} = 1 \\implies a = c$."
    },
    {
      "id": "WAEC-SS2-QEQ-018",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If one root of $x^2 - 9x + k = 0$ is double the other, find the value of $k$.",
      "options": {
        "A": "$14$",
        "B": "$18$",
        "C": "$20$",
        "D": "$8$"
      },
      "correctAnswer": "B",
      "explanation": "Let roots be $\\alpha$ and $2\\alpha$. Sum of roots $= \\alpha + 2\\alpha = 3\\alpha = 9 \\implies \\alpha = 3$. The roots are $3$ and $6$. Product $= k = 3 \\times 6 = 18$."
    },
    {
      "id": "WAEC-SS2-QEQ-019",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve for $x$ in the equation $\\frac{2}{x} + \\frac{3}{x+1} = 2$.",
      "options": {
        "A": "$x = 1 \\text{ or } 2$",
        "B": "$x = -2 \\text{ or } \\frac{1}{2}$",
        "C": "$x = 2 \\text{ or } -\\frac{1}{2}$",
        "D": "$x = 3 \\text{ or } -1$"
      },
      "correctAnswer": "C",
      "explanation": "Multiply by $x(x+1)$: $2(x+1) + 3x = 2x(x+1) \\implies 5x + 2 = 2x^2 + 2x \\implies 2x^2 - 3x - 2 = 0 \\implies (2x + 1)(x - 2) = 0 \\implies x = 2$ or $x = -\\frac{1}{2}$."
    },
    {
      "id": "WAEC-SS2-QEQ-020",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the minimum value of the quadratic function $f(x) = 2x^2 - 8x + 11$.",
      "options": {
        "A": "$11$",
        "B": "$2$",
        "C": "$5$",
        "D": "$3$"
      },
      "correctAnswer": "D",
      "explanation": "Completing the square: $f(x) = 2(x^2 - 4x) + 11 = 2(x - 2)^2 - 8 + 11 = 2(x - 2)^2 + 3$. Since $(x - 2)^2 \\ge 0$, the minimum value is $3$ when $x = 2$."
    },
    {
      "id": "WAEC-SS2-LGN-001",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "What is the characteristic of $\\log_{10} 0.00345$?",
      "options": {
        "A": "$\\bar{3}$",
        "B": "$\\bar{2}$",
        "C": "$\\bar{4}$",
        "D": "$-2$"
      },
      "correctAnswer": "A",
      "explanation": "In standard form $0.00345 = 3.45 \\times 10^{-3}$. The power of $10$ is $-3$, which is written in bar notation as $\\bar{3}$."
    },
    {
      "id": "WAEC-SS2-LGN-002",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Find the characteristic of $\\log_{10} 0.0528$.",
      "options": {
        "A": "$\\bar{1}$",
        "B": "$\\bar{2}$",
        "C": "$\\bar{3}$",
        "D": "$2$"
      },
      "correctAnswer": "B",
      "explanation": "$0.0528 = 5.28 \\times 10^{-2}$. The exponent is $-2$, so the characteristic is $\\bar{2}$."
    },
    {
      "id": "WAEC-SS2-LGN-003",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "State the characteristic of $\\log_{10} 0.7182$.",
      "options": {
        "A": "$\\bar{2}$",
        "B": "$0$",
        "C": "$\\bar{1}$",
        "D": "$-1$"
      },
      "correctAnswer": "C",
      "explanation": "$0.7182 = 7.182 \\times 10^{-1}$. The power is $-1$, so the characteristic is $\\bar{1}$."
    },
    {
      "id": "WAEC-SS2-LGN-004",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "What is the characteristic of $\\log_{10} 0.000049$?",
      "options": {
        "A": "$-4$",
        "B": "$\\bar{4}$",
        "C": "$\\bar{6}$",
        "D": "$\\bar{5}$"
      },
      "correctAnswer": "D",
      "explanation": "$0.000049 = 4.9 \\times 10^{-5}$. Therefore, the characteristic is $\\bar{5}$."
    },
    {
      "id": "WAEC-SS2-LGN-005",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Convert the ordinary negative logarithm $-2.3842$ to bar notation.",
      "options": {
        "A": "$\\bar{3}.6158$",
        "B": "$\\bar{2}.3842$",
        "C": "$\\bar{2}.6158$",
        "D": "$\\bar{3}.3842$"
      },
      "correctAnswer": "A",
      "explanation": "$-2.3842 = -3 + (1 - 0.3842) = -3 + 0.6158 = \\bar{3}.6158$."
    },
    {
      "id": "WAEC-SS2-LGN-006",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Convert $-1.4721$ to bar notation.",
      "options": {
        "A": "$\\bar{1}.5279$",
        "B": "$\\bar{2}.5279$",
        "C": "$\\bar{2}.4721$",
        "D": "$\\bar{1}.4721$"
      },
      "correctAnswer": "B",
      "explanation": "$-1.4721 = -2 + (1 - 0.4721) = -2 + 0.5279 = \\bar{2}.5279$."
    },
    {
      "id": "WAEC-SS2-LGN-007",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Convert $-0.6514$ into bar notation.",
      "options": {
        "A": "$\\bar{1}.6514$",
        "B": "$\\bar{0}.3486$",
        "C": "$\\bar{1}.3486$",
        "D": "$\\bar{2}.3486$"
      },
      "correctAnswer": "C",
      "explanation": "$-0.6514 = -1 + (1 - 0.6514) = -1 + 0.3486 = \\bar{1}.3486$."
    },
    {
      "id": "WAEC-SS2-LGN-008",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Evaluate $\\bar{2}.4516 + \\bar{1}.7839$.",
      "options": {
        "A": "$\\bar{4}.2355$",
        "B": "$\\bar{3}.2355$",
        "C": "$\\bar{1}.2355$",
        "D": "$\\bar{2}.2355$"
      },
      "correctAnswer": "D",
      "explanation": "Add mantissas: $0.4516 + 0.7839 = 1.2355$ (write $.2355$, carry $+1$). Add characteristics: $\\bar{2} + \\bar{1} + 1 = -2 - 1 + 1 = -2 = \\bar{2}$. Result is $\\bar{2}.2355$."
    },
    {
      "id": "WAEC-SS2-LGN-009",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Evaluate $\\bar{3}.6142 + \\bar{2}.8573$.",
      "options": {
        "A": "$\\bar{4}.4715$",
        "B": "$\\bar{5}.4715$",
        "C": "$\\bar{6}.4715$",
        "D": "$\\bar{3}.4715$"
      },
      "correctAnswer": "A",
      "explanation": "Mantissas: $0.6142 + 0.8573 = 1.4715$ (write $.4715$, carry $+1$). Characteristics: $\\bar{3} + \\bar{2} + 1 = -3 - 2 + 1 = -4 = \\bar{4}$. Result is $\\bar{4}.4715$."
    },
    {
      "id": "WAEC-SS2-LGN-010",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Evaluate $\\bar{2}.3451 - \\bar{1}.7824$.",
      "options": {
        "A": "$\\bar{1}.5627$",
        "B": "$\\bar{2}.5627$",
        "C": "$\\bar{3}.5627$",
        "D": "$\\bar{2}.6627$"
      },
      "correctAnswer": "B",
      "explanation": "Subtract mantissas: $0.3451 - 0.7824$. Borrow $1$ from $\\bar{2}$ (which becomes $\\bar{3}$): $1.3451 - 0.7824 = 0.5627$. Then characteristics: $\\bar{3} - \\bar{1} = -3 - (-1) = -2 = \\bar{2}$. Result is $\\bar{2}.5627$."
    },
    {
      "id": "WAEC-SS2-LGN-011",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Evaluate $\\bar{3}.2154 - \\bar{2}.6481$.",
      "options": {
        "A": "$\\bar{3}.5673$",
        "B": "$\\bar{1}.5673$",
        "C": "$\\bar{2}.5673$",
        "D": "$\\bar{0}.5673$"
      },
      "correctAnswer": "C",
      "explanation": "Borrow $1$ from $\\bar{3}$ (becomes $\\bar{4}$): $1.2154 - 0.6481 = 0.5673$. Characteristics: $\\bar{4} - \\bar{2} = -4 - (-2) = -2 = \\bar{2}$. Result is $\\bar{2}.5673$."
    },
    {
      "id": "WAEC-SS2-LGN-012",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Evaluate $\\bar{2}.4321 \\times 3$.",
      "options": {
        "A": "$\\bar{5}.7037$",
        "B": "$\\bar{6}.2963$",
        "C": "$\\bar{4}.2963$",
        "D": "$\\bar{5}.2963$"
      },
      "correctAnswer": "D",
      "explanation": "Multiply mantissa: $0.4321 \\times 3 = 1.2963$ (write $.2963$, carry $+1$). Multiply characteristic: $\\bar{2} \\times 3 = -6$. Add carry: $-6 + 1 = -5 = \\bar{5}$. Result is $\\bar{5}.2963$."
    },
    {
      "id": "WAEC-SS2-LGN-013",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Evaluate $\\bar{1}.6214 \\times 4$.",
      "options": {
        "A": "$\\bar{2}.4856$",
        "B": "$\\bar{4}.4856$",
        "C": "$\\bar{3}.4856$",
        "D": "$\\bar{1}.4856$"
      },
      "correctAnswer": "A",
      "explanation": "Mantissa: $0.6214 \\times 4 = 2.4856$ (write $.4856$, carry $+2$). Characteristic: $\\bar{1} \\times 4 = -4$. Add carry: $-4 + 2 = -2 = \\bar{2}$. Result is $\\bar{2}.4856$."
    },
    {
      "id": "WAEC-SS2-LGN-014",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Divide $\\bar{3}.4569$ by $3$.",
      "options": {
        "A": "$\\bar{1}.4569$",
        "B": "$\\bar{1}.1523$",
        "C": "$\\bar{3}.1523$",
        "D": "$0.1523$"
      },
      "correctAnswer": "B",
      "explanation": "$\\frac{\\bar{3}.4569}{3} = \\frac{\\bar{3} + 0.4569}{3} = \\frac{-3}{3} + \\frac{0.4569}{3} = -1 + 0.1523 = \\bar{1}.1523$."
    },
    {
      "id": "WAEC-SS2-LGN-015",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Evaluate $\\bar{2}.7183 \\div 3$.",
      "options": {
        "A": "$\\bar{2}.2394$",
        "B": "$\\bar{1}.9061$",
        "C": "$\\bar{1}.5728$",
        "D": "$\\bar{1}.2394$"
      },
      "correctAnswer": "C",
      "explanation": "Since $\\bar{2}$ is not divisible by $3$, rewrite as $\\bar{2} = \\bar{3} + 1$. Thus $\\bar{2}.7183 = \\bar{3} + 1.7183$. Dividing by $3$: $\\frac{\\bar{3}}{3} + \\frac{1.7183}{3} = \\bar{1} + 0.57277 \\approx \\bar{1}.5728$."
    },
    {
      "id": "WAEC-SS2-LGN-016",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Evaluate $\\bar{1}.8426 \\div 2$.",
      "options": {
        "A": "$\\bar{2}.9213$",
        "B": "$\\bar{0}.9213$",
        "C": "$\\bar{1}.4213$",
        "D": "$\\bar{1}.9213$"
      },
      "correctAnswer": "D",
      "explanation": "Since $\\bar{1}$ is not divisible by $2$, rewrite as $\\bar{2} + 1.8426$. Dividing by $2$: $\\frac{\\bar{2}}{2} + \\frac{1.8426}{2} = \\bar{1} + 0.9213 = \\bar{1}.9213$."
    },
    {
      "id": "WAEC-SS2-LGN-017",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Divide $\\bar{4}.3215$ by $5$.",
      "options": {
        "A": "$\\bar{1}.2643$",
        "B": "$\\bar{1}.8643$",
        "C": "$\\bar{2}.2643$",
        "D": "$\\bar{0}.8643$"
      },
      "correctAnswer": "A",
      "explanation": "Rewrite as $\\bar{4}.3215 = \\bar{5} + 1.3215$. Dividing by $5$: $\\frac{\\bar{5}}{5} + \\frac{1.3215}{5} = \\bar{1} + 0.2643 = \\bar{1}.2643$."
    },
    {
      "id": "WAEC-SS2-LGN-018",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "If $\\log_{10} N = \\bar{2}.4771$, what is the position of the first non-zero digit in the decimal representation of $N$?",
      "options": {
        "A": "First decimal place",
        "B": "Second decimal place",
        "C": "Third decimal place",
        "D": "Fourth decimal place"
      },
      "correctAnswer": "B",
      "explanation": "A characteristic of $\\bar{n}$ means there are $n - 1$ zeros between the decimal point and the first non-zero digit. For $\\bar{2}$, there is $1$ zero after the decimal point, so the first non-zero digit is in the second decimal place ($0.0d\\dots$)."
    },
    {
      "id": "WAEC-SS2-LGN-019",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Given that $\\text{antilog}(0.3010) = 2.000$, find $\\text{antilog}(\\bar{3}.3010)$.",
      "options": {
        "A": "$0.0002$",
        "B": "$0.02$",
        "C": "$0.002$",
        "D": "$-2000$"
      },
      "correctAnswer": "C",
      "explanation": "$\\text{antilog}(\\bar{3}.3010) = 2.000 \\times 10^{-3} = 0.002$."
    },
    {
      "id": "WAEC-SS2-LGN-020",
      "class": "SSS 2",
      "topic": "Logarithms of Numbers Less than 1 & Bar Notation",
      "question": "Given that $\\log_{10} 0.0456 = \\bar{2}.6590$, find $\\log_{10}\\sqrt{0.0456}$.",
      "options": {
        "A": "$0.3295$",
        "B": "$\\bar{2}.3295$",
        "C": "$\\bar{1}.8295$",
        "D": "$\\bar{1}.3295$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log_{10}\\sqrt{0.0456} = \\frac{1}{2}\\log_{10} 0.0456 = \\frac{\\bar{2}.6590}{2} = \\frac{\\bar{2}}{2} + \\frac{0.6590}{2} = \\bar{1} + 0.3295 = \\bar{1}.3295$."
    }
  ],
  "SSS 3": [
    {
      "id": "WAEC-SS3-ILG-001",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve for $x$ in terms of common logarithms if $3^{2x-1} = 5^{x+2}$.",
      "options": {
        "A": "$x = \\frac{\\log 3 + 2\\log 5}{2\\log 3 - \\log 5}$",
        "B": "$x = \\frac{\\log 3 - 2\\log 5}{2\\log 3 + \\log 5}$",
        "C": "$x = \\frac{2\\log 5 - \\log 3}{\\log 3 - 2\\log 5}$",
        "D": "$x = \\frac{\\log 75}{\\log 15}$"
      },
      "correctAnswer": "A",
      "explanation": "Taking $\\log_{10}$ of both sides: $(2x - 1)\\log 3 = (x + 2)\\log 5 \\implies 2x\\log 3 - \\log 3 = x\\log 5 + 2\\log 5 \\implies x(2\\log 3 - \\log 5) = \\log 3 + 2\\log 5 \\implies x = \\frac{\\log 3 + 2\\log 5}{2\\log 3 - \\log 5}$."
    },
    {
      "id": "WAEC-SS3-ILG-002",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Evaluate $\\frac{\\log_2(8^{\\sqrt{3}})}{\\sqrt{3}}$.",
      "options": {
        "A": "$\\sqrt{3}$",
        "B": "$3$",
        "C": "$2$",
        "D": "$3\\sqrt{3}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\log_2(8^{\\sqrt{3}}) = \\sqrt{3}\\log_2 8 = \\sqrt{3}(3) = 3\\sqrt{3}$. Dividing by $\\sqrt{3}$ gives $\\frac{3\\sqrt{3}}{\\sqrt{3}} = 3$."
    },
    {
      "id": "WAEC-SS3-ILG-003",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If $\\log_{10} 2 = a$ and $\\log_{10} 3 = b$, express $\\log_6 15$ in terms of $a$ and $b$.",
      "options": {
        "A": "$\\frac{b - a}{a + b}$",
        "B": "$\\frac{1 + a + b}{a + b}$",
        "C": "$\\frac{1 + b - a}{a + b}$",
        "D": "$\\frac{1 + b}{a + b}$"
      },
      "correctAnswer": "C",
      "explanation": "Change base to $10$: $\\log_6 15 = \\frac{\\log_{10} 15}{\\log_{10} 6} = \\frac{\\log_{10}(3 \\times 5)}{\\log_{10}(2 \\times 3)} = \\frac{\\log 3 + \\log(10/2)}{\\log 2 + \\log 3} = \\frac{b + 1 - a}{a + b} = \\frac{1 + b - a}{a + b}$."
    },
    {
      "id": "WAEC-SS3-ILG-004",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve for $x$ in the equation $2^{x+1} + 2^{3-x} = 17$.",
      "options": {
        "A": "$x = -1 \\text{ or } 4$",
        "B": "$x = 1 \\text{ or } -3$",
        "C": "$x = 0 \\text{ or } 3$",
        "D": "$x = -1 \\text{ or } 3$"
      },
      "correctAnswer": "D",
      "explanation": "Rewrite: $2(2^x) + \\frac{8}{2^x} = 17$. Let $y = 2^x \\implies 2y + \\frac{8}{y} = 17 \\implies 2y^2 - 17y + 8 = 0 \\implies (2y - 1)(y - 8) = 0 \\implies y = \\frac{1}{2}$ or $y = 8$. Thus $2^x = 2^{-1} \\implies x = -1$, and $2^x = 2^3 \\implies x = 3$."
    },
    {
      "id": "WAEC-SS3-ILG-005",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Express the surd $\\sqrt{\\frac{x\\sqrt{x}}{\\sqrt[3]{x}}}$ in index form with a single fractional exponent.",
      "options": {
        "A": "$x^{\\frac{7}{12}}$",
        "B": "$x^{\\frac{5}{12}}$",
        "C": "$x^{\\frac{11}{12}}$",
        "D": "$x^{\\frac{1}{6}}$"
      },
      "correctAnswer": "A",
      "explanation": "Numerator inside root: $x \\times x^{1/2} = x^{3/2}$. Denominator: $x^{1/3}$. Dividing inside: $x^{3/2 - 1/3} = x^{7/6}$. Taking square root: $(x^{7/6})^{1/2} = x^{7/12}$."
    },
    {
      "id": "WAEC-SS3-ILG-006",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve for $x$ in $\\log_x(8x - 15) = 2$.",
      "options": {
        "A": "$x = 2 \\text{ or } 4$",
        "B": "$x = 3 \\text{ or } 5$",
        "C": "$x = 3 \\text{ only}$",
        "D": "$x = 5 \\text{ only}$"
      },
      "correctAnswer": "B",
      "explanation": "Convert to index form: $x^2 = 8x - 15 \\implies x^2 - 8x + 15 = 0 \\implies (x - 3)(x - 5) = 0 \\implies x = 3$ or $x = 5$. Both satisfy $x > 0, x \\ne 1$ and $8x - 15 > 0$."
    },
    {
      "id": "WAEC-SS3-ILG-007",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If $x = 2^a$ and $y = 2^b$, express $\\log_2\\left(\\frac{x^3}{\\sqrt{y}}\\right)$ in terms of $a$ and $b$.",
      "options": {
        "A": "$\\frac{3a}{b}$",
        "B": "$3a - 2b$",
        "C": "$3a - \\frac{1}{2}b$",
        "D": "$a^3 - \\sqrt{b}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\log_2\\left(\\frac{x^3}{\\sqrt{y}}\\right) = 3\\log_2 x - \\frac{1}{2}\\log_2 y$. Since $\\log_2 x = a$ and $\\log_2 y = b$, this becomes $3a - \\frac{1}{2}b$."
    },
    {
      "id": "WAEC-SS3-ILG-008",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve for real $x$ in $9^x - 3^{x+1} - 54 = 0$.",
      "options": {
        "A": "$x = 1$",
        "B": "$x = 3$",
        "C": "$x = 2 \\text{ or } -1$",
        "D": "$x = 2$"
      },
      "correctAnswer": "D",
      "explanation": "Let $y = 3^x$. Then $y^2 - 3y - 54 = 0 \\implies (y - 9)(y + 6) = 0 \\implies y = 9$ or $y = -6$. Since $3^x > 0$ for all real $x$, reject $-6$. Thus $3^x = 9 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS3-ILG-009",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Evaluate $\\log_3 5 \\times \\log_5 7 \\times \\log_7 9$.",
      "options": {
        "A": "$2$",
        "B": "$3$",
        "C": "$1$",
        "D": "$\\log_3 7$"
      },
      "correctAnswer": "A",
      "explanation": "Using the change of base rule: $\\frac{\\ln 5}{\\ln 3} \\times \\frac{\\ln 7}{\\ln 5} \\times \\frac{\\ln 9}{\\ln 7} = \\frac{\\ln 9}{\\ln 3} = \\log_3 9 = 2$."
    },
    {
      "id": "WAEC-SS3-ILG-010",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If $\\log_2(x^2 - 4) = 5$, find the positive value of $x$.",
      "options": {
        "A": "$4$",
        "B": "$6$",
        "C": "$\\sqrt{34}$",
        "D": "$8$"
      },
      "correctAnswer": "B",
      "explanation": "$x^2 - 4 = 2^5 = 32 \\implies x^2 = 36 \\implies x = \\pm 6$. The positive value is $x = 6$."
    },
    {
      "id": "WAEC-SS3-ILG-011",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve for $x$ in $4^{x + \\frac{1}{2}} - 9(2^{x - 1}) + 1 = 0$.",
      "options": {
        "A": "$x = 0 \\text{ or } 1$",
        "B": "$x = 2 \\text{ or } -1$",
        "C": "$x = -2 \\text{ or } 1$",
        "D": "$x = -2 \\text{ or } 0$"
      },
      "correctAnswer": "C",
      "explanation": "$4^{x+1/2} = 4^{1/2} \\times 4^x = 2(2^{2x}) = 2(2^x)^2$. $9(2^{x-1}) = \\frac{9}{2}(2^x)$. Multiply equation by $2$: $4(2^x)^2 - 9(2^x) + 2 = 0$. Let $y = 2^x \\implies 4y^2 - 9y + 2 = 0 \\implies (4y - 1)(y - 2) = 0 \\implies y = \\frac{1}{4}$ or $y = 2$. Thus $2^x = 2^{-2} \\implies x = -2$, and $2^x = 2^1 \\implies x = 1$."
    },
    {
      "id": "WAEC-SS3-ILG-012",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If $\\log_{10} x = 2\\log_{10} 3 + \\log_{10} 4 - \\frac{1}{2}\\log_{10} 16$, find $x$.",
      "options": {
        "A": "$12$",
        "B": "$18$",
        "C": "$36$",
        "D": "$9$"
      },
      "correctAnswer": "D",
      "explanation": "$\\log_{10} x = \\log_{10}(3^2) + \\log_{10} 4 - \\log_{10}(16^{1/2}) = \\log_{10} 9 + \\log_{10} 4 - \\log_{10} 4 = \\log_{10} 9 \\implies x = 9$."
    },
    {
      "id": "WAEC-SS3-SET-001",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "In a survey of $150$ music lovers, $80$ listen to Afrobeats, $70$ to Highlife, and $65$ to Gospel. $35$ listen to Afrobeats and Highlife, $30$ to Highlife and Gospel, and $40$ to Afrobeats and Gospel. If $20$ listen to all three genres, how many do not listen to any of the three?",
      "options": {
        "A": "$20$",
        "B": "$15$",
        "C": "$25$",
        "D": "$10$"
      },
      "correctAnswer": "A",
      "explanation": "$n(A \\cup H \\cup G) = 80 + 70 + 65 - (35 + 30 + 40) + 20 = 215 - 105 + 20 = 130$. Lovers listening to none $= 150 - 130 = 20$."
    },
    {
      "id": "WAEC-SS3-SET-002",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "Referring to the survey of $150$ music lovers ($80$ A, $70$ H, $65$ G; $35$ A & H, $30$ H & G, $40$ A & G, and $20$ all three), how many listen to Afrobeats only?",
      "options": {
        "A": "$20$",
        "B": "$25$",
        "C": "$30$",
        "D": "$35$"
      },
      "correctAnswer": "B",
      "explanation": "Afrobeats only $= 80 - (35 - 20) - (40 - 20) - 20 = 80 - 15 - 20 - 20 = 25$."
    },
    {
      "id": "WAEC-SS3-SET-003",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "Given a universal set $U$ with $n(U) = 100$ and two subsets $A$ and $B$ such that $n(A) = 70$ and $n(B) = 60$, what is the minimum possible value of $n(A \\cap B)$?",
      "options": {
        "A": "$60$",
        "B": "$10$",
        "C": "$30$",
        "D": "$0$"
      },
      "correctAnswer": "C",
      "explanation": "Since $n(A \\cup B) \\le n(U) = 100$, we have $n(A) + n(B) - n(A \\cap B) \\le 100 \\implies 70 + 60 - n(A \\cap B) \\le 100 \\implies 130 - n(A \\cap B) \\le 100 \\implies n(A \\cap B) \\ge 30$."
    },
    {
      "id": "WAEC-SS3-SET-004",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "In a class of $50$ students, each offers at least one of Art, Music, and French. $28$ offer Art, $25$ offer Music, and $22$ offer French. $12$ offer Art and Music, $10$ offer Art and French, and $8$ offer Music and French. How many students offer all three subjects?",
      "options": {
        "A": "$3$",
        "B": "$4$",
        "C": "$6$",
        "D": "$5$"
      },
      "correctAnswer": "D",
      "explanation": "Since everyone offers at least one: $n(A \\cup M \\cup F) = 50$. Using 3-set formula: $50 = 28 + 25 + 22 - (12 + 10 + 8) + x \\implies 50 = 75 - 30 + x = 45 + x \\implies x = 5$."
    },
    {
      "id": "WAEC-SS3-SET-005",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "From the previous question ($50$ students: $28$ Art, $25$ Music, $22$ French; $12$ A & M, $10$ A & F, $8$ M & F, and $5$ all three), how many students offer exactly one subject?",
      "options": {
        "A": "$30$",
        "B": "$32$",
        "C": "$28$",
        "D": "$25$"
      },
      "correctAnswer": "A",
      "explanation": "Art only $= 28 - (12-5) - (10-5) - 5 = 28 - 7 - 5 - 5 = 11$. Music only $= 25 - (12-5) - (8-5) - 5 = 25 - 7 - 3 - 5 = 10$. French only $= 22 - (10-5) - (8-5) - 5 = 22 - 5 - 3 - 5 = 9$. Exactly one $= 11 + 10 + 9 = 30$."
    },
    {
      "id": "WAEC-SS3-SET-006",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "The symmetric difference $A \\Delta B$ can be written in set notation as:",
      "options": {
        "A": "$(A \\cap B) \\cup (A' \\cap B')$",
        "B": "$(A \\cap B') \\cup (A' \\cap B)$",
        "C": "$(A \\cup B)' \\cap (A \\cap B)$",
        "D": "$(A' \\cup B) \\cap (A \\cup B')$"
      },
      "correctAnswer": "B",
      "explanation": "$A \\Delta B = (A \\setminus B) \\cup (B \\setminus A)$. Since $A \\setminus B = A \\cap B'$ and $B \\setminus A = A' \\cap B$, this is equal to $(A \\cap B') \\cup (A' \\cap B)$."
    },
    {
      "id": "WAEC-SS3-SET-007",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If set $S = \\{k\\}$, how many elements are in the power set of its power set, $\\mathcal{P}(\\mathcal{P}(S))$?",
      "options": {
        "A": "$8$",
        "B": "$2$",
        "C": "$4$",
        "D": "$16$"
      },
      "correctAnswer": "C",
      "explanation": "$n(S) = 1$. The number of elements in $\\mathcal{P}(S)$ is $2^1 = 2$. Then the number of elements in $\\mathcal{P}(\\mathcal{P}(S))$ is $2^2 = 4$."
    },
    {
      "id": "WAEC-SS3-SET-008",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "How many distinct binary operations can be defined on a set containing exactly $2$ elements?",
      "options": {
        "A": "$32$",
        "B": "$8$",
        "C": "$4$",
        "D": "$16$"
      },
      "correctAnswer": "D",
      "explanation": "A binary operation on set $S$ is a function from $S \\times S \\to S$. If $n(S) = 2$, then $n(S \\times S) = 2^2 = 4$. The total number of functions is $2^4 = 16$."
    },
    {
      "id": "WAEC-SS3-SET-009",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "In a sports club of $80$ members, $45$ swim, $40$ play tennis, and $35$ run. $20$ swim and play tennis, $15$ play tennis and run, $18$ swim and run, and $10$ do all three. How many members play tennis only?",
      "options": {
        "A": "$15$",
        "B": "$20$",
        "C": "$12$",
        "D": "$18$"
      },
      "correctAnswer": "A",
      "explanation": "Tennis only $= 40 - (20 - 10) - (15 - 10) - 10 = 40 - 10 - 5 - 10 = 15$."
    },
    {
      "id": "WAEC-SS3-SET-010",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "From the previous sports club question, how many members engage in exactly two of the three sports?",
      "options": {
        "A": "$25$",
        "B": "$23$",
        "C": "$20$",
        "D": "$28$"
      },
      "correctAnswer": "B",
      "explanation": "Members doing exactly two $= (20 - 10) + (15 - 10) + (18 - 10) = 10 + 5 + 8 = 23$."
    },
    {
      "id": "WAEC-SS3-SET-011",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "For any subsets $A$ and $B$ of a universal set $U$, simplify $(A \\setminus B)'$.",
      "options": {
        "A": "$A' \\cap B$",
        "B": "$A \\cap B'$",
        "C": "$A' \\cup B$",
        "D": "$A \\cup B'$"
      },
      "correctAnswer": "C",
      "explanation": "$A \\setminus B = A \\cap B'$. By De Morgan's Law: $(A \\cap B')' = A' \\cup (B')' = A' \\cup B$."
    },
    {
      "id": "WAEC-SS3-SET-012",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $A$ and $B$ are non-empty subsets of $U$ such that $A \\cap B = \\emptyset$ and $A \\cup B = U$, then $A$ and $B$ are called:",
      "options": {
        "A": "Overlapping sets",
        "B": "Equal sets",
        "C": "Equivalent sets",
        "D": "Complementary sets"
      },
      "correctAnswer": "D",
      "explanation": "When two disjoint sets unite to form the universal set ($A \\cap B = \\emptyset$ and $A \\cup B = U$), each set is the complement of the other ($B = A'$), so they are complementary sets."
    },
    {
      "id": "WAEC-SS3-TRG-001",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In $\\triangle ABC$, $\\angle A = 30^\\circ$, $\\angle B = 45^\\circ$, and side $a = 6\\text{ cm}$. Find side $b$.",
      "options": {
        "A": "$6\\sqrt{2}\\text{ cm}$",
        "B": "$3\\sqrt{2}\\text{ cm}$",
        "C": "$6\\sqrt{3}\\text{ cm}$",
        "D": "$12\\text{ cm}$"
      },
      "correctAnswer": "A",
      "explanation": "By the Sine Rule: $\\frac{b}{\\sin B} = \\frac{a}{\\sin A} \\implies \\frac{b}{\\sin 45^\\circ} = \\frac{6}{\\sin 30^\\circ} \\implies b = \\frac{6 \\times \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 6\\sqrt{2}\\text{ cm}$."
    },
    {
      "id": "WAEC-SS3-TRG-002",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In $\\triangle ABC$, $b = 5\\text{ cm}$, $c = 8\\text{ cm}$, and $\\angle A = 60^\\circ$. Find side $a$.",
      "options": {
        "A": "$6\\text{ cm}$",
        "B": "$7\\text{ cm}$",
        "C": "$\\sqrt{89}\\text{ cm}$",
        "D": "$8\\text{ cm}$"
      },
      "correctAnswer": "B",
      "explanation": "By the Cosine Rule: $a^2 = b^2 + c^2 - 2bc\\cos A = 5^2 + 8^2 - 2(5)(8)\\cos 60^\\circ = 25 + 64 - 80(0.5) = 89 - 40 = 49 \\implies a = 7\\text{ cm}$."
    },
    {
      "id": "WAEC-SS3-TRG-003",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Find the area of $\\triangle PQR$ where $p = 10\\text{ cm}$, $q = 12\\text{ cm}$, and $\\angle R = 30^\\circ$.",
      "options": {
        "A": "$15\\text{ cm}^2$",
        "B": "$60\\text{ cm}^2$",
        "C": "$30\\text{ cm}^2$",
        "D": "$30\\sqrt{3}\\text{ cm}^2$"
      },
      "correctAnswer": "C",
      "explanation": "$\\text{Area} = \\frac{1}{2}pq\\sin R = \\frac{1}{2}(10)(12)\\sin 30^\\circ = 60 \\times \\frac{1}{2} = 30\\text{ cm}^2$."
    },
    {
      "id": "WAEC-SS3-TRG-004",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "From the top of a cliff $50\\text{ m}$ high, the angle of depression of a boat on the sea is $30^\\circ$. How far is the boat from the base of the cliff?",
      "options": {
        "A": "$25\\sqrt{3}\\text{ m}$",
        "B": "$\\frac{50\\sqrt{3}}{3}\\text{ m}$",
        "C": "$100\\text{ m}$",
        "D": "$50\\sqrt{3}\\text{ m}$"
      },
      "correctAnswer": "D",
      "explanation": "The angle of elevation from boat to cliff top is equal to the angle of depression, $30^\\circ$. Let distance be $d$: $\\tan 30^\\circ = \\frac{50}{d} \\implies \\frac{1}{\\sqrt{3}} = \\frac{50}{d} \\implies d = 50\\sqrt{3}\\text{ m}$."
    },
    {
      "id": "WAEC-SS3-TRG-005",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Simplify the trigonometric identity $\\frac{\\cos^2\\theta}{1 - \\sin\\theta}$.",
      "options": {
        "A": "$1 + \\sin\\theta$",
        "B": "$1 - \\sin\\theta$",
        "C": "$\\cos\\theta$",
        "D": "$\\sec\\theta$"
      },
      "correctAnswer": "A",
      "explanation": "Substitute $\\cos^2\\theta = 1 - \\sin^2\\theta = (1 - \\sin\\theta)(1 + \\sin\\theta)$: $\\frac{(1 - \\sin\\theta)(1 + \\sin\\theta)}{1 - \\sin\\theta} = 1 + \\sin\\theta$."
    },
    {
      "id": "WAEC-SS3-TRG-006",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Evaluate $\\frac{\\tan 60^\\circ - \\tan 30^\\circ}{1 + \\tan 60^\\circ \\tan 30^\\circ}$.",
      "options": {
        "A": "$\\sqrt{3}$",
        "B": "$\\frac{\\sqrt{3}}{3}$",
        "C": "$1$",
        "D": "$\\frac{1}{2}$"
      },
      "correctAnswer": "B",
      "explanation": "By the tangent subtraction identity: $\\tan(60^\\circ - 30^\\circ) = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$."
    },
    {
      "id": "WAEC-SS3-TRG-007",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Solve for $\\theta$ in $2\\sin\\theta - 1 = 0$ for $0^\\circ \\le \\theta \\le 360^\\circ$.",
      "options": {
        "A": "$60^\\circ \\text{ or } 120^\\circ$",
        "B": "$30^\\circ \\text{ or } 210^\\circ$",
        "C": "$30^\\circ \\text{ or } 150^\\circ$",
        "D": "$30^\\circ \\text{ or } 330^\\circ$"
      },
      "correctAnswer": "C",
      "explanation": "$2\\sin\\theta = 1 \\implies \\sin\\theta = \\frac{1}{2}$. In the interval $[0^\\circ, 360^\\circ]$, sine is positive in the first and second quadrants: $\\theta = 30^\\circ$ and $\\theta = 180^\\circ - 30^\\circ = 150^\\circ$."
    },
    {
      "id": "WAEC-SS3-TRG-008",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Given that $\\cos\\theta = -\\frac{3}{5}$ and $\\theta$ lies in the third quadrant ($180^\\circ < \\theta < 270^\\circ$), find $\\tan\\theta$.",
      "options": {
        "A": "$-\\frac{4}{5}$",
        "B": "$-\\frac{4}{3}$",
        "C": "$\\frac{3}{4}$",
        "D": "$\\frac{4}{3}$"
      },
      "correctAnswer": "D",
      "explanation": "In the third quadrant, tangent is positive while sine and cosine are negative. $\\sin\\theta = -\\sqrt{1 - \\cos^2\\theta} = -\\sqrt{1 - 9/25} = -\\frac{4}{5}$. Thus $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{-4/5}{-3/5} = \\frac{4}{3}$."
    },
    {
      "id": "WAEC-SS3-TRG-009",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Two points $A$ and $B$ are on the same side of a vertical tower $30\\text{ m}$ high. The angles of elevation of the top of the tower from $A$ and $B$ are $30^\\circ$ and $60^\\circ$ respectively. Find the distance between $A$ and $B$.",
      "options": {
        "A": "$20\\sqrt{3}\\text{ m}$",
        "B": "$10\\sqrt{3}\\text{ m}$",
        "C": "$30\\sqrt{3}\\text{ m}$",
        "D": "$15\\sqrt{3}\\text{ m}$"
      },
      "correctAnswer": "A",
      "explanation": "Distance to $A$: $d_A = \\frac{30}{\\tan 30^\\circ} = 30\\sqrt{3}$. Distance to $B$: $d_B = \\frac{30}{\\tan 60^\\circ} = \\frac{30}{\\sqrt{3}} = 10\\sqrt{3}$. Distance $AB = d_A - d_B = 30\\sqrt{3} - 10\\sqrt{3} = 20\\sqrt{3}\\text{ m}$."
    },
    {
      "id": "WAEC-SS3-TRG-010",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Simplify $\\frac{1}{1 + \\sin\\theta} + \\frac{1}{1 - \\sin\\theta}$.",
      "options": {
        "A": "$2\\csc^2\\theta$",
        "B": "$2\\sec^2\\theta$",
        "C": "$\\frac{2}{\\cos\\theta}$",
        "D": "$2\\tan^2\\theta$"
      },
      "correctAnswer": "B",
      "explanation": "Find common denominator: $\\frac{(1 - \\sin\\theta) + (1 + \\sin\\theta)}{(1 + \\sin\\theta)(1 - \\sin\\theta)} = \\frac{2}{1 - \\sin^2\\theta} = \\frac{2}{\\cos^2\\theta} = 2\\sec^2\\theta$."
    },
    {
      "id": "WAEC-SS3-TRG-011",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "If $\\sin A = \\frac{12}{13}$ and $A$ is an obtuse angle ($90^\\circ < A < 180^\\circ$), find $\\cos A$.",
      "options": {
        "A": "$-\\frac{12}{5}$",
        "B": "$\\frac{5}{13}$",
        "C": "$-\\frac{5}{13}$",
        "D": "$-\\frac{5}{12}$"
      },
      "correctAnswer": "C",
      "explanation": "In the second quadrant, cosine is negative: $\\cos A = -\\sqrt{1 - \\sin^2 A} = -\\sqrt{1 - \\left(\\frac{12}{13}\\right)^2} = -\\sqrt{\\frac{25}{169}} = -\\frac{5}{13}$."
    },
    {
      "id": "WAEC-SS3-TRG-012",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "If the three-figure bearing of town $Y$ from town $X$ is $240^\\circ$, find the bearing of $X$ from $Y$.",
      "options": {
        "A": "$300^\\circ$",
        "B": "$120^\\circ$",
        "C": "$080^\\circ$",
        "D": "$060^\\circ$"
      },
      "correctAnswer": "D",
      "explanation": "Back bearing $= 240^\\circ - 180^\\circ = 060^\\circ$."
    },
    {
      "id": "WAEC-SS3-TRG-013",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Solve the equation $4\\cos^2\\theta - 1 = 0$ for $0^\\circ \\le \\theta \\le 180^\\circ$.",
      "options": {
        "A": "$60^\\circ \\text{ and } 120^\\circ$",
        "B": "$30^\\circ \\text{ and } 150^\\circ$",
        "C": "$60^\\circ \\text{ and } 300^\\circ$",
        "D": "$45^\\circ \\text{ and } 135^\\circ$"
      },
      "correctAnswer": "A",
      "explanation": "$4\\cos^2\\theta - 1 = 0 \\implies \\cos^2\\theta = \\frac{1}{4} \\implies \\cos\\theta = \\pm\\frac{1}{2}$. For $0^\\circ \\le \\theta \\le 180^\\circ$, $\\cos\\theta = \\frac{1}{2} \\implies \\theta = 60^\\circ$, and $\\cos\\theta = -\\frac{1}{2} \\implies \\theta = 180^\\circ - 60^\\circ = 120^\\circ$. Thus, $\\theta = 60^\\circ$ and $120^\\circ$."
    },
    {
      "id": "WAEC-SS3-TRG-014",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "A vertical flagpole casts a shadow of length $12\\text{ m}$ along level ground when the angle of elevation of the sun is $45^\\circ$. What is the height of the flagpole?",
      "options": {
        "A": "$12\\sqrt{2}\\text{ m}$",
        "B": "$12\\text{ m}$",
        "C": "$6\\text{ m}$",
        "D": "$12\\sqrt{3}\\text{ m}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\tan 45^\\circ = \\frac{h}{12} \\implies 1 = \\frac{h}{12} \\implies h = 12\\text{ m}$."
    },
    {
      "id": "WAEC-SS3-TRG-015",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "If $\\tan\\theta = \\frac{3}{4}$ and $\\theta$ is an acute angle, evaluate $\\sin\\theta \\cos\\theta$.",
      "options": {
        "A": "$\\frac{3}{5}$",
        "B": "$\\frac{7}{25}$",
        "C": "$\\frac{12}{25}$",
        "D": "$\\frac{4}{5}$"
      },
      "correctAnswer": "C",
      "explanation": "Opposite $= 3$, Adjacent $= 4 \\implies \\text{Hypotenuse} = \\sqrt{3^2 + 4^2} = 5$. Thus $\\sin\\theta = \\frac{3}{5}$ and $\\cos\\theta = \\frac{4}{5}$. Product $= \\frac{3}{5} \\times \\frac{4}{5} = \\frac{12}{25}$."
    },
    {
      "id": "WAEC-SS3-QEP-001",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the remainder when $f(x) = 3x^3 + 2x^2 - 5x + 7$ is divided by $(x + 2)$.",
      "options": {
        "A": "$-5$",
        "B": "$-1$",
        "C": "$19$",
        "D": "$1$"
      },
      "correctAnswer": "D",
      "explanation": "By the Remainder Theorem, when $f(x)$ is divided by $(x + 2)$, the remainder is $f(-2)$. Substituting $x = -2$: $f(-2) = 3(-2)^3 + 2(-2)^2 - 5(-2) + 7 = 3(-8) + 2(4) + 10 + 7 = -24 + 8 + 10 + 7 = 1$."
    },
    {
      "id": "WAEC-SS3-QEP-002",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $(x + 2)$ is a factor of $2x^3 + 3x^2 - kx + 6$, find the value of $k$.",
      "options": {
        "A": "$-1$",
        "B": "$1$",
        "C": "$3$",
        "D": "$-3$"
      },
      "correctAnswer": "A",
      "explanation": "Since $(x + 2)$ is a factor, $P(-2) = 0 \\implies 2(-2)^3 + 3(-2)^2 - k(-2) + 6 = 0 \\implies 2(-8) + 3(4) + 2k + 6 = 0 \\implies -16 + 12 + 2k + 6 = 0 \\implies 2k + 2 = 0 \\implies k = -1$."
    },
    {
      "id": "WAEC-SS3-QEP-003",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "The polynomial $f(x) = 2x^3 + ax^2 + bx - 6$ is divisible by $(x - 1)$ and has a remainder of $12$ when divided by $(x - 2)$. Find $a$ and $b$.",
      "options": {
        "A": "$a = 3,\\ b = -7$",
        "B": "$a = -3,\\ b = 7$",
        "C": "$a = -2,\\ b = 6$",
        "D": "$a = 1,\\ b = 3$"
      },
      "correctAnswer": "B",
      "explanation": "$f(1) = 2 + a + b - 6 = 0 \\implies a + b = 4$. $f(2) = 16 + 4a + 2b - 6 = 12 \\implies 4a + 2b = 2 \\implies 2a + b = 1$. Subtracting gives $a = -3$, so $b = 4 - (-3) = 7$."
    },
    {
      "id": "WAEC-SS3-QEP-004",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Completely factorise the polynomial $x^3 - 4x^2 + x + 6$.",
      "options": {
        "A": "$(x - 1)(x - 2)(x + 3)$",
        "B": "$(x - 1)(x + 2)(x - 3)$",
        "C": "$(x + 1)(x - 2)(x - 3)$",
        "D": "$(x + 1)(x + 2)(x + 3)$"
      },
      "correctAnswer": "C",
      "explanation": "Testing $x = -1$: $(-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0$, so $(x + 1)$ is a factor. Long division yields $x^2 - 5x + 6 = (x - 2)(x - 3)$. Hence factorisation is $(x + 1)(x - 2)(x - 3)$."
    },
    {
      "id": "WAEC-SS3-QEP-005",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the roots of the cubic equation $x^3 - 6x^2 + 11x - 6 = 0$.",
      "options": {
        "A": "$x = 2,\\ 3,\\ 4$",
        "B": "$x = -1,\\ -2,\\ -3$",
        "C": "$x = 1,\\ -2,\\ 3$",
        "D": "$x = 1,\\ 2,\\ 3$"
      },
      "correctAnswer": "D",
      "explanation": "Notice that for $x = 1$: $1 - 6 + 11 - 6 = 0$. Factoring out $(x - 1)$ gives $(x - 1)(x^2 - 5x + 6) = 0 \\implies (x - 1)(x - 2)(x - 3) = 0$. Thus roots are $1, 2, 3$."
    },
    {
      "id": "WAEC-SS3-QEP-006",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the remainder when $3x^3 + x^2 - 22x - 25$ is divided by $(x + 2)$.",
      "options": {
        "A": "$-1$",
        "B": "$1$",
        "C": "$-5$",
        "D": "$0$"
      },
      "correctAnswer": "A",
      "explanation": "Substitute $x = -2$: $P(-2) = 3(-8) + (-2)^2 - 22(-2) - 25 = -24 + 4 + 44 - 25 = -1$."
    },
    {
      "id": "WAEC-SS3-QEP-007",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the quotient when $2x^3 - 5x^2 + 4x - 1$ is divided by $(2x - 1)$.",
      "options": {
        "A": "$x^2 + 2x - 1$",
        "B": "$x^2 - 2x + 1$",
        "C": "$x^2 - x + 1$",
        "D": "$2x^2 - 4x + 2$"
      },
      "correctAnswer": "B",
      "explanation": "Dividing $2x^3 - 5x^2 + 4x - 1$ by $(2x - 1)$: $2x^3 \\div 2x = x^2$. Multiply and subtract: $(2x^3 - 5x^2) - (2x^3 - x^2) = -4x^2 + 4x$. $-4x^2 \\div 2x = -2x$. Subtract: $(-4x^2 + 4x) - (-4x^2 + 2x) = 2x - 1$. $(2x - 1) \\div (2x - 1) = 1$. The quotient is $x^2 - 2x + 1$."
    },
    {
      "id": "WAEC-SS3-QEP-008",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "For the cubic equation $x^3 - 6x^2 + 11x - 6 = 0$ with roots $\\alpha, \\beta, \\gamma$, find the sum of products taken two at a time ($\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha$).",
      "options": {
        "A": "$6$",
        "B": "$-11$",
        "C": "$11$",
        "D": "$-6$"
      },
      "correctAnswer": "C",
      "explanation": "By Vieta's formulas for $x^3 + px^2 + qx + r = 0$, the sum of roots taken two at a time is $q$. Here $q = 11$."
    },
    {
      "id": "WAEC-SS3-QEP-009",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "When a polynomial $P(x)$ is divided by a quadratic divisor $D(x) = (x - 2)(x + 1)$, what is the maximum possible degree of the remainder?",
      "options": {
        "A": "$3$",
        "B": "$2$",
        "C": "$0$",
        "D": "$1$"
      },
      "correctAnswer": "D",
      "explanation": "The degree of the remainder is always strictly less than the degree of the divisor. For a quadratic divisor of degree $2$, the remainder has degree at most $1$ (linear form $Ax + B$)."
    },
    {
      "id": "WAEC-SS3-QEP-010",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "A polynomial $P(x)$ leaves a remainder of $3$ when divided by $(x - 1)$ and a remainder of $5$ when divided by $(x - 2)$. Find the remainder when $P(x)$ is divided by $(x - 1)(x - 2)$.",
      "options": {
        "A": "$2x + 1$",
        "B": "$x + 2$",
        "C": "$2x - 1$",
        "D": "$3x - 1$"
      },
      "correctAnswer": "A",
      "explanation": "Let remainder be $R(x) = Ax + B$. $P(1) = A(1) + B = 3$ and $P(2) = A(2) + B = 5$. Subtracting gives $A = 2$. Then $2 + B = 3 \\implies B = 1$. Thus $R(x) = 2x + 1$."
    },
    {
      "id": "WAEC-SS3-QEP-011",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $(2x - 1)$ is a factor of $4x^3 - 8x^2 + ax + 1$, find the value of $a$.",
      "options": {
        "A": "$-1$",
        "B": "$1$",
        "C": "$2$",
        "D": "$-2$"
      },
      "correctAnswer": "B",
      "explanation": "By Factor Theorem: $P(1/2) = 4(1/8) - 8(1/4) + a(1/2) + 1 = 1/2 - 2 + a/2 + 1 = a/2 - 1/2 = 0 \\implies a = 1$."
    },
    {
      "id": "WAEC-SS3-QEP-012",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "For what value of $c$ does the quadratic polynomial $x^2 + 4x + c$ have equal roots?",
      "options": {
        "A": "$16$",
        "B": "$2$",
        "C": "$4$",
        "D": "$8$"
      },
      "correctAnswer": "C",
      "explanation": "Equal roots require discriminant $\\Delta = b^2 - 4ac = 0 \\implies 4^2 - 4(1)(c) = 0 \\implies 16 - 4c = 0 \\implies c = 4$."
    },
    {
      "id": "WAEC-SS3-QEP-013",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $x = 2$ is a root of the equation $x^3 - 3x^2 - 4x + 12 = 0$, find the other two roots.",
      "options": {
        "A": "$x = -1 \\text{ and } 6$",
        "B": "$x = 2 \\text{ and } -3$",
        "C": "$x = 1 \\text{ and } -6$",
        "D": "$x = -2 \\text{ and } 3$"
      },
      "correctAnswer": "D",
      "explanation": "Divide by $(x - 2)$: $x^3 - 3x^2 - 4x + 12 = (x - 2)(x^2 - x - 6) = (x - 2)(x - 3)(x + 2) = 0$. The other two roots are $x = 3$ and $x = -2$."
    },
    {
      "id": "WAEC-SS3-PRB-001",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Two fair dice are thrown simultaneously. What is the probability that the sum of the two scores is $9$?",
      "options": {
        "A": "$\\frac{1}{9}$",
        "B": "$\\frac{5}{36}$",
        "C": "$\\frac{1}{6}$",
        "D": "$\\frac{1}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "Total possible outcomes $= 6 \\times 6 = 36$. Favourable outcomes yielding a sum of $9$ are $(3,6), (4,5), (5,4), (6,3)$, which gives $4$ pairs. Probability $= \\frac{4}{36} = \\frac{1}{9}$."
    },
    {
      "id": "WAEC-SS3-PRB-002",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Three fair coins are tossed together. Find the probability of obtaining at least two heads.",
      "options": {
        "A": "$\\frac{3}{8}$",
        "B": "$\\frac{1}{2}$",
        "C": "$\\frac{5}{8}$",
        "D": "$\\frac{1}{4}$"
      },
      "correctAnswer": "B",
      "explanation": "Sample space has $2^3 = 8$ outcomes. Favorable outcomes with at least two heads: HHH, HHT, HTH, THH ($4$ outcomes). Probability $= \\frac{4}{8} = \\frac{1}{2}$."
    },
    {
      "id": "WAEC-SS3-PRB-003",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A bag contains $5$ red balls and $4$ blue balls. If two balls are drawn at random one after another without replacement, find the probability that both are red.",
      "options": {
        "A": "$\\frac{5}{9}$",
        "B": "$\\frac{25}{81}$",
        "C": "$\\frac{5}{18}$",
        "D": "$\\frac{2}{9}$"
      },
      "correctAnswer": "C",
      "explanation": "Probability of 1st red $= \\frac{5}{9}$. Probability of 2nd red without replacement $= \\frac{4}{8}$. Joint probability $= \\frac{5}{9} \\times \\frac{4}{8} = \\frac{20}{72} = \\frac{5}{18}$."
    },
    {
      "id": "WAEC-SS3-PRB-004",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "From the same bag containing $5$ red and $4$ blue balls, two balls are drawn at random without replacement. What is the probability that they are of different colours?",
      "options": {
        "A": "$\\frac{1}{2}$",
        "B": "$\\frac{4}{9}$",
        "C": "$\\frac{20}{81}$",
        "D": "$\\frac{5}{9}$"
      },
      "correctAnswer": "D",
      "explanation": "$P(\\text{Red then Blue}) + P(\\text{Blue then Red}) = \\left(\\frac{5}{9} \\times \\frac{4}{8}\\right) + \\left(\\frac{4}{9} \\times \\frac{5}{8}\\right) = \\frac{20}{72} + \\frac{20}{72} = \\frac{40}{72} = \\frac{5}{9}$."
    },
    {
      "id": "WAEC-SS3-PRB-005",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "The probability that John hits a target is $\\frac{2}{3}$ and the probability that Mary hits the target is $\\frac{3}{4}$. If both shoot independently at the target, find the probability that at least one of them hits the target.",
      "options": {
        "A": "$\\frac{11}{12}$",
        "B": "$\\frac{1}{2}$",
        "C": "$\\frac{5}{12}$",
        "D": "$\\frac{7}{12}$"
      },
      "correctAnswer": "A",
      "explanation": "$P(\\text{at least one hits}) = 1 - P(\\text{both miss}) = 1 - \\left(1 - \\frac{2}{3}\\right)\\left(1 - \\frac{3}{4}\\right) = 1 - \\left(\\frac{1}{3} \\times \\frac{1}{4}\\right) = 1 - \\frac{1}{12} = \\frac{11}{12}$."
    },
    {
      "id": "WAEC-SS3-PRB-006",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Referring to the shooters in the previous question ($P(J) = \\frac{2}{3}, P(M) = \\frac{3}{4}$), find the probability that exactly one of them hits the target.",
      "options": {
        "A": "$\\frac{7}{12}$",
        "B": "$\\frac{5}{12}$",
        "C": "$\\frac{1}{2}$",
        "D": "$\\frac{1}{6}$"
      },
      "correctAnswer": "B",
      "explanation": "$P(J \\cap M') + P(J' \\cap M) = \\left(\\frac{2}{3} \\times \\frac{1}{4}\\right) + \\left(\\frac{1}{3} \\times \\frac{3}{4}\\right) = \\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}$."
    },
    {
      "id": "WAEC-SS3-PRB-007",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A card is drawn at random from a standard well-shuffled pack of $52$ playing cards. Find the probability of drawing a Queen or a Spade.",
      "options": {
        "A": "$\\frac{1}{4}$",
        "B": "$\\frac{17}{52}$",
        "C": "$\\frac{4}{13}$",
        "D": "$\\frac{5}{13}$"
      },
      "correctAnswer": "C",
      "explanation": "$n(\\text{Queens}) = 4$, $n(\\text{Spades}) = 13$, and $n(\\text{Queen of Spades}) = 1$. By the addition rule: $P(Q \\cup S) = \\frac{4 + 13 - 1}{52} = \\frac{16}{52} = \\frac{4}{13}$."
    },
    {
      "id": "WAEC-SS3-PRB-008",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A box contains $6$ black pens and $4$ blue pens. A pen is drawn at random, its colour recorded, and then replaced. A second pen is then drawn. Find the probability of drawing two blue pens.",
      "options": {
        "A": "$\\frac{6}{25}$",
        "B": "$\\frac{2}{15}$",
        "C": "$\\frac{2}{5}$",
        "D": "$\\frac{4}{25}$"
      },
      "correctAnswer": "D",
      "explanation": "Since the draw is with replacement: $P(\\text{Blue}) = \\frac{4}{10} = \\frac{2}{5}$. Probability of two blue pens $= \\frac{2}{5} \\times \\frac{2}{5} = \\frac{4}{25}$."
    },
    {
      "id": "WAEC-SS3-PRB-009",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If events $A$ and $B$ are mutually exclusive with $P(A) = 0.35$ and $P(B) = 0.45$, find $P(A \\cup B)$.",
      "options": {
        "A": "$0.80$",
        "B": "$0.1575$",
        "C": "$0.6425$",
        "D": "$0.10$"
      },
      "correctAnswer": "A",
      "explanation": "For mutually exclusive events, $P(A \\cap B) = 0$, so $P(A \\cup B) = P(A) + P(B) = 0.35 + 0.45 = 0.80$."
    },
    {
      "id": "WAEC-SS3-PRB-010",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "In a senior class, $60\\%$ of the students study Chemistry, $40\\%$ study Physics, and $24\\%$ study both. Find the probability that a student chosen at random studies Physics given that they study Chemistry.",
      "options": {
        "A": "$0.60$",
        "B": "$0.40$",
        "C": "$0.24$",
        "D": "$0.16$"
      },
      "correctAnswer": "B",
      "explanation": "By conditional probability: $P(\\text{Physics} \\mid \\text{Chemistry}) = \\frac{P(\\text{Physics} \\cap \\text{Chemistry})}{P(\\text{Chemistry})} = \\frac{0.24}{0.60} = 0.40$."
    },
    {
      "id": "WAEC-SS3-PRB-011",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "An integer is chosen at random from the set $\\{1, 2, 3, \\dots, 30\\}$. What is the probability that it is divisible by either $3$ or $5$?",
      "options": {
        "A": "$\\frac{1}{2}$",
        "B": "$\\frac{8}{15}$",
        "C": "$\\frac{7}{15}$",
        "D": "$\\frac{2}{5}$"
      },
      "correctAnswer": "C",
      "explanation": "Multiples of $3$: $30 \\div 3 = 10$. Multiples of $5$: $30 \\div 5 = 6$. Multiples of both ($15$): $30 \\div 15 = 2$. Count $= 10 + 6 - 2 = 14$. Probability $= \\frac{14}{30} = \\frac{7}{15}$."
    },
    {
      "id": "WAEC-SS3-PRB-012",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Two people are chosen at random. What is the probability that both were born on the same day of the week?",
      "options": {
        "A": "$\\frac{2}{7}$",
        "B": "$\\frac{1}{14}$",
        "C": "$\\frac{1}{49}$",
        "D": "$\\frac{1}{7}$"
      },
      "correctAnswer": "D",
      "explanation": "Whatever day the first person was born on, the probability that the second person was born on that exact same day is $\\frac{1}{7}$."
    },
    {
      "id": "WAEC-SS3-PRB-013",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A batch of $20$ solar inverters contains $4$ defective ones. If $2$ inverters are selected at random without replacement, find the probability that neither is defective.",
      "options": {
        "A": "$\\frac{12}{19}$",
        "B": "$\\frac{16}{25}$",
        "C": "$\\frac{3}{5}$",
        "D": "$\\frac{14}{19}$"
      },
      "correctAnswer": "A",
      "explanation": "Non-defective inverters $= 20 - 4 = 16$. Probability of two non-defective $= \\frac{16}{20} \\times \\frac{15}{19} = \\frac{4}{5} \\times \\frac{15}{19} = \\frac{12}{19}$."
    },
    {
      "id": "WAEC-SS3-PRB-014",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A fair die is rolled twice. What is the probability that the product of the two scores is an odd number?",
      "options": {
        "A": "$\\frac{1}{2}$",
        "B": "$\\frac{1}{4}$",
        "C": "$\\frac{3}{4}$",
        "D": "$\\frac{1}{6}$"
      },
      "correctAnswer": "B",
      "explanation": "The product of two integers is odd if and only if both numbers are odd. $P(\\text{odd}) = \\frac{3}{6} = \\frac{1}{2}$. Thus $P(\\text{both odd}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$."
    },
    {
      "id": "WAEC-SS3-PRB-015",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A committee of $3$ persons is to be chosen at random from $4$ men and $3$ women. Find the probability that the committee consists of $2$ men and $1$ woman.",
      "options": {
        "A": "$\\frac{4}{7}$",
        "B": "$\\frac{12}{35}$",
        "C": "$\\frac{18}{35}$",
        "D": "$\\frac{3}{7}$"
      },
      "correctAnswer": "C",
      "explanation": "Total combinations $= \\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$. Favorable ways $= \\binom{4}{2} \\times \\binom{3}{1} = 6 \\times 3 = 18$. Probability $= \\frac{18}{35}$."
    },
    {
      "id": "WAEC-SS3-PRB-016",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \\cup B) = 0.8$, find $P(A \\cap B)$.",
      "options": {
        "A": "$0.1$",
        "B": "$0.2$",
        "C": "$0.4$",
        "D": "$0.3$"
      },
      "correctAnswer": "D",
      "explanation": "Using $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\implies 0.8 = 0.6 + 0.5 - P(A \\cap B) \\implies P(A \\cap B) = 1.1 - 0.8 = 0.3$."
    },
    {
      "id": "WAEC-SS3-MTX-001",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $A = \\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 & 5 \\\\ -2 & 0 \\end{pmatrix}$, find the matrix $2A - B$.",
      "options": {
        "A": "$\\begin{pmatrix} 3 & -7 \\\\ 8 & 8 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 3 & 3 \\\\ 4 & 8 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 5 & 3 \\\\ 1 & 8 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 1 & -6 \\\\ 5 & 4 \\end{pmatrix}$"
      },
      "correctAnswer": "A",
      "explanation": "$2A = \\begin{pmatrix} 4 & -2 \\\\ 6 & 8 \\end{pmatrix}$. Then $2A - B = \\begin{pmatrix} 4-1 & -2-5 \\\\ 6-(-2) & 8-0 \\end{pmatrix} = \\begin{pmatrix} 3 & -7 \\\\ 8 & 8 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MTX-002",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the matrix product $PQ$ if $P = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $Q = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$.",
      "options": {
        "A": "$\\begin{pmatrix} 2 & 0 \\\\ 3 & 12 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 4 & 0 \\\\ 10 & 12 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 2 & 6 \\\\ 7 & 12 \\end{pmatrix}$"
      },
      "correctAnswer": "B",
      "explanation": "$PQ = \\begin{pmatrix} 1(2)+2(1) & 1(0)+2(3) \\\\ 3(2)+4(1) & 3(0)+4(3) \\end{pmatrix} = \\begin{pmatrix} 2+2 & 0+6 \\\\ 6+4 & 0+12 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MTX-003",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Evaluate the determinant of the matrix $\\begin{pmatrix} 5 & 3 \\\\ 2 & 4 \\end{pmatrix}$.",
      "options": {
        "A": "$10$",
        "B": "$26$",
        "C": "$14$",
        "D": "$20$"
      },
      "correctAnswer": "C",
      "explanation": "$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc = 5(4) - 3(2) = 20 - 6 = 14$."
    },
    {
      "id": "WAEC-SS3-MTX-004",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If the matrix $\\begin{pmatrix} x & 6 \\\\ 2 & 3 \\end{pmatrix}$ is singular, find the value of $x$.",
      "options": {
        "A": "$2$",
        "B": "$6$",
        "C": "$3$",
        "D": "$4$"
      },
      "correctAnswer": "D",
      "explanation": "A matrix is singular if its determinant is zero: $3x - (6)(2) = 0 \\implies 3x - 12 = 0 \\implies 3x = 12 \\implies x = 4$."
    },
    {
      "id": "WAEC-SS3-MTX-005",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the inverse of the matrix $M = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$.",
      "options": {
        "A": "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} -2 & 1 \\\\ 5 & -3 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\det(M) = 3(2) - 1(5) = 6 - 5 = 1$. The adjugate is $\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$. Thus $M^{-1} = \\frac{1}{1}\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MTX-006",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the inverse of $A = \\begin{pmatrix} 4 & 2 \\\\ 3 & 2 \\end{pmatrix}$.",
      "options": {
        "A": "$\\begin{pmatrix} 2 & -2 \\\\ -3 & 4 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 1 & -1 \\\\ -\\frac{3}{2} & 2 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} -1 & 1 \\\\ \\frac{3}{2} & -2 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 1 & 1 \\\\ \\frac{3}{2} & 2 \\end{pmatrix}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\det(A) = 4(2) - 2(3) = 8 - 6 = 2$. $A^{-1} = \\frac{1}{2} \\begin{pmatrix} 2 & -2 \\\\ -3 & 4 \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -\\frac{3}{2} & 2 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MTX-007",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Using matrix methods, solve the system $\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix}$.",
      "options": {
        "A": "$x = 1,\\ y = 5$",
        "B": "$x = 3,\\ y = 2$",
        "C": "$x = 2,\\ y = 3$",
        "D": "$x = 4,\\ y = -1$"
      },
      "correctAnswer": "C",
      "explanation": "$\\det = 2(3) - 1(1) = 5$. Inverse $= \\frac{1}{5} \\begin{pmatrix} 3 & -1 \\\\ -1 & 2 \\end{pmatrix}$. $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\frac{1}{5} \\begin{pmatrix} 3 & -1 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix} = \\frac{1}{5} \\begin{pmatrix} 21 - 11 \\\\ -7 + 22 \\end{pmatrix} = \\frac{1}{5} \\begin{pmatrix} 10 \\\\ 15 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MTX-008",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "For any two conformable matrices $A$ and $B$, the transpose of their product $(AB)^T$ is equal to:",
      "options": {
        "A": "$A B^T$",
        "B": "$A^T B^T$",
        "C": "$(BA)^T$",
        "D": "$B^T A^T$"
      },
      "correctAnswer": "D",
      "explanation": "The reversal law for transposes states that $(AB)^T = B^T A^T$."
    },
    {
      "id": "WAEC-SS3-MTX-009",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $A$ is a $2 \\times 2$ matrix with $\\det(A) = 5$, find $\\det(3A)$.",
      "options": {
        "A": "$45$",
        "B": "$15$",
        "C": "$30$",
        "D": "$125$"
      },
      "correctAnswer": "A",
      "explanation": "For an $n \\times n$ matrix, $\\det(kA) = k^n \\det(A)$. Here $n = 2$ and $k = 3$, so $\\det(3A) = 3^2 \\det(A) = 9 \\times 5 = 45$."
    },
    {
      "id": "WAEC-SS3-MTX-010",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $M = \\begin{pmatrix} 2 & x - 1 \\\\ 5 & 3 \\end{pmatrix}$ is a symmetric matrix, find the value of $x$.",
      "options": {
        "A": "$4$",
        "B": "$6$",
        "C": "$5$",
        "D": "$-4$"
      },
      "correctAnswer": "B",
      "explanation": "A matrix is symmetric if $M = M^T$, which means off-diagonal entries are equal: $x - 1 = 5 \\implies x = 6$."
    },
    {
      "id": "WAEC-SS3-MTX-011",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $\\det(A) = 4$ and $\\det(B) = -3$, evaluate $\\det(AB)$.",
      "options": {
        "A": "$-1$",
        "B": "$12$",
        "C": "$-12$",
        "D": "$1$"
      },
      "correctAnswer": "C",
      "explanation": "By the multiplicative property of determinants: $\\det(AB) = \\det(A) \\times \\det(B) = 4 \\times (-3) = -12$."
    },
    {
      "id": "WAEC-SS3-MTX-012",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Evaluate the determinant of $\\begin{pmatrix} -3 & -2 \\\\ 4 & 5 \\end{pmatrix}$.",
      "options": {
        "A": "$23$",
        "B": "$-23$",
        "C": "$7$",
        "D": "$-7$"
      },
      "correctAnswer": "D",
      "explanation": "$\\det = (-3)(5) - (-2)(4) = -15 - (-8) = -15 + 8 = -7$."
    },
    {
      "id": "WAEC-SS3-MTX-013",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the positive value of $x$ if $\\det \\begin{pmatrix} 2x & 1 \\\\ 4 & x \\end{pmatrix} = 14$.",
      "options": {
        "A": "$3$",
        "B": "$9$",
        "C": "$\\sqrt{7}$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\det = (2x)(x) - (1)(4) = 2x^2 - 4$. Setting equal to $14$: $2x^2 - 4 = 14 \\implies 2x^2 = 18 \\implies x^2 = 9 \\implies x = 3$ (positive value)."
    },
    {
      "id": "WAEC-SS3-MTX-014",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $\\det(A) = 8$, find $\\det(A^{-1})$.",
      "options": {
        "A": "$-8$",
        "B": "$\\frac{1}{8}$",
        "C": "$8$",
        "D": "$64$"
      },
      "correctAnswer": "B",
      "explanation": "Since $A A^{-1} = I$, $\\det(A)\\det(A^{-1}) = \\det(I) = 1 \\implies \\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{8}$."
    },
    {
      "id": "WAEC-SS3-MTX-015",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Given that $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$, find $A^3$.",
      "options": {
        "A": "$\\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 8 & 0 \\\\ 0 & 8 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 16 & 0 \\\\ 0 & 16 \\end{pmatrix}$"
      },
      "correctAnswer": "C",
      "explanation": "Notice $A = 2I$. Thus $A^3 = (2I)^3 = 2^3 I^3 = 8I = \\begin{pmatrix} 8 & 0 \\\\ 0 & 8 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MTX-016",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$, find the transpose $A^T$.",
      "options": {
        "A": "$\\begin{pmatrix} -1 & -3 \\\\ -2 & -4 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 4 & -3 \\\\ -2 & 1 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$"
      },
      "correctAnswer": "D",
      "explanation": "The transpose swaps rows and columns: first row $(1, 3)$ becomes first column, and second row $(2, 4)$ becomes second column: $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-CAL-001",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Find $\\frac{dy}{dx}$ if $y = 4x^3 - 5x^2 + 7x - 2$.",
      "options": {
        "A": "$12x^2 - 10x + 7$",
        "B": "$12x^2 - 10x$",
        "C": "$12x^2 - 5x + 7$",
        "D": "$4x^2 - 10x + 7$"
      },
      "correctAnswer": "A",
      "explanation": "Using the power rule $\\frac{d}{dx}(ax^n) = anx^{n-1}$: $\\frac{dy}{dx} = 4(3x^2) - 5(2x) + 7(1) - 0 = 12x^2 - 10x + 7$."
    },
    {
      "id": "WAEC-SS3-CAL-002",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Find the derivative of $y = 3\\sqrt{x}$ with respect to $x$.",
      "options": {
        "A": "$\\frac{3}{2}x^{\\frac{3}{2}}$",
        "B": "$\\frac{3}{2\\sqrt{x}}$",
        "C": "$\\frac{3}{\\sqrt{x}}$",
        "D": "$\\frac{6}{\\sqrt{x}}$"
      },
      "correctAnswer": "B",
      "explanation": "$y = 3x^{1/2} \\implies \\frac{dy}{dx} = 3\\left(\\frac{1}{2}\\right)x^{1/2 - 1} = \\frac{3}{2}x^{-1/2} = \\frac{3}{2\\sqrt{x}}$."
    },
    {
      "id": "WAEC-SS3-CAL-003",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Differentiate $y = \\frac{4}{x^2}$ with respect to $x$.",
      "options": {
        "A": "$\\frac{8}{x^3}$",
        "B": "$-\\frac{4}{x^3}$",
        "C": "$-\\frac{8}{x^3}$",
        "D": "$-\\frac{8}{x}$"
      },
      "correctAnswer": "C",
      "explanation": "$y = 4x^{-2} \\implies \\frac{dy}{dx} = 4(-2x^{-3}) = -8x^{-3} = -\\frac{8}{x^3}$."
    },
    {
      "id": "WAEC-SS3-CAL-004",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Find the gradient of the curve $y = 2x^2 - 3x + 1$ at the point where $x = 2$.",
      "options": {
        "A": "$7$",
        "B": "$8$",
        "C": "$3$",
        "D": "$5$"
      },
      "correctAnswer": "D",
      "explanation": "$\\frac{dy}{dx} = 4x - 3$. At $x = 2$, the gradient $m = 4(2) - 3 = 8 - 3 = 5$."
    },
    {
      "id": "WAEC-SS3-CAL-005",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Find the equation of the tangent to the curve $y = x^2 - 4x + 3$ at the point where $x = 3$.",
      "options": {
        "A": "$y = 2x - 6$",
        "B": "$y = 2x - 3$",
        "C": "$y = -2x + 6$",
        "D": "$y = x - 3$"
      },
      "correctAnswer": "A",
      "explanation": "When $x = 3$, $y = 3^2 - 4(3) + 3 = 9 - 12 + 3 = 0$. The derivative is $\\frac{dy}{dx} = 2x - 4$. At $x = 3$, $m = 2(3) - 4 = 2$. Equation of tangent: $y - 0 = 2(x - 3) \\implies y = 2x - 6$."
    },
    {
      "id": "WAEC-SS3-CAL-006",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Differentiate $(3x - 2)^4$ with respect to $x$.",
      "options": {
        "A": "$4(3x - 2)^3$",
        "B": "$12(3x - 2)^3$",
        "C": "$3(3x - 2)^3$",
        "D": "$12(3x - 2)^4$"
      },
      "correctAnswer": "B",
      "explanation": "By the chain rule: $\\frac{d}{dx}[(3x - 2)^4] = 4(3x - 2)^3 \\times \\frac{d}{dx}(3x - 2) = 4(3x - 2)^3 \\times 3 = 12(3x - 2)^3$."
    },
    {
      "id": "WAEC-SS3-CAL-007",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Find the derivative of $y = x^2(2x + 1)$ with respect to $x$.",
      "options": {
        "A": "$6x^2 + 1$",
        "B": "$4x^2 + 2x$",
        "C": "$6x^2 + 2x$",
        "D": "$2x^2 + 2x$"
      },
      "correctAnswer": "C",
      "explanation": "Expanding first: $y = 2x^3 + x^2 \\implies \\frac{dy}{dx} = 6x^2 + 2x$."
    },
    {
      "id": "WAEC-SS3-CAL-008",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Find the coordinates of the turning point of the curve $y = x^2 - 6x + 5$.",
      "options": {
        "A": "$(6,\\ 5)$",
        "B": "$(-3,\\ 32)$",
        "C": "$(3,\\ 4)$",
        "D": "$(3,\\ -4)$"
      },
      "correctAnswer": "D",
      "explanation": "Set $\\frac{dy}{dx} = 0 \\implies 2x - 6 = 0 \\implies x = 3$. At $x = 3$, $y = 3^2 - 6(3) + 5 = 9 - 18 + 5 = -4$. Coordinates are $(3, -4)$."
    },
    {
      "id": "WAEC-SS3-CAL-009",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Find the maximum value of the function $y = 4x - x^2$.",
      "options": {
        "A": "$4$",
        "B": "$2$",
        "C": "$8$",
        "D": "$0$"
      },
      "correctAnswer": "A",
      "explanation": "$\\frac{dy}{dx} = 4 - 2x = 0 \\implies x = 2$. Second derivative $\\frac{d^2y}{dx^2} = -2 < 0$, confirming a maximum. Maximum value is $y(2) = 4(2) - 2^2 = 8 - 4 = 4$."
    },
    {
      "id": "WAEC-SS3-CAL-010",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "The displacement $s$ (in metres) of a particle after $t$ seconds is $s = 2t^3 - 9t^2 + 12t$. Find the velocity of the particle when $t = 2\\text{ seconds}$.",
      "options": {
        "A": "$6\\text{ m/s}$",
        "B": "$0\\text{ m/s}$",
        "C": "$12\\text{ m/s}$",
        "D": "$-6\\text{ m/s}$"
      },
      "correctAnswer": "B",
      "explanation": "Velocity $v = \\frac{ds}{dt} = 6t^2 - 18t + 12$. At $t = 2$: $v = 6(2^2) - 18(2) + 12 = 24 - 36 + 12 = 0\\text{ m/s}$."
    },
    {
      "id": "WAEC-SS3-CAL-011",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Evaluate the indefinite integral $\\int (6x^2 - 4x + 3)\\, dx$.",
      "options": {
        "A": "$3x^3 - 2x^2 + 3x + C$",
        "B": "$12x - 4 + C$",
        "C": "$2x^3 - 2x^2 + 3x + C$",
        "D": "$2x^3 - 4x^2 + 3x + C$"
      },
      "correctAnswer": "C",
      "explanation": "Integrating term by term: $\\int 6x^2\\,dx = \\frac{6x^3}{3} = 2x^3$; $\\int -4x\\,dx = -\\frac{4x^2}{2} = -2x^2$; $\\int 3\\,dx = 3x$. Adding constant $C$ gives $2x^3 - 2x^2 + 3x + C$."
    },
    {
      "id": "WAEC-SS3-CAL-012",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Evaluate the definite integral $\\int_1^2 (6x^2 - 4x + 3)\\, dx$.",
      "options": {
        "A": "$15$",
        "B": "$9$",
        "C": "$13$",
        "D": "$11$"
      },
      "correctAnswer": "D",
      "explanation": "$\\int (6x^2 - 4x + 3)\\,dx = [2x^3 - 2x^2 + 3x]_1^2 = (2(8) - 2(4) + 3(2)) - (2(1) - 2(1) + 3(1)) = (16 - 8 + 6) - 3 = 14 - 3 = 11$."
    },
    {
      "id": "WAEC-SS3-CAL-013",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Evaluate $\\int \\frac{1}{\\sqrt{x}}\\, dx$.",
      "options": {
        "A": "$2\\sqrt{x} + C$",
        "B": "$\\frac{1}{2\\sqrt{x}} + C$",
        "C": "$\\sqrt{x} + C$",
        "D": "$\\frac{2}{3}x^{\\frac{3}{2}} + C$"
      },
      "correctAnswer": "A",
      "explanation": "$\\int x^{-1/2}\\,dx = \\frac{x^{-1/2 + 1}}{-1/2 + 1} + C = \\frac{x^{1/2}}{1/2} + C = 2\\sqrt{x} + C$."
    },
    {
      "id": "WAEC-SS3-CAL-014",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "Find the area enclosed by the curve $y = 3x^2$, the $x$-axis, and the lines $x = 0$ and $x = 2$.",
      "options": {
        "A": "$12\\text{ square units}$",
        "B": "$8\\text{ square units}$",
        "C": "$6\\text{ square units}$",
        "D": "$4\\text{ square units}$"
      },
      "correctAnswer": "B",
      "explanation": "$\\text{Area} = \\int_0^2 3x^2\\, dx = [x^3]_0^2 = 2^3 - 0 = 8\\text{ square units}$."
    },
    {
      "id": "WAEC-SS3-CAL-015",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "If $\\int_0^k 2x\\, dx = 9$, where $k > 0$, find the value of $k$.",
      "options": {
        "A": "$\\frac{9}{2}$",
        "B": "$9$",
        "C": "$3$",
        "D": "$\\sqrt{3}$"
      },
      "correctAnswer": "C",
      "explanation": "$\\int_0^k 2x\\, dx = [x^2]_0^k = k^2 - 0 = k^2$. Since $k^2 = 9$ and $k > 0$, $k = 3$."
    },
    {
      "id": "WAEC-SS3-CAL-016",
      "class": "SSS 3",
      "topic": "Calculus (Differentiation & Integration)",
      "question": "The velocity of a particle is given by $v(t) = 3t^2 - 4t + 5\\text{ m/s}$. Find its acceleration at $t = 3\\text{ seconds}$.",
      "options": {
        "A": "$18\\text{ m/s}^2$",
        "B": "$20\\text{ m/s}^2$",
        "C": "$10\\text{ m/s}^2$",
        "D": "$14\\text{ m/s}^2$"
      },
      "correctAnswer": "D",
      "explanation": "Acceleration is the derivative of velocity: $a(t) = \\frac{dv}{dt} = 6t - 4$. At $t = 3$: $a(3) = 6(3) - 4 = 18 - 4 = 14\\text{ m/s}^2$."
    }
  ]
};

  // ── Helpers ──────────────────────────────────────────────────────────────

  function normalizeSeniorClass(className) {
    if (!className) return null;
    var str = String(className).trim().toUpperCase();
    if (str.indexOf('SSS 1') !== -1 || str.indexOf('SS 1') !== -1 || str.indexOf('SSS1') !== -1 || str.indexOf('SS1') !== -1) return 'SSS 1';
    if (str.indexOf('SSS 2') !== -1 || str.indexOf('SS 2') !== -1 || str.indexOf('SSS2') !== -1 || str.indexOf('SS2') !== -1) return 'SSS 2';
    if (str.indexOf('SSS 3') !== -1 || str.indexOf('SS 3') !== -1 || str.indexOf('SSS3') !== -1 || str.indexOf('SS3') !== -1) return 'SSS 3';
    return null;
  }

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /**
   * Get exactly `count` random questions from the bank for the given class.
   * @param {string} className  e.g. 'SSS 1 Science', 'SSS 2', 'SSS 3'
   * @param {number} count  default 40
   * @returns {Array}
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

    return selected.map(function (q, index) {
      return {
        number: index + 1,
        id: q.id,
        class: q.class,
        topic: q.topic,
        question: q.question,
        options: { A: q.options.A, B: q.options.B, C: q.options.C, D: q.options.D },
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      };
    });
  }

  if (typeof window !== 'undefined') {
    window.CBT_QUESTION_BANK = CBT_BANK;
    window.CBT_HELPERS = {
      normalizeSeniorClass: normalizeSeniorClass,
      getRandomExamQuestions: getRandomExamQuestions,
      shuffleArray: shuffleArray
    };
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CBT_BANK: CBT_BANK, normalizeSeniorClass: normalizeSeniorClass, getRandomExamQuestions: getRandomExamQuestions };
  }
})();
