let add=document.getElementById("id2")
let del=document.getElementById("id3")
let data=document.getElementById("id1")
class node
{
    constructor(data,nextnode)
    {
        this.data=data
        this.nextnode=nextnode
    }
}
let head=null
let dataVal
function addData()
{
    dataVal=data.value
    data.value=null
    if(dataVal==null)
    {
        return; 
    }
    if(head==null)
    {
        head=new node(dataVal,null)
        showData();
        return
    }
    let temp=head;
    while(temp.nextnode!=null)
    {
        temp=temp.nextnode;
    }
    let newNode=new node(dataVal,null)
    temp.nextnode=newNode;
    showData();
    return
}
function delData()
{
    dataVal=data.value
    data.value=null
    if(head==null)
    {
        alert("Unable to delete, linkedlist is empty")
        return
    }
    let temp=head
    let prev=null
    while(temp!=null && temp.data!=dataVal)
    {
        prev=temp
        temp=temp.nextnode
    }
    if(temp==null)
    {
        alert(`${dataVal} not found, unable to delete`)
        return
    }
    if(temp==head)
    {
        temp=temp.nextnode
        head=temp
        showData()
        return
    }
    prev.nextnode=temp.nextnode
    showData();
    return
}
function showData()
{
    let temp=head
    let element=document.getElementById("main")
    element.innerHTML="Linked list consists of : "
    while(temp!=null)
    {
        element.innerHTML+=`${temp.data}->`
        temp=temp.nextnode
    }
    element.innerHTML+='null'
}
add.onclick=addData
del.onclick=delData