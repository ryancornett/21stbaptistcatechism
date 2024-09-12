async function fetchJsonData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const jsonData = await response.json();
        return jsonData;
        
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

const container = document.querySelector('.container');
async function getData() {
    const url = '21stBC.json';
    const jsonData = await fetchJsonData(url);
    
    let content = jsonData.data;
    const NUMBER_OF_QUESTIONS_UPDATED = 59;

    for (let i = 1; i <= NUMBER_OF_QUESTIONS_UPDATED; i++) {
        displayItem(container, content, i);
    }
    comingSoon.textContent = `Questions ${NUMBER_OF_QUESTIONS_UPDATED + 1}-114 coming soon.`;
}

getData();

function displayItem(container, data, key) {
  let question = document.createElement('h4');
  question.textContent = `${key}. `;
  question.textContent += data[key].question;
  container.appendChild(question);

  let answer = document.createElement('h5');
  answer.textContent = "A. ";
  let references = document.createElement('div');
  references.classList.add('references');

  for (let i = 0; i < data[key].answer.length; i++) {
    let phrase = document.createElement('span');
    phrase.textContent += data[key].answer[i].text;
    let footnote = document.createElement('sup');
    footnote.classList.add('footnote-number');
    footnote.textContent = i + 1;
    phrase.appendChild(footnote);

    let referenceNumber = document.createElement('sup');
    referenceNumber.classList.add('reference-list-number');
    referenceNumber.textContent += i + 1;
    let referenceLine = document.createElement('span');
    references.appendChild(referenceNumber);

    let first = 0;
    let separator = document.createElement('span');
    separator.textContent = ", ";
    data[key].answer[i].references.forEach(ref => {
        if (first != 0) { referenceLine.appendChild(separator); }
        referenceLine.textContent += ref;
        first = 1;
    })
    answer.appendChild(phrase);
    references.appendChild(referenceLine);
  };
  container.appendChild(answer);
  container.appendChild(references);
}

const comingSoon = document.getElementById('coming-soon');