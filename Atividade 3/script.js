let count = 0;

    const counterDisplay = document.getElementById("counter");
    const incrementBtn = document.getElementById("increment");
    const decrementBtn = document.getElementById("decrement");

    incrementBtn.onclick = () => {
      count++;
      counterDisplay.textContent = count;
    };

    decrementBtn.onclick = () => {
      if (count === 0) {
        alert("O contador já está em zero!");
        return;
      }
      count--;
      counterDisplay.textContent = count;
    };

    const textInput = document.getElementById("textInput");
    const output = document.getElementById("output");
    const charCount = document.getElementById("charCount");

    textInput.addEventListener("input", () => {
      const noSpaces = textInput.value.replace(/\s/g, "");
      charCount.textContent = noSpaces.length;
    });

    textInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && textInput.value.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = textInput.value;
        output.appendChild(p);
        textInput.value = "";
        charCount.textContent = 0;
      }
    });

    const addListBtn = document.getElementById("addList");
    const listType = document.getElementById("listType");
    const listsDiv = document.getElementById("lists");

    addListBtn.onclick = () => {
      const type = listType.value;
      const list = document.createElement(type);

      for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${i}`;
        list.appendChild(li);
      }

      listsDiv.appendChild(list);
    };

    const resetBtn = document.getElementById("reset");

    resetBtn.onclick = () => {
      count = 0;
      counterDisplay.textContent = 0;
      output.innerHTML = "";
      listsDiv.innerHTML = "";
      textInput.value = "";
      charCount.textContent = 0;
    };