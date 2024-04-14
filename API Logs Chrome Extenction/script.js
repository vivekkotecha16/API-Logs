const fetchData = async () => {
  await fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(jokeData => {
      // console.log(jokeData)
      const jokeText = jokeData?.attachments[0]?.text
      const jokeElement = document.getElementById('jokeElement')

      jokeElement.innerHTML = jokeText
    })
}

const fetchButton = document.getElementById('fetchButton');
if (fetchButton) {
  fetchButton.addEventListener('click', fetchData);
}
const scriptTage = document.getElementById('myScriptElement');
if (scriptTage) {
  scriptTage.innerHTML = console.log('hello');
  const scriptContent = scriptTage.innerHTML

  // eslint-disable-next-line no-eval
  // eval(scriptContent);
}

// fetchData()
// console.log('hi')

// const { fetch: originalFetch } = window;

// window.fetch = async (...args) => {
//   console.log('first')
//   // console.log(args, 'args')
//   const [resource, config] = args;
//   // request interceptor here
//   const response = await originalFetch(resource, config);
//   // response interceptor here
//   console.log('response', response)
//   return response;
// };