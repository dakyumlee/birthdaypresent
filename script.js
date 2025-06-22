const PASSWORD = "0622"

const loginDiv = document.getElementById("login")
const paperDiv = document.getElementById("paper")
const inputEl = document.getElementById("passwordInput")
const errorEl = document.getElementById("error")
const btn = document.getElementById("loginBtn")
const letterTitle = document.getElementById("letterTitle")
const letterTextEl = document.getElementById("letterText")
const nextLink = document.getElementById("nextLink")
const confettiCanvas = document.getElementById("confetti-canvas")
const confettiInstance = confetti.create(confettiCanvas, { resize:true, useWorker:true })

const fullText = `수현아\n

어느새 네 생일이네\n
같이 일하던 때가 벌써 꽤 전인데도\n
가끔 네 생각 나더라\n
말수 적고 조용했지만\n
그래서 더 오래 기억에 남는 사람 있잖아\n
넌 내게 그런 사람이었어\n

요즘 잘 지내지?\n
하루하루 즐겁진 않아도 기분 좋고\n
네가 네 편인 날들이 많길 바란다\n

생일 축하해, 조용히 응원하고 있을게\n
항상 즐겁길\n`;



btn.addEventListener("click", onLogin)
inputEl.addEventListener("keyup", e => {
  if (e.key === "Enter") onLogin()
})

function onLogin() {
  if (inputEl.value === PASSWORD) {
    errorEl.style.visibility = "hidden"
    loginDiv.classList.add("hidden")
    showPaper()
  } else {
    errorEl.style.visibility = "visible"
  }
}

function showPaper() {
  paperDiv.style.display = "flex"
  setTimeout(() => paperDiv.classList.add("visible"), 10)
  runConfetti()
  typeWriter()
}

function runConfetti() {
  const end = Date.now() + 3000
  ;(function frame(){
    confettiInstance({
      particleCount:5,
      spread:60,
      origin:{ x:Math.random(), y:Math.random()*0.6 },
      colors:['#000000','#FFFFFF']
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()
}

function typeWriter() {
  letterTitle.textContent = "🎂수현아 생일축하해!🎂"
  let i = 0
  const speed = 50
  function typing() {
    if (i < fullText.length) {
      letterTextEl.textContent += fullText[i++]
      setTimeout(typing, speed)
    } else {
      nextLink.style.display = "inline-block"
    }
  }
  typing()
}
