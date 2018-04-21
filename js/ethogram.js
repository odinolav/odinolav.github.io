const trashicon = `<span><img src="../img/trash.png"></span>`;

class Ethogram {

  constructor() {
    this.rows = [];
    this.current_id = 0;
  }

  addRow(newEthoRow) {
    this.rows.push(newEthoRow);
  }

  size() {
    return this.rows.length;
  }

  deleteRow(index) {
    if (index > -1)
      this.rows.splice(index, 1);
  }

  getKeys() {
    let keys = [];
    for (let r of this.rows) {
      keys.push(r.character);
    }
    console.log(keys);
    return keys;
  }

  updateModel() {
    var table = document.getElementsByTagName('table')[0];
    table.innerHTML = `<tr>
      <th>Key</th>
      <th>Name</th>
      <th>Description</th>
      <th></th>
    </tr>
    <tr>
      <td><input id="key" type="text" maxlength="1"></td>
      <td><input id="name" type="text" maxlength="30"></td>
      <td><input id="desc" type="text" maxlength="300"></td>
      <td id="plus"></td>
    </tr>`;

    var addRow = () => {
      let key = document.getElementById('key').value;
      let name = document.getElementById('name').value;
      let desc = document.getElementById('desc').value;

      if (name) {
        if (!ethogram.getKeys().includes(key)) {
          this.addRow(new EthoRow(key, name, desc));
          this.updateModel();
        }
      }
    }

    let plusButton = document.getElementById('plus');
    table.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
      if (key === 13) { // Enter key
        addRow();
      }
    });

    plusButton.addEventListener("click", () => {addRow()});

    for (let r of this.rows) {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        cell1.innerHTML = r.character;
        cell2.innerHTML = r.name;
        cell3.innerHTML = r.description;
        cell4.innerHTML = trashicon;

        let trashButton = row.getElementsByTagName("img")[0];
        row.addEventListener("mouseenter", (event) => {
          row.getElementsByTagName("img")[0].style.visibility = "visible";
        });
        trashButton.addEventListener("mouseenter", (event) => {
          trashButton.src = '../img/trash_open.png';
        });
        trashButton.addEventListener("mouseleave", (event) => {
          trashButton.src = '../img/trash.png';
        });
        trashButton.addEventListener("click", (event) => {
          console.log(row.rowIndex);
          this.deleteRow(row.rowIndex - 2);
          table.deleteRow(row.rowIndex);
          console.log(this.rows);
        });

        row.addEventListener("mouseleave", (event) => {
          row.getElementsByTagName("img")[0].style.visibility = "hidden";
        });
    }
  }
}

class EthoRow {
  constructor(character, name, description) {
    this.character = character;
    this.name = name;
    this.description = description;
  }
}

var ethogram;

window.onload = () => {

  let plus = document.getElementById("plus");

  ethogram = new Ethogram();
  ethogram.addRow(new EthoRow("A", "Running", "Using legs to move real quick"));
  ethogram.addRow(new EthoRow("B", "Jumping", "Propelling the body up in the air"));
  ethogram.updateModel();
}
