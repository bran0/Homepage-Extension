browser.tabs.onCreated.addListener(gotoHomePage);
let lasttab = -1;

function gotoHomePage(){
    alert('goto home page')
	browser.tabs.query({'active': true}, function(tabs){
        var tab = tabs[0];
        if (tab.id != lasttab && tab.url.indexOf("msn.com/spartan/") >= 0 && tab.url.indexOf("besthomepageever") < 0) {
            lasttab = tab.id;
            browser.tabs.update(tab.id,{url: "https://www.BestHomepageEver.com"});
        }
	});
}

gotoHomePage();