# The 21st Century Baptist Catechism
(hereafter referred to as **t21cBC**)
## Based on The Baptist Catechism 1695. Also known as Keach's Catechism.
Language modernized by Ryan Cornett

### Meta Object Notes

Contains *title*, *revisedBy*, *original*, and *licensing* key:string pairs, plus...

**Topical Index** An object with the topics of focus in t21cBC in alphabetical order as the keys, and an array of integers that represent the question numbers associated with the topic as the values.
```
const topics = data.meta.topicalIndex;
```

**Endorsers** An array of objects containing the following keys:
1. name (string) *The name of one who endorses this update of The Baptist Catechism.*
2. titles (array of strings) *The endorser's titles at the time of their endorsement.*
3. organizations (array of strings) *Organization(s) with which the endorser was formally affiliated at the time of their endorsement.*
4. date (string mm/dd/yyyy) *The date of their endorsement.*
```
const endorsers = data.meta.endorsers;
```

**Changelog** An array of objects containing the following keys:
1. date (string mm/dd/yyyy) *The date of the change(s) recorded.*
2. questions (array of integers) *The question(s) affected by the change recorded.*
3. notes (array of strings) *Details about the change recorded.* 
```
const changelog = data.meta.changelog;
```
### Questions & Answers

In the data object, catechism question numbers are the keys representing each corresponding question from 1-114:
```
const question13 = data.data["13"];
```
Each value in the data object is constructed like so:
```
"13": {
        "question": "How did God create man?",
        "answer": [
            {
                "text": "God created man: male and female; in His image; in knowledge, righteousness, and holiness; with dominion over creatures.",
                "references": [
                    "Genesis 1:26-28", "Colossians 3:10", "Ephesians 4:24"
                ]
            }
        ],
        "topics": [
            "Humanity", "God"
        ],
        "originalQuestion": "How did God create man?",
        "originalAnswer": "God created man, male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over the creatures."
}
```
1. question (string)
2. answer (array of objects) *Each object represents a section with its own designated Scripture references.*
    1. text (string)
    2. references (array of strings)
3. topics (array of strings) *Each question and answer have at least one topical category, with the first listed being the main topic*
4. originalQuestion (string) *The corresponding question from the 1695 original*
5. originalAnswer (string) *The corresponding answer from the 1695 original*

### Question #65 Quirk
In the third scripture reference array for the answer to #65, the proof is not from a verse but from the Psalm title supplied by ancient Hebrew editors. This is noted in that reference array as **"Psalm 92 (Hebrew Title)"**.