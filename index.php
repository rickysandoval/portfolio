<!doctype html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<title>Ricky Sandoval Web Development</title>
	<link rel="stylesheet" href="assets/css/reset.css">
	<link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
	<div id="page">
		<header class="page-header contain">
			<nav>
				<h1 class="brand"><a href="#page" id="toTop" class="smooth"><span class="brand-symbol">[</span> <span class="brand-name">Ricky Sandoval</span> <span class="brand-symbol">]</span></a></h1>
				<ul class="page-nav">
					<li><a href="#contact" class="smooth nav">Contact</a></li>
					<li><a href="#work" class="smooth nav">Work</a></li>
					<li><a href="#about" class="smooth nav">About</a></li>
				</ul>
			</nav>
		</header>
		<section id="about" class="main">
			<header class="contain">
				<h1>About Me</h1>
			</header>
			<div class="section-text clear">
				<p class="intro">Hello! My name is Ricky Sandoval and I'm a front-end web developer currently working out of Crested Butte, Colorado.</p>
				<div class="contain">
					<img id="me" src="pics/me.png">
					<p class="long">I like to make websites! Beyond that, I believe in the beauty of
					simplicity, both in design and in writing code. I make intuitive, user-centered sites with a creative voice.</p>
					<p class="long">I'm currently living in the mountains, working on a variety of design/developent
					projects and enjoying the snow in my spare time. When I'm not writing code you can find me on the side of a mountain or
					at home with a guitar in my hands.</p>
					<p class="long">If you'd like to know more about me or want to chat, you can message me <a href="#contact" class="smooth">here</a>!</p>
				</div>
			</div>
		</section><!-- End about -->

		<section id="work" class="main">
			<header class="contain">
				<h1>Past Projects</h1>
			</header>
			<div class="section-text contain">
				<p class="intro">Here are some of the projects I've completed in the past year. I hope to be adding more to this very soon.</p>
			</div>
			<section id="project-display" class="hidden">
				<div class="project-display-title">
					<span class="project-prev">&laquo;</span><h1></h1><span class="project-next">&raquo;</span>
				</div>
				<div class="contain clear project-display-screens">
				<div class="project-display-mobile">
					<div class="project-display-image">
						<img src="pics/phone.png">
						<div class="project-display-inner">
							<img src="">
							<div class="spinner-wave">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				</div>
				<div class="project-display-large">
					<div class="project-display-image">
						<img src="pics/laptop.png">
						<div class="project-display-inner">
							<img src="">
							<div class="spinner-wave">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div class="contain">
				<div class="btn-switch"><img src="pics/switch.png"></div>
				<div class="project-display-info"></div>				
					<div class="icons">
						<div id="i-html"><p>HTML5</p><img src="pics/icons/html5.png"></div>
						<div id="i-css"><p>CSS3</p><img src="pics/icons/css3.png"></div>
						<div id="i-jquery"><p>jQuery</p><img src="pics/icons/jquery.png"></div>
						<div id="i-mobile"><p>Mobile</p><img src="pics/icons/mobile.png"></div>
						<div id="i-concrete"><p>Concrete5</p><img src="pics/icons/concrete.png"></div>
					</div>
				</div>
			</section>
			<section id="project-list">
				<article id="quaking"
					data-title="Quaking Aspen Outfitters"
					data-image-large="pics/screenshots/quaking.jpg"
					data-image-mobile="pics/screenshots/quaking_mobile.jpg"
					data-icons="i-html i-css i-mobile i-concrete">
					<a href="#project-display" ></a>
					<h3>Quaking Aspen Outfitters</h3>
					<img src="pics/screenshots/quaking_circle.jpg">
					<div class="project-info">
						<p>This site was a total rebuild for a local outfitter company. I
						commisioned a logo to be made by a third party to help with the 
						business branding, and built the theme from scratch. I used the Concrete5
						as an easy to use CMS for the client.</p>
						<p>
						<a href="http://www.rickysandovalart.com/sites/quaking-aspen/">Full Site</a>
						</p>
					</div>
				</article>
				<article id="drawing"
					data-title="Ricky Sandoval Drawing"
					data-image-large="pics/screenshots/gallery.jpg"
					data-image-mobile="pics/screenshots/gallery_mobile.jpg"
					data-icons="i-html i-css i-jquery i-mobile">
					<a href="#project-display" ></a>
					<h3>Ricky Sandoval Drawing</h3>
					<img src="pics/screenshots/gallery_circle.png">
					<div class="project-info">
						<p>I developed this site to showcase my charcoal drawings. 
						I chose a simple, elegant design that accentuates my style of drawing 
						and doens't distract form the art. The gallery page has an inverted 
						color scheme and custom responsive behavior in order to best display 
						the artwork.</p>
						<p>
						<a href="http://www.rickysandovalart.com">Full Site</a>
						</p>
					</div>
				</article>
				<article id="rugs"
					data-title="Artisan Rug Gallery"
					data-image-large="pics/screenshots/rug_gallery.jpg"
					data-image-mobile="pics/screenshots/rug_gallery_mobile.jpg"
					data-icons="i-html i-css i-jquery i-mobile">
					<a href="#project-display"></a>
					<img src="pics/screenshots/rugs_circle.png">
					<h3>Artisan Rug Gallery</h3>
					<div class="project-info">
						<p>This project included an overhaul of the CSS and new branding. 
						The layout is simple and the site features mostly white and greyscale 
						elements. It was designed to look professional and easily navigable, yet
						stay out of the way to let the colors and designs
						 of the rugs do bring the life.</p>
						 <p>
							<a href="http://shop.artisanruggallery.com">Full Site</a>
						</p>
					</div>
				</article>
			</section><!-- End projects -->
		</section> <!-- End Works -->
		<section id="contact" class="main">
			<header class="contain">
				<h1>Link Up</h1>
			</header>
			<div class='section-text'>
				<p class="intro">Wanna get in touch? Here are some ways to do that.</p>
			</div>
			<div id="contact_buttons" class="contain">
				<div id="phone" class="up">
					<p>607.216.5799</p>
					<img src="pics/icons/phone.png">
				</div>
				<div id="email" class="shown">
					<p>ras482@cornell.edu</p>
					<img src="pics/icons/email.png">
				</div>
				<div id="linkedin" class="up">
					<p><a href="https://www.linkedin.com/pub/richard-sandoval/80/679/478">My Profile</a></p>
					<img src="pics/icons/linkedin.png">
				</div>
			</div>
			<div id="email_form" class="contain">
<?php

$form = '<form name="contact" action="index.php#contact" method="post">
	Name<br><input type="text" name="name" required></input><br>
	Subject<br><input type="text" name="subject"></input><br>
	Message<br><textarea rows="10" name="message" required></textarea><br>
	Email<br><input type="email" name="email" required></input><br>
	<input id="submit" type="submit" name="submit" value="Submit"></input>
</form>';

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$body = $_POST['message'];
	$email = $_POST['email'];

	$to = 'ras482@cornell.edu';

	if (mail($to, $subject, $body . "\n\n" . $name . ": " . $email)){
		echo '<p class="email">Your message was sent successfully.</p>';
	} else {
		echo'<p class="email">Oops, something went wrong. Try that again.</p>';
		echo $form;
	}

} else {
	echo $form;
}

?>
			</div>
		</section>
		<footer class="main">
			<p>Ricky Sandoval 2014</p>
		</footer>
	</div>
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/min/script-min.js"></script>
</body>