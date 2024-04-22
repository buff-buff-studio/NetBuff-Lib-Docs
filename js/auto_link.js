var links = document.querySelectorAll('a.api-docs');

for (var i = 0; i < links.length; i++) 
{
    var link = links[i];

    var text = link.textContent.replace(/\./g, '-').trim().toLowerCase();

    link.href = '../api_reference/#' + text;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var target = document.querySelector(this.getAttribute('href'));
        var offset = target.getBoundingClientRect().top - window.innerHeight / 2 + window.scrollY;

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});

window.onload = function () {
    var hash = window.location.hash;

    if (hash) {
        var target = document.querySelector(hash);
        var offset = target.getBoundingClientRect().top - window.innerHeight / 2 + window.scrollY;

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });

        target.style.transition = 'background-color 0.5s';
        target.style.borderRadius = '5px';
        target.style.backgroundColor = '#ffff0066';
        
        //expand background -5px to the left
        //if the target is a h1, h2 or h3
        if (target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3') 
        {
            target.style.paddingLeft = '5px';
            target.style.marginLeft = '-5px';
        }

        setTimeout(function () {
            target.style.backgroundColor = '';
        }, 1000);
    }
};