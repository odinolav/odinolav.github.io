var trialData = {};

function downloadOnPage(text, name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}

function readFile(fileInput) {
  if (!fileInput.files)
    return;
  let file = fileInput.files[0];
  let reader = new FileReader();
  reader.onload = (e) => {
    let contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  document.getElementById('out').textContent = contents;
}

window.onload = () => {
  initializeTimer();
}

function activefy(self) {
  self.classList.add('active');
  console.log(self);
}
