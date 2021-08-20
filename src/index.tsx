const React = window["React"];
const ReactDOM = window["ReactDOM"];

export function Component() {
  return (
    <aside>
      <h1>This is in react</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        aperiam nam commodi alias, nulla unde qui eius ipsum nesciunt eaque
        dignissimos est ipsa neque quas odio deserunt error sequi saepe!
      </p>
      <p>
        Adipisci ad, necessitatibus commodi voluptatibus veritatis officia est,
        laudantium ipsam libero delectus harum laborum reiciendis ratione, quam
        possimus. Facere inventore, animi ea mollitia voluptatum modi cumque
        earum suscipit quae cupiditate?
      </p>
    </aside>
  );
}

export function render(container: HTMLElement) {
  ReactDOM.render(<Component />, container, () => {
    console.info("Component loaded");
  });
}

export default {
  render,
  Component,
};
