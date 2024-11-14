window.show = function () {
	return {
		mobileMenuOpened: false,
		menu: [
			{
				title: 'Features',
				url: '#',
			},
			{
				title: 'Pricing',
				url: '#',
			},
			{
				title: 'Contact',
				url: '#',
			}
		],
		activeTabId: 'simple',
		tabs: [
			{
				id: 'simple',
				name: 'Simple Bookmarking',
				title: 'Bookmark in one click',
				description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
				url: '#',
				imagePath: './images/illustration-features-tab-1.svg',
				imageAltText: ''
			},
			{
				id: 'search',
				name: 'Speedy Searching',
				title: 'Intelligent search',
				description: " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
				url: '#',
				imagePath: './images/illustration-features-tab-2.svg',
				imageAltText: ''
			},
			{
				id: 'share',
				name: 'Easy Sharing',
				title: 'Share your bookmarks',
				description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
				url: '#',
				imagePath: './images/illustration-features-tab-3.svg',
				imageAltText: ''
			},
		],
		frequentlyAskedQuestions: [
			{
				question: "What is Bookmark?",
				answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
			},
			{
				question: "How can I request a new browser?",
				answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
			},
			{
				question: "Is there a mobile app?",
				answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
			},
			{
				question: "What about other Chromium browsers?",
				answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
			}
		],
		email: '',
		successMessage: false,
		validation: {
			email: {
				rule: {
					required: function(field){
						if (field) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: "Whoops, looks like it's empty" }
						}
					},
					email: function (field) {
						const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
						if (validEmailRegex.test(field)) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: "Whoops, make sure it's an email" }
						}
					}
				}
			},
		},
		validate(field) {
			for (const key in this.validation[field].rule) {
				const validationResult = this.validation[field].rule[key](this[field])
				if (validationResult.invalid) {
					this.validation[field].invalid = true
					this.validation[field].message = validationResult.message
					break
				}
				this.validation[field].invalid = false
				this.validation[field].message = ''
			}
		},
		submit() {
			this.validate('email')
			if (!this.validation.email.invalid) {
				this.successMessage = true;
			}
		}
	}
}