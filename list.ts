class List<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;

  append(value: T): void {
    const node = new ListNode(value);

    if (this.head === null || this.tail === null) {
      this.head = node;
      this.tail = this.head;
      return;
    }

    this.tail.next = node;
    this.tail = this.tail.next;
  }

  toString(): string {
    // const arr: T[] = [];

    // for (const value of this) {
    //   arr.push(value);
    // }

    // return arr.join(',');
    return [...this].join(' -> ');
  }

  // [Symbol.iterator]() {
  //   let current = this.head;

  //   const listIterator = {
  //     next: () => {
  //       if (current === null) {
  //         return { value: undefined, done: true }
  //       }

  //       const result = { value: current.value, done: false }
  //       current = current.next;
  //       return result;
  //     }
  //   }

  //   return listIterator;
  // }

  *[Symbol.iterator]() {
    let current = this.head;

    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  get(index: number): T | undefined {
    let i = 0;
    let current = this.head;

    while (current) {
      if (i === index) {
        return current.value;
      }
      i++;
      current = current.next;
    }

    return undefined;

    // const arr = []

    // for (const value of this) {
    //   arr.push(value)
    // }

    // return arr[index];
    // return [...this][index];
  }

  set(index: number, newValue: T): void {
    let i = 0;
    let current = this.head;

    while (current) {
      if (i === index) {
        current.value = newValue;
        return;
      }
      i++;
      current = current.next;
    }
  }

  // mistake
  remove(value: T): void {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    // 1 -> 3 -> 5
    let prev = this.head;
    let current = this.head.next;

    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  erase(index: number): void {
    if (this.head === null) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let i = 1;
    let prev = this.head;
    let current = this.head.next;

    while (current) {
      if (i === index) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
      i++;
    }
  }

  size(): number {
    let i = 0;
    let current = this.head;

    while (current) {
      i++;
      current = current.next;
    }

    return i;
  }

  // mistake
  insert(index: number, value: T) {
    const node = new ListNode(value);
    let i = 0;
    let current = this.head;

    while (current) {
      if (i === index) {
        const tmp = current.next;
        current.next = node;
        current.next.next = tmp;
        return;
      }
      i++;
      current = current.next;
    }
  }
}

// [1, 2, 3, 4, 5, 7, 8, 9, 1];

class ListNode<T> {
  constructor(public value: T, public next: ListNode<T> | null = null) {}
}

function test() {
  const list = new List<number>();

  list.append(5);
  list.append(4);
  list.append(8);
  // list.remove(5);

  // console.log(list.get(0), list.get(1), list.get(2));
  // list.set(0, 1);
  // list.insert(1, 10);
  list.erase(1);

  console.log(list.toString()); // 5 -> 8
  // console.log(list.toString()); // 1 -> 4 -> 8
  // console.log(list.size()); // 3

  // list.remove(5);
  // list.remove(4);
  // list.remove(8);

  // list.add(2, 10);

  // console.log(list.toString()); // 5 -> 4 -> 10 -> 8

  // let [a, b, c] = list;
  // console.log(a, b, c);

  // console.log(list);
  // console.log(list.toString());

  // 5
  // 4
  // 8

  // for (const value of list) {
  //   console.log(value);
}

test();

function remove<T>(arr: T[], value: T): void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    }
  }
}

function test2() {
  const arr = [1, 2, 4, 3, 10];
  const arr2 = ['hello', 'world', 'how', 'are', 'you'];
  const arr3 = [true, false];

  const obj1 = { name: 'John' };
  const obj2 = { name: 'Dan' };
  const arr4 = [obj1, obj2];

  remove(arr, 3);
  remove(arr2, 'how');
  remove(arr3, true);
  remove(arr4, obj2);

  console.log(arr); // [1, 2, 4, 10]
  console.log(arr2); // ['hello', 'world', 'are', 'you']
  console.log(arr3); // [false]
  console.log(arr4); // [{ name: 'John'}]
}

// test2();
