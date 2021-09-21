const {$, openBrowser, goto, click, text, closeBrowser } = require('taiko');

var assert = require('assert');
(async () => {
    try {
        await openBrowser();
        await goto("www.modanisa.com");
        //await click("Başörtüsü");
	await click($('//a[@href="/basortusu.htm"]'));
        //await click("AİŞE TESETTÜR");
        await click($('//*[@id="productsList"]/li[1]/span/span/span/a[@data-product-id="1824159"]'))
        await click("Sepete Ekle");
        await click("Sepetim");

//	    await text("AİŞE TESETTÜR").exists();
  //      await assert.ok(await text('AİŞE TESETTÜR').exists());
	await $('//*[@id="basketList-list"]/li/div[6][@data-product-id="1824159"]').exists()
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
