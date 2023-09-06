// Stack 클래스는 스택 자료 구조를 구현합니다.
class Stack {
    arr = [];

    // 스택에 요소를 추가하는 메서드
    push(value) {
        // 배열의 끝에 요소를 추가하고, 새로운 스택의 길이를 반환합니다.
        return this.arr.push(value);
    }

    // 스택에서 요소를 제거하고 반환하는 메서드
    pop() {
        // 배열의 마지막 요소를 제거하고 반환합니다.
        return this.arr.pop();
    }

    // 스택의 맨 위에 있는 요소를 엿보는 메서드
    top() {
        // 배열의 마지막 요소를 반환합니다.
        return this.arr.at(0);
    }

    // 스택의 길이를 반환하는 getter 메서드
    get length() {
        return this.arr.length;
    }
}

// 스택 객체를 생성합니다.
const stack = new Stack();

// 스택에 요소를 추가합니다.
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(2);
stack.push(4);

// 스택의 길이를 출력합니다.
console.log(stack.length); // 5

// 스택에서 요소를 제거하고 출력합니다.
stack.pop(); // 4
stack.pop(); // 2
