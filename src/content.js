import domLoaded from 'dom-loaded'

domLoaded.then(() => {
	// Find all the JS Code Blocks
	const codeBlocks = document.querySelectorAll('pre');

	[...codeBlocks].map((el) => {
		const code = el.innerText;
		const formattedCode = prettier.format(code);
		console.log(formattedCode);
		// el.innerText = formattedCode;
	})

});


