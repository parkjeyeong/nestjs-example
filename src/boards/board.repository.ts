import { DataSource, Repository } from "typeorm";
import { Board } from "./board.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBoardDTO } from "./dto/create-board.dto";
import { BoardStatus } from "./board-status.enum";

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.findOneBy({id});

    if (!found) {
      throw new NotFoundException(`Can't find board with id ${id}`);
    }

    return found;
  }

  async createBoard(createBoardDTO: CreateBoardDTO): Promise<Board> {
    const { title, description } = createBoardDTO;

    const board = this.create({
      title: title,
      description: description,
      status: BoardStatus.PUBLIC
    });

    await this.save(board);

    return board;
  }

  async deleteBoard(id: number): Promise<boolean> {
    const result = await this.delete({id: id});

    if (result.affected === 0) {
      return false;
    } else {
      return true;
    }
  }

  async updateBoardStatus(board: Board): Promise<Board> {
    return await this.save(board);
  }

  async getAllBoards(): Promise<Board[]> {
    return await this.find();
  }
}
