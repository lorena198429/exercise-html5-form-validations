const d = document
const butonPost = d.querySelector(`#butonPost`),
post = d.querySelector(`.post`),
postCard = d.querySelector(`.post-card`),
cancelButon = d.querySelector(`#cancelButon`)

butonPost.addEventListener(`click`,e => {
  // console.log(`press`)
  post.classList.add(`animation-contentPost`)
  postCard.classList.add(`animation-post`)
})

post.addEventListener(`click`,e => {
  if(e.target == post && e.target != postCard || e.target == cancelButon || cancelButon.firstElementChild){
    post.classList.remove(`animation-contentPost`)
    postCard.classList.remove(`animation-post`)
  }
  // console.log(cancelButon.firstElementChild )

})

