import crypto from 'crypto';

// 블록체인 만들기
// 블록체인이란 말 그대로 여러 개의 블록이 사슬처럼 묶인 것!
// 그 불록 안에는 블록체인으로 보호하고 싶은 데이터가 들어있고, 
// 이 블록은 다른 블록에 묶여있다 (연결고리는 해쉬값)

// 만약 123을 입력하면 언제나 이상한 해쉬값 문자열이 나온다. (어떤 컴퓨터에서 생성해도 똑같은 문자열)
// 1234로 값을 바꾸면 해쉬값또한 완전히 다른 문자열값으로 바뀐다.
// 데이터가 바뀌지 않으면 해쉬값도 바뀌지 않음 -> 이게 블록체인에서 블록을 보호하는 방법
// 이걸 이용하면 블록체인의 블록 정보가 수정되지 않았다는 걸 확인할 수 있다.

interface BlockShape {
  hash: string;
  // 이전 해쉬값
  prevHash: string;
  // 블록의 위치를 표시해주는 숫자
  height: number;
  // 블록이 보호할 데이터
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  
  constructor(
    public prevHash: string,
    public height: number,
    public data: string,
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }


  static calculateHash(prevHash:string, height:number, data:string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest('hex');
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return ""
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data:string) {
    const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth Block");

console.log(blockchain.getBlocks());