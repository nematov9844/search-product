const baseUrl = "https://data-lesson-13.vercel.app/all";
const input = document.querySelector(".input");
const box = document.querySelector(".box");
async function getData(value) {
  if (value.length > 3) {
    const data = await fetch(`${baseUrl}?title_like=${value}`).then((res) =>  res.json());
    if (data) {
        
    }
    box.innerHTML = data
      .map((item) => {
        return `
            <div class="flex flex-col gap-4 shadow-md shadow-black">
            <img src="${item.img}" alt="">
            <h1>${item.title}</h1>
            </div>
            `;
      })
      .join("");
  }else{
    box.innerHTML = ""
  }
}

function useDebounce() {
  let id;
  return () => {
    box.innerHTML = `<h1 class="text-center text-4xl font-semibold ">Loading...</h1>`
    clearTimeout(id);
    id = setTimeout(() => {
      getData(input.value);
    }, 500);
  };
}

const debounce = useDebounce();

input.addEventListener("keyup", ()=>{
    debounce()
})