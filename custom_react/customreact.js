`use strict`;

const customRender = function (reactEl, container) {
  // Method:1:- Not production type
  // const domEl = document.createElement(reactEl.type);
  // domEl.innerText = reactEl.children;
  // domEl.setAttribute("href", reactEl.props.href);
  // domEl.setAttribute("target", reactEl.props.target);
  // container.appendChild(domEl);

  // method2:- more useful method using loop

  const domEl = document.createElement(reactEl.type);
  domEl.innerText = reactEl.children;
  for (const key in reactEl.props) {
    domEl.setAttribute(key, reactEl.props[key]);
  }
  container.appendChild(domEl);
};
const reactEl = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me! to google",
};

const mainContainer = document.getElementById("root");

customRender(reactEl, mainContainer);
