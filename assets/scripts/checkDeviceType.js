var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;

if(!is_mobile){
    alert("This website is better viewed on a computer. We recommend to open this on a website.");
}