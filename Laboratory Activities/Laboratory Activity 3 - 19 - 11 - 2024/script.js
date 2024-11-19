
const textInput = document.getElementById("textInput");
const wordCountElement = document.getElementById("wordcount");
const sentenceCountElement = document.getElementById("sentenceCount");


textInput.addEventListener("input", () => {
    const text = textInput.value.trim();

    
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

   
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;

    
    wordCountElement.children[1].textContent = wordCount; 
    sentenceCountElement.children[1].textContent = sentenceCount; 
});
