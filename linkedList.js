class LinkedList {
  //linked list에는 초기 값이 있어야 한다
  length = 0; // LinkedList의 길이를 추적하는 변수입니다.
  head = null; // LinkedList의 첫 번째 노드를 가리키는 변수입니다.

  // 새 값을 LinkedList의 끝에 추가합니다.
  add(value) {
    if (this.head) {
      // LinkedList가 비어있지 않은 경우
      let current = this.head;
      while (current.next) {
        current = current.next; // 현재 노드를 다음 노드로 이동합니다.
      }
      current.next = new Node(value); // 새 노드를 생성하여 연결합니다.
    } else {
      // LinkedList가 비어있는 경우
      this.head = new Node(value); // 첫 번째 노드로 설정합니다.
    }
    this.length++; // LinkedList의 길이를 증가시킵니다.
    return this.length; // 새로운 길이를 반환합니다.
  }

  // 주어진 인덱스에 해당하는 값을 찾습니다.
  search(index) {
    return this.#search(index)[1]?.value; // 인덱스 위치에 있는 노드의 값 반환
  }

  // 주어진 인덱스에 해당하는 노드를 찾는 내부 도우미 함수
  #search(index) {
    let count = 0;
    let current = this.head;
    let prev;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }

    //#search 메서드는 LinkedList 클래스 내부에서 사용되며, 주어진 index에 해당하는 노드를 찾기 위한 역할을 합니다.

    // index 변수를 초기화하고, 현재 노드 current를 LinkedList의 head로 설정합니다. prev 변수는 이전 노드를 나타내는 변수로 초기화합니다.

    // while 루프를 사용하여 count가 주어진 index와 같아질 때까지 반복합니다. 이 루프는 원하는 인덱스에 도달할 때까지 연결 리스트를 따라 이동합니다.

    // 각 반복에서 현재 노드 current를 prev에 할당하고, current의 next 속성을 통해 다음 노드로 이동합니다. 이렇게 하면 prev는 현재 노드의 이전 노드를 가리키게 되고, current는 현재 노드를 가리킵니다.

    // count가 주어진 index와 같아지면 루프가 종료되고, 이전 노드 prev와 현재 노드 current를 포함한 배열을 반환합니다. prev는 현재 노드의 이전 노드를 나타내므로, 이 두 값을 함께 반환하여 특정 인덱스의 노드와 그 이전 노드에 쉽게 접근할 수 있습니다.

    // 이 #search 메서드는 LinkedList 내에서 search와 remove 메서드에서 사용되어 특정 인덱스에 해당하는 노드를 찾고, 해당 노드를 검색하거나 삭제하는 데 도움을 줍니다.

    //옵셔널 체이닝 연산자 current가 undefined이더라도 에러가 나지 않으면서 undefined를 반환해 준다.

    return [prev, current]; // 이전 노드와 현재 노드를 반환합니다.
  }

  //index는 값임
  // 주어진 인덱스에 해당하는 값을 삭제합니다.
  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next; // 이전 노드의 next를 현재 노드의 next로 연결합니다.
      this.length--; // LinkedList의 길이를 감소시킵니다.
      return this.length; // 새로운 길이를 반환합니다.
    } else if (current) {
      // index가 0 일 때, 첫 번째 노드를 삭제합니다.
      this.head = current.next;
      this.length--;
      return this.length;
    } else {
      // 삭제하려는 대상이 없을 때 아무 작업도 수행하지 않습니다.
    }
    prev.next = current.next; // 마지막 노드를 삭제하려는 시도이므로, prev와 current 모두 null입니다.
    return [prev, current];
  }
}

class Node {
  next = null; // 다음 노드를 가리키는 변수입니다.
  constructor(value) {
    this.value = value; // 노드의 값
  }
}

const ll = new LinkedList(); // 새로운 LinkedList를 생성합니다.
ll.length; // LinkedList의 길이를 확인합니다.
ll.add(1); // 값을 LinkedList에 추가합니다.
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
console.log(ll.search(6)); // 6을 검색하여 결과를 출력합니다. (undefined이어야 함)
ll.remove(4); // 인덱스 4에 해당하는 값을 삭제합니다.
ll.search(5); // 5를 검색하여 결과를 출력합니다. (6이어야 함)
console.log(ll.search(5)); // 5를 검색하여 결과를 출력합니다. (undefined이어야 함)
ll.remove(4); // 인덱스 4에 해당하는 값을 삭제합니다.
console.log(ll.search(4)); // 4를 검색하여 결과를 출력합니다. (undefined이어야 함)
console.log('HI');

//호잇팅이되서 .next 같은 거를 js에서도 쓸 수 있다.
//추가할 값을 받고
