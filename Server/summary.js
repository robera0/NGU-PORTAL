
const summaries = [];

function addSummary(filename, summaryText) {
  const newSummary = {
    id: summaries.length + 1,
    filename,
    summary: summaryText,
  };
  summaries.push(newSummary);
  return newSummary;
}

function getAllSummaries() {
  return summaries;
}


export default { addSummary, getAllSummaries }