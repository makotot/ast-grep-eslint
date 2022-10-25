// let a = 123

async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
  }
  return bar(results);
}

if (false) {
  console.log('123')
}

class Test {
  set test(_: any) {
    return 'shoud hit'
  }

  notHit(test) {
    return 'shoud not hit'
  }
}

let p1, p2, p4, s

async () => {
  new Test().test = '123'
  Promise.all([
    await p1,  // match
    p2,        // no match
    bar(await p1), // no match
    await p4,  // match
    ...[1,2,3].map(async (i) => await Promise.resolve(i)) // no match
  ])

  Promise.resolve([
    await p1,  // no match
  ])

  for (var i = 1; i < 10; i++) {
    await i
  }

  do {
    await s
  } while(123)

  while (true) {
    await 123
  }
}

let { modelValue, title } = bar<{
  modelValue: string
  title: string
}>()

function bar<T>(thing?: T): T {
  throw new Error("Function not implemented.");
}

