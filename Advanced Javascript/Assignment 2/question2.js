class Queen{
    constructor(x= 0,y=0){
        if(x<0 || x>7 || y<0 || y>7) throw "Invalid position"
        this.position = [x,y];
        console.log("Queen at position ",this.position)
    }
}

class QueenAttack{
    constructor(queen1, queen2){
        if(!(queen1 instanceof Queen && queen2 instanceof Queen)){
            throw "QueenAttack must be initialized with object of type Queen"
        }
        this.queen1 = queen1;
        this.queen2 = queen2;
    }

    canAttack(){
        //Same row
        if(this.queen1.position[0]==this.queen2.position[0]) return true;
        //Same column
        if(this.queen1.position[1]==this.queen2.position[1]) return true;
        //Same left-to-right diagonal
        if(this.queen1.position[0]+this.queen1.position[1]==this.queen2.position[0]+this.queen2.position[1])
            return true;
        //Same right-to-left diagonal
        if(this.queen1.position[0]-this.queen1.position[1]==this.queen2.position[0]-this.queen2.position[1])
            return true;
        return false;
    }

}

console.log("Question 2");

const q1 = new Queen(1,3);
const q2 = new Queen(4,0);

const queens = new QueenAttack(q1, q2);

const result = queens.canAttack();

console.log(result ? "The queens can attack each other" : "The queens can not attack each other");