const items = [
  {
    label: "Item fake"
  },
  {
    label: "Item fake"
  },
  {
    label: "Item fake"
  },
  {
    label: "Item fake"
  },
  {
    label: "Item fake"
  },
  {
    label: "Item fake"
  },
  {
    label: "Item fake"
  },
  {
    label: "Item fake"
  },
  {
    label: "Item fake"
  },
];

export const MockListFake = (
    <ul>
      {
        items.map((item, i) => (
          <li key={i}>
            <a href={"#"}>
              {item.label}
            </a>
          </li>
        ))
      }
    </ul>
)