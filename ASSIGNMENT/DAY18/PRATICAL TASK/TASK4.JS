function gradeAndRemark(marks, maxPerSubject = 100) {
  const totalMax = maxPerSubject * marks.length;
  const total = marks.reduce((a, b) => a + b, 0);
  const pct = totalMax ? (total / totalMax) * 100 : 0;

  const passThreshold = Math.max(40, Math.round(maxPerSubject * 0.4));
  const allPass = marks.every(m => m >= passThreshold);

  const grade =
    pct >= 90 ? "A+" :
    pct >= 80 ? "A"  :
    pct >= 70 ? "B+" :
    pct >= 60 ? "B"  :
    pct >= 50 ? "C"  :
    pct >= 40 ? "D"  : "F";

  const remark = allPass
    ? ({
        "A+": "Outstanding performance—consistent excellence.",
        "A":  "Excellent work—strong grasp of concepts.",
        "B+": "Very good—keep pushing deeper.",
        "B":  "Good—strengthen weaker areas.",
        "C":  "Fair—revise regularly.",
        "D":  "Pass—focus on basics."
      }[grade] || "Insufficient—targeted practice needed.")
    : "Needs improvement—one or more subjects below pass threshold.";

  return { total, totalMax, percentage: +pct.toFixed(2), grade, allPass, remark };
}

// Example:
console.log(gradeAndRemark([78, 88, 69, 74, 92], 100));
