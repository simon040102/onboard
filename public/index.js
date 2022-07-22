const board = document.querySelector(".js-board");
let memberData;

axios.get("../jsonFiles/shun.json").then((res) => {
  memberData = res.data;
  render();
});

function render() {
  let allContent = "";
  memberData.forEach((data) => {
    console.log(data);
    allContent += `
      <li class="px-8 py-4 shadow-lg rounded-lg">
        <div class="card">
          <h2
            class="text-center text-3xl border-b-4 pb-2 border-primary mb-4"
          >
            ${data.name}
          </h2>
          <p class="intro text-lg">
            ${data.description}
          </p>
        </div>
      </li>
    `;
  });
  board.innerHTML = allContent;
}
