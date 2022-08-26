class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    // insert last node
    insertLast(data){
        let node = new Node(data);
        let current;

        // if empty node head
        if(!this.head){
            this.head = node;
        }
        else{
            current= this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;


    }
    // insert at index
insertAtIndex(data,index){
    // if index out of range
    if(index > 0 && index > this.size){
        return;
    }
    // if first index
    if(index === 0){
        this.head = new Node(data,this.head)
        return;
    }
    const node = new Node(data);
    let current,previous;
    // Set current to first
    // let count = 0;
    // while(count < index){
    //     previous = current;// node before the index
    //     count++;
    //     current = current.next// node after index
    // }
    // node.next = current;
    // previous.next = node;
    // this.size++;

    
}
    // print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            
            current = current.next;
          
        }
        console.log(`size of List ${this.size}`)
       // console.log(`next value ${next}`)
    }
}
const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertLast(500);
ll.insertAtIndex(600,3)
ll.insertAtIndex(10,1)
ll.printListData();
