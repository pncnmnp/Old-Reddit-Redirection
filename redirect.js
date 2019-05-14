var link = location.href;
var position = link.search("old.reddit.com");

if(position == -1) {
	var url_blocks = link.split("/");
	url_blocks[2] = "old.reddit.com";
	link = url_blocks.join("/");
	window.location.replace(link);
}