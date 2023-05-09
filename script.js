//Define the variables to be used

const textArea = document.querySelector(".text-area");
const messageTitle = document.querySelector("#message-title");
const messageParagraph = document.querySelector("#paragraph");
const messageCopy = document.querySelector(".copy");
const dollImage = document.querySelector("#doll");

//Creation of an array with the keys used for encryption and decryption
const matrixCode = [  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

//Creation of the function to encrypt text with lowercase letters
// and without accensts or special characters.
function encryptText(text) {
  let encryptedText = text.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    encryptedText = encryptedText.replaceAll(matrixCode[i][0], matrixCode[i][1]);
  }

  return encryptedText;
}

//Creation of the function to decrypt text with lowercase letters
function decryptText(text) {
  let decryptedText = text.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    decryptedText = decryptedText.replaceAll(matrixCode[i][1], matrixCode[i][0]);
  }

  return decryptedText;
}

//Creation function to conect the buttons
function btnEncrypt() {
  const textToEncrypt = textArea.value.trim();

  if (!textToEncrypt) {
    messageTitle.textContent = "No text to encrypt";
    messageParagraph.textContent = "Please enter some text to encrypt.";
    dollImage.style.display = "block";
    return;
  }

  const encryptedText = encryptText(textToEncrypt);
  messageTitle.textContent = "Encrypted Text";
  messageParagraph.textContent = encryptedText;
  textArea.value = "";
  dollImage.src = "imagenes/diamod.png";
}

function btnDecrypt() {
  const textToDecrypt = textArea.value.trim();

  if (!textToDecrypt) {
    messageTitle.textContent = "No text to decrypt";
    messageParagraph.textContent = "Please enter some text to decrypt.";
    dollImage.style.display = "block";
    return;
  }

  const decryptedText = decryptText(textToDecrypt);
  messageTitle.textContent = "Decrypted Text";
  messageParagraph.textContent = decryptedText;
  textArea.value = "";
  dollImage.src = "imagenes/diamod.png";
}
//Creation of function for text copy event.
function btnCopy() {
  const textToCopy = messageParagraph.textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Text copied to clipboard!");
  });
}

messageCopy.addEventListener("click", btnCopy);