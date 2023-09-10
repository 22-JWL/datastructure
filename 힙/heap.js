class Heap {
  //최대힙
  arr = [];
  //public 필드는 클래스 내부, 자식 클래스 내부, 클래스 인스턴스를 통한 접근이 모두 허용된다.
  //private 필드는 클래스 내부에서만 접근이 가능하다.

  //내부함수
  #reheapUp(index) {
    //루트까지 반복적으로 비교 내가 루트보다 크면 부모자리랑 바꿈

    if (index > 0) {
      //parentIndex는 루트의 인덱스
      const parentIndex = Math.floor((index - 1) / 2); // Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.

      //만약루트의 값보다 자식의 값이 더 크다면
      if (this.arr[index] > this.arr[parentIndex]) {
        //값 바꾸기

        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;

        //재귀
        this.#reheapUp(parentIndex);
      }
    }
  }

  //최소힙
  #reheapUpMin(index) {
    //루트까지 반복적으로 비교 내가 루트보다 작으면 부모자리랑 바꿈

    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      //만약 루트의 값보다 자식의 값이 더 작다면
      if (this.arr[index] < this.arr[parentIndex]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;

        this.#reheapUpMin(parentIndex);
      }
    }
  }

  insert(value) {
    //재귀사용(logn의 경우)
    const index = this.arr.length;
    this.arr[index] = value;
    this.#reheapUp(index);
  }

  #reheapDown(index) {
    const leftIndex = index * 2 + 1;
    //내 자식의 인덱스가 전체 길이보다 작다
    if (leftIndex < this.arr.length) {
      const rightIndex = index * 2 + 2;
      //삼항연산자 true일 경우 leftIndex, false일 경우 rightIndex를 bigger의 인수로 갖는다.
      const bigger =
        this.arr[leftIndex] > this.arr[rightIndex] ? leftIndex : rightIndex;

      //만약 루트값보다 자식 인덱스중 큰 값이 있다면 그 값을 루트값으로 치환한다.
      if (this.arr[index] < this.arr[bigger]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[bigger];
        this.arr[bigger] = temp;
        this.#reheapDown(bigger);
      }
    }
  }

  #reheapDownMin(index) {
    const leftIndex = index * 2 + 1;
    //내 자식의 인덱스가 전체 길이보다 작다
    if (leftIndex < this.arr.length) {
      const rightIndex = index * 2 + 2;
      //삼항연산자 true일 경우 leftIndex, false일 경우 rightIndex를 smaller의 인수로 갖는다.
      const smaller =
        this.arr[leftIndex] < this.arr[rightIndex] ? leftIndex : rightIndex;

      //만약 루트값보다 자식 인덱스중 작은 값이 있다면 그 값을 루트값으로 치환한다.
      if (this.arr[index] > this.arr[smaller]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[smaller];
        this.arr[smaller] = temp;
        this.#reheapDownMin(smaller);
      }
    }
  }

  remove() {
    // 루트 삭제
    if (this.arr.length === 0) {
      return false;
    }
    //마지막 루트를 빼고 다시 0인덱스에 넣는 오류 수정
    if (this.arr.length === 1) {
      return this.arr.pop();
    }
    const root = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.#reheapDown(0);
    return root;
    //root만 remove
  }

  //힙 정렬
  sort() {
    const sortedArray = [];
    while (this.arr.length > 0) {
      sortedArray.push(this.remove());
    }
    return sortedArray;
  }

  search(value) {
    //this. 메소드로 객체 자신의 변수 arr의 길이를 가져와서 길이만큼 반복한다. i++처럼 재귀를 쓰는경우 시간복잡도가 log가 된다
    for (let i = 0; i < this.arr.length; i++) {
      //만약 value가 배열안에 있다면 return
      if (this.arr[i] === value) {
        return i;
      }
    }
    //없으면 null ??????
    return null;
  }

  update(value, newValue) {
    //value 값을 찾는다
    const index = this.search(value);

    //못 찾았다
    if (index === null) {
      return false;
    }

    //찾았다
    this.arr[index] = newValue;
    for (
      let i = Math.floor(this.arr.length / 2 - 1); //riff가 아닌 노드부터
      i >= 0; //root 까지 가서
      i--
    ) {
      //ㄱ그때마다 heapify 한번씩
      //O(1/2n)
      this.#heapify(i); //O(1)
    }
  }

  removeValue(value) {
    //특정 값 삭제
    const index = this.search(value);
    if (index === null) {
      return false;
    }

    //그 인덱스를 없에고
    this.arr.splice(index, 1);
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      //O(1/2)n
      this.#heapify(i); //O(1)
    }
  }
  //자기자식중에 더 큰애보다 내가작으면 바꿔주기
  #heapify(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;

    const bigger =
      //undefinded 방지
      (this.arr[leftIndex] || 0) > (this.arr[rightIndex] || 0)
        ? leftIndex
        : rightIndex;
    console.log(index, this.arr[index], this.arr[bigger]);
    if (this.arr[index] < this.arr[bigger]) {
      const temp = this.arr[index];
      this.arr[index] = this.arr[bigger];
      this.arr[bigger] = temp;
    }
  }
}

const heap = new Heap();
heap.insert(8);
heap.insert(19);

heap.insert(23);
heap.insert(32);

heap.insert(45);
heap.insert(56);
heap.insert(78);
// heap.removeValue(32);
heap.update(23, 90);

console.log(heap.sort());
heap;
