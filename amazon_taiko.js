const { openBrowser, goto, textBox, focus, write, click, image, hover, text, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("www.amazon.com");
        await focus(textBox());
        await write("watch");
        await click("watch for men");
	await hover(text("Seiko Mens"));
	await click(image("Seiko Mens Analogue Automatic Watch with Leather Strap SSA345J1"));
	await focus(button("Add to Cart"));
	await click("Add to Cart");
	await click("Cart");
	await text("Seiko Mens Analogue Automatic Watch with Leather Strap SSA345J1Seiko Mens Analogue Automatic Watch with Leather Strap SSA345J1").exists();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
