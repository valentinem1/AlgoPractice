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
        if(!this.head){
            return null;
        }
        let node = this.head;
        // check if the next node equal null 
        // if yes it means it is the last node so return it
        // otherwise increment node to the next node until finding the last one
        while(node){
            if(node.next === null){
                return node;
            }else{
                node = node.next;
            }
        }
    }

    clear() {
        return this.head = null;
    }

    removeFirst() {
        return this.head = this.head.next;
    }
    
    removeLast() {
        if(this.head === null){
            return;
        }
        
        if(this.head.next === null){
            return this.head = null;
        }
        
        let previous = this.head;
        let node = this.head.next;
        
        while(node.next){
            previous = node
            node = node.next
        }
        previous.next = null

        // first try
        // check as long as node exist
        // check if node.next equals to null
        // if yes reset previous.next to null
        // and reset node to null
        // move previous to the next node
        // and move node to the next node
        // while(node){
        //     if(node.next === null){
        //         previous.next = null
        //         node = null
        //     }else{
        //         previous = node
        //         node = node.next
        //     }
        // }
    }

    insertLast(data) {
        const tail = this.getLast();
        if(tail){
            return tail.next = new Node(data);
        }else{
            return this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while(node){
            if(index === counter){
                return node;
            }
            node = node.next;
            counter++;
        }
        // if the index is bigger than the list it exit the while loop and return null since no node has been found
        return null;

         // could work for checking if the index is bigger than the list
        // will loop through the list when not needed since size() already loop through the list
        // if(index > this.size()){
        //     return null;
        // }
    }

    removeAt(index) {
        if(this.head === null){
            return;
        }
        
        if(index === 0){
            return this.head = this.head.next;
        }

        if(this.getAt(index) === null){
            return;
        }
        
        const previous = this.getAt(index - 1);
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if(!this.head){
            return this.head = new Node(data);
        }

        if(index === 0){
            return this.head = new Node(data, this.head);
        }

        // if(!this.getAt(index)){
        //     return this.getLast().next = new Node(data);
        // }

        // to get the previous node from the index use getAt(index - 1)
        // if the index is out of bound using getLast() and assigning it to previous allows to find the last node
        // and set the next of the node to the previous.next which in that case is null since it's the last one.
        let previous = this.getAt(index-1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0 ;
        while(node){
            // passes the inner function
            // each iteration the node and counter will get incremented
            // this enables to create the forEach() loop which takes a call back function with the node and an index, 
            // the counter keeps track of the index for each iteration in that situation
            fn(node, counter)
            counter++;
            node = node.next;
        }
    }
    
}

module.exports = { Node, LinkedList };
