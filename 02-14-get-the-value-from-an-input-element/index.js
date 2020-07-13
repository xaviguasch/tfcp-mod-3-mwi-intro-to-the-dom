const btn = document.querySelector('#btn')
const input = document.querySelector('input')

btn.addEventListener('click', () => {
  const p = document.createElement('p')
  p.textContent = input.value
  document.body.append(p)
})
