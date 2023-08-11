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
      if (index < 0 || typeof index !== 'number') return "Param can only be a positive integer";
      let wanted = this.head();

      if (index > 0) {
        let count = 0;

        while (wanted.nextNode) {
          wanted = wanted.nextNode;
          count++;

          if (count == index) break;
          if (!wanted.nextNode) return "Index does not exist in list"
        };
      };

      return wanted;
    },

    pop () {
      let wanted = this.head();
      if (!head.nextNode) return "Empty list, nothing to remove";
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

    contains (value) {
      if (value == undefined) return "Parameter cannot be undefined";

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
    }
  };
};

let list = linkedList();
list.append(5);
list.append(6);
list.append(7);
list.prepend(4);
list.prepend(3);
list.prepend(2);
