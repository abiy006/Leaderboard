const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const removeTheList = require('./remove_todo.js');

let store = {};
const fakeLocalStorage = () => ({
  getItem(key) {
    return store[key] || null;
  },
  setItem(key, value) {
    store[key] = value.toString();
  },
  removeItem(key) {
    delete store[key];
  },
  clear() {
    store = {};
  },
});

Object.defineProperty(window, 'localStorage', {
  value: fakeLocalStorage,
});

describe('Set local storage item', () => {
  const dom = new JSDOM(
    `<html>
    <body>
    </body>
  </html>`,
    { url: 'http://localhost' },
  );

  global.window = dom.window;
  global.document = dom.window.document;

  beforeEach(() => {
    dom.innerHTML = `<body>
  <script>document.body.appendChild(document.createElement("li"));</script>
</body>`;
  });

  afterEach(() => {
    // Clean up any changes made to the DOM
    const itemContainer = dom.window.document.body;
    itemContainer.innerHTML = '';
  });
  test('Data is deleted from local storage', () => {
    const deletedIndex = 1;
    removeTheList(deletedIndex);
    expect(`${deletedIndex}`).toEqual(window.localStorage.getItem('todos'));
    dom.innerHTML = `<body>
      <script>document.body.removeChild(document.body.firstChild);</script>
    </body>`;
  });
  const addedItem = dom.window.document.body.children;
  expect(addedItem).toHaveLength(0);
});
