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

  #reheapDown(index) {
    //루트까지 반복적으로 비교 내가 루트보다 작으면 부모자리랑 바꿈

    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      console.log('err01');

      //만약 루트의 값보다 자식의 값이 더 작다면
      if (this.arr[index] < this.arr[parentIndex]) {
        console.log('err02');

        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;

        this.#reheapDown(parentIndex);
      }
    }
  }

  insert(value) {
    //재귀사용(logn의 경우)
    const index = this.arr.length;
    this.arr[index] = value;
    this.#reheapDown(index);
  }
  // remove() {
  //   if()
  //   const root = this.arr[0];
  //   this.#reheapDown();

  //   //root만 remove
  // }
  search(value) {
    //this. 메소드로 객체 자신의 변수 arr의 길이를 가져와서 길이만큼 반복한다. i++처럼 재귀를 쓰는경우 시간복잡도가 log가 된다
    for (let i = 0; i < this.arr.length; i++) {
      //만약 value가 배열안에 있다면 return
      if (arr[i] === value) {
        return i;
      }
    }
    //없으면 null ??????
    return null;
  }
}

const heap = new Heap();
heap.insert(8);
heap.insert(19);
console.log('err03');

heap.insert(23);
heap.insert(32);

heap.insert(78);
heap.insert(56);
heap.insert(45);
heap;
