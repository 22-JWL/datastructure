// Node 클래스는 트리의 각 노드를 나타냅니다.
class Node {
    // children 배열은 현재 노드의 자식 노드들을 저장합니다.
    children = [];

    constructor(value) {
        // 현재 노드의 값(value)을 설정합니다.
        this.value = value;
    }

    // 새로운 자식 노드를 현재 노드에 추가하는 메서드입니다.
    push(value) {
        this.children.push(new Node(value));
    }
}

// Tree 클래스는 트리 자료 구조의 루트 노드를 생성합니다.
class Tree {
    constructor(value) {
        // 주어진 값으로 루트 노드를 생성합니다.
        this.root = new Node(value);
    }
}

// 트리를 생성하고 값을 추가합니다.
const tree = new Tree(50); // 루트 노드의 값은 50으로 설정됩니다.
tree.root.push(25); // 루트 노드의 자식으로 25를 추가합니다.
tree.root.push(75); // 루트 노드의 자식으로 75를 추가합니다.

// 25 노드의 자식 노드들을 추가합니다.
tree.root.children[0].push(12);
tree.root.children[0].push(37);
tree.root.children[0].push(62);
tree.root.children[0].push(87);


///constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다.