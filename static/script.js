
async function callAI(action) {
  const notes = document.getElementById("notes").value;
  const outputDiv = document.getElementById("output");
  outputDiv.innerText = "Thinking...";

  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ notes, action })
    });
    const data = await response.json();
    outputDiv.innerText = data.result || data.error;
  } catch (err) {
    outputDiv.innerText = "Error connecting to server.";
  }
}

// Map your existing buttons to call the function
function generateSummary() { callAI('summary'); }
function generateQuiz() { callAI('quiz'); }
function generateFlashcards() { callAI('flashcards'); }
