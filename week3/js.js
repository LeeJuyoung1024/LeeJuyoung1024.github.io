const clickButton = document.querySelector(".click_btn");
const open_btn = document.querySelector(".modal_btn");
const close_btn = document.querySelector(".close_btn");
const share_btn = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");



function calculator() {
    const field_value = document.querySelector("#field_value");
    let time_value = document.querySelector("#time_value");
    let time_value_int = Number(time_value.value);

    const field_result = document.querySelector(".field_result");
    const time_result = document.querySelector(".time_result");

    if (field_value == "") {
        alert("입력되지 않았습니다.")
        field_value.focus();
        return false;
    } else if (time_value.value == "") {
        alert("입력되지 않았습니다.");
        time_value.focus();
        return false;
    } else if (time_value_int > 24) {
        alert("잘못된 값이 입력되었습니다. 24이하의 값을 입력해주세요.");
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function () {
        loading.style.display = 'none';
        result.style.display = 'flex';
        field_result.innerText = field_value.value;
        time_result.innerText = parseInt((10000 / time_value_int), 10);    // parseInt -> 소수점 자리는 없애고 계산 / 10 -> 10진수로 표현
    }, 1800);    // 1.8초 뒤에 실행됨

}

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    console.log(event.target);
    if (event.target == modal) {
        modal.style.display = 'none';
    }
  }


function copyUrl() {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
        alert("URL이 복사되었습니다.");
    });
}


share_btn.addEventListener('click', copyUrl)
open_btn.addEventListener('click', openModal)
close_btn.addEventListener('click', closeModal)
clickButton.addEventListener('click', calculator)