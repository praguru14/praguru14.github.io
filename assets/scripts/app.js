const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "C",
				weight: 12.3
			}, {
				text: "Git",
				weight: 8
			}, {
				text: "Python",
				weight: 14
			}, {
				text: "WebDev",
				weight: 7
			}, {
				text: "programming",
				weight: 5
			}, {
				text: "Java",
				weight: 10
			}, {
				text: "Cricket",
				weight: 9
			}, {
				text: "Prafull",
				weight: 15
			}, {
				text: "Flask",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.part2').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a B.Tech Student.", "love everything about code.", "love to read about technology and science.", "solve problems."
			],
			
			stringsElement: null,
			
			typeSpeed: 1.4,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
