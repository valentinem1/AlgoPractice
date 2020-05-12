// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    // create the node with some data
    // and points to null as the next node when initialized
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

// const node1 = new Node('123', null)
class LinkedList {
    // sets the list with a head of null since it is empty when created
    constructor(){
        this.head = null
    }
    
    insertFirst(data) {
        // create a new node
        // assigns it as the new head pointing to the old head
        // this allows to insert a Node inside our list from the beginning of the list
        this.head = new Node(data, this.head)
    }

    size() {
        let count = 0;
        let node = this.head;

        // check while node !== null keep iterating through the list
        // and increment the counter by 1
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        // check if the next node equal null 
        // if yes it means it is the last node so return it
        // otherwise increment node to the next node until finding the last one
        while(node){
            if(node.next === null){
                return node;
            }else{
                node = node.next
            }
        }
    }
    
}

module.exports = { Node, LinkedList };
