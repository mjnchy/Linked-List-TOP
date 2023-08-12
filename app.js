function createNode (value = null) {
  return {
    value: value,
    nextNode: null,
  };
};

function linkedList () {
  let head = createNode();

  return {
    head: () => head,

    node (value) {
      return {
        new: createNode(value),
        head: this.head(),
        currentNode: head,
      };
    },

    append (value) {
      let node = this.node(value);
      let current = node.currentNode;
      
      if (!current.nextNode) return current.nextNode = node.new;

      while (current.nextNode) {
        current = current.nextNode;

        if (!current.nextNode) {
          current.nextNode = node.new;
          break;
        };
      };

      return node.head;
    },

    insertAt (value, index) {

    },

    prepend (value) {
      let node = this.node(value);

      if (!node.currentNode.nextNode) return node.currentNode.nextNode = node.new
      else {
        node.new.nextNode = node.currentNode.nextNode;
        node.currentNode.nextNode = node.new;
      };
    },

    size () {
      let count = 0;
      let head = this.head();

      while (head.nextNode) {
        count++;
        head = head.nextNode;

        if (!head.nextNode) break;
      };

      return count;
    },

    tail () {
      let wanted = this.head();

      while(wanted.nextNode) {
        wanted = wanted.nextNode;
        if (!wanted.nextNode) break;
      };

      return wanted;
    },

    at (index = 0) {
      if (index < 0 || typeof index !== 'number') return "param can only be a positive integer";
      let wanted = this.head();

      if (index > 0) {
        let count = 0;

        while (wanted.nextNode) {
          wanted = wanted.nextNode;
          count++;

          if (count == index) break;
          if (!wanted.nextNode) return "index does not exist in list"
        };
      };

      return wanted;
    },

    pop () {
      let wanted = this.head();
      if (!head.nextNode) return "empty list, nothing to remove";
      let prevNode;

      while (wanted.nextNode) {
        prevNode = wanted;
        wanted = wanted.nextNode;

        if (!wanted.nextNode) {
          prevNode.nextNode = null;
          delete(wanted);
          break;
        };
      };

      return wanted;
    },

    removeAt (index) {},

    contains (value) {
      if (value == undefined) return "parameter cannot be undefined";

      let wanted = this.head();
      let has = false;

      while (wanted.nextNode) {
        if (wanted.value === value) {
          has = true;
          break;
        };

        if (!wanted.nextNode) break;
        wanted = wanted.nextNode;
      };

      return has;
    },

    find (value) {
      if (value == undefined) return "find requires an arguement";
      let currentNode = this.head();
      
      if (!currentNode.nextNode) return "empty list, nothing to find";
      let index = 0;

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        index++;
        if (currentNode.value == value) break;
        if (!currentNode.nextNode) return "item does not exist in the list";
      };

      return index;
    },

    toString () {
      let string = "null";
      let currentNode = this.head();

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        string += ` -> (${currentNode.value})`;

        if (!currentNode.nextNode) {
          string += " -> null";
          break;
        };
      };

      return string;
    },
  };
};

let list = linkedList();
list.append(5);
list.append(6);
list.append(7);
list.prepend(4);
list.prepend(3);
list.prepend(2);
