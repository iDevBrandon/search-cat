const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    // 페이지 진입 시 포커스가 자동으로 input을 가리키게 처리
    $searchInput.focus();

    // 인풋 클릭시, 인풋 initalize 이벤트 발생
    $searchInput.addEventListener("click", (e) => {
      let searchTerm = e.target.value;
      if (searchTerm.length > 0) {
        $searchInput.value = "";
      }
    });

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
