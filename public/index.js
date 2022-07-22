const board = document.querySelector(".js-board");
let memberData;

axios.get("./all.json").then((res) => {
  memberData = res.data;
  render();
});

function render() {
  let allContent = "";
  let ids = [];
  for (key in memberData) {
    ids.push(key);
  }

  ids.forEach((id) => {
    allContent += `
      <li class="px-8 py-4 shadow-lg rounded-lg">
        <div class="card">
          <h2
            class="text-center text-3xl border-b-4 pb-2 border-primary mb-4"
          >
            ${memberData[id].name}
          </h2>
          <p class="intro text-lg">
            ${memberData[id].description}
          </p>
        </div>
      </li>
    `;
  });
  board.innerHTML = allContent;
}
