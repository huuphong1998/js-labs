function createQueue() {
    const queue = [];

    function getFront() {
        return queue[0];
    }

    function getBack() {
         return queue[queue.length - 1];
    }

    function getSize() {
        return queue.length;
    }

    function enqueue(data) {
        queue.push(data);
    }

    function dequeue() {
        return queue.shift();
    }

    return {
        getFront,
        getBack,
        getSize,
        enqueue,
        dequeue,
    };
}

describe('createQueue()', () => {
    it('all in one : P', () => {
        // empty queue
        const queue = createQueue();
        expect(queue.getSize()).toBe(0);
        expect(queue.getFront()).toBe(undefined);
        expect(queue.getBack()).toBe(undefined);

        // queue: 1
        queue.enqueue(1);
        expect(queue.getSize()).toBe(1);
        expect(queue.getFront()).toBe(1);
        expect(queue.getBack()).toBe(1);

        // queue: 2
        queue.enqueue(2);
        expect(queue.getSize()).toBe(2);
        expect(queue.getFront()).toBe(1);
        expect(queue.getBack()).toBe(2);

        // dequeue
        const one = queue.dequeue();
        expect(one).toBe(1);
        expect(queue.getSize()).toBe(1);
        expect(queue.getFront()).toBe(2);
        expect(queue.getBack()).toBe(2);

        // dequeue
        const two = queue.dequeue();
        expect(two).toBe(2);
        expect(queue.getSize()).toBe(0);
        expect(queue.getFront()).toBe(undefined);
        expect(queue.getBack()).toBe(undefined);
    });
});
