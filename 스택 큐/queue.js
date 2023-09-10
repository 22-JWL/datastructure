class Queue {
    arr = [];
// 큐에 요소를 추가하는 메서드
    enqueue(value){
        return this.arr.push(value);
        //push 후의 길이를 리턴 1,2,3,4,5
        // 배열 끝에 요소를 추가하고, 새로운 길이를 반환합니다.
    }
// 큐에서 요소를 제거하고 반환하는 메서드
    dequeue() {
        // 배열의 첫 번째 요소를 제거하고 반환합니다.
        return this.arr.shift();
    }

    //슬쩍 엿보다// 큐의 가장 앞에 있는 요소를 엿보는 메서드
    peek() {
        // 배열의 첫 번째 요소를 반환합니다.
        return this.arr.at(0);
    }
    // 큐의 가장 끝에 있는 요소를 엿보는 메서드
    top(){
        // 배열의 마지막 요소를 반환합니다.
        return this.arr.at(-1)
    }
    //getter
    get length(){
        // 큐의 길이를 반환하는 getter 메서드
        return this.arr.length;
    }
}
// 큐 객체를 생성합니다.
const queue = new Queue();

// 큐에 요소를 추가합니다.
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(4);

// 큐의 길이를 출력합니다.
console.log(queue.length); // 5

// 큐에서 요소를 제거하고 출력합니다.
queue.dequeue(); // 1

// 큐의 가장 앞에 있는 요소를 출력합니다.
console.log(queue.peek()); // 3
