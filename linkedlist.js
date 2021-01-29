/*class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  // Create/Get/Remove Nodes From Linked List
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Insert first node
    insertFirst(data) {
      this.head = new Node(data, this.head);
      this.size++;
    }
  
    // Insert last node
    insertLast(data) {
      let node = new Node(data);
      let current;
  
      // If empty, make head
      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = node;
      }
  
      this.size++;
    }
  
    // Insert at index
    insertAt(data, index) {
      //  If index is out of range
      if (index > 0 && index > this.size) {
        return;
      }
  
      // If first index
      if (index === 0) {
        this.insertFirst(data);
        return;
      }
  
      const node = new Node(data);
      let current, previous;
  
      // Set current to first
      current = this.head;
      let count = 0;
  
      while (count < index) {
        previous = current; // Node before index
        count++;
        current = current.next; // Node after index
      }
  
      node.next = current;
      previous.next = node;
  
      this.size++;
    }
  
    // Get at index
    getAt(index) {
      let current = this.head;
      let count = 0;
  
      while (current) {
        if (count == index) {
          console.log(current.data);
        }
        count++;
        current = current.next;
      }
  
      return null;
    }
  
    // Remove at index
    removeAt(index) {
      if (index > 0 && index > this.size) {
        return;
      }
  
      let current = this.head;
      let previous;
      let count = 0;
  
      // Remove first
      if (index === 0) {
        this.head = current.next;
      } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
  
        previous.next = current.next;
      }
  
      this.size--;
    }
  
    // Clear list
    clearList() {
      this.head = null;
      this.size = 0;
    }
  
    // Print list data
    printListData() {
      let current = this.head;
  
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  */
  //const ll = new LinkedList();
  //var count=0;
  //var flag=0;

  function sc(a,b){
    if(a=="y" && b=="n"){
        return 3;}
    else if(a=="n" && b=="y"){
        return 3;}
    else{
        return 6;}
  }
  function score(a){
    if(a=="healthcare"){
        return 10;}
    else if(a=="public-service"){
        return 5;}
    else if(a=="it-soft"){
        return 4;}
    else{
        return 3;}
   }

  /*var a=[{"name":"harsh","occp":"healthcare","covid":"n","resp":"n","diab":"y"},
   {"name":"jayesh","occp":"public-service","covid":"y","resp":"n","diab":"n"},
   {"name":"raj","occp":"student","covid":"n","resp":"n","diab":"y"},
   {"name":"jatin","occp":"it-soft","covid":"y","resp":"n","diab":"y"}];*/

function calculator(name,occp,resp,diab){
    //flag=0;
    //count=0;
    var half = sc(diab,resp);
    var full = score(occp);
    var b = full*half;
    /*let current = ll.head;
    if(current==null){
        ll.insertFirst(b);
    }
    else{
    while (current) {
        if(b>current.data){
            ll.insertAt(b,count);
            flag=1;
        }
        current = current.next;
        count=count+1;
        }
    if(flag==0){
        ll.insertLast(b);
    }
   }*/
   return(b);
}
  // ll.getAt(2);
module.exports={calculator,score,sc};
  //ll.printListData();
