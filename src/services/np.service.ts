import { IColumn, ITodo } from "../types/todos.type";
import { Column } from "../models";

export class TodoService {
  static async getAllTodos(id: string) {
    const allTodos = await Column.find(
      {
        author: id,
      },
      "-author"
    );

    return allTodos;
  }

  static async addColumn(desc: string, id: string) {
    const newColumn = await Column.create({
      desc,
      todos: [],
      author: id,
    });

    return newColumn;
  }

  static async addTodo(columnId: string, data: string) {
    const newTodo = await Column.findByIdAndUpdate(
      columnId,
      {
        $push: {
          todos: {
            data,
          },
        },
      },
      {
        new: true,
      }
    );

    return newTodo;
  }

  static async updateColumn(columnId: string, desc: string) {
    const response = await Column.findByIdAndUpdate(
      columnId,
      { desc },
      {
        new: true,
      }
    );
    return response;
  }

  static async updateTodo(todoId: string, data: string) {
    const response: IColumn = await Column.findOneAndUpdate(
      { "todos._id": todoId },
      { $set: { "todos.$.data": data } },
      {
        new: true,
      }
    );
    return response;
  }

  static async updateArrayTodo(columnId: string, data: ITodo[]) {
    const response: ITodo[] = await Column.findByIdAndUpdate(
      columnId,
      { $set: { todos: data } },
      {
        new: true,
      }
    );
    return response;
  }

  static async removeColumn(columnId: string) {
    const columntDeleted = await Column.findByIdAndRemove(columnId);
    return columntDeleted;
  }

  static async removeTodo(columnId: string, todoId: string) {
    const removedTodo = await Column.findByIdAndUpdate(
      columnId,
      {
        $pull: {
          todos: {
            _id: todoId,
          },
        },
      },
      {
        new: true,
      }
    );
    return removedTodo;
  }
}

const todoService = new TodoService();
export default todoService;

// TODO add service here
