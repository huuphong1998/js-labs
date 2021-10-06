// Setup linked list
// - createLinkedList()
//      + insertHead
//      + printList
// Setup common methods for linked list
// - getHead()
// - getTail()
// - getSize
// - findIndexByData()
// - findWithCallback()

function createLinkedList() {
    let head = null;

    function getHead() {
        return head;
    }

    function getTail() {
        if (head == null) return null;

        let tail = head;
        while (tail.next != null) {
            tail = tail.next;
        }

        return tail;
    }

    function getSize() {
        if (head == null) return 0;

        let current = head;
        let count = 0;
        while (current != null) {
            count++;
            current = current.next;
        }

        return count;
    }

    function findIndexByData(data) {
        if (head == null) return -1;

        let current = head;
        let i = 0;
        while (current != null) {
            if (current.data === data) return i;

            i++;
            current = current.next;
        }

        return -1;
    }

    function findWithCallback(callback) {
        if (head == null) return undefined;

        let current = head;
        let i = 0;
        while (current != null) {
            if (callback(current.data, i)) return current.data;

            i++;
            current = current.next;
        }

        return undefined;
    }

    function insertHead(newData) {
        const newHead = {
            data: newData,
            next: null,
        };

        if (head == null) {
            head = newHead;
        } else {
            newHead.next = head;
            head = newHead;
        }

        return head;
    }

    function insertTail(newData) {
        const newTail = {
            data: newData,
            next: null,
        };

        if (head == null) {
            head = newTail;
        } else {
            const tail = getTail();
            tail.next = newTail;
        }

        return head;
    }

    function insertBeforePosition(newData, position) {
        if (position <= 0 || head == null) return insertHead(newData);

        let prev = head;
        let curr = head;
        let i = 0;

        while (curr != null && i < position) {
            prev = curr;
            curr = curr.next;
            i++;
        }
        const newNode = {
            data: newData,
            next: curr,
        };
        prev.next = newNode;

        return head;
    }

    function printList() {
        if (head == null) return;

        let current = head;
        while (current != null) {
            console.log(current.data);

            current = current.next;
        }
    }

    function removeHead() {
        if (head != null) head = head.next;

        return head;
    }

    function removeTail() {
        if (head == null) return null;

        if (head.next == null) {
            head = null;
            return head;
        }

        let secondLast = head;
        while (secondLast.next.next != null) {
            secondLast = secondLast.next;
        }
        secondLast.next = null;

        return head;
    }

    function removeAtPosition(position) {
        if (position <= 0 || head == null) return removeHead();

        if (head.next == null) {
            head = null;
            return head;
        }

        let prev = head;
        let curr = head;
        let i = 0;
        while (curr.next != null && i < position) {
            prev = curr;
            curr = curr.next;
            i++;
        }

        prev.next = curr.next;
        return head;
    }

    function some(isValidFn) {
        if (head == null) return false;

        let current = head;
        while (current != null) {
            if (isValidFn(current.data)) return true;

            current = current.next;
        }

        return false;
    }

    function every(isValidFn) {
        if (head == null) return false;

        let current = head;
        while (current != null) {
            if (!isValidFn(current.data)) return false;

            current = current.next;
        }

        return true;
    }

    return {
        getHead,
        getTail,
        getSize,
        findIndexByData,
        findWithCallback,
        insertHead,
        printList,
        insertTail,
        insertBeforePosition,
        removeHead,
        removeTail,
        removeAtPosition,
        some,
        every,
    };
}

const numberLinkedList = createLinkedList();

numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
// numberLinkedList.insertHead(3);
numberLinkedList.insertTail(6);
numberLinkedList.insertTail(7);
// numberLinkedList.removeTail();
// numberLinkedList.removeAtPosition(3);

// numberLinkedList.insertBeforePosition(8, 9);
numberLinkedList.printList();
// console.log(numberLinkedList.some((x) => x % 2 === 0));

// console.log(numberLinkedList.some((x) => x > 5));
// console.log(numberLinkedList.findIndexByData(5)); // --> 1
// console.log(numberLinkedList.findIndexByData(6)); // --> -1

// console.log(numberLinkedList.findWithCallback((x) => x % 2 === 0)); // 4
// console.log(numberLinkedList.findWithCallback((x) => x > 5)); // --> undefined

console.log('Head', numberLinkedList.getHead());
// console.log('Tail', numberLinkedList.getTail());
console.log('Size', numberLinkedList.getSize());
