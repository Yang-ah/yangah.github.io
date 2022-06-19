const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const loginButton = document.querySelector("#login-button");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const greeting = document.querySelector("#greeting");

function login(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Have a wonderful day, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", login);
} else {
  paintGreetings(savedUsername);
}

// "https://image.cine21.com/resize/cine21/still/2019/0530/8679_5cef68e0eb927[S800,800].jpg",
// "https://p4.wallpaperbetter.com/wallpaper/337/96/19/kikis-delivery-service-wallpaper-preview.jpg",
// "https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjFfOTAg/MDAxNTkwMDA4MTYzMjEx.WJ6LacwWO1W9H4TbOy5mIqHqOUplN2WQNkzIAVfYm5kg.R46zfDgIvpPZxT_f-g_aKXj0TeZprAadpLABzQRXUn0g.PNG.mango_cc/3.png?type=w800",
// "https://img.extmovie.com/files/attach/images/135/870/914/049/98ae3cc23bc253c1e9eea3d85d5ed839.jpg",
// "https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMjk0/MDAxNTkxNzg0NjM3MjY2.6izTsI5oXFvaiEBR1SC4mv_i43PHOHb5x8jZtuylvZcg.cQsxCx_qElGeBoJ_LvxRFLjPo_q6SfbO1yuS3ykUDQMg.JPEG.se___ovo/%EC%A7%80%EB%B8%8C%EB%A6%AC%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B401.jpg?type=w800",
// "https://mblogthumb-phinf.pstatic.net/MjAxNzEyMjZfMTgg/MDAxNTE0Mjc2NzUwOTM0.PUH_-Q9SJsQ3AZ1H8sX6cOM95Nwp1dKvp4ZeyylEnwIg.0-rcWC5OAuwFJLRIve8zEj_SlfMBBMHy69yqP0wWyNwg.PNG.miloops/6631b6be9185244412e495afb5bb801d.png?type=w2",
// "http://file3.instiz.net/data/file3/2020/11/30/7/4/4/7441d2732a4d53f76a37202f5cd996d0.jpg",
// "https://img.chuing.net/i/epNyNNQ/9.jpg",
// "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQsGoG%2FbtqCxQ1YNSO%2F8qWHNtEqr4Yh0SYKNXG7Rk%2Fimg.png",
// "https://mblogthumb-phinf.pstatic.net/MjAxNzA4MTdfODcg/MDAxNTAyOTQ1MzczMTE0.1T9wI-e0BiSpB8k9Znt61bBQj9eNnGrEFYobkrWbEqQg.dlgjAH6p9Y2U9gIYAZ3DN2eXrSAxzudsCkTdxkI_dyMg.PNG.sinnam88/%EB%A7%88%EB%85%80%EB%B0%B0%EB%8B%AC%EB%B6%80_%ED%82%A4%ED%82%A4_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4__%EC%9B%80%EC%A7%A4_%28%EC%B4%88%EA%B3%A0%ED%99%94%EC%A7%88%29_%285%29.png?type=w800",
