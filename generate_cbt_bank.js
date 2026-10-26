// Script to combine SS1, SS2, SS3 questions into js/cbt-questions.js with balanced options
const fs = require('fs');
const path = require('path');

const ss1 = require('./build_cbt_ss1.js');
const ss2 = require('./build_cbt_ss2.js');
const ss3 = require('./build_cbt_ss3.js');

console.log(`Loaded: SS1=${ss1.length}, SS2=${ss2.length}, SS3=${ss3.length}`);

// Balanced non-repeating pattern for answer placement
const PATTERN = ['B', 'C', 'A', 'D', 'C', 'A', 'D', 'B', 'D', 'B', 'C', 'A', 'A', 'D', 'B', 'C'];
const LETTERS = ['A', 'B', 'C', 'D'];

function prepareBank(questions, offset) {
  offset = offset || 0;
  return questions.map((q, idx) => {
    const origCorrectVal = q.options[q.correctAnswer];
    const otherVals = LETTERS.filter(l => l !== q.correctAnswer).map(l => q.options[l]);

    const targetSlot = PATTERN[(idx + offset) % PATTERN.length];
    const newOptions = {};
    newOptions[targetSlot] = origCorrectVal;

    const remainingSlots = LETTERS.filter(l => l !== targetSlot);
    remainingSlots.forEach((slot, i) => {
      newOptions[slot] = otherVals[i];
    });

    return {
      id: q.id,
      class: q.class,
      topic: q.topic,
      question: q.question,
      options: newOptions,
      correctAnswer: targetSlot,
      explanation: q.explanation
    };
  });
}

const bank = {
  "SSS 1": prepareBank(ss1, 0),
  "SSS 2": prepareBank(ss2, 3),
  "SSS 3": prepareBank(ss3, 7)
};

const outputContent = `/**
 * RichVine College - Computer Based Test (CBT) Question Bank
 * Total: 300 Curated Standard WAEC Mathematics Questions (100 for SSS 1, 100 for SSS 2, 100 for SSS 3)
 * Rigorous LaTeX Mathematical Notation with Step-by-Step Solutions
 * Sampled: Exactly 40 multiple-choice questions randomized per student test session.
 */

(function () {
  'use strict';

  var CBT_BANK = ${JSON.stringify(bank, null, 2)};

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
`;

fs.writeFileSync(path.join(__dirname, 'js', 'cbt-questions.js'), outputContent, 'utf8');
console.log('Successfully wrote js/cbt-questions.js');
