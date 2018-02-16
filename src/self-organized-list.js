class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        //
        var tempNode = new Node(data);
        tempNode.next = null;
        if(this.head!=null)
        {
            tempNode.prev = this.tail;
            this.tail.next = tempNode;
            this.tail = tempNode;
        }
        else
        {
            //
            tempNode.prev = null;
            //
            this.head = this.tail = tempNode;
        }

    }

    size() {
        var tempNode = new Node(null);
        var listSize = 0;
        tempNode = this.head;
        while(tempNode!=null)
        {
            listSize++;
            tempNode = tempNode.next;
        }
        return listSize;
    }

    at(index) {
        if(index < 0 || index >= this.size() || this.size()==0)
            return null;
        if(index == 0)
        {
            return this.head.data;
        }
        else
        {
            var tempNode = new Node(null);
            tempNode = this.head;
            for( var i = 0; i < index; i++)
            {
                tempNode = tempNode.next;
            }
            return tempNode.data;
        }
    }

    findNode(data) {
        var tempNode = new Node(null);
        tempNode = this.head;
        while(tempNode != null)
        {
            if(tempNode.data == data)
                return tempNode;
            tempNode = tempNode.next;
        }
        return null;
    }

    toArray() {
        var arr = [];
        var tempNode = new Node(null);
        tempNode = this.head;
        while(tempNode != null)
        {
            arr.push(tempNode.data);
            tempNode = tempNode.next;
        }
        return arr;
    }

    removeAt(index) {
        if(index < 0 || index >= this.size())
            return null;
        if(index == 0)
        {
            if(this.head.next == null)
            {
                this.head = null;
                this.tail = null;
            }
            else
            {
                this.head.next.prev = null;
                this.head = this.head.next;
            }
        }
        else if(index == this.size() - 1)
        {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }
        else
        {
            var tempNode = new Node(null);
            tempNode = this.head;
            for( var i = 0; i < index; i++)
            {
                tempNode = tempNode.next;
            }
            tempNode.next.prev = tempNode.prev;
            tempNode.prev.next = tempNode.next;
        }

    }

    moveToFront(node) {
        var tempNode = node;
        if(tempNode == this.head)
        {
            //???
        }
        else if(tempNode == this.tail)
        {
            tempNode.prev.next = null;
            this.tail = tempNode.prev;

            tempNode.next = this.head;
            this.head.prev = tempNode;
            this.head = tempNode;
            this.head.prev = null;
        }
        else
        {
            tempNode.next.prev = tempNode.prev;
            tempNode.prev.next = tempNode.next;
            tempNode.prev == null;
            tempNode.next = this.head;
            this.head.prev = tempNode;
            this.head = tempNode
        }
    }

    reorganize(data) {
        if(this.findNode(data) == null)
        {
            return false;
        }
        else 
        {
            this.moveToFront(this.findNode(data));
            return true;
        }
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
