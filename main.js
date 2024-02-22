import { links } from "./links.js";

const linkContainer = document.getElementById("links");

function addLink(name, link) {
    return `
        <a href="${link}" class="link" target="_blank">
            <span>${name}</span>
        </a>
    `;
}

let allLinks = "";

links.forEach((ele) => {
    let linkUrl = ele.link;
    let name = ele.name;

    allLinks += addLink(name, linkUrl);
});

linkContainer.innerHTML = allLinks;
