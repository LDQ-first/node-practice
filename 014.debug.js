function test1 () {
  const a = Math.floor(Math.random() * 10)
  const b = Math.floor(Math.random() * 10)

  const c = test2(a, b)
  console.log(c)
}

function test2 (a, b) {
  if (a > b) {
    a += a * 2
  } else {
    b -= a
  }
  return a + b
}

test1()
